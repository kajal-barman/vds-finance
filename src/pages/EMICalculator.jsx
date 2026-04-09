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
  FaChevronDown,
  FaExchangeAlt,
  FaHandHoldingUsd
} from 'react-icons/fa';

const CombinedLoanCalculator = () => {
  // Tab state
  const [activeMainTab, setActiveMainTab] = useState('emi'); // 'emi' or 'foreclosure'

  // ==================== EMI CALCULATOR STATE ====================
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [tenureType, setTenureType] = useState('years');
  const [startDate, setStartDate] = useState('2026-03-01');
  const [prepaymentAmount, setPrepaymentAmount] = useState(0);
  const [prepaymentFrequency, setPrepaymentFrequency] = useState('none');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState('home');
  const [showModal, setShowModal] = useState(false);

  // EMI Results state
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [principalRatio, setPrincipalRatio] = useState(0);
  const [interestRatio, setInterestRatio] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);

  // ==================== FORECLOSURE/BALANCE TRANSFER STATE ====================
  const [principalFc, setPrincipalFc] = useState(0);
  const [rateFc, setRateFc] = useState(11);
  const [yearsFc, setYearsFc] = useState(5);
  const [monthsElapsed, setMonthsElapsed] = useState(24);
  const [btRate, setBtRate] = useState(4.5);
  const [gstPercent, setGstPercent] = useState(18);

  // Foreclosure Results state
  const [emiFc, setEmiFc] = useState(0);
  const [totalLoanAmountFc, setTotalLoanAmountFc] = useState(0);
  const [pendingMonths, setPendingMonths] = useState(0);
  const [pendingYears, setPendingYears] = useState(0);
  const [remainingPrincipal, setRemainingPrincipal] = useState(0);
  const [btProcessingFee, setBtProcessingFee] = useState(0);
  const [btGstAmount, setBtGstAmount] = useState(0);
  const [btTotalAmount, setBtTotalAmount] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalInterestToPay, setTotalInterestToPay] = useState(0);
  const [savingsAmount, setSavingsAmount] = useState(0);
  const [totalRemainingPayout, setTotalRemainingPayout] = useState(0);

  // Loan types presets for EMI calculator
  const loanTypes = [
    { id: 'home', name: 'Home Loan', icon: <FaHome />, rate: 8.5, minAmount: 500000, maxAmount: 10000000, description: 'Best for buying or constructing a house' },
    { id: 'car', name: 'Car Loan', icon: <FaCar />, rate: 9.5, minAmount: 100000, maxAmount: 5000000, description: 'For purchasing new or used vehicles' },
    { id: 'personal', name: 'Personal Loan', icon: <FaHeart />, rate: 12.5, minAmount: 50000, maxAmount: 2500000, description: 'For any personal expenses or emergencies' },
    // { id: 'education', name: 'Education Loan', icon: <MdCastForEducation />, rate: 10.5, minAmount: 100000, maxAmount: 5000000, description: 'For higher education in India or abroad' },
    { id: 'business', name: 'Business Loan', icon: <FaBusinessTime />, rate: 11.5, minAmount: 200000, maxAmount: 10000000, description: 'For business expansion or working capital' },
    // { id: 'gold', name: 'Gold Loan', icon: <FaGem />, rate: 7.5, minAmount: 10000, maxAmount: 2000000, description: 'Loan against gold ornaments' },
  ];

  const currentLoanType = loanTypes.find(type => type.id === selectedLoanType) || loanTypes[0];

  // ==================== EMI CALCULATIONS ====================
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure, tenureType, prepaymentAmount, prepaymentFrequency]);

  // ==================== FORECLOSURE CALCULATIONS ====================
  useEffect(() => {
    calculateForeclosureDetails();
  }, [principalFc, rateFc, yearsFc, monthsElapsed, btRate, gstPercent]);

  const calculateEMI = () => {
    let tenureInMonths = tenureType === 'years' ? loanTenure * 12 : loanTenure;
    const monthlyRate = interestRate / (12 * 100);

    let emiValue;
    if (monthlyRate === 0) {
      emiValue = loanAmount / tenureInMonths;
    } else {
      emiValue = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
        (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
    }
    setEmi(emiValue);

    const totalPaymentValue = emiValue * tenureInMonths;
    const totalInterestValue = totalPaymentValue - loanAmount;

    setTotalPayment(totalPaymentValue);
    setTotalInterest(totalInterestValue);
    setPrincipalRatio((loanAmount / totalPaymentValue) * 100);
    setInterestRatio((totalInterestValue / totalPaymentValue) * 100);

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

  const calculateForeclosureDetails = () => {
    const monthlyRate = rateFc / 100 / 12;
    const totalMonths = yearsFc * 12;
    const elapsedMonths = Math.min(monthsElapsed, totalMonths);
    const remainingMonthsCount = totalMonths - elapsedMonths;

    let emiValue = 0;
    if (monthlyRate > 0 && principalFc > 0) {
      emiValue = principalFc * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else if (monthlyRate === 0) {
      emiValue = principalFc / totalMonths;
    }
    const roundedEmi = Math.round(emiValue);
    setEmiFc(roundedEmi);

    let remainingPrincipalValue = principalFc;
    let totalInterestPaidValue = 0;

    if (elapsedMonths > 0 && roundedEmi > 0) {
      let balance = principalFc;
      let totalInterest = 0;
      for (let i = 0; i < elapsedMonths; i++) {
        const interestForMonth = balance * monthlyRate;
        const principalPaid = roundedEmi - interestForMonth;
        totalInterest += interestForMonth;
        balance -= principalPaid;
        if (balance < 0) balance = 0;
      }
      remainingPrincipalValue = Math.max(0, balance);
      totalInterestPaidValue = totalInterest;
    }

    let futureInterest = 0;
    let tempBalance = remainingPrincipalValue;
    for (let i = 0; i < remainingMonthsCount && tempBalance > 0; i++) {
      const interestForMonth = tempBalance * monthlyRate;
      futureInterest += interestForMonth;
      const principalPaid = roundedEmi - interestForMonth;
      tempBalance -= principalPaid;
      if (tempBalance < 0) tempBalance = 0;
    }

    const roundedRemainingPrincipal = Math.round(remainingPrincipalValue);
    const totalRemainingPayoutValue = remainingMonthsCount * roundedEmi;

    setRemainingPrincipal(roundedRemainingPrincipal);
    setTotalInterestPaid(Math.round(totalInterestPaidValue));
    setTotalInterestToPay(Math.round(futureInterest));
    setPendingMonths(remainingMonthsCount);
    setPendingYears(Math.floor(remainingMonthsCount / 12));
    setTotalRemainingPayout(totalRemainingPayoutValue);

    const processingFeeAmount = roundedRemainingPrincipal * (btRate / 100);
    const gstAmount = processingFeeAmount * (gstPercent / 100);
    const totalBtFee = processingFeeAmount + gstAmount;

    setBtProcessingFee(Math.round(processingFeeAmount));
    setBtGstAmount(Math.round(gstAmount));
    const btTotal = roundedRemainingPrincipal + totalBtFee;
    setBtTotalAmount(Math.round(btTotal));

    const savings = totalRemainingPayoutValue - btTotal;
    setSavingsAmount(Math.round(Math.max(0, savings)));

    setTotalLoanAmountFc(principalFc);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-IN').format(value);
  };

  const resetEMICalculator = () => {
    setLoanAmount(0);
    setInterestRate(8.5);
    setLoanTenure(5);
    setTenureType('years');
    setStartDate('2026-03-01');
    setPrepaymentAmount(0);
    setPrepaymentFrequency('none');
    setSelectedLoanType('home');
  };

  const resetForeclosureCalculator = () => {
    setPrincipalFc(0);
    setRateFc(11);
    setYearsFc(5);
    setMonthsElapsed(24);
    setBtRate(4.5);
    setGstPercent(18);
  };

  const handleLoanTypeSelect = (type) => {
    setSelectedLoanType(type.id);
    setInterestRate(type.rate);
    if (loanAmount < type.minAmount) {
      setLoanAmount(type.minAmount);
    } else if (loanAmount > type.maxAmount) {
      setLoanAmount(type.maxAmount);
    }
  };

  const downloadPDF = () => {
    alert('Downloading report as PDF...');
  };

  const shareViaWhatsApp = () => {
    if (activeMainTab === 'emi') {
      const text = `My EMI Calculation:\nLoan Amount: ${formatCurrency(loanAmount)}\nInterest Rate: ${interestRate}%\nTenure: ${loanTenure} ${tenureType}\nMonthly EMI: ${formatCurrency(emi)}\nTotal Interest: ${formatCurrency(totalInterest)}\nTotal Payment: ${formatCurrency(totalPayment)}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    } else {
      const text = `Foreclosure Analysis:\nOutstanding Principal: ${formatCurrency(remainingPrincipal)}\nProcessing Fee: ${btRate}% + ${gstPercent}% GST\nTotal BT Amount: ${formatCurrency(btTotalAmount)}\nSavings: ${formatCurrency(savingsAmount)}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    }
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Loan Management Suite</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                EMI Calculator | Balance Transfer & Foreclosure Analysis
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveMainTab('emi')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-md ${activeMainTab === 'emi'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
            >
              <FaCalculator className="text-xl" />
              EMI Calculator
            </button>
            <button
              onClick={() => setActiveMainTab('foreclosure')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-md ${activeMainTab === 'foreclosure'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
            >
              <FaExchangeAlt className="text-xl" />
              Balance Transfer & Foreclosure
            </button>
          </div>

          {/* EMI CALCULATOR TAB */}
          {activeMainTab === 'emi' && (
            <div className="animate-fadeIn">
              {/* Loan Type Selection Row - Horizontal Scrollable Cards */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Select Loan Type</h2>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {loanTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleLoanTypeSelect(type)}
                      className={`flex-shrink-0 w-48 p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                        selectedLoanType === type.id
                          ? 'bg-blue-50 border-blue-500 shadow-md transform scale-105'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <span className={`text-3xl mb-2 ${selectedLoanType === type.id ? 'text-blue-600' : 'text-gray-600'}`}>
                          {type.icon}
                        </span>
                        <p className={`font-semibold ${selectedLoanType === type.id ? 'text-blue-600' : 'text-gray-800'}`}>
                          {type.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                        <p className="text-sm font-bold text-blue-600 mt-2">{type.rate}% p.a.</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Calculator Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
                <div className="grid lg:grid-cols-2">
                  {/* Input Section */}
                  <div className="p-8 border-r border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <FaCalculator className="text-blue-600" />
                      Loan Details
                    </h2>

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

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                        <FaPercentage className="text-blue-600" />
                        Interest Rate (% p.a.)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
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

                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                    >
                      <FaEye /> View Full Details & Schedule
                    </button>

                    <button
                      onClick={resetEMICalculator}
                      className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaUndo /> Reset
                    </button>
                  </div>

                  {/* Results Section */}
                  <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Your EMI Summary</h2>

                    <div className="text-center mb-8">
                      <p className="text-gray-600 mb-2">Monthly EMI</p>
                      <p className="text-5xl font-bold text-blue-600">{formatCurrency(emi)}</p>
                      <p className="text-sm text-gray-500 mt-2">For {tenureType === 'years' ? loanTenure * 12 : loanTenure} months</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <p className="text-gray-500 text-sm mb-1">Principal Amount</p>
                        <p className="text-xl font-bold text-gray-800">{formatCurrency(loanAmount)}</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <p className="text-gray-500 text-sm mb-1">Total Interest</p>
                        <p className="text-xl font-bold text-orange-600">{formatCurrency(totalInterest)}</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm col-span-2">
                        <p className="text-gray-500 text-sm mb-1">Total Payment</p>
                        <p className="text-xl font-bold text-gray-800">{formatCurrency(totalPayment)}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={shareViaWhatsApp}
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp /> Share
                      </button>
                      <button
                        onClick={downloadPDF}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaDownload /> Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FORECLOSURE / BALANCE TRANSFER TAB */}
          {activeMainTab === 'foreclosure' && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Input Forms */}
                <div className="space-y-6">
                  {/* Current Loan Details Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">📋</span>
                        <h3 className="text-xl font-semibold text-white">Current Loan Details</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount (₹)</label>
                        <input
                          type="number"
                          value={principalFc}
                          onChange={(e) => setPrincipalFc(Number(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          step="10000"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (% per annum)</label>
                        <input
                          type="number"
                          value={rateFc}
                          onChange={(e) => setRateFc(Number(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          step="0.1"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Tenure (Years)</label>
                        <input
                          type="number"
                          value={yearsFc}
                          onChange={(e) => setYearsFc(Number(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          step="1"
                          min="1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Months Already Paid</label>
                        <input
                          type="number"
                          value={monthsElapsed}
                          onChange={(e) => setMonthsElapsed(Number(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          step="1"
                          min="0"
                          max={yearsFc * 12}
                        />
                        <p className="text-xs text-gray-500 mt-1">Total tenure: {yearsFc * 12} months</p>
                      </div>
                    </div>
                  </div>

                  {/* Balance Transfer Settings Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🔄</span>
                        <h3 className="text-xl font-semibold text-white">Balance Transfer Charges</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Processing Fee (% of Outstanding)</label>
                        <input
                          type="number"
                          value={btRate}
                          onChange={(e) => setBtRate(Number(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          step="0.1"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">GST on Processing Fee (%)</label>
                        <input
                          type="number"
                          value={gstPercent}
                          onChange={(e) => setGstPercent(Number(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          step="1"
                          min="0"
                        />
                      </div>
                      <button
                        onClick={resetForeclosureCalculator}
                        className="w-full mt-4 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaUndo /> Reset
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div className="space-y-6">
                  {/* Current Loan Status Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">📊</span>
                        <h3 className="text-xl font-semibold text-white">Current Loan Status</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">EMI (per month)</span>
                        <span className="text-xl font-bold text-blue-600">{formatCurrency(emiFc)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Total Loan Amount</span>
                        <span className="text-lg font-semibold text-gray-800">{formatCurrency(totalLoanAmountFc)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Interest Paid Till Date</span>
                        <span className="text-lg font-semibold text-gray-800">{formatCurrency(totalInterestPaid)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 bg-yellow-50 rounded-lg px-3 -mx-3">
                        <span className="text-gray-700 font-semibold">⏳ Pending Tenure</span>
                        <span className="text-lg font-bold text-yellow-700">
                          {pendingMonths} months ({pendingYears} years {pendingMonths % 12} months)
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 bg-blue-50 rounded-lg px-3 -mx-3">
                        <span className="text-gray-700 font-semibold">💰 Remaining Principal</span>
                        <span className="text-lg font-bold text-blue-700">{formatCurrency(remainingPrincipal)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Total Remaining Payout</span>
                        <span className="text-lg font-semibold text-gray-800">{formatCurrency(totalRemainingPayout)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Balance Transfer Analysis Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">⚡</span>
                        <h3 className="text-xl font-semibold text-white">Balance Transfer Analysis</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Outstanding Principal</span>
                        <span className="text-lg font-semibold text-gray-800">{formatCurrency(remainingPrincipal)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Processing Fee ({btRate}%)</span>
                        <span className="text-lg font-semibold text-gray-800">{formatCurrency(btProcessingFee)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">GST ({gstPercent}%)</span>
                        <span className="text-lg font-semibold text-gray-800">{formatCurrency(btGstAmount)}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 bg-purple-50 rounded-lg px-4 -mx-4 mt-2">
                        <span className="text-purple-700 font-bold">🔁 Total BT Amount</span>
                        <span className="text-2xl font-bold text-purple-700">{formatCurrency(btTotalAmount)}</span>
                      </div>

                      {savingsAmount > 0 && (
                        <div className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 shadow-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl">💰</span>
                            <div className="flex-1">
                              <p className="text-white text-sm">Estimated Savings by Balance Transfer</p>
                              <p className="text-white text-3xl font-bold">{formatCurrency(savingsAmount)}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {savingsAmount <= 0 && remainingPrincipal > 0 && (
                        <div className="mt-4 bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">⚠️</span>
                            <p className="text-red-700 text-sm font-medium">
                              Balance Transfer may not save money in this scenario.
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3 mt-4">
                        <button
                          onClick={shareViaWhatsApp}
                          className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaWhatsapp /> Share
                        </button>
                        <button
                          onClick={downloadPDF}
                          className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaDownload /> Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* EMI Modal - Only shown when active tab is emi and modal is open */}
        {activeMainTab === 'emi' && showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">EMI Calculation Details</h2>
                  <p className="text-gray-500 text-sm mt-1">Complete loan summary and amortization schedule</p>
                </div>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <div className="p-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                    </table>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                <button onClick={() => setShowModal(false)} className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Close
                </button>
                <button onClick={shareViaWhatsApp} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2">
                  <FaWhatsapp /> Share
                </button>
                <button onClick={downloadPDF} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <FaDownload /> Download Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        /* Custom scrollbar for loan type row */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </Wraper>
  );
};

export default CombinedLoanCalculator;