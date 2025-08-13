import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url, setter) => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) {
      setLoading(true);
      return;
    }

    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setter(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [url]);

  return { isError, isLoading };
};

export default useFetchData;
