// src/pages/MusicPage.js
import React from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft, FaSeedling, FaCalendarCheck, FaRobot, FaMicrophone } from 'react-icons/fa';
import SchedulocityImage from '../media/schedulocity.png';
import SpeechpunditImage from '../media/sp.png';

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
			to: "speechpundit",
			name: "SpeechPundit",
			icon: <FaMicrophone className="text-blue-600 dark:text-blue-400" />,
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
			<div className="w-5/6 p-8">


				<Element name="ourgarden" className="mt-8">
					<h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">App Development</h1>

					<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8">
						<div className="flex flex-col md:flex-row">
							<div className="md:w-1/2 p-4">
								<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">OurGarden</h2>
								<p className="text-gray-600 dark:text-gray-300">
									My family is huge on gardening – half my plate is usually fresh from our backyard. Naturally, when my parents found families in the neighborhood with an interest in gardening, we reached out and began trading with them to diversify the organic food we were eating and growing. However, the labyrinthine list of group chats and the constant flurry of activity on WhatsApp made a community trade network impossible. I found a solution in app development: if the platform was the issue, I’d create my own. Since then, I’ve been building OurGarden, a community gardening app that was <a target="_blank" rel="noopener noreferrer" href="https://www.congressionalappchallenge.us/23-tx30/" className='underline'> awarded first place in the Congressional App Challenge</a>. We got to present the app in DC, sharing our ideas with Congress and hundreds of other likeminded young innovators.
								</p>
							</div>

							<div className="md:w-1/2 pt-10 mt-6 md:mt-0">
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
							<p className=" text-gray-600 dark:text-gray-300">At my high school, we take tons of standardized tests; the average student takes 3 PSATs, an SAT, and 15 AP exams before graduating. Our problem was that our testing and room assignment schedules were communicated by a sheet of paper put up in a central area. This created a host of issues, including overcrowding, stressed students and faculty, and just a waste of paper. To solve this we created <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1CG0Ew-6J3Qs9WYO6z4z1Yqrohn9rMKax?usp=drive_link" className='underline'>Schedulocity, which parsed the spreadsheets that the counselors were already using to send students their personalized testing schedules</a>. We pitched the idea to 20+ students, the principal, and both counselors, gaining approval before testing our solution with real student data. This is still the solution used at TAG today!

							</p>
						</div>


					</div>
				</Element>

				<Element name="speechpundit" className="mt-8">

					<div className="flex flex-row">

						<div className="md:w-1/2 p-4 pb-12">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">Speechpundit</h2>
							<p className=" text-gray-600 dark:text-gray-300">During the summer after my junior year, I interned at SpeechPundit, a public speaking coaching company. I worked with them to extract metrics from recordings of voices to identify common public speaking issues. For example, I identified whether each sentence's volume trended upward or downward, and sent that information to the user to help them improve their speech. Additionally, as the company pivoted towards AI-driven speech analysis, I got certified in Machine Learning by AWS (a professional-level certification) to make better-informed decisions when tuning and deploying models. Finally, channelling my frustration while learning Python at the beginning of the summer, I containerized the development process of the audio processing stack with Docker, making new employees' setup as easy as following a quick start guide.
							</p>
						</div>
						<div className="md:h-1/2 w-full md:w-1/2 p-12 pb-12">
							<img
								src={SpeechpunditImage}
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
							<p className=" text-gray-600 dark:text-gray-300">I'm software lead on Iron Reign (First Tech Challenge Team 6832). We build all kinds of robots, from tiny concept systems to huge summer projects, and we have a lot of fun doing it. During my time on the team, we've advanced to State twice and the World Championship once. We've automated a 16-ton RV and an industrial-grade excavator, and we're notorious in North Texas for our experimental designs and strong team spirit.
							</p>
						</div>
					</div>

					<div className="flex flex-row">
						<div className="md:w-1/2 p-4 pb-12">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">My Role: Software</h2>
							<p className=" indent-1 text-gray-600 dark:text-gray-300"> As software lead, I'm responsible for three things: </p>
							<ul>
								<li className="list-decimal text-gray-600 dark:text-gray-300">
									Ensuring that the software is on track for our current project. This entails working with the rest of code team to divide up the work, communicating expectations with the build and design teams, and picking up a lot of the coding myself. The core of my technical work is done in Java, dealing with state management, automation, driver-centered design, and sensor fusion.
								</li>
								<li className="list-decimal text-gray-600 dark:text-gray-300">
									Teaching the coders on the Junior Varsity teams, Iron Giant and Iron Core, how to code. Incoming skill levels range from 'never coded before' to 'just teach me the FTC specific stuff and I've got it.' Often, JV team members don't realize just how time-consuming testing can be, so I teach them to be far ahead of schedule.
								</li>
								<li className="list-decimal text-gray-600 dark:text-gray-300">
									Leading the software discussions when we connect with people. For example, I lead code conversations with engineers from companies like Amazon and Boeing, drawing on their industry experience to inform our development. I'm also responsible for leading code instruction when we reach out to the community and offer workshops or classes.
								</li>
							</ul>
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
