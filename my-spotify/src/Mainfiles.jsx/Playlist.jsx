import { useLocation } from "react-router-dom";

import logo from "../assets/navbar/logo.png";
import { useEffect, useRef, useState } from "react";
import getDominantColor from "../CustomHooks/getDominantColor";
import {
  CircleArrowDown,
  CirclePlus,
  Ellipsis,
  List,
  Play,
} from "lucide-react";
import AlbumTable from "../Components/Table/AlbumTable";
import { useBarContext } from "../Contexts/BarContext";
import useAudio from "../CustomHooks/audio";

const Playlist = () => {
  const [isBgColor, setBgColor] = useState("");

  const { isBigSidebarOpen, isPlayingbarOpen } = useBarContext();

  const location = useLocation();

  const { name, image, quote, insight, song } = location.state || {};
  const imgBgRef = useRef(null);
 // ✅ useAudio hook here
  const { audioRef, setCurrentSong, isSongError } = useAudio();

 
  useEffect(() => {
    const img = imgBgRef.current;
    if (!img) return;
    if (img) {
      const color = getDominantColor(img);
      setBgColor(color);
    }
  }, [imgBgRef]);



  return (
    <div
      className={`h-screen w-[100%] mt-[65px] rounded-[10px] ${
        isBigSidebarOpen ? "ms-[395px]" : "ms-[89px]"
      } ${
        isPlayingbarOpen ? "me-[10px]" : "me-[0px]"
      } overflow-scroll custom-scrollbar1`}
    >
      <div className="relative">
        <div
          className="absolute h-[400px] inset-0"
          style={{
            background: `linear-gradient(to bottom, #282828 0%, ${isBgColor} 0%, black 100%)`,
          }}
        ></div>

        <div className="h-[215px] shadow-2xl relative overflow-hidden rounded-[4px]">
          <div className="relative px-[20px] py-[25px]">
            <div className="flex items-center gap-x-5">
              {image && (
                <div className="w-[250px] h-[170px]">
                  <img
                    ref={imgBgRef}
                    src={image}
                    alt="image"
                    className="h-[100%] rounded-[4px] shadow-2xl w-[100%] "
                  />
                </div>
              )}

              <div>
                <h4 className="text-[var(--color-white)]">Public Playlist</h4>
                {name && (
                  <h1 className="text-white text-[40px] font-bold leading-[40px] mt-2">
                    {name}
                  </h1>
                )}
                <h4 className="mt-2 text-[var(--color-light2grey)]">{quote}</h4>

                <div className="flex items-center gap-x-2 mt-2">
                  <img src={logo} alt="logo" className="h-[23px]" />
                  <h6 className="text-[var(--color-light2grey)] font-bold ">
                    <span className="text-[var(--color-white)]">Spotify</span>{" "}
                    {insight}
                  </h6>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>

        <div className="relative px-[20px] py-[25px]">
          <div className="flex  justify-between items-center">
            <div className="flex items-center gap-x-[20px]">
              <div className=" bg-[#65D46E] px-5 py-5 rounded-[50%] bottom-[0px] right-[25px]">
                <Play className="text-black h-[25px] w-[25px]" />
              </div>

              <div>
                <div>
                  <img
                    src={image}
                    className="h-[40px]  border-2 border-[var(--color-light2grey)] rounded-[6px]"
                  />
                </div>
              </div>

              <div>
                <CirclePlus className="text-[var(--color-light2grey)] h-[35px] w-[35px]" />
              </div>

              <div>
                <CircleArrowDown className="text-[var(--color-light2grey)] h-[35px] w-[35px]" />
              </div>

              <div>
                <Ellipsis className="text-[var(--color-light2grey)] h-[30px] w-[30px]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-x-[6px]">
                <h6 className="text-[var(--color-light2grey)]">List</h6>
                <List className="text-[var(--color-light2grey)] h-[20px] w-[20px]" />
              </div>
            </div>
          </div>

          <div className="py-5">
          <AlbumTable />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
