import React from 'react'
import Cards from './Cards'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import ProjectCard from './ProjectCard'
import Reviews from './Reviews'
import ServiceCard from './ServiceCard'
import Strategy from './Strategy'
import Unique from './Unique'

function MainComponents() {
  return (
    <div>
         <Header />
			<Home />
			<ServiceCard />
			<Strategy />
			<ProjectCard />
			<Cards />
			<Unique />
			  <Reviews/>
              <Footer/>
    </div>
  )
}

export default MainComponents