import { useRef, useState, useEffect } from "react";

const useAudio = () => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [isSongError, setSongError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current || !currentSong) return;


    if (audioRef.current) {
      try {
        audioRef.current.src = encodeURI(currentSong); // ✅ directly set
        audioRef.current.load();
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true); // ✅ mark playing once play resolves
            setSongError("");
          })
          .catch(() => {
            setSongError("Failed to play");
          });
      } catch (err) {
        setSongError("Playback error");
      }
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return {
    audioRef,
    currentSong,
    setCurrentSong,
    setCurrentImg,
    currentImg,
    isSongError,
    isPlaying,
    togglePlayPause,
    setIsPlaying,
  };
};

export default useAudio;
