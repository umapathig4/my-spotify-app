import { createContext, useContext, useState } from "react";

const LyricsContext = createContext();

export const LyricsProvider = ({ children }) => {
  const [isLiricOpen, setIsLyricOpen] = useState(false);

  return (
    <LyricsContext.Provider value={{ isLiricOpen, setIsLyricOpen }}>
      {children}
    </LyricsContext.Provider>
  );
};

export const useLyricsContext = () => useContext(LyricsContext);
