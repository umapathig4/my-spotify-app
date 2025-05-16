import { Shuffle, SkipBack, Pause, SkipForward, Repeat } from "lucide-react";
import song1 from "../../assets/songs/tsong1.mp3";

const FooterPlayer = () => {
  return (
    <div>
      <div className="w-[600px] mx-[auto]  text-center">
        <div className="w-[200px] mx-[auto] mt-[16px] mb-[7px] text-center">
          <div className="flex items-center justify-between gap-x-2 text-white">
            <div className="flex items-center gap-x-5">
              <Shuffle className="h-[18px]" />
              <SkipBack className="h-[18px]" />
            </div>
            <div className="bg-white text-black rounded-[50%] px-2 py-2">
              <Pause />
            </div>
            <div className="flex items-center gap-x-5">
              <SkipForward className="h-[18px]" />
              <Repeat className="h-[18px]" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[10px] align-middle">
          <div className="text-white">
            <h6 className="text-[10px]">0:00</h6>
          </div>
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
    before:z-10 before:top-0 before:left-0
    before:[width:50%]
  "
            type="range"
            min={0}
            max={100}
            value={30}
          />
          <div className="text-white">
            <h6 className="text-[10px]">0:00</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPlayer;
