import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing specific icons

function HeroSection() {
    const [text, setText] = useState('');
    const fullText = "Hi, I'm Jai!";
    const typingSpeed = 100; // Speed of typing in milliseconds
    const pauseAfterComma = 500; // Pause duration after the comma in milliseconds

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => prev + fullText[index]);
            index++;
            if (index === 3) { // Pause after the comma
                clearInterval(interval);
                setTimeout(() => {
                    const newInterval = setInterval(() => {
                        setText((prev) => prev + fullText[index]);
                        index++;
                        if (index === fullText.length) {
                            clearInterval(newInterval);
                        }
                    }, typingSpeed);
                }, pauseAfterComma);
            } else if (index === fullText.length) {
                clearInterval(interval);
            }
        }, typingSpeed);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="hero" className="flex items-center justify-center flex-col py-10">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-blue-600 dark:text-blue-500 font-semibold transition-transform transform hover:scale-105">
                    {text}
                    <span className="blinking-cursor">|</span>
                </h1>
                <p className="text-md md:text-lg max-w-lg mb-3 text-gray-600 dark:text-gray-300 transition-opacity duration-300 hover:opacity-80">
                    I'm a driven high school senior interested in exploring the 
                    intersection between computer science and music.
                </p>
                <div className="flex space-x-12 justify-center mt-4">
                    <a href="https://www.linkedin.com/in/jaisammpath/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                        <FaLinkedin className="text-4xl text-blue-600 dark:text-blue-500" />
                    </a>
                    <a href="https://github.com/notjaisammpath" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                        <FaGithub className="text-4xl text-blue-600 dark:text-blue-500" />
                    </a>
                </div>
            </div>
            <style jsx>{`
                .blinking-cursor {
                    font-weight: 200;
                    font-size: 24px;
                    color: #3b82f6;
                    animation: blink 1s step-end infinite;
                }

                @keyframes blink {
                    from, to {
                        color: transparent;
                    }
                    50% {
                        color: #3b82f6;
                    }
                }
            `}</style>
        </div>
    );
}

export default HeroSection;