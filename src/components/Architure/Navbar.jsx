import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaCreditCard,
  FaCalculator,
  FaHandHoldingUsd,
  FaHeadset,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import Logo from '../../Asset/vds_logo.png';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isDrawerOpen]);

  const toggleSubmenu = (menuId) => {
    setActiveSubmenu(activeSubmenu === menuId ? null : menuId);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setActiveSubmenu(null);
  };

  const menuItems = [
    { id: 'home', title: 'Home', icon: <FaHome />, path: '/' },
    { id: 'about', title: 'About Us', icon: <FaInfoCircle />, path: '/about-us' },
    { id: 'services', title: 'Services', icon: <FaCogs />, path: '/services' },
    {
      id: 'financial',
      title: 'Financial Tools',
      icon: <FaCalculator />,
      submenu: [
        { title: 'Credit Card', icon: <FaCreditCard />, path: '/credit-card' },
        { title: 'EMI Calculator', icon: <FaCalculator />, path: '/emi-calculator' },
        { title: 'Loans', icon: <FaHandHoldingUsd />, path: '/loan' },
      ]
    },
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: '+1 234 567 890', link: 'tel:+1234567890' },
    { icon: <FaEnvelope />, text: 'info@vdsfinance.com', link: 'mailto:info@vdsfinance.com' },
    { icon: <FaMapMarkerAlt />, text: 'New York, NY 10001', link: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: '#', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, link: '#', color: 'hover:bg-blue-400' },
    { icon: <FaInstagram />, link: '#', color: 'hover:bg-pink-600' },
    { icon: <FaYoutube />, link: '#', color: 'hover:bg-red-600' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-[99999] transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-16 w-auto" alt="VDS Finance" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link to="/" className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Home
              </Link>
              <Link to="/about-us" className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]">
                About Us
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Services
              </Link>
              <Link to="/foreclosure-calculator" className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Foreclosure Calculator
              </Link>


              {/* Desktop Dropdown */}
              <div className="relative z-[100000]">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] flex items-center"
                >
                  Financial Tools <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-[100000] border border-gray-100">
                    {menuItems.find(item => item.id === 'financial').submenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="mr-3 text-blue-600">{item.icon}</span>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="ml-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 flex items-center gap-2"
              >
                <FaHeadset />
                <span>Contact Us</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-800 focus:outline-none relative z-50"
              aria-label="Open menu"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 lg:hidden z-[60]"
              onClick={closeDrawer}
            />

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white lg:hidden z-[70] shadow-2xl overflow-y-auto"
              style={{
                boxShadow: '-10px 0 30px -15px rgba(0,0,0,0.3)'
              }}
            >
              {/* Drawer Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between z-10">
                <img src={Logo} className="h-12 w-auto" alt="VDS Finance" />
                <button
                  onClick={closeDrawer}
                  className="p-2 text-gray-700 hover:text-blue-800 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6">
                {/* Menu Items */}
                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-50 last:border-0">
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => toggleSubmenu(item.id)}
                            className="w-full flex items-center justify-between px-2 py-4 text-gray-700 hover:text-blue-800 transition-all duration-300 group"
                          >
                            <span className="flex items-center font-medium text-base">
                              <span className="mr-3 text-blue-600 group-hover:scale-110 transition-transform">
                                {item.icon}
                              </span>
                              {item.title}
                            </span>
                            <FaChevronDown
                              className={`text-gray-400 transition-all duration-300 ${activeSubmenu === item.id ? 'rotate-180 text-blue-600' : ''
                                }`}
                            />
                          </button>

                          <AnimatePresence>
                            {activeSubmenu === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-11 pl-4 pb-3 space-y-2 border-l-2 border-blue-200">
                                  {item.submenu.map((subItem, index) => (
                                    <Link
                                      key={index}
                                      to={subItem.path}
                                      className="flex items-center px-4 py-2.5 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 group"
                                      onClick={closeDrawer}
                                    >
                                      <span className="mr-3 text-blue-500 text-sm group-hover:scale-110 transition-transform">
                                        {subItem.icon}
                                      </span>
                                      <span className="text-sm">{subItem.title}</span>
                                      <FaChevronRight className="ml-auto text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className="flex items-center justify-between px-2 py-4 text-gray-700 hover:text-blue-800 transition-all duration-300 group"
                          onClick={closeDrawer}
                        >
                          <span className="flex items-center font-medium text-base">
                            <span className="mr-3 text-blue-600 group-hover:scale-110 transition-transform">
                              {item.icon}
                            </span>
                            {item.title}
                          </span>
                          <FaChevronRight className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Button */}
                <Link
                  to="/contact"
                  className="mt-8 block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] text-center group"
                  onClick={closeDrawer}
                >
                  <span className="flex items-center justify-center gap-3">
                    <FaHeadset className="group-hover:rotate-12 transition-transform" />
                    Contact Us
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>



                {/* Social Links */}
                {/*  */}

                {/* Footer Note */}
                <div className="mt-8 px-2 py-4 text-center">
                  <p className="text-xs text-gray-400">
                    © 2024 VDS Finance. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;