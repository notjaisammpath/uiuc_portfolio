import React from 'react';
import { FaMusic, FaCode, FaRobot, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importing specific icons

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-10">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-blue-600 dark:text-blue-500 font-semibold">
					Hi, I'm Jai!
				</h1>
				<p className="text-md md:text-lg max-w-lg mb-3 text-gray-600 dark:text-gray-300">
					I'm a driven high school senior interested in exploring the 
					intersection between computer science and music.
				</p>
				<div className="flex space-x-12 justify-center mt-4">
				<a href="https://www.linkedin.com/in/jaisammpath/" target="_blank" rel="noopener noreferrer">
					<FaLinkedin className="text-2xl text-blue-600 dark:text-blue-500" />
					</a>
					<a href="https://github.com/notjaisammpath">
					<FaGithub className="text-2xl text-blue-600 dark:text-blue-500" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
