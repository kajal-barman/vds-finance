import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper'; // Fixed typo: Wraper -> Wrapper
import {
  FaMoneyBillWave,
  FaChartLine,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaGift,
  FaTrophy,
  FaCheckCircle,
  FaArrowRight,
  FaRegClock,
  FaRegCreditCard,
  FaLink,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaQuoteLeft,
  FaDownload,
  FaPercent,
  FaRupeeSign,
  FaStar,
  FaRegSmile,
  FaUserFriends,
  FaChartPie,
  FaBullhorn
} from 'react-icons/fa';
import { MdDashboard, MdPayment, MdTrendingUp, MdVerified, MdEmail } from 'react-icons/md';

const Affiliates = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    audienceSize: '',
    promotionMethods: [],
    experience: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedTier, setSelectedTier] = useState('standard');

  // Commission tiers
  const commissionTiers = [
    {
      id: 'standard',
      name: 'Standard Partner',
      commission: '10%',
      revenueShare: '10% of net revenue',
      minPayout: '₹2,500',
      requirements: 'No minimum sales',
      color: 'from-blue-500 to-blue-600',
      icon: FaStar,
      features: [
        'Access to marketing materials',
        'Monthly payment cycle',
        'Standard support',
        'Basic reporting dashboard'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Partner',
      commission: '15%',
      revenueShare: '15% of net revenue',
      minPayout: '₹5,000',
      requirements: '₹5 lakhs+ monthly sales',
      color: 'from-purple-500 to-purple-600',
      icon: FaTrophy,
      features: [
        'All Standard features',
        'Dedicated account manager',
        'Priority support',
        'Advanced analytics',
        'Custom marketing assets',
        'Monthly bonus incentives'
      ]
    },
    {
      id: 'elite',
      name: 'Elite Partner',
      commission: '20%',
      revenueShare: '20% of net revenue',
      minPayout: '₹10,000',
      requirements: '₹20 lakhs+ monthly sales',
      color: 'from-orange-500 to-red-500',
      icon: FaRocket,
      features: [
        'All Premium features',
        'Strategic partnership manager',
        '24/7 priority support',
        'API access & integration',
        'Co-marketing opportunities',
        'Invitation to exclusive events',
        'Higher bonus multipliers'
      ]
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: 'High Commission Rates',
      description: 'Earn up to 20% commission on every successful loan or credit card approval',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: FaRegClock,
      title: 'Real-Time Tracking',
      description: 'Track your earnings, clicks, and conversions with our real-time dashboard',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: MdPayment,
      title: 'Timely Payouts',
      description: 'Get paid monthly with multiple withdrawal options including bank transfer',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: FaHandshake,
      title: 'Dedicated Support',
      description: 'Receive personalized support from your dedicated affiliate manager',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: FaChartLine,
      title: 'Advanced Analytics',
      description: 'Access detailed reports and insights to optimize your campaigns',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: FaGift,
      title: 'Performance Bonuses',
      description: 'Earn additional bonuses for achieving monthly and quarterly targets',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  // Success stories with proper image handling
  const successStories = [
    {
      name: 'Rahul Sharma',
      role: 'Financial Blogger',
      earnings: '₹85,000/month',
      quote: 'Partnering with VDS Finance has been game-changing for my blog. Their products are high-converting, and the support team is exceptional.',
      initials: 'RS'
    },
    {
      name: 'Priya Patel',
      role: 'YouTube Creator',
      earnings: '₹1,20,000/month',
      quote: 'The commission rates are industry-leading, and the real-time tracking dashboard makes it easy to optimize my campaigns.',
      initials: 'PP'
    },
    {
      name: 'Amit Kumar',
      role: 'Influencer',
      earnings: '₹2,50,000/month',
      quote: 'VDS Finance offers the best affiliate program I\'ve ever worked with. The team truly cares about their partners\' success.',
      initials: 'AK'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How do I become an affiliate?',
      answer: 'Simply fill out our application form, and our team will review your application within 2-3 business days. Once approved, you\'ll get access to your affiliate dashboard and marketing materials.'
    },
    {
      question: 'What products can I promote?',
      answer: 'You can promote personal loans, business loans, home loans, car loans, credit cards, and other financial products offered by VDS Finance.'
    },
    {
      question: 'How are commissions calculated?',
      answer: 'Commissions are calculated as a percentage of the net revenue from successfully approved loans or credit cards. Rates range from 10% to 20% based on your performance tier.'
    },
    {
      question: 'When do I get paid?',
      answer: 'Payments are processed monthly, typically within the first 10 business days of the following month. Minimum payout threshold is ₹2,500 for Standard partners.'
    },
    {
      question: 'What marketing materials do you provide?',
      answer: 'We provide banners, landing pages, email templates, product images, and exclusive promo codes. Premium and Elite partners get custom marketing assets.'
    },
    {
      question: 'How do I track my performance?',
      answer: 'Our affiliate dashboard provides real-time tracking for clicks, conversions, commissions, and earnings. You can also access detailed analytics and reports.'
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        promotionMethods: checked
          ? [...prev.promotionMethods, value]
          : prev.promotionMethods.filter(method => method !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setShowApplyForm(false);
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        website: '',
        audienceSize: '',
        promotionMethods: [],
        experience: '',
        message: ''
      });
    }, 3000);
  };

  // Application Form Modal
  const ApplicationForm = ({ onClose }) => {
    const promotionOptions = [
      'Blog/Website',
      'Social Media',
      'YouTube',
      'Email Marketing',
      'Paid Ads',
      'Influencer',
      'Other'
    ];

    return (

      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">Join VDS Finance Affiliate Program</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website/Blog/Social Profile</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Audience Size *</label>
              <select
                name="audienceSize"
                required
                value={formData.audienceSize}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select audience size</option>
                <option value="<1000">Less than 1,000</option>
                <option value="1000-5000">1,000 - 5,000</option>
                <option value="5000-10000">5,000 - 10,000</option>
                <option value="10000-50000">10,000 - 50,000</option>
                <option value=">50000">More than 50,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How do you plan to promote? *</label>
              <div className="grid grid-cols-2 gap-3">
                {promotionOptions.map(option => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.promotionMethods.includes(option)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Affiliate Marketing Experience</label>
              <textarea
                name="experience"
                rows="3"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Tell us about your experience with affiliate marketing..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any other information you'd like to share..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                By submitting this application, you agree to our Affiliate Terms & Conditions and Privacy Policy.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    );
  };

  // Success Modal
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in joining VDS Finance Affiliate Program. Our team will review your application and get back to you within 2-3 business days.
        </p>
        <button
          onClick={() => setFormSubmitted(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <Wraper>
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Join VDS Finance Affiliate Program
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Earn up to 20% commission by promoting trusted financial products
              </p>
              <p className="text-lg mb-8 text-blue-100">
                Join thousands of successful affiliates earning passive income with India's fastest-growing fintech platform
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setShowApplyForm(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
                >
                  Apply Now <FaArrowRight />
                </button>
                <a
                  href="#how-it-works"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
                <div className="text-gray-600">Highest Commission Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹5Cr+</div>
                <div className="text-gray-600">Paid to Affiliates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600">Active Affiliates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps to begin your journey with VDS Finance
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRegSmile className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
                <p className="text-gray-600">Complete our simple application form and get approved</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLink className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Get Links</h3>
                <p className="text-gray-600">Access your unique tracking links and marketing materials</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBullhorn className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Promote</h3>
                <p className="text-gray-600">Share our products with your audience through your channels</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRupeeSign className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4. Earn</h3>
                <p className="text-gray-600">Get paid monthly for every successful referral</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Commission Tiers</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              The more you promote, the more you earn. Unlock higher commission rates as you grow
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {commissionTiers.map(tier => {
                const IconComponent = tier.icon;
                return (
                  <div
                    key={tier.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 ${selectedTier === tier.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                  >
                    <div className={`bg-gradient-to-r ${tier.color} p-6 text-white`}>
                      <IconComponent className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold mb-2">{tier.commission}</div>
                      <p className="text-sm opacity-90">{tier.revenueShare}</p>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Minimum Payout</p>
                        <p className="font-semibold">{tier.minPayout}</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-1">Requirements</p>
                        <p className="font-semibold">{tier.requirements}</p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setShowApplyForm(true)}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        Join {tier.name}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We provide everything you need to succeed as an affiliate partner
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                    <div className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products to Promote */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Products You Can Promote</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose from a wide range of trusted financial products with high conversion rates
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <FaRupeeSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Personal Loans</h3>
                <p className="text-sm text-gray-600">Up to ₹25 lakhs</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <FaUserFriends className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Business Loans</h3>
                <p className="text-sm text-gray-600">Up to ₹50 lakhs</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <FaChartPie className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Home Loans</h3>
                <p className="text-sm text-gray-600">Up to ₹5 crores</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <FaRegCreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Credit Cards</h3>
                <p className="text-sm text-gray-600">Up to ₹10 lakhs limit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Hear from our top-performing affiliates who are earning substantial income
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {story.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.role}</p>
                      <p className="text-blue-600 font-semibold mt-1">{story.earnings}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" />
                    <p className="text-gray-600 italic pl-6">{story.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Everything you need to know about our affiliate program
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {faq.question}
                  </summary>
                  <p className="text-gray-600 mt-2 pl-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Affiliate Resources</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Get everything you need to succeed with our comprehensive resource library
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <FaDownload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Marketing Materials</h3>
                <p className="text-sm text-gray-600 mb-3">Banners, logos, and creatives</p>
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  Download Now →
                </button>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <FaChartLine className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Performance Guide</h3>
                <p className="text-sm text-gray-600 mb-3">Tips to maximize conversions</p>
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  Read Guide →
                </button>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <MdVerified className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <p className="text-sm text-gray-600 mb-3">Learn from top affiliates</p>
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the VDS Finance Affiliate Program today and start earning passive income
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowApplyForm(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Apply Now
              </button>
              <a
                href="#how-it-works"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Modals */}
        {showApplyForm && <ApplicationForm onClose={() => setShowApplyForm(false)} />}
        {formSubmitted && <SuccessModal />}
      </div>
    </Wraper>
  );
};

export default Affiliates;