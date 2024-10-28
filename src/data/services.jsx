import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart, FaMusic } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Music',
		icon: <FaMusic className="w-full h-full" />,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
		link: '/music', 
	},
	{
		title: 'Computer Science',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
		link: '/computer-science', 
	},
	{
		title: 'Teaching/Outreach',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
		link: '/reaching-out', 
	},
];
