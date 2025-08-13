import useBlink from "../../CustomHooks/useBlink";

export const MusicLoading = () => {
  const isMusicAlbumBlinking = useBlink(900);
  return (
    <div>
      {isMusicAlbumBlinking && (
        <div>
          <div className="w-[300px] bg-[var(--color-lightgrey)] h-[20px] rounded-[12px]"></div>
          <div className="flex items-center gap-x-5 mt-[15px]">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-[192px] px-5 py-4 bg-[var(--color-darkgrey)] rounded-[6px]"
              >
                <div className="w-full bg-[var(--color-lightgrey)] h-[160px] rounded-[12px]"></div>
                <div className="w-[150px] bg-[var(--color-lightgrey)] h-[15px] my-3 rounded-[12px]"></div>
                <div className="w-[100px] bg-[var(--color-lightgrey)] h-[15px] rounded-[12px]"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const VideoLoadingonMusic = () => {
  const isBlinking = useBlink(900);

  return (
    <div>
      {isBlinking && (
        <div className="h-[600px] w-[455px] rounded-[6px] bg-[var(--color-lightgrey)] px-5 py-5">
          <div className="h-full w-full rounded-[12px] bg-[var(--color-darkgrey)]"></div>
        </div>
      )}
    </div>
  );
};
