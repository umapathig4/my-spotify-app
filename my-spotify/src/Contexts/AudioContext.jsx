import { createContext, useContext } from "react";
import useAudio from "../CustomHooks/audio";

const AudioContext = createContext();

export const useAudioContext = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const audio = useAudio(); // only ONE instance lives here

  return (
    <AudioContext.Provider value={audio}>
      {children}
    </AudioContext.Provider>
  );
};
