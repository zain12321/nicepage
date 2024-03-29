import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Strategy() {
  useEffect(() =>  {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='h-[1000px] sm:h-[1900px] lg:h-[800px] md:h-full
     w-screen bg-[#ECE2CC] text-[#111111] 
  mt-14 xl:mt-0 leading-none overflow-y-hidden'>
     <div className='grid grid-cols-1 grid-rows-2 text-left md:grid-cols-none
      md:grid-rows-none 
     pt-14 sm:space-x-1
     md:flex pl-3 sm:pl-11 md:pl-[50px] lg:pl-[125px] xl:pl-28'>
     <div className='flex items-center space-x-2 '>
         <p className='h-5 w-5 bg-[#111111]'>

         </p>
         <h1 className='text-[20px]
          roboto font-bold leading-none overflow-y-hidden '>We
          are
          an architecture design </h1>
     </div>
     <p className='text-[20px] roboto font-bold leading-none overflow-y-hidden'>agency</p>
     </div>
     <div className='flex-col pl-3 pt-6 sm:pl-9 space-y-6 md:pl-[50px] lg:pl-[120px] xl:pl-28'>
         <div data-aos="fade-right" className='text-[60px] text-left font-normal sm:font-normal sm:text-[120px]
          oswald leading-none overflow-y-hidden'>
         WINNING 
         <br/>
         STRATEGIES.

         </div>
         <div className='md:flex sm:ml-4 md:ml-10 lg:ml-16 xl:ml-[260px] md:space-x-16 '>
             <p className='w-[270px] sm:w-[550px]
             md:w-[260px] lg:w-[370px] border-box flex-shrink overflow-hidden text-[18px]
           leading-7  sm:leading-loose md:leading-8 text-left'>
             Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or.
             </p>
             <p className='w-[270px] overflow-hidden pt-16 sm:pt-8  md:pt-0 sm:w-[550px]
             md:w-[250px] lg:w-[370px] border-box flex-shrink text-[18px]
           leading-7  sm:leading-loose md:leading-8 text-left '>
             Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. 
             </p>
         </div>

     </div>

    </div>
  )
}

export default Strategy