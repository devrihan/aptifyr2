"use client";
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex justify-between items-center p-4 bg-white text-black border-b-1 border-[#A131DC] px-8 font-poppins">
      <div>
        <Image src="/logo.svg" alt="logo" width={80} height={50} />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span className="block w-6 h-0.5 bg-black mb-1 transition-transform duration-300"></span>
            <span className="block w-6 h-0.5 bg-black mb-1 transition-transform duration-300"></span>
            <span className="block w-6 h-0.5 bg-black transition-transform duration-300"></span>
          </div>
        </button>
      </div>
      <ul className="hidden lg:flex space-x-10 font-bebas text-2xl">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/aboutus" className="hover:underline">About Us</a></li>
        <li><a href="/ourskills" className="hover:underline">Skills</a></li>
        <li><a href="/auth/login" className="hover:underline">Login</a></li>
        <li><a href="/#contact" className="hover:underline">Contact Us</a></li>
      </ul>
      {isOpen && (
        <div className="absolute top-full right-0 w-36 bg-white shadow-md lg:hidden z-50 font-bebas text-2xl">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/aboutus" className="hover:underline">About Us</a></li>
            <li><a href="/ourskills" className="hover:underline">Skills</a></li>
            <li><a href="/auth/login" className="hover:underline">Login</a></li>
            <li><a href="/#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;