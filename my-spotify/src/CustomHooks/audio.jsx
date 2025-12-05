import { useRef, useState, useEffect } from "react";

const useAudio = () => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [isSongError, setSongError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffledList, setShuffledList] = useState([]);
  const [isShuffled, setIsShuffled] = useState(false);

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

  const handleNextSong = (playlist) => {
    const activeList = isShuffled ? shuffledList : playlist;

    if (!activeList.length || !currentSong) return;

    const index = activeList.findIndex((item) => item.song === currentSong);

    if (index === -1) return;

    const nextIndex = (index + 1) % activeList.length;
    const nextItem = activeList[nextIndex];
    setCurrentSong(nextItem.song);
    setCurrentImg(nextItem.img);
  };

  const handlePrevSong = (playlist) => {
    const activeList = isShuffled ? shuffledList : playlist;
    if (!activeList.length || !currentSong) return;

    const index = activeList.findIndex((item) => item.song === currentSong);
    if (index === -1) return;

    const prevIndex = (index - 1 + activeList.length) % activeList.length;
    const prevItem = activeList[prevIndex];
    setCurrentSong(prevItem.song);
    setCurrentImg(prevItem.img);
  };

  const shuffleArray = (list) => {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const shufflePlay = (playlist) => {
    if (playlist.length === 0) return;

    const shuffled = shuffleArray(playlist);
    setShuffledList(shuffled);
    setIsShuffled(true);

    setCurrentSong(shuffled[0].song);
    setCurrentImg(shuffled[0].img);
  };

  const repeatSong = () => {
    if (!currentSong || !audioRef.current) return;

    audioRef.current.currentTime = 0; // Restart from beginning
    audioRef.current.play(); // Play again
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
    handleNextSong,
    handlePrevSong,
    shufflePlay,
    repeatSong,
  };
};

export default useAudio;
