import { useAudioContext } from "../../Contexts/AudioContext";
import { useBarContext } from "../../Contexts/BarContext";
import FooterPlayer from "../MusicPlayer/FooterPlayer";
import {
  CirclePlus,
  ListMusic,
  Maximize,
  MicVocal,
  MonitorSpeaker,
  SquareMinus,
  SquarePlay,
  Volume2,
} from "lucide-react";

const Footer = () => {
  const { handlePlayingbarOpen } = useBarContext();
  const { currentImg } = useAudioContext();
  const { currentSong } = useAudioContext();

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

        <div className="text-white w-[300px]">
          <div className="flex items-center gap-x-3">
            <div className={`relative ${ currentSong ? "group/square" : ""}`}>
              <SquarePlay
                onClick={ currentSong ? handlePlayingbarOpen : undefined}
                className={`${currentSong ? "text-[#f1f1f1] hover:text-[#f1f1f1]" : "text-gray-500"} h-[17px]  transition-all duration-150 cursor-pointer`}
              />
              
              <div
                className="absolute translate-x-[-30%] z-30 top-[-35px] px-2 py-1 bg-[#383838] text-white text-[12px]
      rounded mb-full text-nowrap opacity-0 group-hover/square:opacity-100 transition-opacity duration-150 whitespace-nowrap
      pointer-events-none"
              >
                Now Playing View
              </div>
            </div>
            <div className={`relative ${ currentSong ? "group/micvocal" : ""}`}>
              <MicVocal className=  {`${currentSong ? "text-[#f1f1f1] hover:text-[#f1f1f1]" : "text-gray-500"} h-[17px] transition-all duration-150 cursor-pointer`} />
              <div
                className="absolute translate-x-[-30%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/micvocal:opacity-100 transition-opacity duration-150
      pointer-events-none"
              >
                Lyrics
              </div>
            </div>
            <div className={`relative ${ currentSong ? "group/listmusic" : ""}`}>
              <ListMusic className=  {`${currentSong ? "text-[#f1f1f1] hover:text-[#f1f1f1]" : "text-gray-500"} h-[17px] transition-all duration-150 cursor-pointer`} />
              <div
                className="absolute translate-x-[-30%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/listmusic:opacity-100 transition-opacity duration-150
      pointer-events-none"
              >
                Queue
              </div>
            </div>
            <div className={`relative ${ currentSong ? "group/monitorspeaker" : ""}`}>
              <MonitorSpeaker className=  {`${currentSong ? "text-[#f1f1f1] hover:text-[#f1f1f1]" : "text-gray-500"} h-[17px] transition-all duration-150 cursor-pointer`} />
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
    w-full h-[4px] 
    bg-[#545454] rounded-lg
  "
              />
            </div>
            <div className={`relative ${ currentSong ? "group/squareminus" : ""}`}>
              <SquareMinus className=  {`${currentSong ? "text-[#f1f1f1] hover:text-[#f1f1f1]" : "text-gray-500"} h-[17px] transition-all duration-150 cursor-pointer`} />
              <div
                className="absolute translate-x-[-30%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/squareminus:opacity-100 transition-opacity duration-150
      pointer-events-none"
              >
                Open Miniplayer
              </div>
            </div>
            <div className={`relative ${ currentSong ? "group/maximize" : ""}`}>
              <Maximize className=  {`${currentSong ? "text-[#f1f1f1] hover:text-[#f1f1f1]" : "text-gray-500"} h-[17px] transition-all duration-150 cursor-pointer`} />
              <div
                className="absolute translate-x-[-70%] z-30 px-2 py-1 text-[12px] top-[-35px] opacity-0 bg-[#383838] text-white
      rounded whitespace-nowrap text-nowrap mb-full group-hover/maximize:opacity-100 transition-opacity duration-150
      pointer-events-none"
              >
                Enter Full screen
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
