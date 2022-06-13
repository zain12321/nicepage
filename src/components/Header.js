import React, { useState } from 'react';
// import { GrMenu } from 'react-icons/gr';
// import { BeakerIcon } from '@heroicons/react/solid';
import Section from './Section';
import { Link } from 'react-router-dom';

function Header() {
	const [ navbarOpen, setNavbarOpen ] = useState(false);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	return (
		<nav className="navBar absolute z-20">
			<button className="w-screen" onClick={handleToggle}>
				{navbarOpen ? (
					<p className="h-16 flex w-[270px] items-center  ">
						<span className="pt-4 pl-52 text-[#FFFFFF] text-[30px] h-16 w-[250px]
          bg-[#181818] fixed  z-10  ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-8 w-8 "
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
							{' '}
						</span>
					</p>
				) : (
					<p className="h-[70px] flex text-center items-center justify-center
w-screen  bg-[#FFFFFF] ">
						{' '}
						<Section />
					</p>
				)}
			</button>
			<div
				className={`menuNav ${navbarOpen ? 'showMenu' : ''} 
          
          `}
			>
				<div className="left-0 flex 
             top-0 bg-[#111111] pt-[70px] pl-[100px] sm:pl-14 text-[18px] 
             text-[#FFFFFF] 
          h-screen overflow-y-hidden ">
					<ul className="space-y-2  
            w-[250px] 
              
              ">
						<span className="">
							<p className="pl-[1px] hover:text-[#9c9a9a]">
								<Link to="/">Home</Link>
								
							</p>
						</span>
						<span className="">
							<p className="pl-[3px] hover:text-[#9c9a9a] cursor-pointer">About</p>
						</span>
						<span className="">
							<p className="hover:text-[#9c9a9a]">
								<Link to="mainpage">Contact</Link>
								
							</p>
						</span>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
