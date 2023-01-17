import React from "react";
import logo from "../assets/images/logo.svg";
import thumbs from "../assets/images/thumbs.png";
import Button from "./Button";
const Header = () => {
  return (
    <div className="z-40 flex justify-evenly md:justify-between px-4 items-center w-screen pt-4  md:fixed top-0 right-0 left-0 bg-white">
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
      <div className="flex items-center ">
        <div className="flex items-center justify-center bg-[#3a2350] rounded-full w-20 h-20 mr-[-1.27rem]  ">
          <img
            className="w-16 h-16 rounded-full z-10"
            src={thumbs}
            alt="thumbs"
          />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
