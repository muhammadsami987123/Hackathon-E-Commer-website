import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Logo" className="h-10 w-auto mr-3" />
            <span className="text-black font-bold text-2xl">Furniro</span>
          </Link>

          {/* Centered Navigation Links */}
          <ul className="flex text-xl items-center space-x-8">
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
