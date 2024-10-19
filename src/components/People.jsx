import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/Axios";
import VerticalCards from "./templates/VerticalCards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)
    document.title = "STREAM || people " + category.toLocaleUpperCase();
  
    const GetPeople = async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);
    
          if (data.results.length > 0) {
            setpeople((prevState) => [...prevState, ...data.results]);
            setpage(page + 1);
          }else{
            sethasMore(false);
          }
         
    
          
        } catch (error) {
          console.log("Error: ", error);
        }
      };
    
      const refreshHandler = () => {
        if (people.length === 0) {
          GetPeople();
        } else {
          setpage(1);
          setpeople([]);
          GetPeople();
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, [category]);
  
      return people.length > 0 ? (
        <div className=" w-screen h-screen ">
          <div className="px-[5%] w-full  flex items-center justify-between">
            <h1 className="text-2xl text-zinc-300 font-semibold">
              <i
                className="ri-arrow-left-line cursor-pointer hover:text-[#6556CD]"
                onClick={() => navigate(-1)}
              ></i>{" "}
              &nbsp; People <small className="text-zinc-500"> ({category})</small> 
            </h1>
            <div className="flex items-center w-[80%]">
              <Topnav />
              {/* <Dropdown
                title="Category"
                options={["popular", "top_rated", "on_the_air","airing_today"]}
                func={(e) => setcategory(e.target.value)}
              />{" "}
              &nbsp; &nbsp; */}
              
            </div>
          </div>
    
          <InfiniteScroll
            loader={<h1>Loading</h1>}
            next={GetPeople}
            dataLength={people.length}
            hasMore={hasMore}
          >
            <VerticalCards data={people} title="person"/>
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
      );
}

export default People
