import {
  Shuffle,
  SkipBack,
  Pause,
  SkipForward,
  Repeat,
  Play,
  CirclePause,
  CirclePlay,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import audio from "../../CustomHooks/audio";
import useAudio from "../../CustomHooks/audio";
import { useAudioContext } from "../../Contexts/AudioContext";

const FooterPlayer = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // const audioRef = useRef(null);

  const {
    audioRef,
    isSongError,
    togglePlayPause,
    isPlaying,
    currentSong,
    setIsPlaying,
  } = useAudioContext();

  useEffect(() => {
    if (currentSong) {
      const audioTime = audioRef.current;

      if (duration === currentTime) {
        audioTime.pause();
        setIsPlaying(false);
      }
    }
  }, [duration, currentTime]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <div className="w-[600px] mx-[auto]  text-center">
        <div className="w-[200px] mx-[auto] mt-[16px] mb-[7px] text-center">
          <div className="flex items-center justify-between gap-x-2 text-white">
            <div className="flex items-center gap-x-5">
              <Shuffle
                className={`${
                  currentSong ? "text-white" : "text-gray-500"
                } h-[18px]`}
              />
              <SkipBack
                className={`${
                  currentSong ? "text-white" : "text-gray-500"
                } h-[18px]`}
              />
            </div>
            <div onClick={togglePlayPause}>
              {isPlaying ? (
                <CirclePause
                  className={`${
                    currentSong ? "text-white" : "text-gray-500"
                  } h-[30px] w-[30px]`}
                />
              ) : (
                <CirclePlay
                  className={`${
                    currentSong ? "text-white" : "text-gray-500"
                  } h-[30px] w-[30px]`}
                />
              )}
            </div>
            <div className="flex items-center gap-x-5">
              <SkipForward
                className={`${
                  currentSong ? "text-white" : "text-gray-500"
                } h-[18px]`}
              />
              <Repeat
                className={`${
                  currentSong ? "text-white" : "text-gray-500"
                } h-[18px]`}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[10px] align-middle">
          <div className="text-white">
            <h6
              className={`${
                currentSong ? "text-white" : "text-gray-500"
              } text-[10px]`}
            >
              {formatTime(currentTime)}
            </h6>
          </div>

          <audio ref={audioRef} preload="metadata" />

          <input
            className="
    w-full h-[4px] appearance-none
    bg-[#545454] rounded-lg
    relative overflow-hidden
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-0 [&::-webkit-slider-thumb]:w-0
    [&::-webkit-slider-thumb]:bg-transparent
    [&::-webkit-slider-runnable-track]:bg-transparent
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:h-0 [&::-moz-range-thumb]:w-0
    [&::-moz-range-thumb]:bg-transparent
    [&::-moz-range-track]:bg-transparent
    before:content-[''] before:absolute before:h-full before:bg-white before:rounded-lg
    before:z-10 before:top-0 before:left-0 cursor-pointer
  "
            style={{
              "--progress-width": `${(currentTime / duration) * 100}%`,
            }}
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            step="0.1"
            onChange={handleProgressChange}
          />
          <div className="text-white">
            <h6
              className={`${
                currentSong ? "text-white" : "text-gray-500"
              } text-[10px]`}
            >
              {formatTime(duration)}
            </h6>
          </div>
        </div>
        {isSongError ? <p className="text-red-500">{isSongError}</p> : null}
      </div>
    </div>
  );
};

export default FooterPlayer;
