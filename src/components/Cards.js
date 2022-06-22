import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards() {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	return (
		<div className="mt-36 ml-4 sm:ml-8 md:ml-6 lg:ml-[135px] xl:ml-24 grid grid-cols-1 grid-rows-2 md:flex-col">
			<div className=" items-center md:space-x-8 xl:space-x-0 grid grid-rows-2 grid-cols-1 md:flex ">
				<img
					className="h-[200px] w-[280px] sm:h-[400px] sm:w-[590px] md:w-[350px] md:h-[270px]
         lg:h-[300px]
         lg:w-[430px] xl:h-[390px] xl:w-[600px]"
					src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwDv4A_kpL4kKwR09m8XeAQm2x_nURAiB6GOOSnVB2hOrU_AHJ"
					alt=""
				/>
				<p
					data-aos="fade-zoom-in-out"
					className="w-[270px] sm:w-[540px] md:w-[300px] lg:w-[400px] xl:w-[500px] text-center
        sm:pl-5 lg:pl-9 xl:pl-11 sm:leading-loose md:leading-8 sm:text-[30px]
         md:text-[18px] text-[#111111] font-semibold"
				>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.{' '}
				</p>
			</div>

			<div className=" items-center sm:space-x-8 grid grid-rows-2 grid-cols-1 md:flex ">
				<p
					data-aos="fade-zoom-in-out"
					className="w-[270px] sm:w-[540px] md:w-[300px] lg:w-[400px] text-center xl:w-[567px] 
        sm:pl-5 lg:pl-9 xl:pl-24 sm:leading-loose md:leading-8 sm:text-[30px]
         md:text-[18px] text-[#111111] font-semibold"
				>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.
				</p>
				<div className="">
					<img
						className="h-[200px] w-[280px] sm:h-[400px] sm:w-[520px] md:w-[350px] md:h-[270px] lg:h-[300px]
         lg:w-[430px] xl:h-[390px] xl:w-[600px] md:ml-5 lg:ml-0"
						src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/028ef3e96c345427b4fea18b/pexels-photo-6766628.jpeg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Cards;
