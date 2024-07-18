import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-black p-4 mt-8">
            <div className="container mx-auto flex justify-center">
                <p>&copy; {new Date().getFullYear()} Your App Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
