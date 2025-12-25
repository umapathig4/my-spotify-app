import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { useAudioContext } from "../../Contexts/AudioContext";
import { useEffect } from "react";

const AlbumTable = () => {
  const [colWidths, setColWidths] = useState({
    ash: 50,
    Title: 130,
    Album: 130,
    Date: 80,
    duration: 10,
  });

  const { currentSong, isPlaying, setPlaylist, handlePlayCurrentSong } =
    useAudioContext();

  useEffect(() => {
    setPlaylist(assetDetails);
  }, []);

  const assetDetails = [
    {
      id: 1,
      img: "/albumimages/Aashiqui.jpeg",
      title: "Jhon Deoooooooooooooooooooooooooo",
      subtitle: "fgrhgfhgrgf",
      album: "Rabbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
      dateadded: "3 weeks ago",
      duration: "2.52",
      song: "/songs/Tumhiho.mp3",
    },
    {
      id: 2,
      img: "/albumimages/thug_life.jpg",
      title: "Jhon Deo",
      subtitle: "fgrhgfhgrgf",
      album: "54",
      dateadded: "Developer",
      duration: "2.52",
      song: "/songs/Muththa-Mazhai.mp3",
    },
    {
      id: 3,
      img: "/albumimages/devara.jpg",
      title: "Jhon Deo",
      subtitle: "fgrhgfhgrgf",
      album: "54",
      dateadded: "Developer",
      duration: "2.52",
      song: "/songs/Rekka-Rekka.mp3",
    },
    {
      id: 4,
      img: "/albumimages/hindi1.jpg",
      title: "Jhon Deo",
      subtitle: "fgrhgfhgrgf",
      album: "54",
      dateadded: "Developer",
      duration: "2.52",
      song: "/songs/Oorum-Blood.mp3",
    },
  ];

  const startResize = (Heading, e) => {
    const startX = e.clientX;
    const startWidth = colWidths[Heading];

    const onMouseMove = (e) => {
      const newWidth = Math.min(
        185,
        Math.max(80, startWidth + (e.clientX - startX))
      );
      setColWidths((prev) => ({ ...prev, [Heading]: newWidth }));
    };

    const onMouseUp = (e) => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full ">
        <thead>
          <tr className="group/expand">
            {["#", "Title", "Album", "Date", "Duration"].map(
              (Heading, index, arr) => (
                <th
                  key={index}
                  className="text-[var(--color-light3grey)] border-b-1 border-[var(--color-dimgrey)] relative text-start p-5 font-[600]
                text-[11px]"
                  style={{ width: colWidths[Heading] }}
                >
                  {Heading}

                  {index !== 0 && index !== arr.length - 1 && (
                    <div
                      onMouseDown={(e) => startResize(Heading, e)}
                      className="right-0 opacity-0 top-[15px] h-[20px] w-1 bg-[var(--color-dimgrey)] absolute cursor-col-resize 
                    group-hover/expand:opacity-100 transition-opacity duration-100"
                    ></div>
                  )}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {assetDetails.map((asset, i) => (
            <tr key={i} className="group/tableHover">
              <td
                className="p-5 text-[var(--color-light3grey)] group-hover/tableHover:bg-[var(--color-lightgrey)] group-hover/tableHover:text-[var(--color-white)] font-[600] "
                style={{ width: colWidths.ash }}
              >
                <span className="group-hover/tableHover:hidden">
                  {asset.id}
                </span>

                <span
                  className="hidden group-hover/tableHover:inline"
                  onClick={() => handlePlayCurrentSong(assetDetails, i)}
                >
                  {currentSong === asset.song && isPlaying ? (
                    <Pause className="h-[15px] w-[15px] cursor-pointer" />
                  ) : (
                    <Play className="h-[15px] w-[15px] cursor-pointer" />
                  )}
                </span>
              </td>

              <td
                className="p-5  group-hover/tableHover:bg-[var(--color-lightgrey)] font-[600]"
                style={{ width: colWidths.Title }}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={asset.img}
                      className="h-[40px] w-[40px] rounded-[4px]"
                      alt="img"
                    />
                  </div>
                  <div>
                    <span
                      className="block truncate w-full text-[var(--color-white)]"
                      style={{ maxWidth: colWidths.Title }}
                    >
                      {asset.title}
                    </span>

                    <span
                      className="block truncate w-full text-[var(--color-light3grey)] group-hover/tableHover:text-[var(--color-white)]"
                      style={{ maxWidth: colWidths.Title }}
                    >
                      {asset.subtitle}
                    </span>
                  </div>
                </div>
              </td>

              <td
                className="p-5 text-[var(--color-light3grey)] group-hover/tableHover:bg-[var(--color-lightgrey)] group-hover/tableHover:text-[var(--color-white)] font-[600]"
                style={{ width: colWidths.Album }}
              >
                <span
                  className="block truncate w-full"
                  style={{ maxWidth: colWidths.Album }}
                >
                  {asset.album}
                </span>
              </td>
              <td
                className="p-5 text-[var(--color-light3grey)] group-hover/tableHover:bg-[var(--color-lightgrey)] group-hover/tableHover:text-[var(--color-white)] font-[600]"
                style={{ width: colWidths.Date }}
              >
                <span
                  className="block truncate w-full"
                  style={{ maxWidth: colWidths.Date }}
                >
                  {asset.dateadded}
                </span>
              </td>
              <td
                className="p-5 text-[var(--color-light3grey)] group-hover/tableHover:bg-[var(--color-lightgrey)] group-hover/tableHover:text-[var(--color-white)] font-[600]"
                style={{ width: colWidths.duration }}
              >
                {asset.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumTable;
