// src/pages/MusicPage.js
import React from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft, FaMicrophone, FaHeadphones } from 'react-icons/fa';
import cochiseCartiAudio from '../media/cochise-carti.mp3';

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


				{/* Carnatic Music Section */}
				<Element name="carnatic-music" className="mt-8">

					<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8"> {/* Added wrapper */}
						<h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">Carnatic Music</h1>
						<div className="flex flex-row">
							<div className="md:w-1/2 p-4">
								<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">Arangetram: My Graduation</h2>
								<p className=" text-gray-600 dark:text-gray-300">Years of practice and dedication culminated in my graduation performance (arangetram) in Carrollton, Texas. The anticipation in the air was palpable as I took the stage, ready to showcase the skills I had developed through countless hours of training. For nearly three uninterrupted hours, I performed in front of an audience of hundreds, supported by a talented violinist and mridangam artist. As I sang, I felt a wave of emotions wash over me, reflecting on the journey that had led me to this moment. Each note was a testament to my hard work and the support of my teachers and family. The vibrant melodies filled the auditorium, and I could sense the connection I had with the audience, who shared in the experience. After singing for what felt like an eternity, I was overwhelmed with gratitude and pride. This performance was not just a culmination of my training; it was a celebration of my commitment to Carnatic music and a stepping stone into my future in the art. Singing began at 12:48, and I will always cherish that moment as a highlight of my musical journey.

								</p>
							</div>

							<div className="md:h-1/2 w-full md:w-1/2 p-12">
								<iframe
									className='w-full aspect-video rounded-md'
									src="https://www.youtube.com/embed/m_Hwgk8eV7I?t=768"
									title="Jai Sammpath Vocal Arangetram"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								></iframe>
							</div>
						</div>
					</div>





					<div className="flex flex-row">
						<div className="md:h-1/2 w-full md:w-1/2 p-12">
							<img
								src="src/media/firstperf.png"
							></img>
						</div>
						<div className="md:w-1/2 p-4">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">Where it all started</h2>
							<p className=" text-gray-600 dark:text-gray-300">Years of practice and dedication culminated in my graduation performance (arangetram) in Carrollton, Texas. The anticipation in the air was palpable as I took the stage, ready to showcase the skills I had developed through countless hours of training. For nearly three uninterrupted hours, I performed in front of an audience of hundreds, supported by a talented violinist and mridangam artist. As I sang, I felt a wave of emotions wash over me, reflecting on the journey that had led me to this moment. Each note was a testament to my hard work and the support of my teachers and family. The vibrant melodies filled the auditorium, and I could sense the connection I had with the audience, who shared in the experience. After singing for what felt like an eternity, I was overwhelmed with gratitude and pride. This performance was not just a culmination of my training; it was a celebration of my commitment to Carnatic music and a stepping stone into my future in the art. Singing began at 12:48, and I will always cherish that moment as a highlight of my musical journey.

							</p>
						</div>


					</div>

				</Element>

				{/* Music Production Section */}
				<Element name="music-production" className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Music Production</h2>
					<audio controls className="w-400 h-100 rounded-md shadow-lg">
							<source src={cochiseCartiAudio} type="audio/mp3" />
							Your browser does not support the audio element.
						</audio>
					<p className="mt-2 text-gray-600 dark:text-gray-300">
						Music production involves the creation and development of music recordings. This section covers
						the techniques, tools, and software used in the production process, along with insights into
						the industry and tips for aspiring producers.
					</p>

						

					
				</Element>
			</div>
		</div>
	);
}

export default MusicPage;
