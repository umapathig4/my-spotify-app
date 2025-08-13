import React, { useRef, useState } from "react";
import { CircleArrowLeft, CircleArrowRight, Play } from "lucide-react";
import { MusicLoading } from "../Loading/MusicLoading";

const CardsLayout = ({ demoArrey, error, loading }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardContainerRef = useRef(null);

  const gotoCard = (card) => {
    const cardsTotal = demoArrey.length;
    const cardIndex = (card + cardsTotal) % cardsTotal;
    setCurrentCardIndex(cardIndex);

    const handleCardContainer = cardContainerRef.current;
    if (handleCardContainer) {
      const cardWidth = 192 + 12;
      handleCardContainer.scrollTo({
        left: cardIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="w-[100%]">
      <div>
        <div className="relative group/cardhover">
          <div
            ref={cardContainerRef}
            className="overflow-x-auto relative custom-scrollbar transition-all"
          >
            <div className="flex min-w-max items-center ps-8 gap-x-1 mt-2 ">
              {loading && <MusicLoading />}

              {demoArrey.map((things, id) => (
                <div
                  key={id}
                  className="w-[192px] group/musicCard relative hover:bg-[#272727] transition-all px-5 py-4 rounded-[6px]"
                >
                  <img
                    className="h-[160px] w-full rounded-[12px]"
                    src={things.img}
                  />
                  <p className="text-[#a9a9a9] w-full mt-2.5 line-clamp-2 text-[11px]">
                    {things.para}
                  </p>
                  <div
                    className="absolute opacity-0 bg-[#65D46E] px-4 py-4 rounded-[50%] bottom-[60px] right-[25px]
     group-hover/musicCard:opacity-100 transition-opacity duration-150"
                  >
                    <Play className="text-black" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {currentCardIndex > 0 && (
            <div className="absolute top-0 start-0">
              <div className="float-start sticky start-0">
                <div className="relative h-[240px] w-[70px] gradient-fade-left"></div>

                <CircleArrowLeft
                  className="absolute top-[50%] ms-[20%] text-red text-gray-200 h-[30px] w-[30px] opacity-0 group-hover/cardhover:opacity-100 transition-opacity duration-50"
                  onClick={() => gotoCard(currentCardIndex - 1)}
                />
              </div>
            </div>
          )}

          {currentCardIndex < demoArrey.length - 3 && (
            <div className="absolute top-0 end-0">
              <div className="float-end sticky end-0">
                <div className="relative h-[240px] w-[70px] gradient-fade-right"></div>

                <CircleArrowRight
                  className="absolute top-[50%] text-gray-200 ms-[40%] h-[30px] w-[30px] opacity-0 group-hover/cardhover:opacity-100 transition-opacity duration-50"
                  onClick={() => gotoCard(currentCardIndex + 1)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsLayout;
