import React, { useState, useEffect, useMemo } from 'react';
import Wraper from '../components/Architure/Wraper';
import {FaRegHeart,FaList,FaThLarge,FaTimesCircle,FaUserGraduate,FaExclamationTriangle } from 'react-icons/fa'
import { 
  FaSearch, 
  FaBuilding, 
  FaCreditCard, 
  FaPlane, 
  FaShoppingBag, 
  FaGasPump, 
  FaUtensils, 
  FaCrown, 
  FaGift, 
  FaMoneyBillWave, 
  FaFilm,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaBolt,
  FaShieldAlt,
  FaQuestionCircle,
  FaTimes,
  FaFilter,
  FaSortAmountDown,
  FaWallet,
  FaCoins,
  FaGem,

  FaStar,
  
  FaInfoCircle,
  
  FaPercentage,
  FaCalendarAlt,
  FaGlobe,
  FaHeadphones,
  FaMobile,
  FaArrowUp,
  FaArrowDown,
  FaFire,
  
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  
  FaHome,
  FaBlog,
  FaFileAlt,
  FaBriefcase,
  FaHeart,
  FaShare,
  
  FaEye,
} from 'react-icons/fa';
import { 
  MdAirportShuttle, 
  
  MdCompareArrows,
  
  
} from 'react-icons/md';

import { 
  
  GiDiamondTrophy,
  
} from 'react-icons/gi';

