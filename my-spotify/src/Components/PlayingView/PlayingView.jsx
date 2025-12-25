import { useEffect, useRef, useState } from "react";
import { useAudioContext } from "../../Contexts/AudioContext";
import { usePlayingViewContext } from "../../Contexts/PlayingViewContext";
import { useQueueContext } from "../../Contexts/QueueContext";
import getDominantColor from "../../CustomHooks/getDominantColor";
import artist1 from "../../assets/artistimages/artist1.jpeg";
import { Ellipsis, Play } from "lucide-react";

const PlayingView = () => {
  const [playingViewBgColor, setPlayingViewBgColor] = useState("");
  const { isPlayingView } = usePlayingViewContext();
  const { isQueueOpen } = useQueueContext();
  const { currentImg, currentSong } = useAudioContext();
  const bgImgColorRef = useRef(null);
  const scrollRef = useRef(null);
  const changeBgRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const imgColor = bgImgColorRef.current;
      if (!imgColor) return;
      if (imgColor) {
        const bgColor = getDominantColor(imgColor);
        setPlayingViewBgColor(bgColor);
      }
    }, 100);
  }, [bgImgColorRef, currentImg, currentSong]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const changeBg = changeBgRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      if (scrollEl.scrollTop > 10) {
        changeBg.style.background =
          "linear-gradient(to top, transparent 0%, black 90%)";
        changeBg.style.transition = "background 0.3s ease";
        changeBg.style.animation = "fadeIn 0.3s";
        bgImgColorRef.current.style.transform = "scale(0.9)";
        bgImgColorRef.current.style.transition = "transform 0.3s ease";
        bgImgColorRef.current.style.opacity = "0.5";
        bgImgColorRef.current.style.transition = "opacity 2s ease";
      } else {
        changeBg.style.background = "transparent";
        bgImgColorRef.current.style.transform = "scale(1)";
        bgImgColorRef.current.style.transition = "transform 0.3s ease";
        bgImgColorRef.current.style.opacity = "1";
        bgImgColorRef.current.style.transition = "opacity 2s ease";
      }
    };

    scrollEl.addEventListener("scroll", handleScroll);

    // cleanup – bahut important bhai
    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  return (
    <div>
      {isPlayingView && (
        <div>
          <div
            // style={{
            //   background: playingViewBgColor
            //     ? `linear-gradient(to bottom, ${playingViewBgColor} 0%, black 100%)`
            //     : "black",
            // }}
            style={{ background: playingViewBgColor }}
            className="h-screen w-full rounded-[10px] overflow-scroll custom-scrollbar1"
            ref={scrollRef}
          >
            <div
              className="flex justify-between px-8 py-8 sticky top-0 z-30"
              ref={changeBgRef}
            >
              <h1 className="text-white">Playing View</h1>
              <h3 className="text-red-50">hello</h3>
            </div>

            <div className="max-w-[1120px] h-auto justify-center mx-auto top-0 sticky z-10">
              <div className="flex justify-center ">
                <img
                  className="h-[400px] w-[400px] rounded-2xl"
                  ref={bgImgColorRef}
                  src={currentImg}
                  alt="Current Song"
                />
              </div>
            </div>

            <div
              className=" h-full justify-center relative z-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 30%)",
              }}
            >
              <div className="max-w-[1120px] mx-auto mt-6 mb-12 px-6 ">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* LEFT — About the Artist */}
                  <div className="lg:w-[50%] w-full">
                    <div className="h-[310px] rounded-[12px] bg-[#1F1F1F] p-5">
                      <h2 className="text-white font-bold text-start">
                        About the artist
                      </h2>

                      <img
                        className="h-[90px] w-[90px] rounded-full mt-6 mb-6"
                        src={artist1}
                        alt="artist"
                      />

                      <h2 className="text-white font-bold text-start">
                        Mithoon
                      </h2>

                      <div className="mt-5 mb-5 flex items-center justify-between">
                        <h4 className="text-[#a9a9a9] text-sm">
                          24,249,274 Monthly Listeners
                        </h4>
                        <button className="text-white border border-[#a9a9a9] px-5 py-2 rounded-[22px] text-[10px] hover:border-white">
                          Follow
                        </button>
                      </div>

                      <p className="text-[#a9a9a9] text-sm line-clamp-3">
                        Described by many as India’s most reclusive composer and
                        songwriter, Mithoon is the acclaimed visionary behind
                        some of the most lilting and haunting melodies in the
                        last decade.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT — Credits + Queue */}
                  <div className="lg:w-[50%] w-full flex flex-col gap-6">
                    {/* Credits */}
                    <div className="rounded-[12px] bg-[#1F1F1F] p-5">
                      <div className="flex items-center justify-between">
                        <h2 className="text-white font-bold">Credits</h2>
                        <span className="text-[#a9a9a9] hover:text-white cursor-pointer hover:underline">
                          Show all
                        </span>
                      </div>

                      {[
                        {
                          name: "Mithoon",
                          role: "Main Artist, Composer, Producer, Lyricist",
                        },
                        { name: "Arijit Singh", role: "Main Artist" },
                        { name: "Aditya Roy Kapur", role: "Actor" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between mt-6"
                        >
                          <div>
                            <h2 className="text-white font-bold">
                              {item.name}
                            </h2>
                            <h6 className="text-[#a9a9a9] text-sm">
                              {item.role}
                            </h6>
                          </div>
                          {item.role !== "Actor" && (
                            <button className="text-white border border-[#a9a9a9] px-5 py-2 rounded-[22px] text-[10px] hover:border-white">
                              Follow
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Next in Queue */}
                    <div className="rounded-[12px] bg-[#1F1F1F] p-5 mb-[150px]">
                      <div className="flex items-center justify-between">
                        <h2 className="text-white font-bold">Next in queue</h2>
                        <span
                          className="text-[#a9a9a9] hover:text-white cursor-pointer hover:underline"
                          onClick={() => setIsQueueOpen(true)}
                        >
                          Open queue
                        </span>
                      </div>

                      <div className="flex mt-6 items-center justify-between group hover:bg-[var(--color-lightgrey)] p-2 rounded">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={currentImg}
                              alt="next song"
                              className="h-[50px] rounded group-hover:opacity-40"
                            />
                            <Play className="absolute hidden group-hover:block top-[14px] left-[14px] h-[20px] text-white" />
                          </div>
                          <div>
                            <h5 className="text-white">{currentSong}</h5>
                            <h6 className="text-[#a9a9a9] text-sm">
                              Ankit Tiwari
                            </h6>
                          </div>
                        </div>
                        <Ellipsis className="text-[#a9a9a9] hover:text-white h-[21px] hidden group-hover:block cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayingView;
