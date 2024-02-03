import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

const useMedia = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: postPlayListMutate } = useMutation({
    mutationFn: (formData: FormData) =>
      axios.post("/media", formData).then((res) => res.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["useContent"] }),
    onError: (error: any) => alert(error.response.data),
  });

  return { postPlayListMutate };
};

export default useMedia;
