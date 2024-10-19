import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
 
  return (
 
     

      <div className="flex  w-[100%] overflow-y-hidden mb-5 p-5">
        {data.map((d, i) => (
          <div key={i} className="min-w-[15%] mr-5 bg-zinc-900 mb-5">
            <img
              className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path
              }`}
              alt=""
            />
            <div className="text-white p-2 h-[55%]">
              <h1 className=" text-xl font-semibold ">
                {d.title || d.name || d.original_name || d.original_title}
              </h1>

              <p className="text-sm text-zinc-300">
              {(d.overview ? d.overview.slice(0, 50) : "")}...{" "}
                <Link className="text-zinc-500">more</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default HorizontalCards;
