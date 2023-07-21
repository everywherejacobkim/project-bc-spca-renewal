import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import SearchBar from "../searchBar";
import logo from "../../../public/assets/logo/logo_bcspca.svg";
import Button from "../common/button";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-white p-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-3 py-3 md:pl-2">
        <Link href="/" className="text-3xl font-bold">
          <Image src={logo} alt="logo" width={140} />
        </Link>
        <div className="flex gap-5">
          <IoSearch className="block md:hidden h-6 w-6" />
          <button className="block md:hidden" onClick={toggleMenu}>
            {isExpanded ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`md:hidden fixed inset-0 ${
            isExpanded ? "flex" : "hidden"
          } items-center justify-center bg-white z-10`}
        >
          <button
            className="absolute top-12 right-8 md:hidden"
            onClick={toggleMenu}
          >
            <FaTimes className="h-6 w-6" />
          </button>
          <ul className="flex flex-col gap-4 font-medium text-center">
            <li>
              <Link
                href="/search-map"
                className="block text-xl px-2 py-1 text-primary font-bold"
                onClick={toggleMenu}
              >
                Adopt
              </Link>
            </li>
            <li>
              <Link
                href="/404"
                className="block text-xl px-2 py-1 hover:text-gray-500"
                onClick={toggleMenu}
              >
                Ways to help
              </Link>
            </li>
            <li>
              <Link
                href="/404"
                className="block text-xl px-2 py-1 hover:text-gray-500"
                onClick={toggleMenu}
              >
                Programs & Services
              </Link>
            </li>
            <li>
              <Link
                href="/404"
                className="block text-xl px-2 py-1 hover:text-gray-500"
                onClick={toggleMenu}
              >
                News & Events
              </Link>
            </li>
            <li>
              <Link
                href="/donation"
                className="block text-xl px-2 py-1 text-primary font-bold"
                onClick={toggleMenu}
              >
                Donation
              </Link>
            </li>
          </ul>
          <SearchBar width="w-36" />
        </div>
        <ul className="hidden md:flex md:items-center md:justify-end md:flex-1 md:gap-4 font-medium">
          <li>
            <Link href="/404" className="px-2 py-1 hover:text-gray-500">
              Adopt
            </Link>
          </li>
          <li>
            <Link href="/404" className="px-2 py-1 hover:text-gray-500">
              Ways to help
            </Link>
          </li>
          <li>
            <Link href="/404" className="px-2 py-1 hover:text-gray-500">
              Programs & Services
            </Link>
          </li>
          <li>
            <Link href="/404" className="px-2 py-1 hover:text-gray-500">
              News & Events
            </Link>
          </li>
        </ul>
        <div className="hidden md:block">
          <Link href="/donation">
            <Button label="Donate" className="ml-8" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
