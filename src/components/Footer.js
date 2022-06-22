import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Footer() {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<div className="bg-[#000000] h-[1600px] sm:h-[1300px] md:h-[760px] w-screen text-[#FFFFFF] text-left ">
			<div className="pt-[70px] grid grid-cols-1 grid-rows-2 md:flex sm:space-x-16 md:space-x-6 lg:space-x-16">
				<div data-aos="fade-right" className="pl-3 sm:pl-24 md:pl-5 lg:pl-12 xl:pl-28 ">
					<div className="flex items-center space-x-3 pb-6">
						<img
							className="h-5 w-5"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAfdJREFUeF7t2LERwDAMw0Bp/6GVc5sV8GlSx8DFJHdm5u7uvT2tE9j3gN+C/v9aArT5DwEI4P4vO+APUKY/4wqI8ycAAWwAaQdkgDR+GSCOnwAEMAW3HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDh/AhDADpB2QAZI41cD4/gJQAA7QNsBGaDNXw2M8ycAAewAaQdkgDR+NTCOnwAEsAO0HZAB2vzVwDj/2XcAroGmBru7HxoC/phd9ZUDAAAAAElFTkSuQmCC"
							alt=""
						/>
						<h1 className="md:text-[24px] text-[20px] roboto"> What We Do</h1>
					</div>
					<p className="w-[300px] sm:w-[400px] sm:leading-8 overflow-hidden md:leading-8
					 lg:w-[480px] xl:w-[550px] text-[20px]  pb-5">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
						deserunt mollit anim id est laborum.
					</p>
					<img
						className="h-[260px] rotate-90 w-[260px] rounded-full"
						src="https://images.pexels.com/photos/6434779/pexels-photo-6434779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div className="pt-9 space-y-4 sm:pl-10 md:pl-0">
					<div className="flex-col ">
						<h1 className="text-[16px] sans pl-3 sm:pl-[2px] font-semibold">Email</h1>
						<p className=" h-[75px] overflow-hidden  pl-2 p-1 rounded-md  bg-[#000000]">
							<input
								type="email"
								placeholder="Enter a Valid Email Address"
								required
								className="bg-[#000000] h-12
                    pl-3   w-[270px] sm:w-[350px] md:w-[300px] lg:w-[380px] xl:w-[500px]  border-b-2 "
							/>
						</p>
					</div>

					<div className="flex-col">
						<h1 className="text-[16px] sans pl-3 sm:pl-[2px] font-semibold">Name</h1>
						<p className=" h-[75px] overflow-hidden  pl-2 p-1 rounded-md  bg-[#000000]">
							<input
								type="email"
								placeholder="Enter Your Name "
								required
								className="bg-[#000000] h-12 w-[270px] sm:w-[350px]
                              md:w-[300px]   lg:w-[380px] xl:w-[500px] pl-3 border-b-2 "
							/>
						</p>
					</div>
					<div className="flex-col">
						<h1 className="text-[16px] sans pl-3 sm:pl-[2px] font-semibold">Address</h1>
						<p className=" h-[75px] overflow-hidden  pl-2 p-1 rounded-md  bg-[#000000]">
							<input
								type="email"
								placeholder="Enter Your Address"
								required
								className="bg-[#000000] h-12 w-[270px] sm:w-[350px] lg:w-[380px]
                            md:w-[300px]     xl:w-[500px] pl-3 border-b-2 "
							/>
						</p>
					</div>
					<div className="flex-col">
						<h1 className="text-[16px] sans pl-3 sm:pl-[2px] font-semibold">Message</h1>
						<p className="  overflow-hidden   pl-2 p-1 rounded-md  bg-[#000000]">
							<textarea
								placeholder="Enter Your Message "
								className="w-[270px] sm:w-[350px] 
                    md:w-[300px]  lg:w-[380px] xl:w-[500px] h-[100px] bg-[#000000] border-b-2 pl-3"
							/>
						</p>
					</div>
					<div className="ml-2">
						<button className="h-11 w-28 bg-[#FFFFFF] text-[#111111] sans text-[16px] font-semibold">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
