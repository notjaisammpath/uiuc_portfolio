import React from 'react';
import { Link, Element } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone, FaHeadphones } from 'react-icons/fa';

function MusicPage() {
	return (
		<div className="flex">
			{/* Sidebar for Navigation */}
			<nav className="bg-blue-100 dark:bg-blue-800 p-6 rounded-xl shadow-lg mr-8 sticky top-4 h-fit">
				<ul className="space-y-4">
					<li className="flex items-center space-x-2">
						<FaArrowLeft className="text-blue-600 dark:text-blue-400" />
						<RouterLink to="/" className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 font-semibold">
							Back to Home
						</RouterLink>
					</li>
					<li className="flex items-center space-x-2">
						<FaMicrophone className="text-blue-600 dark:text-blue-400" />
						<Link
							to="carnatic-music"
							smooth={true}
							duration={500}
							className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 font-semibold"
						>
							Carnatic Music
						</Link>
					</li>
					<li className="flex items-center space-x-2">
						<FaHeadphones className="text-blue-600 dark:text-blue-400" />
						<Link
							to="music-production"
							smooth={true}
							duration={500}
							className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 font-semibold"
						>
							Music Production
						</Link>
					</li>
				</ul>
			</nav>

			{/* Main Content Area */}
			<div className="w-3/4 p-8">
				<h1 className="text-3xl font-bold text-blue-600 dark:text-blue-500">Music</h1>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					Welcome to the Music page! Here, you’ll find insights, projects, and resources related to the field of music.
				</p>

				{/* Carnatic Music Section */}
				<Element name="carnatic-music" className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Carnatic Music</h2>
					<p className="mt-2 text-gray-600 dark:text-gray-300">
						Carnatic music is a classical music tradition from South India. It emphasizes melody and rhythm,
						and it is rich in devotional and spiritual elements. This section explores its history,
						important composers, and notable performances.
					</p>

					{/* Space for Carnatic Music Media */}
					<div className="mt-4">
						<img
							src="path_to_your_carnatic_image.jpg"
							alt="Carnatic Music Performance"
							className="w-full h-auto rounded-md mb-4 shadow-lg"
						/>

						<video controls className="w-full h-auto rounded-md shadow-lg">
							<source src="path_to_your_carnatic_video.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
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

					{/* Space for Music Production Media */}
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
