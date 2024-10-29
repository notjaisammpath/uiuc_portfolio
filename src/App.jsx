import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ReachingOutPage from './pages/reaching-out';
import MusicPage from './pages/music';
import ComputerSciencePage from './pages/computer-science';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<Router>
			<div className="bg-slate-100 dark:bg-slate-900 min-h-screen font-inter"> {/* Apply slate background here */}
				<button
					type="button"
					onClick={handleThemeSwitch}
					className="fixed z-10 right-2 top-2 bg-blue-500 text-lg p-1 rounded-md"
				>
					{theme === 'dark' ? '🌙' : '☀️'}
				</button>
				<div className="w-10/12 mx-auto pt-6"> {/* Adjusted for layout */}
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Navbar />
									<HeroSection />
									<About />
									<Services />
									<Footer />
								</>
							}
						/>
<Route path="/computer-science" element={<ComputerSciencePage />} />
						<Route path="/music" element={<MusicPage />} />
						<Route path="/reaching-out" element={<ReachingOutPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
