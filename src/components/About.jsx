import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";

const About = () => {
  const navigate = useNavigate();
  document.title = "STREAM || About Us";

  return (
    <div className="w-screen h-screen">
      <div className="p-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl w-[100%] text-zinc-300 font-semibold">
          <i
            className="ri-arrow-left-line cursor-pointer hover:text-[#6556CD]"
            onClick={() => navigate(-1)}
          ></i>{" "}
          &nbsp; About Us
          
        </h1>
        
        
      </div>

      <div className="px-[5%] mt-8 text-zinc-300">
        <h2 className="text-xl text-[#6556CD] font-semibold">Our Mission</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <h2 className="text-xl text-[#6556CD] font-semibold mt-8">Our Story</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam, justo sit amet placerat fermentum, sem est cursus erat, vel
          auctor nisl risus at metus. Suspendisse potenti. Curabitur eget tortor
          vitae arcu mollis tincidunt. Donec ac lacus vitae elit facilisis
          tristique.
        </p>

        <h2 className="text-xl text-[#6556CD] font-semibold mt-8">Meet the Team</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          venenatis purus et tortor laoreet, id aliquam libero vulputate.
          Aliquam erat volutpat. Maecenas in nibh nec orci convallis consequat
          vitae at lacus.
        </p>
      </div>
    </div>
  );
};

export default About;
