"use client"
import { useState } from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-300 shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">AFZAL POP WORK</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Home</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Services</span>
          </Link>
          <Link href="/pricing">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Pricing</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">About Us</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-blue-600 hover:border-blue-600 transition duration-300"
          aria-label="Toggle navigation menu"
        >
          {/* <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg> */}
           <AlignJustify />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white w-full shadow-md`}>
        <div className="flex flex-col justify-center items-center px-4 py-2 space-y-2">
          <Link href="/">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Home</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Services</span>
          </Link>
          <Link href="/pricing">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Pricing</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">About Us</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

