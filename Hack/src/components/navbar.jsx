import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Alert Button Handler
    const handleAlertClick = () => {
        alert('Baachaoo Baachaoo');
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setVisible(false); // Scrolling down
        } else {
            setVisible(true); // Scrolling up
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-500 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg backdrop-blur-sm bg-white/10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <Link aria-current="page" className="flex items-center" to="/">
                            <img
                                className="h-7 w-auto"
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                alt="Logo"
                            />
                            <p className="sr-only">Website Title</p>
                        </Link>
                    </div>
                    {/* Centered Links Section */}
                    <div className="hidden md:flex flex-1 items-center justify-center gap-8 pl-10">
                        <Link
                            aria-current="Legal Support"
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-black hover:rounded-full"
                            to="legal"
                        >
                            How it works
                        </Link>
                        <Link
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-black hover:rounded-full"
                            to="#"
                        >
                            Pricing
                        </Link>
                        <Link
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-black hover:rounded-full"
                            to="#"
                        >
                            Do it
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <Link
                            className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-bold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 hover:rounded-full sm:inline-flex"
                            to="/signin" // Change href to to for react-router
                        >
                            Sign in
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 hover:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            to="/login" // Change href to to for react-router
                        >
                            Login
                        </Link>
                        <button className="inline-flex items-center justify-center rounded-full bg-gray-200 p-2 text-gray-600 transition-all duration-150 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                            <User size={24} />
                            <span className="sr-only">Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
