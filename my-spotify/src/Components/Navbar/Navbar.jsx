import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";
import {
  CircleArrowDown,
  Bell,
  CircleUser,
  House,
  Search,
  Folders,
  MessageSquareShare,
} from "lucide-react";

const Navbar = () => {
  const [isProfileDropdown, setProfileDropdown] = useState(false);
  const [isPlaceholderTextVisible, setPlaceholderTextVisible] = useState(false);
  const accountDropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (
      accountDropdownRef.current &&
      !accountDropdownRef.current.contains(event.target)
    ) {
      setProfileDropdown(false);
    }
  };

  useEffect(() => {
    if (isProfileDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileDropdown]);

  return (
    <div>
      <div className="w-full fixed top-0 z-[100] bg-[#000000]">
        <div className="flex align-middle items-center justify-between ps-9 pe-5 py-4">
          <div className="flex-none w-1/4">
            <img className="h-11" title="Spotify" src={logo}></img>
          </div>

          <div className="flex-grow mx-[130px]">
            <div className="flex align-middle gap-x-5">
              <div className="relative group cursor-pointer">
                <div
                  onClick={() => navigate("/")}
                  className="bg-[#292929] px-3 py-3 rounded-[50%] hover:bg-[#393838]"
                >
                  <House className="text-white" />
                </div>
                <div
                  className="absolute mb-full left-1/2 -translate-x-1/2 px-2 py-1 text-[12px] text-white bg-black 
              rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none"
                >
                  Home
                </div>
              </div>

              <div className="flex group hover:bg-[#393838] transition-all duration-150 bg-[#292929] align-bottom justify-between w-[400px] h-[40px] rounded-[40px] px-3 py-3">
                <div className="flex align-bottom gap-x-[8px]">
                  <div className="relative group/icon cursor-pointer">
                    <div>
                      <Search className="text-[#a9a9a9] group-hover:text-[#f1f1f1] transition-all duration-150" />
                    </div>
                    <div
                      className="absolute -translate-x-1/2 rounded px-2 py-1 mb-full left-1/2 text-[12px] text-white bg-black opacity-0 
                  group-hover/icon:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none"
                    >
                      Search
                    </div>
                  </div>

                  <div>
                    <input
                      className="bg-[#292929] text-[#c1c1c1] w-[300px] h-[25px] border-none outline-none 
    group-hover:bg-[#393838] group-hover:text-[#f1f1f1] transition-all duration-150"
                      type="text"
                      // placeholder="What do you want to play? ctrl + k"
                      placeholder={
                        isPlaceholderTextVisible
                          ? "What do you want to play? ctrl + k"
                          : "What do you want to play?"
                      }
                      onMouseEnter={() =>
                        setPlaceholderTextVisible((prev) => !prev)
                      }
                      onMouseLeave={() => setPlaceholderTextVisible(false)}
                    ></input>
                  </div>
                </div>

                <div className="flex  align-middle items-center gap-x-[13px]">
                  <div className="w-[1px] h-[25px] bg-[#a9a9a9]"></div>
                  <div className="relative group/browse cursor-pointer">
                    <div>
                      <Folders className="text-[#a9a9a9] hover:text-[#f1f1f1] transition-all duration-150" />
                    </div>
                    <div
                      className="absolute mb-full left-1/2 -translate-x-1/2 rounded opacity-0 text-[12px] text-white bg-black
                  px-2 py-1 group-hover/browse:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none"
                    >
                      Browse
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-none">
            <div className="flex items-center gap-x-12">
              <div className="flex items-center gap-x-6">
                <div>
                  <button
                    className="text-[11px] bg-white rounded-[20px] font-bold text-black px-4 py-[7px]
                            hover:text-[12px] hover:bg-[#e6e6e6] transition-all duration-150 ease-in-out cursor-pointer"
                    title="Upgrade to Premium"
                  >
                    Explore Premium
                  </button>
                </div>
                <div className="flex items-center group gap-x-1 cursor-pointer">
                  <CircleArrowDown
                    className="text-[#a8a8a8] h-6 group-hover:text-white group-hover:h-7 transition-all
                            duration-150 ease-in-out"
                  />
                  <h6
                    className="text-[#a8a8a8] text-[12px] group-hover:text-white group-hover:text-[13px] transition-all
                            duration-150 ease-in-out"
                  >
                    Install App
                  </h6>
                </div>
              </div>

              <div className="flex items-center gap-x-10">
                <div className="relative group/notification">
                  <div>
                    <Bell
                      className="text-[#a8a8a8] cursor-pointer hover:text-white transition-colos duration-300"
                      size={20}
                    />
                  </div>
                  <div
                    className="absolute mb-full w-fit text-nowrap left-1/2 -translate-x-1/2 opacity-0 px-2 py-1
                rounded text-[12px] text-white bg-black group-hover/notification:opacity-100
                duration-150 transition-opacity whitespace-nowrap pointer-events-none"
                  >
                    What's New
                  </div>
                </div>

                <div className="relative">
                  <div className="relative group/account">
                    <div>
                      <CircleUser
                        className="text-white cursor-pointer"
                        size={30}
                        onClick={(e) => {
                          setProfileDropdown((prev) => !prev);
                        }}
                      />
                    </div>
                    <div
                      className="absolute -translate-x-1/2 mb-full px-2 py-1 rounded opacity-0 text-[12px] text-white bg-black
                text-nowrap w-fit group-hover/account:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none"
                    >
                      Umapathi G
                    </div>
                  </div>
                  {isProfileDropdown && (
                    <div ref={accountDropdownRef}>
                      <div className="absolute bg-[#292929] text-white right-[0px] w-[190px] mt-[17px] rounded-[4px]">
                        <div className="text-[11px]">
                          <div className="flex group align-middle items-center justify-between px-4 py-4 hover:bg-[#393838]">
                            <h6 className="group-hover:underline">Account</h6>
                            <MessageSquareShare className="h-[15px]" />
                          </div>
                          <div className="flex group align-middle items-center justify-between px-4 py-4 hover:bg-[#393838]">
                            <h6 className="group-hover:underline">Profile</h6>
                          </div>
                          <div className="flex group align-middle items-center justify-between px-4 py-4 hover:bg-[#393838]">
                            <h6 className="group-hover:underline">
                              Upgrade to Premium
                            </h6>
                            <MessageSquareShare className="h-[15px]" />
                          </div>
                          <div className="flex group align-middle items-center justify-between px-4 py-4 hover:bg-[#393838]">
                            <h6 className="group-hover:underline">Support</h6>
                            <MessageSquareShare className="h-[15px]" />
                          </div>
                          <div className="flex group align-middle items-center justify-between px-4 py-4 hover:bg-[#393838]">
                            <h6 className="group-hover:underline">Download</h6>
                            <MessageSquareShare className="h-[15px]" />
                          </div>
                          <div className="flex group align-middle items-center justify-between px-4 py-4 hover:bg-[#393838]">
                            <h6 className="group-hover:underline">Setting</h6>
                          </div>
                          <div className="flex align-middle items-center justify-between px-4 py-4 hover:bg-[#393838] border-t border-t-[#616161]">
                            <h6>Logout</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
