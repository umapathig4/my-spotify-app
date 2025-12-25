import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import Playlist from "./Mainfiles.jsx/Playlist";
import Home from "./Mainfiles.jsx/Home";
import Lyrics from "./Mainfiles.jsx/Lyrics";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="/lyrics" element={<Lyrics />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
