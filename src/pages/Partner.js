import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AiOutlinePlus } from 'react-icons/ai'
function Partner() {
  useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

  return (
    <div className='sm:pl-16 md:flex pl-4 md:pl-12 lg:pl-14 xl:pl-36 pt-14 pb-32'>
            <div data-aos="fade-zoomIn-out" className='space-y-6 '>
               <h1 className='text-[48px] font-bold w-[300px]
               lg:w-[390px] xl:w-[450px] leading-tight overflow-hidden'>We partner with the world's leading universities</h1>
               <p className='w-[300px] pb-2 lg:w-[380px] xl:w-[440px] text-[18px] font-medium '>Etiam erat velit scelerisque in dictum non consectetur. 
                   Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum.</p>
                   <button className='uppercase bg-[#F1C50E] hover:bg-[#f3d06f] h-[54px] 
                   w-[240px] text-[#111111] tracking-wider text-[16px] sans font-semibold'>read more</button>
          
            </div>
            <div className='pl-0 md:pl-16 lg:pl-8 xl:pl-32 pt-8 space-y-[60px]'>
              <div className='flex items-center justify-between space-x-1 
            w-[290px]  sm:w-[390px] md:w-[390px] lg:w-[450px]'>
                <h1 className='tex-[16px] sm:text-[18px] font-semibold text-[#7C5DDF] hover:text-[#6b42f3] 
                cursor-pointer w-[150px] sm:w-[300px] md:w-[300px]  lg:w-[400px]'>Create a Webinar in Minutes</h1>
                <button className='h-10 text-[#FFFFFF] w-10 rounded-full bg-[#7C5DDF] pl-[6px]'>
                  <AiOutlinePlus className='h-7 w-7 cursor-pointer'/></button>
              </div>

              <div className='flex items-center justify-between space-x-1
               w-[300px] sm:w-[390px] md:w-[390px] lg:w-[450px] '>
                <h1 className='text-[17px] sm:text-[18px]
                 font-semibold text-[#7C5DDF] hover:text-[#6b42f3]
                 cursor-pointer w-[180px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>Business
                  Sustainability Management</h1>
                <button className='h-10 text-[#FFFFFF] w-10 rounded-full bg-[#7C5DDF] pl-[6px]'>
                  <AiOutlinePlus className='h-7 w-7 cursor-pointer'/></button>
              </div>

              <div className='flex items-center justify-between space-x-1 w-[290px] sm:w-[390px] md:w-[390px] lg:w-[450px]'>
                <h1 className='text-[17px] sm:text-[18px] font-semibold text-[#7C5DDF] hover:text-[#6b42f3]
                 cursor-pointer w-[200px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>Learn how to 
                 grow your business</h1>
                <button className='h-10 text-[#FFFFFF] w-10 rounded-full bg-[#7C5DDF] pl-[6px]'>
                  <AiOutlinePlus className='h-7 w-7 cursor-pointer'/></button>
              </div>



              <div className='flex items-center justify-between space-x-1 w-[290px] sm:w-[390px] md:w-[390px] lg:w-[450px]'>
                <h1 className='text-[16px] sm:text-[18px] font-semibold text-[#7C5DDF]
                 hover:text-[#6b42f3] cursor-pointer w-[200px] sm:w-[360px] lg:w-[340px] xl:w-[400px]'>Practical tips to help you price your products</h1>
                <button className='h-10 text-[#FFFFFF] w-10 rounded-full bg-[#7C5DDF] pl-[6px]'>
                  <AiOutlinePlus className='h-7 w-7 cursor-pointer'/></button>
              </div>
            </div>
    </div>
  )
}

export default Partner