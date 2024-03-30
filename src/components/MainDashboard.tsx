import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoBookOutline } from 'react-icons/io5';
import { PiArrowsDownUp } from 'react-icons/pi';
import Dialogs from '../assets/Dialogs';

interface dialog {
    Name: string;
    Description: string;
    Updated: string;
    Status: string;
    details: boolean;
    Draft: boolean;
}

const MainDashboard: React.FC = () => {
    return (
        <div className="p-4 w-4/5">
            {' '}
            {/* ml-64 to offset the width of the sidebar */}
            {/* Main content area */}
            <div className="bg-white h-screen m-2">
                {/* Storyboard heading */}
                <div className="flex">
                    <h2 className="text-2xl font-bold mb-4 mr-2">Storyboard</h2>
                    <IoBookOutline size={20} />
                </div>

                {/* Navbar-like structure */}
                <nav className="flex justify-between items-center mb-4">
                    {/* Left portion */}
                    <div className="flex items-center space-x-4">
                        <a href="/build/faqs" className="text-black px-2 hover:bg-slate-300 rounded-md">
                            FAQs
                        </a>
                        <a href="/build/dialog-tasks" className="text-black px-2 hover:bg-slate-300 rounded-md">
                            Dialog Tasks
                        </a>
                        <a href="/build/mock-scene" className="text-black px-2 hover:bg-slate-300 rounded-md">
                            Mock Scene
                        </a>
                    </div>

                    {/* Right portion */}
                    <div className="flex items-center">
                        <div className="relative flex items-center p-2 rounded bg-gray-200 text-black mr-2">
                            <CiSearch size={20} />
                            <input
                                type="text"
                                placeholder="Search Dialog Task"
                                className="bg-gray-200 text-black mr-2"
                            />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">
                            Create Dialog
                        </button>
                    </div>
                </nav>

                {/* Table-like structure */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center">
                                        <PiArrowsDownUp className="mr-1" />
                                        Name
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center">
                                        <PiArrowsDownUp className="mr-1" />
                                        Description
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center">
                                        <PiArrowsDownUp className="mr-1" />
                                        Last Updated
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center">
                                        <PiArrowsDownUp className="mr-1" />
                                        Status
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table rows go here */}
                            {Dialogs.map((dialog: dialog) => {
                                return (
                                    <tr className="bg-white">
                                        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <div className="flex flex-col">
                                                {dialog.Name}
                                                <span className="text-gray-400 text-sm">
                                                    {dialog.details
                                                        ? 'Sub intent dialog'
                                                        : ''}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                            {dialog.Description}
                                        </td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                            {dialog.Updated}
                                        </td>
                                        <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex flex-col">
                                                {dialog.Status}
                                                <span className="text-gray-400 text-sm">
                                                    {dialog.Draft
                                                        ? 'Draft'
                                                        : ''}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
