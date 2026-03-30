import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';

import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaGraduationCap,
  FaHeart,
  FaChartLine,
  FaUsers,
  FaLaptop,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaTimes
} from 'react-icons/fa';
import { MdWork, MdAttachMoney, MdLocalHospital } from 'react-icons/md';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Job openings data - all based in Noida Sector 2, D Block D-36
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Financial Analyst',
      department: 'Finance',
      location: 'Noida Sector 2, D Block D-36',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      description: 'We are seeking a skilled Financial Analyst to join our team at our Noida office. You will be responsible for analyzing financial data, creating reports, and providing insights to support business decisions.',
      responsibilities: [
        'Analyze financial data and create financial models',
        'Prepare monthly, quarterly, and annual reports',
        'Conduct market research and competitor analysis',
        'Collaborate with cross-functional teams',
        'Present findings to senior management'
      ],
      requirements: [
        'Bachelor\'s degree in Finance, Accounting, or related field',
        '3-5 years of experience in financial analysis',
        'Strong analytical and problem-solving skills',
        'Proficiency in Excel and financial software',
        'Excellent communication skills'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance',
        'Performance bonuses',
        'Professional development opportunities'
      ]
    },
    {
      id: 2,
      title: 'Loan Officer',
      department: 'Operations',
      location: 'Noida Sector 2, D Block D-36',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4-6 LPA',
      description: 'Join our team as a Loan Officer at our Noida headquarters to help customers find the right loan products. You will evaluate applications, assess creditworthiness, and guide clients through the loan process.',
      responsibilities: [
        'Evaluate loan applications and documentation',
        'Assess creditworthiness of applicants',
        'Guide clients through loan process',
        'Maintain relationships with existing clients',
        'Ensure compliance with regulations'
      ],
      requirements: [
        'Bachelor\'s degree in any field',
        '1-3 years of experience in banking or finance',
        'Knowledge of loan products and regulations',
        'Strong customer service skills',
        'Excellent communication abilities'
      ],
      benefits: [
        'Attractive incentives',
        'Health benefits',
        'Career growth opportunities',
        'Training programs'
      ]
    },
    {
      id: 3,
      title: 'Software Developer - Fintech',
      department: 'Technology',
      location: 'Noida Sector 2, D Block D-36',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹10-15 LPA',
      description: 'Looking for a passionate Software Developer to build innovative fintech solutions at our Noida development center. You will work on cutting-edge technologies to create scalable financial applications.',
      responsibilities: [
        'Develop and maintain web applications',
        'Write clean, scalable code',
        'Collaborate with product and design teams',
        'Implement security best practices',
        'Participate in code reviews'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '2-4 years of experience with React, Node.js',
        'Experience with REST APIs and databases',
        'Knowledge of financial systems is a plus',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Flexible work hours',
        'Remote work options',
        'Learning budget'
      ]
    },
    {
      id: 4,
      title: 'Risk Management Specialist',
      department: 'Risk & Compliance',
      location: 'Noida Sector 2, D Block D-36',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹12-18 LPA',
      description: 'We are hiring a Risk Management Specialist to join our Noida office. You will identify, assess, and mitigate financial risks, develop risk frameworks, and ensure regulatory compliance.',
      responsibilities: [
        'Identify and assess financial risks',
        'Develop risk management strategies',
        'Monitor compliance with regulations',
        'Prepare risk reports for management',
        'Conduct risk assessments and audits'
      ],
      requirements: [
        'Master\'s degree in Finance or Risk Management',
        '4-6 years of experience in risk management',
        'Knowledge of regulatory requirements',
        'Strong analytical skills',
        'Certification in risk management (FRM/PRM) preferred'
      ],
      benefits: [
        'Leadership opportunities',
        'Performance bonuses',
        'Comprehensive insurance',
        'Professional certifications'
      ]
    },
    {
      id: 5,
      title: 'Customer Support Executive',
      department: 'Customer Service',
      location: 'Noida Sector 2, D Block D-36',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹2.5-3.5 LPA',
      description: 'Join our customer support team at our Noida headquarters to assist clients with their queries about loans and financial products. You will provide exceptional service and resolve issues efficiently.',
      responsibilities: [
        'Handle customer queries via phone, email, and chat',
        'Resolve complaints and issues promptly',
        'Guide customers through processes',
        'Maintain customer records',
        'Provide product information'
      ],
      requirements: [
        'Graduate in any discipline',
        'Excellent communication skills',
        'Customer-focused attitude',
        'Basic computer knowledge',
        'Ability to work in shifts'
      ],
      benefits: [
        'Training provided',
        'Performance incentives',
        'Career advancement',
        'Friendly work environment'
      ]
    },
    {
      id: 6,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Noida Sector 2, D Block D-36',
      type: 'Full-time',
      experience: '5-7 years',
      salary: '₹12-16 LPA',
      description: 'Seeking an experienced Marketing Manager to lead our marketing initiatives from our Noida office. You will develop strategies to increase brand awareness and drive customer acquisition.',
      responsibilities: [
        'Develop and execute marketing strategies',
        'Manage digital marketing campaigns',
        'Analyze market trends and customer insights',
        'Lead a team of marketing professionals',
        'Track and report on campaign performance'
      ],
      requirements: [
        'MBA in Marketing or related field',
        '5-7 years of experience in marketing',
        'Experience in financial services preferred',
        'Strong leadership and communication skills',
        'Data-driven approach to marketing'
      ],
      benefits: [
        'Leadership role',
        'Performance bonuses',
        'Health benefits',
        'Professional development'
      ]
    }
  ];

  // Departments for filters
  const departments = ['all', 'Finance', 'Operations', 'Technology', 'Risk & Compliance', 'Customer Service', 'Marketing'];
  // Only one location available
  const locations = ['all', 'Noida Sector 2, D Block D-36'];

  // Filter jobs based on selections
  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  // Job Application Form Component
  const ApplicationForm = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Application submitted successfully! We will contact you soon.');
      onClose();
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">Apply for {job.title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
              <input
                type="text"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g., 2-3 years"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
              <input
                type="file"
                name="resume"
                required
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                rows="4"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're interested in this position..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Job Detail Modal Component
  const JobDetailModal = ({ job, onClose, onApply }) => {
    if (!job) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <FaBriefcase className="text-blue-600" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaClock className="text-blue-600" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MdAttachMoney className="text-blue-600" />
                <span>{job.salary}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Job Description</h4>
              <p className="text-gray-600">{job.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Key Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Requirements</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">What We Offer</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.benefits.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                onClose();
                onApply(job);
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team at VDS Finance</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Build your career with a leading financial services company.
              We're looking for talented individuals to join us at our Noida headquarters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Noida HQ</div>
                <div>Sector 2, D Block D-36</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">50+</div>
                <div>Open Positions</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">100k+</div>
                <div>Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join VDS Finance?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Accelerate your career with continuous learning and development programs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
                <p className="text-gray-600">Collaborative environment that values diversity and inclusion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdLocalHospital className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Benefits Package</h3>
                <p className="text-gray-600">Competitive compensation, health insurance, and performance bonuses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLaptop className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible work arrangements and supportive work environment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location Highlight */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <FaMapMarkerAlt className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Office Location</h3>
              <p className="text-xl text-gray-700 mb-2">VDS Finance Headquarters</p>
              <p className="text-lg text-gray-600">Noida Sector 2, D Block D-36</p>
              <p className="text-gray-500 mt-4">All positions are based at our state-of-the-art Noida facility</p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
            <p className="text-gray-600 text-center mb-12">All positions are based at our Noida Sector 2, D Block D-36 office</p>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by title or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>
                        {dept === 'all' ? 'All Departments' : dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc}>
                        {loc === 'all' ? 'All Locations' : loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredJobs.map(job => (
                  <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span className="text-sm">Noida Sector 2, D Block D-36</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaClock className="w-4 h-4" />
                        <span className="text-sm">{job.type} • {job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MdAttachMoney className="w-4 h-4" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      View Details <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Employees Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Rahul Sharma</h4>
                    <p className="text-sm text-gray-600">Senior Financial Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600">"Working at VDS Finance in Noida has been a fantastic experience. The work culture is amazing and the location is very accessible."</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Priya Patel</h4>
                    <p className="text-sm text-gray-600">Software Developer</p>
                  </div>
                </div>
                <p className="text-gray-600">"The Noida office is state-of-the-art with great facilities. The company truly values innovation and employee growth."</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Amit Kumar</h4>
                    <p className="text-sm text-gray-600">Loan Officer</p>
                  </div>
                </div>
                <p className="text-gray-600">"Great place to work with excellent benefits. Being based in Noida Sector 2 makes commuting very convenient."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600 text-sm">Send us your resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Initial Screening</h3>
                <p className="text-gray-600 text-sm">Our HR team will review your application</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Interviews</h3>
                <p className="text-gray-600 text-sm">Technical and HR interviews at our Noida office</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Offer Letter</h3>
                <p className="text-gray-600 text-sm">Receive and accept your offer</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Join VDS Finance at our Noida headquarters and be part of something great</p>
            <button
              onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View Open Positions
            </button>
          </div>
        </section>

        {/* Modals */}
        {selectedJob && (
          <JobDetailModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
            onApply={(job) => {
              setSelectedJob(null);
              setShowApplicationForm(true);
            }}
          />
        )}
        {showApplicationForm && selectedJob && (
          <ApplicationForm
            job={selectedJob}
            onClose={() => setShowApplicationForm(false)}
          />
        )}
      </div>
    </Wraper>
  );
};

export default Careers;