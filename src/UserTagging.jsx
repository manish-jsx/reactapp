import React, { useState } from 'react';

function UserTagging() {
    const [selectedOption, setSelectedOption] = useState('');
    const [options] = useState([
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        // Add more options as needed
    ]);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Option 1', checked: false },
        { id: 2, label: 'Option 2', checked: false },
        { id: 3, label: 'Option 3', checked: false },
        // Add more checkbox options as needed
    ]);

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) =>
                checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Users</h2>
                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 outline-none"
                >
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <p className="mt-4">Selected option: {selectedOption}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Modules</h2>
                {checkboxes.map((checkbox) => (
                    <div key={checkbox.id} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={`checkbox-${checkbox.id}`}
                            checked={checkbox.checked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label
                            htmlFor={`checkbox-${checkbox.id}`}
                            className="ml-2 text-gray-700"
                        >
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>

            {/* Add more grid items as needed */}
        </div>
    );
}

export default UserTagging;
