import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaCreditCard,
  FaShieldAlt,
  FaHandHoldingUsd,
  FaExchangeAlt,
  FaMobileAlt,
  FaChartLine,
  FaUserLock,
  FaComments,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
  FaRobot,
  FaFileAlt,
  FaRegClock,
  FaRegCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { MdAccountBalance, MdSecurity } from 'react-icons/md';
import { BiSupport, BiTransfer } from 'react-icons/bi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { RiBankFill, RiQuestionnaireFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const FAQSPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  // FAQ Categories
  const categories = [
    { id: 'all', name: 'All Questions', icon: <RiQuestionnaireFill size={18} /> },
    { id: 'account', name: 'Account & Profile', icon: <FaUserLock size={18} /> },
    { id: 'payments', name: 'Payments & Transfers', icon: <FaCreditCard size={18} /> },
    { id: 'security', name: 'Security', icon: <FaShieldAlt size={18} /> },
    { id: 'investments', name: 'Investments', icon: <FaChartLine size={18} /> },
    { id: 'support', name: 'Support', icon: <BiSupport size={18} /> }
  ];

  // FAQ Data
  const faqs = [
    // Account & Profile
    {
      id: 1,
      category: 'account',
      question: 'How do I create a VDS Finance account?',
      answer: 'Creating an account with VDS Finance is simple! Click the "Sign Up" button on our homepage, enter your email address, create a strong password, and verify your identity. You\'ll need to provide basic information like your name, date of birth, and government-issued ID for verification. The process takes about 5-10 minutes to complete.',
      icon: <FaUserLock />,
      helpful: 245
    },
    {
      id: 2,
      category: 'account',
      question: 'How can I update my personal information?',
      answer: 'To update your personal information, log in to your account, go to "Settings" > "Profile Settings". Here you can update your contact information, address, and other personal details. For sensitive information like your name or date of birth changes, you may need to contact our support team and provide supporting documentation.',
      icon: <FaUserLock />,
      helpful: 178
    },
    {
      id: 3,
      category: 'account',
      question: 'How do I close my VDS Finance account?',
      answer: 'To close your account, please contact our customer support team. Before closing, ensure all your investments are liquidated, pending transactions are completed, and your account balance is zero. Our support team will guide you through the account closure process and confirm when your account has been successfully closed.',
      icon: <FaUserLock />,
      helpful: 92
    },

    // Payments & Transfers
    {
      id: 4,
      category: 'payments',
      question: 'How long do deposits take to process?',
      answer: 'Deposits to your VDS Finance account typically process instantly for bank transfers and credit/debit cards. For wire transfers, processing may take 1-2 business days. All deposits are subject to standard verification checks to ensure security. You can track the status of your deposit in the "Transaction History" section.',
      icon: <FaCreditCard />,
      helpful: 312
    },
    {
      id: 5,
      category: 'payments',
      question: 'What are the withdrawal limits?',
      answer: 'Withdrawal limits vary based on your account verification level. Standard accounts have a daily withdrawal limit of $10,000, while verified accounts can withdraw up to $50,000 per day. VIP accounts have higher limits. You can request a limit increase by providing additional verification documents.',
      icon: <FaHandHoldingUsd />,
      helpful: 267
    },
    {
      id: 6,
      category: 'payments',
      question: 'Are there any fees for transactions?',
      answer: 'VDS Finance offers competitive fee structures. Deposits are free for all users. Withdrawals have a small fee based on the withdrawal method: bank transfers ($5), instant transfers ($10), and international wires ($25). Premium account holders enjoy reduced fees and monthly free withdrawals.',
      icon: <FaExchangeAlt />,
      helpful: 198
    },

    // Security
    {
      id: 7,
      category: 'security',
      question: 'How does VDS Finance protect my data?',
      answer: 'VDS Finance employs bank-level security measures including 256-bit SSL encryption, two-factor authentication (2FA), biometric login options, and real-time fraud monitoring. Your sensitive data is encrypted both in transit and at rest. We also conduct regular security audits and comply with industry security standards like PCI DSS Level 1.',
      icon: <FaShieldAlt />,
      helpful: 423
    },
    {
      id: 8,
      category: 'security',
      question: 'What should I do if I suspect unauthorized activity?',
      answer: 'If you notice any suspicious activity on your account, immediately contact our 24/7 support team at support@vdsfinance.com or call our emergency line. Our security team will freeze your account to prevent further unauthorized access, investigate the activity, and guide you through the recovery process.',
      icon: <MdSecurity />,
      helpful: 156
    },
    {
      id: 9,
      category: 'security',
      question: 'How do I enable two-factor authentication (2FA)?',
      answer: 'To enable 2FA, go to "Security Settings" in your account dashboard. Choose between SMS verification, authenticator app (Google Authenticator or Authy), or hardware security key. Follow the setup instructions to link your device. Once enabled, you\'ll need to enter a verification code each time you log in.',
      icon: <AiFillSafetyCertificate />,
      helpful: 289
    },

    // Investments
    {
      id: 10,
      category: 'investments',
      question: 'What investment options does VDS Finance offer?',
      answer: 'VDS Finance offers a diverse range of investment options including stocks, mutual funds, ETFs, bonds, cryptocurrencies, and real estate investment trusts (REITs). We also provide managed portfolios with different risk levels: Conservative, Moderate, and Aggressive. Each option comes with detailed information about potential returns and associated risks.',
      icon: <FaChartLine />,
      helpful: 345
    },
    {
      id: 11,
      category: 'investments',
      question: 'What are the minimum investment amounts?',
      answer: 'Minimum investment amounts vary by product: Stocks from $50, Mutual Funds from $500, ETFs from $100, Cryptocurrency from $10, and REITs from $1,000. Our managed portfolios start at $5,000 for Moderate and Aggressive plans, and $1,000 for Conservative plans. There are no minimum balance requirements.',
      icon: <RiBankFill />,
      helpful: 234
    },
    {
      id: 12,
      category: 'investments',
      question: 'Can I withdraw my investments anytime?',
      answer: 'Yes, most investments can be liquidated anytime during market hours. Some products like fixed deposits may have lock-in periods. Withdrawal requests are processed within 1-3 business days. Early withdrawal fees may apply for certain investment products. Check the specific terms for each investment before committing.',
      icon: <FaHandHoldingUsd />,
      helpful: 187
    },

    // Support
    {
      id: 13,
      category: 'support',
      question: 'How can I contact customer support?',
      answer: 'Our customer support team is available 24/7 through multiple channels: Live Chat (available on our website and mobile app), Email: support@vdsfinance.com, Phone: 1-800-VDS-FINANCE, and Social Media: @VDSFinance on Twitter and Facebook. Premium account holders have access to priority support with shorter wait times.',
      icon: <FaComments />,
      helpful: 412
    },
    {
      id: 14,
      category: 'support',
      question: 'Is there a mobile app available?',
      answer: 'Yes! VDS Finance offers a comprehensive mobile app available for both iOS and Android devices. The app allows you to manage your investments, make deposits and withdrawals, view real-time market data, and access customer support. Download it from the Apple App Store or Google Play Store.',
      icon: <FaMobileAlt />,
      helpful: 378
    },
    {
      id: 15,
      category: 'support',
      question: 'Do you offer financial advice?',
      answer: 'VDS Finance provides educational resources and market insights to help you make informed decisions. We also offer robo-advisory services for automated portfolio management. For personalized financial advice, we recommend consulting with our certified financial planners (additional fees apply for advisory services).',
      icon: <FaRobot />,
      helpful: 156
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter FAQs based on category and search
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get category counts
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return faqs.length;
    return faqs.filter(faq => faq.category === categoryId).length;
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 py-8 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-4">
              <FaQuestionCircle className="text-indigo-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-3">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Find answers to common questions about VDS Finance. Can't find what you're looking for?
              Our support team is here to help.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200'
                  }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs ml-1 ${activeCategory === category.id ? 'bg-indigo-500' : 'bg-slate-100'
                  } px-2 py-0.5 rounded-full`}>
                  {getCategoryCount(category.id)}
                </span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                          {faq.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-800 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openItems[faq.id] ? (
                        <FaChevronUp className="text-slate-400" />
                      ) : (
                        <FaChevronDown className="text-slate-400" />
                      )}
                    </div>
                  </button>

                  {openItems[faq.id] && (
                    <div className="px-6 pb-5 pt-0 border-t border-slate-100 bg-slate-50/30">
                      <div className="pl-12">
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-slate-500">
                            <FaRegCheckCircle size={14} />
                            <span>Was this helpful?</span>
                          </div>
                          <button className="text-green-600 hover:text-green-700 font-medium">
                            Yes ({faq.helpful})
                          </button>
                          <button className="text-red-600 hover:text-red-700 font-medium">
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl">
                <FaSearch className="text-slate-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No results found</h3>
                <p className="text-slate-500">
                  We couldn't find any questions matching "{searchTerm}". Try different keywords or browse our categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* Still Have Questions Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-8 mb-8">
            <div className="text-center text-white">
              <FaComments size={40} className="mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Our dedicated support team is available 24/7 to help you with any questions or concerns you may have.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to={'/contact'}>
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                    <FaCommentDots size={18} />
                    Live Chat
                  </button>
                </Link>
                <Link to={'/contact'}>
                  <button className="bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-400 transition-colors flex items-center gap-2">
                    <FaEnvelope size={18} />
                    Email Support
                  </button>
                </Link>
                <Link to={'/contact'}>
                  <button className="bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-400 transition-colors flex items-center gap-2">
                    <FaPhoneAlt size={18} />
                    Call Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <FaFileAlt className="text-indigo-600 mb-3" size={24} />
              <h3 className="font-semibold text-slate-800 mb-2">Documentation</h3>
              <p className="text-sm text-slate-500 mb-3">Detailed guides and tutorials</p>
              <Link to={'/contact'}>
                <button className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Browse docs <FaArrowRight size={12} />
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <FaRegClock className="text-indigo-600 mb-3" size={24} />
              <h3 className="font-semibold text-slate-800 mb-2">System Status</h3>
              <p className="text-sm text-slate-500 mb-3">All systems operational</p>
              <Link to={'/contact'}>
                <button className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Check status <FaArrowRight size={12} />
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <FaHandHoldingUsd className="text-indigo-600 mb-3" size={24} />
              <h3 className="font-semibold text-slate-800 mb-2">Fee Schedule</h3>
              <p className="text-sm text-slate-500 mb-3">View our complete fee structure</p>
              <Link to={'/contact'}>
                <button className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View fees <FaArrowRight size={12} />
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <FaShieldAlt className="text-indigo-600 mb-3" size={24} />
              <h3 className="font-semibold text-slate-800 mb-2">Security Center</h3>
              <p className="text-sm text-slate-500 mb-3">Learn about our security measures</p>
              <Link to={'/contact'}>
                <button className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <FaArrowRight size={12} />
                </button>
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-slate-400">
            <p>Can't find what you're looking for? Contact our support team for personalized assistance.</p>
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default FAQSPage;