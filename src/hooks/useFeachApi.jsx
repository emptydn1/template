import { useEffect, useState } from "react";
import axios from "../../axios/axios";

const useFetchApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        if (!didCancel) {
          const result = await axios(url);
          if (result.data.length) setData(result.data);
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true);
        }
      }

      setIsLoading(false);
    };
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useFetchApi;
