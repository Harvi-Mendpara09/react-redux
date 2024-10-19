import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {


  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-6">
      <h1 className="text-2xl text-white font-bold">
        <i className="ri-tv-fill text-[#6556CD] mr-3"></i>
        <span className=""> STREAM.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-8 mb-1">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-4">
        <i className="ri-fire-fill mr-2"></i>Trending</Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-4">
        <i className="ri-sparkling-2-fill mr-2"></i>Popular</Link>
        <Link to="/movies" className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-4">
        <i className="ri-movie-2-fill mr-2"></i>Movies</Link>
        <Link to="/tvshows" className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-4">
        <i className="ri-tv-2-fill mr-2"></i>Tv Shows</Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-4">
        <i className="ri-team-fill mr-2"></i>People</Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400"/>

      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-8 mb-1">
          Website Info
        </h1>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-4">
        <i className="ri-information-fill mr-2"></i>About</Link>
        {/* <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-4">
        
        <i className="ri-phone-fill mr-2"></i>Contact</Link> */}
      
      </nav>
    </div>
  );
};

export default Sidenav;
