import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
function Unique() {
  useEffect(() =>  {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='mt-14 unique  h-[400px] sm:h-[600px]'>
           <div className=' text-[#FFFFFF]  pl-4 pt-32 md:pl-12 lg:pl-[115px] xl:pl-28 sm:pt-64'>
            <div className='flex items-center space-x-3 '>
              <p className='h-5 w-5 bg-white'></p>
              <h1 className='text-[20px] text-[#FFFFFF] font-semibold'>More About Us</h1>
            </div>
            <div
            data-aos='fade-right' className=' text-[60px] oswald pt-6 sm:text-[120px] leading-none overflow-hidden text-left '>
            UNIQUE.
            <br/>
INNOVATE. 
            </div>
           </div>
    </div>
  )
}

export default Unique