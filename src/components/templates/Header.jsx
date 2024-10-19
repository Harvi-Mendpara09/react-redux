import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.7),rgba(0,0,0,.9)) , url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top-10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"

      }}
      className="w-full h-[75%] flex flex-col justify-end items-start p-10 text-white"
    >
      <h1 className="text-5xl font-black mb-3 w-[70%]">
        {data.original_title || data.name || data.original_name || data.title}
      </h1>
      <p className="w-[70%] text-zinc-300">
        {data.overview.slice(0,200)}... <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-zinc-400 text-sm mt-2">
        <i className="ri-megaphone-fill text-yellow-600"></i> {data.release_date || "No Information"} 
        <i className="ml-4 ri-album-fill text-yellow-600"></i> {data.media_type.toUpperCase()}
      </p>
      <Link className="p-3 rounded text-white mt-3 bg-[#6556CD] ">Watch trailer</Link>
    </div>
  );
};

export default Header;
