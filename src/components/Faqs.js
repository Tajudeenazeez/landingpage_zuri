import React, { useState } from 'react'
import { FaPlus, FaTwitter } from 'react-icons/fa'
import wire2 from '../assets/images/section3wire.svg'


const Faqs = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    const [toggle5, setToggle5] = useState(false)
    const [toggle6, setToggle6] = useState(false)
  return (
    <div className=' w-full'>
        <div className='flex flex-col items-center'>
            <img src={wire2} className='' alt='wire'/>
            <h2 className='py-2 text-yellow-600 text-2xl'> Got Questions ?</h2>
            <h1 className='py-2 font-semibold text-3xl'>Frequently Asked Questions</h1>
            <section className='border-2 border-[#3a235922]  md:w-1/2 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle1(!toggle1)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold md:text-xl'>Would I have to pay to enroll for the training?</p>
                        <FaPlus className={`${toggle1? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle1 ? "block" : "hidden"}`}>No, the program is completely free thanks to Ingressive For Good</p>
                </div>
            </section>
            <section className='border-2 border-[#3a235922]  md:w-1/2 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle2(!toggle2)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold md:text-xl'>Would I have to pay to enroll for the training?</p>
                        <FaPlus className={`${toggle2? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle2 ? "block" : "hidden"}`}>No, the program is completely free thanks to Ingressive For Good</p>
                </div>
            </section>
            <section className='border-2 border-[#3a235922]  md:w-1/2 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle3(!toggle3)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold md:text-xl'>Would I have to pay to enroll for the training?</p>
                        <FaPlus className={`${toggle3? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle3 ? "block" : "hidden"}`}>No, the program is completely free thanks to Ingressive For Good</p>
                </div>
            </section>    <section className='border-2 border-[#3a235922]  md:w-1/2 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle4(!toggle4)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold md:text-xl'>Would I have to pay to enroll for the training?</p>
                        <FaPlus className={`${toggle4? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle4 ? "block" : "hidden"}`}>No, the program is completely free thanks to Ingressive For Good</p>
                </div>
            </section>    <section className='border-2 border-[#3a235922]  md:w-1/2 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle5(!toggle5)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold md:text-xl'>Would I have to pay to enroll for the training?</p>
                        <FaPlus className={`${toggle5? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle5 ? "block" : "hidden"}`}>No, the program is completely free thanks to Ingressive For Good</p>
                </div>
            </section>    <section className='border-2 border-[#3a235922]  md:w-1/2 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle6(!toggle6)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold md:text-xl'>Would I have to pay to enroll for the training?</p>
                        <FaPlus className={`${toggle6? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle6 ? "block" : "hidden"}`}>No, the program is completely free thanks to Ingressive For Good</p>
                </div>
            </section>
            <div className='flex justify-center items-center'>
                <p className='text-xl mx-2'>Still got Questions?</p>
                <button className=" flex items-center w-44 h-11 rounded-full bg-[#3a2350] text-white p-2 shrink-0">
                <FaTwitter className="mx-2" />
                 Tweet them at us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Faqs