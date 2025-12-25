import { createContext, useContext, useState } from "react";

const PlayingViewContext = createContext();

export const PlayingViewProvider = ({ children }) => {
  const [isPlayingView, setIsPlayingView] = useState(false);

  return (
    <PlayingViewContext.Provider value={{ isPlayingView, setIsPlayingView }}>
      {children}
    </PlayingViewContext.Provider>
  );
};

export const usePlayingViewContext = () => useContext(PlayingViewContext);
