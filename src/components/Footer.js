import React from "react";
import logo from "../assets/images/logo.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" mt-[4rem] py-2">
      <div>
        <div className="flex flex-col">
          <div className="md:flex md:justify-between px-6 md:my-4">
            <div>
              <img
                className=" w-[315px] h-[54px] mx-auto"
                src={logo}
                alt="logo"
              />
            </div>
            <div>
              <div className="flex justify-center text-3xl items-center py-2">
                <FaFacebookF className="bg-[#3a2350] rounded-full p-2 border-none outline-none text-white  mx-2" />
                <FaLinkedinIn className="bg-[#3a2350] rounded-full p-2 border-none outline-none text-white  mx-2" />
                <FaTwitter className="bg-[#3a2350] rounded-full p-2 border-none outline-none text-white mx-2" />
                <FaYoutube className="bg-[#3a2350]  rounded-full p-2 border-none outline-none text-white mx-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between justify-end  items-center px-2">
          <div className="md:flex md:justify-evenly">
              <p className="p-4">Lorem Ipsom is good</p>
              <p className="p-4">Privacy Policy</p>
            </div>
            <p className="p-8">&copy; 2023 Lorem Ipsum training</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};
