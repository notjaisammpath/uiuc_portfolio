// src/pages/MusicPage.js
import React from "react";
import { Element } from "react-scroll";
import Sidebar from "../components/Sidebar";
import { FaArrowLeft, FaMicrophone, FaHeadphones } from "react-icons/fa";
import cochiseCartiAudio from "../media/cochise-carti.mp3";
import latinAudio from "../media/latin.mp3";
import tsgw from "../media/tsgw.png";

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
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
          Carnatic Music
        </h1>
        {/* Carnatic Music Section */}
        <Element name="carnatic-music" className="mt-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md my-8">
            {" "}
            {/* Added wrapper */}
            <div className="flex flex-row">
              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                  Arangetram: My Graduation
                </h2>
                <p className=" text-gray-600 dark:text-gray-300">
                  I presented the culmination of over 13 years of persistence
                  and dedication to Carnatic Music in my Arangetram (graduation)
                  on September 16th, 2023. The performance consisted of close to
                  three hours of technical vocal pieces (Varnams, Krithis, and
                  Geethams). Accompanied by Umamahesh Iyer on violin and Naren
                  Pullela on mridangam, I performed for a crowd of hundreds of
                  music fans. After the performance, I was acclaimed by Vidushi
                  Smt. Thanmayee Krishnamurthy, a renowned Carnatic Vocalist.
                </p>
              </div>

              <div className="md:h-1/2 w-full md:w-1/2 p-12">
                <iframe
                  className="w-full aspect-video rounded-md"
                  src="https://www.youtube.com/embed/m_Hwgk8eV7I?t=768"
                  title="Jai Sammpath Vocal Arangetram"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="md:h-1/2 w-full md:w-1/2 p-12">
              <iframe
                className="w-full aspect-video rounded-md"
                src="https://www.youtube.com/embed/HaMQKDGkFcA"
                title="My First Performance!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                Where it all started (2011)
              </h2>
              <p className=" text-gray-600 dark:text-gray-300">
                This was my first performance, at age four. I was terrified, and
                refused to sing. My teacher, Mrs. Deepa Bhat, was the one that
                pushed me to get on stage that day, and she's pushed me to the
                heights that I've gotten to in Carnatic Music today.
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                My First Competition (2014)
              </h2>
              <p className=" text-gray-600 dark:text-gray-300">
                I sang competitively for the first time at age 7 in the Tamil
                Sangam of Greater Washington's Tamil Music Festival. My mom
                picked out one of her favorite songs: Ayarpadi Maligayil, a
                beautiful song about Krishna. I ended up taking home first
                place!
              </p>
            </div>
            <div className="md:h-1/2 w-full md:w-1/2 p-12">
              <img src={tsgw}></img>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="md:h-1/2 w-full md:w-1/2 p-12">
              <iframe
                className="w-full aspect-video rounded-md"
                src="https://www.youtube.com/embed/sDDvRmodPg4"
                title="One of our Annual Recitals"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                Annual Recitals (2018)
              </h2>
              <p className=" text-gray-600 dark:text-gray-300">
                As part of our school tradition, I performed at annual recitals
                in front of dozens of parents and students. Our school operated
                on a batch model, where students were grouped by skill level,
                and I was consistently placed with highschoolers, despite barely
                being in middle school.
              </p>
            </div>
          </div>
        </Element>

        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
          Music Production
        </h1>
        <Element name="music-production" className="mt-8">
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Recently, I've been diving a bit deeper into hip hop music
            production. I've been teaching myself how to use FL Studio to create
            beats like my favorite producers. I'm still building experience:
            improving my composition, sound selection, and mixing, but here are
            a couple of (in my opinion) my most fruitful explorations so far:{" "}
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md my-8">
            {" "}
            {/* Added wrapper */}
            <div className="flex flex-row">
              <div className="md:h-1/2 w-full md:w-1/2 p-12 flex items-center justify-center">
                <audio
                  controls
                  className="w-96 h-24 rounded-md shadow-lg pt-14"
                >
                  <source src={cochiseCartiAudio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                  Silhouette
                </h2>
                <p className=" text-gray-600 dark:text-gray-300">
                  This piece was inspired by the rage wave in hip hop,
                  especially Playboi Carti's Whole Lotta Red and Trippie Redd's
                  Trip At Knight. Working on this piece, I learned how to create
                  synths and leads in Serum, and tried my hand at arranging and
                  mixing for the first time. My favorite element is definitely
                  the pad; I love how simultaneously gritty and smooth it is.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 p-2">
                Side Street
              </h2>
              <p className=" text-gray-600 dark:text-gray-300">
                Inspiration for this piece struck me when I was waiting at a red
                light and heard this bassline flowing from the open windows of a
                nearby truck. I've always been interested in Latin music, and
                figured I'd try to incorporate it into one of my explorations,
                and this is what came of it. To this day, I'm still looking for
                a better trumpet line.
              </p>
            </div>

            <div className="md:h-1/2 w-full md:w-1/2 p-12 flex items-center justify-center">
              <audio controls className="w-96 h-24 rounded-md shadow-lg pt-14">
                <source src={latinAudio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
}

export default MusicPage;
