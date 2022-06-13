import React from 'react'

function Service(props) {
    const { image, title, desc } = props
  return (
    <div className=''>
    
      <div className='
     '>
         <div className='w-[300px] h-[150px] sm:h-[200px] sm:w-[400px] md:w-[600px] lg:w-[400px] lg:h-[140px]
          xl:w-[560px] xl:h-[160px] text-[#111111]  '> 
          <div className='flex space-x-4 sm:space-x-9 overflow-hidden '>
        
          <img
        className='h-[40px] w-[40px] sm:h-[60px] sm:w-[90px] md:h-[50px] md:w-[70px] xl:h-[68px] xl:w-[68px]'  
         src={image}
             alt=""
             />
             <div className='flex flex-col shrink'>
    <h1 className='sm:text-[32px] md:text-[24px] sm:font-semibold md:font-normal text-left text-[#111111]'>{title}</h1>
          <p className='
         
          sans sm:text-[20px] md:text-[16px] pt-6 text-left '>{desc}</p>
    </div>
          </div>
  
           {/* pl-[60px] lg:pl-[60px] xl:pl-[120px]  */}
         </div>

         {/* <div className='h-44 w-[500px] flex'> 
             <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDbD8z8CalI3ai8HF3i5NHbOg4-TEGUsG3jxdx3st4XLjcspmu"
             alt=""
             />
             sssssssssssss
         </div>

         <div className='h-44 w-[500px] flex'> 
             <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsLSuWIyeZFZzoywc-wcnBnsb2jlF8rrv1Cdbp6gsQZyT4Hj80"
             alt=""
             />
             sssssssssssss
         </div>

         <div className='h-44 w-[500px] flex'> 
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrz_PhIJkRMc3ZyuFNBqxKqBgXhwsppR1bppKPCNpSwiTFLyu"
             alt=""
             />
             sssssssssssss
         </div> */}
   
      </div>
    </div>
  )
}

export default Service