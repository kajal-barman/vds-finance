import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
  FaSearch,
  FaHeadset,
  FaComments,
  FaEnvelope,
  FaPhoneAlt,
  FaVideo,
  FaBookOpen,
  FaGraduationCap,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaCreditCard,
  FaExchangeAlt,
  FaUserCircle,
  FaArrowRight,
  FaRegClock,
  FaRegCheckCircle,
  FaExternalLinkAlt,
  FaPlayCircle,
  FaFileDownload,
  FaNewspaper,
  FaUsers,
  FaGlobe,
  FaBell,
  FaLock,
  FaWallet,
  FaRobot,
  FaQuestionCircle
} from 'react-icons/fa';
import { MdHelp, MdLiveHelp, MdForum } from 'react-icons/md';
import { BiSupport, BiNews } from 'react-icons/bi';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { TbHelp } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  // Support Categories
  const supportCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: <FaGraduationCap />, color: 'bg-blue-500' },
    { id: 'account', name: 'Account Management', icon: <FaUserCircle />, color: 'bg-green-500' },
    { id: 'payments', name: 'Payments & Transfers', icon: <FaCreditCard />, color: 'bg-purple-500' },
    { id: 'investments', name: 'Investments', icon: <FaChartLine />, color: 'bg-orange-500' },
    { id: 'security', name: 'Security', icon: <FaShieldAlt />, color: 'bg-red-500' },
    { id: 'mobile', name: 'Mobile App', icon: <FaMobileAlt />, color: 'bg-indigo-500' }
  ];

  // Popular Articles
  const popularArticles = [
    { title: "How to create your VDS Finance account", views: "12.5k views", category: "Getting Started" },
    { title: "Step-by-step guide to making your first investment", views: "9.8k views", category: "Investments" },
    { title: "Understanding security features and 2FA setup", views: "8.2k views", category: "Security" },
    { title: "How to deposit and withdraw funds", views: "7.5k views", category: "Payments" },
    { title: "Using the VDS Finance mobile app", views: "6.9k views", category: "Mobile" }
  ];

  // Featured Resources
  const featuredResources = [
    {
      type: "video",
      title: "Getting Started with VDS Finance",
      duration: "5:23",
      thumbnail: "📹",
      icon: <FaPlayCircle />
    },
    {
      type: "guide",
      title: "Complete Investment Guide 2025",
      pages: "45 pages",
      thumbnail: "📘",
      icon: <FaBookOpen />
    },
    {
      type: "webinar",
      title: "Market Insights Webinar",
      date: "Next: Mar 25, 2025",
      thumbnail: "🎥",
      icon: <FaVideo />
    },
    {
      type: "faq",
      title: "Frequently Asked Questions",
      questions: "50+ answers",
      thumbnail: "❓",
      icon: <FaQuestionCircle />
    }
  ];

  // Help Topics by Category
  const helpTopics = {
    'getting-started': [
      { title: "Create your account", description: "Step-by-step account creation guide", icon: <FaUserCircle /> },
      { title: "Verify your identity", description: "Complete KYC verification process", icon: <FaLock /> },
      { title: "Setup your profile", description: "Customize your account settings", icon: <FaUserCircle /> },
      { title: "First deposit guide", description: "How to add funds to your account", icon: <FaWallet /> }
    ],
    'account': [
      { title: "Update personal information", description: "Change your contact details", icon: <FaUserCircle /> },
      { title: "Password management", description: "Reset or change your password", icon: <FaLock /> },
      { title: "Notification settings", description: "Manage alerts and updates", icon: <FaBell /> },
      { title: "Account closure", description: "How to close your account", icon: <FaUserCircle /> }
    ],
    'payments': [
      { title: "Deposit methods", description: "All available deposit options", icon: <FaCreditCard /> },
      { title: "Withdrawal process", description: "How to withdraw funds", icon: <FaExchangeAlt /> },
      { title: "Transaction limits", description: "Understanding your limits", icon: <FaRegClock /> },
      { title: "Fees and charges", description: "Complete fee structure", icon: <FaWallet /> }
    ],
    'investments': [
      { title: "Investment options", description: "Explore available products", icon: <FaChartLine /> },
      { title: "Risk management", description: "Understanding investment risks", icon: <FaShieldAlt /> },
      { title: "Portfolio tracking", description: "Monitor your investments", icon: <FaChartLine /> },
      { title: "Tax implications", description: "Investment tax guide", icon: <FaBookOpen /> }
    ],
    'security': [
      { title: "Enable 2FA", description: "Two-factor authentication setup", icon: <FaShieldAlt /> },
      { title: "Security best practices", description: "Protect your account", icon: <FaLock /> },
      { title: "Recognize fraud", description: "Stay safe from scams", icon: <FaShieldAlt /> },
      { title: "Account recovery", description: "Recover lost access", icon: <FaUserCircle /> }
    ],
    'mobile': [
      { title: "Download the app", description: "iOS and Android versions", icon: <FaMobileAlt /> },
      { title: "App features", description: "Explore mobile features", icon: <FaMobileAlt /> },
      { title: "Mobile security", description: "Secure mobile usage", icon: <FaShieldAlt /> },
      { title: "Troubleshooting", description: "Common mobile issues", icon: <FaRobot /> }
    ]
  };

  // Contact Support Options
  const contactOptions = [
    {
      icon: <FaComments size={24} />,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "Available 24/7",
      action: "Start Chat",
      color: "bg-blue-500"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email Support",
      description: "Get help via email",
      availability: "Response within 24h",
      action: "Send Email",
      color: "bg-green-500"
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone Support",
      description: "Speak with an expert",
      availability: "9 AM - 9 PM EST",
      action: "Call Now",
      color: "bg-purple-500"
    },
    {
      icon: <FaVideo size={24} />,
      title: "Video Call",
      description: "Premium support",
      availability: "By appointment",
      action: "Schedule",
      color: "bg-orange-500"
    }
  ];

  // Quick Actions
  const quickActions = [
    { title: "Submit a Request", icon: <FaNewspaper />, link: "#" },
    { title: "Report an Issue", icon: <FaBell />, link: "#" },
    { title: "Give Feedback", icon: <FaUsers />, link: "#" },
    { title: "Community Forum", icon: <MdForum />, link: "#" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 pt-20">
        {/* Hero Section with Search */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-2xl mb-4">
                <MdHelp size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Search our knowledge base or browse topics below to find answers
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for articles, guides, and answers..."
                  className="w-full pl-14 pr-32 py-5 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Support Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-2xl text-center transition-all transform hover:scale-105 ${activeCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:shadow-md border border-slate-200'
                    }`}
                >
                  <div className={`inline-flex p-3 rounded-xl mb-3 ${activeCategory === category.id ? 'bg-white/20' : category.color + ' bg-opacity-10'}`}>
                    <div className={activeCategory === category.id ? 'text-white' : `text-${category.color.replace('bg-', '')}`}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Help Topics Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {supportCategories.find(c => c.id === activeCategory)?.name} Topics
              </h2>
              <Link to={'/contact'}>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                  View All <FaArrowRight size={14} />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {helpTopics[activeCategory]?.map((topic, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {topic.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">{topic.title}</h3>
                      <p className="text-sm text-slate-500">{topic.description}</p>
                      <Link to={'/contact'}>
                        <button className="mt-3 text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More <FaArrowRight size={12} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <FaBookOpen className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-800">Popular Articles</h2>
              </div>
              <div className="space-y-4">
                {popularArticles.map((article, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800 mb-1">{article.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <FaArrowRight className="text-slate-400" />
                  </div>
                ))}
              </div>
              <Link to={'/contact'}>
                <button className="mt-6 text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Browse All Articles <FaArrowRight size={14} />
                </button>
              </Link>
            </div>

            {/* Featured Resources */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <AiOutlineVideoCamera className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-800">Featured Resources</h2>
              </div>
              <div className="space-y-4">
                {featuredResources.map((resource, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-800 mb-1">{resource.title}</h3>
                        <p className="text-xs text-slate-500">
                          {resource.duration || resource.pages || resource.date || resource.questions}
                        </p>
                        <Link to={'/contact'}>
                          <button className="mt-2 text-indigo-600 text-xs font-medium flex items-center gap-1">
                            View {resource.type} <FaExternalLinkAlt size={10} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <FaHeadset className="text-indigo-600 mx-auto mb-3" size={32} />
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Still Need Help?</h2>
              <p className="text-slate-500">Our support team is ready to assist you 24/7</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactOptions.map((option, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg transition-all">
                  <div className={`${option.color} inline-flex p-3 rounded-xl text-white mb-4`}>
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{option.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">{option.description}</p>
                  <p className="text-xs text-slate-400 mb-4">{option.availability}</p>
                  <Link to={'/contact'}>
                    <button className="text-indigo-600 font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all w-full">
                      {option.action} <FaArrowRight size={12} />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Quick Actions</h3>
                <p className="text-slate-600">Common support requests and quick links</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {quickActions.map((action, idx) => (
                  <Link to={'/contact'} key={idx}>
                    <button
                      className="bg-white px-5 py-2.5 rounded-xl text-slate-700 hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2 font-medium"
                    >
                      {action.icon}
                      {action.title}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <FaUsers className="text-indigo-600" size={24} />
                <h3 className="text-xl font-bold text-slate-800">Community Forum</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Connect with other VDS Finance users, share experiences, and get community support
              </p>
              <Link to={'/contact'}>
                <button className="text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Join the Community <FaArrowRight size={12} />
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <FaGlobe className="text-indigo-600" size={24} />
                <h3 className="text-xl font-bold text-slate-800">Status Page</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Check the current status of VDS Finance services and system performance
              </p>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <FaRegCheckCircle size={16} />
                <span className="text-sm font-medium">All Systems Operational</span>
              </div>
              <Link to={'/contact'}>
                <button className="text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View Status <FaArrowRight size={12} />
                </button>
              </Link>
            </div>
          </div>

          {/* Download Resources */}
          <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaFileDownload className="text-indigo-600" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-800">Download Resources</h3>
                  <p className="text-sm text-slate-500">User guides, API documentation, and more</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to={'/contact'}>
                  <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <FaFileDownload size={14} />
                    User Guide
                  </button>
                </Link>
                <Link to={'/contact'}>
                  <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <FaFileDownload size={14} />
                    API Docs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default HelpCenterPage;