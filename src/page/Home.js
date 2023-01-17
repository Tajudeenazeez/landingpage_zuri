import React from "react";
import logo2 from "../assets/images/ingresive.jpg";
import wire2 from "../assets/images/section3wire.svg";
import wire3 from "../assets/images/section5wire.svg";



// import hand from '../assets/images/time.png'
// import hand2 from '../assets/images/round.svg'
// import hand3 from '../assets/images/hour.png'

import hand from "../assets/images/bmentor.svg";
import hand2 from "../assets/images/bpractice.svg";
import hand4 from "../assets/images/games.svg";

import girl from "../assets/images/girlsection5-image.png";
import dot from "../assets/images/dotsection5.svg";

// import hand5 from '../assets/images/dotsection5.svg'
import star from "../assets/images/Star1.svg";
import Programs from "../components/Programs";
import Button from "../components/Button";
import Faqs from "../components/Faqs";
import { Course } from "../components/Course";
import WhyUs from "../components/WhyUs";
import Advertise from "../components/Advertise";

const Home = () => {
  return (
    <div>
      <main>
        <div className="md:flex md:justify-evenly md:w-full my-4 mx-auto  border border-y-gray-300  p-4 text-center bg-white border-x-[white]">
          <div id='about' className="flex justify-center items-center md:w-1/3">
            <p className="font-medium text-2xl">
              INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN
              DONATION...
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img className=" shrink-0" src={logo2} alt="logo" />
          </div>
          <div className="flex justify-center items-center md:w-1/4 md:text-xl p-2">
            <p className="text-end">
              to help increase the earning power of African youths by providing
              them with tech skills, community, tools, resources, and jobs...{" "}
              <button className="text-[#3a2350]"> Read more</button>
            </p>
          </div>
        </div>
      </main>
      <section className="p-4 m-2">
        <div className="mx-4">
          <div>
            <img className="mx-auto w-16" src={wire2} alt="arrow" />
          </div>
          <div id="why-us">
            <p className="bg-[#3a2350] max-w-max text-white text-lg p-2 my-4">
              Why Zuri Training?
            </p>
          </div>
          <div className="md:flex justify-between ">
            <p className="text-2xl font-semibold md:text-3xl md:leading-[3rem]  md:w-1/2">
              Here at Zuri, you gain access to enough knowledge to introduce and
              aid your success in the tech industry.
            </p>
            <img className="hidden md:block md:mr-44" src={star} alt="star" />
          </div>
        </div>
      </section>
    {/* why us */}
    <WhyUs/>
      <article className="bg-[#3a2350] w-full h-[200vh] lg:h-[175vh] mt[4rem] relative ">
        <div className="md:w-[40rem] md:mx-auto lg:m-2 lg:w-full">
          <div>
            <img className="mx-auto pt-4 " src={wire3} alt="" />
          </div>
          <div className="text-white text-lg ">
            <p className="px-8 ">We will help you get started</p>
            <p className="text-3xl px-8 leading-[2.2rem] w-3/4 lg:w-1/3">
              High quality training with hands-on practice
            </p>
            <p className="text-lg p-8 leading-[2.2rem] m-auto lg:w-1/3 lg:m-2">
              We give you weekly tasks, ranging from easy to complex, as you
              progress from stage to stage; making it to the final stage means
              you are now ready to continue learning and growing independently.
            </p>
          </div>
          <div className="ml-[3rem]">
            <button className="w-40 h-11 rounded-full bg-white text-[#3a2350] p-2 shrink-0">
              Enrol Now
            </button>
          </div>
          <div className="grid grid-cols-2 h-[16rem]  justify-evenly w-[20rem] md:w-[30rem]  gap-4 m-6 ">
            <button className="flex items-center  h-3/4 p-4 rounded-full  h-[4rem] border-2 border-[white] text-white p-2 shrink">
              <img src={hand} className="h-12 pr-4" alt="alo1" />
              Enrol Now
            </button>
            <button className="flex items-center  h-3/4 p-4 rounded-full  h-[4rem] border-2 border-[white] text-white p-2 shrink">
              <img src={hand2} className="h-12 pr-4" alt="alo12" />
              Enrol Now
            </button>
            <button className="flex items-center  h-3/4 p-4 rounded-full  h-[4rem] border-2 border-[white] text-white p-2 shrink">
              <img src={hand2} className="h-12 pr-4" alt="alo13" />
              Enrol Now
            </button>
            <button className="flex items-center  h-3/4 p-4 rounded-full  h-[4rem] border-2 border-[white] text-white p-2 shrink">
              <img src={hand4} className="h-12 pr-4" alt="alo14" />
              Enrol Now
            </button>
          </div>
          <div>
            <img
              className="w-full mx-auto lg:w-1/2 lg:absolute top-16 right-16"
              src={girl}
              alt="shopping"
            />
          </div>
          <div>
            <img src={dot} className='w-24' alt="dot" />
          </div>
        </div>
      </article>
      <Programs />
      <div className="flex justify-center my-20">
        <Button />
      </div>
      <Faqs />
      <Course/>
      <Advertise/>
      
      

    </div>
  );
};

export default Home;
