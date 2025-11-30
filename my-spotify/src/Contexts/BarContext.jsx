import React, { createContext, useContext } from "react";
import { useState } from "react";

const BarContext = createContext();

export const BarProvider = ({ children }) => {
  const [isBigSidebarOpen, setBigSidebarOpen] = useState(true);
  const [isPlayingbarOpen, setPlayingbarOpen] = useState(true);

  const handlePlayingbarOpen = () => {
    setPlayingbarOpen((prev) => !prev);
  };

  return (
    <BarContext.Provider
      value={{
        isBigSidebarOpen,
        setBigSidebarOpen,
        isPlayingbarOpen,
        handlePlayingbarOpen,
      }}
    >
      {children}
    </BarContext.Provider>
  );
};

export const useBarContext = () => useContext(BarContext);
