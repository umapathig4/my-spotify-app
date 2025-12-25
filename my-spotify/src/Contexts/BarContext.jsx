import React, { createContext, useContext } from "react";
import { useState } from "react";

const BarContext = createContext();

export const BarProvider = ({ children }) => {
  const [isBigSidebarOpen, setBigSidebarOpen] = useState(true);
  const [isSmallSidebarOpen, setSmallSidebarOpen] = useState(false);
  const [isPlayingbarOpen, setPlayingbarOpen] = useState(false);

  const handlePlayingbarOpen = () => {
    setPlayingbarOpen((prev) => !prev);
  };

  return (
    <BarContext.Provider
      value={{
        isBigSidebarOpen,
        setBigSidebarOpen,
        isSmallSidebarOpen,
        setSmallSidebarOpen,
        isPlayingbarOpen,
        setPlayingbarOpen,
        handlePlayingbarOpen,
      }}
    >
      {children}
    </BarContext.Provider>
  );
};

export const useBarContext = () => useContext(BarContext);
