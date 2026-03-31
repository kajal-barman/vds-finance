import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { MdOutlineInventory2 } from "react-icons/md";
import Wraper from "../components/Architure/Wraper";

import {
  FaShieldAlt,
  FaUniversity,
  FaHome,
  FaCar,
  FaClock,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaVideo,
  FaUserTie,
  FaStar,
  FaAward,
  FaUsers,
  FaRocket,
  FaCrown,
  FaGem,
  FaDollarSign,
  FaPercent,
  FaRegBuilding,
  FaLandmark
} from 'react-icons/fa';
import {
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineShieldCheck
} from 'react-icons/hi';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Service categories (updated for loan & insurance focus)
  const categories = [
    { id: 'all', name: 'All Services', icon: FaRocket },
    { id: 'loan', name: 'Loans', icon: FaHome },
    { id: 'insurance', name: 'Insurance', icon: FaShieldAlt },
  ];

  // Services data (only requested services)
  const services = [
    {
      id: 1,
      name: 'Personal Loan',
      category: 'loan',
      icon: FaDollarSign,
      color: 'from-blue-500 to-blue-600',
      rating: 4.8,
      reviews: 1250,
      price: 'Starting at 10.5% APR',
      duration: '30 min',
      description: 'Quick and flexible personal loans for any legitimate need.',
      longDescription: 'Get funds for any personal expense with competitive interest rates and flexible repayment terms. Our personal loans are designed to help you achieve your goals without financial stress.',
      features: [
        'Loan amounts from ₹50,000 to ₹50,00,000',
        'Flexible repayment tenure up to 60 months',
        'Minimal documentation required',
        'Quick approval within 48 hours',
        'No collateral required',
        'Competitive interest rates'
      ],
      benefits: [
        'Instant access to funds',
        'No hidden charges',
        'Prepayment flexibility',
        '100% digital process'
      ],
      advisors: [
        { name: 'Rahul Mehta', title: 'Loan Specialist', exp: '10 years', rating: 4.9, image: 'RM' },
        { name: 'Priya Sharma', title: 'Senior Credit Officer', exp: '8 years', rating: 4.8, image: 'PS' },
      ],
      faqs: [
        { q: 'What is the minimum credit score required?', a: 'A credit score of 700+ is preferred, but we also consider other factors.' },
        { q: 'How long does approval take?', a: 'Approval typically takes 24-48 hours after document submission.' }
      ]
    },
    {
      id: 2,
      name: 'Over Draft Facility',
      category: 'loan',
      icon: FaPercent,
      color: 'from-blue-500 to-blue-600',
      rating: 4.7,
      reviews: 890,
      price: 'Interest only on used amount',
      duration: '30 min',
      description: 'Overdraft facility against savings or fixed deposits.',
      longDescription: 'Access additional funds whenever you need them with our overdraft facility. Withdraw more than your account balance up to an approved limit, and pay interest only on the amount used.',
      features: [
        'Overdraft up to ₹20,00,000',
        'Interest charged only on utilized amount',
        'No prepayment penalties',
        'Flexible repayment',
        'Available against FD, property, or salary',
        'Lifetime approval with annual renewal'
      ],
      benefits: [
        'Pay interest only on used amount',
        'Emergency fund access',
        'No fixed EMI burden',
        'Improve cash flow management'
      ],
      advisors: [
        { name: 'Ankit Desai', title: 'Banking Specialist', exp: '12 years', rating: 4.7, image: 'AD' },
        { name: 'Neha Gupta', title: 'Relationship Manager', exp: '7 years', rating: 4.6, image: 'NG' }
      ],
      faqs: [
        { q: 'What assets can I pledge for overdraft?', a: 'Fixed deposits, property, or your salary account can be used.' },
        { q: 'Is there a minimum balance requirement?', a: 'No minimum balance required, but the overdraft limit is based on your relationship with the bank.' }
      ]
    },
    {
      id: 3,
      name: 'Home Loan',
      category: 'loan',
      icon: FaHome,
      color: 'from-blue-500 to-blue-600',
      rating: 4.9,
      reviews: 2150,
      price: 'Starting at 8.5% APR',
      duration: '45 min',
      description: 'Dream home financing with attractive interest rates.',
      longDescription: 'Make your dream home a reality with our affordable home loan solutions. We offer competitive rates, flexible tenures, and expert guidance throughout the home buying process.',
      features: [
        'Loan up to 90% of property value',
        'Tenure up to 30 years',
        'Balance transfer facility',
        'Top-up loan option',
        'Subvention schemes available',
        'Quick processing and disbursal'
      ],
      benefits: [
        'Tax benefits under Section 24 & 80C',
        'Lowest interest rates',
        'Minimal processing fees',
        'Doorstep document pickup'
      ],
      advisors: [
        { name: 'Vikram Singh', title: 'Home Loan Expert', exp: '15 years', rating: 4.9, image: 'VS' },
        { name: 'Kavita Reddy', title: 'Mortgage Advisor', exp: '10 years', rating: 4.8, image: 'KR' }
      ],
      faqs: [
        { q: 'What is the maximum loan amount I can get?', a: 'Typically up to ₹5 crore depending on income and property value.' },
        { q: 'How much down payment is required?', a: 'Usually 10-20% of the property value as down payment.' }
      ]
    },
    {
      id: 4,
      name: 'Property Loan',
      category: 'loan',
      icon: FaLandmark,
      color: 'from-blue-500 to-blue-600',
      rating: 4.8,
      reviews: 1675,
      price: 'Starting at 9.5% APR',
      duration: '45 min',
      description: 'Loan against residential or commercial property.',
      longDescription: 'Unlock the value of your property with our property loan (Loan Against Property). Get high-value loans at attractive interest rates for business or personal needs.',
      features: [
        'Loan up to 70% of property value',
        'High loan amount up to ₹10 crore',
        'Flexible tenure up to 15 years',
        'Low processing fees',
        'Both residential & commercial property accepted',
        'Quick disbursal within 7 days'
      ],
      benefits: [
        'Lower interest rates than personal loans',
        'Long repayment tenure',
        'No restriction on end use',
        'Continue using the property'
      ],
      advisors: [
        { name: 'Sanjay Verma', title: 'Property Finance Expert', exp: '18 years', rating: 4.8, image: 'SV' },
        { name: 'Pooja Nair', title: 'Legal & Valuation Head', exp: '12 years', rating: 4.7, image: 'PN' }
      ],
      faqs: [
        { q: 'What types of properties are accepted?', a: 'Residential apartments, houses, and commercial properties are accepted.' },
        { q: 'Do I need to transfer property ownership?', a: 'No, you retain ownership; only a lien is created on the property.' }
      ]
    },
    {
      id: 5,
      name: 'Credit Card',
      category: 'loan',
      icon: FaCrown,
      color: 'from-blue-500 to-blue-600',
      rating: 4.7,
      reviews: 3450,
      price: 'Annual fee from ₹0',
      duration: '20 min',
      description: 'Premium credit cards with exclusive benefits and rewards.',
      longDescription: 'Choose from a range of credit cards tailored to your lifestyle. Enjoy rewards, cashback, travel benefits, and exclusive privileges with our premium credit card offerings.',
      features: [
        'Credit limit up to ₹20,00,000',
        'Reward points on every transaction',
        'Complimentary lounge access',
        'Fuel surcharge waiver',
        'Interest-free credit up to 50 days',
        'Contactless payment'
      ],
      benefits: [
        'Build credit history',
        'Emergency fund access',
        'Exclusive discounts and offers',
        'Worldwide acceptance'
      ],
      advisors: [
        { name: 'Amit Khanna', title: 'Credit Card Specialist', exp: '8 years', rating: 4.7, image: 'AK' },
        { name: 'Shreya Joshi', title: 'Product Manager', exp: '6 years', rating: 4.6, image: 'SJ' }
      ],
      faqs: [
        { q: 'What documents are needed?', a: 'ID proof, address proof, income proof, and recent photographs.' },
        { q: 'How is the credit limit decided?', a: 'Based on your income, credit score, and existing liabilities.' }
      ]
    },
    {
      id: 6,
      name: 'Car Loan',
      category: 'loan',
      icon: FaCar,
      color: 'from-blue-500 to-blue-600',
      rating: 4.8,
      reviews: 1890,
      price: 'Starting at 8.7% APR',
      duration: '30 min',
      description: 'Drive your dream car with easy financing options.',
      longDescription: 'Get behind the wheel of your dream car with our quick and affordable car loans. We offer 100% on-road funding with flexible repayment options and minimal documentation.',
      features: [
        '100% on-road funding available',
        'Tenure up to 7 years',
        'Low interest rates',
        'Quick approval & disbursal',
        'Used car financing available',
        'Balance transfer facility'
      ],
      benefits: [
        'Instant approval',
        'No prepayment charges after 1 year',
        'Flexible EMI options',
        'Low processing fees'
      ],
      advisors: [
        { name: 'Rohan Patil', title: 'Auto Loan Expert', exp: '9 years', rating: 4.8, image: 'RP' },
        { name: 'Meera Iyer', title: 'Vehicle Finance Advisor', exp: '7 years', rating: 4.7, image: 'MI' }
      ],
      faqs: [
        { q: 'Can I get a loan for a used car?', a: 'Yes, we finance used cars up to 5 years old with proper documentation.' },
        { q: 'What is the maximum loan amount?', a: 'Up to ₹1 crore depending on car value and income.' }
      ]
    },
    {
      id: 7,
      name: 'Insurance Policy',
      category: 'insurance',
      icon: FaShieldAlt,
      color: 'from-blue-500 to-blue-600',
      rating: 4.9,
      reviews: 2340,
      price: 'Custom premium',
      duration: '40 min',
      description: 'Comprehensive insurance policies for life, health, and assets.',
      longDescription: 'Secure your future and protect what matters most with our comprehensive insurance solutions. Choose from life, health, vehicle, and term insurance plans designed for your needs.',
      features: [
        'Term life insurance up to ₹10 crore',
        'Health insurance with ₹1 crore cover',
        'Vehicle insurance with zero depreciation',
        'Critical illness cover',
        'Family floater plans',
        'Tax benefits under Section 80C & 80D'
      ],
      benefits: [
        'Financial security for family',
        'Cashless hospitalization',
        'Tax savings',
        'Lifetime renewability'
      ],
      advisors: [
        { name: 'Deepak Mishra', title: 'Insurance Specialist', exp: '14 years', rating: 4.9, image: 'DM' },
        { name: 'Anjali Nair', title: 'Claims Expert', exp: '10 years', rating: 4.8, image: 'AN' }
      ],
      faqs: [
        { q: 'What is the claim settlement ratio?', a: 'We maintain a 98% claim settlement ratio for all policies.' },
        { q: 'Can I buy policies for my parents?', a: 'Yes, family floater plans cover parents and in-laws as well.' }
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
          <div className="flex flex-col">
            <span className="text-gray-900 font-semibold text-sm">{service.price}</span>
            <span className="text-gray-500 text-xs flex items-center mt-1">
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
                <Link to={'/contact'}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    Confirm Booking
                  </button>
                </Link>
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
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Financial Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored loan and insurance solutions to meet your financial needs. From personal loans to comprehensive insurance policies, we're here to help.
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
              <p className="text-3xl font-bold text-gray-900">₹2B+</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Transparent</h3>
                <p className="text-gray-600">Quick approvals with no hidden charges</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The home loan process was incredibly smooth. The team helped me get the best interest rate and handled all paperwork. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                    AK
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Amit Kumar</p>
                    <p className="text-gray-500 text-sm">Home Loan Client</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Best insurance policy advice I've ever received. The advisor explained everything clearly and helped me choose the perfect plan for my family."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                    SP
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Sunita Patel</p>
                    <p className="text-gray-500 text-sm">Insurance Client</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Got my car loan approved within 24 hours with the lowest interest rate. The team was very professional and helpful throughout."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                    RS
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Rajesh Sharma</p>
                    <p className="text-gray-500 text-sm">Car Loan Client</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with one of our expert advisors today and take the first step toward your financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={'/contact'}>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
              </Link>
              <Link to={'/contact'}>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </Link>
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
                <p className="text-gray-900 font-semibold">VDS Finance Solution</p>
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