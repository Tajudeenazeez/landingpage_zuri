import curve from "../assets/images/curve1.png";
import dot from "../assets/images/dotsection5.svg";
import round from "../assets/images/round.svg";
import React from 'react'

const Advertise = () => {
  return (
    <div>
      <main className="flex justify-center">
        <div className='rounded-2xl bg-[#3a2350] w-[90%] h-[28rem] relative'>
         <div className="h-28">
         <img src={curve} className='absolute w-24 z-10 top-0 right-0' alt='curve'/>
          <img src={round} className='absolute w-24 z-10 top-2 left-10' alt=''/>
         </div>
         <div className="text-white text-3xl text-center m-4">
            <p className="my-4">Get started</p>
              <h1 className="font-semibold  xl:text-[5rem] align-center leading-[3rem]">Break into tech industry like a pro</h1>
              <button className=" my-8 w-40 h-11 rounded-full bg-white text-[#3a2350] p-2 shrink-0">
              Enrol Now
            </button>
         </div>
        <img src='' alt=''/>
        <img src={dot} className='w-20' alt=''/>



        </div>
      </main>
    </div>
  )
}

export default Advertise