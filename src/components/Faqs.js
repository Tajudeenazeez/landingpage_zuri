import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import wire2 from '../assets/images/section3wire.svg'


const Faqs = () => {
  return (
    <div className=' w-full'>
        <div className='flex flex-col items-center'>
            <img src={wire2} className='' alt='wire'/>
            <h2 className='py-2 text-yellow-600 text-2xl'> Got Questions ?</h2>
            <h1 className='py-2 font-semibold text-3xl'>Frequently Asked Questions</h1>
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