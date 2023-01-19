import React from "react";
import logo from "../assets/images/logo.svg";
import thumbs from "../assets/images/thumbs.png";
import Button from "./Button";
import SmallButton from "./SmallButton";

const Header = () => {


  
  return (
    <div className="z-40 flex justify-evenly gap-x-4 px-2 items-center pt-4 fixed top-0 right-0 left-0 bg-white">
      <div>
        <img className=" w-[315px] h-[54px] shrink-0" src={logo} alt="logo" />
      </div>
      <div>
        <div className="hidden min-w-[27rem] min-h-12 lg:flex justify-evenly items-center font-Graphik text-xl ">
          <a href="#about" className="border-none">
            About
          </a>
          <a href="#why-us" className="">
            {" "}
            Why us
          </a>
          <a href="#stacked-covered" className="">
            Stacked Covered
          </a>
          <a href="#faqs" className="">
            FAQs
          </a>
        </div>
      </div>
      {/* large */}
      <div className="flex items-center ">
        <div className="hidden lg:flex items-center justify-center bg-[#3a2350] rounded-full w-[5rem]  h-20 mr-[-1.27rem]  ">
          <img
            className="w-14 h-14  rounded-full z-10"
            src={thumbs}
            alt="thumbs"
          />
        </div>
        {/* small n medium screen */}
        <div className="lg:hidden flex items-center justify-center bg-[#3a2350] rounded-full w-[3.5rem]  h-14 mr-[-1.27rem]  ">
          <img
            className="w-9 h-9  rounded-full z-10"
            src={thumbs}
            alt="thumbs"
          />
        </div>
        
        
        <div className="hidden lg:flex">
          <Button />
        </div>
        <div className="lg:hidden">
          <SmallButton/>

        </div>
      </div>
    </div>
  );
};

export default Header;
