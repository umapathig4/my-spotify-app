import { createContext, useContext, useState } from "react";

const ActiveSongBgContext = createContext();

export const ActiveSongBgProvider = ({ children }) => {
  const [isBgColor, setBgColor] = useState("");
  return (
    <ActiveSongBgContext.Provider value={{ isBgColor, setBgColor }}>
      {children}
    </ActiveSongBgContext.Provider>
  );
};

export const useActiveSongBgContext = () => useContext(ActiveSongBgContext);
