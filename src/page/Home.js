import React from 'react'
import logo2 from '../assets/images/ingresive.jpg'
import wire2 from '../assets/images/section3wire.svg'
import wire3 from '../assets/images/section5wire.svg'

import curve from '../assets/images/curve1.png'
import curve2 from '../assets/images/curve2.svg'
import curve3 from '../assets/images/curve3b.svg'
import curve4 from '../assets/images/curve4.svg'
import curve5 from '../assets/images/curve5.svg'
import curve6 from '../assets/images/curve6.svg'

// import hand from '../assets/images/time.png'
// import hand2 from '../assets/images/round.svg'
// import hand3 from '../assets/images/hour.png'

import hand from '../assets/images/bmentor.svg'
import hand2 from '../assets/images/bpractice.svg'
import hand4 from '../assets/images/games.svg'
// import hand5 from '../assets/images/dotsection5.svg'




import star from '../assets/images/Star1.svg'
import Button from '../components/Button'



const Home = () => {
  return (
    <div>
      <main>
        <div className='md:flex md:justify-evenly md:w-full my-4 mx-auto  border border-y-gray-300  p-4 text-center bg-white border-x-[white]'>
          <div className='flex justify-center items-center md:w-1/3'>
            <p className='font-medium text-2xl'>
              INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN DONATION...
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <img className=' shrink-0' src={logo2} alt='logo'/>
          </div>
          <div className='flex justify-center items-center md:w-1/4 md:text-xl p-2'>
             <p className='text-end'>
                to help increase the earning power of African youths 
                by providing them with tech skills, community, 
                tools, resources, and jobs... <button  className='text-[#3a2350]'> Read more</button>
             </p>
          </div>
        </div>
      </main>
      <section className='p-4 m-2'>
        <div className='mx-4'>
          <div >
            <img className='mx-auto w-16' src={wire2} alt='arrow'/>
          </div>
          <div>
            <p className='bg-[#3a2350] max-w-max text-white text-lg p-2 my-4'>Why Zuri Training?</p>
          </div>
          <div className='md:flex justify-between '>
            <p className='text-2xl font-semibold md:text-3xl md:leading-[3rem]  md:w-1/2'>
            Here at Zuri, you gain access to enough knowledge 
            to introduce and aid your success in the tech industry.
            </p>
            <img className='hidden md:block md:mr-44' src={star} alt='star'/>
          </div>
        </div>
      </section>
      <section>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 text-white text-4xl items-center'>
          <div className='relative'>
            <div className=' h-[345px] rounded-3xl m-6 bg-[#3a2350]'>
              <h1 className='font-bold p-8 leading-6'>01</h1>
              <h3 className='pl-8 py-4 font-semibold text-2xl w-1/2'>Fully remote</h3>
              <p className='pl-8 py-4 w-3/4 text-lg'>100% online classes available to everyone in the world</p>
            </div>
            <div className='absolute top-6 right-6'>
              <img className='w-32 h-32 ' src={curve} alt='curve1'/>
            </div>
          </div>
          {/* second */}
          <div className='relative'>
            <div className=' h-[345px] rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-white'>
              <h1 className='font-bold p-8 leading-6'>02</h1>
              <h3 className='pl-8 py-4 font-semibold text-2xl w-1/2'>Fully remote</h3>
              <p className='pl-8 py-4 w-3/4 text-lg'>100% online classes available to everyone in the world</p>
            </div>
            <div className='absolute top-6 right-6'>
              <img className='w-32 h-32 ' src={curve2} alt='curve1'/>
            </div>
          </div>
          {/* third */}
          <div className='relative'>
            <div className=' h-[345px] rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-[#3a2350]'>
              <h1 className='font-bold p-8 leading-6'>03</h1>
              <h3 className='pl-8 py-4 font-semibold text-2xl w-1/2'>Fully remote</h3>
              <p className='pl-8 py-4 w-3/4 text-lg'>100% online classes available to everyone in the world</p>
            </div>
            <div className='absolute top-6 right-6'>
              <img className=' w-32 h-32 ' src={curve3} alt='curve3'/>
            </div>
          </div>
          {/* fourth */}
          <div className='relative'>
            <div className=' h-[345px] rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 '>
              <h1 className='font-bold p-8 leading-6'>04</h1>
              <h3 className='pl-8 py-4 font-semibold text-2xl w-1/2'>Fully remote</h3>
              <p className='pl-8 py-4 w-3/4 text-lg'>100% online classes available to everyone in the world</p>
            </div>
            <div className='absolute top-6 right-6'>
              <img className='w-32 h-32 ' src={curve4} alt='curve4'/>
            </div>
          </div>
          {/* fifth */}
          <div className='relative'>
            <div className=' h-[345px] rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-[#3a2350]'>
              <h1 className='font-bold p-8 leading-6'>05</h1>
              <h3 className='pl-8 py-4 font-semibold text-2xl w-1/2'>Fully remote</h3>
              <p className='pl-8 py-4 w-3/4 text-lg'>100% online classes available to everyone in the world</p>
            </div>
            <div className='absolute top-6 right-6'>
              <img className=' w-32 h-32 ' src={curve5} alt='curve1'/>
            </div>
          </div>
          {/* sixth */}
          <div className='relative'>
            <div className=' h-[345px] rounded-3xl text-black shadow-[0px_11px_35px_4px_rgba(0,0,0,0.36)] m-6 bg-[#3a2350]'>
              <h1 className='font-bold p-8 leading-6'>06</h1>
              <h3 className='pl-8 py-4 font-semibold text-2xl w-1/2'>Fully remote</h3>
              <p className='pl-8 py-4 w-3/4 text-lg'>100% online classes available to everyone in the world</p>
            </div>
            <div className='absolute top-6 right-6'>
              <img className=' w-32 h-32 ' src={curve6} alt='curve1'/>
            </div>
          </div>
        </div>
      </section>
      <article className='bg-[#3a2350] w-full h-[300vh] mt[4rem]'>
        <div>
          <div className='relative '>
            <img className='mx-auto pt-4 ' src={wire3}  alt=''/>
          </div>
          <div className='text-white text-lg '>
            <p className='px-8 '>We will help you get started</p>
            <p className='text-3xl px-8 leading-[2.2rem] w-3/4'>High quality training with hands-on practice</p>
            <p className='text-lg p-8 leading-[2.2rem] m-auto'>We give you weekly tasks, ranging from easy to complex, as you progress 
              from stage to stage; making it to the 
              final stage means you are now ready to continue 
              learning and growing independently.
            </p>
          </div>
          <div className='ml-[3rem]'>
              <button className='w-40 h-11 rounded-full bg-white text-[#3a2350] p-2 shrink-0'>Enrol Now</button>
           </div>
          <div className='grid grid-cols-2 h-[16rem] justify-evenly w-full  gap-4 m-6'>
            <button className='flex items-center w-[15rem] h-3/4 px-4 rounded-full h-[4rem] border-2 border-[white] text-white p-2 shrink-0'><img src={hand}  className='px-4'  alt='alo1'/>Enrol Now</button>
            <button className='flex items-center w-[15rem] h-3/4 px-4 rounded-full h-[4rem] border-2 border-[white] text-white p-2 shrink-0'><img src={hand2} className='px-4'  alt='alo12'/>Enrol Now</button>
            <button className='flex items-center w-[15rem] h-3/4 px-4 rounded-full h-[4rem] border-2 border-[white] text-white p-2 shrink-0'><img src={hand2} className='px-4'  alt='alo13'/>Enrol Now</button>
            <button className='flex items-center w-[15rem] h-3/4 px-4 rounded-full h-[4rem] border-2 border-[white] text-white p-2 shrink-0'><img src={hand4} className='px-4'  alt='alo14'/>Enrol Now</button>
            
          </div>

        </div>
      </article>
    </div>
  )
}

export default Home