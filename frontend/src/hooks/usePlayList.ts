import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

const usePlayList = () => {
  const { data, error, isError } = useQuery({
    queryKey: ["usePlayList", "/playList"],
    queryFn: () => axios.get("/playList").then((res) => res.data),
  });

  useEffect(() => {
    if (isError) alert(error);
  }, [error, isError]);

  const queryClient = useQueryClient();
  const { mutateAsync: postPlayListMutate } = useMutation({
    mutationFn: (id: string) =>
      axios.post("/playList", { id }).then((res) => res.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["usePlayList"] }),
    onError: (error: any) => alert(error.response.data),
  });

  const { mutateAsync: removePlayListMutate } = useMutation({
    mutationFn: (id: string) =>
      axios.delete("/playList", { data: { id } }).then((res) => res.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["usePlayList"] }),
    onError: (error: any) => alert(error.response.data),
  });

  return { data, postPlayListMutate, removePlayListMutate };
};

export default usePlayList;
