import { PanelRightOpen, Plus, Music, Folder, Blend } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Sidebar = ({isBigSidebarOpen, setBigSidebarOpen}) => {
  
  const [isAddpfj, setAddpfj] = useState(false);
  const addCreatepfjRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(event) {
      if(addCreatepfjRef.current && !addCreatepfjRef.current.contains(event.target))
      {
        setAddpfj(false);
      }
    }

if(isAddpfj)
{
  document.addEventListener("mousedown", handleClickOutside);
}else{
  document.removeEventListener("mousedown", handleClickOutside);
}

return () => {
document.removeEventListener("mousedown", handleClickOutside);
}
    

  }, [isAddpfj])

  return (
    <div>
      {isBigSidebarOpen && (
        <div className="h-screen group/bar w-[329px] bg-[#121212] z-[90] fixed left-0  ">
          <div className="flex items-center justify-between mt-[73px] px-9">
            <div className="flex items-center gap-x-3">
              <div className="relative group/collapseSidebar">
                <div
                  onClick={() => setBigSidebarOpen((prev) => !prev)}
                  className="hidden group-hover/bar:block transition-all duration-150"
                >
                  <PanelRightOpen className="text-[#a9a9a9] hover:text-[#f1f1f1] cursor-pointer" />
                </div>
                <div
                  className="absolute -translate-x-1/6 left-0  px-2 py-1 bg-[#383838] text-white text-[12px]
rounded mb-full text-nowrap opacity-0 group-hover/collapseSidebar:opacity-100 transition-opacity duration-150 
whitespace-nowrap pointer-events-none"
                >
                  Collapse your library
                </div>
              </div>
              <div>
                <h6 className="text-white text-base font-semibold">
                  Your Library
                </h6>
              </div>
            </div>

            <div className="relative">
              <div className="relative group/plusIcon">
                <div
                  onClick={() => setAddpfj((prev) => !prev)}
                  className="bg-[#1F1F1F] group/plus px-2 py-2 rounded-[50%] hover:bg-[#383838] cursor-pointer transition-colors duration-150"
                >
                  <Plus
                    className={`text-[#a9a9a9] group-hover/plus:text-[#f1f1f1] transition-all duration-150
                ${isAddpfj ? "rotate-45" : "rotate-0"}`}
                  />
                </div>
                <div
                  className="absolute -translate-x-1/2 z-30  left-1/2 px-2 py-1 bg-[#383838] text-white text-[12px]
rounded mb-full text-nowrap opacity-0 group-hover/plusIcon:opacity-100 transition-opacity duration-150
whitespace-nowrap pointer-events-none"
                >
                  Create a Playlist,folder or jam
                </div>
              </div>

              {isAddpfj && (
                <div ref={addCreatepfjRef} className="absolute w-[300px] mt-2 z-20 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] bg-[#262626] -translate-x-1/12 left-1/2 rounded-[8px] mb-2">
                  <div className="px-2 py-2">
                    <div className="flex group/playlist items-center gap-x-3 hover:bg-[#3E3E3E] transition-colors duration-150 px-3 py-3 rounded">
                      <div className="px-4 py-4 rounded-[50%] bg-[#545454] inline-block whitespace-nowrap">
                        <Music className="text-white group-hover/playlist:text-[#65D46E] group-hover/playlist:rotate-6 transition-all duration-150" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-[12px]">Playlist</h4>
                        <p className="text-[#979797] text-[11px font-bold]">
                          Build a playlist with songs, or episodes
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-[0.3px] bg-[#414141] mt-1 mb-1"></div>

                    <div className="flex group/blend items-center gap-x-3 hover:bg-[#3E3E3E] px-3 py-3 rounded transition-colors duration-150">
                      <div className="px-4 py-4 rounded-[50%] bg-[#545454] inline-block whitespace-nowrap">
                        <Blend className="text-white group-hover/blend:text-[#65D46E] group-hover/blend:rotate-6 transition-all duration-150" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-[12px]">Blend</h4>
                        <p className="text-[#979797] text-[11px font-bold]">
                          Mix up your tastes with friends
                        </p>
                      </div>
                    </div>

                    <div className="flex group/folder items-center gap-x-3 hover:bg-[#3E3E3E] px-3 py-3 rounded transition-colors duration-150">
                      <div className="px-4 py-4 rounded-[50%] bg-[#545454] inline-block whitespace-nowrap">
                        <Folder className="text-white group-hover/folder:text-[#65D46E] group-hover/folder:rotate-6 transition-all duration-150" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-[12px]">Folder</h4>
                        <p className="text-[#979797] text-[11px font-bold]">
                          Organize your playlists
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-[40px] px-5">
            <div className="bg-[#1F1F1F] h-[125px] w-full px-[17px] py-4 rounded">
              <h3 className="text-white font-bold">
                Create your first playlist
              </h3>
              <h6 className="text-white mt-2 text-[11px]">
                It's easy we'll help you
              </h6>
              <h2
                className="bg-white rounded-[20px] mt-7 px-4 py-[7px] inline-block whitespace-nowrap
              font-bold cursor-pointer text-[11.5px] hover:text-[12.5px] transition-all duration-150"
              >
                Create playlist
              </h2>
            </div>
          </div>

          <div className="mt-[30px] px-5">
            <div className="bg-[#1F1F1F] h-[125px] w-full px-[17px] py-4 rounded">
              <h3 className="text-white font-bold">
                Let's find some podcasts to follow
              </h3>
              <h6 className="text-white mt-2 text-[11px]">
                We'll keep you updated on new episodes
              </h6>
              <h2
                className="bg-white rounded-[20px] mt-7 px-4 py-[7px] inline-block whitespace-nowrap
              font-bold cursor-pointer text-[11.5px] hover:text-[12.5px] transition-all duration-150"
              >
                Browse podcasts
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* collapsed */}
      {!isBigSidebarOpen && (
        <div className="h-screen  w-[82px] bg-[#121212] z-[90] fixed left-0">
          <div>
            <div className="px-[28px] py-10px">
              <div
                onClick={() => setBigSidebarOpen(true)}
                className="relative group/collapseSidebar mt-[73px]"
              >
                <div>
                  <PanelRightOpen className="text-[#a9a9a9] hover:text-[#f1f1f1] cursor-pointer" />
                </div>
                <div
                  className="absolute -translate-x-1/6 left-0 mt-1 px-2 py-1 bg-[#383838] text-white text-[12px]
rounded mb-full text-nowrap opacity-0 group-hover/collapseSidebar:opacity-100 transition-opacity duration-150 
whitespace-nowrap pointer-events-none"
                >
                  Open your library
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="px-[23px] mt-[30px]">
                <div
                  onClick={() => setAddpfj((prev) => !prev)}
                  className="relative group/plusIcon"
                >
                  <div className="bg-[#1F1F1F] group/plus px-2 py-2 rounded-[50%] hover:bg-[#383838] cursor-pointer transition-colors duration-150">
                    <Plus
                      className={`text-[#a9a9a9] group-hover/plus:text-[#f1f1f1] transition-all duration-150
                ${isAddpfj ? "rotate-45" : "rotate-0"}`}
                    />
                  </div>
                  <div
                    className="absolute z-30 -translate-x-1/4 mt-1  left-1/2 px-2 py-1 bg-[#383838] text-white text-[12px]
rounded mb-full text-nowrap opacity-0 group-hover/plusIcon:opacity-100 transition-opacity duration-150 whitespace-nowrap
pointer-events-none"
                  >
                    Create a Playlist,folder or jam
                  </div>
                </div>
              </div>

              {isAddpfj && (
                <div ref={addCreatepfjRef} className="absolute w-[300px] mt-2 z-20 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] bg-[#262626] -translate-x-1/12 left-1/2 rounded-[8px] mb-2">
                  <div className="px-2 py-2">
                    <div className="flex group/playlist items-center gap-x-3 hover:bg-[#3E3E3E] transition-colors duration-150 px-3 py-3 rounded">
                      <div className="px-4 py-4 rounded-[50%] bg-[#545454] inline-block whitespace-nowrap">
                        <Music className="text-white group-hover/playlist:text-[#65D46E] group-hover/playlist:rotate-6 transition-all duration-150" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-[12px]">Playlist</h4>
                        <p className="text-[#979797] text-[11px font-bold]">
                          Build a playlist with songs, or episodes
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-[0.3px] bg-[#414141] mt-1 mb-1"></div>

                    <div className="flex group/blend items-center gap-x-3 hover:bg-[#3E3E3E] px-3 py-3 rounded transition-colors duration-150">
                      <div className="px-4 py-4 rounded-[50%] bg-[#545454] inline-block whitespace-nowrap">
                        <Blend className="text-white group-hover/blend:text-[#65D46E] group-hover/blend:rotate-6 transition-all duration-150" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-[12px]">Blend</h4>
                        <p className="text-[#979797] text-[11px font-bold]">
                          Mix up your tastes with friends
                        </p>
                      </div>
                    </div>

                    <div className="flex group/folder items-center gap-x-3 hover:bg-[#3E3E3E] px-3 py-3 rounded transition-colors duration-150">
                      <div className="px-4 py-4 rounded-[50%] bg-[#545454] inline-block whitespace-nowrap">
                        <Folder className="text-white group-hover/folder:text-[#65D46E] group-hover/folder:rotate-6 transition-all duration-150" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-[12px]">Folder</h4>
                        <p className="text-[#979797] text-[11px font-bold]">
                          Organize your playlists
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
