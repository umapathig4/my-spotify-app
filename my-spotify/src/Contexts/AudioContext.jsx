import { createContext, useContext } from "react";
import useAudio from "../CustomHooks/audio";
import { useState } from "react";

const AudioContext = createContext();

export const useAudioContext = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const audio = useAudio(); // only ONE instance lives here
  const [playlist, setPlaylist] = useState([]);

  return (
    <AudioContext.Provider value={{ ...audio, playlist, setPlaylist}}>
      {children}
    </AudioContext.Provider>
  );
};
 