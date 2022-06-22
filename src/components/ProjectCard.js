import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Project from './Project'

const projectitem = [
    {
        id:1,
        image:'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/eec544a86c9954949f50e530/pexels-photo-3277468.jpeg',
        title:'BUSINESS CENTER',
        location:"New York",
        year:'2020'
    },
    {
        id:2,
        image:'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/028ef3e96c345427b4fea18b/pexels-photo-6766628.jpeg',
        title:'BUSINESS CENTER',
        location:"Paris",
        year:'2021'
    },
]

function ProjectCard() {
  useEffect(() =>  {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
           <div className='flex items-center space-x-[10px] pl-3 sm:pl-6  md:pl-6 lg:pl-[125px] xl:pl-28 pt-14'>
      <img className='h-5 w-5 sm:h-7 sm:w-7 md:h-5 md:w-5 ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAfZJREFUeF7t2LsRgDAQxNC7/os2wyeiBT0Sx0Ya2N2d9znf6Wi9gV3wW8T/tyVAm/8QgAD+/2UHfAHK9Gf8AuL8CUAAG0DaARkgjV8GiOMnAAFMwW0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzp8ABLADpB2QAdL41cA4fgIQwA7QdkAGaPNXA+P8CUAAO0DaARkgjV8NjOMnAAHsAG0HZIA2fzUwzv8R4H5O/UVE778XAqWAAyqCLhUAAAAASUVORK5CYII="
        alt=''
        /><p className='roboto font-bold sm:text-[30px] md:text-[20px]'>What We Do</p>
      </div>
      <div data-aos="fade-right" className='text-[60px] font-normal 
      w-[310px] sm:w-[590px] md:w-[900px] pl-4 md:pl-8 lg:pl-[115px] xl:pl-28 sm:font-normal 
      sm:text-[110px] md:text-[120px] leading-none oswald
       overflow-y-hidden text-left sm:pt-4 md:pt-0'>
      EVERY PROJECT 
         <br/>
         JUST UNIQUE 
         </div>
         <div className='pl-4 sm:pl-3 md:pl-6 sm:pt-4 md:pt-0 lg:pl-[125px] xl:pl-28 w-[300px] sm:text-[26px] md:text-[16px] sm:w-[520px] md:w-[690px] lg:w-[720px] '>
             <p className='pt-4 pb-4 text-left '>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
         </div>
        <div className='grid grid-cols-1 grid-rows-2 md:flex space-y-7 sm:space-y-14 md:space-y-0'>
            {projectitem?.map((item) =>
              <Project {...item}/>
            )}
      
        </div>
        <div className='ml-[5px] md:ml-12 lg:ml-[105px] xl:ml-[91px]
         sm:ml-[25px] oswald font-medium text-[16px] mt-4 xl:mt-9 text-left '>
            <button className='uppercase h-14 w-44  bg-[#DABA89] text-[#111111]  overflow-y-hidden'>
                view more
            </button>
        </div>
    </div>
  )
}

export default ProjectCard