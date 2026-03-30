import React, { useState } from 'react';
import { MdOutlineInventory2 } from "react-icons/md";
import Wraper from "../components/Architure/Wraper"

import {
  FaChartLine,
  FaPiggyBank,
  FaShieldAlt,
  FaHandsHelping,
  FaUniversity,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaLandmark,
  FaHome,
  FaCar,
  FaGraduationCap,
  FaBriefcase,
  FaHeartbeat,
  FaPlane,
  FaTree,
  FaGift,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaVideo,
  FaUserTie,
  FaCalculator,
  FaFileAlt,
  FaDownload,
  FaShare,
  FaStar,
  FaAward,
  FaUsers,
  FaRocket,
  FaCrown,
  FaGem,
  FaDollarSign,
  FaPercent,
  FaRegCalendarCheck,
  FaRegClock,
  FaRegBuilding,
  FaRegSmile,
  FaRegHandshake,
  FaRegChartBar
} from 'react-icons/fa';
import {
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineChip,
  HiOutlineGlobeAlt
} from 'react-icons/hi';


const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: FaRocket },
    { id: 'investment', name: 'Investment', icon: MdOutlineInventory2 },
    { id: 'banking', name: 'Banking', icon: FaUniversity },
    { id: 'insurance', name: 'Insurance', icon: FaShieldAlt },
    { id: 'loan', name: 'Loans', icon: FaHome },
    { id: 'tax', name: 'Tax & Accounting', icon: FaFileInvoiceDollar },
    { id: 'retirement', name: 'Retirement', icon: FaTree },
    { id: 'estate', name: 'Estate Planning', icon: FaBalanceScale }
  ];

  // Services data
  const services = [
    {
      id: 1,
      name: 'Investment Advisory',
      category: 'investment',
      icon: MdOutlineInventory2,
      color: 'from-blue-500 to-blue-600',
      rating: 4.9,
      reviews: 1245,
      price: '$299',
      duration: '60 min',
      description: 'Professional investment guidance tailored to your financial goals.',
      longDescription: 'Get personalized investment advice from certified financial advisors. We help you build a diversified portfolio that aligns with your risk tolerance and financial objectives.',
      features: [
        'Personalized portfolio management',
        'Risk assessment and analysis',
        'Regular portfolio reviews',
        'Market insights and updates',
        'Tax-efficient investing strategies',
        'Retirement planning integration'
      ],
      benefits: [
        'Maximize returns on investments',
        'Minimize tax liability',
        'Diversified portfolio',
        'Professional market analysis'
      ],
      advisors: [
        { name: 'Sarah Johnson', title: 'Senior Investment Advisor', exp: '15 years', rating: 4.9, image: 'SJ' },
        { name: 'Michael Chen', title: 'Portfolio Manager', exp: '12 years', rating: 4.8, image: 'MC' },
        { name: 'Emily Williams', title: 'Investment Analyst', exp: '8 years', rating: 4.7, image: 'EW' }
      ],
      faqs: [
        { q: 'What is the minimum investment required?', a: 'We work with clients at all investment levels, starting from $10,000.' },
        { q: 'How often will my portfolio be reviewed?', a: 'Portfolios are reviewed quarterly, with additional reviews available upon request.' }
      ]
    },
    {
      id: 2,
      name: 'Retirement Planning',
      category: 'retirement',
      icon: FaTree,
      color: 'from-blue-500 to-blue-600',
      rating: 4.8,
      reviews: 987,
      price: '$349',
      duration: '75 min',
      description: 'Comprehensive retirement planning to secure your golden years.',
      longDescription: 'Plan your retirement with confidence. Our advisors help you determine how much you need to save, choose the right retirement accounts, and create a sustainable withdrawal strategy.',
      features: [
        'Retirement income modeling',
        'Social Security optimization',
        '401(k) and IRA analysis',
        'Required minimum distribution planning',
        'Healthcare cost planning',
        'Estate planning integration'
      ],
      benefits: [
        'Peace of mind for retirement',
        'Tax-efficient withdrawal strategies',
        'Sustainable income stream',
        'Legacy planning'
      ],
      advisors: [
        { name: 'David Thompson', title: 'Retirement Specialist', exp: '20 years', rating: 4.9, image: 'DT' },
        { name: 'Lisa Garcia', title: 'Senior Planner', exp: '14 years', rating: 4.8, image: 'LG' }
      ],
      faqs: [
        { q: 'At what age should I start retirement planning?', a: 'Its never too early. We recommend starting in your 20s or 30s for maximum benefit.' },
        { q: 'How much do I need to retire?', a: 'This varies based on lifestyle, but we typically recommend 70-80% of pre-retirement income.' }
      ]
    },
    {
      id: 3,
      name: 'Tax Planning & Preparation',
      category: 'tax',
      icon: FaFileInvoiceDollar,
      color: 'from-blue-500 to-blue-600',
      rating: 4.9,
      reviews: 2156,
      price: '$399',
      duration: '90 min',
      description: 'Strategic tax planning to minimize your liability and maximize refunds.',
      longDescription: 'Navigate the complex world of taxes with our expert CPAs. We provide year-round tax planning and preparation services for individuals and businesses.',
      features: [
        'Tax return preparation',
        'Tax planning strategies',
        'IRS audit representation',
        'Business tax consulting',
        'International tax services',
        'Estate and gift tax planning'
      ],
      benefits: [
        'Maximize tax refunds',
        'Minimize audit risk',
        'Strategic tax planning',
        'Year-round support'
      ],
      advisors: [
        { name: 'Robert Martinez', title: 'CPA, Tax Director', exp: '18 years', rating: 4.9, image: 'RM' },
        { name: 'Jennifer Lee', title: 'Senior Tax Manager', exp: '12 years', rating: 4.8, image: 'JL' }
      ],
      faqs: [
        { q: 'When should I start tax planning?', a: 'Tax planning is most effective when done year-round, not just at tax time.' },
        { q: 'Do you handle business taxes?', a: 'Yes, we provide comprehensive tax services for businesses of all sizes.' }
      ]
    },
    {
      id: 4,
      name: 'Home Loans & Mortgages',
      category: 'loan',
      icon: FaHome,
      color: 'from-blue-500 to-blue-600',
      rating: 4.7,
      reviews: 1678,
      price: 'Free',
      duration: '45 min',
      description: 'Expert guidance on home loans, mortgages, and refinancing options.',
      longDescription: 'Find the best mortgage solution for your dream home. We compare rates from multiple lenders and guide you through the entire home buying process.',
      features: [
        'Mortgage rate comparison',
        'Pre-qualification assistance',
        'First-time home buyer programs',
        'Refinancing options',
        'FHA, VA, and conventional loans',
        'Down payment assistance'
      ],
      benefits: [
        'Best interest rates',
        'Streamlined approval process',
        'Expert guidance',
        'Multiple lender options'
      ],
      advisors: [
        { name: 'Amanda Foster', title: 'Mortgage Specialist', exp: '10 years', rating: 4.7, image: 'AF' },
        { name: 'James Wilson', title: 'Loan Officer', exp: '8 years', rating: 4.6, image: 'JW' }
      ],
      faqs: [
        { q: 'What credit score do I need?', a: 'Most conventional loans require 620+, but we can help with options for lower scores.' },
        { q: 'How much down payment is required?', a: 'It varies from 3% to 20% depending on loan type. First-time buyer programs may offer 0% down.' }
      ]
    },
    {
      id: 5,
      name: 'Life Insurance',
      category: 'insurance',
      icon: FaHeartbeat,
      color: 'from-blue-500 to-blue-600',
      rating: 4.8,
      reviews: 876,
      price: 'Free',
      duration: '45 min',
      description: 'Protect your loved ones with the right life insurance coverage.',
      longDescription: 'Secure your family\'s financial future with comprehensive life insurance solutions. We help you choose between term, whole life, and universal life policies.',
      features: [
        'Term life insurance',
        'Whole life insurance',
        'Universal life insurance',
        'Final expense coverage',
        'Business succession planning',
        'Estate liquidity planning'
      ],
      benefits: [
        'Financial security for family',
        'Tax-free death benefit',
        'Cash value accumulation',
        'Peace of mind'
      ],
      advisors: [
        { name: 'Patricia Brown', title: 'Insurance Specialist', exp: '16 years', rating: 4.8, image: 'PB' },
        { name: 'Thomas Anderson', title: 'Senior Agent', exp: '12 years', rating: 4.7, image: 'TA' }
      ],
      faqs: [
        { q: 'How much life insurance do I need?', a: 'A common rule is 10-12 times your annual income, but we can calculate your exact needs.' },
        { q: 'What\'s the difference between term and whole life?', a: 'Term provides coverage for a specific period, while whole life offers lifetime coverage with cash value.' }
      ]
    },
    {
      id: 6,
      name: 'Wealth Management',
      category: 'investment',
      icon: FaCrown,
      color: 'from-blue-500 to-blue-600',
      rating: 5.0,
      reviews: 543,
      price: '$599',
      duration: '90 min',
      description: 'Comprehensive wealth management for high-net-worth individuals.',
      longDescription: 'Our premier wealth management service provides comprehensive financial planning and investment management for affluent individuals and families.',
      features: [
        'Comprehensive financial planning',
        'Alternative investments',
        'Estate planning',
        'Philanthropic planning',
        'Family office services',
        'Business succession planning'
      ],
      benefits: [
        'Holistic wealth management',
        'Preserve and grow wealth',
        'Legacy planning',
        'Tax optimization'
      ],
      advisors: [
        { name: 'William Chen', title: 'Wealth Manager', exp: '22 years', rating: 5.0, image: 'WC' },
        { name: 'Elizabeth Taylor', title: 'Senior Advisor', exp: '18 years', rating: 4.9, image: 'ET' }
      ],
      faqs: [
        { q: 'What assets under management are required?', a: 'We typically work with clients who have $1M+ in investable assets.' },
        { q: 'How are fees structured?', a: 'We use a fee-only model based on a percentage of assets under management.' }
      ]
    },
    {
      id: 7,
      name: 'Business Banking',
      category: 'banking',
      icon: FaBriefcase,
      color: 'from-blue-500 to-blue-600',
      rating: 4.7,
      reviews: 654,
      price: 'Free',
      duration: '30 min',
      description: 'Tailored banking solutions for businesses of all sizes.',
      longDescription: 'Streamline your business finances with our comprehensive banking services. From merchant services to cash management, we have you covered.',
      features: [
        'Business checking accounts',
        'Merchant services',
        'Cash management',
        'Business credit cards',
        'Lines of credit',
        'Payroll services'
      ],
      benefits: [
        'Simplified banking',
        'Competitive rates',
        '24/7 online access',
        'Dedicated support'
      ],
      advisors: [
        { name: 'Richard Miles', title: 'Business Banker', exp: '14 years', rating: 4.7, image: 'RM' },
        { name: 'Susan Clark', title: 'Commercial Specialist', exp: '11 years', rating: 4.6, image: 'SC' }
      ],
      faqs: [
        { q: 'What documents do I need to open a business account?', a: 'Typically need EIN, business license, formation documents, and identification.' },
        { q: 'Do you offer merchant services?', a: 'Yes, we provide comprehensive payment processing solutions.' }
      ]
    },
    {
      id: 8,
      name: 'Estate Planning',
      category: 'estate',
      icon: FaBalanceScale,
      color: 'from-blue-500 to-blue-600',
      rating: 4.9,
      reviews: 432,
      price: '$449',
      duration: '90 min',
      description: 'Protect your legacy with comprehensive estate planning.',
      longDescription: 'Ensure your assets are distributed according to your wishes with our estate planning services. We help you create wills, trusts, and powers of attorney.',
      features: [
        'Will preparation',
        'Trust establishment',
        'Power of attorney',
        'Healthcare directives',
        'Estate tax planning',
        'Asset protection'
      ],
      benefits: [
        'Asset protection',
        'Tax minimization',
        'Family harmony',
        'Legacy preservation'
      ],
      advisors: [
        { name: 'Margaret White', title: 'Estate Attorney', exp: '20 years', rating: 4.9, image: 'MW' },
        { name: 'Steven Harris', title: 'Trust Officer', exp: '15 years', rating: 4.8, image: 'SH' }
      ],
      faqs: [
        { q: 'Do I need a trust or just a will?', a: 'It depends on your assets and goals. Trusts offer more control and can help avoid probate.' },
        { q: 'How often should I update my estate plan?', a: 'Review every 3-5 years or after major life events like marriage, divorce, or inheritance.' }
      ]
    }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  const ServiceCard = ({ service }) => {
    const Icon = service.icon;
    return (
      <div
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-blue-500 transition-all cursor-pointer group"
        onClick={() => {
          setSelectedService(service);
          setShowBookingModal(true);
        }}
      >
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="h-8 w-8 text-white" />
        </div>

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
          <div className="flex items-center space-x-1">
            <FaStar className="h-4 w-4 text-yellow-400" />
            <span className="text-gray-700 text-sm">{service.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">{service.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-900 font-semibold">{service.price}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm flex items-center">
              <FaClock className="h-3 w-3 mr-1" />
              {service.duration}
            </span>
          </div>
          <span className="text-gray-500 text-sm">{service.reviews} reviews</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {service.advisors.slice(0, 3).map((advisor, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
              >
                {advisor.image}
              </div>
            ))}
          </div>
          <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm">
            <span>Learn More</span>
            <FaArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    );
  };

  const BookingModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
          {/* Modal Header */}
          <div className={`bg-gradient-to-r ${service.color} p-6 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              ✕
            </button>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl p-4">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{service.name}</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaStar className="h-4 w-4 text-yellow-400" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-white/80">({service.reviews} reviews)</span>
                  </div>
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">{service.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Booking Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex-1 text-center relative">
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${bookingStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                    {step}
                  </div>
                  <p className={`text-xs ${bookingStep >= step ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    {step === 1 && 'Select Date'}
                    {step === 2 && 'Choose Advisor'}
                    {step === 3 && 'Confirm'}
                  </p>
                </div>
              ))}
            </div>

            {/* Step 1: Date Selection */}
            {bookingStep === 1 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select a Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Time</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Advisor Selection */}
            {bookingStep === 2 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Advisor</h3>
                <div className="space-y-4">
                  {service.advisors.map((advisor, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 hover:border-blue-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                            {advisor.image}
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-semibold">{advisor.name}</h4>
                            <p className="text-gray-600 text-sm">{advisor.title}</p>
                            <p className="text-gray-500 text-xs">{advisor.exp} experience</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <FaStar className="h-3 w-3 text-yellow-400" />
                            <span className="text-gray-900 text-sm">{advisor.rating}</span>
                          </div>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {bookingStep === 3 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Your Booking</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Service</p>
                      <p className="text-gray-900 font-semibold">{service.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Date</p>
                      <p className="text-gray-900 font-semibold">March 15, 2024</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Time</p>
                      <p className="text-gray-900 font-semibold">10:00 AM</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Advisor</p>
                      <p className="text-gray-900 font-semibold">Sarah Johnson</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Additional Notes</label>
                    <textarea
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      rows="3"
                      placeholder="Any specific questions or requirements?"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => bookingStep > 1 && setBookingStep(bookingStep - 1)}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors ${bookingStep > 1
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                disabled={bookingStep === 1}
              >
                Previous
              </button>
              {bookingStep < 3 ? (
                <button
                  onClick={() => setBookingStep(bookingStep + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Next
                </button>
              ) : (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}


        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your needs. From investment advice to retirement planning, we're here to help you achieve your goals.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
              <FaUsers className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
              <FaAward className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">25+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
              <FaUserTie className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="text-gray-600 text-sm">Expert Advisors</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
              <FaGem className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">$2B+</p>
              <p className="text-gray-600 text-sm">Assets Managed</p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Why Choose Us Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Advisors</h3>
                <p className="text-gray-600">Certified professionals with years of industry experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineSparkles className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Solutions</h3>
                <p className="text-gray-600">Tailored strategies that match your unique goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineLightBulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Approach</h3>
                <p className="text-gray-600">Cutting-edge tools and strategies for optimal results</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Excellent service! The team was professional, knowledgeable, and helped me achieve my financial goals. Highly recommended!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">John Doe</p>
                      <p className="text-gray-500 text-sm">Home Loan Client</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with one of our expert advisors today and take the first step toward your financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </section>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 border border-gray-200">
              <FaPhone className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-gray-600 text-sm">Call Us</p>
                <p className="text-gray-900 font-semibold">01204981142</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 border border-gray-200">
              <FaEnvelope className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="text-gray-900 font-semibold">support@vdsfinancesolution.com</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 border border-gray-200">
              <FaVideo className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-gray-600 text-sm">Video Consultation</p>
                <p className="text-gray-900 font-semibold">Book Online</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 border border-gray-200">
              <FaRegBuilding className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-gray-600 text-sm">Visit Office</p>
                <p className="text-gray-900 font-semibold">123 Finance Ave</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingModal && (
          <BookingModal
            service={selectedService}
            onClose={() => {
              setShowBookingModal(false);
              setSelectedService(null);
              setBookingStep(1);
            }}
          />
        )}
      </div>
    </Wraper>
  );
};

export default ServicesPage;