// src/pages/MusicPage.js
import React from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft, FaSeedling, FaCalendarCheck, FaRobot } from 'react-icons/fa';
import SchedulocityImage from '../media/firstperf.png';
import SpeechpunditImage from '../media/firstperf.png';

function ComputerSciencePage() {
	const sidebarItems = [
		{
			to: "ourgarden",
			name: "OurGarden",
			icon: <FaSeedling className="text-blue-600 dark:text-blue-400" />,
		},
		{
			to: "schedulocity",
			name: "Schedulocity",
			icon: <FaCalendarCheck className="text-blue-600 dark:text-blue-400" />,
		},
		{
			to: "robotics",
			name: "Robotics",
			icon: <FaRobot className="text-blue-600 dark:text-blue-400" />,
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


				<h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">App Development</h1>
				<Element name="ourgarden" className="mt-8">

					<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8">
						<div className="flex flex-col md:flex-row">
							{/* App Description Section */}
							<div className="md:w-1/2 p-4">
								<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">OurGarden</h2>
								<p className="text-gray-600 dark:text-gray-300">
									Inspired by the frenzied rush that would happen in my community whenever someone announced that they were putting seedlings out on their porch, I developed an app to streamline community plant sharing and trade. It’s a really simple, lightweight solution to a very personal problem. We ended up finding an opportunity to give what we’d done a platform in the <a href="https://www.congressionalappchallenge.us/23-tx30/"> Congressional App Challenge</a>. We created this pitch video for our platform once we had a minimum viable product. We actually ended up winning in our Congressional District (South Dallas). We got opportunities to present in DC, network with our congresswoman and other congresspeople, and meet hundreds of other likeminded young developers.
								</p>
							</div>

							{/* Video and App Store Link Section */}
							<div className="md:w-1/2 p-4 mt-6 md:mt-0">
								<iframe
									className="w-full aspect-video rounded-md shadow-lg"
									src="https://www.youtube.com/embed/ff-M4C0oQME"
									title="OurGarden Presentation Video"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>

								{/* App Store Link */}
								<div className="mt-4 flex justify-center">
									<a href="https://apps.apple.com/us/app/ourgarden-community-gardening/id6714448497?itscg=30200&itsct=apps_box_badge&mttnsubad=6714448497" target="_blank" rel="noopener noreferrer">
										<img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1727308800" alt="Download on the App Store" className="mt-2 w-32" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</Element>

				<Element name="schedulocity" className="mt-8">

					<div className="flex flex-row">
						<div className="md:h-1/2 w-full md:w-1/2 p-12 pb-12">
							<img
								src={SchedulocityImage}
							></img>
						</div>
						<div className="md:w-1/2 p-4 pb-12">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">Schedulocity</h2>
							<p className=" text-gray-600 dark:text-gray-300">Years of practice and dedication culminated in my graduation performance (arangetram) in Carrollton, Texas. The anticipation in the air was palpable as I took the stage, ready to showcase the skills I had developed through countless hours of training. For nearly three uninterrupted hours, I performed in front of an audience of hundreds, supported by a talented violinist and mridangam artist. As I sang, I felt a wave of emotions wash over me, reflecting on the journey that had led me to this moment. Each note was a testament to my hard work and the support of my teachers and family. The vibrant melodies filled the auditorium, and I could sense the connection I had with the audience, who shared in the experience. After singing for what felt like an eternity, I was overwhelmed with gratitude and pride. This performance was not just a culmination of my training; it was a celebration of my commitment to Carnatic music and a stepping stone into my future in the art. Singing began at 12:48, and I will always cherish that moment as a highlight of my musical journey.

							</p>
						</div>


					</div>
				</Element>

				<Element name="speechpundit" className="mt-8">

					<div className="flex flex-row">
						
						<div className="md:w-1/2 p-4 pb-12">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">Speechpundit</h2>
							<p className=" text-gray-600 dark:text-gray-300">Years of practice and dedication culminated in my graduation performance (arangetram) in Carrollton, Texas. The anticipation in the air was palpable as I took the stage, ready to showcase the skills I had developed through countless hours of training. For nearly three uninterrupted hours, I performed in front of an audience of hundreds, supported by a talented violinist and mridangam artist. As I sang, I felt a wave of emotions wash over me, reflecting on the journey that had led me to this moment. Each note was a testament to my hard work and the support of my teachers and family. The vibrant melodies filled the auditorium, and I could sense the connection I had with the audience, who shared in the experience. After singing for what felt like an eternity, I was overwhelmed with gratitude and pride. This performance was not just a culmination of my training; it was a celebration of my commitment to Carnatic music and a stepping stone into my future in the art. Singing began at 12:48, and I will always cherish that moment as a highlight of my musical journey.

							</p>
						</div>
						<div className="md:h-1/2 w-full md:w-1/2 p-12 pb-12">
							<img
								src="src/media/firstperf.png"
							></img>
						</div>


					</div>
				</Element>



				<h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">Robotics</h1>
				<Element name="robotics" className="mt-8">
					<div className="flex flex-row">
						
						<div className="md:h-1/2 w-full md:w-1/2 p-12 pb-12">
							<img
								src="src/media/state.png"
							></img>
						</div>
						<div className="md:w-1/2 p-4 ">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">Competition</h2>
							<p className=" text-gray-600 dark:text-gray-300">Years of practice and dedication culminated in my graduation performance (arangetram) in Carrollton, Texas. The anticipation in the air was palpable as I took the stage, ready to showcase the skills I had developed through countless hours of training. For nearly three uninterrupted hours, I performed in front of an audience of hundreds, supported by a talented violinist and mridangam artist. As I sang, I felt a wave of emotions wash over me, reflecting on the journey that had led me to this moment. Each note was a testament to my hard work and the support of my teachers and family. The vibrant melodies filled the auditorium, and I could sense the connection I had with the audience, who shared in the experience. After singing for what felt like an eternity, I was overwhelmed with gratitude and pride. This performance was not just a culmination of my training; it was a celebration of my commitment to Carnatic music and a stepping stone into my future in the art. Singing began at 12:48, and I will always cherish that moment as a highlight of my musical journey.
							</p>
						</div>
					</div>

					<div className="flex flex-row">
					<div className="md:w-1/2 p-4 pb-12">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">My Role: Software</h2>
							<p className=" text-gray-600 dark:text-gray-300">Years of practice and dedication culminated in my graduation performance (arangetram) in Carrollton, Texas. The anticipation in the air was palpable as I took the stage, ready to showcase the skills I had developed through countless hours of training. For nearly three uninterrupted hours, I performed in front of an audience of hundreds, supported by a talented violinist and mridangam artist. As I sang, I felt a wave of emotions wash over me, reflecting on the journey that had led me to this moment. Each note was a testament to my hard work and the support of my teachers and family. The vibrant melodies filled the auditorium, and I could sense the connection I had with the audience, who shared in the experience. After singing for what felt like an eternity, I was overwhelmed with gratitude and pride. This performance was not just a culmination of my training; it was a celebration of my commitment to Carnatic music and a stepping stone into my future in the art. Singing began at 12:48, and I will always cherish that moment as a highlight of my musical journey.
							</p>
						</div>
						<div className="md:h-1/2 w-full md:w-1/2 p-12 pb-12">
						<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8">

							<img
								src="src/media/dashboard.png"
							></img>
						</div>
						</div>
						
						
					</div>

				</Element>
			</div>
		</div>
	);
}

export default ComputerSciencePage;
