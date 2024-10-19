import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/Axios";
import VerticalCards from "./templates/VerticalCards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)
  document.title = "STREAM || Trending " + category.toLocaleUpperCase();

  // --------------Trending-section-1-----------
  const GetTreanding = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      }else{
        sethasMore(false);
      }
     

  
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTreanding();
    } else {
      setpage(1);
      settrending([]);
      GetTreanding();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center justify-between">
        <h1 className="text-2xl text-zinc-300 font-semibold">
          <i
            className="ri-arrow-left-line cursor-pointer hover:text-[#6556CD]"
            onClick={() => navigate(-1)}
          ></i>{" "}
          &nbsp; Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />{" "}
          &nbsp; &nbsp;
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1>Loading</h1>}
        next={GetTreanding}
        dataLength={trending.length}
        hasMore={hasMore}
      >
        <VerticalCards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
