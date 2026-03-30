import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
  FaChartLine,
  FaWallet,
  FaPiggyBank,
  FaLandmark,
  FaBitcoin,
  FaBuilding,
  FaGlobe,
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaMinus,
  FaHistory,
  FaStar,
  FaRegStar,
  FaInfoCircle,
  FaChevronRight,
  FaExchangeAlt,
  FaShieldAlt,
  FaClock,
  FaPercent,
  FaChartPie,
  FaTrophy,
  FaFire,
  FaGift
} from 'react-icons/fa';
import { MdShowChart, MdAccountBalance } from 'react-icons/md';
import { RiFundsBoxFill } from 'react-icons/ri';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const InvestmentPage = () => {
  const [activeTab, setActiveTab] = useState('stocks');
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [selectedPlan, setSelectedPlan] = useState('moderate');

  // Investment portfolio data
  const portfolio = {
    totalValue: 24750,
    totalInvested: 20000,
    totalReturns: 4750,
    returnsPercentage: 23.75,
    todayChange: 325,
    todayChangePercent: 1.33
  };

  // Investment plans
  const investmentPlans = [
    {
      id: 'conservative',
      name: 'Conservative',
      risk: 'Low Risk',
      expectedReturns: '8-12%',
      minInvestment: 1000,
      color: 'bg-green-500',
      description: 'Stable growth with minimal risk',
      features: ['Fixed income securities', 'Government bonds', 'Blue-chip stocks']
    },
    {
      id: 'moderate',
      name: 'Moderate',
      risk: 'Medium Risk',
      expectedReturns: '12-18%',
      minInvestment: 5000,
      color: 'bg-blue-500',
      description: 'Balanced growth with managed risk',
      features: ['Mix of stocks & bonds', 'Index funds', 'REITs']
    },
    {
      id: 'aggressive',
      name: 'Aggressive',
      risk: 'High Risk',
      expectedReturns: '18-25%',
      minInvestment: 10000,
      color: 'bg-purple-500',
      description: 'Maximum growth potential',
      features: ['Growth stocks', 'Crypto assets', 'Emerging markets']
    }
  ];

  // Investment options by category
  const investmentOptions = {
    stocks: [
      { name: 'Apple Inc.', symbol: 'AAPL', price: 175.34, change: 2.45, changePercent: 1.42, value: 5240, shares: 30 },
      { name: 'Microsoft', symbol: 'MSFT', price: 420.72, change: 3.18, changePercent: 0.76, value: 6300, shares: 15 },
      { name: 'Amazon', symbol: 'AMZN', price: 178.25, change: -1.23, changePercent: -0.68, value: 3565, shares: 20 },
      { name: 'Google', symbol: 'GOOGL', price: 142.56, change: 1.87, changePercent: 1.33, value: 2851, shares: 20 }
    ],
    mutualFunds: [
      { name: 'VDS Growth Fund', symbol: 'VDSGF', nav: 45.32, change: 0.45, changePercent: 1.00, value: 6798, units: 150 },
      { name: 'VDS Balanced Fund', symbol: 'VDSBF', nav: 32.18, change: 0.18, changePercent: 0.56, value: 4827, units: 150 },
      { name: 'Index 500 Fund', symbol: 'INX500', nav: 128.45, change: 1.25, changePercent: 0.98, value: 3853, units: 30 }
    ],
    crypto: [
      { name: 'Bitcoin', symbol: 'BTC', price: 52345, change: 1245, changePercent: 2.44, value: 5234, amount: 0.1 },
      { name: 'Ethereum', symbol: 'ETH', price: 3245, change: 89, changePercent: 2.82, value: 3245, amount: 1 },
      { name: 'Solana', symbol: 'SOL', price: 98.50, change: 5.20, changePercent: 5.57, value: 1970, amount: 20 }
    ],
    realEstate: [
      { name: 'Commercial REIT', symbol: 'CREIT', price: 24.50, change: 0.32, changePercent: 1.32, value: 3675, shares: 150 },
      { name: 'Residential REIT', symbol: 'RREIT', price: 18.75, change: -0.15, changePercent: -0.79, value: 2812, shares: 150 },
      { name: 'Industrial Trust', symbol: 'INDTR', price: 32.40, change: 0.48, changePercent: 1.50, value: 3240, shares: 100 }
    ]
  };

  // Market news
  const marketNews = [
    {
      title: "Fed announces interest rate decision",
      impact: "positive",
      time: "2 hours ago",
      summary: "Central bank maintains rates, signals potential cuts later this year"
    },
    {
      title: "Tech sector rally continues",
      impact: "positive",
      time: "5 hours ago",
      summary: "AI stocks lead gains as investor sentiment improves"
    },
    {
      title: "Oil prices stabilize",
      impact: "neutral",
      time: "1 day ago",
      summary: "Global demand concerns offset by supply constraints"
    }
  ];

  const handleAmountChange = (increment) => {
    if (increment) {
      setInvestmentAmount(prev => prev + 1000);
    } else {
      setInvestmentAmount(prev => Math.max(1000, prev - 1000));
    }
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 py-8 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-100 rounded-xl">
                <RiFundsBoxFill className="text-indigo-600" size={28} />
              </div>
              <h1 className="text-3xl font-bold text-slate-800">Investment Portfolio</h1>
            </div>
            <p className="text-slate-500 ml-12">
              Grow your wealth with VDS Finance's diverse investment options
            </p>
          </div>

          {/* Portfolio Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-3">
                <FaWallet className="text-indigo-500" size={24} />
                <span className="text-xs text-slate-400">Total Value</span>
              </div>
              <div className="text-2xl font-bold text-slate-800">
                ${portfolio.totalValue.toLocaleString()}
              </div>
              <div className="text-sm text-green-600 mt-2">
                +${portfolio.todayChange.toLocaleString()} today
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-3">
                <FaChartLine className="text-indigo-500" size={24} />
                <span className="text-xs text-slate-400">Total Returns</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                +${portfolio.totalReturns.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500 mt-2">
                {portfolio.returnsPercentage}% return
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-3">
                <FaPiggyBank className="text-indigo-500" size={24} />
                <span className="text-xs text-slate-400">Total Invested</span>
              </div>
              <div className="text-2xl font-bold text-slate-800">
                ${portfolio.totalInvested.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500 mt-2">
                Across 12 investments
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-3">
                <BiTrendingUp className="text-indigo-500" size={24} />
                <span className="text-xs text-slate-400">Today's Change</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                +{portfolio.todayChangePercent}%
              </div>
              <div className="text-sm text-slate-500 mt-2">
                +${portfolio.todayChange.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Investment Plans Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <AiFillSafetyCertificate size={24} className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-slate-800">Investment Plans</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {investmentPlans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`cursor-pointer rounded-xl border-2 p-5 transition-all ${selectedPlan === plan.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-slate-200 hover:border-indigo-200'
                    }`}
                >
                  <div className={`w-12 h-12 ${plan.color} rounded-lg flex items-center justify-center mb-4`}>
                    <FaStar className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{plan.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Risk Level:</span>
                      <span className={`font-medium ${plan.risk.includes('Low') ? 'text-green-600' :
                        plan.risk.includes('Medium') ? 'text-blue-600' : 'text-purple-600'
                        }`}>{plan.risk}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Expected Returns:</span>
                      <span className="font-medium text-indigo-600">{plan.expectedReturns}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Min Investment:</span>
                      <span className="font-medium">${plan.minInvestment.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link to={'/contact'}>
                    <button className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Select Plan
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Options Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <FaChartPie size={24} className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-slate-800">Your Investments</h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200">
              {['stocks', 'mutualFunds', 'crypto', 'realEstate'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium transition-colors ${activeTab === tab
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                  {tab === 'stocks' && 'Stocks'}
                  {tab === 'mutualFunds' && 'Mutual Funds'}
                  {tab === 'crypto' && 'Cryptocurrency'}
                  {tab === 'realEstate' && 'Real Estate'}
                </button>
              ))}
            </div>

            {/* Investment Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">Price</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">Change</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">Holdings</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentOptions[activeTab]?.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.symbol}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        ${item.price?.toLocaleString() || item.nav?.toLocaleString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className={`flex items-center gap-1 ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change >= 0 ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
                          <span>{Math.abs(item.changePercent)}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {item.shares ? `${item.shares} shares` :
                          item.units ? `${item.units} units` :
                            item.amount ? `${item.amount} ${item.symbol}` : ''}
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-slate-800">
                        ${item.value.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Invest Now Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
              <div className="mb-4">
                <FaGift size={28} className="mb-3" />
                <h3 className="text-2xl font-bold mb-2">Start Investing Today</h3>
                <p className="text-indigo-100">Get up to $100 bonus on your first investment</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm">Investment Amount</span>
                  <span className="text-2xl font-bold">${investmentAmount.toLocaleString()}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAmountChange(false)}
                    className="flex-1 bg-white/30 hover:bg-white/40 rounded-lg py-2 flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaMinus size={12} /> Decrease
                  </button>
                  <button
                    onClick={() => handleAmountChange(true)}
                    className="flex-1 bg-white/30 hover:bg-white/40 rounded-lg py-2 flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaPlus size={12} /> Increase
                  </button>
                </div>
              </div>
              <Link to={'/contact'}>
                <button className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                  Invest Now
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaHistory size={20} className="text-indigo-600" />
                <h3 className="text-lg font-semibold text-slate-800">Recent Transactions</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <FaArrowUp className="text-green-600" size={12} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">Bought AAPL</p>
                      <p className="text-xs text-slate-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-800">+$1,250</p>
                    <p className="text-xs text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <FaArrowDown className="text-red-600" size={12} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">Sold MSFT</p>
                      <p className="text-xs text-slate-500">5 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-800">+$3,200</p>
                    <p className="text-xs text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FaExchangeAlt className="text-blue-600" size={12} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">Dividend Received</p>
                      <p className="text-xs text-slate-500">1 week ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-800">+$187.50</p>
                    <p className="text-xs text-green-600">Credited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market News & Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaGlobe size={20} className="text-indigo-600" />
                <h3 className="text-lg font-semibold text-slate-800">Market Insights</h3>
              </div>
              <div className="space-y-4">
                {marketNews.map((news, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className={`p-2 rounded-lg ${news.impact === 'positive' ? 'bg-green-50' :
                      news.impact === 'negative' ? 'bg-red-50' : 'bg-gray-50'
                      }`}>
                      {news.impact === 'positive' ? (
                        <BiTrendingUp className="text-green-600" size={16} />
                      ) : news.impact === 'negative' ? (
                        <BiTrendingDown className="text-red-600" size={16} />
                      ) : (
                        <FaInfoCircle className="text-gray-600" size={16} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-800 mb-1">{news.title}</h4>
                      <p className="text-sm text-slate-500">{news.summary}</p>
                      <p className="text-xs text-slate-400 mt-2">{news.time}</p>
                    </div>
                    <FaChevronRight className="text-slate-300" size={12} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaTrophy size={20} className="text-indigo-600" />
                <h3 className="text-lg font-semibold text-slate-800">Top Performers</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">Bitcoin (BTC)</p>
                    <p className="text-xs text-slate-500">+2.44% today</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">+5.2%</p>
                    <p className="text-xs text-slate-400">This week</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">VDS Growth Fund</p>
                    <p className="text-xs text-slate-500">+1.00% today</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">+8.3%</p>
                    <p className="text-xs text-slate-400">This month</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">Apple (AAPL)</p>
                    <p className="text-xs text-slate-500">+1.42% today</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">+12.7%</p>
                    <p className="text-xs text-slate-400">This quarter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <FaShieldAlt size={20} className="text-indigo-600" />
                <p className="text-sm text-slate-600">
                  Your investments are protected by VDS Finance's secure platform
                </p>
              </div>
              <Link to={'/contact'}>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                  Learn about investment protection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default InvestmentPage;