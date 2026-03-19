import React from 'react';
import Wraper from '../components/Architure/Wraper';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import { HiOutlineCheck } from 'react-icons/hi';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <Wraper>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
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
              <p className="text-gray-600">01204981142</p>
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
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
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="consultation">Book Consultation</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="bg-gray-100 rounded-lg h-96 mb-8 overflow-hidden">
                {/* Replace with actual Google Maps embed or image */}
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
                    <span className="text-gray-700">Certified financial advisors with 5+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Personalized financial strategies tailored to your goals</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Secure and confidential consultation process</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineCheck className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700">Free initial consultation for new clients</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Support:</strong> For urgent financial matters, please call our 24/7 hotline at +1 (888) 999-0123
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
              <h3 className="font-semibold text-lg mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">Yes, we offer video consultations for your convenience and safety.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Is my information secure?</h3>
              <p className="text-gray-600">We use bank-level encryption to protect all your personal and financial information.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">What services do you offer?</h3>
              <p className="text-gray-600">We provide comprehensive financial planning, investment management, and retirement advice.</p>
            </div>
          </div>
        </div>
      </section>
    </Wraper>
  );
};

export default Contact;