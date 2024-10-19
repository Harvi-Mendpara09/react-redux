import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../../utils/Axios";
import noimage from "../../assets/noimage.png"

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  // ------------------search queries-------------

  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    GetSearch();
  }, [query]);

  return (
    <div className="h-[10vh] w-full relative flex justify-start items-center ml-[10%] ">
      <i className="ri-search-line text-2xl text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search anything"
        className="w-[50%] ml-8 p-2 text-xl outline-none bg-transparent text-zinc-200 border-b-2 border-zinc-600"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-fill text-2xl text-zinc-400"
        ></i>
      )}

      <div className="w-[50%] z-[100] ml-10 max-h-[40vh] bg-zinc-200 absolute top-[100%] overflow-auto shadow-2xl">
        {searches.map((result, index) => (
          <Link
            key={index}
            to={`/details/${result.id}`}
            className="text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 inline-block p-5 flex justify-start items-center w-[100%] border-b-2 border-zinc-100 duration-300"
          >
            <img
              src={
                result.backdrop_path ||
                 result.profile_path ? `https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.profile_path
              }` : noimage
            }
              alt=""
              className="w-[10vh] h-[10vh] object-cover rounded mr-4 shadow-lg"
            />
            <span>
              {result.original_title || result.name || result.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
