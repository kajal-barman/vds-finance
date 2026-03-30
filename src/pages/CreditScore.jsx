import React, { useState, useEffect } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
  FaShieldAlt,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowUp,
  FaBolt,
  FaLock,
  FaChevronRight,
  FaSyncAlt,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';
import { IoMdAlert } from 'react-icons/io';

// --- Mock Data ---
const mockCreditData = {
  score: 742,
  maxScore: 850,
  lastUpdated: "2025-03-15",
  factors: {
    positive: ["On-time payments", "Low credit utilization", "Long credit history"],
    negative: ["Recent hard inquiries", "Limited account mix"]
  },
  history: [
    { date: "2024-09-01", score: 718 },
    { date: "2024-10-01", score: 723 },
    { date: "2024-11-01", score: 730 },
    { date: "2024-12-01", score: 735 },
    { date: "2025-01-01", score: 738 },
    { date: "2025-02-01", score: 740 },
    { date: "2025-03-01", score: 742 },
  ],
  recommendations: [
    {
      title: "Reduce credit utilization",
      description: "Your current utilization is 32%. Aim for below 30% to boost your score.",
      impact: "+15-25 points",
      action: "Pay down balances"
    },
    {
      title: "Add a credit builder account",
      description: "Diversify your credit mix with our VDS Credit Builder product.",
      impact: "+20-30 points",
      action: "Learn more"
    },
    {
      title: "Limit hard inquiries",
      description: "You have 3 hard inquiries in the last 12 months. Avoid new applications.",
      impact: "+5-10 points",
      action: "Monitor inquiries"
    }
  ]
};

// --- Subcomponents ---

