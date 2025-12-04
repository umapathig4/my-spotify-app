import img1 from "/public/albumimages/nowtrending.jpg";
import artist1 from "../../assets/artistimages/artist1.jpeg";
import {
  Ellipsis,
  Maximize2,
  PanelLeftOpen,
  CirclePlus,
  ClipboardPlus,
} from "lucide-react";
import { useBarContext } from "../../Contexts/BarContext";
import { useAudioContext } from "../../Contexts/AudioContext";
import { useEffect } from "react";

const Playingbar = () => {
  const { isPlayingbarOpen, setPlayingbarOpen } = useBarContext();

  const { currentImg, currentSong } = useAudioContext();

  useEffect(() => {
    if (currentSong) {
      setPlayingbarOpen(true);
    }
  }, [currentSong]);

  return (
    <div>
      {isPlayingbarOpen && (
        <div className="h-screen w-[365px] right-0 bg-[#121212] rounded-[10px] overflow-scroll custom-scrollbar1">
          <div className="relative group/playingBar w-full h-[530px]">
            <img
              className="w-full h-full object-cover rounded"
              src={currentImg}
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-80 group-hover/playingBar:opacity-70 transition-opacity duration-300"></div>

            <div className="absolute top-0 w-full mt-8">
              <div className="flex justify-between items-center ps-5 pe-5 w-full">
                <div className="flex items-center gap-2.5">
                  <PanelLeftOpen className="hidden group-hover/playingBar:inline-block text-[#a9a9a9] hover:text-[#f1f1f1] cursor-pointer h-[21px]" />

                  <h4 className="text-white font-bold text-[13px] hover:underline">
                    Aashiqui 2
                  </h4>
                </div>
                <div className="flex items-center gap-x-6">
                  <Ellipsis className="hidden group-hover/playingBar:inline-block text-[#a9a9a9] hover:text-[#f1f1f1] cursor-pointer h-[21px]" />
                  <Maximize2 className="hidden group-hover/playingBar:inline-block text-[#a9a9a9] hover:text-[#f1f1f1] cursor-pointer h-[19px]" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 w-full ps-5 pe-5 pb-12">
              <div className="flex justify-between w-full items-center">
                <div className="text-white">
                  <h1 className="font-bold text-[21px]">Tum Hi Ho</h1>
                  <h6 className="text-[12px] font-medium text-[#a9a9a9] hover:text-[#f1f1f1] transition-all duration-150 cursor-pointer">
                    Mithoon, Arjith Singh
                  </h6>
                </div>
                <div className="flex items-center gap-5">
                  <ClipboardPlus className="hidden group-hover/playingBar:inline-block text-[#f1f1f1] cursor-pointer h-[24px]" />
                  <CirclePlus className="text-[#f1f1f1] cursor-pointer h-[24px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-3 ">
            <div className=" h-[310px] rounded-[12px] relative  bg-[#1F1F1F] w-full mt-[-20px]">
              <div className="px-5 py-5">
                <h2 className="text-white font-bold">About the artist</h2>

                <img
                  className="h-[90px] width-[auto] rounded-[50%] mt-6 mb-6"
                  src={artist1}
                />

                <h2 className="text-white font-bold">Mithoon</h2>

                <div className="mt-5 mb-5 flex items-center justify-between ">
                  <h4 className="text-[#a9a9a9]">
                    24,249,274 Monthly Listeners
                  </h4>
                  <h4 className="text-white border-[#a9a9a9] border-2 px-5 py-2 rounded-[22px] text-[10px]">
                    Follow
                  </h4>
                </div>

                <p className="text-[#a9a9a9] w-[300px] line-clamp-3">
                  Described by many as India’s most reclusive composer and
                  songwriter, Mithoon is the acclaimed visionary behind some of
                  the most lilting and haunting melodies in the last decade. A
                  man of very few words whose music is often described as
                  emotive and soul stirring, he is known to have the biggest
                  hits in the Indian music industry.
                </p>
              </div>
            </div>
          </div>

          <div className="px-3">
            <div className="h-[226px] px-5 py-5 rounded-[12px] bg-[#1F1F1F] w-full mt-[10px]">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-bold">Credits</h2>
                <h2 className="text-[#a9a9a9]">Show all</h2>
              </div>

              <div className="flex mt-8 items-center justify-between">
                <div>
                  <h2 className="text-white font-bold">Mithoon</h2>
                  <h6 className="text-[#a9a9a9]">
                    Main Artist,Composer,Producer,Lyricist
                  </h6>
                </div>
                <div>
                  <h4 className="text-white border-[#a9a9a9] border-2 px-5 py-2 rounded-[22px] text-[10px]">
                    Follow
                  </h4>
                </div>
              </div>
              <div className="flex mt-7 items-center justify-between">
                <div>
                  <h2 className="text-white font-bold">Airjith Singh</h2>
                  <h6 className="text-[#a9a9a9]">Main Artist</h6>
                </div>
                <div>
                  <h4 className="text-white border-[#a9a9a9] border-2 px-5 py-2 rounded-[22px] text-[10px]">
                    Follow
                  </h4>
                </div>
              </div>
              <div className="flex mt-7 items-center justify-between">
                <div>
                  <h2 className="text-white font-bold">Aditya Roy Kapur</h2>
                  <h6 className="text-[#a9a9a9]">Actor</h6>
                </div>
                {/* <div>
<h4 className="text-white border-[#a9a9a9] border-2 px-5 py-2 rounded-[22px] text-[10px]">Follow</h4>

      </div> */}
              </div>
            </div>
          </div>

          <div className="mb-[150px] px-3">
            <div className="h-[126px] px-5 py-5 rounded-[12px] bg-[#1F1F1F] w-full mt-[10px]">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-bold">Next in queue</h2>
                <h2 className="text-[#a9a9a9]">Open queue</h2>
              </div>

              <div className="flex mt-7 items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div>
                    <img src={img1} className="h-[50px]" />
                  </div>
                  <div>
                    <h5 className="text-white">Sunn Raha Hai (Male Version)</h5>
                    <h6 className="text-[#a9a9a9]">Ankit Tiwari</h6>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playingbar;
