import React from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft, FaSeedling, FaMicrophone, FaHeadphones } from 'react-icons/fa';

function ComputerSciencePage() {
	const sidebarItems = [
		{
			to: "ourgarden",
			name: "OurGarden",
			icon: <FaSeedling className="text-blue-600 dark:text-blue-400" />,
		},
	];

	const homeLink = {
		path: "/",
		name: "Back to Home",
		icon: <FaArrowLeft className="text-blue-600 dark:text-blue-400" />,
	};

	return (
		<div className="flex">
			<Sidebar items={sidebarItems} homeLink={homeLink} name="Computer Science" />

			{/* Main Content Area */}
			<div className="w-3/4 p-8">


				<Element name="ourgarden" className="mt-8">
					<h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">OurGarden</h1>
					
				</Element>

				{/* Music Production Section */}
				<Element name="music-production" className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Music Production</h2>
					<p className="mt-2 text-gray-600 dark:text-gray-300">
						Music production involves the creation and development of music recordings. This section covers
						the techniques, tools, and software used in the production process, along with insights into
						the industry and tips for aspiring producers.
					</p>

					<div className="mt-4">
						<img
							src="path_to_your_production_image.jpg"
							alt="Music Production Studio"
							className="w-full h-auto rounded-md mb-4 shadow-lg"
						/>
						<video controls className="w-full h-auto rounded-md shadow-lg">
							<source src="path_to_your_production_video.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</Element>
			</div>
		</div>
	);
}

export default ComputerSciencePage;
