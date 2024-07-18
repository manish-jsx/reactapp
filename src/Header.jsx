import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-xl  font-semibold mb-4">Dashboard</h2>
                {/* Add navigation links or other header content here */}
            </div>
        </header>
    );
};

export default Header;
