import React from 'react';
import dataLogo from '../assets/dataLogo.jpg';
import { TbMessageChatbot } from 'react-icons/tb';
import { HiChevronUpDown } from 'react-icons/hi2';
import { CiSearch } from 'react-icons/ci';
import { FaRegDotCircle } from "react-icons/fa";
import { IoMdHelpCircleOutline } from 'react-icons/io';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            {/* Left portion */}
            <div className="flex items-center">
                <img src={dataLogo} alt="Logo" className="h-8 mr-4" />
                <ul className="flex space-x-4">
                    <li>
                        <a href="/build" className="text-black px-3 py-1 rounded hover:bg-blue-600 hover:text-white">
                            Build
                        </a>
                    </li>
                    <li>
                        <a href="/deploy" className="text-black px-3 py-1 rounded hover:bg-blue-600 hover:text-white">
                            Deploy
                        </a>
                    </li>
                    <li>
                        <a href="/analyze" className="text-black px-3 py-1 rounded hover:bg-blue-600 hover:text-white">
                            Analyze
                        </a>
                    </li>
                    <li>
                        <a href="/manage" className="text-black px-3 py-1 rounded hover:bg-blue-600 hover:text-white">
                            Manage
                        </a>
                    </li>
                </ul>
            </div>

            {/* Right portion */}
            <div className="flex items-center space-x-5">
                {/* Chatbot logo and number */}
                <div className="flex bg-gray-200 p-2 rounded w-3/5 justify-between">
                    <div className="flex items-center mr-2">
                        <TbMessageChatbot size={25} color='blue'/>
                        <span className="text-black">1</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="text-gray-500">
                            {'</> IN DEVELOPMENT'}
                        </span>
                        <HiChevronUpDown size={30}/>
                    </div>
                </div>
                {/* Search sign/image */}
                <CiSearch size={40}/>
                {/* CD disk like logo */}
                <FaRegDotCircle size={32}/>
                {/* Language dropdown */}
                <select className="bg-white text-black p-0">
                    <option value="en">EN</option>
                    {/* Add other language options here */}
                </select>
                {/* Help route */}
                <a href="/help" className="flex items-center text-black text-xl">
                    <IoMdHelpCircleOutline />
                    help
                </a>
                {/* Green square box */}
                <a href="/profile" className="bg-green-500 h-8 w-8 p-2 flex items-center justify-center rounded">
                    <span className="text-white text-sm">SV</span>
                </a>
                {/* Purple circle */}
                <a href="/profile" className="bg-purple-500 h-8 w-8 p-2 flex items-center justify-center rounded-full">
                    <span className="text-white text-sm">SV</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
