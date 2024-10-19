import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import axios from "./../utils/Axios";
import Dropdown from "./templates/Dropdown";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";

const Home = () => {
  document.title = "stream || Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  // --------banner-wallpaper----------
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // --------------Trending-section-1-----------
  const GetTreanding = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetTreanding();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className=" p-7 flex justify-between">
          <h1 className="text-3xl text-zinc-300 font-semibold">Trending</h1>
          <Dropdown title="Filter" options={["tv", "movie", "all"]}  func={(e) => {
            setcategory(e.target.value);
          }}/>
        </div>
        <HorizontalCards
          data={trending}
         
        />
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
