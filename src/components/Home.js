import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
let Logo = require('../assets/home.jpeg');
function Home() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="Home ">
			<div className="text-white top-[500px] sm:top-[500px] md:top-[510px] lg:top-[550px]
    xl:top-[480px]  absolute ">
				<div className="mb-6 grid grid-cols-1 grid-rows-1 text-left md:flex pl-4 sm:pl-0">
					<div className="flex  items-center space-x-2 pl-2 sm:pl-4 md:pl-[80px] lg:pl-[115px]
					 xl:pl-[108px]">
						<img
							className="h-5 w-5"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAfdJREFUeF7t2LERwDAMw0Bp/6GVc5sV8GlSx8DFJHdm5u7uvT2tE9j3gN+C/v9aArT5DwEI4P4vO+APUKY/4wqI8ycAAWwAaQdkgDR+GSCOnwAEMAW3HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDj/2XcAroGmBru7HxoC/phd9ZUDAAAAAElFTkSuQmCC"
							alt=""
						/>
						<h5 className=" text-[20px] font-bold   
            leading-none roboto sm:flex items-center sm:pt-0 overflow-y-hidden">
							We are an architecture design{' '}
						</h5>
					</div>
					<h5 className="roboto text-[20px]  font-bold  pl-1">agency</h5>
				</div>
				<div className=" text-[50px] sm:pl-0 lg:text-[120px] grid grid-cols-1
    grid-rows-1 sm:flex 
   ">
					<div className=" ">
						<h1
							data-aos="fade-right"
							className="  
     text-left oswald text-[60px] sm:text-[100px] md:text-[120px] font-normal
      leading-none overflow-hidden 
	  pl-6 sm:pl-4 md:pl-[80px] lg:pl-[115px] xl:pl-[108px] "
						>
							DESIGN.
							<br />ARCHITECTURE.
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
