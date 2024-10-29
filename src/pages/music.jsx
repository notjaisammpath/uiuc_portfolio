// src/pages/MusicPage.js
import React from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft, FaMicrophone, FaHeadphones } from 'react-icons/fa';

function MusicPage() {
	const sidebarItems = [
		{
			to: "carnatic-music",
			name: "Carnatic Music",
			icon: <FaMicrophone className="text-blue-600 dark:text-blue-400" />,
		},
		{
			to: "music-production",
			name: "Music Production",
			icon: <FaHeadphones className="text-blue-600 dark:text-blue-400" />,
		},
	];

	const homeLink = {
		path: "/",
		name: "Back to Home",
		icon: <FaArrowLeft className="text-blue-600 dark:text-blue-400" />,
	};

	return (
		<div className="flex">
			<Sidebar items={sidebarItems} homeLink={homeLink} name="Music" />

			{/* Main Content Area */}
			<div className="w-3/4 p-8">
				<h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500">Music</h1>
			

				{/* Carnatic Music Section */}
				<Element name="carnatic-music" className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Carnatic Music</h2>
					<p className="mt-2 text-gray-600 dark:text-gray-300">
						Years of practice and dedication culminated in a graduation performance (arangetram) in Carrollton, Texas. I performed for nearly three uninterupted hours in front of an audience of hundreds, with the support of a violinist and mridangam artist. It was overwhelming, realizing the years of prep that had led up to that moment when I was done. (Singing begins at 12:48)
					</p>
					<div className="justify-center flex p-8">
    <div className="border border-gray-300 rounded-md shadow-md">
	<iframe width="739" height="416" src="https://www.youtube.com/embed/m_Hwgk8eV7I?t=768" title="Jai Sammpath Vocal Arangetram" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
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

export default MusicPage;
