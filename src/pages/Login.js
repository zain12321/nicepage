import React from 'react'

function Login() {
  return (
    <div className='md:ml-24 lg:ml-8 xl:ml-24 ml-0 space-y-9 mt-[50px] sm:mt-9 md:mt-0'>
        <div className='text-[#FFFFFF] font-semibold '>
            <h1 className='text-[24px] text-[#FFFFFF] font-semibold overflow-hidden'>Make An Appointment</h1>
            <p className='
            w-[300px] pt-4 text-[18px] font-semibold overflow-hidden'>Get in touch and discover how we can help. We aim to be in touch</p>
        </div>
     <div className='bg-[#f1c50e] w-[300px] lg:w-[370px] xl:w-[420px] h-[380px]  rounded-3xl
   pl-4 pt-4  md:pt-8 lg:pt-4 sm:pl-4 sm:pt-5 md:pl-9  lg:pl-9 space-y-4'>
        <div>
            <input type='name'
            placeholder='Enter Your Name'
            required
            className='rounded-3xl h-11 pl-4 w-[270px] md:w-[230px] lg:w-[300px] xl:w-[350px] text-[18px]'/>

        </div>
        <div>
            <input type='name'
            placeholder='Enter Your Email'
            required
            className='rounded-3xl h-11 pl-4 w-[270px] md:w-[230px] lg:w-[300px] xl:w-[350px] text-[18px]'/>

        </div>
        <div>
            <textarea 
            placeholder='Enter Message'
            className='rounded-3xl h-32 pl-4 pt-3 w-[270px] md:w-[230px] lg:w-[300px] xl:w-[350px] text-[18px]'/>

        </div>
        <button className='bg-white h-12 w-32 rounded-3xl  text-[18px]'>
              Submit
     </button>
     </div>
   
    </div>
  )
}

export default Login