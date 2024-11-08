import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon , PlusCircleIcon , UserIcon } from '@heroicons/react/16/solid';
function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-300 p-3 flex justify-around fixed top-0 w-full z-10 shadow-sm">
            <Link to="/" className="text-gray-700 font-semibold text-xl">Instagram</Link>
            <div className="flex space-x-6">
                <Link to="/">
                    <HomeIcon className="h-6 w-6 text-gray-700" />
                </Link>
                <Link to="/search">
                    {/* <SearchIcon className="h-6 w-6 text-gray-700" /> */}
                </Link>
                <Link to="/newpost">
                    <PlusCircleIcon className="h-6 w-6 text-gray-700" />
                </Link>
                <Link to="/profile/username">
                    <UserIcon className="h-6 w-6 text-gray-700" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
