import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import About from "./components/About";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Persondetails from "./components/Persondetails";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[#1F1E24] flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />

          <Route path="/movies" element={<Movie />}>
            <Route path="/movies/details/:id" element={<Moviedetails />} />
          </Route>

          <Route path="/tvshows" element={<Tvshows />}>
            <Route path="/tvshows/details/:id" element={<Tvdetails />} />
          </Route>
          
          <Route path="/people" element={<People />}>
            <Route path="/people/details/:id" element={<Persondetails />} />
          </Route>

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
