import React from "react";
import Image from "next/image";
import LogoWhite from "../../../public/assets/logo/logo-bcspca-white.svg";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-4 sm:px-16 py-8 md:pt-16 md:pb-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center mb-8 md:px-16 lg:px-2">
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <Image src={LogoWhite} alt="Logo" />
          <p className="my-3 text-xs pr-6">
            Our mission is to protect and enhance the quality of life for
            domestic, farm and wild animals in BC. BC SPCA is a registered
            charity, tax # BN 11881 9036 RR0001
          </p>
          <div className="flex gap-1">
            <FaYoutubeSquare className="text-2xl" />
            <FaInstagramSquare className="text-2xl" />
            <FaTwitterSquare className="text-2xl" />
            <FaFacebookSquare className="text-2xl" />
            <FaPinterestSquare className="text-2xl" />
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">BC SPCA</h2>
          <ul className="list-unstyled">
            <li>
              <a href="404">About us</a>
            </li>
            <li>
              <a href="404">Careers</a>
            </li>
            <li>
              <a href="404">Contact</a>
            </li>
            <li>
              <a href="404">Locations</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Find a friend</h2>
          <ul className="list-unstyled">
            <li>
              <a href="search-map">How to adopt?</a>
            </li>
            <li>
              <a href="search-map">Dogs</a>
            </li>
            <li>
              <a href="search-map">Cats</a>
            </li>
            <li>
              <a href="search-map">Other pets</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <h2 className="text-xl font-bold mb-4">Stay in Touch</h2>
          <ul className="list-unstyled">
            <li>
              <a href="search-map">Volunteer</a>
            </li>
            <li>
              <a href="search-map">Foster</a>
            </li>
            <li>
              <a href="donation">Donate</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center md:w-4/5 md:px-2 md:mx-auto lg:w-2/3 lg:px-6">
        <div className="px-4 mb-4">
          <hr className="border-white" />
        </div>
        <div className="flex justify-start px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} The British Columbia Society for
            the Prevention of Cruelty to Animals (BC SPCA).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
