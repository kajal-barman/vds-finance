import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
  FaRocket,
  FaShieldAlt,
  FaLock,
  FaHeart,
  FaArrowRight,
  FaMobileAlt,
  FaLaptop,
  FaPaperPlane
} from 'react-icons/fa';
import {
  MdVerified,
  MdSecurity,
  MdSupportAgent
} from 'react-icons/md';
import {
  BsBank2,
  BsCreditCard2Front,
  BsGraphUpArrow,
  BsShieldCheck
} from 'react-icons/bs';
import {
  IoMdGlobe
} from 'react-icons/io';
import {
  RiGovernmentLine,
  RiCustomerService2Line
} from 'react-icons/ri';
import {
  GiTakeMyMoney,
  GiPayMoney,
  GiMoneyStack
} from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Company links
  const companyLinks = [
    { name: 'About Us', path: '/about-us', icon: <RiGovernmentLine className="mr-2" /> },
    { name: 'Careers', path: '/careers', icon: <GiTakeMyMoney className="mr-2" /> },
    { name: 'Press', path: '/press', icon: <IoMdGlobe className="mr-2" /> },
    { name: 'Blog', path: '/blog', icon: <FaLaptop className="mr-2" /> },
    { name: 'Affiliates', path: '/affiliates', icon: <GiPayMoney className="mr-2" /> }
  ];

  // Products links
  const productLinks = [
    { name: 'Personal Loans', path: '/loan', icon: <GiMoneyStack className="mr-2" /> },
    { name: 'Credit Cards', path: '/credit-card', icon: <BsCreditCard2Front className="mr-2" /> },
    { name: 'Credit Score', path: '/credit-score', icon: <BsGraphUpArrow className="mr-2" /> },
    { name: 'EMI Calculator', path: '/emi-calculator', icon: <FaRocket className="mr-2" /> },
    { name: 'Investments', path: '/investments', icon: <BsBank2 className="mr-2" /> }
  ];

  // Resources links
  const resourceLinks = [
    { name: 'Help Center', path: '/help', icon: <MdSupportAgent className="mr-2" /> },
    { name: 'FAQs', path: '/faqs', icon: <RiCustomerService2Line className="mr-2" /> },
    { name: 'Privacy Policy', path: '/privacy-policy', icon: <MdSecurity className="mr-2" /> },
    { name: 'Terms of Use', path: '/terms', icon: <FaLock className="mr-2" /> },
    { name: 'Security', path: '/security', icon: <BsShieldCheck className="mr-2" /> }
  ];

  // Social media links (only WhatsApp, Facebook, Instagram, Twitter)
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', color: 'hover:bg-blue-600', label: 'Facebook', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { icon: <FaTwitter />, url: 'https://twitter.com', color: 'hover:bg-blue-400', label: 'Twitter', bgColor: 'bg-blue-100', textColor: 'text-blue-400' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/solutionvdsfinance?igsh=MWsyMzhqcGh1Z2EwbQ==', color: 'hover:bg-pink-600', label: 'Instagram', bgColor: 'bg-pink-100', textColor: 'text-pink-600' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/919756081630?text=Hello%2C%20I%20want%20to%20talk', color: 'hover:bg-green-500', label: 'WhatsApp', bgColor: 'bg-green-100', textColor: 'text-green-500' }
  ];



  // Contact info
  const contactInfo = [
    { icon: <FaPhone />, text: '01204981142', subtext: '24/7 Customer Support' },
    { icon: <FaEnvelope />, text: 'support@vdsfinancesolution.com', subtext: 'We reply within 24hrs' },
    { icon: <FaMapMarkerAlt />, text: 'D Block, D-36, Noida, Sector-2, UP(GB.N), 201301', subtext: 'Noida, INDIA' },
    { icon: <FaClock />, text: 'Mon - Sat: 9:00 AM - 7:00 PM', subtext: 'Saturday: 10:00 AM - 4:00 PM' }
  ];

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 pb-12 border-b border-gray-200">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className=" flex-text-center space-x-2">

              <span className="text-3xl font-bold text-gray-800">
                VDS<span className="text-blue-600">Finance</span>
              </span>
            </div>
            <p className="text-gray-600 text-lg max-w-md">
              Revolutionizing personal finance with smart technology and expert guidance. Join millions of satisfied customers on their financial journey.
            </p>

            {/* Trust Badges
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <MdVerified className="text-blue-600" />
                <span className="text-sm text-gray-700">RBI Registered</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <FaShieldAlt className="text-blue-600" />
                <span className="text-sm text-gray-700">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <FaLock className="text-blue-600" />
                <span className="text-sm text-gray-700">256-bit Security</span>
              </div>
            </div> */}
          </div>

          {/* Newsletter Section */}

        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center text-gray-800">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    <span className="flex items-center">
                      {link.icon}
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center text-gray-800">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Products
            </h4>
            <ul className="space-y-4">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    <span className="flex items-center">
                      {link.icon}
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center text-gray-800">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Resources
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    <span className="flex items-center">
                      {link.icon}
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center text-gray-800">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
              Contact Us
            </h4>
            <ul className="space-y-6">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">{info.text}</p>
                    <p className="text-gray-500 text-xs">{info.subtext}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Social Media & Payment Methods */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Social Media Icons - Only WhatsApp, Facebook, Instagram, Twitter */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 ${social.bgColor} ${social.textColor} rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>


          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-600 text-sm text-center lg:text-left">
              © {currentYear} VDS Finance . All rights reserved. |
              <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 ml-1">Privacy</Link> |
              <Link to="/terms" className="text-blue-600 hover:text-blue-700 ml-1">Terms</Link> |
              <Link to="/sitemap" className="text-blue-600 hover:text-blue-700 ml-1">Sitemap</Link>
            </p>

            {/* Made with love */}
            <p className="text-gray-600 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by VDS Finance Team
            </p>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <IoMdGlobe className="text-gray-500" />
              <select className="bg-white text-gray-700 text-sm rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English (US)</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Back to top"
      >
        <FaArrowRight className="transform -rotate-90" />
      </button>
    </footer>
  );
};

export default Footer;