import React from 'react'

function Project(props) {
  const { image, title, location, year } = props
  return (
    <div className='ml-3 sm:ml-[50px] sm:pt-6 md:pt-0  md:ml-[60px] lg:ml-[110px] xl:ml-[120px]'>
              <div className='flex flex-col text-[#111111] space-y-5'>
                <img
                className='w-[280px] h-[150] sm:h-[550px] sm:w-[530px] 
                md:h-[260px] md:w-[300px] lg:w-[350px] xl:h-[500px] xl:w-[480px] '
     src={image}
                alt=''
                />
                <div className='items-center text-[16px] space-y-5'>
                  <h1 className='sm:text-[30px] md:text-[24px] oswald text-left  '>{title}</h1>
                 <div>
                 <p className='flex items-center space-x-2 sm:text-[22px] md:text-[17px]'><span className='font-semibold'>Location:</span>
                  <span className=''> {location}</span></p>
                  <p className='flex items-center space-x-2 sm:text-[22px] md:text-[17px]' ><span className='font-semibold'>Year:</span>
                   <span>{year}</span></p>
                  
                 </div>
                </div>
              </div>
    </div>
  )
}

export default Project