import React from 'react'

function About() {
  // const purple = "#7c5ddf";
  // const [bg, setBg] = React.useState(purple)
  // const bgChange = () => {
  //   let newBg = "#7c5ddf"
  //   setBg(newBg);

  // }
  const [activeTab, setActiveTab] = React.useState("OVERVIEW")
  console.log("active tabs",activeTab)
  return (
    <div className='h-[980px] sm:h-[940px] md:h-[640px] pl-9 sm:pl-12 
    md:pl-12 lg:pl-10 xl:pl-28 pt-12'>
        <h1 className='text-[48px] font-bold '>
        About Us
        </h1>
        <div className='pt-14'>
            <div className='grid grid-cols-1 grid-rows-3 sm:flex'>
               <div >
               <button  onClick={()=> setActiveTab("OVERVIEW")} 
className='h-12 w-36  text-[18px] text-[#FFFFFF] bg-[#7c5ddf] sans font-semibold'>
  <button >
     overview
  </button>
</button>
               </div>
               <div className='flex items-center '>
               <button  onClick={()=> setActiveTab("FOUNDER")} className='h-12 w-36 
                text-[18px] text-[#111111] hover:text-[#FFFFFF] sans font-semibold'  >
               Founder
                </button>
                <button onClick={()=> setActiveTab("MISSION")} className='h-12 w-36
                 text-[18px] text-[#111111] hover:text-[#FFFFFF] sans font-semibold'>Mission</button>

               </div>
            </div>
            {activeTab === "OVERVIEW" && 
            
            <div className='h-[640px] sm:h-[600px] 
        w-[290px] overflow-hidden md:h-[380px] lg:h-[300px] sm:w-[500px] bg-[#FFFFFF] 
             md:w-[670px] lg:w-[900px] xl:w-[1100px] 
            pl-4 pt-4 space-y-7'>
            <p className='text-[24px] w-[250px] sm:w-[300px] md:w-[640px] lg:w-[830px] font-bold'>Brave 
  is an innovative web solution, which combines captivating design and flawless functionality in 
  a multipurpose HTML template.</p>
            <p className='text-[#7D5CCF] w-[260px] sm:w-[300px] md:w-[640px] lg:w-[730px] text-[16px] font-semibold'>Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p className='text-[16px] text-[#111111] w-[250px] sm:w-[300px] md:w-[640px] lg:w-[730px] font-medium leading-5'>Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     </div>
}
     {activeTab === "FOUNDER" && 
     
      <div className='h-[500px] sm:h-[370px] bg-[#FFFFFF] w-[290px] 
       sm:w-[500px] md:w-[670px] lg:w-[900px] xl:w-[1100px] pl-4 pt-4 sm:pt-6 md:pt-16 space-y-7'>

      <p className='text-[#111111] w-[250px] md:w-[600px] lg:w-[900px] xl:w-[1030px] text-[16px] font-semibold'>Sample 
      text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p className='text-[16px] text-[#111111] w-[250px] md:w-[600px] lg:w-[900px] xl:w-[970px] font-medium leading-5'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..</p>
</div>}
            
{activeTab === "MISSION" && 
     
     <div className='h-[500px] sm:h-[350px] bg-[#FFFFFF] w-[295px] sm:w-[500px] md:w-[670px] lg:w-[900px] xl:w-[1100px] pl-4 pt-4 sm:pt-14 space-y-7'>
     <p className='text-[24px] w-[300px] md:w-[500px]  lg:w-[830px] font-bold'>Be The First To Review This Product!.</p>
     <p className='text-[#111111] w-[260px] sm:w-[300px] lg:w-[640px] xl:w-[730px] text-[16px] font-semibold'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
     <button className='text-[20px] w-[230px] sm:w-[300px] bg-[#7D5CCF] h-14 text-[#FFFFFF]'>Write Product Review</button>
</div>}

        </div>

    </div>
  )
}

export default About