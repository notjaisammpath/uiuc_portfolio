// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';

function Navbar() {
    return (
 	   <nav className="bg-blue-600 dark:bg-slate-800 text-white mt-2 p-4 shadow-l rounded-lg">
 		   <div className="mx-auto flex justify-between items-center">
 			   <ul className="flex space-x-4">
				<li>
 					   <Link to="/" className="hover:underline text-blue-200 dark:text-blue-300">Home</Link>
 				   </li>
					<li>
					<p className='text-blue-500 dark:text-blue-300'> | </p>
 				   </li>
 				   <li>
 					   <Link to="/computer-science" className="hover:underline text-blue-200 dark:text-blue-300">Computer Science</Link>
 				   </li>
					<li>
					<p className='text-blue-500 dark:text-blue-300'> | </p>
 				   </li>
 				   <li>
 					   <Link to="/music" className="hover:underline text-blue-200 dark:text-blue-300">Music</Link>
 				   </li>
				   <li>
 					   <p className='text-blue-500 dark:text-blue-300'> | </p>
 				   </li>
				
 				   <li>
 					   <Link to="/reaching-out" className="hover:underline text-blue-200 dark:text-blue-300">Teaching/Outreach</Link>
 				   </li>
					<li>
 					   <p className='text-blue-500 dark:text-blue-300'> | </p>
 				   </li>
				
 				   <li>
 					   <Link to="/resume" className="hover:underline text-blue-200 dark:text-blue-300">Resume</Link>
 				   </li>
 			   </ul>
 		   </div>
 	   </nav>
    );
}

export default Navbar;
