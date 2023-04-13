import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-bold mb-4">Company Name</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className="list-unstyled">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#">Product 1</a>
            </li>
            <li>
              <a href="#">Product 2</a>
            </li>
            <li>
              <a href="#">Product 3</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-bold mb-4">Connect with Us</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-bold mb-4">Stay in Touch</h2>
          <form className="mb-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-l-lg p-4 w-full border-t border-b border-l text-gray-800 border-gray-200 bg-white"
              />
              <button
                type="submit"
                className="px-8 rounded-r-lg bg-green-500 text-white font-bold p-4 uppercase border-green-600 border-t border-b border-r"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
