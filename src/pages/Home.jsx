import React, { useState, useEffect } from 'react';
import { MdOutlineInventory2 } from "react-icons/md";

import {
  FaChartLine,
  FaPiggyBank,
  FaShieldAlt,
  FaHandsHelping,
  FaUniversity,
  FaStar,
  FaHome,
  FaCar,
  FaGraduationCap,
  FaBriefcase,
  FaHeartbeat,
  FaTree,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaQuoteRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaRocket,
  FaGem,
  FaCrown,
  FaUsers,
  FaAward,
  FaUserTie,
  FaRegSmile,
  FaRegHandshake,
  FaMobile,
  FaLaptop,
  FaGlobe,
  FaBell,
  FaLock,
  FaCreditCard
} from 'react-icons/fa';
import {
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineCash,
  HiOutlineCalculator
} from 'react-icons/hi';
import { MdOutlineSecurity, MdOutlineSupportAgent, MdOutlineVerified } from 'react-icons/md';
import { GiTakeMyMoney, GiPayMoney, GiReceiveMoney, GiInvestment, GiGrowth } from 'react-icons/gi';
import { AiFillSafetyCertificate, AiOutlineStock } from 'react-icons/ai';
import Wraper from '../components/Architure/Wraper';
import Scroll from '../components/Common/Scroll'

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Services data
  const services = [
    {
      icon: MdOutlineInventory2,
      title: 'Investment Advisory',
      description: 'Professional investment guidance to grow your wealth with personalized strategies.',
      color: 'from-blue-500 to-blue-600',
      features: ['Portfolio Management', 'Risk Assessment', 'Market Analysis']
    },
    {
      icon: FaPiggyBank,
      title: 'Retirement Planning',
      description: 'Secure your future with comprehensive retirement planning and wealth management.',
      color: 'from-blue-600 to-blue-700',
      features: ['401(k) Planning', 'IRA Strategies', 'Income Projections']
    },
    {
      icon: FaShieldAlt,
      title: 'Insurance Solutions',
      description: 'Protect what matters most with customized insurance coverage for life and health.',
      color: 'from-blue-500 to-blue-600',
      features: ['Life Insurance', 'Health Coverage', 'Disability Insurance']
    },
    {
      icon: FaHome,
      title: 'Home Loans',
      description: 'Find the perfect mortgage solution for your dream home with competitive rates.',
      color: 'from-blue-600 to-blue-700',
      features: ['First-Time Buyer', 'Refinancing', 'FHA/VA Loans']
    },
    {
      icon: FaBriefcase,
      title: 'Business Banking',
      description: 'Comprehensive banking solutions to help your business grow and succeed.',
      color: 'from-blue-500 to-blue-600',
      features: ['Business Accounts', 'Merchant Services', 'Lines of Credit']
    },
    {
      icon: FaTree,
      title: 'Estate Planning',
      description: 'Preserve your legacy with professional estate planning and trust services.',
      color: 'from-blue-600 to-blue-700',
      features: ['Will Preparation', 'Trusts', 'Asset Protection']
    }
  ];

  // Stats data
  const stats = [
    { value: '25+', label: 'Years Experience', icon: FaAward },
    { value: '50K+', label: 'Happy Clients', icon: FaUsers },
    { value: '100+', label: 'Expert Advisors', icon: FaUserTie },
    { value: '$2B+', label: 'Assets Managed', icon: MdOutlineInventory2 }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'The team at FinancePro transformed my financial future. Their investment strategies helped me grow my retirement fund by 40% in just two years.',
      rating: 5,
      image: 'SJ',
      location: 'New York, NY'
    },
    {
      name: 'Michael Chen',
      role: 'Tech Executive',
      content: 'Outstanding service! They helped me navigate complex tax situations and saved me thousands. Highly professional and knowledgeable.',
      rating: 5,
      image: 'MC',
      location: 'San Francisco, CA'
    },
    {
      name: 'Emily Williams',
      role: 'Retired Teacher',
      content: 'Thanks to their retirement planning, I can enjoy my golden years without financial stress. They truly care about their clients.',
      rating: 5,
      image: 'EW',
      location: 'Chicago, IL'
    }
  ];

  // Partners/Trust badges
  const partners = [
    { name: 'FDIC Insured', icon: FaShieldAlt },
    { name: 'SEC Registered', icon: FaCheckCircle },
    { name: 'BBB Accredited', icon: AiFillSafetyCertificate },
    { name: 'Better Business', icon: FaAward }
  ];

  // Latest insights/blog posts
  const insights = [
    {
      title: '2024 Market Outlook',
      category: 'Market Analysis',
      date: 'Jan 15, 2024',
      image: '📈',
      excerpt: 'Expert predictions and strategies for the coming year.',
      author: 'Dr. Robert Chen'
    },
    {
      title: 'Retirement Planning Guide',
      category: 'Retirement',
      date: 'Jan 12, 2024',
      image: '📊',
      excerpt: 'Essential steps to secure your financial future.',
      author: 'Sarah Thompson'
    },
    {
      title: 'Tax-Saving Strategies',
      category: 'Tax Planning',
      date: 'Jan 10, 2024',
      image: '💰',
      excerpt: 'Smart ways to minimize your tax liability.',
      author: 'Michael Roberts'
    }
  ];

  return (
    <Wraper>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section id="home" className="relative flex items-center pt-10">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
                  <HiOutlineSparkles className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">Trusted by 50,000+ Clients</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Your Financial Future,
                  <span className="text-blue-600"> Our Expertise</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Professional financial guidance tailored to your unique goals. From investments to retirement, we're here to help you succeed.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                    <span>Start Free Consultation</span>
                    <FaArrowRight className="h-4 w-4" />
                  </button>
                  <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-2">
                    <FaPhone className="h-4 w-4" />
                    <span>Call Us Today</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <partner.icon className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-500 text-sm">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:border-blue-500 transition-all transform hover:scale-105"
                  >
                    <stat.icon className="h-8 w-8 text-blue-600 mb-4" />
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive financial solutions designed to help you achieve your goals at every stage of life.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:border-blue-500 transition-all transform hover:-translate-y-2"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <FaCheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center space-x-2">
                      <span>Learn More</span>
                      <FaArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Features */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose FinancePro?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We combine expertise, technology, and personalized service to deliver exceptional financial results.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <HiOutlineUserGroup className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                      <p className="text-gray-600">Certified advisors with decades of combined experience</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <HiOutlineSparkles className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Approach</h3>
                      <p className="text-gray-600">Tailored strategies that match your unique goals and risk tolerance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <HiOutlineTrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                      <p className="text-gray-600">Track record of helping clients achieve their financial objectives</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <HiOutlineShieldCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
                      <p className="text-gray-600">Bank-level security to protect your personal and financial information</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Stats/Progress */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Client Satisfaction</span>
                      <span className="text-gray-900 font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Investment Growth</span>
                      <span className="text-gray-900 font-semibold">15.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Goal Achievement</span>
                      <span className="text-gray-900 font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <p className="text-3xl font-bold text-blue-600 mb-1">$2B+</p>
                    <p className="text-gray-600 text-sm">Assets Managed</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <p className="text-3xl font-bold text-blue-600 mb-1">100+</p>
                    <p className="text-gray-600 text-sm">Expert Advisors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it - hear from some of our satisfied clients.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Testimonial Cards */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                            {testimonial.image}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <p className="text-gray-400 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                        <FaQuoteRight className="h-8 w-8 text-blue-200 mb-4" />
                        <p className="text-gray-700 text-lg mb-4">{testimonial.content}</p>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index
                      ? 'bg-blue-600 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest financial news and expert advice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div key={index} className="group bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-500 transition-all">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-6xl">
                    {insight.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {insight.category}
                      </span>
                      <span className="text-gray-400 text-xs">{insight.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{insight.excerpt}</p>
                    <p className="text-gray-400 text-sm">By {insight.author}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-all">
                View All Articles
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Take Control of Your Financial Future?</h2>
                <p className="text-xl text-white/90 mb-8">
                  Schedule a free consultation with one of our expert advisors today and get a personalized financial plan.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                    Book Free Consultation
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                    Learn More
                  </button>
                </div>
                <p className="text-white/80 text-sm mt-6">
                  No obligations. No credit card required. 100% free consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Scroll />
      </div>
    </Wraper>
  );
};

export default HomePage;