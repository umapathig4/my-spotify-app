
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Mainfiles.jsx/Home";
import Footer from "./Components/Footer/Footer";



function App() {

  const [isBigSidebarOpen, setBigSidebarOpen] = useState(true);

  return (
    <>
      <div>
     <Navbar />
     <div className="flex">
      <Sidebar isBigSidebarOpen={isBigSidebarOpen} setBigSidebarOpen={setBigSidebarOpen}/>
      <Home isBigSidebarOpen={isBigSidebarOpen} />
      </div>
      <Footer />
  
      </div>
    </>
  );
}

export default App;
