import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRecentContent = () => {
  const { data, error, isError } = useQuery({
    queryKey: ["useRecentContent", "/recentContent"],
    queryFn: () => axios.get("/recentContent").then((res) => res.data),
  });

  useEffect(() => {
    if (isError) alert(error);
  }, [error, isError]);

  return { data };
};

export default useRecentContent;
