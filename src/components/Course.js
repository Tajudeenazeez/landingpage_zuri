import React from 'react'
import wire2 from '../assets/images/section7wire.svg'
import Star from '../assets/images/Star1.svg'


export const Course = () => {
  return (
    <div className='mx-12 py-4'>
        <div className='flex justify-between py-4 md:justify-evenly'>
            <img src={wire2} className='w-24 md:w-40' alt=''/>
            <img src={Star} className='w-24 md:w-40' alt=''/>
        </div>
        <div className='mx-auto py-4'>
            <p className='text-yellow-600 align-center'>Structure</p>
            <p className='text-black font-semibold'>Program Structure</p>
            <p>There are 2 broad paths in this program based on your availability.</p>
        </div>
        <div className=' lg:grid grid-cols-2 gap-4'>    
           <div className='mb-14 align-center bg-[#3a235922] shadow-[0px_11px_35px_4px_rgba(53,35,80,0.42)] rounded-[6rem] font-semibold text-[#3a2350] m-4 p-8'>
                    <h1 className='py-4'>Available Courses</h1>
                    <p className='py-4'>Requires at least 25 hours weekly on program content.</p>
                    <h3 className='py-4'>Available Courses</h3>
                    <ul className='list-disc mx-8 py-4'>
                        <li>Frontend</li>
                        <li>Backend</li>
                        <li>Python</li>
                        <li>Mobile</li>
                        <li>Firebase</li>
                        <li>UI/UX</li>
                    </ul>
                    <p className='py-4'>The following course combination are allowed</p>
                    <ul className='list-disc mx-8 py-4'>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                    </ul>
                    <p className='py-4'>
                        Please note, that you can only select the 
                        above course combination for this cohort.
                    </p>

           </div>
           <div className='mb-14 align-center bg-[#3a235922] shadow-[0px_11px_35px_4px_rgba(53,35,80,0.42)] rounded-[6rem] font-semibold text-[#3a2350] m-4 p-8'>
                    <h1 className='py-4'>Available Courses</h1>
                    <p className='py-4'>Requires at least 25 hours weekly on program content.</p>
                    <h3 className='py-4'>Available Courses</h3>
                    <ul className='list-disc mx-8 py-4'>
                        <li>Frontend</li>
                        <li>Backend</li>
                        <li>Python</li>
                        <li>Mobile</li>
                        <li>Firebase</li>
                        <li>UI/UX</li>
                    </ul>
                    <p className='py-4'>The following course combination are allowed</p>
                    <ul className='list-disc mx-8 py-4'>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                        <li>lorem Ipsom course</li>
                    </ul>
                    <p className='py-4'>
                        Please note, that you can only select the 
                        above course combination for this cohort.
                    </p>

           </div>


        </div>
        
    </div>
  )
}
