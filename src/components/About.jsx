import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
					debitis, natus cum ad, fugiat excepturi minima culpa atque modi
					accusantium vel voluptatem?
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
