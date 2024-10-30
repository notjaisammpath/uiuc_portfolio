import React from 'react';
import {FaHeart} from 'react-icons/fa';
function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				Jai Sammpath 
			</a>
			<a
				href="mailto:jai.sammpath@gmail.com"
				className="text-sm md:text-md hover:text-blue-500"
			>
				jai.sammpath@gmail.com
			</a>
			
		</div>
	);
}

export default Footer;
