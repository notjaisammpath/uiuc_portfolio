// src/pages/ComputerSciencePage.js
import React from "react";
import { Element } from "react-scroll";
import Sidebar from "../components/Sidebar";
import {
  FaArrowLeft,
  FaSeedling,
  FaCalendarCheck,
  FaRobot,
  FaMicrophone,
} from "react-icons/fa";
import SchedulocityImage from "../media/schedulocity.png";
import SpeechpunditImage from "../media/sp.png";
import ClassReport from "../media/class.png";
import Schedule from "../media/schedule.png";
import state from "../media/state.png";
import dashboard from "../media/dashboard.png";

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
    <div className="flex flex-col md:flex-row">
      <Sidebar items={sidebarItems} homeLink={homeLink} name="Music" />

      {/* Main Content Area */}
      <div className="w-full md:w-5/6 p-4 md:p-8">
        <Element name="ourgarden" className="mt-8">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
            App Development
          </h1>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                  OurGarden
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  My neighborhood has a huge culture of gardening and sharing
                  their produce. Inspired by the issues our community had on
                  WhatsApp, we created OurGarden, a multiplatform app, in
                  Flutter. It makes this network of plant sharing easy, breaking
                  communication up into Communities, and enables you to manage
                  your own digital garden. For our work, we were recognized by
                  our Congresswoman and{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.congressionalappchallenge.us/23-tx30/"
                    className="underline"
                  >
                    {" "}
                    awarded first place in the Congressional App Challenge
                  </a>
                  . We got to present the app in DC, sharing our ideas with
                  Congress and hundreds of other likeminded young innovators.
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
                  <a
                    href="https://apps.apple.com/us/app/ourgarden-community-gardening/id6714448497?itscg=30200&itsct=apps_box_badge&mttnsubad=6714448497"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1727308800"
                      alt="Download on the App Store"
                      className="mt-2 w-32"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Element name="schedulocity" className="mt-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 pb-12 flex flex-col items-center justify-center">
              <img
                src={SchedulocityImage}
                className="w-1/4 md:w-1/4 h-auto mb-4"
              />
              
              <img src={Schedule} className="w-3/4 md:w-3/4 h-auto" />
              <div className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4">An example student exam schedule email</div>
            </div>
            <div className="md:w-1/2 p-4 pb-12">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                Schedulocity
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                At my high school, we take tons of standardized tests; the
                average student takes 3 PSATs, an SAT, and 15 AP exams before
                graduating. Our problem was that our testing and room assignment
                schedules were communicated by a sheet of paper put up in a
                central area. This created a host of issues, including
                overcrowding, stressed students and faculty, and just a waste of
                paper. To solve this we created{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/1CG0Ew-6J3Qs9WYO6z4z1Yqrohn9rMKax?usp=drive_link"
                  className="underline"
                >
                  Schedulocity, which parsed the spreadsheets that the
                  counselors were already using to send students their
                  personalized testing schedules
                </a>
                . We pitched the idea to 20+ students, the principal, and both
                counselors, gaining approval before testing our solution with
                real student data. This is still the solution used at TAG today!
              </p>
            </div>
          </div>
        </Element>

        <Element name="speechpundit" className="mt-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 pb-12">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                Speechpundit
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                During the summer after my junior year, I interned at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.speechpundit.com/"
                  className="underline"
                >
                  SpeechPundit, a public speaking coaching company
                </a>
                . I worked with them to extract metrics from recordings of
                voices to identify common public speaking issues. For example, I
                identified the emotion in the tone of the user's speech,
                compared it with a sentiment analysis on their speech's content,
                and sent that information to the user to help them improve their
                speech. Additionally, as the company pivoted towards AI-driven
                speech analysis,
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/4d153127-cd97-4ff0-851c-9440d74b967d/linked_in_profile"
                  className="underline"
                >
                  I got certified in Machine Learning by AWS (a
                  professional-level certification)
                </a>{" "}
                to make better-informed decisions when tuning and deploying
                models. Finally, channelling my frustration while learning
                Python at the beginning of the summer, I containerized the
                development process of the audio processing stack with Docker,
                making new employees' setup as easy as following a quick start
                guide.
              </p>
            </div>
            <div className=" rounded-lg p-6 shadow-md my-8 bg-gray-100 dark:bg-gray-800 md:w-1/2 p-4 pb-12 flex flex-col items-center">
              <img src={ClassReport} className="center h-auto mt-4 " />
              <div className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4">The results from one of my successful emotion classification models</div>
            </div>

          </div>
        </Element>

        <Element name="robotics" className="mt-8">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
            Robotics
          </h1>
          <div className="flex flex-col md:flex-row mt-8">
            <div className="md:w-1/2 p-4 pb-12">
              <img src={state} className="w-full h-auto" />
              <div className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4">My team, Iron Reign, right after winning Innovate 1 at State</div>
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                Our Team
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I'm software lead on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/4d153127-cd97-4ff0-851c-9440d74b967d/linked_in_profile"
                  className="underline"
                >
                  Iron Reign (First Tech Challenge Team 6832).
                </a>{" "}
                We build all kinds of robots, from tiny concept systems to huge
                summer projects , and we have a lot of fun doing it. During my
                time on the team, we've advanced to State twice and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ironreignrobotics.org/2023-04-25-worlds/"
                  className="underline"
                >
                  the World Championship
                </a>{" "}
                once. We've automated a{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ironreignrobotics.org/2023-08-11-r2v3-safety/"
                  className="underline"
                >
                  16-ton RV
                </a>{" "}
                and an{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ironreignrobotics.org/2022-07-09-mechavator-safety/"
                  className="underline"
                >
                  {" "}
                  industrial-grade excavator,
                </a>{" "}
                and we're notorious in North Texas for our experimental designs
                and strong team spirit. As software lead, I work with the rest
                of code team to divide up work, communicate expectations with
                the build and design teams, do a lot of coding myself. The core
                of my technical work is done in Java, dealing with state
                management, automation, driver-centered design, and sensor
                fusion. For my work on the team and impact on the wider FIRST
                Robotics community, I was one of 4 students in all of North
                Texas named a Dean's List Finalist!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-8">
            <div className="md:w-1/2 p-4 pb-12">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                Team Outreach
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Teaching the coders on the Junior Varsity teams, Iron Giant and
                Iron Core, how to code. Incoming skill levels range from 'never
                coded before' to 'just teach me the FTC specific stuff and I've
                got it,' so I often need to be very intentional with how I
                teach. We also do tons of work for the FTC open-source
                community; our most recent contribution was{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ironreignrobotics.org/2023-09-07-ftcdashboard-updates/"
                  className="underline"
                >
                  improving the functionality of FTC Dashboard
                </a>
                , a telemetry utility used by hundreds of FTC teams. Leading the
                software discussions when we connect with people. For example, I
                lead code conversations with engineers from companies like{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ironreignrobotics.org/2023-11-06-awsconnectnov/"
                  className="underline"
                >
                  Amazon
                </a>{" "}
                and Boeing, drawing on their industry experience to inform our
                development.
              </p>
            </div>
            <div className="md:w-1/2 p-4 pb-12">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8">
                <img src={dashboard} className="w-full h-auto" />
                <div className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4"> A screenshot of our contributions to the Field View (Bottom Left) on FTC Dashboard</div>

              </div>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
}

export default ComputerSciencePage;
