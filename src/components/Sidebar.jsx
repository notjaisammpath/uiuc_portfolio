// src/components/Sidebar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Sidebar({ items, homeLink, name }) {
    return (
        <nav className="bg-blue-100 dark:bg-blue-800 p-6 rounded-xl shadow-lg mr-8 sticky top-4 h-fit">
            <ul className="space-y-4">
                {/* Home link */}
                <li className="flex items-center space-x-2">
                    {homeLink.icon}
                    <RouterLink to={homeLink.path} className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 font-semibold">
                        {homeLink.name}
                    </RouterLink>
                </li>
                <p className='text-blue-600'>-------------------</p>
				
                {/* Dynamic links */}
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        {item.icon}
                        <ScrollLink
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 font-semibold"
                        >
                            {item.name}
                        </ScrollLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;
