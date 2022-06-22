import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MdPhonelinkRing } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsWifi, BsPencil } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineFileImage } from 'react-icons/ai';

function Menu() {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	return (
		<div className="ml-[20px] sm:ml-12 md:ml-[40px]
		 lg:ml-[60px] xl:ml-[120px] mb-32 mt-14 sm:mt-0  md:mt-12 lg:mt-16 xl:mt-0">
			<div className="">
				<h1 className="text-[48px] font-bold text-[#111111]">Our Services</h1>
			</div>
			<div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 
         space-y-5  ">
				<div data-aos="fade-zoomIn-out" className="mt-4 space-y-4 ">
					<p className="h-11 w-11 rounded-full bg-[#7c5ddf] text-[#FFFFFF] 
                      pl-3 pt-[10px]">
						<MdPhonelinkRing className="h-6 w-6" />
					</p>
					<h1 className="text-[24px] text-[#111111] font-semibold">opywriting</h1>
					<p className="w-[290px] sm:w-[400px] md:w-[300px] lg:w-[260px] xl:w-[300px]">
						Sample text. Click to select the text box. Click again or double click to start editing the
						text.
					</p>
				</div>

				<div data-aos="fade-zoomIn-out"  className="mt-4  space-y-4">
					<p className="h-11 w-11 rounded-full bg-[#7c5ddf] text-[#FFFFFF] pl-[10px] pt-[10px]">
						<FaRegLightbulb className="h-6 w-6" />
					</p>
					<h1 className="text-[24px] text-[#111111] font-semibold">Graphic Design</h1>
					<p className="w-[290px] sm:w-[400px] md:w-[300px] lg:w-[260px] xl:w-[300px]">
						Sample text. Click to select the text box. Click again or double click to start editing the
						text.
					</p>
				</div>

				<div data-aos="fade-zoomIn-out"  className="mt-4  space-y-4">
					<p className="h-11 w-11 rounded-full bg-[#7c5ddf] text-[#FFFFFF] pl-[10px] pt-[10px]">
						<BsWifi className="h-6 w-6" />
					</p>
					<h1 className="text-[24px] text-[#111111] font-semibold">Development</h1>
					<p className="w-[290px] sm:w-[400px] md:w-[300px] lg:w-[260px] xl:w-[300px]">
						Sample text. Click to select the text box. Click again or double click to start editing the
						text.
					</p>
				</div>

				<div data-aos="fade-zoomIn-out"  className="mt-4 space-y-4">
					<p className="h-11 w-11 rounded-full bg-[#7c5ddf] text-[#FFFFFF] pl-[10px]
                      pt-[10px]">
						<IoPersonOutline className="h-6 w-6" />
					</p>
					<h1 className="text-[24px] text-[#111111] font-semibold">Logistics</h1>
					<p className="w-[290px] sm:w-[400px] md:w-[300px] lg:w-[260px] xl:w-[300px]">
						Sample text. Click to select the text box. Click again or double click to start editing the
						text.
					</p>
				</div>

				<div data-aos="fade-zoomIn-out"  className="mt-4  space-y-4">
					<p className="h-11 w-11 rounded-full bg-[#7c5ddf] text-[#FFFFFF] pl-[10px] pt-[10px]">
						<AiOutlineFileImage className="h-6 w-6" />
					</p>
					<h1 className="text-[24px] text-[#111111] font-semibold">Consultations</h1>
					<p className="w-[290px] sm:w-[400px] md:w-[300px] lg:w-[260px] xl:w-[300px]">
						Sample text. Click to select the text box. Click again or double click to start editing the
						text.
					</p>
				</div>

				<div data-aos="fade-zoomIn-out"  className="mt-4 space-y-4">
					<p className="h-11 w-11 rounded-full bg-[#7c5ddf] text-[#FFFFFF] pl-[10px] pt-[10px]">
						<BsPencil className="h-6 w-6" />
					</p>
					<h1 className="text-[24px] text-[#111111] font-semibold">Web Design</h1>
					<p className="w-[290px] sm:w-[400px] md:w-[300px] lg:w-[260px] xl:w-[300px]">
						Sample text. Click to select the text box. Click again or double click to start editing the
						text.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Menu;
