import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="conatiner mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <h3 className="text-xl font-semibold">E-Shop</h3>
          <p className="mt-4">
            Your one step foot all your needs.Shop with use and experience the
            best online shopping experience.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4 mb-2">
            <a href="" className="text-lg hover:text-gray-400">
              <FaFacebook></FaFacebook>
            </a>
            <a href="" className="text-lg hover:text-gray-400">
              <FaTwitter></FaTwitter>
            </a>
            <a href="" className="text-lg hover:text-gray-400">
              <FaGithub></FaGithub>
            </a>
            <a href="" className="text-lg hover:text-gray-400">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
          <form className="flex justify-center items-center mt-6">
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded-l-lg bg-gray-700 border border-gray-500 " />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
