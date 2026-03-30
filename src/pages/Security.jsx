
import React, { useState } from 'react';
import Wraper from '../components/Architure/Wraper'
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaKey,
  FaMobileAlt,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegCreditCard,
  FaDatabase,
  FaShieldVirus,
  FaBell,
  FaGlobe,
  FaClock,
  FaFileAlt,
  FaUserSecret,
  FaAddressCard,
  FaFingerprint,
  FaQrcode
} from 'react-icons/fa';
import { MdSecurity, MdVerified, MdPrivacyTip } from 'react-icons/md';
import { BiSolidLockAlt } from 'react-icons/bi';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import { TbShieldLock } from 'react-icons/tb';

const SecurityPage = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);

  // Security features data
  const securityFeatures = [
    {
      icon: <FaFingerprint className="text-indigo-500" size={24} />,
      title: "Biometric Authentication",
      description: "Secure login with fingerprint or face recognition",
      status: "active",
      badge: "Available"
    },
    {
      icon: <FaKey className="text-indigo-500" size={24} />,
      title: "Two-Factor Authentication",
      description: "Extra layer of security for your account",
      status: twoFactorEnabled ? "active" : "inactive",
      badge: twoFactorEnabled ? "Enabled" : "Disabled",
      toggle: true
    },
    {
      icon: <FaLock className="text-indigo-500" size={24} />,
      title: "End-to-End Encryption",
      description: "All data is encrypted using 256-bit AES encryption",
      status: "active",
      badge: "Active"
    },
    {
      icon: <FaShieldVirus className="text-indigo-500" size={24} />,
      title: "Real-time Threat Protection",
      description: "24/7 monitoring against fraud and suspicious activities",
      status: "active",
      badge: "Monitoring"
    }
  ];

  // Security metrics
  const securityMetrics = [
    {
      label: "SSL/TLS Encryption",
      value: "256-bit",
      status: "Secure",
      icon: <FaLock size={16} />
    },
    {
      label: "PCI DSS Compliance",
      value: "Level 1",
      status: "Certified",
      icon: <FaRegCreditCard size={16} />
    },
    {
      label: "Data Backup",
      value: "Real-time",
      status: "Active",
      icon: <FaDatabase size={16} />
    },
    {
      label: "Last Security Audit",
      value: "March 2025",
      status: "Passed",
      icon: <FaClock size={16} />
    }
  ];

  // Recent activities
  const recentActivities = [
    {
      action: "Login from new device",
      location: "Chrome on Windows",
      time: "2 hours ago",
      status: "success",
      icon: <FaGlobe />
    },
    {
      action: "Password changed",
      location: "Account Settings",
      time: "3 days ago",
      status: "success",
      icon: <FaKey />
    },
    {
      action: "Security question updated",
      location: "Security Center",
      time: "1 week ago",
      status: "success",
      icon: <FaUserSecret />
    },
    {
      action: "Failed login attempt",
      location: "Unknown location",
      time: "2 weeks ago",
      status: "warning",
      icon: <FaExclamationTriangle />
    }
  ];

  // Security tips
  const securityTips = [
    "Use a strong, unique password for your VDS Finance account",
    "Enable two-factor authentication for enhanced security",
    "Never share your OTP or password with anyone",
    "Regularly review your account activity and statements",
    "Keep your contact information up to date"
  ];

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 py-8 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-100 rounded-xl">
                <FaShieldAlt className="text-indigo-600" size={28} />
              </div>
              <h1 className="text-3xl font-bold text-slate-800">Security Center</h1>
            </div>
            <p className="text-slate-500 ml-12">
              Manage your security settings and protect your account
            </p>
          </div>

          {/* Security Score Card */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-6 mb-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <IoShieldCheckmarkSharp size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Security Score</h3>
                  <p className="text-indigo-100 text-sm">Your account security level</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">92/100</div>
                  <div className="text-sm text-indigo-100">Excellent</div>
                </div>
                <div className="w-32 h-32 relative">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="58"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="58"
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                      strokeDasharray="364.4"
                      strokeDashoffset={364.4 - (364.4 * 92 / 100)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaShieldAlt size={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Security Features */}
            <div className="lg:col-span-2 space-y-6">
              {/* Security Features */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MdSecurity size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-semibold text-slate-800">Security Features</h2>
                </div>
                <div className="space-y-4">
                  {securityFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start justify-between p-4 border border-slate-100 rounded-xl hover:shadow-md transition-all">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-indigo-50 rounded-lg">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{feature.title}</h3>
                          <p className="text-sm text-slate-500 mt-1">{feature.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {feature.toggle ? (
                          <button
                            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFactorEnabled ? 'bg-indigo-600' : 'bg-slate-200'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        ) : (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${feature.status === 'active'
                              ? 'bg-green-50 text-green-600'
                              : 'bg-red-50 text-red-600'
                            }`}>
                            {feature.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Metrics */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaDatabase size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-semibold text-slate-800">Security Metrics</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {securityMetrics.map((metric, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2 text-slate-600">
                        {metric.icon}
                        <span className="text-xs font-medium">{metric.label}</span>
                      </div>
                      <div className="font-bold text-slate-800 text-lg">{metric.value}</div>
                      <div className="text-xs text-green-600 mt-1">{metric.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Tips */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MdPrivacyTip size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-semibold text-slate-800">Security Tips</h2>
                </div>
                <div className="space-y-3">
                  {securityTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <FaCheckCircle className="text-blue-500 mt-0.5" size={16} />
                      <p className="text-sm text-slate-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Account Security & Activity */}
            <div className="space-y-6">
              {/* Account Protection */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaUserShield size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-semibold text-slate-800">Account Protection</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-slate-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Email Notifications</p>
                        <p className="text-xs text-slate-500">Security alerts via email</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifications ? 'bg-indigo-600' : 'bg-slate-200'
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'
                          }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <FaMobileAlt className="text-slate-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Login Alerts</p>
                        <p className="text-xs text-slate-500">SMS alerts for new logins</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setLoginAlerts(!loginAlerts)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${loginAlerts ? 'bg-indigo-600' : 'bg-slate-200'
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${loginAlerts ? 'translate-x-6' : 'translate-x-1'
                          }`}
                      />
                    </button>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                    <FaKey size={14} />
                    Change Password
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaBell size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-semibold text-slate-800">Recent Activity</h2>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${activity.status === 'success' ? 'bg-green-50' : 'bg-yellow-50'
                        }`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-700">{activity.action}</p>
                        <p className="text-xs text-slate-500">{activity.location}</p>
                        <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                      </div>
                      {activity.status === 'success' ? (
                        <FaCheckCircle className="text-green-500" size={14} />
                      ) : (
                        <FaExclamationTriangle className="text-yellow-500" size={14} />
                      )}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-center text-sm text-indigo-600 hover:text-indigo-700">
                  View all activity
                </button>
              </div>

              {/* Device Management */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaQrcode size={24} className="text-indigo-600" />
                  <h2 className="text-xl font-semibold text-slate-800">Trusted Devices</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FaMobileAlt className="text-slate-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">iPhone 14 Pro</p>
                        <p className="text-xs text-slate-500">Current device</p>
                      </div>
                    </div>
                    <FaCheckCircle className="text-green-500" size={16} />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FaGlobe className="text-slate-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Windows PC</p>
                        <p className="text-xs text-slate-500">Last used 2 days ago</p>
                      </div>
                    </div>
                    <button className="text-sm text-red-600 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <BiSolidLockAlt size={20} className="text-indigo-600" />
                <p className="text-sm text-slate-600">
                  Your account is protected by VDS Finance's advanced security measures
                </p>
              </div>
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                Learn more about security
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default SecurityPage;