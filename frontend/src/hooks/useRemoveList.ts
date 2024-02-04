import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useRemoveList = () => {
  const navigate = useNavigate();

  const { data, error, isError } = useQuery({
    queryKey: ["useRemoveList", "/remove"],
    queryFn: () => axios.get("/remove").then((res) => res.data),
  });

  useEffect(() => {
    if (isError) alert(error);
  }, [error, isError]);

  const queryClient = useQueryClient();
  const { mutateAsync: postRemoveListMutate } = useMutation({
    mutationFn: (id: string) =>
      axios.post("/remove", { id }).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useRemoveList"] });
      queryClient.invalidateQueries({ queryKey: ["useContent"] });
      queryClient.invalidateQueries({ queryKey: ["usePlayList"] });
      queryClient.invalidateQueries({ queryKey: ["useRecentContent"] });
    },
    onError: (error: any) => {
      alert(error.response.data);
      navigate("/auth/login");
    },
  });

  const { mutateAsync: removeRemoveListMutate } = useMutation({
    mutationFn: (removeListId: string[]) =>
      axios
        .delete("/remove", { data: { removeListId } })
        .then((res) => res.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["useRemoveList"] }),
    onError: (error: any) => {
      alert(error.response.data);
      navigate("/auth/login");
    },
  });

  return { data, postRemoveListMutate, removeRemoveListMutate };
};

export default useRemoveList;
