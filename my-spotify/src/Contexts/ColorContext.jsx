import { createContext, useContext, useRef, useState } from "react";
import getDominantColor from "../CustomHooks/getDominantColor";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const imgRefs = useRef([]);
  const [isColor, setColor] = useState("");

  const handleMouseEnter = (index) => {
    const img = imgRefs.current[index];
    if (!img) return;

    // Make sure image is loaded
    if (img.complete) {
      const color = getDominantColor(img);
      setColor(color);
      console.log(`Dominant color of image ${index}:`, color);
    } else {
      img.onload = () => {
        const color = getDominantColor(img);
        setColor(color);
        console.log(`Dominant color of image ${index}:`, color);
      };
    }
  };

  const handleMouseLeave = () => {
    setColor("");
  }


  return (
    <ColorContext.Provider value={{ isColor, imgRefs, handleMouseEnter, handleMouseLeave }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
