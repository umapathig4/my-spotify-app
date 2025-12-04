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

  const { isBigSidebarOpen, isPlayingbarOpen } = useBarContext();

  return (
    <div
      className={` w-[100%] rounded-[10px] ${
        isBigSidebarOpen ? "ms-[395px]" : "ms-[89px]"
      } ${isPlayingbarOpen ? "me-[10px]" : "me-[0px]"}`}
      style={finalStyle}
    >
      <div className="px-12 py-5 fixed top-[65px] w-full z-10">
        <div className="flex items-center gap-3">
          <button
            className={`  px-4 py-2 rounded-[22px]
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
            className={`  px-4 py-2 rounded-[22px]
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
            className={` px-5 py-2 rounded-[22px]
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

      <div className="mt-[73px] w-full">
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
