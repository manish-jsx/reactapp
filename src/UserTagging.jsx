import React, { useState } from 'react';

function UserTagging() {
    const [selectedUser, setSelectedUser] = useState('');
    const [users] = useState([
        { value: 'user1', label: 'User 1' },
        { value: 'user2', label: 'User 2' },
        { value: 'user3', label: 'User 3' },
        // Add more users as needed
    ]);

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    const [modules, setModules] = useState([
        { id: 1, label: 'Module 1', checked: false },
        { id: 2, label: 'Module 2', checked: false },
        { id: 3, label: 'Module 3', checked: false },
        // Add more module options as needed
    ]);

    const handleModuleChange = (id) => {
        setModules((prevModules) =>
            prevModules.map((module) =>
                module.id === id ? { ...module, checked: !module.checked } : module
            )
        );
    };

    const handleSubmit = () => {
        const selectedModules = modules.filter(module => module.checked);
        console.log('Selected User:', selectedUser);
        console.log('Selected Modules:', selectedModules);
        // Add your submit logic here
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Users</h2>
                <select
                    value={selectedUser}
                    onChange={handleUserChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 outline-none"
                >
                    <option value="">Select a user</option>
                    {users.map((user) => (
                        <option key={user.value} value={user.value}>
                            {user.label}
                        </option>
                    ))}
                </select>
                <p className="mt-4">Selected user: {selectedUser}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Modules</h2>
                {modules.map((module) => (
                    <div key={module.id} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={`module-${module.id}`}
                            checked={module.checked}
                            onChange={() => handleModuleChange(module.id)}
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label
                            htmlFor={`module-${module.id}`}
                            className="ml-2 text-gray-700"
                        >
                            {module.label}
                        </label>
                    </div>
                ))}
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-end">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default UserTagging;