const CreditCard = () => {
  // State Management
  const [selectedBank, setSelectedBank] = useState('all');
  const [selectedCardType, setSelectedCardType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 15000 });
  const [compareList, setCompareList] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [showQuickView, setShowQuickView] = useState(null);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [expandedCards, setExpandedCards] = useState([]);
  const [userIncome, setUserIncome] = useState('');
  const [userCreditScore, setUserCreditScore] = useState('');
  const [showNotification, setShowNotification] = useState({ show: false, message: '', type: '' });

  // Bank categories with enhanced data
  const banks = [
    { id: 'all', name: 'All Banks', icon: <FaBuilding className="text-lg" />, count: 50, color: 'blue' },
    { id: 'hdfc', name: 'HDFC Bank', icon: <FaBuilding className="text-lg" />, count: 8, color: 'blue' },
    { id: 'icici', name: 'ICICI Bank', icon: <FaBuilding className="text-lg" />, count: 7, color: 'red' },
    { id: 'sbi', name: 'SBI Card', icon: <FaBuilding className="text-lg" />, count: 9, color: 'indigo' },
    { id: 'axis', name: 'Axis Bank', icon: <FaBuilding className="text-lg" />, count: 6, color: 'purple' },
    { id: 'kotak', name: 'Kotak Bank', icon: <FaBuilding className="text-lg" />, count: 5, color: 'yellow' },
    { id: 'citi', name: 'Citi Bank', icon: <FaBuilding className="text-lg" />, count: 3, color: 'green' },
    { id: 'amex', name: 'American Express', icon: <FaBuilding className="text-lg" />, count: 4, color: 'cyan' },
    { id: 'rbl', name: 'RBL Bank', icon: <FaBuilding className="text-lg" />, count: 4, color: 'orange' },
    { id: 'indusind', name: 'IndusInd Bank', icon: <FaBuilding className="text-lg" />, count: 3, color: 'pink' },
    { id: 'yes', name: 'Yes Bank', icon: <FaBuilding className="text-lg" />, count: 3, color: 'teal' },
    { id: 'standard', name: 'Standard Chartered', icon: <FaBuilding className="text-lg" />, count: 2, color: 'gray' },
  ];

  // Card types with enhanced data
  const cardTypes = [
    { id: 'all', name: 'All Types', icon: <FaCreditCard className="text-lg" />, color: 'gray' },
    { id: 'travel', name: 'Travel', icon: <FaPlane className="text-lg" />, color: 'blue', description: 'Best for frequent flyers' },
    { id: 'shopping', name: 'Shopping', icon: <FaShoppingBag className="text-lg" />, color: 'green', description: 'Great discounts on shopping' },
    { id: 'fuel', name: 'Fuel', icon: <FaGasPump className="text-lg" />, color: 'orange', description: 'Save on fuel expenses' },
    { id: 'dining', name: 'Dining', icon: <FaUtensils className="text-lg" />, color: 'red', description: 'Best restaurant offers' },
    { id: 'premium', name: 'Premium', icon: <FaCrown className="text-lg" />, color: 'purple', description: 'Luxury lifestyle benefits' },
    { id: 'lifetime-free', name: 'Lifetime Free', icon: <FaGift className="text-lg" />, color: 'pink', description: 'No annual fee forever' },
    { id: 'cashback', name: 'Cashback', icon: <FaMoneyBillWave className="text-lg" />, color: 'yellow', description: 'Get money back on spends' },
    { id: 'movie', name: 'Entertainment', icon: <FaFilm className="text-lg" />, color: 'indigo', description: 'Movie and entertainment offers' },
    { id: 'business', name: 'Business', icon: <FaBriefcase className="text-lg" />, color: 'cyan', description: 'For business expenses' },
    { id: 'student', name: 'Student', icon: <FaUserGraduate className="text-lg" />, color: 'teal', description: 'Perfect for students' },
  ];

  // Features for filtering
  const features = [
    { id: 'lounge', name: 'Airport Lounge Access', icon: <MdAirportShuttle /> },
    { id: 'fuel-waiver', name: 'Fuel Surcharge Waiver', icon: <FaGasPump /> },
    { id: 'movie-offers', name: 'Buy 1 Get 1 Movie', icon: <FaFilm /> },
    { id: 'dining-discounts', name: 'Dining Discounts', icon: <FaUtensils /> },
    { id: 'zero-forex', name: 'Zero Forex Markup', icon: <FaGlobe /> },
    { id: 'golf', name: 'Golf Privileges', icon: <GiDiamondTrophy /> },
    { id: 'concierge', name: 'Concierge Services', icon: <FaHeadphones /> },
    { id: 'insurance', name: 'Travel Insurance', icon: <FaShieldAlt /> },
    { id: 'emi', name: 'EMI Conversion', icon: <FaCalendarAlt /> },
    { id: 'contactless', name: 'Contactless Payment', icon: <FaMobile /> },
  ];

  // Enhanced credit cards data
  const creditCards = [
    // HDFC Bank Cards
    {
      id: 1,
      name: 'HDFC Regalia Gold',
      bank: 'hdfc',
      bankName: 'HDFC Bank',
      bankLogo: '/images/banks/hdfc.png',
      type: ['premium', 'travel', 'shopping'],
      image: '/images/cards/regalia-gold.jpg',
      annualFee: 2500,
      joiningFee: 2500,
      feeWaiver: 'Spend ₹3L annually',
      rewardRate: '4 reward points per ₹150',
      rewardValue: '1 point = ₹0.25',
      cashback: 'Up to 10% on partners',
      interestRate: '3.5% per month',
      forexMarkup: '2%',
      features: ['lounge', 'fuel-waiver', 'movie-offers', 'dining-discounts'],
      highlights: [
        'Welcome gift worth ₹5,000',
        '4 complimentary lounge visits per quarter',
        '10X rewards on dining and movies',
        'Fuel surcharge waiver',
        'Milestone benefits worth ₹10,000',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹2,500 + GST' },
        { name: 'Annual Fee', amount: '₹2,500 + GST' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '2% markup' },
      ],
      rewards: [
        { category: 'Dining', rate: '10X points' },
        { category: 'Movies', rate: '10X points' },
        { category: 'Travel', rate: '5X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹6,00,000+',
        age: '21-60 years',
        creditScore: '750+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof'],
      },
      benefits: [
        'Domestic lounge access',
        'International lounge access',
        'Golf privileges',
        'Concierge services',
        'Lost card liability',
        'Purchase protection',
      ],
      applyLink: '/apply/hdfc-regalia-gold',
      rating: 4.5,
      reviews: 1234,
      popularity: 95,
      approvalRate: '85%',
      processingTime: '3-5 days',
      featured: true,
      trending: true,
    },
    {
      id: 2,
      name: 'HDFC Diners Club Black',
      bank: 'hdfc',
      bankName: 'HDFC Bank',
      bankLogo: '/images/banks/hdfc.png',
      type: ['premium', 'travel', 'dining'],
      image: '/images/cards/diners-black.jpg',
      annualFee: 10000,
      joiningFee: 10000,
      feeWaiver: 'Spend ₹5L annually',
      rewardRate: '5 reward points per ₹150',
      rewardValue: '1 point = ₹1',
      cashback: 'Up to 15% on partners',
      interestRate: '3.5% per month',
      forexMarkup: '2%',
      features: ['lounge', 'golf', 'concierge', 'insurance', 'dining-discounts'],
      highlights: [
        'Welcome gift worth ₹10,000',
        'Unlimited lounge access worldwide',
        'Buy 1 Get 1 on movies',
        'Premium dining privileges',
        'Golf privileges at top courses',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹10,000 + GST' },
        { name: 'Annual Fee', amount: '₹10,000 + GST' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '2% markup' },
      ],
      rewards: [
        { category: 'Dining', rate: '10X points' },
        { category: 'Travel', rate: '10X points' },
        { category: 'International', rate: '5X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹18,00,000+',
        age: '21-60 years',
        creditScore: '780+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof', 'IT Returns'],
      },
      benefits: [
        'Access to 1000+ lounges',
        'Golf privileges',
        'Personal concierge',
        'Insurance up to ₹1Cr',
        'Priority pass',
        'Luxury hotel benefits',
      ],
      applyLink: '/apply/hdfc-diners-black',
      rating: 4.8,
      reviews: 892,
      popularity: 98,
      approvalRate: '75%',
      processingTime: '5-7 days',
      featured: true,
      trending: true,
    },
    // ICICI Bank Cards
    {
      id: 3,
      name: 'ICICI Sapphiro',
      bank: 'icici',
      bankName: 'ICICI Bank',
      bankLogo: '/images/banks/icici.png',
      type: ['premium', 'travel', 'lifestyle'],
      image: '/images/cards/sapphiro.jpg',
      annualFee: 3500,
      joiningFee: 3500,
      feeWaiver: 'Spend ₹2L annually',
      rewardRate: '2 reward points per ₹100',
      rewardValue: '1 point = ₹0.20',
      cashback: 'Up to 8% on partners',
      interestRate: '3.4% per month',
      forexMarkup: '1.99%',
      features: ['lounge', 'movie-offers', 'dining-discounts', 'fuel-waiver'],
      highlights: [
        'Buy 1 Get 1 on movie tickets',
        '12 complimentary lounge visits per year',
        'Fuel surcharge waiver',
        'Gourmet dining privileges',
        'Amazon voucher on joining',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹3,500 + GST' },
        { name: 'Annual Fee', amount: '₹3,500 + GST' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '1.99% markup' },
      ],
      rewards: [
        { category: 'Movies', rate: '5X points' },
        { category: 'Dining', rate: '5X points' },
        { category: 'Travel', rate: '3X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹8,00,000+',
        age: '23-60 years',
        creditScore: '750+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof'],
      },
      benefits: [
        'Lounge access',
        'Movie offers',
        'Dining discounts',
        'EMI facility',
        'Insurance cover',
        'Lost card liability',
      ],
      applyLink: '/apply/icici-sapphiro',
      rating: 4.3,
      reviews: 2156,
      popularity: 92,
      approvalRate: '82%',
      processingTime: '3-5 days',
      featured: false,
      trending: true,
    },
    {
      id: 4,
      name: 'ICICI Amazon Pay',
      bank: 'icici',
      bankName: 'ICICI Bank',
      bankLogo: '/images/banks/icici.png',
      type: ['shopping', 'cashback', 'lifetime-free'],
      image: '/images/cards/amazon-pay.jpg',
      annualFee: 0,
      joiningFee: 0,
      feeWaiver: 'Lifetime Free',
      rewardRate: '5% cashback on Amazon',
      rewardValue: 'Direct cashback',
      cashback: '5% on Amazon, 2% on partners',
      interestRate: '3.4% per month',
      forexMarkup: '1.99%',
      features: ['fuel-waiver', 'emi', 'contactless'],
      highlights: [
        '5% cashback on Amazon.in',
        '2% cashback on preferred partners',
        '1% cashback on all other spends',
        'Welcome gift of ₹500',
        'No annual fee forever',
      ],
      fees: [
        { name: 'Joining Fee', amount: 'Nil' },
        { name: 'Annual Fee', amount: 'Nil' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '1.99% markup' },
      ],
      rewards: [
        { category: 'Amazon', rate: '5% cashback' },
        { category: 'Partners', rate: '2% cashback' },
        { category: 'Others', rate: '1% cashback' },
        { category: 'Fuel', rate: '1% surcharge waiver' },
      ],
      eligibility: {
        income: '₹2,00,000+',
        age: '21-60 years',
        creditScore: '700+',
        employment: 'All',
        documents: ['PAN Card', 'Aadhaar'],
      },
      benefits: [
        'Lifetime free',
        'Amazon cashback',
        'Fuel surcharge waiver',
        'EMI facility',
        'International usage',
        'Contactless payment',
      ],
      applyLink: '/apply/icici-amazon-pay',
      rating: 4.7,
      reviews: 5678,
      popularity: 99,
      approvalRate: '90%',
      processingTime: '2-3 days',
      featured: true,
      trending: true,
    },
    // SBI Cards
    {
      id: 5,
      name: 'SBI SimplySAVE',
      bank: 'sbi',
      bankName: 'SBI Card',
      bankLogo: '/images/banks/sbi.png',
      type: ['shopping', 'dining', 'lifetime-free'],
      image: '/images/cards/simply-save.jpg',
      annualFee: 499,
      joiningFee: 499,
      feeWaiver: 'Spend ₹50,000 annually',
      rewardRate: '10 reward points per ₹100',
      rewardValue: '1 point = ₹0.25',
      cashback: 'Up to 10X rewards',
      interestRate: '3.6% per month',
      forexMarkup: '2%',
      features: ['dining-discounts', 'movie-offers', 'fuel-waiver'],
      highlights: [
        '10X rewards on dining and grocery',
        '2 complimentary lounge visits per quarter',
        'Fuel surcharge waiver',
        'Movie offers on BookMyShow',
        'Welcome gift of 500 bonus points',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹499' },
        { name: 'Annual Fee', amount: '₹499 (waivable)' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '2% markup' },
      ],
      rewards: [
        { category: 'Dining', rate: '10X points' },
        { category: 'Grocery', rate: '10X points' },
        { category: 'Movies', rate: '5X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹2,50,000+',
        age: '21-60 years',
        creditScore: '700+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof'],
      },
      benefits: [
        'Lounge access',
        'Movie offers',
        'Dining discounts',
        'Fuel waiver',
        'Reward points',
        'EMI facility',
      ],
      applyLink: '/apply/sbi-simply-save',
      rating: 4.2,
      reviews: 3456,
      popularity: 90,
      approvalRate: '88%',
      processingTime: '3-4 days',
      featured: false,
      trending: false,
    },
    {
      id: 6,
      name: 'SBI Elite',
      bank: 'sbi',
      bankName: 'SBI Card',
      bankLogo: '/images/banks/sbi.png',
      type: ['premium', 'travel', 'lifestyle'],
      image: '/images/cards/elite.jpg',
      annualFee: 4999,
      joiningFee: 4999,
      feeWaiver: 'Spend ₹3L annually',
      rewardRate: '4 reward points per ₹100',
      rewardValue: '1 point = ₹0.35',
      cashback: 'Up to 12% on partners',
      interestRate: '3.6% per month',
      forexMarkup: '2%',
      features: ['lounge', 'golf', 'concierge', 'insurance'],
      highlights: [
        'Welcome gift worth ₹5,000',
        '8 complimentary lounge visits per quarter',
        'Buy 1 Get 1 on movie tickets',
        'Gourmet dining privileges',
        'Golf privileges',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹4,999' },
        { name: 'Annual Fee', amount: '₹4,999 (waivable)' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '2% markup' },
      ],
      rewards: [
        { category: 'Travel', rate: '10X points' },
        { category: 'Dining', rate: '8X points' },
        { category: 'International', rate: '5X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹12,00,000+',
        age: '21-60 years',
        creditScore: '750+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof', 'IT Returns'],
      },
      benefits: [
        'Lounge access',
        'Golf privileges',
        'Concierge services',
        'Insurance up to ₹1Cr',
        'Milestone benefits',
        'Dining discounts',
      ],
      applyLink: '/apply/sbi-elite',
      rating: 4.4,
      reviews: 1123,
      popularity: 93,
      approvalRate: '80%',
      processingTime: '4-5 days',
      featured: true,
      trending: false,
    },
    // Axis Bank Cards
    {
      id: 7,
      name: 'Axis Flipkart',
      bank: 'axis',
      bankName: 'Axis Bank',
      bankLogo: '/images/banks/axis.png',
      type: ['shopping', 'cashback', 'lifetime-free'],
      image: '/images/cards/flipkart.jpg',
      annualFee: 500,
      joiningFee: 500,
      feeWaiver: 'Spend ₹2L annually',
      rewardRate: '5% cashback on Flipkart',
      rewardValue: 'Direct cashback',
      cashback: '5% on Flipkart, 1.5% others',
      interestRate: '3.5% per month',
      forexMarkup: '2%',
      features: ['lounge', 'fuel-waiver', 'emi', 'contactless'],
      highlights: [
        '5% unlimited cashback on Flipkart',
        '4 complimentary lounge visits per year',
        'Fuel surcharge waiver',
        'Welcome gift of ₹500 voucher',
        'Cashback credited automatically',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹500' },
        { name: 'Annual Fee', amount: '₹500 (waivable)' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '2% markup' },
      ],
      rewards: [
        { category: 'Flipkart', rate: '5% cashback' },
        { category: 'Others', rate: '1.5% cashback' },
        { category: 'Fuel', rate: '1% surcharge waiver' },
        { category: 'Utilities', rate: '1% cashback' },
      ],
      eligibility: {
        income: '₹3,00,000+',
        age: '21-60 years',
        creditScore: '700+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof'],
      },
      benefits: [
        'Flipkart cashback',
        'Lounge access',
        'Fuel waiver',
        'EMI facility',
        'Contactless',
        'Welcome voucher',
      ],
      applyLink: '/apply/axis-flipkart',
      rating: 4.6,
      reviews: 4321,
      popularity: 97,
      approvalRate: '89%',
      processingTime: '2-3 days',
      featured: true,
      trending: true,
    },
    {
      id: 8,
      name: 'Axis Magnus',
      bank: 'axis',
      bankName: 'Axis Bank',
      bankLogo: '/images/banks/axis.png',
      type: ['premium', 'travel', 'luxury'],
      image: '/images/cards/magnus.jpg',
      annualFee: 10000,
      joiningFee: 10000,
      feeWaiver: 'Spend ₹5L annually',
      rewardRate: '5 reward points per ₹200',
      rewardValue: '1 point = ₹1',
      cashback: 'Up to 20% on partners',
      interestRate: '3.5% per month',
      forexMarkup: '2%',
      features: ['lounge', 'golf', 'concierge', 'insurance', 'zero-forex'],
      highlights: [
        'Welcome gift worth ₹10,000',
        'Unlimited lounge access worldwide',
        'Golf privileges',
        'Premium concierge services',
        'Milestone benefits up to ₹25,000',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹10,000 + GST' },
        { name: 'Annual Fee', amount: '₹10,000 + GST' },
        { name: 'Add-on Card', amount: 'Free' },
        { name: 'Foreign Currency', amount: '2% markup' },
      ],
      rewards: [
        { category: 'Travel', rate: '10X points' },
        { category: 'Luxury', rate: '10X points' },
        { category: 'International', rate: '5X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹25,00,000+',
        age: '25-60 years',
        creditScore: '800+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'IT Returns', 'Net Worth'],
      },
      benefits: [
        'Priority pass',
        'Unlimited lounge',
        'Golf privileges',
        'Personal concierge',
        'Insurance up to ₹2Cr',
        'Luxury hotel benefits',
      ],
      applyLink: '/apply/axis-magnus',
      rating: 4.9,
      reviews: 567,
      popularity: 96,
      approvalRate: '70%',
      processingTime: '5-7 days',
      featured: true,
      trending: true,
    },
    // American Express Cards
    {
      id: 9,
      name: 'Amex Platinum Travel',
      bank: 'amex',
      bankName: 'American Express',
      bankLogo: '/images/banks/amex.png',
      type: ['travel', 'premium'],
      image: '/images/cards/amex-platinum.jpg',
      annualFee: 3500,
      joiningFee: 3500,
      feeWaiver: 'Spend ₹3L annually',
      rewardRate: '2 MR points per ₹50',
      rewardValue: '1 MR point = ₹0.50',
      cashback: 'Up to 25% on travel',
      interestRate: '3.5% per month',
      forexMarkup: '0%',
      features: ['lounge', 'insurance', 'concierge', 'zero-forex'],
      highlights: [
        'Welcome gift of 4,000 bonus points',
        '10,000 bonus points on spends of ₹4 lakhs',
        'Complimentary Taj vouchers',
        'Access to priority pass',
        'Zero forex markup',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹3,500 + GST' },
        { name: 'Annual Fee', amount: '₹3,500 + GST' },
        { name: 'Add-on Card', amount: '₹500' },
        { name: 'Foreign Currency', amount: '0% markup' },
      ],
      rewards: [
        { category: 'Travel', rate: '5X points' },
        { category: 'International', rate: '3X points' },
        { category: 'Dining', rate: '2X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹6,00,000+',
        age: '21-60 years',
        creditScore: '750+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof'],
      },
      benefits: [
        'Travel benefits',
        'Lounge access',
        'Hotel vouchers',
        'Insurance cover',
        'Zero forex',
        'Concierge services',
      ],
      applyLink: '/apply/amex-platinum-travel',
      rating: 4.7,
      reviews: 2345,
      popularity: 94,
      approvalRate: '75%',
      processingTime: '4-5 days',
      featured: true,
      trending: true,
    },
    {
      id: 10,
      name: 'Amex Membership Rewards',
      bank: 'amex',
      bankName: 'American Express',
      bankLogo: '/images/banks/amex.png',
      type: ['rewards', 'shopping'],
      image: '/images/cards/amex-mr.jpg',
      annualFee: 1000,
      joiningFee: 1000,
      feeWaiver: 'First year free',
      rewardRate: '1 MR point per ₹50',
      rewardValue: '1 MR point = ₹0.40',
      cashback: 'Up to 15% on partners',
      interestRate: '3.5% per month',
      forexMarkup: '0%',
      features: ['zero-forex', 'emi', 'contactless'],
      highlights: [
        '10,000 bonus points on spends of ₹50,000',
        'Accelerated points on partner spends',
        'Flexible redemption options',
        'Global acceptance',
        'Zero forex markup',
      ],
      fees: [
        { name: 'Joining Fee', amount: '₹1,000' },
        { name: 'Annual Fee', amount: '₹1,000 (FYF)' },
        { name: 'Add-on Card', amount: '₹500' },
        { name: 'Foreign Currency', amount: '0% markup' },
      ],
      rewards: [
        { category: 'Partners', rate: '3X points' },
        { category: 'Shopping', rate: '2X points' },
        { category: 'Dining', rate: '2X points' },
        { category: 'Others', rate: '1X points' },
      ],
      eligibility: {
        income: '₹3,00,000+',
        age: '21-60 years',
        creditScore: '700+',
        employment: 'Salaried/Self-employed',
        documents: ['PAN Card', 'Aadhaar', 'Income Proof'],
      },
      benefits: [
        'Reward points',
        'Flexible redemption',
        'Zero forex',
        'Partner offers',
        '24/7 support',
        'Global acceptance',
      ],
      applyLink: '/apply/amex-mr',
      
      reviews: 1890,
      popularity: 88,
      approvalRate: '82%',
      processingTime: '3-4 days',
      featured: false,
      trending: false,
    },
  ];

  // Helper Functions
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getBankColor = (bankId) => {
    const bank = banks.find(b => b.id === bankId);
    return bank?.color || 'blue';
  };

  const getCardTypeColor = (type) => {
    const cardType = cardTypes.find(t => t.id === type);
    return cardType?.color || 'gray';
  };

  const toggleCompare = (cardId) => {
    setCompareList(prev => {
      if (prev.includes(cardId)) {
        return prev.filter(id => id !== cardId);
      } else {
        if (prev.length >= 3) {
          showNotificationMessage('You can compare up to 3 cards at a time', 'warning');
          return prev;
        }
        return [...prev, cardId];
      }
    });
  };

  const toggleSave = (cardId) => {
    setSavedCards(prev => {
      if (prev.includes(cardId)) {
        showNotificationMessage('Removed from saved cards', 'info');
        return prev.filter(id => id !== cardId);
      } else {
        showNotificationMessage('Added to saved cards', 'success');
        return [...prev, cardId];
      }
    });
  };

  const toggleExpand = (cardId) => {
    setExpandedCards(prev => {
      if (prev.includes(cardId)) {
        return prev.filter(id => id !== cardId);
      } else {
        return [...prev, cardId];
      }
    });
  };

  const showNotificationMessage = (message, type) => {
    setShowNotification({ show: true, message, type });
    setTimeout(() => setShowNotification({ show: false, message: '', type: '' }), 3000);
  };

  const checkEligibility = (card) => {
    if (!userIncome) return true;
    const minIncome = parseInt(card.eligibility.income.replace(/[^0-9]/g, ''));
    return parseInt(userIncome) >= minIncome;
  };

  // Filter and Sort Logic
  const filteredCards = useMemo(() => {
    return creditCards.filter(card => {
      // Bank filter
      const bankMatch = selectedBank === 'all' || card.bank === selectedBank;
      
      // Card type filter
      const typeMatch = selectedCardType === 'all' || card.type.includes(selectedCardType);
      
      // Search filter
      const searchMatch = searchQuery === '' || 
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.bankName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.type.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Features filter
      const featuresMatch = selectedFeatures.length === 0 || 
        selectedFeatures.every(f => card.features.includes(f));
      
      // Price range filter
      const priceMatch = card.annualFee >= priceRange.min && card.annualFee <= priceRange.max;
      
      // Eligibility check (if income entered)
      const eligibilityMatch = !userIncome || checkEligibility(card);
      
      return bankMatch && typeMatch && searchMatch && featuresMatch && priceMatch && eligibilityMatch;
    }).sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'popularity':
          comparison = b.popularity - a.popularity;
          break;
        case 'rating':
          comparison = b.rating - a.rating;
          break;
        case 'fee-low':
          comparison = a.annualFee - b.annualFee;
          break;
        case 'fee-high':
          comparison = b.annualFee - a.annualFee;
          break;
        case 'rewards':
          comparison = b.rewardRate.length - a.rewardRate.length;
          break;
        case 'newest':
          comparison = b.id - a.id;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'desc' ? comparison : -comparison;
    });
  }, [selectedBank, selectedCardType, searchQuery, selectedFeatures, priceRange, userIncome, sortBy, sortOrder]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCards.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  // Featured and Trending cards
  const featuredCards = creditCards.filter(card => card.featured).slice(0, 3);
  const trendingCards = creditCards.filter(card => card.trending).slice(0, 3);

  return (
    <Wraper>
      <div className="min-h-screen bg-gray-50">
        {/* Notification Toast */}
        {showNotification.show && (
          <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slideIn ${
            showNotification.type === 'success' ? 'bg-green-500' :
            showNotification.type === 'warning' ? 'bg-yellow-500' :
            showNotification.type === 'error' ? 'bg-red-500' :
            'bg-blue-500'
          } text-white`}>
            {showNotification.type === 'success' && <FaCheckCircle />}
            {showNotification.type === 'warning' && <FaExclamationTriangle />}
            {showNotification.type === 'error' && <FaTimesCircle />}
            {showNotification.type === 'info' && <FaInfoCircle />}
            <span>{showNotification.message}</span>
          </div>
        )}

      
        

        {/* Hero Section with Advanced Search */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Find Your Perfect{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                  Credit Card
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Compare 50+ credit cards from 15+ top banks. Get the best rewards, 
                lowest fees, and exclusive benefits tailored to your lifestyle.
              </p>
              
              {/* Advanced Search Bar */}
              <div className="max-w-3xl mx-auto mb-8">
                <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2">
                  <div className="flex-1 relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by card name, bank, or category..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none"
                    />
                  </div>
                  <button 
                    onClick={() => setShowFiltersMobile(true)}
                    className="md:hidden bg-gray-100 text-gray-700 px-6 py-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FaFilter /> Filters
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <FaSearch /> Search
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm opacity-80">Credit Cards</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-80">Partner Banks</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold mb-1">10M+</div>
                  <div className="text-sm opacity-80">Happy Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold mb-1">₹50K+</div>
                  <div className="text-sm opacity-80">Max Rewards</div>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                <span className="text-sm opacity-80">Popular:</span>
                {['Cashback', 'Travel', 'Lifetime Free', 'Premium', 'Fuel'].map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(term)}
                    className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Checker Banner */}
        <div className="bg-yellow-50 border-b border-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-2xl text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Check Your Eligibility</h3>
                  <p className="text-sm text-gray-600">Enter your details to see cards you qualify for</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="number"
                  placeholder="Annual Income (₹)"
                  value={userIncome}
                  onChange={(e) => setUserIncome(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="number"
                  placeholder="Credit Score"
                  value={userCreditScore}
                  onChange={(e) => setUserCreditScore(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all">
                  Check Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Cards Section */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FaFire className="text-red-500" />
                Featured Cards
              </h2>
              <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                View All <FaArrowRight className="text-sm" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCards.map(card => (
                <div key={card.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaBuilding className={`text-2xl text-${getBankColor(card.bank)}-600`} />
                    <span className="font-medium text-gray-600">{card.bankName}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{card.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{card.highlights[0]}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-500">Annual Fee</span>
                      <p className="font-bold text-gray-900">{formatCurrency(card.annualFee)}</p>
                    </div>
                    <button 
                      onClick={() => window.location.href = card.applyLink}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Filters and Results */}
          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <FaFilter className="text-blue-600" />
                    Filters
                  </h2>
                  <button 
                    onClick={() => {
                      setSelectedBank('all');
                      setSelectedCardType('all');
                      setSearchQuery('');
                      setSelectedFeatures([]);
                      setPriceRange({ min: 0, max: 15000 });
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Reset All
                  </button>
                </div>

                {/* Bank Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                    <FaBuilding className="text-blue-600" />
                    Select Bank
                  </label>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {banks.map(bank => (
                      <button
                        key={bank.id}
                        onClick={() => setSelectedBank(bank.id)}
                        className={`w-full px-3 py-2 rounded-lg flex items-center justify-between transition-all ${
                          selectedBank === bank.id 
                            ? `bg-${bank.color}-100 text-${bank.color}-700` 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`text-${bank.color}-600`}>{bank.icon}</span>
                          <span>{bank.name}</span>
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedBank === bank.id 
                            ? `bg-${bank.color}-200` 
                            : 'bg-gray-200'
                        }`}>
                          {bank.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card Type Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                    <FaCreditCard className="text-purple-600" />
                    Card Category
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {cardTypes.map(type => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedCardType(type.id)}
                        className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                          selectedCardType === type.id 
                            ? `bg-${type.color}-100 text-${type.color}-700` 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <span className={`text-${type.color}-600`}>{type.icon}</span>
                        <span className="truncate">{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                    <FaGem className="text-pink-600" />
                    Card Features
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {features.map(feature => (
                      <label key={feature.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedFeatures([...selectedFeatures, feature.id]);
                            } else {
                              setSelectedFeatures(selectedFeatures.filter(f => f !== feature.id));
                            }
                          }}
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 flex items-center gap-2">
                          {feature.icon}
                          {feature.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                    <FaWallet className="text-green-600" />
                    Annual Fee Range
                  </label>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="500"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>₹0</span>
                      <span>Up to {formatCurrency(priceRange.max)}</span>
                    </div>
                  </div>
                </div>

                {/* Compare List */}
                {compareList.length > 0 && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Compare Cards ({compareList.length}/3)</h3>
                    <div className="space-y-2 mb-3">
                      {compareList.map(id => {
                        const card = creditCards.find(c => c.id === id);
                        return (
                          <div key={id} className="flex justify-between items-center text-sm">
                            <span>{card?.name}</span>
                            <button 
                              onClick={() => toggleCompare(id)}
                              className="text-red-500 hover:text-red-600"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {compareList.length === 2 && (
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                        Compare Now
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Results Section */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-gray-600">
                      <span className="text-2xl font-bold text-gray-900">{filteredCards.length}</span>
                      <span className="ml-2">credit cards found</span>
                    </div>
                    
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <FaSortAmountDown className="text-gray-400" />
                      <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="popularity">Popularity</option>
                        <option value="rating">Rating</option>
                        <option value="fee-low">Fee: Low to High</option>
                        <option value="fee-high">Fee: High to Low</option>
                        <option value="rewards">Best Rewards</option>
                        <option value="newest">Newest First</option>
                      </select>
                    </div>
                    <button 
                      onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      {sortOrder === 'desc' ? <FaArrowDown /> : <FaArrowUp />}
                    </button>
                  </div>
                </div>

                {/* Active Filters */}
                {(selectedBank !== 'all' || selectedCardType !== 'all' || searchQuery || selectedFeatures.length > 0) && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                    {selectedBank !== 'all' && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        Bank: {banks.find(b => b.id === selectedBank)?.name}
                        <button onClick={() => setSelectedBank('all')}>
                          <FaTimes className="text-xs" />
                        </button>
                      </span>
                    )}
                    {selectedCardType !== 'all' && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        Type: {cardTypes.find(t => t.id === selectedCardType)?.name}
                        <button onClick={() => setSelectedCardType('all')}>
                          <FaTimes className="text-xs" />
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        Search: {searchQuery}
                        <button onClick={() => setSearchQuery('')}>
                          <FaTimes className="text-xs" />
                        </button>
                      </span>
                    )}
                    {selectedFeatures.map(feature => {
                      const f = features.find(f => f.id === feature);
                      return (
                        <span key={feature} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                          {f?.name}
                          <button onClick={() => setSelectedFeatures(selectedFeatures.filter(f => f !== feature))}>
                            <FaTimes className="text-xs" />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Cards Grid/List */}
              {filteredCards.length > 0 ? (
                <>
                  <div className={viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8' 
                    : 'space-y-4 mb-8'
                  }>
                    {currentItems.map(card => (
                      <div 
                        key={card.id} 
                        className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${
                          viewMode === 'list' ? 'flex' : ''
                        }`}
                      >
                        {viewMode === 'grid' ? (
                          // Grid View
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-2">
                                <span className={`text-${getBankColor(card.bank)}-600 text-2xl`}>
                                  <FaBuilding />
                                </span>
                                <span className="font-medium text-gray-600">{card.bankName}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => toggleSave(card.id)}
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  {savedCards.includes(card.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                                </button>
                                <button 
                                  onClick={() => toggleCompare(card.id)}
                                  className={`text-gray-400 hover:text-blue-500 transition-colors ${
                                    compareList.includes(card.id) ? 'text-blue-500' : ''
                                  }`}
                                >
                                  <MdCompareArrows />
                                </button>
                              </div>
                            </div>

                            {/* Card Image */}
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-32 mb-4 flex items-center justify-center relative group">
                              <FaCreditCard className="text-5xl text-gray-300" />
                              <button 
                                onClick={() => setShowQuickView(card.id)}
                                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2"
                              >
                                <FaEye /> Quick View
                              </button>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h3>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <span key={star} className={star <= card.rating ? 'text-yellow-400' : 'text-gray-300'}>
                                    <FaStar className="text-sm" />
                                  </span>
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">({card.reviews})</span>
                            </div>
                            
                            {/* Card Type Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {card.type.slice(0, 3).map((type, index) => {
                                const typeInfo = cardTypes.find(t => t.id === type);
                                return (
                                  <span key={index} className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 bg-${getCardTypeColor(type)}-100 text-${getCardTypeColor(type)}-700`}>
                                    {typeInfo?.icon}
                                    {typeInfo?.name || type}
                                  </span>
                                );
                              })}
                            </div>

                            {/* Key Details */}
                            <div className="space-y-2 mb-4">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 flex items-center gap-1">
                                  <FaWallet className="text-gray-400" /> Annual Fee
                                </span>
                                <span className="font-medium text-gray-900">
                                  {card.annualFee === 0 ? 'Free' : formatCurrency(card.annualFee)}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 flex items-center gap-1">
                                  <FaCoins className="text-gray-400" /> Reward Rate
                                </span>
                                <span className="font-medium text-gray-900">{card.rewardRate}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 flex items-center gap-1">
                                  <FaPercentage className="text-gray-400" /> Cashback
                                </span>
                                <span className="font-medium text-gray-900">{card.cashback}</span>
                              </div>
                            </div>

                            {/* Highlights */}
                            <div className="mb-4">
                              <ul className="space-y-1">
                                {card.highlights.slice(0, 2).map((highlight, index) => (
                                  <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="line-clamp-1">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              <button 
                                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2"
                                onClick={() => window.location.href = card.applyLink}
                              >
                                Apply Now
                                <FaArrowRight className="text-sm" />
                              </button>
                              <button 
                                onClick={() => toggleExpand(card.id)}
                                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                              >
                                {expandedCards.includes(card.id) ? <FaArrowUp /> : <FaArrowDown />}
                              </button>
                            </div>

                            {/* Expanded Details */}
                            {expandedCards.includes(card.id) && (
                              <div className="mt-4 pt-4 border-t">
                                <h4 className="font-medium text-gray-900 mb-2">Key Benefits</h4>
                                <ul className="grid grid-cols-2 gap-2 mb-3">
                                  {card.benefits.slice(0, 4).map((benefit, index) => (
                                    <li key={index} className="text-xs text-gray-600 flex items-center gap-1">
                                      <FaCheckCircle className="text-green-500 text-xs" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600">Approval Rate</span>
                                    <span className="font-medium text-gray-900">{card.approvalRate}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Processing Time</span>
                                    <span className="font-medium text-gray-900">{card.processingTime}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          // List View
                          <div className="flex-1 p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-48 flex-shrink-0">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-32 flex items-center justify-center">
                                  <FaCreditCard className="text-5xl text-gray-300" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                                    <p className="text-sm text-gray-600">{card.bankName}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => toggleSave(card.id)}>
                                      {savedCards.includes(card.id) ? 
                                        <FaHeart className="text-red-500" /> :null
                                      }
                                    </button>
                                    <button onClick={() => toggleCompare(card.id)}>
                                      <MdCompareArrows className={compareList.includes(card.id) ? 'text-blue-500' : 'text-gray-400'} />
                                    </button>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                  <div>
                                    <span className="text-xs text-gray-500">Annual Fee</span>
                                    <p className="font-medium">{card.annualFee === 0 ? 'Free' : formatCurrency(card.annualFee)}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs text-gray-500">Reward Rate</span>
                                    <p className="font-medium">{card.rewardRate}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs text-gray-500">Cashback</span>
                                    <p className="font-medium">{card.cashback}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs text-gray-500">Rating</span>
                                    <div className="flex items-center gap-1">
                                      <span className="font-medium">{card.rating}</span>
                                      <FaStar className="text-yellow-400 text-sm" />
                                    </div>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{card.highlights[0]}</p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
                                  Apply Now
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mb-8">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Previous
                      </button>
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-10 h-10 rounded-lg ${
                            currentPage === i + 1
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg mb-12">
                  <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No credit cards found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any cards matching your criteria. Try adjusting your filters.
                  </p>
                  <button 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all inline-flex items-center gap-2"
                    onClick={() => {
                      setSelectedBank('all');
                      setSelectedCardType('all');
                      setSearchQuery('');
                      setSelectedFeatures([]);
                      setPriceRange({ min: 0, max: 15000 });
                    }}
                  >
                    <FaTimes />
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose CardCompass?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <MdCompareArrows className="text-4xl text-blue-600" />, title: 'Compare Cards', desc: 'Side-by-side comparison of features, fees, and rewards' },
                { icon: <FaBolt className="text-4xl text-yellow-500" />, title: 'Quick Approval', desc: 'Get instant decisions on eligible applications' },
                { icon: <FaShieldAlt className="text-4xl text-green-600" />, title: '100% Secure', desc: 'Your data is encrypted and protected' },
                { icon: <FaGift className="text-4xl text-purple-600" />, title: 'Exclusive Offers', desc: 'Get special deals and joining bonuses' },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cardTypes.filter(t => t.id !== 'all').slice(0, 10).map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105 group"
                  onClick={() => setSelectedCardType(category.id)}
                >
                  <div className={`text-4xl mb-2 text-${category.color}-600 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{category.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Compare', desc: 'Browse and compare cards from top banks', icon: <MdCompareArrows /> },
                { step: '2', title: 'Apply', desc: 'Fill a simple online application form', icon: <FaFileAlt /> },
                { step: '3', title: 'Get Card', desc: 'Receive your card and start enjoying benefits', icon: <FaCreditCard /> },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-8 text-center shadow-md relative z-10">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl text-gray-400">
                      <FaArrowRight />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Rahul Sharma',
                  location: 'Mumbai',
                  rating: 5,
                  comment: 'Found the perfect travel card through CardCompass. The comparison tool saved me hours of research!',
                  card: 'HDFC Regalia Gold'
                },
                {
                  name: 'Priya Patel',
                  location: 'Delhi',
                  rating: 5,
                  comment: 'Great platform with detailed information. Applied for Axis Flipkart card and got approved in 2 days.',
                  card: 'Axis Flipkart'
                },
                {
                  name: 'Amit Kumar',
                  location: 'Bangalore',
                  rating: 5,
                  comment: 'The eligibility checker helped me find cards I actually qualify for. Very useful feature!',
                  card: 'ICICI Amazon Pay'
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {testimonial.card}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  q: 'How do I choose the right credit card?',
                  a: 'Consider your spending habits, reward preferences, and annual fees. Use our filters to find cards that match your lifestyle. We recommend looking at cashback cards for daily expenses, travel cards for frequent flyers, and premium cards for luxury benefits.'
                },
                {
                  q: 'What is the minimum income required?',
                  a: 'Income requirements vary by card, typically ranging from ₹2 lakhs to ₹25 lakhs per annum. Basic cards may have lower requirements, while premium cards require higher income. Check individual card eligibility for exact details.'
                },
                {
                  q: 'How long does approval take?',
                  a: 'Most applications are processed within 3-5 business days. Some cards offer instant approval decisions, especially if you already have an account with the bank. Digital-first cards often have faster processing times.'
                },
                {
                  q: 'Can I apply for multiple cards?',
                  a: 'Yes, you can apply for multiple cards, but each application may affect your credit score temporarily. It\'s recommended to space out applications by 3-6 months. Multiple cards can help maximize rewards if used wisely.'
                },
                {
                  q: 'What documents are needed?',
                  a: 'Typically you\'ll need PAN Card, Aadhaar, proof of income (salary slips/IT returns), and passport-sized photos. Some cards may have additional requirements. All documents can be uploaded online during application.'
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md mb-4 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="text-2xl text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Card?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join 10 million+ satisfied customers who found their ideal credit card with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 mx-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Start Comparing Now
                <FaArrowRight />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>
          </section>
        </div>
        
         {/* Mobile Filters Modal */}
        {showFiltersMobile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button onClick={() => setShowFiltersMobile(false)}>
                  <FaTimes className="text-xl" />
                </button>
              </div>
              {/* Mobile filters content - same as desktop filters */}
              <div className="space-y-6">
                {/* Bank Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Bank</label>
                  <select 
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    {banks.map(bank => (
                      <option key={bank.id} value={bank.id}>{bank.name} ({bank.count})</option>
                    ))}
                  </select>
                </div>

                {/* Card Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Card Category</label>
                  <select 
                    value={selectedCardType}
                    onChange={(e) => setSelectedCardType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    {cardTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Max Annual Fee</label>
                  <input
                    type="range"
                    min="0"
                    max="15000"
                    step="500"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <div className="text-center mt-2">Up to {formatCurrency(priceRange.max)}</div>
                </div>

                <button 
                  onClick={() => setShowFiltersMobile(false)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick View Modal */}
        {showQuickView && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const card = creditCards.find(c => c.id === showQuickView);
                if (!card) return null;
                return (
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{card.name}</h2>
                      <button onClick={() => setShowQuickView(null)}>
                        <FaTimes className="text-xl" />
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-40 flex items-center justify-center mb-4">
                          <FaCreditCard className="text-6xl text-gray-300" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Key Highlights</h3>
                        <ul className="space-y-2">
                          {card.highlights.map((highlight, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">Fees & Charges</h3>
                            {card.fees.map((fee, index) => (
                              <div key={index} className="flex justify-between text-sm py-1 border-b">
                                <span className="text-gray-600">{fee.name}</span>
                                <span className="font-medium">{fee.amount}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">Reward Rates</h3>
                            {card.rewards.map((reward, index) => (
                              <div key={index} className="flex justify-between text-sm py-1">
                                <span className="text-gray-600">{reward.category}</span>
                                <span className="font-medium">{reward.rate}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">Eligibility</h3>
                            <p className="text-sm text-gray-600">Income: {card.eligibility.income}</p>
                            <p className="text-sm text-gray-600">Credit Score: {card.eligibility.creditScore}</p>
                            <p className="text-sm text-gray-600">Age: {card.eligibility.age}</p>
                          </div>
                        </div>
                        
                        <button 
                          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all mt-6"
                          onClick={() => window.location.href = card.applyLink}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        
        
      </div>
    </Wraper>
  );
};

export default CreditCard;