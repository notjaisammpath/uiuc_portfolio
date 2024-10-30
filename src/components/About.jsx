import React from 'react';
import myImg from '../media/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				I’m a student at the School for The Talented and Gifted in Dallas, Texas. I’m all about computers, robots, music, philosophy, and spending time outdoors. If manage to catch me without my headphones in, consider yourself lucky.
				</p>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