// Score Gauge Component
const ScoreGauge = ({ score, maxScore }) => {
  const percentage = Math.min(100, Math.max(0, (score / maxScore) * 100));
  const getScoreStatus = (score) => {
    if (score < 580) return { color: "text-red-600", bg: "#ef4444", label: "Poor" };
    if (score < 670) return { color: "text-orange-500", bg: "#f97316", label: "Fair" };
    if (score < 740) return { color: "text-yellow-500", bg: "#eab308", label: "Good" };
    if (score < 800) return { color: "text-green-500", bg: "#22c55e", label: "Very Good" };
    return { color: "text-emerald-500", bg: "#10b981", label: "Excellent" };
  };
  const status = getScoreStatus(score);

  // Calculate circumference: 2 * π * r = 2 * π * 45 ≈ 282.74
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="8"
          />
          {/* Foreground circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={status.bg}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-slate-800">{score}</span>
          <span className="text-sm text-slate-500">out of {maxScore}</span>
        </div>
      </div>
      <div
        className={`mt-4 px-4 py-1.5 rounded-full text-sm font-semibold ${status.color}`}
        style={{ backgroundColor: `${status.bg}20` }}
      >
        {status.label} Credit
      </div>
    </div>
  );
};

// Factor Item Component
const FactorItem = ({ text, type }) => (
  <div className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
    {type === 'positive' ? (
      <FaCheckCircle size={18} className="text-green-500 flex-shrink-0" />
    ) : (
      <FaExclamationCircle size={18} className="text-red-500 flex-shrink-0" />
    )}
    <span className="text-slate-700 text-sm flex-1">{text}</span>
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${type === 'positive' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
      }`}>
      {type === 'positive' ? 'Positive' : 'Needs Work'}
    </span>
  </div>
);

// History Chart Component
const ScoreHistoryChart = ({ history }) => {
  const scores = history.map(h => h.score);
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);
  const range = maxScore - minScore;

  const getHeight = (score) => {
    if (range === 0) return 60; // Default height when all scores are equal
    // Calculate height between 40px and 100px for better visualization
    return ((score - minScore) / range) * 60 + 40;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return dateStr;
    }
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  };

  return (
    <div className="flex items-end justify-between gap-2 h-32">
      {history.map((point, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
          <div
            className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-md transition-all duration-500 hover:from-indigo-600 hover:to-indigo-500"
            style={{ height: `${getHeight(point.score)}px` }}
          />
          <span className="text-xs text-slate-500 font-medium">
            {formatDate(point.date)}
          </span>
        </div>
      ))}
    </div>
  );
};

// Recommendation Card
const RecommendationCard = ({ rec }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-3">
      <h4 className="font-semibold text-slate-800">{rec.title}</h4>
      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
        {rec.impact}
      </span>
    </div>
    <p className="text-sm text-slate-500 mb-4">{rec.description}</p>
    <button className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
      {rec.action} <FaChevronRight size={12} />
    </button>
  </div>
);

// --- Main Component ---
const CreditScorePage = () => {
  const [creditData, setCreditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setCreditData(mockCreditData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    if (!creditData) return;

    setRefreshing(true);
    setTimeout(() => {
      // Simulate slight score variation
      const variation = Math.floor(Math.random() * 9) - 4; // -4 to +4
      let newScore = creditData.score + variation;
      newScore = Math.min(creditData.maxScore, Math.max(300, newScore));

      const newHistory = [...creditData.history];
      // Remove oldest if we have more than 7 entries
      if (newHistory.length >= 7) {
        newHistory.shift();
      }

      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const newDate = `${year}-${month}-01`;

      newHistory.push({ date: newDate, score: newScore });

      setCreditData({
        ...creditData,
        score: newScore,
        lastUpdated: new Date().toISOString().split('T')[0],
        history: newHistory
      });
      setRefreshing(false);
    }, 1500);
  };

  if (loading) {
    return (
      <Wraper>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center pt-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading your credit profile...</p>
          </div>
        </div>
      </Wraper>
    );
  }

  if (!creditData) {
    return (
      <Wraper>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center pt-20">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
            <FaExclamationCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Unable to load data</h3>
            <p className="text-slate-500 mb-4">There was an issue fetching your credit information.</p>
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Wraper>
    );
  }

  const previousScore = creditData.history[creditData.history.length - 2]?.score || creditData.score;
  const scoreChange = creditData.score - previousScore;

  return (
    <Wraper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 py-8 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Credit Score Dashboard</h1>
              <p className="text-slate-500 mt-1">Monitor and improve your credit health with VDS Finance</p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <FaSyncAlt size={16} className={refreshing ? 'animate-spin' : ''} />
              <span>Refresh Score</span>
            </button>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Score Card */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <FaShieldAlt size={20} className="text-indigo-500" />
                <span className="text-sm font-medium text-slate-500">VDS Credit Score</span>
              </div>
              <ScoreGauge score={creditData.score} maxScore={creditData.maxScore} />
              <div className="flex items-center gap-1 mt-4 text-sm text-slate-400">
                <FaClock size={14} />
                <span>Last updated: {new Date(creditData.lastUpdated).toLocaleDateString()}</span>
              </div>
              <div className="w-full mt-6 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">VDS Finance Rating</span>
                  <span className="font-semibold text-slate-800">Prime Tier</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-slate-500">Percentile</span>
                  <span className="font-semibold text-slate-800">Top 28%</span>
                </div>
              </div>
            </div>

            {/* Factors Section */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-slate-800 text-lg">Key Factors</h3>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors"
                >
                  {showDetails ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              {showDetails && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                      <MdTrendingUp size={14} /> Positive Factors
                    </h4>
                    <div className="space-y-0">
                      {creditData.factors.positive.map((factor, idx) => (
                        <FactorItem key={`pos-${idx}`} text={factor} type="positive" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                      <IoMdAlert size={14} /> Areas for Improvement
                    </h4>
                    <div className="space-y-0">
                      {creditData.factors.negative.map((factor, idx) => (
                        <FactorItem key={`neg-${idx}`} text={factor} type="negative" />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {!showDetails && (
                <div className="py-6 text-center text-slate-400">
                  <FaLock size={24} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Detailed factors are hidden. Click "Show Details" to view.</p>
                </div>
              )}
            </div>
          </div>

          {/* Score History Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-slate-800 text-lg">Score History</h3>
                <p className="text-sm text-slate-500">Last {creditData.history.length} months trend</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <span>VDS Score</span>
                </div>
              </div>
            </div>
            <ScoreHistoryChart history={creditData.history} />
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-sm">
              <span className="text-slate-500">Previous: {previousScore}</span>
              <span className={`font-medium flex items-center gap-1 ${scoreChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {scoreChange !== 0 && (scoreChange >= 0 ? '+' : '')}{scoreChange} points
                {scoreChange !== 0 && (
                  <FaArrowUp size={12} className={scoreChange < 0 ? 'rotate-180' : ''} />
                )}
              </span>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaBolt size={20} className="text-indigo-500" />
              <h3 className="font-semibold text-slate-800 text-lg">Personalized Recommendations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {creditData.recommendations.map((rec, idx) => (
                <RecommendationCard key={idx} rec={rec} />
              ))}
            </div>
          </div>

          {/* Footer Security Note */}
          <div className="text-center text-sm text-slate-400 flex items-center justify-center gap-2 py-4 border-t border-slate-100">
            <FaLock size={14} />
            <span>Your credit data is encrypted and securely stored. VDS Finance uses 256-bit SSL encryption.</span>
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default CreditScorePage;