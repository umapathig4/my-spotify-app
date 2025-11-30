import { createContext, useContext, useState } from "react";
import useFetchData from "../CustomHooks/fetchData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isBiggestHits, setBiggestHits] = useState([]);
  const [isPopularRadio, setPopularRadio] = useState([]);
  const [isThrowbackHits, setThowbackHits] = useState([]);
  const [isTamilVideoLoopSongs, setTamilVideoLoopSongs] = useState([]);
  const [isTeluguVideoLoopSongs, setTeluguVideoLoopSongs] = useState([]);
  const [isHindiVideoLoopSongs, setHindiVideoLoopSongs] = useState([]);
  const [isRecentPlayedAssets, setRecentPlayedAssets] = useState([]);
  const [isRecentPlayedAssetsMusic, setRecentPlayedAssetsMusic] = useState([]);

  const { isError: biggestHitsError, isLoading: biggestHitsLoading } =
    useFetchData("http://localhost:5000/todayBiggestHits", setBiggestHits);
  const { isError: popularHitsError, isLoading: popularHitsLoading } =
    useFetchData("http://localhost:5000/popularradio", setPopularRadio);
  const { isError: throwbackHitsError, isLoading: throwbackHitsLoading } =
    useFetchData("http://localhost:5000/throwback", setThowbackHits);
  const { isError: tamilvidHitsError, isLoading: tamilvidHitsLoading } =
    useFetchData(
      "http://localhost:5000/tamilVideoloopSongs",
      setTamilVideoLoopSongs
    );
  const { isError: teluguvidHitsError, isLoading: teluguvidHitsLoading } =
    useFetchData(
      "http://localhost:5000/teluguVideoloopSongs",
      setTeluguVideoLoopSongs
    );
  const { isError: hindividHitsError, isLoading: hindividHitsLoading } =
    useFetchData(
      "http://localhost:5000/hindiVideoloopSongs",
      setHindiVideoLoopSongs
    );

  const { isError: errorRecentPlayed, isLoading: loadingReacentPlayed } =
    useFetchData("http://localhost:5000/recentPlayed", setRecentPlayedAssets);

  const {
    isError: errorRecentPlayedMusic,
    isLoading: loadingReacentPlayedMusic,
  } = useFetchData(
    "http://localhost:5000/recentPlayedMusic",
    setRecentPlayedAssetsMusic
  );

  return (
    <DataContext.Provider
      value={{
        isBiggestHits,
        isPopularRadio,
        isThrowbackHits,
        isTamilVideoLoopSongs,
        isTeluguVideoLoopSongs,
        isHindiVideoLoopSongs,
        isRecentPlayedAssets,
        isRecentPlayedAssetsMusic,
        errorRecentPlayedMusic,
        errorRecentPlayed,
        biggestHitsError,
        popularHitsError,
        throwbackHitsError,
        tamilvidHitsError,
        teluguvidHitsError,
        hindividHitsError,
        loadingReacentPlayed,
        loadingReacentPlayedMusic,
        biggestHitsLoading,
        popularHitsLoading,
        throwbackHitsLoading,
        tamilvidHitsLoading,
        teluguvidHitsLoading,
        hindividHitsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
