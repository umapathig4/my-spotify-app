import { useEffect, useState } from "react";

const useBgDynamic = ({ isActiveTab }) => {
  const [isTopbgColor, setTopbgColor] = useState("");

  useEffect(() => {
    if (isActiveTab) {
      setTopbgColor("#202020");
    }
  }, [isActiveTab]);

  const topGradientStyle = {
    background: isTopbgColor
      ? `linear-gradient(to bottom, #282828 0%, ${isTopbgColor} 10%, black 100%)`
      : "black",
  };

  return topGradientStyle;
};

export default useBgDynamic;
