import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper';
import { Link } from 'react-router-dom';

// Separate components for better organization
const StatCard = ({ value, label }) => (
  <div className="text-center p-6">
    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
      {value}
    </div>
    <div className="text-gray-600 text-sm uppercase tracking-wide">
      {label}
    </div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-500">
    <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TeamMember = ({ name, role, bio }) => {
  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Function to add blue background to first and last character
  const formatName = (name) => {
    if (name.length <= 2) return name;
    const firstChar = name.charAt(0);
    const lastChar = name.charAt(name.length - 1);
    const middlePart = name.slice(1, -1);

    return (
      <span className="text-xl font-bold text-gray-900 mb-1">
        {name}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group border border-gray-100 hover:border-blue-500 transition-all duration-300">
      {/* Avatar Placeholder with Initials */}
      <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
          <span className="text-5xl font-bold text-white">
            {getInitials(name)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {formatName(name)}
        </h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

const About = () => {
  // State for interactive elements
  const [activeTab, setActiveTab] = useState('mission');
  const [showFullStory, setShowFullStory] = useState(false);

  // Company statistics
  const statistics = [
    { id: 1, value: '₹200cr', label: 'Loan Disbursed' },
    { id: 2, value: '15,000+', label: 'Happy Clients' },
    { id: 3, value: '5+', label: 'Years of Excellence' },
    { id: 4, value: '98%', label: 'Client Retention Rate' },
  ];

  // Core values with icons (using emoji as placeholders - you can replace with actual icon components)
  const coreValues = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Trust & Integrity',
      description: 'We prioritize transparency and ethical practices in every financial decision.',
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Client-Centric Approach',
      description: 'Your financial goals become our mission. We tailor strategies to your unique needs.',
    },
    {
      id: 3,
      icon: '📈',
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to maximize your investment potential.',
    },
    {
      id: 4,
      icon: '👥',
      title: 'Expert Team',
      description: 'Our certified financial advisors bring decades of combined experience.',
    },
    {
      id: 5,
      icon: '🌍',
      title: 'Global Perspective',
      description: 'International market expertise to diversify and strengthen your portfolio.',
    },
    {
      id: 6,
      icon: '🤝',
      title: 'Partnership',
      description: 'Building long-term relationships based on mutual success and trust.',
    }
  ];

  // Leadership team data (removed image and socialLinks)
  const leadershipTeam = [
    {
      id: 1,
      name: 'Sanjay Giri',
      role: 'CEO & Director',
      bio: '5+ years in investment banking and wealth management. Former Managing Director at Morgan Stanley.',
    },
    {
      id: 2,
      name: 'Miss Sushma',
      role: 'Director',
      bio: 'CFA charterholder with expertise in portfolio management and risk assessment.',
    },
    {
      id: 3,
      name: 'Sonu Giri',
      role: 'Manager',
      bio: '15+ years experience in wealth management and retirement planning.',
    },
  ];

  // Milestones data (corrected timeline format)
  const milestones = [
    { year: '2021', event: 'Company founded in Indai' },
    { year: '2022', event: 'Expanded to West Coast operations' },
    { year: '2023', event: 'Launched digital wealth management platform' },
    { year: '2024', event: 'Reached ₹1B in assets under management' },
    { year: '2025', event: 'Named "Top Financial Advisor" by Forbes' },
  ];

  return (
    <Wraper>
      <div className="bg-white text-gray-900 pt-20">
        {/* Hero Section with Parallax Effect */}
        <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-white/50" />
          <div className="relative flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <h1 className="text-4xl md:text-6xl text-center font-bold mb-6 animate-fade-in text-gray-900">
              Building Financial Futures
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 text-gray-600">
              We're more than just financial advisors – we're partners in your journey toward
              financial independence and lasting wealth.
            </p>
            <button
              onClick={() => document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Discover Our Story
            </button>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Statistics Section with Counter Animation */}
        <section className="py-16 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat) => (
                <StatCard key={stat.id} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission/Vision Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === 'mission'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === 'vision'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                Our Vision
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              {activeTab === 'mission' ? (
                <div className="text-center">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To empower individuals and businesses with sophisticated financial strategies
                    that preserve wealth, create sustainable growth, and build lasting prosperity
                    for generations to come.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To be the most trusted partner in financial wellness, recognized for our
                    integrity, innovation, and unwavering commitment to our clients' success.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <ValueCard key={value.id} {...value} />
              ))}
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section id="story-section" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Journey
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Founded in 2019 by Mr. Sanjay Giri, VDS Finance began with a simple belief:
                    that everyone deserves access to expert financial advice. What started as a
                    small office with just three employees in downtown India has grown into
                    one of the nation's most trusted financial advisory firms.
                  </p>
                  <p className="leading-relaxed">
                    Through market ups and downs, technological revolutions, and changing economic
                    landscapes, our commitment to our clients has never wavered. We've helped
                    thousands of families achieve their dreams – from buying their first home
                    to retiring comfortably.
                  </p>

                  {/* Read More Toggle */}
                  {showFullStory && (
                    <p className="leading-relaxed animate-fade-in">
                      Today, with offices in 12 major cities and a team of over 200 certified
                      financial professionals, we continue to innovate and adapt to meet the
                      evolving needs of our clients. Our digital platform now serves clients
                      in 29 states, making quality financial advice accessible to everyone,
                      everywhere.
                    </p>
                  )}

                  <button
                    onClick={() => setShowFullStory(!showFullStory)}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {showFullStory ? 'Read Less' : 'Read More'} →
                  </button>
                </div>

                {/* Timeline - Fixed with proper spacing and alignment */}
                <div className="mt-8 space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-24 flex-shrink-0">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <div className="flex-1 pl-4 border-l-2 border-blue-200 ml-2">
                        <p className="text-gray-700 py-1">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
                  <p className="text-2xl font-bold mb-4">Serving clients for</p>
                  <p className="text-6xl font-bold mb-2">25+</p>
                  <p className="text-xl">Years of Excellence</p>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                  <p className="text-sm text-gray-600">Trusted by</p>
                  <p className="text-3xl font-bold text-blue-600">25,000+</p>
                  <p className="text-xs text-gray-500">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Meet the experienced professionals dedicated to your financial success
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member) => (
                <TeamMember key={member.id} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose VDS Finance?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Personalized Approach',
                  description: 'We don\'t believe in one-size-fits-all solutions. Every client receives a customized financial strategy.',
                  icon: '✨'
                },
                {
                  title: 'Tra  nsparent Fees',
                  description: 'No hidden charges, no surprise fees. We believe in complete transparency in all our dealings.',
                  icon: '🔍'
                },
                {
                  title: 'Proven Track Record',
                  description: 'Consistently outperforming market averages while managing risk effectively.',
                  icon: '🏆'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100 hover:border-blue-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of satisfied clients who trust us with their financial journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={'/contact'}>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                  Schedule Free Consultation
                </button>
              </Link>


            </div>
            <p className="mt-6 text-sm text-blue-100">
              No obligation. No spam. Just expert financial advice.
            </p>
          </div>
        </section>

        {/* Add custom CSS for animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    </Wraper>
  );
};

export default About;