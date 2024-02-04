import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useMedia = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutateAsync: postPlayListMutate } = useMutation({
    mutationFn: (formData: FormData) =>
      axios.post("/media", formData).then((res) => res.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["useContent"] }),
    onError: (error: any) => {
      alert(error.response.data);
      navigate("/auth/login");
    },
  });

  return { postPlayListMutate };
};

export default useMedia;
