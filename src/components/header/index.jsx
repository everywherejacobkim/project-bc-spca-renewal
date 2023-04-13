import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="bg-gray-900 text-white">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        <Link href="/" className="text-3xl font-bold">
          <div>BCSPCA</div>
        </Link>
        <button className="block md:hidden" onClick={toggleMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isExpanded ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.293 4.293a1 1 0 0 1 1.414 1.414L13.414 12l8.293 8.293a1 1 0 1 1-1.414 1.414L12 13.414l-8.293 8.293a1 1 0 1 1-1.414-1.414L10.586 12 2.293 3.707a1 1 0 0 1 1.414-1.414L12 10.586l8.293-8.293z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0V6zm6 8a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v8zm8-8a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6z"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${
            isExpanded ? "block" : "hidden"
          } md:flex md:items-center md:justify-end md:flex-1`}
        >
          <li>
            <Link href="/" className="px-2 py-1 block hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="px-2 py-1 block hover:text-gray-500">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="px-2 py-1 block hover:text-gray-500"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-2 py-1 block hover:text-gray-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
