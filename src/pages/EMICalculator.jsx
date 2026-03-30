import React, { useState, useEffect } from 'react';
import Wraper from '../components/Architure/Wraper';
import { MdCastForEducation } from "react-icons/md";

import {
  FaCalculator,
  FaRupeeSign,
  FaPercentage,
  FaCalendarAlt,
  FaChartPie,
  FaChartLine,
  FaDownload,
  FaShare,
  FaPrint,
  FaHistory,
  FaSave,
  FaUndo,
  FaArrowRight,
  FaHome,
  FaCar,
  FaMobile,
  FaLaptop,
  FaBusinessTime,
  FaHeart,
  FaPlane,
  FaGem,
  FaQuestionCircle,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFilePdf,
  FaFileExcel,
  FaEnvelope,
  FaWhatsapp,
  FaTimes,
  FaEye,
  FaChevronDown
} from 'react-icons/fa';

const EMICalculator = () => {
  // State for calculator inputs
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [tenureType, setTenureType] = useState('years'); // 'years' or 'months'
  const [startDate, setStartDate] = useState('2026-03-01');
  const [prepaymentAmount, setPrepaymentAmount] = useState(0);
  const [prepaymentFrequency, setPrepaymentFrequency] = useState('none'); // 'none', 'monthly', 'yearly', 'one-time'
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState('calculator');
  const [selectedLoanType, setSelectedLoanType] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // State for calculation results
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [principalRatio, setPrincipalRatio] = useState(0);
  const [interestRatio, setInterestRatio] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);

  // Loan types presets
  const loanTypes = [
    { id: 'home', name: 'Home Loan', icon: <FaHome />, rate: 8.5, minAmount: 500000, maxAmount: 10000000, description: 'Best for buying or constructing a house' },
    { id: 'car', name: 'Car Loan', icon: <FaCar />, rate: 9.5, minAmount: 100000, maxAmount: 5000000, description: 'For purchasing new or used vehicles' },
    { id: 'personal', name: 'Personal Loan', icon: <FaHeart />, rate: 12.5, minAmount: 50000, maxAmount: 2500000, description: 'For any personal expenses or emergencies' },
    { id: 'education', name: 'Education Loan', icon: <MdCastForEducation />, rate: 10.5, minAmount: 100000, maxAmount: 5000000, description: 'For higher education in India or abroad' },
    { id: 'business', name: 'Business Loan', icon: <FaBusinessTime />, rate: 11.5, minAmount: 200000, maxAmount: 10000000, description: 'For business expansion or working capital' },
    { id: 'gold', name: 'Gold Loan', icon: <FaGem />, rate: 7.5, minAmount: 10000, maxAmount: 2000000, description: 'Loan against gold ornaments' },
    { id: 'mobile', name: 'Mobile Loan', icon: <FaMobile />, rate: 15.5, minAmount: 5000, maxAmount: 150000, description: 'For purchasing smartphones' },
    { id: 'laptop', name: 'Laptop Loan', icon: <FaLaptop />, rate: 14.5, minAmount: 10000, maxAmount: 300000, description: 'For purchasing laptops and computers' },
    { id: 'travel', name: 'Travel Loan', icon: <FaPlane />, rate: 13.5, minAmount: 25000, maxAmount: 500000, description: 'For holiday and travel expenses' }
  ];

  // Get current loan type details
  const currentLoanType = loanTypes.find(type => type.id === selectedLoanType) || loanTypes[0];

  // Calculate EMI whenever inputs change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure, tenureType, prepaymentAmount, prepaymentFrequency]);

  const calculateEMI = () => {
    // Convert tenure to months
    let tenureInMonths = tenureType === 'years' ? loanTenure * 12 : loanTenure;

    // Monthly interest rate
    const monthlyRate = interestRate / (12 * 100);

    // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    let emiValue;
    if (monthlyRate === 0) {
      emiValue = loanAmount / tenureInMonths;
    } else {
      emiValue = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
        (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
    }
    setEmi(emiValue);

    // Calculate totals
    const totalPaymentValue = emiValue * tenureInMonths;
    const totalInterestValue = totalPaymentValue - loanAmount;

    setTotalPayment(totalPaymentValue);
    setTotalInterest(totalInterestValue);
    setPrincipalRatio((loanAmount / totalPaymentValue) * 100);
    setInterestRatio((totalInterestValue / totalPaymentValue) * 100);

    // Generate amortization schedule
    generateAmortizationSchedule(loanAmount, monthlyRate, tenureInMonths, emiValue);
  };

  const generateAmortizationSchedule = (principal, monthlyRate, months, emiValue) => {
    let schedule = [];
    let yearlyData = [];
    let remainingPrincipal = principal;
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;
    let currentYear = 1;

    for (let i = 1; i <= months; i++) {
      const interestForMonth = remainingPrincipal * monthlyRate;
      const principalForMonth = emiValue - interestForMonth;

      if (i === 1 || i % 12 === 1) {
        if (i > 1) {
          yearlyData.push({
            year: currentYear,
            principal: yearlyPrincipal,
            interest: yearlyInterest,
            total: yearlyPrincipal + yearlyInterest,
            remainingBalance: remainingPrincipal
          });
          yearlyPrincipal = 0;
          yearlyInterest = 0;
          currentYear++;
        }
      }

      yearlyPrincipal += principalForMonth;
      yearlyInterest += interestForMonth;

      schedule.push({
        month: i,
        date: new Date(new Date(startDate).setMonth(new Date(startDate).getMonth() + i - 1)).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
        openingBalance: remainingPrincipal,
        emi: emiValue,
        principal: principalForMonth,
        interest: interestForMonth,
        closingBalance: remainingPrincipal - principalForMonth
      });

      remainingPrincipal -= principalForMonth;
    }

    // Add last year's data
    if (yearlyPrincipal > 0 || yearlyInterest > 0) {
      yearlyData.push({
        year: currentYear,
        principal: yearlyPrincipal,
        interest: yearlyInterest,
        total: yearlyPrincipal + yearlyInterest,
        remainingBalance: 0
      });
    }

    setAmortizationSchedule(schedule);
    setYearlyBreakdown(yearlyData);
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Format number with commas
  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-IN').format(value);
  };

  // Handle loan type change from dropdown
  const handleLoanTypeSelect = (type) => {
    setSelectedLoanType(type.id);
    setInterestRate(type.rate);
    setIsDropdownOpen(false);

    // Adjust loan amount if outside min/max range
    if (loanAmount < type.minAmount) {
      setLoanAmount(type.minAmount);
    } else if (loanAmount > type.maxAmount) {
      setLoanAmount(type.maxAmount);
    }
  };

  // Reset calculator
  const resetCalculator = () => {
    setLoanAmount(1000000);
    setInterestRate(8.5);
    setLoanTenure(5);
    setTenureType('years');
    setStartDate('2026-03-01');
    setPrepaymentAmount(0);
    setPrepaymentFrequency('none');
    setSelectedLoanType('home');
  };

  // Download as PDF (mock function)
  const downloadPDF = () => {
    alert('Downloading EMI schedule as PDF...');
  };

  // Share via WhatsApp (mock function)
  const shareViaWhatsApp = () => {
    const text = `My EMI Calculation:\nLoan Amount: ${formatCurrency(loanAmount)}\nInterest Rate: ${interestRate}%\nTenure: ${loanTenure} ${tenureType}\nMonthly EMI: ${formatCurrency(emi)}\nTotal Interest: ${formatCurrency(totalInterest)}\nTotal Payment: ${formatCurrency(totalPayment)}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  // Handle calculate button click
  const handleCalculate = () => {
    calculateEMI();
    setShowModal(true);
  };

  return (
    <Wraper>
      <div className="emi-calculator-page bg-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold mb-4">EMI Calculator</h1>
                <p className="text-xl text-blue-100 max-w-2xl">
                  Calculate your loan EMI, total interest, and amortization schedule instantly
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={resetCalculator}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
                >
                  <FaUndo /> Reset
                </button>
                <button
                  onClick={downloadPDF}
                  className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload /> Save
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Loan Type Dropdown */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Select Loan Type</h2>

            {/* Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border-2 border-gray-200 rounded-xl px-6 py-4 text-left flex items-center justify-between hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-blue-600">{currentLoanType.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{currentLoanType.name}</p>
                    <p className="text-sm text-gray-500">{currentLoanType.description}</p>
                  </div>
                </div>
                <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-96 overflow-y-auto">
                  {loanTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleLoanTypeSelect(type)}
                      className={`w-full px-6 py-4 text-left flex items-center gap-3 hover:bg-blue-50 transition-all duration-200 border-b border-gray-100 last:border-0 ${selectedLoanType === type.id ? 'bg-blue-50' : ''
                        }`}
                    >
                      <span className={`text-2xl ${selectedLoanType === type.id ? 'text-blue-600' : 'text-gray-600'}`}>
                        {type.icon}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className={`font-semibold ${selectedLoanType === type.id ? 'text-blue-600' : 'text-gray-800'}`}>
                            {type.name}
                          </p>
                          <p className="text-sm font-bold text-blue-600">{type.rate}% p.a.</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                        <div className="flex gap-3 mt-1 text-xs text-gray-400">
                          <span>Min: {formatCurrency(type.minAmount)}</span>
                          <span>Max: {formatCurrency(type.maxAmount)}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Loan Type Info */}
            <div className="mt-4 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="text-2xl text-blue-600">{currentLoanType.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{currentLoanType.name} Details</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Interest Rate: <strong className="text-blue-600">{currentLoanType.rate}% p.a.</strong> |
                    Loan Range: <strong>{formatCurrency(currentLoanType.minAmount)} - {formatCurrency(currentLoanType.maxAmount)}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calculator Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
            <div className="grid lg:grid-cols-2">
              {/* Input Section */}
              <div className="p-8 border-r border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <MdCastForEducation className="text-blue-600" />
                  Loan Details
                </h2>

                {/* Loan Amount */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FaRupeeSign className="text-blue-600" />
                    Loan Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>Min: {formatCurrency(currentLoanType.minAmount)}</span>
                    <span>Max: {formatCurrency(currentLoanType.maxAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min={currentLoanType.minAmount}
                    max={currentLoanType.maxAmount}
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Interest Rate */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FaPercentage className="text-blue-600" />
                    Interest Rate (% p.a.)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Base rate for {currentLoanType.name}: {currentLoanType.rate}% p.a.
                  </p>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Loan Tenure */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-600" />
                    Loan Tenure
                  </label>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="number"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTenureType('years')}
                        className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${tenureType === 'years'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                      >
                        Years
                      </button>
                      <button
                        onClick={() => setTenureType('months')}
                        className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${tenureType === 'months'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                      >
                        Months
                      </button>
                    </div>
                  </div>
                </div>

                {/* Start Date */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-600" />
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Advanced Options Toggle */}
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mb-4"
                >
                  <FaInfoCircle />
                  {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
                </button>

                {/* Advanced Options */}
                {showAdvanced && (
                  <div className="space-y-6 p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-gray-700">Prepayment Options</h3>

                    {/* Prepayment Amount */}
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Prepayment Amount (₹)</label>
                      <input
                        type="number"
                        value={prepaymentAmount}
                        onChange={(e) => setPrepaymentAmount(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Prepayment Frequency */}
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Prepayment Frequency</label>
                      <select
                        value={prepaymentFrequency}
                        onChange={(e) => setPrepaymentFrequency(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="none">No Prepayment</option>
                        <option value="one-time">One Time</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Calculate Button */}
                <button
                  onClick={handleCalculate}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 mt-6"
                >
                  <FaEye /> Calculate & View Details
                </button>
              </div>

              {/* Results Section */}
              <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your EMI Summary</h2>

                {/* EMI Amount */}
                <div className="text-center mb-8">
                  <p className="text-gray-600 mb-2">Monthly EMI</p>
                  <p className="text-5xl font-bold text-blue-600">{formatCurrency(emi)}</p>
                  <p className="text-sm text-gray-500 mt-2">For {tenureType === 'years' ? loanTenure * 12 : loanTenure} months</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Principal Amount</p>
                    <p className="text-xl font-bold text-gray-800">{formatCurrency(loanAmount)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Total Interest</p>
                    <p className="text-xl font-bold text-orange-600">{formatCurrency(totalInterest)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Total Payment</p>
                    <p className="text-xl font-bold text-gray-800">{formatCurrency(totalPayment)}</p>
                  </div>

                </div>


                {/* Action Buttons */}
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={shareViaWhatsApp}
                    className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp /> Share
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <FaSave /> Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">EMI Calculation Details</h2>
                    <p className="text-gray-500 text-sm mt-1">Complete loan summary and breakdown</p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">Monthly EMI</p>
                      <p className="text-2xl font-bold text-blue-600">{formatCurrency(emi)}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">Principal Amount</p>
                      <p className="text-2xl font-bold text-green-600">{formatCurrency(loanAmount)}</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">Total Interest</p>
                      <p className="text-2xl font-bold text-orange-600">{formatCurrency(totalInterest)}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">Total Amount</p>
                      <p className="text-2xl font-bold text-purple-600">{formatCurrency(totalPayment)}</p>
                    </div>
                  </div>

                  {/* Loan Details */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaInfoCircle className="text-blue-600" />
                      Loan Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Loan Type:</span>
                        <span className="font-semibold text-gray-800 capitalize flex items-center gap-2">
                          {currentLoanType.icon}
                          {currentLoanType.name}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="font-semibold text-gray-800">{interestRate}% p.a.</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Tenure:</span>
                        <span className="font-semibold text-gray-800">{loanTenure} {tenureType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="font-semibold text-gray-800">{new Date(startDate).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">End Date:</span>
                        <span className="font-semibold text-gray-800">{amortizationSchedule[amortizationSchedule.length - 1]?.date || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Total Months:</span>
                        <span className="font-semibold text-gray-800">{tenureType === 'years' ? loanTenure * 12 : loanTenure} months</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Breakdown */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaChartPie className="text-blue-600" />
                      Payment Breakdown
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Principal Amount</span>
                          <span className="font-semibold text-gray-800">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: `${principalRatio}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Total Interest</span>
                          <span className="font-semibold text-gray-800">{formatCurrency(totalInterest)}</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: `${interestRatio}%` }}></div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-base">
                          <span className="font-semibold text-gray-800">Total Payment:</span>
                          <span className="font-bold text-blue-600 text-xl">{formatCurrency(totalPayment)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Yearly Summary */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-600" />
                      Year-wise Payment Summary
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left p-3 text-gray-600 font-medium">Year</th>
                            <th className="text-left p-3 text-gray-600 font-medium">Principal Paid</th>
                            <th className="text-left p-3 text-gray-600 font-medium">Interest Paid</th>
                            <th className="text-left p-3 text-gray-600 font-medium">Total Paid</th>
                            <th className="text-left p-3 text-gray-600 font-medium">Remaining Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {yearlyBreakdown.map((year, index) => (
                            <tr key={index} className="border-t border-gray-200">
                              <td className="p-3 font-medium text-gray-800">Year {year.year}</td>
                              <td className="p-3 text-gray-600">{formatCurrency(year.principal)}</td>
                              <td className="p-3 text-gray-600">{formatCurrency(year.interest)}</td>
                              <td className="p-3 text-gray-600">{formatCurrency(year.total)}</td>
                              <td className="p-3 text-gray-600">{formatCurrency(year.remainingBalance)}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="bg-blue-50">
                          <tr>
                            <td className="p-3 font-bold text-gray-800">Total</td>
                            <td className="p-3 font-bold text-blue-600">{formatCurrency(loanAmount)}</td>
                            <td className="p-3 font-bold text-orange-600">{formatCurrency(totalInterest)}</td>
                            <td className="p-3 font-bold text-gray-800">{formatCurrency(totalPayment)}</td>
                            <td className="p-3"></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      Key Insights & Recommendations
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Your monthly EMI is <strong>{formatCurrency(emi)}</strong>, which is {((emi / loanAmount) * 100).toFixed(1)}% of your loan amount</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaExclamationTriangle className="text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">You will pay <strong className="text-orange-600">{formatCurrency(totalInterest)}</strong> as interest, which is <strong>{(interestRatio).toFixed(1)}%</strong> of your total payment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaInfoCircle className="text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Your loan will be fully repaid by <strong>{amortizationSchedule[amortizationSchedule.length - 1]?.date}</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCalculator className="text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Total number of EMIs: <strong>{tenureType === 'years' ? loanTenure * 12 : loanTenure}</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={shareViaWhatsApp}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <FaWhatsapp /> Share
                  </button>
                  <button
                    onClick={downloadPDF}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <FaDownload /> Download Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wraper>
  );
};

export default EMICalculator;