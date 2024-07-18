import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 p-8 mt-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-sm">
                        Your App Name is committed to providing the best service. We are dedicated to your success and satisfaction.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm">Email: support@yourappname.com</p>
                    <p className="text-sm">Phone: +123 456 7890</p>
                    <p className="text-sm">Address: 123 Main Street, City, Country</p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your App Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
