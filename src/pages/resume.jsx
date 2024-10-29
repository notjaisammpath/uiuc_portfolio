// src/pages/ResumePage.js
import React from 'react';

function ResumePage() {
	return (
		<div className="bg-gray-100 dark:bg-gray-800 min-h-screen p-8 flex justify-center">
			<div className="bg-white dark:bg-slate-900 p-10 rounded-lg shadow-md w-full max-w-4xl">
				<h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-6">My Resume</h1>
				
				{/* Embedded PDF */}
				<div className="overflow-hidden rounded-md shadow-lg">
					<iframe
						src="src/media/resume.pdf"
						title="Resume"
						className="w-full h-screen"
					/>
				</div>
			</div>
		</div>
	);
}

export default ResumePage;
