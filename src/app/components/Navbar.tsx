"use client"; // This is necessary when using hooks like useState and useEffect

import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react"; // Import useState from React

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state for menu toggle
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Function to toggle the menu state

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Logo" className="h-10 w-auto mr-3" />
            <span className="text-black font-bold text-2xl">Furniro</span>
          </Link>

          {/* Centered Navigation Links */}
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
          
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          {/* Mobile Navigation Links */}
          {isMenuOpen && (
            <ul className="flex flex-col text-xl items-center px-9 py-4 space-y-4 md:hidden">
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
          )}

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <MdOutlinePeople className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
            <IoIosSearch className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
            <CiHeart className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
            <HiOutlineShoppingCart className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
