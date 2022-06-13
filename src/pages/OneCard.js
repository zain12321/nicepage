import React from 'react'
import { ImQuotesLeft} from 'react-icons/im'
function OneCard() {
  return (
    <div className='bg-[#f2f2f2] pt-24 pl-6 sm:pl-12 md:pl-9 lg:pl-12 xl:pl-32 pb-3 sm:pb-32'>
        <h1 className='text-[60px] text-[#111111] font-bold '>What People Say</h1>
    <div className='bg-[#FFFFFF] w-[300px] sm:w-[500px] mt-6 h-[740px] sm:h-[600px] md:w-[700px] md:h-[500px] lg:h-[400px] 
    lg:w-[930px] xl:w-[1150px]  md:flex justify-between'>
             <div className='sm:pt-14 sm:pl-4 md:pl-3 lg:pl-8 xl:pl-14'>
                 <p  className='w-[300px] sm:w-[430px] md:w-[510px] lg:w-[730px] xl:w-[830px]
                  text-[20px] leading-10 overflow-hidden m'>Article evident arrived express 
                  highest men did boy. Mistress sensible entirely am so. Quick can manor
                   smart money hopes worth too. Comfort produce husband boy her had hearing. 
                   Law others theirs passed but wishes. You day real less till dear read. Considered 
                   use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He
                    an thing rapid these after going drawn or. Timed she his law the spoil round defer.
                     In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye
                      blessing. </p>
             </div>
           <div className='bg-[#7c5ddf] w-[300px] sm:h-[100px] sm:w-[500px]
            md:h-[500px] md:w-[150px] flex items-center justify-center
            h-[100px] lg:h-[400px]'>
           <p className='h-16 w-16 rounded-full bg-white text-[#7c5ddf] pl-3 pt-3'>
                 <ImQuotesLeft className='h-10 w-10'/>
             </p>
             </div>
    </div>
    </div>
  )
}

export default OneCard