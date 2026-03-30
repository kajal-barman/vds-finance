import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper'; // Fixed typo
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaCookie,
  FaDatabase,
  FaEye,
  FaGlobe,
  FaEnvelope,
  FaMobileAlt,
  FaCreditCard,
  FaFileAlt,
  FaUserCheck,
  FaClock,
  FaPhoneAlt,
  FaGavel,
  FaBell,
  FaUserShield,
  FaShareAlt,
  FaTrash,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import { MdPrivacyTip, MdSecurity, MdUpdate } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';
import { BiCookie } from 'react-icons/bi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  const [lastUpdated] = useState("March 15, 2025");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Privacy Policy Sections
  const policySections = [
    {
      id: 'information',
      title: 'Information We Collect',
      icon: <FaDatabase />,
      content: {
        personalInfo: [
          'Full name, date of birth, and government-issued ID',
          'Contact information (email, phone number, address)',
          'Social Security Number or Tax ID for verification',
          'Employment and income information'
        ],
        financialInfo: [
          'Bank account details and transaction history',
          'Investment portfolio and trading activity',
          'Credit score and credit history',
          'Payment card information'
        ],
        technicalInfo: [
          'IP address and device information',
          'Browser type and operating system',
          'Cookies and usage data',
          'Location data (with your consent)'
        ]
      }
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: <FaEye />,
      content: {
        purposes: [
          'Verify your identity and prevent fraud',
          'Process transactions and manage your account',
          'Provide customer support and service improvements',
          'Comply with legal and regulatory requirements',
          'Send important updates and security alerts',
          'Personalize your experience and offer relevant products',
          'Conduct analytics and improve our services'
        ]
      }
    },
    {
      id: 'sharing',
      title: 'Information Sharing & Disclosure',
      icon: <FaShareAlt />,
      content: {
        sharing: [
          'We do not sell your personal information to third parties',
          'Share with service providers who assist in operations (banking partners, payment processors)',
          'Required by law or legal process (court orders, regulatory authorities)',
          'With your consent or at your direction',
          'In connection with business transfers (mergers, acquisitions)'
        ],
        thirdParties: [
          'Financial institutions and payment networks',
          'Identity verification services',
          'Cloud service providers',
          'Analytics and security partners'
        ]
      }
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: <FaLock />,
      content: {
        measures: [
          '256-bit SSL encryption for all data transmission',
          'Multi-factor authentication for account access',
          'Regular security audits and penetration testing',
          'Biometric authentication options',
          'Real-time fraud monitoring systems',
          'Secure data centers with 24/7 monitoring'
        ],
        practices: [
          'Employee background checks and security training',
          'Strict access controls and data minimization',
          'Regular backup and disaster recovery protocols',
          'Compliance with industry security standards (PCI DSS, SOC 2)'
        ]
      }
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking Technologies',
      icon: <FaCookie />,
      content: {
        types: [
          'Essential cookies - Required for basic site functionality',
          'Analytics cookies - Help us understand how you use our services',
          'Preference cookies - Remember your settings and preferences',
          'Marketing cookies - Used to deliver relevant advertisements'
        ],
        control: [
          'You can manage cookie preferences in your browser settings',
          'Opt-out of non-essential cookies through our cookie consent tool',
          'Disable cookies entirely, but some features may not function properly'
        ]
      }
    },
    {
      id: 'rights',
      title: 'Your Privacy Rights',
      icon: <FaUserShield />,
      content: {
        rights: [
          'Right to access - Request a copy of your personal data',
          'Right to correction - Update inaccurate or incomplete information',
          'Right to deletion - Request deletion of your data (subject to legal requirements)',
          'Right to portability - Receive your data in a structured format',
          'Right to opt-out - Decline marketing communications',
          'Right to restrict processing - Limit how we use your data'
        ],
        howTo: [
          'Contact our Privacy Team at privacy@vdsfinance.com',
          'Use the "Privacy Settings" in your account dashboard',
          'Call our dedicated privacy hotline at 1-800-PRIVACY'
        ]
      }
    },
    {
      id: 'retention',
      title: 'Data Retention',
      icon: <FaClock />,
      content: {
        periods: [
          'Account information - Retained while account is active + 5 years',
          'Transaction records - Retained for 7 years (regulatory requirement)',
          'Communication records - Retained for 3 years',
          'Marketing data - Retained until you opt-out',
          'Cookies - Varies by type (session to 2 years)'
        ]
      }
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      icon: <FaUserSecret />,
      content: {
        policy: [
          'VDS Finance services are not intended for individuals under 18',
          'We do not knowingly collect information from minors',
          'If we discover data from a minor, we will delete it immediately',
          'Parents/guardians may contact us to remove a minor\'s information'
        ]
      }
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: <FaGlobe />,
      content: {
        transfers: [
          'Data may be processed in countries with different privacy laws',
          'We implement Standard Contractual Clauses for data transfers',
          'Ensure adequate protection through Privacy Shield frameworks',
          'Comply with GDPR for EU residents and CCPA for California residents'
        ]
      }
    },
    {
      id: 'updates',
      title: 'Policy Updates',
      icon: <MdUpdate />,
      content: {
        updates: [
          'We may update this policy periodically to reflect changes in practices',
          'Material changes will be notified via email and account alerts',
          'Continued use of services constitutes acceptance of updates',
          'Review the "Last Updated" date at the top of this page',
          'Previous versions available upon request'
        ]
      }
    }
  ];

  // Key Privacy Features
  const privacyFeatures = [
    {
      icon: <FaLock />,
      title: "Data Encryption",
      description: "All data encrypted at rest and in transit"
    },
    {
      icon: <FaUserCheck />,
      title: "Your Data, Your Control",
      description: "Manage privacy settings in your dashboard"
    },
    {
      icon: <FaShieldAlt />,
      title: "GDPR Compliant",
      description: "Full compliance with international privacy laws"
    },
    {
      icon: <FaClock />,
      title: "Data Portability",
      description: "Export your data anytime"
    }
  ];

  // Frequently Asked Questions about Privacy
  const privacyFAQs = [
    {
      question: "How do I request a copy of my data?",
      answer: "You can request a copy of your personal data through your account settings under 'Privacy Center' or by emailing privacy@vdsfinance.com. We will respond within 30 days."
    },
    {
      question: "How long does it take to delete my account?",
      answer: "Account deletion requests are processed within 7-14 business days. Some data may be retained for legal and regulatory compliance as outlined in our retention policy."
    },
    {
      question: "Do you sell my personal information?",
      answer: "No, VDS Finance does not sell your personal information to third parties. We only share data as necessary to provide our services or as required by law."
    },
    {
      question: "How can I opt out of marketing emails?",
      answer: "You can opt out by clicking 'unsubscribe' in any marketing email or by updating your notification preferences in account settings."
    }
  ];

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-2xl mb-4">
                <MdPrivacyTip size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-indigo-200">
                <FaClock size={14} />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 mb-8 border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <HiOutlineDocumentSearch className="text-indigo-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Commitment to Privacy</h2>
                <p className="text-slate-600 leading-relaxed">
                  At VDS Finance, we are committed to protecting your privacy and ensuring the security of your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                  We adhere to strict data protection standards and comply with applicable privacy laws including GDPR, CCPA, and other regulations.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                    <FaCheckCircle size={14} />
                    <span className="text-sm font-medium">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                    <FaCheckCircle size={14} />
                    <span className="text-sm font-medium">CCPA Ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                    <FaCheckCircle size={14} />
                    <span className="text-sm font-medium">PCI DSS Level 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {privacyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className="inline-flex p-3 bg-indigo-50 rounded-xl text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Policy Sections - Accordion Style */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Privacy Policy Details</h2>
            <div className="space-y-4">
              {policySections.map((section) => (
                <div key={section.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <Link to={'/contact'}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-indigo-600">
                          {section.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">{section.title}</h3>
                      </div>
                      {openSections[section.id] ? (
                        <FaChevronUp className="text-slate-400" />
                      ) : (
                        <FaChevronDown className="text-slate-400" />
                      )}
                    </button>
                  </Link>

                  {openSections[section.id] && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                      {section.id === 'information' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Personal Information</h4>
                            <ul className="space-y-2">
                              {section.content.personalInfo.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Financial Information</h4>
                            <ul className="space-y-2">
                              {section.content.financialInfo.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Technical Information</h4>
                            <ul className="space-y-2">
                              {section.content.technicalInfo.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === 'usage' && (
                        <div>
                          <ul className="space-y-2">
                            {section.content.purposes.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-600">
                                <FaArrowRight className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.id === 'sharing' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">When We Share Information</h4>
                            <ul className="space-y-2">
                              {section.content.sharing.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaArrowRight className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Third-Party Partners</h4>
                            <ul className="space-y-2">
                              {section.content.thirdParties.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaArrowRight className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === 'security' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Security Measures</h4>
                            <ul className="space-y-2">
                              {section.content.measures.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Security Practices</h4>
                            <ul className="space-y-2">
                              {section.content.practices.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === 'cookies' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Types of Cookies We Use</h4>
                            <ul className="space-y-2">
                              {section.content.types.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <BiCookie className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Your Control</h4>
                            <ul className="space-y-2">
                              {section.content.control.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === 'rights' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">Your Privacy Rights</h4>
                            <ul className="space-y-2">
                              {section.content.rights.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-3">How to Exercise Your Rights</h4>
                            <ul className="space-y-2">
                              {section.content.howTo.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                  <FaArrowRight className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {(section.id === 'retention' || section.id === 'children' || section.id === 'international' || section.id === 'updates') && (
                        <div>
                          <ul className="space-y-2">
                            {Object.values(section.content)[0].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-600">
                                <FaArrowRight className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Privacy FAQ Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <FaQuestionCircle className="text-indigo-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {privacyFAQs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Privacy Team */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl">
                  <FaEnvelope className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Questions About Privacy?</h3>
                  <p className="text-slate-600">
                    Contact our Privacy Team for any questions or concerns about your personal data.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <FaEnvelope size={14} />
                      <span>privacy@vdsfinance.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <FaPhoneAlt size={14} />
                      <span>1-800-PRIVACY</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={'/contact'}>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap">
                  Contact Privacy Team
                </button>
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>© 2025 VDS Finance. All rights reserved. This privacy policy is subject to change.</p>
            <div className="mt-2 flex items-center justify-center gap-4">
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">Data Processing Agreement</a>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default PrivacyPolicyPage;