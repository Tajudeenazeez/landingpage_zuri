import React from "react";
import girl from "../assets/images/lady1.jpg";
import line from "../assets/images/line.svg";
import Button from "./Button";
import wire1 from "../assets/images/section1wire.svg";
import boy from "../assets/images/male1.jpg";

const Banner = () => {
  return (
    <div className="mt-[4.8rem] lg:mt-[9rem] bg-white w-full px-2">
      <div>
        <div className="flex flex-col items-center relative">
          <div className="flex justify-center items-center ">
            <p className="text-[#3a2350] text-lg font-Graphik my-4 px-2 text-center">
              {" "}
              <strong className="mx-2">Notice:</strong>cohort II registration is closed, You can
              register to join the next cohort.
            </p>
          </div>
          <div>
            <img
              className="w-96 h-80 xl:absolute left-4 top-32"
              src={girl}
              alt="girl"
            />
          </div>
          <div>
            <p className="text-[#503879] font-semibold p-2 text-lg ">
              And now your search has ended...
            </p>
          </div>
          <div className="w-full lg:w-3/4">
            <div className="flex justify-center items-center  mx-4">
              <h1 className="text-[#3a2350] text-3xl text-center xl:w-[34rem] xl:text-[3rem] font-semibold leading-[4rem]">
                Gain knowledge to help you scale through the tech industry for
                free.
              </h1>
            </div>
            <div className="w-3/4 pr-4 flex justify-end items-center">
              <img className="w-44" src={line} alt="line" />
            </div>
          </div>
          <div className="flex justify-center items-center text-lg p-4 text-center ">
            <p className="xl:w-[40%]">
              A basic introduction to software development and product design
              aimed at complete beginners, which anyone can join
            </p>
          </div>
          <div>
            <img
              className="hidden  xl:block w-80 h-80 xl:absolute xl:right-8 xl:top-32 "
              src={boy}
              alt="boy"
            />
          </div>
          <div>
            <Button />
          </div>
          <div className="flex justify-center ">
            <img className="w-[4rem] ml-[10rem]" src={wire1} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
