import { useEffect, useRef, useState } from "react";
import {
  CircleArrowRight,
  CirclePlus,
  Ellipsis,
  Music3,
  PlayCircle,
} from "lucide-react";
import { VideoLoadingonMusic } from "../Loading/MusicLoading";

const VideoSongLayout = ({ videoSongs, error, loading }) => {
  const [isCurrentSong, setNextSong] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [videoSongs]);

  const handleVideoPlay = () => {
    videoRef.current.play();
  };

  const handleVideoPause = () => {
    videoRef.current.pause();
  };

  const handleNextSong = (currentSong) => {
    const totalSongs = videoSongs.length;
    const moveNextSong = (currentSong + totalSongs) % totalSongs;
    setNextSong(moveNextSong);

    setTimeout(() => {
      videoRef.current.load();
      videoRef.current.play();
    }, 100);
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <div>
        <h6 className="text-[#a9a9a9] mb-3.5">Made for you</h6>

        <div
          onMouseEnter={handleVideoPlay}
          onMouseLeave={handleVideoPause}
          className="h-[600px] w-[455px] relative group/videoTools"
        >
          <div>
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              playsInline
              className="h-[600px] mx-auto object-cover rounded-[6px]"
            >
              {videoSongs?.[isCurrentSong]?.song ? (
                <source src={videoSongs[isCurrentSong].song} type="video/mp4" />
              ) : (
                <VideoLoadingonMusic />
              )}
            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-40 z-0"></div>

            <div className="absolute inset-0 top-0 px-10 py-10 z-10 flex flex-col justify-between">
              <div className="opacity-100 bg-none flex items-center gap-x-3">
                <div>
                  {videoSongs?.[isCurrentSong]?.album ? (
                    <img
                      className="h-[100px] w-auto rounded-[4px]"
                      src={videoSongs[isCurrentSong].album}
                    />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
                <div>
                  <h2 className="text-white text-[20px] font-bold hover:underline cursor-pointer">
                    {videoSongs?.[isCurrentSong]?.name ? (
                      videoSongs[isCurrentSong].name
                    ) : (
                      <p>Loading...</p>
                    )}
                  </h2>
                  <h5 className="text-[#d2d2d2] text-[10px] mt-1.5">
                    Playlist . Spotify
                  </h5>
                </div>
              </div>

              <div className="ms-auto">
                <CircleArrowRight
                  onClick={() => handleNextSong(isCurrentSong + 1)}
                  className="text-[#cecece] cursor-pointer w-[35px] h-[35px] opacity-0 group-hover/videoTools:opacity-100
                  transition-opacity duration-150"
                />
              </div>

              <div className="opacity-100 bg-none">
                <h3 className="text-[#d2d2d2] mb-6">
                  {videoSongs?.[isCurrentSong]?.description ? (
                    videoSongs[isCurrentSong].description
                  ) : (
                    <p>Loading...</p>
                  )}
                </h3>
                <div className="flex justify-between items-center opacity-0 group-hover/videoTools:opacity-100 transition-opacity duration-150">
                  <div>
                    <div className="flex items-center gap-x-1 bg-transparent border-1 border-amber-50 px-2 py-1 rounded-[12px] mt-5">
                      <Music3 className="h-[12px] text-[#d2d2d2]" />
                      <h6 className="text-[12px] text-[#d2d2d2]">Preview</h6>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-3">
                      <Ellipsis className="text-[#d2d2d2]  w-[35px] h-[35px]" />
                      <CirclePlus className="text-[#d2d2d2] w-[35px] h-[35px]" />
                      <PlayCircle className="text-[white] w-[50px] h-[50px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSongLayout;
