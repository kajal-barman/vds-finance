import React, { useState, useEffect } from 'react';
import Wraper from '../components/Architure/Wraper';

const ForecloserCalculator = () => {
  // State for loan inputs
  const [principal, setPrincipal] = useState(500000); // 5 Lakhs
  const [rate, setRate] = useState(11); // 11%
  const [years, setYears] = useState(5); // 5 years
  const [monthsElapsed, setMonthsElapsed] = useState(0); // Months already paid

  // Balance Transfer parameters
  const [btRate, setBtRate] = useState(4.5); // 4.5% + GST
  const [gstPercent, setGstPercent] = useState(18); // 18% GST on processing fee

  // Results state
  const [emi, setEmi] = useState(0);
  const [totalLoanAmount, setTotalLoanAmount] = useState(0);
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

  // Calculate EMI and remaining details whenever inputs change
  useEffect(() => {
    calculateLoanDetails();
  }, [principal, rate, years, monthsElapsed, btRate, gstPercent]);

  const calculateLoanDetails = () => {
    // Convert annual rate to monthly
    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;
    const elapsedMonths = Math.min(monthsElapsed, totalMonths);
    const remainingMonthsCount = totalMonths - elapsedMonths;

    // Calculate EMI using standard formula
    let emiValue = 0;
    if (monthlyRate > 0 && principal > 0) {
      emiValue = principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else if (monthlyRate === 0) {
      emiValue = principal / totalMonths;
    }
    const roundedEmi = Math.round(emiValue);
    setEmi(roundedEmi);

    // Calculate remaining principal after elapsed months
    let remainingPrincipalValue = principal;
    let totalInterestPaidValue = 0;

    if (elapsedMonths > 0 && roundedEmi > 0) {
      let balance = principal;
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

    // Calculate future interest if continue with current loan
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

    // Calculate Balance Transfer details
    const processingFeeAmount = roundedRemainingPrincipal * (btRate / 100);
    const gstAmount = processingFeeAmount * (gstPercent / 100);
    const totalBtFee = processingFeeAmount + gstAmount;

    setBtProcessingFee(Math.round(processingFeeAmount));
    setBtGstAmount(Math.round(gstAmount));
    const btTotal = roundedRemainingPrincipal + totalBtFee;
    setBtTotalAmount(Math.round(btTotal));

    // Calculate savings: Total remaining to pay with current loan vs BT amount
    const savings = totalRemainingPayoutValue - btTotal;
    setSavingsAmount(Math.round(Math.max(0, savings)));

    setTotalLoanAmount(principal);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-1 shadow-lg">
              <div className="bg-white rounded-lg px-8 py-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  🏦 Loan Balance Transfer Calculator
                </h1>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-lg">
              Calculate savings & BT charges | {btRate}% + {gstPercent}% GST processing fee
            </p>
          </div>

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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Loan Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      step="10000"
                      min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Example: 500000 for ₹5 Lakh</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Interest Rate (% per annum)
                    </label>
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      step="0.1"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Loan Tenure (Years)
                    </label>
                    <input
                      type="number"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      step="1"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Months Already Paid
                    </label>
                    <input
                      type="number"
                      value={monthsElapsed}
                      onChange={(e) => setMonthsElapsed(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      step="1"
                      min="0"
                      max={years * 12}
                    />
                    <p className="text-xs text-gray-500 mt-1">Months completed so far</p>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Processing Fee (% of Outstanding)
                    </label>
                    <input
                      type="number"
                      value={btRate}
                      onChange={(e) => setBtRate(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      step="0.1"
                      min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Default: 4.5%</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      GST on Processing Fee (%)
                    </label>
                    <input
                      type="number"
                      value={gstPercent}
                      onChange={(e) => setGstPercent(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      step="1"
                      min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Default: 18%</p>
                  </div>
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
                    <span className="text-xl font-bold text-blue-600">{formatCurrency(emi)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Total Loan Amount</span>
                    <span className="text-lg font-semibold text-gray-800">{formatCurrency(totalLoanAmount)}</span>
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
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Future Interest (if continued)</span>
                    <span className="text-lg font-semibold text-gray-800">{formatCurrency(totalInterestToPay)}</span>
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
                    <div className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">💰</span>
                        <div className="flex-1">
                          <p className="text-white text-sm">Estimated Savings by Balance Transfer</p>
                          <p className="text-white text-3xl font-bold">{formatCurrency(savingsAmount)}</p>
                          <p className="text-white text-xs mt-1 opacity-90">
                            Compared to continuing current loan
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {savingsAmount <= 0 && remainingPrincipal > 0 && (
                    <div className="mt-4 bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">⚠️</span>
                        <p className="text-red-700 text-sm font-medium">
                          Balance Transfer may not save money in this scenario. Processing fee exceeds future interest benefit.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary Card */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-white">
                    <span className="text-gray-300">📅 Pending months & year:</span>
                    <span className="font-semibold">{pendingMonths} months ({pendingYears} yr {pendingMonths % 12} mo)</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className="text-gray-300">💸 Amount saved if BT done:</span>
                    <span className={`font-bold text-xl ${savingsAmount > 0 ? 'text-green-400' : 'text-gray-400'}`}>
                      {savingsAmount > 0 ? formatCurrency(savingsAmount) : 'No savings'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-white pt-3 border-t border-gray-700">
                    <span className="text-gray-300">🏦 Final amount to settle on BT:</span>
                    <span className="font-bold text-xl text-yellow-400">{formatCurrency(btTotalAmount)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <div className="bg-gray-100 rounded-lg p-4 inline-block">
              <p className="text-sm text-gray-600">
                * Balance Transfer charges: {btRate}% processing fee + {gstPercent}% GST on the fee.<br />
                Final amount = Outstanding Principal + Processing Fee + GST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default ForecloserCalculator; 