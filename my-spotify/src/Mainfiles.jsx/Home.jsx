import { useRef, useState } from "react";
import Music from "./PlaylistContainer/Music";
import All from "./PlaylistContainer/all";
import useBgDynamic from "../CustomHooks/useBgDynamic";
import useColorChange from "../CustomHooks/useColorChange";
import { useColor } from "../Contexts/ColorContext";
import { useBarContext } from "../Contexts/BarContext";

export default function SpotifyLayout() {
  const [isActiveTab, setActiveTab] = useState("all");
  const { isColor } = useColor();

  const topGradientStyle = useBgDynamic({ isActiveTab });

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const bgColor = useColorChange();

  const finalStyle = isColor ? bgColor : topGradientStyle;

    const {isBigSidebarOpen,  isPlayingbarOpen} = useBarContext();
  

  return (
    <div
      className={`h-screen w-[100%] mt-[65px] rounded-[10px] ${
        isBigSidebarOpen ? "ms-[395px]" : "ms-[89px]"
      } ${isPlayingbarOpen ? "me-[10px]" : "me-[0px]"}`}
      style={finalStyle}
    >
      <div className="mt-[10px] px-12 py-1">
        <div className="flex items-center gap-3">
          <button
            className={` border-2 border-[#3a3a3a] px-4 py-2 rounded-[22px]
             ${
               isActiveTab === "all"
                 ? "bg-white text-black"
                 : "bg-[#3a3a3a] text-white"
             }`}
            onClick={() => handleActiveTab("all")}
          >
            All
          </button>

          <button
            className={` border-2 border-[#3a3a3a] px-4 py-2 rounded-[22px]
             ${
               isActiveTab === "music"
                 ? "bg-white text-black"
                 : "bg-[#3a3a3a] text-white"
             }`}
            onClick={() => handleActiveTab("music")}
          >
            Music
          </button>

          <button
            className={` border-2 border-[#3a3a3a] px-5 py-2 rounded-[22px]
             ${
               isActiveTab === "podcasts"
                 ? "bg-white text-black"
                 : "bg-[#3a3a3a] text-white"
             }`}
            onClick={() => handleActiveTab("podcasts")}
          >
            Podcasts
          </button>
        </div>
      </div>

      <div className="mt-[23px]">
        {isActiveTab === "all" && (
          <div className="text-white">
            <All isPlayingbarOpen={isPlayingbarOpen} />
          </div>
        )}

        {isActiveTab === "music" && (
          <div>
            <Music isPlayingbarOpen={isPlayingbarOpen} />
          </div>
        )}

        {isActiveTab === "podcasts" && (
          <div className="text-white">
            <h1>podcasts</h1>
          </div>
        )}
      </div>
    </div>
  );
}
