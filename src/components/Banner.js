import React from 'react'
import girl from '../assets/images/lady1.jpg'
import line from '../assets/images/line.svg'
import Button from './Button'
import wire1 from '../assets/images/section1wire.svg'
import boy from '../assets/images/male1.jpg'




const Banner = () => {
  return (
    <div className='mt-[9rem] bg-white'>
        <div>
            <div className='flex flex-col items-center relative'>
                <div className='flex justify-center items-center w-3/4'>
                    <p className='text-[#3a2350] text-lg font-Graphik my-4 px-2 text-center'> <strong>Notice:</strong>cohort II registration is closed, You can register to join the next cohort.
                    </p>
                </div>
                <div>
                    <img className='w-96 h-80 xl:absolute left-5 top-28'  src={girl} alt='girl'/>
                </div>
                <div>
                    <p className='bg-[#503879] text-white p-2 text-lg m-4'>
                    And now your search has ended...
                    </p>
                </div>
                <div className=' w-3/4'>
                    <div className='flex justify-center items-center  m-4'>
                        <h1 className='text-[#3a2350] text-3xl text-center xl:w-[34rem] xl:text-[3rem] leading-[4rem]'>
                            Gain knowledge to help you scale through the tech industry for free.
                        </h1>
                    </div>
                        <div className='w-3/4 pr-4 flex justify-end items-center'>
                            <img className='w-44' src={line} alt='line' />
                        </div>
                </div>
                <div className='w-3/4 m-4 flex justify-center items-center text-lg p-4 text-center '>
                    <p>
                        A basic introduction to software development and
                        product design aimed at complete beginners, 
                        which anyone can join
                    </p>
                </div>
                <div>
                    <img className=' w-80 h-80 xl:absolute xl:right-5 xl:top-28 '  src={boy} alt='boy'/>
                </div>
                <div>
                    <Button/>
                </div>
                <div className='flex justify-end w-2/3'>
                    <img src={wire1} alt='arrow'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner