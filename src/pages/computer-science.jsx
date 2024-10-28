import React from 'react';
import { Link } from 'react-router-dom';

function ComputerSciencePage() {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold text-blue-600 dark:text-blue-500">Computer Science</h1>
			<p className="mt-4 text-gray-600 dark:text-gray-300">
				Welcome to the Computer Science page! Here, you’ll find insights, projects, and resources related to the field of computer science.
			</p>
			{/* Add more content as needed */}
			
			{/* Link to navigate back to home */}
			<Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
				Back to Home
			</Link>
		</div>
	);
}

export default ComputerSciencePage;
