import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiSend
} from 'react-icons/fi';
import { HiOutlineCheck } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    loanAmount: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Here you would typically send data to your backend API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      // Show browser alert
      alert('✅ Message sent successfully! Our team will get back to you within 24 hours.');
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        loanAmount: '',
        message: ''
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
      alert('❌ Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wraper>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Have questions about your financial future? Our team of experts is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {/* Phone Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">91 9625973190</p>
              <p className="text-gray-500 text-sm mt-2">Mon-Sat 9am-7pm </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">support@vdsfinancesolution.com</p>
              <p className="text-gray-500 text-sm mt-2">24/7 Support</p>
            </div>

            {/* Visit Us Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">D Block, D-36, Sector-2</p>
              <p className="text-gray-500">Noida, 201301</p>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9am - 6pm</p>
              <p className="text-gray-500">Sun: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Whether you're interested in investment advice, retirement planning, or just have a question, we're here to help.
              </p>

              {/* Success Message with Button */}
              {showSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-start">
                      <FiCheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800 text-lg">Message Sent Successfully!</h4>
                        <p className="text-green-700">
                          Thank you for contacting us. Our team will get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                    >
                      <FiCheckCircle className="h-5 w-5" />
                      Successfully Submitted
                    </button>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Product / Service *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a product/service</option>
                    <option value="personal-loan">🏦 Personal Loan</option>
                    <option value="home-loan">🏠 Home Loan</option>
                    <option value="business-loan">💼 Business Loan</option>
                    <option value="over-draft">💰 Over Draft</option>
                    <option value="property-loan">🏢 Property Loan</option>
                    <option value="credit-card">💳 Credit Card</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount Required (if applicable)
                  </label>
                  <input
                    type="text"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., ₹5,00,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about your requirement..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <FiSend className="h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="bg-gray-100 rounded-lg h-96 mb-8 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=VDS%20Finance%20Solutions%20D-36%20Sector%202%20Noida&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="VDS Finance Solutions Office Location"
                ></iframe>
              </div>

              {/* Additional Contact Info */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Why Choose VDS Finance?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Quick approval for Personal Loan up to ₹25 Lakhs</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Home Loan with interest rates starting from 8.5%</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Business Loan up to ₹2 Crore without collateral</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Over Draft facility with flexible repayment options</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Property Loan against residential/commercial property</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Credit Card with attractive rewards & lifetime free offer</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Support:</strong> For urgent financial matters, please call our 24/7 hotline at +91 9625973190
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">What is the minimum CIBIL score for a Personal Loan?</h3>
              <p className="text-gray-600">We require a minimum CIBIL score of 650 for Personal Loan approval.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">How much loan can I get for my property?</h3>
              <p className="text-gray-600">You can get up to 60-70% of your property's market value as a Property Loan.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">What documents are required for Business Loan?</h3>
              <p className="text-gray-600">Basic KYC, business vintage proof, ITR for last 3 years, and bank statements.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">How long does it take to get a Credit Card?</h3>
              <p className="text-gray-600">Credit cards are typically approved and delivered within 7-10 business days.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">What is the interest rate for Home Loan?</h3>
              <p className="text-gray-600">Home loan interest rates start from 8.5% per annum, depending on your profile.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Is Over Draft facility available for existing current account?</h3>
              <p className="text-gray-600">Yes, OD facility can be availed against your current account based on eligibility.</p>
            </div>
          </div>
        </div>
      </section>
    </Wraper>
  );
};

export default Contact;