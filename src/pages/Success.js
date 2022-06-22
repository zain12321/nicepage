import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GiStickFrame } from 'react-icons/gi'
import { MdOutlineTouchApp, MdPersonOutline } from 'react-icons/md'
import {RiAwardLine } from 'react-icons/ri'

function Success() {
    useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

  return ( 
    <div className=' md:flex-col 
    lg:flex-col ml-2 lg:ml-12 xl:ml-36 mb-4 mt-3 lg:mt-16 '>
                  <div className='pb-3 md:pb-6 lg:pb-14 '>
                      <h1 className='text-[48px] font-bold'>Consulting Successes</h1>
                      <p className='w-[350px] md:w-[720px] lg:w-[830px] xl:w-[790px] 
                      text-[18px] overflow-hidden'>Sample text. Click to select the text box. Click again or double click to start editing the text. Sit amet porttitor eget dolor morbi non arcu risus quis. Lacus sed viverra tellus in hac habitasse. Nam libero justo laoreet sit. Donec ultrices tincidunt arcu non sodales neque sodales.
</p>
                  </div>
                  <div className='ml-4 md:ml-[400px] lg:ml-[180px] xl:ml-[460px]
          gap-y-5 sm:gap-4   md:gap-y-5   lg:gap-y-8  lg:mt-0
                  grid grid-cols-1 md:grid-cols-1 md:grid-rows-4 grid-rows-4 lg:grid-cols-2
                   lg:grid-rows-2 text-[#FFFFFF] '>
       <div data-aos="fade-zoomIn"  className='h-[270px] w-[330px] bg-[#f1c50e] pt-11 flex flex-col items-center '>
           <GiStickFrame className='h-16 w-16 '/>
           <h1 className='
           text-[24px] text-[#FFFFFF] font-semibold pt-2'>Projects</h1>
           <p className='text-[60px] font-semibold'>100</p>
       </div>


       <div data-aos="fade-zoomIn"  className='h-[270px] w-[330px] bg-[#7c5ddf] pt-11 flex flex-col items-center'>
       <MdOutlineTouchApp className='h-16 w-16 '/>
           <h1 className='
           text-[24px] text-[#FFFFFF] font-semibold pt-2'>Projects</h1>
           <p className='text-[60px] font-semibold'>100</p>
       </div>




       <div data-aos="fade-zoomIn"  className='h-[270px] w-[330px] bg-[#7c5ddf]  pt-11 flex flex-col items-center'>
       <MdPersonOutline className='h-16 w-16 '/>
           <h1 className='
           text-[24px] text-[#FFFFFF] font-semibold pt-2'>Projects</h1>
           <p className='text-[60px] font-semibold'>100</p>
       </div>




       <div data-aos="fade-zoomIn" className='h-[270px] w-[330px] bg-[#f1c50e] pt-11 flex flex-col items-center'>
       <RiAwardLine className='h-16 w-16 '/>
           <h1 className='
           text-[24px] text-[#FFFFFF] font-semibold pt-2'>Projects</h1>
           <p className='text-[60px] font-semibold'>100</p>
       </div>
                  </div>
    </div>
  )
}

export default Success