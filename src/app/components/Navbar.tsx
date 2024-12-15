"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlinePeople } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Furniro logo"
            width={160}
            height={40}
            className="h-10 w-auto mr-3"
          />
          <span className="text-black font-bold text-2xl">Furniro</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          className="md:hidden text-2xl text-gray-600"
        >
          {isMenuOpen ? (
            <span aria-hidden="true">✖</span>
          ) : (
            <span aria-hidden="true">☰</span>
          )}
        </button>

        {/* Desktop Menu - Always visible */}
        <ul className="hidden md:flex text-xl items-center space-x-8">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <MdOutlinePeople className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
          <IoIosSearch className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
          <CiHeart className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
          <HiOutlineShoppingCart className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Mobile Menu - Only visible on small screens and when toggled */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-4`}>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block text-xl text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="block text-xl text-gray-700 hover:text-blue-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block text-xl text-gray-700 hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="block text-xl text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
