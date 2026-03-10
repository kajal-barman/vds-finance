import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white sticky top-0 h-20 z-50 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo/Brand */}
          <Link to="/" className="text-black text-3xl font-bold flex items-center">
            VDS<span className="text-blue-800 ml-1">Finance</span>
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main Navigation Links */}
            <Link
              to="/"
              className="text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]"
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className="text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]"
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]"
            >
              Services
            </Link>

            {/* Financial Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] flex items-center"
              >
                Financial Tools <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                  <li>
                    <Link
                      to="/credit-card"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 hover:pl-6"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Credit Card
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/emi-calculator"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 hover:pl-6"
                      onClick={() => setDropdownOpen(false)}
                    >
                      EMI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/loan"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 hover:pl-6"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Loans
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Attractive Contact Button */}
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 flex items-center gap-2 border border-blue-400/20"
            >
              <i className="fas fa-headset"></i>
              <span>Contact Us</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-blue-800 focus:outline-none p-2"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl rounded-b-2xl border-t border-gray-100 animate-slideDown">
              <ul className="flex flex-col p-4 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-black hover:text-blue-800 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-blue-50 block"
                    onClick={toggleMenu}
                  >
                    <i className="fas fa-home mr-3 text-blue-600"></i>
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about-us"
                    className="text-black hover:text-blue-800 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-blue-50 block"
                    onClick={toggleMenu}
                  >
                    <i className="fas fa-info-circle mr-3 text-blue-600"></i>
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="text-black hover:text-blue-800 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-blue-50 block"
                    onClick={toggleMenu}
                  >
                    <i className="fas fa-cogs mr-3 text-blue-600"></i>
                    Services
                  </Link>
                </li>

                {/* Mobile Dropdown */}
                <li>
                  <button
                    onClick={toggleDropdown}
                    className="w-full text-black hover:text-blue-800 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-blue-50 flex items-center justify-between"
                  >
                    <span>
                      <i className="fas fa-tools mr-3 text-blue-600"></i>
                      Financial Tools
                    </span>
                    <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>

                  {/* Mobile Dropdown Menu */}
                  {dropdownOpen && (
                    <ul className="ml-12 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                      <li>
                        <Link
                          to="/credit-card"
                          className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300 hover:translate-x-1"
                          onClick={toggleMenu}
                        >
                          <i className="fas fa-credit-card mr-2 text-blue-500 text-sm"></i>
                          Credit Card
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/emi-calculator"
                          className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300 hover:translate-x-1"
                          onClick={toggleMenu}
                        >
                          <i className="fas fa-calculator mr-2 text-blue-500 text-sm"></i>
                          EMI Calculator
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/loan"
                          className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300 hover:translate-x-1"
                          onClick={toggleMenu}
                        >
                          <i className="fas fa-hand-holding-usd mr-2 text-blue-500 text-sm"></i>
                          Loans
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Mobile Contact Button - Attractive */}
                <li className="pt-4 mt-2 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3"
                    onClick={toggleMenu}
                  >
                    <i className="fas fa-headset text-lg"></i>
                    <span>Contact Us</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;