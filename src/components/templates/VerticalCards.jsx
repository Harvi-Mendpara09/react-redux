import React from "react";
import { Link } from "react-router-dom";

const VerticalCards = ({ data, title }) => {
  console.log(title,data)
  return (
    
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]  mt-5">
      {data.map((c, i) => {
        return (
          <Link
            to={`/${data.media_type || title}/details/${c.id}`}
            key={i}
            className="relative text-white w-[30vh] mr-[4%] mb-[5%]"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`}
              alt=""
              className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,5)]"
            />
            <h1 className="text-xl text-zinc-300 mt-2 font-semibold">
              {" "}
              {c.original_title || c.name || c.original_name || c.title}
            </h1>

            {/* {c.vote_average && (
              <div className="absolute right-[0%] bottom-[20%] bg-yellow-600 text-xl font-semibold text-white w-[7vh] h-[7vh] flex justify-center items-center rounded-full">
                {(c.vote_average * 10).toFixed()} <sup>%</sup>
              </div>
            )} */}
          </Link>
        );
      })}
    </div>
  );
};

export default VerticalCards;
