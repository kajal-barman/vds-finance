import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wraper from '../components/Architure/Wraper';
import { 
  FaSearch, 
  FaHome, 
  FaCar, 
  FaGraduationCap, 
  FaBriefcase, 
  FaHeart, 
  FaGem, 
  FaHospital, 
  FaUniversity,
  FaRupeeSign,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaFilter,
  FaTimes,
  FaSort,
  FaWallet,
  FaPercentage,
  FaCalendarAlt,
  FaUser,
  FaBuilding,
  FaShieldAlt,
  FaBolt,
  FaFileAlt,
  FaHandshake,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaInfoCircle,
  FaQuestionCircle,
  FaRegStar,
  FaArrowUp,
  FaArrowDown,
  FaFire,
  FaTag,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { 
  MdCompareArrows, 
  MdSecurity,
  MdTimeline,
  MdVerified,
  MdSupportAgent,
  MdDocumentScanner,
  MdMoneyOff,
  MdAccountBalance,
  MdCalculate,
  MdTrendingUp,
  MdWatchLater,
  MdDoneAll,
  MdContactPage,
  MdPhoneInTalk,
  MdEmail,
  MdChat
} from 'react-icons/md';
import { 
  HiOutlineSparkles, 
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineCurrencyRupee,
  HiOutlineChartBar,
  HiOutlineSupport,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineInformationCircle
} from 'react-icons/hi';
import { 
  GiMoneyStack, 
  GiReceiveMoney, 
  GiTakeMyMoney,
  GiBank,
  GiPiggyBank,
  GiHouse,
  GiCarWheel,
  GiGraduateCap,
  GiSuitcase,
  GiHeartPlus,
  GiGoldBar,
  GiStethoscope,
  GiConversation
} from 'react-icons/gi';

const Loan = () => {
  const navigate = useNavigate();
  
  const [selectedLoanType, setSelectedLoanType] = useState('all');
  const [selectedAmount, setSelectedAmount] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);
  const [sortBy, setSortBy] = useState('popularity');
  const [sortOrder, setSortOrder] = useState('desc');

  // Navigation handlers
  const handleNavigate = (path, params = {}) => {
    // You can add tracking or analytics here
    console.log('Navigating to:', path, params);
    navigate(path);
  };

  const handleApplyNow = (loanId, loanName) => {
    handleNavigate('/contact', { 
      source: 'loan_application',
      loanId: loanId,
      loanName: loanName,
      type: 'application'
    });
  };

  const handleDetails = (loanId, loanName) => {
    handleNavigate('/contact', { 
      source: 'loan_details',
      loanId: loanId,
      loanName: loanName,
      type: 'inquiry'
    });
  };

  const handleTalkToExpert = () => {
    handleNavigate('/contact', { 
      source: 'talk_to_expert',
      type: 'expert_consultation'
    });
  };

  const handleWhatsApp = () => {
    handleNavigate('/contact', { 
      source: 'whatsapp',
      type: 'whatsapp_inquiry'
    });
  };

  const handleEmail = () => {
    handleNavigate('/contact', { 
      source: 'email',
      type: 'email_inquiry'
    });
  };

  const handleSignIn = () => {
    handleNavigate('/contact', { 
      source: 'sign_in',
      type: 'account_access'
    });
  };

  const handleCategoryClick = (categoryId, categoryName) => {
    setSelectedLoanType(categoryId);
    // Optional: Track category selection
    console.log('Selected category:', categoryName);
  };

  const handleSort = (value) => {
    setSortBy(value);
    // Optional: Track sort changes
    console.log('Sort by:', value);
  };

  // Loan types with icons
  const loanTypes = [
    { id: 'all', name: 'All Loans', icon: <FaUniversity />, count: 45, color: 'blue' },
    { id: 'home', name: 'Home Loan', icon: <FaHome />, count: 12, color: 'blue' },
    { id: 'car', name: 'Car Loan', icon: <FaCar />, count: 8, color: 'green' },
    { id: 'education', name: 'Education Loan', icon: <FaGraduationCap />, count: 6, color: 'purple' },
    { id: 'business', name: 'Business Loan', icon: <FaBriefcase />, count: 5, color: 'orange' },
    { id: 'personal', name: 'Personal Loan', icon: <FaHeart />, count: 10, color: 'red' },
    { id: 'gold', name: 'Gold Loan', icon: <FaGem />, count: 4, color: 'yellow' },
    { id: 'medical', name: 'Medical Loan', icon: <FaHospital />, count: 3, color: 'teal' },
  ];

  // Loan amount ranges
  const amountRanges = [
    { id: 'all', name: 'Any Amount' },
    { id: 'upto-1l', name: 'Upto ₹1 Lakh' },
    { id: '1l-5l', name: '₹1 - 5 Lakhs' },
    { id: '5l-10l', name: '₹5 - 10 Lakhs' },
    { id: '10l-25l', name: '₹10 - 25 Lakhs' },
    { id: '25l-50l', name: '₹25 - 50 Lakhs' },
    { id: 'above-50l', name: 'Above ₹50 Lakhs' },
  ];

  // Loan products data
  const loanProducts = [
    {
      id: 1,
      name: 'SBI Home Loan',
      type: 'home',
      bank: 'State Bank of India',
      icon: <FaHome />,
      interestRate: '8.40% - 9.65%',
      processingFee: '0.35% + GST',
      maxAmount: '₹10 Crore',
      minAmount: '₹5 Lakhs',
      tenure: 'Upto 30 years',
      features: [
        'No prepayment charges',
        'Doorstep service available',
        'Balance transfer facility',
        'Top-up loan available'
      ],
      eligibility: 'Salaried/Self-employed with good CIBIL score',
      approvalTime: '3-7 working days',
      rating: 4.5,
      reviews: 2345,
      popular: true,
      offer: 'Processing fee waived for limited period',
    },
    {
      id: 2,
      name: 'HDFC Home Loan',
      type: 'home',
      bank: 'HDFC Bank',
      icon: <FaHome />,
      interestRate: '8.35% - 9.50%',
      processingFee: '0.50% + GST',
      maxAmount: '₹15 Crore',
      minAmount: '₹5 Lakhs',
      tenure: 'Upto 30 years',
      features: [
        'Quick approval process',
        'Flexible repayment options',
        'Joint loan facility',
        'Construction loan available'
      ],
      eligibility: 'Salaried/Self-employed with minimum 2 years experience',
      approvalTime: '2-5 working days',
      rating: 4.7,
      reviews: 3124,
      popular: true,
      offer: 'Special rates for women borrowers',
    },
    {
      id: 3,
      name: 'ICICI Home Loan',
      type: 'home',
      bank: 'ICICI Bank',
      icon: <FaHome />,
      interestRate: '8.45% - 9.75%',
      processingFee: '0.39% + GST',
      maxAmount: '₹10 Crore',
      minAmount: '₹5 Lakhs',
      tenure: 'Upto 30 years',
      features: [
        'Step-up repayment facility',
        'Overdraft facility available',
        'Free property valuation',
        'Online account management'
      ],
      eligibility: 'Salaried/Self-employed with regular income',
      approvalTime: '3-6 working days',
      rating: 4.3,
      reviews: 1876,
      popular: false,
      offer: 'Free legal and technical evaluation',
    },
    {
      id: 4,
      name: 'Axis Bank Car Loan',
      type: 'car',
      bank: 'Axis Bank',
      icon: <FaCar />,
      interestRate: '8.70% - 10.25%',
      processingFee: '0.99% + GST',
      maxAmount: '₹5 Crore',
      minAmount: '₹1 Lakh',
      tenure: 'Upto 7 years',
      features: [
        'New and used car loans',
        'Quick disbursal',
        'Zero foreclosure charges',
        'Flexible EMI options'
      ],
      eligibility: 'Salaried/Self-employed with good credit score',
      approvalTime: '24-48 hours',
      rating: 4.4,
      reviews: 1567,
      popular: true,
      offer: '80% financing on new cars',
    },
    {
      id: 5,
      name: 'HDFC Car Loan',
      type: 'car',
      bank: 'HDFC Bank',
      icon: <FaCar />,
      interestRate: '8.55% - 10.10%',
      processingFee: '0.50% + GST',
      maxAmount: '₹5 Crore',
      minAmount: '₹1 Lakh',
      tenure: 'Upto 7 years',
      features: [
        'Instant approval',
        'Minimal documentation',
        'Balance transfer facility',
        'Extended warranty options'
      ],
      eligibility: 'Salaried with minimum income ₹20,000/month',
      approvalTime: '24 hours',
      rating: 4.6,
      reviews: 2234,
      popular: true,
      offer: 'Special rates for electric vehicles',
    },
    {
      id: 6,
      name: 'ICICI Personal Loan',
      type: 'personal',
      bank: 'ICICI Bank',
      icon: <FaHeart />,
      interestRate: '10.50% - 14.50%',
      processingFee: '2.50% + GST',
      maxAmount: '₹50 Lakhs',
      minAmount: '₹50,000',
      tenure: 'Upto 5 years',
      features: [
        'Paperless application',
        'Instant disbursal',
        'Flexible repayment',
        'Part-payment allowed'
      ],
      eligibility: 'Salaried with minimum income ₹25,000/month',
      approvalTime: '2-4 hours',
      rating: 4.2,
      reviews: 3456,
      popular: true,
      offer: 'Special rates for existing customers',
    },
    {
      id: 7,
      name: 'HDFC Personal Loan',
      type: 'personal',
      bank: 'HDFC Bank',
      icon: <FaHeart />,
      interestRate: '10.25% - 14.25%',
      processingFee: '2.49% + GST',
      maxAmount: '₹40 Lakhs',
      minAmount: '₹50,000',
      tenure: 'Upto 5 years',
      features: [
        'Pre-approved offers',
        'No collateral required',
        'Flexible tenure',
        'Online tracking'
      ],
      eligibility: 'Salaried with minimum income ₹20,000/month',
      approvalTime: '4-6 hours',
      rating: 4.5,
      reviews: 2890,
      popular: false,
      offer: 'Zero processing fee for women',
    },
    {
      id: 8,
      name: 'SBI Education Loan',
      type: 'education',
      bank: 'State Bank of India',
      icon: <FaGraduationCap />,
      interestRate: '8.70% - 11.15%',
      processingFee: 'Nil',
      maxAmount: '₹1.5 Crore',
      minAmount: '₹50,000',
      tenure: 'Upto 15 years',
      features: [
        'Moratorium period available',
        'No collateral for loans upto ₹7.5 Lakhs',
        'Tax benefits under Section 80E',
        'Cover for tuition fees'
      ],
      eligibility: 'Student with admission to recognized course',
      approvalTime: '7-10 working days',
      rating: 4.6,
      reviews: 1678,
      popular: true,
      offer: 'Special rates for premier institutes',
    },
    {
      id: 9,
      name: 'Axis Bank Education Loan',
      type: 'education',
      bank: 'Axis Bank',
      icon: <FaGraduationCap />,
      interestRate: '8.90% - 11.50%',
      processingFee: '0.50% + GST',
      maxAmount: '₹1 Crore',
      minAmount: '₹50,000',
      tenure: 'Upto 15 years',
      features: [
        'Cover for tuition, hostel, books',
        'Pre-approval facility',
        'Flexible repayment options',
        'Co-borrower option available'
      ],
      eligibility: 'Student with confirmed admission',
      approvalTime: '5-8 working days',
      rating: 4.3,
      reviews: 987,
      popular: false,
      offer: 'No processing fee for top colleges',
    },
    {
      id: 10,
      name: 'Kotak Business Loan',
      type: 'business',
      bank: 'Kotak Mahindra Bank',
      icon: <FaBriefcase />,
      interestRate: '11.50% - 16.00%',
      processingFee: '1.50% + GST',
      maxAmount: '₹75 Lakhs',
      minAmount: '₹2 Lakhs',
      tenure: 'Upto 5 years',
      features: [
        'Unsecured business loans',
        'Minimal documentation',
        'Quick disbursal',
        'Flexible repayment'
      ],
      eligibility: 'Business with minimum 3 years vintage',
      approvalTime: '3-5 working days',
      rating: 4.1,
      reviews: 765,
      popular: true,
      offer: 'Special rates for MSMEs',
    },
    {
      id: 11,
      name: 'Muthoot Gold Loan',
      type: 'gold',
      bank: 'Muthoot Finance',
      icon: <FaGem />,
      interestRate: '7.50% - 12.00%',
      processingFee: '0.25% - 0.50%',
      maxAmount: '₹2 Crore',
      minAmount: '₹1,000',
      tenure: 'Upto 12 months',
      features: [
        'Instant loan against gold',
        'No income proof required',
        'Safe vault storage',
        'Part-release facility'
      ],
      eligibility: 'Anyone with gold ornaments/coins',
      approvalTime: '30 minutes',
      rating: 4.4,
      reviews: 4321,
      popular: true,
      offer: 'Lowest interest rates for first-time customers',
    },
    {
      id: 12,
      name: 'Bajaj Finserv Medical Loan',
      type: 'medical',
      bank: 'Bajaj Finserv',
      icon: <FaHospital />,
      interestRate: '12.00% - 18.00%',
      processingFee: '2.50% + GST',
      maxAmount: '₹25 Lakhs',
      minAmount: '₹50,000',
      tenure: 'Upto 5 years',
      features: [
        'Cover for medical emergencies',
        'Direct payment to hospital',
        'No collateral required',
        'Quick approval'
      ],
      eligibility: 'Salaried/Self-employed with good credit score',
      approvalTime: '24 hours',
      rating: 4.0,
      reviews: 654,
      popular: true,
      offer: '3 months EMI holiday',
    },
  ];

  // Calculate EMI
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const months = tenure * 12;
    
    if (ratePerMonth === 0) {
      return Math.round(principal / months);
    }
    
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / 
                (Math.pow(1 + ratePerMonth, months) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalInterest = (monthlyEMI * tenure * 12) - loanAmount;
  const totalPayment = monthlyEMI * tenure * 12;

  // Filter loans
  const filteredLoans = loanProducts.filter(loan => {
    const typeMatch = selectedLoanType === 'all' || loan.type === selectedLoanType;
    const searchMatch = loan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       loan.bank.toLowerCase().includes(searchQuery.toLowerCase());
    
    let amountMatch = true;
    if (selectedAmount !== 'all') {
      const maxAmount = parseInt(loan.maxAmount.replace(/[^0-9]/g, ''));
      switch(selectedAmount) {
        case 'upto-1l':
          amountMatch = maxAmount <= 1;
          break;
        case '1l-5l':
          amountMatch = maxAmount >= 1 && maxAmount <= 5;
          break;
        case '5l-10l':
          amountMatch = maxAmount >= 5 && maxAmount <= 10;
          break;
        case '10l-25l':
          amountMatch = maxAmount >= 10 && maxAmount <= 25;
          break;
        case '25l-50l':
          amountMatch = maxAmount >= 25 && maxAmount <= 50;
          break;
        case 'above-50l':
          amountMatch = maxAmount > 50;
          break;
        default:
          amountMatch = true;
      }
    }
    
    return typeMatch && searchMatch && amountMatch;
  }).sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'popularity':
        comparison = (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        break;
      case 'rating':
        comparison = b.rating - a.rating;
        break;
      case 'rate-low':
        const aRate = parseFloat(a.interestRate.split(' - ')[0]);
        const bRate = parseFloat(b.interestRate.split(' - ')[0]);
        comparison = aRate - bRate;
        break;
      case 'rate-high':
        const aRateHigh = parseFloat(a.interestRate.split(' - ')[0]);
        const bRateHigh = parseFloat(b.interestRate.split(' - ')[0]);
        comparison = bRateHigh - aRateHigh;
        break;
      default:
        comparison = 0;
    }
    return sortOrder === 'desc' ? comparison : -comparison;
  });

  // Get color class based on loan type
  const getTypeColor = (type) => {
    const loanType = loanTypes.find(t => t.id === type);
    return loanType?.color || 'blue';
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
       

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get the Best{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                  Loan
                </span>{' '}
                for Your Needs
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Compare loans from 20+ banks. Lowest interest rates, minimal documentation, 
                and quick approval tailored to your requirements.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="text"
                    placeholder="Search by loan type or bank..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer" onClick={() => handleNavigate('/contact', { source: 'stats_banks' })}>
                  <div className="text-3xl font-bold mb-1">20+</div>
                  <div className="text-sm opacity-80">Partner Banks</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer" onClick={() => handleNavigate('/contact', { source: 'stats_products' })}>
                  <div className="text-3xl font-bold mb-1">45+</div>
                  <div className="text-sm opacity-80">Loan Products</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer" onClick={() => handleNavigate('/contact', { source: 'stats_customers' })}>
                  <div className="text-3xl font-bold mb-1">5M+</div>
                  <div className="text-sm opacity-80">Happy Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer" onClick={() => handleNavigate('/contact', { source: 'stats_rates' })}>
                  <div className="text-3xl font-bold mb-1">8.4%</div>
                  <div className="text-sm opacity-80">Lowest Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Loan Type Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Popular Loan Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {loanTypes.filter(type => type.id !== 'all').map((type) => {
                const isActive = selectedLoanType === type.id;
                const colorClasses = {
                  blue: 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white',
                  green: 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white',
                  purple: 'bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white',
                  orange: 'bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white',
                  red: 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white',
                  yellow: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-600 hover:text-white',
                  teal: 'bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white',
                };
                
                return (
                  <button
                    key={type.id}
                    onClick={() => handleCategoryClick(type.id, type.name)}
                    className={`p-4 rounded-xl transition-all ${
                      isActive 
                        ? `bg-${type.color}-600 text-white shadow-lg scale-105` 
                        : colorClasses[type.color] || 'bg-gray-50 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-2xl mb-1 flex justify-center">{type.icon}</div>
                    <div className="text-xs font-medium">{type.name}</div>
                    <div className="text-xs opacity-75 mt-1">{type.count} loans</div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Filters and Calculator Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FaFilter className="text-blue-600" />
                Find Your Perfect Loan
              </h2>
              {(selectedLoanType !== 'all' || selectedAmount !== 'all' || searchQuery) && (
                <button 
                  onClick={() => {
                    setSelectedLoanType('all');
                    setSelectedAmount('all');
                    setSearchQuery('');
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  <FaTimes className="text-sm" />
                  Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Loan Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaUniversity className="text-blue-600" />
                  Loan Category
                </label>
                <select 
                  value={selectedLoanType}
                  onChange={(e) => setSelectedLoanType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {loanTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name} ({type.count})</option>
                  ))}
                </select>
              </div>

              {/* Amount Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaRupeeSign className="text-green-600" />
                  Loan Amount
                </label>
                <select 
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {amountRanges.map(range => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>

              {/* EMI Calculator Toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MdCalculate className="text-purple-600" />
                  EMI Calculator
                </label>
                <button 
                  onClick={() => setShowCalculator(!showCalculator)}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all ${
                    showCalculator 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {showCalculator ? 'Hide Calculator' : 'Calculate EMI'}
                </button>
              </div>
            </div>

            {/* EMI Calculator */}
            {showCalculator && (
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MdCalculate className="text-purple-600" />
                  EMI Calculator
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Loan Amount (₹)</label>
                    <input 
                      type="range" 
                      min="10000" 
                      max="10000000" 
                      step="10000" 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full"
                    />
                    <input 
                      type="number" 
                      value={loanAmount} 
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Interest Rate (%)</label>
                    <input 
                      type="range" 
                      min="5" 
                      max="20" 
                      step="0.1" 
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full"
                    />
                    <input 
                      type="number" 
                      step="0.1" 
                      value={interestRate} 
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Tenure (Years)</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="30" 
                      step="1" 
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full"
                    />
                    <input 
                      type="number" 
                      value={tenure} 
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 text-white cursor-pointer hover:shadow-lg transition-all" onClick={() => handleNavigate('/contact', { source: 'emi_calculator' })}>
                    <p className="text-sm opacity-90">Monthly EMI</p>
                    <p className="text-2xl font-bold">₹{monthlyEMI.toLocaleString()}</p>
                    <p className="text-xs opacity-75 mt-2">
                      Total Interest: ₹{totalInterest.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">{filteredLoans.length}</span>
              <span className="text-gray-600">loan options found</span>
            </div>
            <div className="flex items-center gap-2">
              <FaSort className="text-gray-400" />
              <select 
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="rate-low">Interest Rate: Low to High</option>
                <option value="rate-high">Interest Rate: High to Low</option>
              </select>
              <button 
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                {sortOrder === 'desc' ? <FaArrowDown /> : <FaArrowUp />}
              </button>
            </div>
          </div>

          {/* Loans Grid */}
          {filteredLoans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredLoans.map(loan => (
                <div key={loan.id} className="bg-white relative rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                  {/* Popular Badge */}
                  {loan.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
                      <FaFire /> Most Popular
                    </div>
                  )}

                 

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{loan.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{loan.bank}</p>

                    {/* Offer Badge */}
                    {loan.offer && (
                      <div className="bg-yellow-50 text-yellow-800 px-3 py-2 rounded-lg text-sm mb-4 flex items-center gap-2">
                        <FaTag className="text-yellow-600" />
                        {loan.offer}
                      </div>
                    )}

                    {/* Key Details */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <FaPercentage className="text-blue-500" /> Interest Rate
                        </p>
                        <p className="font-semibold text-gray-900">{loan.interestRate}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <FaRupeeSign className="text-green-500" /> Max Amount
                        </p>
                        <p className="font-semibold text-gray-900">{loan.maxAmount}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <FaCalendarAlt className="text-purple-500" /> Tenure
                        </p>
                        <p className="font-semibold text-gray-900">{loan.tenure}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <FaClock className="text-orange-500" /> Approval
                        </p>
                        <p className="font-semibold text-gray-900">{loan.approvalTime}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features</h4>
                      <ul className="space-y-1">
                        {loan.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                            <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                      <p className="text-xs text-gray-600 flex items-center gap-2">
                        <FaUser className="text-blue-600" />
                        {loan.eligibility}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0 flex gap-3">
                    <button 
                      onClick={() => handleApplyNow(loan.id, loan.name)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2"
                    >
                      Apply Now
                      <FaArrowRight />
                    </button>
                    <button 
                      onClick={() => handleDetails(loan.id, loan.name)}
                      className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg mb-12">
              <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No loans found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any loans matching your criteria. Try adjusting your filters.
              </p>
              <button 
                onClick={() => {
                  setSelectedLoanType('all');
                  setSelectedAmount('all');
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Us for Your Loan?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FaUniversity className="text-4xl text-blue-600" />, title: '20+ Partner Banks', desc: 'Compare loans from all major banks at one place' },
                { icon: <FaBolt className="text-4xl text-yellow-500" />, title: 'Quick Approval', desc: 'Get loan approval in as little as 24 hours' },
                { icon: <FaFileAlt className="text-4xl text-green-600" />, title: 'Minimal Documentation', desc: 'Digital documentation for hassle-free process' },
                { icon: <FaPercentage className="text-4xl text-purple-600" />, title: 'Best Interest Rates', desc: 'Get the most competitive rates in the market' },
                { icon: <FaHandshake className="text-4xl text-orange-600" />, title: 'Expert Guidance', desc: 'Dedicated relationship manager for assistance' },
                { icon: <FaShieldAlt className="text-4xl text-red-600" />, title: '100% Secure', desc: 'Your data is encrypted and protected' },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  onClick={() => handleNavigate('/contact', { source: `feature_${index}` })}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, icon: <FaSearch />, title: 'Compare Loans', desc: 'Browse and compare loans from multiple banks' },
                { step: 2, icon: <FaFileAlt />, title: 'Fill Application', desc: 'Complete simple online application form' },
                { step: 3, icon: <FaEnvelope />, title: 'Upload Documents', desc: 'Upload required documents digitally' },
                { step: 4, icon: <FaCheckCircle />, title: 'Get Approval', desc: 'Receive loan approval and disbursal' },
              ].map((step, index) => (
                <div 
                  key={index} 
                  onClick={() => handleNavigate('/contact', { source: `process_step_${step.step}` })}
                  className="relative bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  q: 'What documents are required for a loan?', 
                  a: 'Typically, you need ID proof, address proof, income proof (salary slips/IT returns), and bank statements. Requirements vary by loan type.' 
                },
                { 
                  q: 'How is my eligibility determined?', 
                  a: 'Eligibility is based on your income, credit score, age, employment type, and existing financial obligations.' 
                },
                { 
                  q: 'Can I prepay my loan?', 
                  a: 'Yes, most loans allow prepayment. Some lenders may charge a prepayment penalty. Check terms before applying.' 
                },
                { 
                  q: 'How long does loan approval take?', 
                  a: 'Approval time varies from 24 hours to 7 working days depending on loan type and lender\'s processes.' 
                },
              ].map((faq, index) => (
                <div 
                  key={index} 
                  onClick={() => handleNavigate('/contact', { source: `faq_${index}` })}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Loan?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Compare loans from top banks and get the best deal for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => handleNavigate('/contact', { source: 'cta_apply' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2"
              >
                Apply Now
                <FaArrowRight />
              </button>
              <button 
                onClick={handleTalkToExpert}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all inline-flex items-center gap-2"
              >
                <FaPhone /> Talk to Expert
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-2 hover:underline"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp: +91 98765 43210
              </button>
              <button 
                onClick={handleEmail}
                className="flex items-center gap-2 hover:underline"
              >
                <FaEnvelope className="text-xl" /> loans@fintechhub.com
              </button>
            </div>
          </section>
        </div>

        
        

       
      </div>
    </Wraper>
  );
};

export default Loan;