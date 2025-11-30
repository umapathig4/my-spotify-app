import { useState } from "react";
import { useEffect } from "react";
import { useColor } from "../Contexts/ColorContext";

const useColorChange = () => {

   const { isColor } = useColor(); 

  const [isColorChange, setColorChange] = useState("");

  useEffect(() => {
    if (isColor) {
      setColorChange(isColor);
    } 
  }, [isColor]);

  const topGradientColor = {
    background: isColorChange
      ? `linear-gradient(to bottom, #282828 0%, ${isColorChange} 0%, black 60%)`
      : "black",
  };

  return topGradientColor;
};

export default useColorChange;
