import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';
import Reviews from './Reviews';
import ServiceCard from './ServiceCard';
import Strategy from './Strategy';
import Unique from './Unique';

function MainComponents() {
	return (
		<div>
			<Navbar />
			<Home />
			<ServiceCard />
			<Strategy />
			<ProjectCard />
			<Cards />
			<Unique />
			<Reviews />
			<Footer />
		</div>
	);
}

export default MainComponents;
