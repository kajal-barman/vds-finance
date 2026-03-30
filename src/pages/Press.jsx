import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
    FaNewspaper,
    FaCalendarAlt,
    FaDownload,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaExternalLinkAlt,
    FaQuoteLeft,
    FaChartLine,
    FaAward,
    FaUsers,
    FaBuilding,
    FaGlobe,
    FaVideo,
    FaImage,
    FaFilePdf,
    FaSearch,
    FaRegBuilding,
    FaTrophy,
    FaHandshake,
    FaRocket,
    FaBullhorn
} from 'react-icons/fa';
import { MdEvent, MdTrendingUp, MdLocalPrintshop, MdLocationOn, MdBusiness, MdSchool } from 'react-icons/md';

const Press = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedNews, setSelectedNews] = useState(null);

    // Press Releases Data with professional images
    const pressReleases = [
        {
            id: 1,
            title: "VDS Finance Raises $50 Million in Series C Funding to Expand Digital Lending Platform",
            date: "March 15, 2026",
            category: "funding",
            excerpt: "VDS Finance, a leading fintech company, announced today that it has raised $50 million in Series C funding led by Global Capital Partners. The investment will accelerate the company's expansion plans and enhance its AI-driven lending platform.",
            content: "NOIDA, India – VDS Finance, a leading digital lending platform headquartered in Noida, today announced it has raised $50 million in Series C funding. The round was led by Global Capital Partners with participation from existing investors including Growth Ventures and Innovation Fund. This investment brings the company's total funding to $85 million.\n\nThe new capital will be used to expand VDS Finance's presence across Tier 2 and Tier 3 cities, enhance its AI-powered credit assessment technology, and double its engineering team. The company plans to onboard over 1 million new customers in the next 12 months.\n\n'This funding validates our mission to make credit accessible to underserved segments of the Indian population,' said Rajesh Mehta, CEO of VDS Finance. 'We're excited to partner with Global Capital Partners as we enter our next phase of growth.'\n\nVDS Finance has disbursed over ₹2,000 crore in loans to more than 500,000 customers since its launch in 2020. The platform uses advanced algorithms and alternative data sources to assess creditworthiness, enabling faster approvals and personalized interest rates.",
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop",
            icon: "💰",
            author: "Press Release",
            tags: ["Funding", "Investment", "Growth"]
        },
        {
            id: 2,
            title: "VDS Finance Launches 'Women Entrepreneur Loan' Program to Support Female Business Owners",
            date: "February 10, 2026",
            category: "product",
            excerpt: "In celebration of International Women's Day, VDS Finance introduces a specialized loan program offering lower interest rates and flexible terms for women entrepreneurs across India.",
            content: "NOIDA, India – VDS Finance today announced the launch of its 'Women Entrepreneur Loan' program, designed to empower female business owners across India. The initiative offers loans up to ₹50 lakh at competitive interest rates with minimal documentation and quick approval times.\n\nThe program includes mentorship opportunities, business networking events, and financial literacy workshops in partnership with leading women's business organizations. Eligible businesses include startups, small enterprises, and women-led MSMEs.\n\n'Women entrepreneurs face unique challenges when it comes to accessing credit,' said Priya Sharma, Chief Product Officer at VDS Finance. 'We've designed this program to address those barriers and provide the financial support women need to grow their businesses.'\n\nThe launch coincides with a company-wide commitment to increase lending to women-owned businesses by 200% over the next three years.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=400&fit=crop",
            icon: "👩‍💼",
            author: "Press Release",
            tags: ["Product Launch", "Women Empowerment", "MSME"]
        },
        {
            id: 3,
            title: "VDS Finance Named 'Best Digital Lending Platform' at India Fintech Awards 2026",
            date: "January 20, 2026",
            category: "award",
            excerpt: "The company receives prestigious recognition for its innovative approach to credit assessment and customer-centric digital lending solutions.",
            content: "NOIDA, India – VDS Finance has been awarded the 'Best Digital Lending Platform' at the India Fintech Awards 2026. The award recognizes the company's innovative use of technology to provide accessible and affordable credit solutions to underserved segments.\n\nThe awards jury praised VDS Finance's AI-driven credit assessment model, which has enabled the company to maintain industry-leading approval rates while keeping default rates below industry averages.\n\n'This recognition is a testament to the hard work of our entire team,' said Rajesh Mehta, CEO of VDS Finance. 'We remain committed to leveraging technology to create financial inclusion and transform the lending experience for millions of Indians.'\n\nThe India Fintech Awards, now in their sixth year, celebrate excellence and innovation in the country's rapidly growing fintech sector.",
            image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=400&fit=crop",
            icon: "🏆",
            author: "Press Release",
            tags: ["Award", "Recognition", "Fintech"]
        },
        {
            id: 4,
            title: "VDS Finance Partners with Leading Banks to Offer Co-Branded Credit Cards",
            date: "December 05, 2025",
            category: "partnership",
            excerpt: "Strategic partnership with HDFC Bank and ICICI Bank to launch innovative credit card products with enhanced rewards and flexible repayment options.",
            content: "NOIDA, India – VDS Finance today announced strategic partnerships with HDFC Bank and ICICI Bank to launch co-branded credit cards designed for the modern Indian consumer. The cards offer enhanced rewards on digital spending, flexible repayment options, and exclusive benefits for VDS Finance customers.\n\nThe partnership combines VDS Finance's digital lending expertise with the banking infrastructure of India's leading financial institutions. Customers can apply for the cards directly through the VDS Finance app, with instant approval and digital delivery.\n\n'This collaboration marks an important milestone in our journey to become a comprehensive financial services platform,' said Rajesh Mehta, CEO. 'We're excited to offer our customers more ways to manage their finances and earn rewards.'\n\nThe co-branded cards will be rolled out in phases starting Q1 2026.",
            image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=400&fit=crop",
            icon: "🤝",
            author: "Press Release",
            tags: ["Partnership", "Credit Cards", "Banking"]
        },
        {
            id: 5,
            title: "VDS Finance Reports 150% YoY Growth in Loan Disbursements for FY2025",
            date: "November 18, 2025",
            category: "financial",
            excerpt: "The company crosses ₹3,500 crore in annual loan disbursements, driven by strong demand for personal and small business loans across India.",
            content: "NOIDA, India – VDS Finance today announced its financial results for the fiscal year ended March 31, 2026, reporting 150% year-over-year growth in loan disbursements, reaching ₹3,500 crore. The company also reported a 120% increase in active customers, now serving over 750,000 users.\n\nKey highlights include:\n• Total loan disbursements: ₹3,500 crore (up 150% YoY)\n• Active customers: 750,000+ (up 120% YoY)\n• Revenue: ₹280 crore (up 135% YoY)\n• Gross NPA: 2.8% (improved from 3.5% last year)\n\n'The strong financial performance reflects our focus on product innovation, customer experience, and risk management,' said CFO Anjali Kapoor. 'We're proud of our growth while maintaining asset quality discipline.'\n\nThe company's expansion into Tier 2 and Tier 3 cities has been a key growth driver, with these markets now accounting for 40% of total disbursements.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
            icon: "📊",
            author: "Press Release",
            tags: ["Financial Results", "Growth", "Performance"]
        },
        {
            id: 6,
            title: "VDS Finance Launches Financial Literacy Initiative 'Smart Money' for Rural Communities",
            date: "October 22, 2025",
            category: "csr",
            excerpt: "The company commits ₹10 crore over three years to educate rural communities about digital payments, savings, and responsible borrowing.",
            content: "NOIDA, India – VDS Finance today announced the launch of 'Smart Money,' a comprehensive financial literacy program aimed at rural communities across Maharashtra, Uttar Pradesh, and Tamil Nadu. The initiative will reach over 500,000 individuals through workshops, digital content, and community outreach programs.\n\nThe program covers topics including digital payments, budgeting, savings, responsible borrowing, and fraud prevention. It will be implemented in partnership with local NGOs and government agencies.\n\n'Financial inclusion goes beyond just providing credit,' said Rajesh Mehta, CEO. 'We believe in empowering people with the knowledge and skills to make informed financial decisions. The Smart Money initiative reflects our commitment to creating lasting impact in communities.'\n\nThe company has committed ₹10 crore to the program over three years and aims to expand it to additional states based on initial success.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
            icon: "📚",
            author: "Press Release",
            tags: ["CSR", "Financial Literacy", "Rural Development"]
        }
    ];

    // Media Coverage Data with outlet logos
    const mediaCoverage = [
        {
            id: 1,
            title: "How VDS Finance is Revolutionizing Digital Lending in India",
            outlet: "Economic Times",
            date: "March 05, 2026",
            url: "#",
            logo: "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=100&h=100&fit=crop",
            quote: "VDS Finance's AI-driven approach to credit assessment is setting new standards in the industry.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            title: "Fintech Unicorn in the Making: VDS Finance's Growth Story",
            outlet: "Forbes India",
            date: "February 18, 2026",
            url: "#",
            logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
            quote: "With its innovative products and rapid expansion, VDS Finance is poised to become India's next fintech unicorn.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            title: "VDS Finance: Making Credit Accessible to the Underserved",
            outlet: "Business Standard",
            date: "January 25, 2026",
            url: "#",
            logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&h=100&fit=crop",
            quote: "The company's focus on Tier 2 and Tier 3 cities is democratizing access to credit across India.",
            image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            title: "Interview with Rajesh Mehta: The Vision Behind VDS Finance",
            outlet: "YourStory",
            date: "December 12, 2025",
            url: "#",
            logo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=100&h=100&fit=crop",
            quote: "Our mission is to use technology to create financial inclusion and transform lives.",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
        }
    ];

    // Filter press releases
    const filteredPressReleases = pressReleases.filter(release => {
        const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory;
        const matchesYear = selectedYear === 'all' || release.date.includes(selectedYear);
        const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            release.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesYear && matchesSearch;
    });

    // Get unique years for filter
    const years = ['all', ...new Set(pressReleases.map(release => release.date.split(',')[1]?.trim() || release.date.split(' ')[2]))];

    // Category filter buttons
    const categories = [
        { id: 'all', label: 'All News', icon: FaNewspaper, color: 'blue' },
        { id: 'funding', label: 'Funding', icon: FaRocket, color: 'green' },
        { id: 'product', label: 'Products', icon: FaChartLine, color: 'purple' },
        { id: 'partnership', label: 'Partnerships', icon: FaHandshake, color: 'orange' },
        { id: 'award', label: 'Awards', icon: FaTrophy, color: 'yellow' },
        { id: 'financial', label: 'Financial', icon: FaChartLine, color: 'indigo' },
        { id: 'csr', label: 'CSR', icon: FaUsers, color: 'pink' }
    ];

    // Press Release Modal
    const PressReleaseModal = ({ release, onClose }) => {
        if (!release) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="relative">
                        <img
                            src={release.image}
                            alt={release.title}
                            className="w-full h-80 object-cover rounded-t-2xl"
                        />
                        <div className="absolute top-4 left-4 bg-black bg-opacity-60 rounded-full px-4 py-2 text-white text-2xl">
                            {release.icon}
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">
                            <span className="flex items-center gap-1">
                                <FaCalendarAlt className="w-4 h-4" />
                                {release.date}
                            </span>
                            <span className="capitalize bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {release.category}
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{release.title}</h2>
                        <p className="text-gray-600 mb-6">{release.author}</p>

                        <div className="prose max-w-none">
                            {release.content.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t">
                            <h4 className="font-semibold mb-3">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {release.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                                <MdLocalPrintshop className="w-5 h-5" />
                                Print Release
                            </button>
                            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition">
                                <FaDownload className="w-5 h-5" />
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Wraper>
            <div className="min-h-screen bg-gray-50 pt-20">
                {/* Hero Section with Image */}
                <section className="relative  bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=600&fit=crop')" }}
                    ></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                            <FaBullhorn className="w-5 h-5 mr-2" />
                            <span className="text-sm font-semibold">VDS FINANCE PRESS CENTER</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Press & Media</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Latest news, media coverage, and announcements from VDS Finance
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#press-releases" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                                Latest News
                            </a>
                            <a href="#media-coverage" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                                Media Coverage
                            </a>
                        </div>
                    </div>
                </section>

                {/* Media Contact Section with Office Image */}
                <section className="py-12 bg-white border-b">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <FaBuilding className="w-10 h-10 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Media Contact</h2>
                                <p className="text-gray-600">For media inquiries, please contact our press team</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <FaEnvelope className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold mb-1 text-gray-900">Email</h3>
                                    <a href="mailto:press@vdsfinance.com" className="text-blue-600 hover:underline">
                                        press@vdsfinance.com
                                    </a>
                                </div>
                                <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <FaPhone className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold mb-1 text-gray-900">Phone</h3>
                                    <a href="tel:+912012345678" className="text-blue-600 hover:underline">
                                        +91 120 1234 5678
                                    </a>
                                </div>
                                <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <FaMapMarkerAlt className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold mb-1 text-gray-900">Address</h3>
                                    <p className="text-gray-600">D Block D-36, Sector-2, Noida (UP) - 201301</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Press Releases Section */}
                <section id="press-releases" className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center bg-blue-100 rounded-full px-6 py-2 mb-4">
                                <FaNewspaper className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-blue-600 font-semibold">Latest Updates</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Press Releases</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Stay updated with the latest announcements from VDS Finance</p>
                        </div>

                        {/* Filters */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                            <div className="flex flex-wrap gap-3 mb-6">
                                {categories.map(category => {
                                    const IconComponent = category.icon;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${selectedCategory === category.id
                                                ? `bg-${category.color}-600 text-white shadow-md`
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                            style={selectedCategory === category.id ? { backgroundColor: '#2563eb' } : {}}
                                        >
                                            <IconComponent className="w-4 h-4" />
                                            {category.label}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search press releases..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <select
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                    >
                                        {years.map(year => (
                                            <option key={year} value={year}>
                                                {year === 'all' ? 'All Years' : year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Press Releases Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {filteredPressReleases.map(release => (
                                <div key={release.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                    <div className="relative overflow-hidden h-56">
                                        <img
                                            src={release.image}
                                            alt={release.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                                            {release.icon}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                            <span className="capitalize bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {release.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <FaCalendarAlt className="w-4 h-4" />
                                            <span>{release.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                                            <button onClick={() => setSelectedNews(release)} className="text-left">
                                                {release.title}
                                            </button>
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">{release.excerpt}</p>
                                        <button
                                            onClick={() => setSelectedNews(release)}
                                            className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group"
                                        >
                                            Read Full Release
                                            <FaExternalLinkAlt className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredPressReleases.length === 0 && (
                            <div className="text-center py-12 bg-white rounded-xl shadow-md">
                                <FaNewspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">No press releases found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Media Coverage Section */}
                <section id="media-coverage" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center bg-blue-100 rounded-full px-6 py-2 mb-4">
                                <FaQuoteLeft className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-blue-600 font-semibold">In the Spotlight</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">In the News</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">What the media is saying about VDS Finance</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mediaCoverage.map(article => (
                                <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    <div className="h-40 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.outlet}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                                                <img src={article.logo} alt={article.outlet} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm">{article.outlet}</p>
                                                <p className="text-xs text-gray-500">{article.date}</p>
                                            </div>
                                        </div>
                                        <FaQuoteLeft className="w-6 h-6 text-blue-200 mb-3" />
                                        <p className="text-gray-700 text-sm italic mb-4 line-clamp-3">"{article.quote}"</p>
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">{article.title}</h4>
                                        <a href={article.url} className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1 mt-2">
                                            Read Article <FaExternalLinkAlt className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Office Location Section with Image */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                                    alt="VDS Finance Office"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MdLocationOn className="w-5 h-5" />
                                        <span className="font-semibold">Our Headquarters</span>
                                    </div>
                                    <p className="text-sm opacity-90">Noida, India</p>
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center bg-blue-100 rounded-full px-6 py-2 mb-4">
                                    <FaBuilding className="w-5 h-5 text-blue-600 mr-2" />
                                    <span className="text-blue-600 font-semibold">Visit Us</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Headquarters</h2>
                                <p className="text-gray-600 mb-4 text-lg">VDS Finance</p>
                                <div className="space-y-2">
                                    <p className="text-gray-700 font-medium flex items-center justify-center md:justify-start gap-2">
                                        <MdLocationOn className="w-5 h-5 text-blue-600" />
                                        D Block D-36, Sector-2
                                    </p>
                                    <p className="text-gray-700 font-medium">Noida (UP) - 201301</p>
                                </div>
                                <p className="text-gray-500 text-sm mt-4">All press releases and announcements originate from our state-of-the-art Noida headquarters</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <FaGlobe className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
                            <p className="text-xl mb-8">Stay connected for the latest updates and announcements</p>
                            <div className="flex justify-center gap-6">
                                <a href="#" className="bg-white bg-opacity-20 p-4 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-white bg-opacity-20 p-4 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-white bg-opacity-20 p-4 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                                    <FaYoutube className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-white bg-opacity-20 p-4 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Subscription */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center bg-blue-100 rounded-full px-6 py-2 mb-4">
                                <FaEnvelope className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-blue-600 font-semibold">Stay Informed</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Subscribe to Press Updates</h2>
                            <p className="text-gray-600 mb-6">Get the latest news and announcements delivered to your inbox</p>
                            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Modal */}
                {selectedNews && (
                    <PressReleaseModal
                        release={selectedNews}
                        onClose={() => setSelectedNews(null)}
                    />
                )}
            </div>
        </Wraper>
    );
};

export default Press;