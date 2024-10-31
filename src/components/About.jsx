import React from 'react';
import myImg from '../media/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				I’m a student at the School for The Talented and Gifted in Dallas, Texas. I’m all about computers, robots, music, philosophy, and spending time outdoors. This website covers a couple of my projects in CS and Music, take a look around!
				</p>
			</div>

			<img
				src={myImg}
				alt="Jai"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
