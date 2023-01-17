import React from "react";
import curve from "../assets/images/curve1.png";
import curve2 from "../assets/images/curve2.svg";
import curve3 from "../assets/images/curve3b.svg";
import curve4 from "../assets/images/curve4.svg";
import curve5 from "../assets/images/curve5.svg";
import curve6 from "../assets/images/curve6.svg";


const WhyUs = () => {
  return (
    <div>
      <section >
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 text-white text-4xl items-center">
          <div className="relative hover:-translate-y-2">
            <div className=" h-[345px]  rounded-3xl m-6 bg-[#3a2350]">
              <h1 className="font-bold p-8 leading-6">01</h1>
              <h3 className="pl-8 py-4 font-semibold text-2xl w-1/2">
                Fully remote
              </h3>
              <p className="pl-8 py-4 w-3/4 text-lg">
                100% online classes available to everyone in the world
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <img className="w-32 h-32 " src={curve} alt="curve1" />
            </div>
          </div>
          {/* second */}
          <div className="relative hover:-translate-y-2">
            <div className=" h-[345px]  rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-white">
              <h1 className="font-bold p-8 leading-6">02</h1>
              <h3 className="pl-8 py-4 font-semibold text-2xl w-1/2">
                Fully remote
              </h3>
              <p className="pl-8 py-4 w-3/4 text-lg">
                100% online classes available to everyone in the world
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <img className="w-32 h-32 " src={curve2} alt="curve1" />
            </div>
          </div>
          {/* third */}
          <div className="relative hover:-translate-y-2">
            <div className=" h-[345px]  rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-[#3a2350]">
              <h1 className="font-bold p-8 leading-6">03</h1>
              <h3 className="pl-8 py-4 font-semibold text-2xl w-1/2">
                Fully remote
              </h3>
              <p className="pl-8 py-4 w-3/4 text-lg">
                100% online classes available to everyone in the world
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <img className=" w-32 h-32 " src={curve3} alt="curve3" />
            </div>
          </div>
          {/* fourth */}
          <div className="relative hover:-translate-y-2">
            <div className=" h-[345px]  rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 ">
              <h1 className="font-bold p-8 leading-6">04</h1>
              <h3 className="pl-8 py-4 font-semibold text-2xl w-1/2">
                Fully remote
              </h3>
              <p className="pl-8 py-4 w-3/4 text-lg">
                100% online classes available to everyone in the world
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <img className="w-32 h-32 " src={curve4} alt="curve4" />
            </div>
          </div>
          {/* fifth */}
          <div className="relative hover:-translate-y-2">
            <div className=" h-[345px]  rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-[#3a2350]">
              <h1 className="font-bold p-8 leading-6">05</h1>
              <h3 className="pl-8 py-4 font-semibold text-2xl w-1/2">
                Fully remote
              </h3>
              <p className="pl-8 py-4 w-3/4 text-lg">
                100% online classes available to everyone in the world
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <img className=" w-32 h-32 " src={curve5} alt="curve1" />
            </div>
          </div>
          {/* sixth */}
          <div className="relative hover:-translate-y-2">
            <div className=" h-[345px]  rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-[#3a2350]">
              <h1 className="font-bold p-8 leading-6">06</h1>
              <h3 className="pl-8 py-4 font-semibold text-2xl w-1/2">
                Fully remote
              </h3>
              <p className="pl-8 py-4 w-3/4 text-lg">
                100% online classes available to everyone in the world
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <img className=" w-32 h-32 " src={curve6} alt="curve1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
