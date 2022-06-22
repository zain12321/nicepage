import React, { useState } from 'react';

function Reviews() {
	const [ activeTab, setActiveTab ] = React.useState('DESCRIPTION');
	return (
		<div className="w-screen text-left lg:h-[680px] xl:h-[580px] bg-[#EFE2CC] md:pl-6 
	pl-[10px]	sm:pl-[70px] lg:pl-[95px] xl:pl-28 ">
			<div className="">
				<ul className="uppercase grid grid-cols-1 grid-rows-2 md:flex items-center mt-16   ">
					<li
						onClick={() => setActiveTab('DESCRIPTION')}
						className="h-11
        w-[270px]  sm:w-[500px] sm:h-14 md:w-[233px] xl:w-[367px] lg:w-[310px] bg-[#FFFFFF]  sm:ml-0 pl-4 pt-1 
     sm:pl-[200px]   md:pl-[70px] lg:pl-[100px] xl:pl-32 sm:pt-3 text-[#D8BA89]
            text-[20px] font-medium oswald cursor-pointer"
					>
						descriptions
					</li>
					<li className="flex items-center">
						<li
							onClick={() => setActiveTab('SPECIFICATION')}
							className="h-11
        w-[135px]    sm:h-14 sm:w-[250px] md:w-[233px] xl:w-[367px] lg:w-[310px] hover:bg-[#FFFFFF]
            sm:pl-[100px]    sm:ml-0 pl-4 md:pl-[70px] pt-1 lg:pl-[100px] xl:pl-32 sm:pt-3 text-[#111111]
            text-[20px] font-medium oswald cursor-pointer"
						>
							Specifications
						</li>

						<li
							onClick={() => setActiveTab('REVIEwS')}
							className="h-11
            w-[135px]  sm:h-14 sm:w-[250px] md:w-[233px] xl:w-[367px] lg:w-[310px] hover:bg-[#FFFFFF]
            sm:pl-[100px]   sm:ml-0 pl-4 md:pl-[70px] pt-1 lg:pl-[100px] xl:pl-32 sm:pt-3 text-[#111111]
              text-[20px] font-medium oswald cursor-pointer"
						>
							Reviews
						</li>
					</li>
				</ul>
			</div>

			{activeTab === 'DESCRIPTION' && (
				<div className="w-[270px] h-[900px] sm:w-[500px] sm:h-[800px]
				 md:mb-11 lg:mb-0 md:w-[700px] lg:w-[930px] xl:w-[1100px] md:h-[430px]
				  mb-11 overflow-hidden 
         lg:h-[500px] xl:h-[400px] bg-[#FFFFFF]">
					<div className="grid grid-cols-1 overflow-hidden grid-rows-2 md:flex leading-none ">
						<div className="">
							<img
								className="h-[400px] sm:h-[340px]
								 w-[300px] md:h-[380px] sm:mx-3 md:w-[300px]
								  lg:h-[420px] xl:h-[350px] md:mx-7
            sm:mt-5  md:mt-7 lg:mt-10 xl:mt-6 sm:w-[470px]"
								src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/4182ebc926ca5e378edae974/pexels-photo-3914752.jpeg?version="
								alt=""
							/>
						</div>
						<div className="pt-0 sm:pt-1 md:pt-5 lg:pt-8 xl:pt-6 pl-3 lg:pl-[30px] xl:pl-[90px] ">
							<h1 className="roboto text-[24px] font-medium  overflow-hidden ">Description</h1>
							<p className="w-[260px] sm:w-[400px] sm:leading-7 md:w-[280px] lg:w-[410px]  xl:w-[530px] 
						sm:text-[20px] 	md:text-[16px] text-[#999999] 
         leading-6 sm:pt-2  md:pt-4 lg:pt-7 xl:pt-4 lg:leading-6 xl:leading-4 overflow-hidden">
								Sample text. Click to select the text box. Click again or double click to start editing
								the text. Sample text. Click to select the text box. Click again or double click to
								start editing the text.
							</p>
							<div className="
               text-[14px] md:pt-7 lg:pt-9 md:w-[280px] lg:w-[330px] xl:pt-0
                xl:w-[500px] overflow-hidden sm:text-[20px] md:text-[16px]
				 xl:text-[16px] text-[#111111] 
				font-normal lg:space-y-3 ">
								<li className="overflow-hidden">excepteur sint occaecat cupidatat non</li>
								<li className="overflow-hidden">sunt in culpa qui officia deserunt</li>
								<li className="overflow-hidden">ut enim ad minim veniam</li>
								<li className="overflow-hidden">quis nostrud exercitation ullamco</li>
								<li className="overflow-hidden">laboris nisi ut aliquip ex ea commodo</li>
								<li className="overflow-hidden">duis aute irure dolor in reprehenderit in</li>
								<li className="overflow-hidden">
									voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								</li>
							</div>
						</div>
					</div>
				</div>
			)}

			{activeTab === 'SPECIFICATION' && (
				<div className="w-[270px]  sm:w-[500px] sm:h-[800px] 
		mb-11	sm:mb-0	md:mb-11 lg:mb-0 md:w-[700px] lg:w-[930px] xl:w-[1100px] h-[800px] overflow-hidden 
				md:h-[430px] bg-[#FFFFFF]">
					<div className="grid grid-cols-1  overflow-hidden grid-rows-2 sm:flex ">
						<div className="pt-0 sm:pt-6   ">
							<h1 className="roboto text-[16px] text-[#999999] overflow-hidden md:w-[650px] lg:w-[1100px]">
								Sample text. Click to select the text box. Click again or double click to start editing
								the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
								eu fugiat nulla pariatur.
							</h1>
							<p className="w-[260px] md:w-[700px] lg:w-[980px]
							 pt-4 sm:text-[16px] text-[#999999] 
              ">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. .
							</p>
						</div>
					</div>
				</div>
			)}

			{activeTab === 'REVIEwS' && (
				<div className="w-[270px] sm:mb-9 sm:w-[500px] sm:h-[800px] md:mb-11 lg:mb-0 md:w-[700px] 
				lg:w-[930px] xl:w-[1100px] h-[700px] overflow-hidden md:h-[430px] bg-[#FFFFFF]">
					<div className="grid grid-cols-1  overflow-hidden grid-rows-2 sm:flex ">
						<div className="h-[800px] sm:h-[300px] bg-[#FFFFFF] w-[335px] sm:w-[1100px] pl-4 pt-4 sm:pt-14 space-y-7">
							<p className="text-[24px]  w-[270px] sm:w-[500px] md:w-[830px] font-semibold">
								Be The First To Review This Product!.
							</p>
							<p className="text-[#111111] w-[250px] sm:w-[430px] md:w-[730px] text-[16px] font-semibold">
								Sample text. Click to select the text box. Click again or double click to start editing
								the text.
							</p>
							<button className="text-[20px]
							 w-[240px] sm:w-[300px] bg-[#111111] h-14 text-[#FFFFFF]">
								Write Product Review
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Reviews;
