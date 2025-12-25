import { useBarContext } from "../Contexts/BarContext";

const Lyrics = () => {

  const { isBigSidebarOpen, isPlayingbarOpen } = useBarContext(); 


  return (
    <div className={`h-[calc(100vh-149px)] w-[100%] rounded-[10px] ${
        isBigSidebarOpen ? "ms-[395px]" : "ms-[89px]"
      } ${
        isPlayingbarOpen ? "me-[10px]" : "me-[0px]"
      } overflow-scroll custom-scrollbar1`}>
      
      <div className="px-12 py-5 fixed top-[65px] w-full z-10">
 <h1 className="text-white">Lyrics</h1>
      </div>
     
    </div>
  );
};

export default Lyrics;
