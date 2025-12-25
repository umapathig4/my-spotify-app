import { useMemo } from "react";
import { useAudioContext } from "../../Contexts/AudioContext";
import { useQueueContext } from "../../Contexts/QueueContext";
import { X, Play, Ellipsis, Pause } from "lucide-react";

const Queue = () => {
  const { isQueueOpen, setIsQueueOpen } = useQueueContext();
  const {
    currentImg,
    currentSong,
    playlist,
    handlePlayCurrentSong,
    isPlaying,
    togglePlayPause,
  } = useAudioContext();

  const nextSongs = useMemo(() => {
    return playlist.filter(
      (song) => song.song !== currentSong || song.img !== currentImg
    );
  }, [playlist, currentSong, currentImg]);

  return (
    <div>
      {isQueueOpen && (
        <div className="h-screen w-[365px] px-6 py-6 right-0 bg-[#121212] rounded-[10px] overflow-scroll custom-scrollbar1">
          <div className="w-full  flex items-center justify-between">
            <h1 className="text-white font-bold text-[13px]">Queue</h1>
            <X
              className="text-[#a9a9a9] hover:text-[#f1f1f1] cursor-pointer h-[21px]"
              onClick={() => setIsQueueOpen(false)}
            />
          </div>

          <div className="mt-15">
            <h3 className="text-white font-bold text-[13px]">Now Playing</h3>
            <div className="flex w-full mt-5 pe-3 group/smplayicon cursor-pointer items-center justify-between hover:bg-[var(--color-darkgrey)] rounded-b-sm">
              <div className="flex w-full items-center gap-x-3">
                <div className="relative">
                  <img
                    alt="next song img"
                    src={currentImg}
                    className="h-[50px] rounded group-hover/smplayicon:opacity-40"
                  />

                  <div onClick={togglePlayPause}>
                    {isPlaying ? (
                      <Pause className="absolute hidden group-hover/smplayicon:inline-block top-5 left-5 text-white h-[20px] cursor-pointer" />
                    ) : (
                      <Play className="absolute hidden group-hover/smplayicon:inline-block top-5 left-5 text-white h-[20px] cursor-pointer" />
                    )}
                  </div>
                </div>
                <div>
                  <h5 className="text-[var(--color-green)]">{currentSong}</h5>
                  <h6 className="text-[#a9a9a9]">Ankit Tiwari</h6>
                </div>
              </div>
              <div>
                <Ellipsis className="text-[#a9a9a9] hover:text-white cursor-pointer h-[21px] hidden group-hover/smplayicon:inline-block" />
              </div>
            </div>
          </div>

          <div className="mt-15">
            <h3 className="text-white font-bold text-[13px]">Next Songs</h3>
            {nextSongs.map((song, index) => (
              <div
                key={index}
                className="flex w-full mt-5 pe-3 group/smplayicon items-center justify-between hover:bg-[var(--color-darkgrey)] rounded-b-sm"
              >
                <div
                  onClick={() => handlePlayCurrentSong(nextSongs, index)}
                  className="flex w-full items-center gap-x-3"
                >
                  <div className="relative">
                    <img
                      alt="next song img"
                      src={song.img}
                      className="h-[50px] rounded group-hover/smplayicon:opacity-40"
                    />
                    <Play className="absolute hidden group-hover/smplayicon:inline-block top-5 left-5 text-white h-[20px] cursor-pointer" />
                  </div>
                  <div>
                    <h5 className="text-white">{song.song}</h5>
                    <h6 className="text-[#a9a9a9]">Ankit Tiwari</h6>
                  </div>
                </div>
                <div>
                  <Ellipsis className="text-[#a9a9a9] hover:text-white cursor-pointer h-[21px] hidden group-hover/smplayicon:inline-block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Queue;
