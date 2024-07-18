import React, { useState } from 'react';
import ModuleTagging from './moduleTagging';
import UserTagging from './UserTagging';

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('user'); // Default active component is 'user'

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Side Navigation Panel */}
            <aside className="w-64 bg-gray-900 text-gray-100 p-4 shadow-lg">
                <ul className="space-y-2">
                    <li
                        className={`cursor-pointer ${activeComponent === 'user' ? 'font-semibold text-blue-500' : 'text-gray-400'}`}
                        onClick={() => setActiveComponent('user')}
                    >
                        <span>User Tags</span>
                    </li>
                    <li
                        className={`cursor-pointer ${activeComponent === 'module' ? 'font-semibold text-blue-500' : 'text-gray-400'}`}
                        onClick={() => setActiveComponent('module')}
                    >
                        <span>Module Tags</span>
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
            </aside>

            {/* Main content section */}
            <div className="flex-1 p-8 bg-gray-100 text-gray-900 relative">
                <div className="mt-16">
                    {/* Render content based on activeComponent */}
                    {activeComponent === 'user' && (
                        <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
                            <h2 className="text-2xl font-semibold mb-4">User Tags</h2>
                            <UserTagging />
                        </div>
                    )}
                    {activeComponent === 'module' && (
                        <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
                            <h2 className="text-2xl font-semibold mb-4">Module Tags</h2>
                            <ModuleTagging />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
