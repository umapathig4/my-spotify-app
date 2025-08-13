import { useNavigate, useParams } from "react-router-dom";
import { useColor } from "../../Contexts/ColorContext";
import { MusicLoading } from "../Loading/MusicLoading";
import { Play } from "lucide-react";
import { nanoid } from "nanoid";

const RecentPlayed = ({
  isPlayingbarOpen,
  isRecentPlayedAssets,
  errorRecentPlayed,
  loadingReacentPlayed,
}) => {
  const { imgRefs, handleMouseEnter, handleMouseLeave } = useColor();
  const { id } = useParams();

  console.log(id);
  


  const navigate = useNavigate();


  

  {
    errorRecentPlayed && <p className="text-red-400">{errorRecentPlayed}</p>;
  }
  return (
    <div className="flex items-center gap-x-4 gap-y-4 flex-wrap">
      {loadingReacentPlayed && <MusicLoading />}

      {isRecentPlayedAssets.map((recentPlayed, index) => (
        <div
          key={index}
          onClick={() => navigate(`/playlist/${nanoid(6)}`)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center justify-between group/recentPlayed pe-3 ${
            isPlayingbarOpen ? "max-w-[357px]" : "max-w-[335px]"
          } bg-[var(--color-lightgrey)] w-full rounded-[4px] hover:bg-[var(--color-dimgrey)]`}
        >
          <div className="flex items-center gap-x-3">
            <div>
              <img
                ref={(el) => (imgRefs.current[index] = el)}
                src={recentPlayed.image}
                className="h-[50px] rounded-l-[4px]"
                crossOrigin="anonymous"
                alt={`actor-${index}`}
              />
            </div>
            <div>
              <h5 className="text-white">{recentPlayed.name}</h5>
            </div>
          </div>

          <div
            className=" opacity-0 bg-[#65D46E] px-3 py-3 rounded-[50%] bottom-[0px] right-[25px]
     group-hover/recentPlayed:opacity-100 transition-opacity duration-150"
          >
            <Play className="text-black h-[15px] w-[15px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPlayed;
