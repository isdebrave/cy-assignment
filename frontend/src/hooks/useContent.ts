import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const useContent = () => {
  const { data, error, isError } = useQuery({
    queryKey: ["useContent", "/content"],
    queryFn: () => axios.get("/content").then((res) => res.data),
  });

  useEffect(() => {
    if (isError) alert(error);
  }, [error, isError]);

  return { data };
};

export default useContent;
