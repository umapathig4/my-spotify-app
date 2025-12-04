import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Playingbar from "./Components/Playingbar/Playingbar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-149px)] mt-[65px] mb-[84px] flex flex-1 overflow-hidden">
        <Sidebar />
        <Outlet />
        <Playingbar />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
