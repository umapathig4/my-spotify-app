import { useNavigate } from "react-router-dom";
import { useAudioContext } from "../../Contexts/AudioContext";
import { useBarContext } from "../../Contexts/BarContext";
import { useLyricsContext } from "../../Contexts/LyricsContext";
import FooterPlayer from "../MusicPlayer/FooterPlayer";
import {
  CirclePlus,
  Dot,
  ListMusic,
  Maximize,
  MicVocal,
  MonitorSpeaker,
  SquareMinus,
  SquarePlay,
  Volume2,
} from "lucide-react";
import { useQueueContext } from "../../Contexts/QueueContext";

const Footer = () => {
  const { handlePlayingbarOpen, isPlayingbarOpen } = useBarContext();
  const { currentImg } = useAudioContext();
  const { currentSong } = useAudioContext();
  const { isLiricOpen, setIsLyricOpen } = useLyricsContext();
  const { isQueueOpen, setIsQueueOpen } = useQueueContext();
  const navigate = useNavigate();

  const handleLyricOpen = () => {
    setIsLyricOpen(true);
    navigate("/lyrics");
  };

  const handleLyricClose = () => {
    setIsLyricOpen(false);
    navigate(-1);
  };

  return (
    <div className="bg-black w-full h-[84px] fixed bottom-0 z-100">
      <div className="flex items-center justify-between px-[20px]">
        <div className="text-white flex items-center gap-5 w-[300px]">
          {currentSong && (
            <>
              <div>
                <img src={currentImg} className="h-[58px]"></img>
              </div>
              <div>
                <h1>Tum Hi Ho</h1>
                <p className="text-[9px] text-[#a9a9a9] hover:text-[#f1f1f1] transition-all duration-150 cursor-pointer">
                  Mithoon, Airjith Singh
                </p>
              </div>
              <div>
                <div className="relative group/plus">
                  <CirclePlus className="h-[17px] ms-3 group/plus text-[#a9a9a9] hover:text-[#f1f1f1] transition-all duration-150 cursor-pointer" />
                  <div
                    className="absolute -translate-x-1/5 z-30  top-[-30px] px-2 py-1 bg-[#383838] text-white text-[12px]
rounded mb-full text-nowrap opacity-0 group-hover/plus:opacity-100 transition-opacity duration-150
whitespace-nowrap pointer-events-none"
                  >
                    Add to liked songs
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div>
          <FooterPlayer />
        </div>

        <div className="text-white max-w-[300px]">
          <div className="flex items-center gap-x-3">
            {currentSong && (
              <div className="relative group/square">
                <SquarePlay
                  onClick={() => handlePlayingbarOpen()}
                  className={`text-[#f1f1f1] hover:text-[#f1f1f1] h-[17px]  transition-all duration-150 cursor-pointer
                ${
                  isPlayingbarOpen ? "text-green-300 hover:text-green-300" : ""
                }`}
                />
                <Dot
                  className={`${
                    isPlayingbarOpen ? "text-green-300" : "hidden"
                  }  absolute bottom-[-18px] right-[0px]`}
                />

                <div
                  className="absolute translate-x-[-30%] z-30 top-[-35px] px-2 py-1 bg-[#383838] text-white text-[12px]
      rounded mb-full text-nowrap opacity-0 group-hover/square:opacity-100 transition-opacity duration-150 whitespace-nowrap
      pointer-events-none"
                >
                  Now Playing View
                </div>
              </div>
            )}

            {currentSong && (
              <div className="relative group/micvocal">
                <MicVocal
                  className={`text-[#f1f1f1] hover:text-[#f1f1f1] h-[17px] transition-all duration-150 cursor-pointer
                ${isLiricOpen ? "text-green-300 hover:text-green-300" : ""}`}
                  onClick={isLiricOpen ? handleLyricClose : handleLyricOpen}
                />
                <Dot
                  className={`${
                    isLiricOpen ? "text-green-300" : "hidden"
                  }  absolute bottom-[-18px] right-[0px]`}
                />
                <div
                  className="absolute translate-x-[-30%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/micvocal:opacity-100 transition-opacity duration-150
      pointer-events-none"
                >
                  Lyrics
                </div>
              </div>
            )}

            <div className={`relative ${currentSong ? "group/listmusic" : ""}`}>
              <ListMusic
                className={`${
                  currentSong
                    ? "text-[#f1f1f1] hover:text-[#f1f1f1]"
                    : "text-gray-500"
                } ${isQueueOpen ? "text-green-300 hover:text-green-300" : ""} h-[17px] transition-all duration-150 cursor-pointer`}
                onClick={currentSong ? () => setIsQueueOpen((prev) => !prev) : null}
              />
               <Dot
                  className={`${
                    isQueueOpen ? "text-green-300" : "hidden"
                  }  absolute bottom-[-18px] right-[0px]`}
                />
              <div
                className="absolute translate-x-[-30%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/listmusic:opacity-100 transition-opacity duration-150
      pointer-events-none"
              >
                Queue
              </div>
            </div>
            <div
              className={`relative ${
                currentSong ? "group/monitorspeaker" : ""
              }`}
            >
              <MonitorSpeaker
                className={`${
                  currentSong
                    ? "text-[#f1f1f1] hover:text-[#f1f1f1]"
                    : "text-gray-500"
                } h-[17px] transition-all duration-150 cursor-pointer`}
              />
              <div
                className="absolute translate-x-[-30%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/monitorspeaker:opacity-100 transition-opacity duration-150
      pointer-events-none"
              >
                Connect to a device
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <Volume2 className="h-[17px] text-[#a9a9a9] hover:text-[#f1f1f1] transition-all duration-150 cursor-pointer" />
              <input
                type="range"
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
                min="0"
                max="50"
                value="25"
                style={{
                  "--progress-width": `50%`,
                }}
                // step="0.1"
              />
            </div>
            {currentSong && (
              <div className={"relative group/squareminus"}>
                <SquareMinus
                  className={
                    "text-[#f1f1f1] hover:text-[#f1f1f1] h-[17px] transition-all duration-150 cursor-pointer"
                  }
                />
                <div
                  className="absolute translate-x-[-30%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/squareminus:opacity-100 transition-opacity duration-150
      pointer-events-none"
                >
                  Open Miniplayer
                </div>
              </div>
            )}
            {currentSong && (
              <div className="relative group/maximize">
                <Maximize
                  className={`text-[#f1f1f1] hover:text-[#f1f1f1] h-[17px] transition-all duration-150 cursor-pointer`}
                />
                <div
                  className="absolute translate-x-[-70%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/maximize:opacity-100 transition-opacity duration-150
      pointer-events-none"
                >
                  Enter Full screen
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
