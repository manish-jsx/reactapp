import React, { useState } from 'react';

function ModuleTagging() {
    const [selectedModule, setSelectedModule] = useState('');
    const [modules] = useState([
        { value: 'module1', label: 'Module 1' },
        { value: 'module2', label: 'Module 2' },
        { value: 'module3', label: 'Module 3' },
        // Add more modules as needed
    ]);

    const handleModuleChange = (e) => {
        setSelectedModule(e.target.value);
    };

    const [programs, setPrograms] = useState([
        { id: 1, label: 'Program 1', checked: false },
        { id: 2, label: 'Program 2', checked: false },
        { id: 3, label: 'Program 3', checked: false },
        // Add more program options as needed
    ]);

    const handleProgramChange = (id) => {
        setPrograms((prevPrograms) =>
            prevPrograms.map((program) =>
                program.id === id ? { ...program, checked: !program.checked } : program
            )
        );
    };

    const handleSubmit = () => {
        const selectedPrograms = programs.filter(program => program.checked);
        console.log('Selected Module:', selectedModule);
        console.log('Selected Programs:', selectedPrograms);
        // Add your submit logic here
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Modules</h2>
                <select
                    value={selectedModule}
                    onChange={handleModuleChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 outline-none"
                >
                    <option value="">Select a module</option>
                    {modules.map((module) => (
                        <option key={module.value} value={module.value}>
                            {module.label}
                        </option>
                    ))}
                </select>
                <p className="mt-4">Selected module: {selectedModule}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Programs</h2>
                {programs.map((program) => (
                    <div key={program.id} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={`program-${program.id}`}
                            checked={program.checked}
                            onChange={() => handleProgramChange(program.id)}
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label
                            htmlFor={`program-${program.id}`}
                            className="ml-2 text-gray-700"
                        >
                            {program.label}
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

export default ModuleTagging;
