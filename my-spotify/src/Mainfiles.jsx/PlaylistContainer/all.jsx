import RecentPlayed from "../../Components/HomeCardsLayout/RecentPlayed";
import { useData } from "../../Contexts/DataContext";
import CardsLayout from "../../Components/HomeCardsLayout/CardsLayout";
import useAudio from "../../CustomHooks/audio";
import { useEffect } from "react";

const All = ({ isPlayingbarOpen, setPlayingbarOpen }) => {
  const {
    isBiggestHits,
    isPopularRadio,
    isThrowbackHits,
    biggestHitsError,
    popularHitsError,
    throwbackHitsError,
    biggestHitsLoading,
    popularHitsLoading,
    throwbackHitsLoading,
    isRecentPlayedAssets,
    errorRecentPlayed,
    loadingReacentPlayed,
  } = useData();

  const { currentSong } = useAudio();

  useEffect(() => {
    if (currentSong) {
      setPlayingbarOpen(true);
    }
  }, [currentSong]);

  return (
    <div
      className={`${
        isPlayingbarOpen ? "max-w-[760px]" : "max-w-[1100px]"
      } w-[100%] h-[calc(100vh-220px)] overflow-scroll custom-scrollbar1`}
    >
      <div className="w-full ps-12">
        <RecentPlayed
          isRecentPlayedAssets={isRecentPlayedAssets}
          errorRecentPlayed={errorRecentPlayed}
          loadingReacentPlayed={loadingReacentPlayed}
        />
      </div>

      <div>
        <div className="flex items-center justify-between px-12 mt-10">
          <h2 className="text-white font-bold text-[20px]">
            Today's biggest hits
          </h2>
          <h6 className="text-[#a9a9a9] cursor-pointer hover:underline">
            Show all
          </h6>
        </div>
        <div>
          <CardsLayout
            demoArrey={isBiggestHits}
            error={biggestHitsError}
            loading={biggestHitsLoading}
          />
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="flex items-center justify-between px-12">
          <h2 className="text-white font-bold text-[20px]">Popular radio</h2>
          <h6 className="text-[#a9a9a9] cursor-pointer hover:underline">
            Show all
          </h6>
        </div>
        <div>
          <CardsLayout
            demoArrey={isPopularRadio}
            error={popularHitsError}
            loading={popularHitsLoading}
          />
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="flex items-center justify-between px-12">
          <div>
            <h6 className="text-[#a9a9a9] text-[10px]">
              Playlists full of favorities, still going strong.
            </h6>
            <h2 className="text-white font-bold text-[20px]">Throwback</h2>
          </div>
          <h6 className="text-[#a9a9a9] cursor-pointer hover:underline">
            Show all
          </h6>
        </div>
        <div>
          <CardsLayout
            demoArrey={isThrowbackHits}
            error={throwbackHitsError}
            loading={throwbackHitsLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default All;
