import React from "react";
import wire2 from "../assets/images/section7wire.svg";
import Star from "../assets/images/Star1.svg";
import hour from "../assets/images/hour.png";
import time from "../assets/images/time.png";

export const Course = () => {
  return (
    <div className="lg:mx-8 mx-[4rem] py-4">
      <div className="flex justify-between py-4 md:justify-evenly">
        <img src={wire2} className="w-24 md:w-40" alt="" />
        <img src={Star} className="w-24 md:w-40" alt="" />
      </div>
      <div className="flex items-center text-3xl  flex-col py-4 ">
        <p className="text-yellow-600 ">Structure</p>
        <p className="text-black font-semibold">Program Structure</p>
        <p className="text-xl mb-12">
          There are 2 broad paths in this program based on your availability.
        </p>
      </div>
      <div className=" lg:grid grid-cols-2 gap-2 xl:gap-x-12 xl:mx-24">
        <div className="relative mb-14 align-center bg-[#3a2350] shadow-[0px_11px_35px_4px_rgba(53,35,80,0.42)] rounded-[3rem] font-semibold text-white py-8 px-8 lg:py-[3rem] lg:px-[5rem]">
          <h1 className="text-3xl font-semibold py-4">Available Courses</h1>
          <p className="py-2">
            Requires at least 25 hours weekly on program content.
          </p>
          <h3 className="py-2">Available Courses</h3>
          <ul className="list-disc  py-2">
            <li>Frontend</li>
            <li>Backend</li>
            <li>Python</li>
            <li>Mobile</li>
            <li>Firebase</li>
            <li>UI/UX</li>
          </ul>
          <p className="py-2">The following course combination are allowed</p>
          <ul className="list-disc  py-2">
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
          </ul>
          <p className="py-2">
            Please note, that you can only select the above course combination
            for this cohort.
          </p>
          <img
            src={hour}
            className="z-10 absolute right-10 bottom-12 w-24"
            alt="cup"
          />
        </div>
        <div className="relative mb-14 align-center bg-[#3a2350] shadow-[0px_11px_35px_4px_rgba(53,35,80,0.42)] rounded-[3rem] font-semibold text-white  py-[3rem] px-[5rem]">
          <h1 className="text-3xl font-semibold  py-4">Available Courses</h1>
          <p className="py-2">
            Requires at least 25 hours weekly on program content.
          </p>
          <h3 className="py-2 ">Available Courses</h3>
          <ul className="list-disc  py-4">
            <li>Frontend</li>
            <li>Backend</li>
            <li>Python</li>
            <li>Mobile</li>
            <li>Firebase</li>
            <li>UI/UX</li>
          </ul>
          <p className="py-2">The following course combination are allowed</p>
          <ul className="list-disc  py-4">
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
            <li>lorem Ipsom course</li>
          </ul>
          <p className="py-2">
            Please note, that you can only select the above course combination
            for this cohort.
          </p>
          <img
            src={time}
            className="z-10 absolute right-10 bottom-12 w-40"
            alt="cup"
          />
        </div>
      </div>
    </div>
  );
};
