"use clint";
import React, { ReactElement, useState } from 'react';
import { FaChartBar } from 'react-icons/fa';
import { BsInboxes } from "react-icons/bs";
import { GoDeviceDesktop } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";
import { PiNotepad } from 'react-icons/pi';
import { PiPlug } from "react-icons/pi";
import { TbSettingsStar } from "react-icons/tb";

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-200 h-screen w-64 p-4">
            <ul>
                <li className="flex items-center w-full py-2 px-4 rounded text-left hover:bg-slate-400">
                    <FaChartBar size={20} className='m-1'/>
                    <a
                        href="/summary"
                    >
                        Summary
                    </a>
                </li>
                <li>
                    <Dropdown
                        title="Conversational Skills"
                        icon={<BsInboxes size={20} className='m-1' />}
                    />
                </li>
                <li>
                    <Dropdown title="Digital Skills" icon={<GoDeviceDesktop size={20} className='m-1' />} />
                </li>
                <li>
                    <Dropdown title="Natural Language" icon={<PiTelevisionSimpleBold size={20} className='m-1' />} />
                </li>
                <li>
                    <Dropdown title="Intelligence" icon={<LuBrainCircuit size={20} className='m-1' />} />
                </li>
                <li>
                    <Dropdown title="Testing" icon={<PiNotepad size={20} className='m-1' />} />
                </li>
                <li>
                    <Dropdown title="Integrations" icon={<PiPlug size={20} className='m-1' />} />
                </li>
                <li>
                    <Dropdown title="Configurations" icon={<TbSettingsStar size={20} className='m-1' />} />
                </li>
            </ul>
        </div>
    );
};

interface DropdownProps {
    title: string;
    icon: ReactElement;
}

const Dropdown: React.FC<DropdownProps> = ({ title, icon }) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="relative">
            <button className="flex items-center w-full py-2 px-4 rounded text-left hover:bg-slate-400" onClick={() => setShowMenu(!showMenu)}>
                {icon}
                {title}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {/* Dropdown content */}
            <div className={`mt-1 w-full bg-white rounded-md shadow-lg ${showMenu ? "" : "hidden"}`}>
                {/* Dropdown items */}
                <ul className="py-1">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 3
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
