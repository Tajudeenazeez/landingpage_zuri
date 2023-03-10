import React from "react";
import wire6 from "../assets/images/section6.svg";

import javascript from "../assets/images/javascript logo.svg";
import html from "../assets/images/html.svg";
import css from "../assets/images/css-3 logo.svg";

import adobe from "../assets/images/adobe-xd logo.svg";
import Bashlogo from "../assets/images/Bashlogo.svg";
import aws from "../assets/images/aws logo.svg";

import Django from "../assets/images/Django logo.svg";
import figma from "../assets/images/Figma logo.svg";
import laravel from "../assets/images/Laravel logo.svg";

import php2 from "../assets/images/php2 logo.svg";
import python from "../assets/images/python-4 logo.svg";
import react from "../assets/images/React logo.svg";
import ubuntu from "../assets/images/Ubuntu logo.svg";

const Programs = () => {
  return (
    <div>
      <div>
        <div className=" flex flex-col mx-[4rem] mt-[2rem] ">
          <p className="text-purple-600 text-2xl">Scope of Program</p>
          <p className="font-semibold leading-[3rem] text-2xl xl:text-[3rem] xl:w-1/2">
            Here is the list of prgram that will be explore during the program
          </p>
        </div>
        <div className="flex justify-center">
          <img className="mx-4 px-4 w-[10rem]" src={wire6} alt="scope1" />
        </div>
      </div>
      {/* article */}
      <article className="flex flex-wrap md:grid md:grid-cols-2 xl:grid-cols-3 items-center justify-evenly  xl:gap-x-4  gap-y-8 xl:mx-4  h-22  ">
        <div className=" bg-white px-12 md:px-4 mx-8 md:mx-2 py-12 rounded-3xl shadow-[0px_11px_35px_4px_rgba(0,0,0,0.22)]  hover:scale-110  ">
          <p className="py-2 text-black font-semibold text-xl">
            Frontend Development
          </p>
          <div className="py-4 flex">
            <img className="w-[3rem] " src={html} alt="html" />
            <img className="w-[3rem] " src={css} alt="css" />
            <img className="w-[2.9rem] " src={javascript} alt="javascript" />
          </div>
          <p>
            This track deals with the aspect of your application that the users
            interact with. A front-end developer will be able to correctly
            interpret a given design to the user interface.
          </p>
        </div>
        {/* program2 */}
        <div className=" bg-white px-12 md:px-4 mx-8 md:mx-2 py-12 rounded-3xl shadow-[0px_11px_35px_4px_rgba(0,0,0,0.22)]  hover:scale-110 ">
          <p className="py-2 text-black font-semibold text-xl">
            Backend Development
          </p>
          <div className="py-4 flex">
            <img className="w-[rem] h-[3rem] px-2" src={php2} alt="html" />
            <img className="w-[4rem] h-[3rem] px-2" src={python} alt="css" />
            <img
              className="w-[4rem] h-[3rem] px-2"
              src={javascript}
              alt="javascript"
            />
          </div>
          <p>
            This track deals with the aspect of your application that the users
            interact with. A front-end developer will be able to correctly
            interpret a given design to the user interface.
          </p>
        </div>
        {/* program3 */}
        <div className="bg-white px-12 md:px-4 mx-8 md:mx-2 py-12  rounded-3xl shadow-[0px_11px_35px_4px_rgba(0,0,0,0.22)]  hover:scale-110 ">
          <p className="py-2 text-black font-semibold text-xl">
            Frontend Development
          </p>
          <div className="py-4 flex">
            <img className="w-[4rem] h-[3rem] px-2" src={adobe} alt="html" />
            <img className="w-[6rem] h-[3rem] px-2" src={figma} alt="css" />
          </div>
          <p>
            This track deals with the aspect of your application that the users
            interact with. A front-end developer will be able to correctly
            interpret a given design to the user interface.
          </p>
        </div>
        {/* program4 */}
        <div className="bg-white px-12 md:px-4 mx-8 md:mx-2 py-12  rounded-3xl shadow-[0px_11px_35px_4px_rgba(0,0,0,0.22)]  hover:scale-110 ">
          <p className="py-2 text-black font-semibold text-xl">
            Frontend Development
          </p>
          <div className="py-4 flex">
            <img className="w-[5rem] h-[3rem] px-2" src={ubuntu} alt="html" />
            <img className="w-[4rem] h-[3rem] px-2" src={Bashlogo} alt="css" />
            <img
              className="w-[3rem] h-[3rem] px-2"
              src={aws}
              alt="javascript"
            />
          </div>
          <p>
            This track deals with the aspect of your application that the users
            interact with. A front-end developer will be able to correctly
            interpret a given design to the user interface.
          </p>
        </div>
        {/* program5 */}
        <div className="bg-white px-12 md:px-4 mx-8 md:mx-2 py-12  rounded-3xl shadow-[0px_11px_35px_4px_rgba(0,0,0,0.22)]  hover:scale-110 ">
          <p className="py-2 text-black font-semibold text-xl">
            Frontend Development
          </p>
          <div className="py-4 flex">
            <img className="w-[3rem] h-[3rem] px-2" src={html} alt="html" />
            <img className="w-[3rem] h-[3rem] px-2" src={css} alt="css" />
            <img
              className="w-[3rem] h-[3rem] px-2"
              src={javascript}
              alt="javascript"
            />
            <img
              className="w-[4rem] h-[3rem] px-2"
              src={python}
              alt="fullstack"
            />
          </div>
          <p>
            This track deals with the aspect of your application that the users
            interact with. A front-end developer will be able to correctly
            interpret a given design to the user interface.
          </p>
        </div>
        {/* program6 */}
        <div className="bg-white px-12 md:px-4 mx-8 md:mx-2 py-12  rounded-3xl shadow-[0px_11px_35px_4px_rgba(0,0,0,0.22)]  hover:scale-110 ">
          <p className="py-2 text-black font-semibold text-xl">
            Frontend Development
          </p>
          <div className="py-4 flex">
            <img className="w-[4rem]  px-2" src={laravel} alt="html" />
            <img className="w-[4rem]  px-2" src={react} alt="css" />
            <img
              className="w-[4rem] px-2"
              src={Django}
              alt="javascript"
            />
          </div>
          <p>
            This track deals with the aspect of your application that the users
            interact with. A front-end developer will be able to correctly
            interpret a given design to the user interface.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Programs;
