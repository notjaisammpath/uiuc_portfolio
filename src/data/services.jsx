import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart, FaMusic } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Music',
		icon: <FaMusic className="w-full h-full" />,
		description:
		'Click here to see my journey through Carnatic music and my initial foray into digital music production.',
		link: '/music', 
	},
	{
		title: 'Computer Science',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Click here to see what I\'ve learned while developing apps, competing with my robotics team, and interning.',
		link: '/computer-science', 
	},
	{
		title: 'Teaching/Outreach',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Click here to see the impact that I\'ve been able to make in the community by teaching code and digital music production',
		link: '/reaching-out', 
	},
];
