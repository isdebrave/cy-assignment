// import axios from "axios";
// import { useEffect, useState } from "react";

// import { recentContentType } from "../types/recentContentType";

// const useRecentContent = () => {
//   const [recentContent, setRecentContent] = useState<recentContentType[]>([]);

//   useEffect(() => {
//     axios
//       .get("/recentContent")
//       .then((response) => setRecentContent(response.data))
//       .catch((error) => alert(error.response.data));
//   }, []);

//   return recentContent;
// };

// export default useRecentContent;

import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useRecentContent = () => {
  const { data, error, isError } = useQuery({
    queryKey: ["useRecentContent", "/recentContent"],
    queryFn: () => axios.get("/recentContent").then((res) => res.data),
  });

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => axios.post("/recentContent").then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useRecentContent"] });
    },
    onError: (error: any) => alert(error.response.data),
  });

  useEffect(() => {
    if (isError) alert(error);
  }, [error, isError]);

  return { data, mutate: mutateAsync };
};

export default useRecentContent;
