// src/pages/MusicPage.js
import React from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { FaArrowLeft, FaSeedling, FaCalendarCheck, FaRobot, FaMicrophone, FaHeadphones, FaCode } from 'react-icons/fa';
import ltbb from '../media/ltbb.png';
import ninja from '../media/ninja.jpg';

function ReachingOutPage() {
	const sidebarItems = [
		{
			to: "let the beat build",
			name: "Let The Beat Build",
			icon: <FaHeadphones className="text-blue-600 dark:text-blue-400" />,
		},
		{
			to: "codeninjas",
			name: "CodeNinjas",
			icon: <FaCode className="text-blue-600 dark:text-blue-400" />,
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


				<Element name="let the beat build" className="mt-8">

					<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8">
						<div className="flex flex-col md:flex-row">
							<div className="md:w-1/2 p-4">
								<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">Let The Beat Build</h2>
								<p className="text-gray-600 dark:text-gray-300">
									During the summer after my sophomore year, I worked with Let The Beat Build, a Dallas nonprofit focused on teaching emotional awareness through music. I helped empower  over 40 elementary-age kids to express themselves through music production in ways words couldn’t. Younger students (aged 4-8) learned core concepts of rhythm while playing boomwhackers and tambourines, learning to calm themselves by breathing intentionally in time with the rhythm. I taught the older students (aged 8-11) to use Soundtrap, a lightweight, beginner-friendly Digital Audio Workstation, opening their horizons up to digital music production. We made class beats and hosted beat battles, while focusing on the healthy outlet that music creation can be to unwanted feelings. Watching my students grow as people by learning to produce, it was clear to me that my goal to make music education more accessible was bigger than teaching kids how to make beats.
								</p>
							</div>

							<div className="md:h-1/2 w-full md:w-1/2 p-12 pb-12">
								<img
									src={ltbb}
								></img>
							</div>

						</div>
					</div>
				</Element>

				<Element name="codeninjas" className="mt-8">

					<div className="flex flex-row">
						<div className="md:h-1/2 w-full md:w-1/2 p-12 pb-12">
							<img
								src={ninja}
								className="w-2/3 h-auto"
							></img>
						</div>
						<div className="md:w-1/2 p-4 pb-12">
							<h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">CodeNinjas</h2>
							<p className=" text-gray-600 dark:text-gray-300">The summer after my sophomore year, I interned at CodeNinjas Preston Hollow. I helped lead workshops and camps for students, primarily kids aged 4-11. My favorite experience working there was definitely running the Modding with Minecraft camp. The lesson plans stopped functioning after an update to MCreator (the block code software we used to create Minecraft Mods) changed how the app worked, and I got to draw on my lifelong obsession with technical Minecraft to create a lesson plan on the fly. The kids loved it, and actually ended up learning more coding concepts than the lesson plan had intended!</p>
						</div>
					</div>
				</Element>

			</div>
		</div>
	);
}

export default ReachingOutPage;
