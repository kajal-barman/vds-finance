import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
    FaGavel,
    FaFileContract,
    FaUserCheck,
    FaShieldAlt,
    FaCreditCard,
    FaExchangeAlt,
    FaChartLine,
    FaMobileAlt,
    FaEnvelope,
    FaLock,
    FaBan,
    FaExclamationTriangle,
    FaCheckCircle,
    FaArrowRight,
    FaChevronDown,
    FaChevronUp,
    FaRegClock,
    FaGlobe,
    FaUsers,
    FaBalanceScale,
    FaRegCopyright,
    FaCommentDots,
    FaPhoneAlt
} from 'react-icons/fa';
import { MdGavel, MdSecurity, MdUpdate } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';
import { BiSupport, BiTransfer } from 'react-icons/bi';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const TermsOfUsePage = () => {
    const [lastUpdated] = useState("March 15, 2025");
    const [effectiveDate] = useState("April 1, 2025");
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionId) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    // Terms of Use Sections
    const termsSections = [
        {
            id: 'acceptance',
            title: 'Acceptance of Terms',
            icon: <FaFileContract />,
            content: {
                description: 'By accessing or using VDS Finance\'s services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.',
                conditions: [
                    'You must be at least 18 years old to use our services',
                    'You must have the legal capacity to enter into binding agreements',
                    'You agree to comply with all applicable laws and regulations',
                    'You acknowledge that these terms may be updated from time to time'
                ]
            }
        },
        {
            id: 'account',
            title: 'Account Registration & Security',
            icon: <FaUserCheck />,
            content: {
                requirements: [
                    'Provide accurate and complete registration information',
                    'Maintain the security of your account credentials',
                    'Immediately notify us of any unauthorized account access',
                    'Be responsible for all activities under your account',
                    'One account per individual unless authorized by VDS Finance'
                ],
                security: [
                    'Use strong passwords and enable two-factor authentication',
                    'Do not share your login credentials with anyone',
                    'Log out after each session, especially on shared devices',
                    'Keep your contact information up to date for security alerts'
                ]
            }
        },
        {
            id: 'services',
            title: 'Services Offered',
            icon: <FaChartLine />,
            content: {
                services: [
                    'Investment accounts and portfolio management',
                    'Banking and payment processing services',
                    'Financial planning and advisory tools',
                    'Market data and research reports',
                    'Mobile and web-based account access',
                    'Customer support and educational resources'
                ],
                availability: [
                    'Services are subject to availability and may be modified or discontinued',
                    'Some services may have geographic restrictions',
                    'Additional terms may apply to specific services',
                    'We reserve the right to refuse service to anyone'
                ]
            }
        },
        {
            id: 'investments',
            title: 'Investment Terms & Risks',
            icon: <FaChartLine />,
            content: {
                risks: [
                    'All investments carry risk, including potential loss of principal',
                    'Past performance does not guarantee future results',
                    'Market conditions can change rapidly and affect investments',
                    'You are responsible for your own investment decisions'
                ],
                disclosures: [
                    'Investment values fluctuate and may be worth more or less than original cost',
                    'Dividends and returns are not guaranteed',
                    'Some investments may have minimum holding periods',
                    'Fees and expenses may apply to investment products'
                ]
            }
        },
        {
            id: 'payments',
            title: 'Payments, Fees & Transactions',
            icon: <FaCreditCard />,
            content: {
                fees: [
                    'Account maintenance fees may apply',
                    'Transaction fees vary by product and service',
                    'Wire transfer and withdrawal fees as disclosed',
                    'International transaction fees may apply',
                    'Fee schedule is subject to change with notice'
                ],
                transactions: [
                    'All transactions are subject to verification and approval',
                    'We reserve the right to cancel or reverse transactions',
                    'Processing times may vary by transaction type',
                    'You are responsible for ensuring sufficient funds'
                ]
            }
        },
        {
            id: 'conduct',
            title: 'Prohibited Activities',
            icon: <FaBan />,
            content: {
                prohibited: [
                    'Money laundering or illegal activities',
                    'Fraudulent transactions or identity theft',
                    'Market manipulation or insider trading',
                    'Hacking, reverse engineering, or security breaches',
                    'Harassment or abuse of our employees or other users',
                    'Violating any applicable laws or regulations'
                ],
                consequences: [
                    'Account suspension or termination',
                    'Legal action and reporting to authorities',
                    'Forfeiture of funds related to illegal activities',
                    'Permanent ban from our platform'
                ]
            }
        },
        {
            id: 'intellectual',
            title: 'Intellectual Property',
            icon: <FaRegCopyright />,
            content: {
                ownership: [
                    'All content, trademarks, and logos are owned by VDS Finance',
                    'You may not copy, modify, or distribute our proprietary content',
                    'Unauthorized use may result in legal action',
                    'Limited license granted for personal, non-commercial use'
                ],
                usage: [
                    'You retain ownership of your user-generated content',
                    'You grant us license to use your content to provide services',
                    'We respect third-party intellectual property rights'
                ]
            }
        },
        {
            id: 'liability',
            title: 'Limitation of Liability',
            icon: <FaBalanceScale />,
            content: {
                limitations: [
                    'We are not liable for indirect or consequential damages',
                    'Our liability is limited to the amount you paid in fees',
                    'We do not guarantee uninterrupted or error-free service',
                    'You use our services at your own risk'
                ],
                exclusions: [
                    'We are not responsible for third-party service disruptions',
                    'Not liable for losses due to market volatility',
                    'Force majeure events exempt from liability',
                    'Security breaches beyond our reasonable control'
                ]
            }
        },
        {
            id: 'termination',
            title: 'Account Termination',
            icon: <FaBan />,
            content: {
                termination: [
                    'You may close your account at any time',
                    'We may suspend or terminate accounts for violations',
                    'Termination does not relieve outstanding obligations',
                    'Funds will be returned after account closure process'
                ],
                effects: [
                    'Access to services immediately revoked',
                    'Pending transactions may be cancelled',
                    'Data retention as required by law',
                    'Survival of certain provisions after termination'
                ]
            }
        },
        {
            id: 'disputes',
            title: 'Dispute Resolution',
            icon: <FaGavel />,
            content: {
                resolution: [
                    'Informal dispute resolution preferred',
                    'Arbitration required for most disputes',
                    'Class action waiver applies',
                    'Small claims court option available'
                ],
                process: [
                    'Contact support to resolve issues first',
                    'Arbitration administered by American Arbitration Association',
                    'Governing law: Delaware, USA',
                    '30-day opt-out period for arbitration'
                ]
            }
        },
        {
            id: 'amendments',
            title: 'Amendments to Terms',
            icon: <MdUpdate />,
            content: {
                changes: [
                    'We may update terms with notice via email or website',
                    'Continued use constitutes acceptance of changes',
                    'Material changes will be highlighted',
                    'You may close account if you disagree with changes'
                ],
                notification: [
                    'Email notification for significant changes',
                    'Website banner announcements',
                    'Account alerts and messages',
                    '30-day notice for material changes'
                ]
            }
        }
    ];

    // Key Terms Highlights
    const keyHighlights = [
        {
            icon: <FaShieldAlt />,
            title: "Protection",
            description: "Your investments are protected by industry-leading security"
        },
        {
            icon: <FaUserCheck />,
            title: "Responsibility",
            description: "You are responsible for maintaining account security"
        },
        {
            icon: <FaExclamationTriangle />,
            title: "Risk Acknowledgment",
            description: "All investments carry inherent risks"
        },
        {
            icon: <FaBalanceScale />,
            title: "Fair Practice",
            description: "Committed to transparent and fair dealing"
        }
    ];

    // Important Legal Notices
    const legalNotices = [
        {
            title: "No Investment Advice",
            description: "VDS Finance does not provide personalized investment advice. All information is for informational purposes only."
        },
        {
            title: "Not FDIC Insured",
            description: "Investment products are not FDIC insured, not bank guaranteed, and may lose value."
        },
        {
            title: "Tax Implications",
            description: "You are responsible for any tax liabilities arising from your investment activities."
        },
        {
            title: "Electronic Communications",
            description: "By using our services, you consent to receive electronic communications from us."
        }
    ];

    // Quick Contact Options
    const contactOptions = [
        {
            icon: <FaEnvelope />,
            title: "Legal Team",
            contact: "legal@vdsfinance.com",
            description: "For legal inquiries and notices"
        },
        {
            icon: <FaCommentDots />,
            title: "Support",
            contact: "support@vdsfinance.com",
            description: "For general questions and assistance"
        },
        {
            icon: <FaPhoneAlt />,
            title: "Compliance",
            contact: "1-800-COMPLY",
            description: "For compliance-related matters"
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
                                <MdGavel size={32} />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
                            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                                Please read these terms carefully before using VDS Finance services. By using our platform, you agree to be bound by these terms.
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-6 text-indigo-200">
                                <div className="flex items-center gap-2">
                                    <FaRegClock size={14} />
                                    <span>Last Updated: {lastUpdated}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaGavel size={14} />
                                    <span>Effective: {effectiveDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Important Notice */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
                        <div className="flex items-start gap-4">
                            <FaExclamationTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Legal Notice</h3>
                                <p className="text-yellow-700">
                                    These Terms of Use constitute a legally binding agreement between you and VDS Finance.
                                    Please read them carefully. If you do not agree with any part of these terms, you must not use our services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {keyHighlights.map((highlight, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg transition-all">
                                <div className="inline-flex p-3 bg-indigo-50 rounded-xl text-indigo-600 mb-4">
                                    {highlight.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{highlight.title}</h3>
                                <p className="text-sm text-slate-500">{highlight.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Terms Sections - Accordion Style */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Terms & Conditions</h2>
                        <div className="space-y-4">
                            {termsSections.map((section) => (
                                <div key={section.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
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

                                    {openSections[section.id] && (
                                        <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                                            {section.id === 'acceptance' && (
                                                <div className="space-y-4">
                                                    <p className="text-slate-600">{section.content.description}</p>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-700 mb-3">Conditions of Use:</h4>
                                                        <ul className="space-y-2">
                                                            {section.content.conditions.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}

                                            {section.id === 'account' && (
                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="font-semibold text-slate-700 mb-3">Account Requirements</h4>
                                                        <ul className="space-y-2">
                                                            {section.content.requirements.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-700 mb-3">Security Best Practices</h4>
                                                        <ul className="space-y-2">
                                                            {section.content.security.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                                    <FaLock className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}

                                            {(section.id === 'services' || section.id === 'investments' || section.id === 'payments') && (
                                                <div className="space-y-6">
                                                    {Object.keys(section.content).map((key) => (
                                                        <div key={key}>
                                                            <h4 className="font-semibold text-slate-700 mb-3 capitalize">
                                                                {key === 'services' ? 'Services Provided' :
                                                                    key === 'availability' ? 'Service Availability' :
                                                                        key === 'risks' ? 'Investment Risks' :
                                                                            key === 'disclosures' ? 'Important Disclosures' :
                                                                                key === 'fees' ? 'Fees & Charges' :
                                                                                    'Transaction Terms'}
                                                            </h4>
                                                            <ul className="space-y-2">
                                                                {section.content[key].map((item, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                                        <FaArrowRight className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {(section.id === 'conduct' || section.id === 'termination') && (
                                                <div className="space-y-6">
                                                    {Object.keys(section.content).map((key) => (
                                                        <div key={key}>
                                                            <h4 className="font-semibold text-slate-700 mb-3 capitalize">
                                                                {key === 'prohibited' ? 'Prohibited Activities' :
                                                                    key === 'consequences' ? 'Consequences of Violation' :
                                                                        key === 'termination' ? 'Termination Rights' :
                                                                            'Effects of Termination'}
                                                            </h4>
                                                            <ul className="space-y-2">
                                                                {section.content[key].map((item, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                                        <FaExclamationTriangle className="text-yellow-500 mt-1 flex-shrink-0" size={14} />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {(section.id === 'intellectual' || section.id === 'liability' || section.id === 'disputes' || section.id === 'amendments') && (
                                                <div className="space-y-6">
                                                    {Object.keys(section.content).map((key) => (
                                                        <div key={key}>
                                                            <h4 className="font-semibold text-slate-700 mb-3 capitalize">
                                                                {key === 'ownership' ? 'Ownership Rights' :
                                                                    key === 'usage' ? 'Usage Rights' :
                                                                        key === 'limitations' ? 'Liability Limitations' :
                                                                            key === 'exclusions' ? 'Exclusions' :
                                                                                key === 'resolution' ? 'Resolution Methods' :
                                                                                    key === 'process' ? 'Resolution Process' :
                                                                                        key === 'changes' ? 'Changes to Terms' :
                                                                                            'Notification Methods'}
                                                            </h4>
                                                            <ul className="space-y-2">
                                                                {section.content[key].map((item, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                                        <FaBalanceScale className="text-indigo-500 mt-1 flex-shrink-0" size={14} />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Notices */}
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <FaExclamationTriangle className="text-indigo-600" size={24} />
                            <h2 className="text-2xl font-bold text-slate-800">Important Legal Notices</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {legalNotices.map((notice, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all">
                                    <h3 className="font-semibold text-slate-800 mb-2">{notice.title}</h3>
                                    <p className="text-slate-600 text-sm">{notice.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
                        <div className="text-center mb-6">
                            <FaUsers className="text-indigo-600 mx-auto mb-3" size={32} />
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">Questions About These Terms?</h2>
                            <p className="text-slate-600">Our legal team is available to address any questions or concerns</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {contactOptions.map((option, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-5 text-center hover:shadow-md transition-all">
                                    <div className="inline-flex p-3 bg-indigo-50 rounded-xl text-indigo-600 mb-3">
                                        {option.icon}
                                    </div>
                                    <h3 className="font-semibold text-slate-800 mb-1">{option.title}</h3>
                                    <p className="text-sm text-indigo-600 font-medium mb-1">{option.contact}</p>
                                    <p className="text-xs text-slate-500">{option.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Acknowledgment Section */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-start gap-4">
                            <FaCheckCircle className="text-green-500 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">Acknowledgment of Terms</h3>
                                <p className="text-slate-600 mb-3">
                                    By using VDS Finance services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                                    You also agree to comply with all applicable laws and regulations regarding your use of our services.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                        I Accept the Terms
                                    </button>
                                    <button className="px-5 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center text-sm text-slate-500">
                        <p>© 2025 VDS Finance. All rights reserved. These Terms of Use are subject to change.</p>
                        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
                            <span>•</span>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a>
                            <span>•</span>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Disclosures</a>
                            <span>•</span>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wraper>
    );
};

export default TermsOfUsePage;