import React from 'react'
import About from './About'
import Contact from './Contact'
import Location from './Location'
import Menu from './Menu'
import OneCard from './OneCard'
import Partner from './Partner'
import Products from './Products'
import Success from './Success'

function MainPage() {
  return (
    <div className='text-left '>
         <Contact/>
            <Menu/>
         <div className='bg-[#f2f2f2] w-screen'>
         <About/>
         <Products/>
         </div>
         <div>
             <Partner/>
             <Success/>
             <OneCard/>
             <Location/>
         </div> 
    </div>
  )
}

export default MainPage