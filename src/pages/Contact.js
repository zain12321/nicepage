import React from 'react';
import Header from '../components/Header';
import Login from './Login';

function Contact() {
	return (
       <div className=''>
         <div>
           <Header/>
           </div>
         <div>
           <img className='h-[900px]  
           sm:h-[900px] md:h-[700px] lg:h-[600px] xl:h-[700px] w-screen xl:w-screen '
            src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/14932e39a84a5afe9272d0c1/pexels-photo-301930copy.jpg"
           alt=""
           />
	{/* <div className="image h-[800px] w-screen mt-44 overflow-hidden "> */}
			<div className=' leading-none md:flex pt-24 
    pl-3  sm:pl-16  md:pl-12 lg:pl-11 xl:pl-32  overflow-hidden
       absolute 
      top-[140px] sm:top-[40px] md:top-[160px]  lg:top-[50px] xl:top-[150px]'> 
       <div className=''>
       <h1 className='text-[30px] sm:text-[44px] lg:text-[60px]
        xl:text-[60px] text-white font-bold w-[300px] lg:w-[450px] xl:w-[590px] leading-none
        overflow-hidden'>Preparing For Your Success,<br/>
We Provide Truly Prominent IT Solutions.</h1>
       </div>

				<div className=''>
					<Login />
				</div>
      
			</div>
		</div>
       </div>

	
	);
}

export default Contact;
