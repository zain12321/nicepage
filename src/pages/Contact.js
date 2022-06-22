import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../components/Navbar';
import Login from './Login';

function Contact() {
  useEffect(() =>  {
		Aos.init({ duration: 3000 });
	  }, []);
	
	return (
       <div className=''>
         <div>
     
           <Navbar/>
           </div>
         <div>
           <img className='h-[900px]  
           sm:h-[900px] md:h-[700px] lg:h-[600px] xl:h-[700px] w-screen xl:w-screen '
            src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/14932e39a84a5afe9272d0c1/pexels-photo-301930copy.jpg"
           alt=""
           />
	{/* <div className="image h-[800px] w-screen mt-44 overflow-hidden "> */}
			<div className=' leading-none md:flex pt-24 
    
      overflow-hidden
       absolute 
      top-[140px] sm:top-[80px] md:top-[160px]  lg:top-[50px] xl:top-[150px]'> 
       <div className=''>
       <h1 data-aos="fade-right" className='text-[30px] sm:text-[44px] lg:text-[60px]
        xl:text-[60px] text-white font-bold w-[300px] sm:w-[400px] md:w-[300px]
         lg:w-[450px] xl:w-[590px] leading-none
        overflow-hidden pl-2 sm:pl-11 md:pl-12 lg:pl-11 xl:pl-32'>Preparing For Your Success,<br/>
We Provide Truly Prominent IT Solutions.</h1>
       </div>

				<div data-aos="fade-zoom-in-out" className=''>
					<Login />
				</div>
      
			</div>
		</div>
       </div>

	
	);
}

export default Contact;
