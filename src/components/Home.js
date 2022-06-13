import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
	return (
		<div className="">
			<img
				className="w-screen h-[880px] md:h-[790px] sm:w-screen
       lg:h-[650px]  xl:h-[716px] 2xl:w-[2070px] 2xl:h-[960px] rotate-180 sm:rotate-0
        "
				src="https://images.pexels.com/photos/6434779/pexels-photo-6434779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			/>
			<div className="text-white top-[500px] sm:top-[500px] md:top-[400px] lg:top-[400px]
       left-2 sm:left-4 md:left-5 lg:left-16 xl:left-24 absolute ">
				<div className="mb-6 grid grid-cols-1 grid-rows-1 text-left md:flex pl-4 sm:pl-0">
					<div className="flex items-center space-x-2">
						<img
							className="h-5 w-5"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAfdJREFUeF7t2LERwDAMw0Bp/6GVc5sV8GlSx8DFJHdm5u7uvT2tE9j3gN+C/v9aArT5DwEI4P4vO+APUKY/4wqI8ycAAWwAaQdkgDR+GSCOnwAEMAW3HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDj/2XcAroGmBru7HxoC/phd9ZUDAAAAAElFTkSuQmCC"
							alt=""
						/>
						<h1 className=" text-[17px] font-bold   
     sm:text-[24px]  md:text-[20px] leading-none 
          sm:flex items-center sm:pt-0 overflow-y-hidden">
							We are an architecture design{' '}
						</h1>
					</div>
					<p className=" text-[20px] sm:text-[24px] sm:font-bold md:text-[20px] pl-2">agency</p>
				</div>
				<div className=" text-[50px] sm:pl-0 lg:text-[120px] grid grid-cols-1
    grid-rows-1 sm:flex 
   ">
					<div className=" ">
						<h1 className="  
     text-left oswald text-[50px] sm:text-[100px] md:text-[120px] font-normal
      leading-none overflow-hidden 
  pl-2 sm:pl-0   lg:pl-3 xl:pl-0 ">
							DESIGN.
							<br />ARCHITECTURE.
						</h1>
					</div>
					{/* <p className='md:mt-[79px] xl:ml-2  text-[130px]  oswald'>.</p> */}
				</div>
			</div>
		</div>
	);
}

export default Home;
