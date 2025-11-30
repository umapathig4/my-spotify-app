import { useEffect, useState } from "react";

const useBlink = (intervalTime) => {
  const [isBlink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return isBlink;
};

export default useBlink;
