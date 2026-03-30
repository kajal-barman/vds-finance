import React, { useState, useEffect } from 'react';
import Wraper from '../components/Architure/Wraper';
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaSearch,
  FaArrowRight,
  FaBookOpen,
  FaChartLine,
  FaPiggyBank,
  FaHome,
  FaCar,
  FaShieldAlt,
  FaComments,
  FaShareAlt,
  FaHeart,
  FaBookmark,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaCreditCard,
  FaChartBar,
  FaHandHoldingUsd,
  FaBuilding,
  FaLineChart
} from 'react-icons/fa';
import { MdAccessTime, MdTrendingUp, MdLightbulb, MdMoney, MdAccountBalance, MdSchool } from 'react-icons/md';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});

  // Professional image generator function with VDS Finance branding
  const getBlogImage = (title, category, bgColor, icon) => {
    // In a real application, you would use actual images from your CDN
    // This function returns a data URL with styled image
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, bgColor || '#1E3A8A');
    gradient.addColorStop(1, '#3B82F6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // VDS Finance Logo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.font = 'bold 48px Arial';
    ctx.fillText('VDS', 50, 100);
    ctx.font = '24px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillText('FINANCE', 50, 150);

    // Icon
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = '120px "Font Awesome 6 Free"';
    if (icon) {
      // This is a placeholder - in real implementation you'd use actual icons
    }

    // Title text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 32px Arial';
    ctx.fillText(title.substring(0, 30), 50, 350);

    // Category tag
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '18px Arial';
    ctx.fillText(category, 50, 420);

    return canvas.toDataURL();
  };

  // Blog Posts Data with professional images
  const blogPosts = [
    {
      id: 1,
      title: "10 Smart Ways to Improve Your Credit Score in 2026",
      excerpt: "Learn proven strategies to boost your credit score and unlock better loan opportunities. Discover the factors that impact your credit score and how to manage them effectively.",
      content: `
        <div class="prose max-w-none">
          <p>Your credit score is one of the most important numbers in your financial life. It affects everything from loan approvals to interest rates. Here are 10 proven strategies to improve your credit score in 2026.</p>
          
          <div class="bg-blue-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-blue-900 mb-3">📊 Quick Fact</h3>
            <p class="text-blue-800">A credit score above 750 can save you up to 2-3% on interest rates, potentially saving lakhs over the loan tenure.</p>
          </div>
          
          <h2>1. Pay Your Bills on Time</h2>
          <p>Payment history accounts for 35% of your credit score. Set up automatic payments or reminders to ensure you never miss a due date. Even one late payment can significantly impact your score.</p>
          
          <h2>2. Reduce Your Credit Utilization Ratio</h2>
          <p>Keep your credit utilization below 30% of your total available credit. This shows lenders you're not overly reliant on credit. For example, if you have a credit limit of ₹1,00,000, try to keep your balance below ₹30,000.</p>
          
          <div class="bg-green-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-green-900 mb-3">💡 Pro Tip</h3>
            <p class="text-green-800">Request a credit limit increase to automatically lower your utilization ratio without changing your spending habits.</p>
          </div>
          
          <h2>3. Don't Close Old Credit Cards</h2>
          <p>The length of your credit history matters. Older accounts demonstrate your experience managing credit. Keep your oldest credit cards open, even if you don't use them regularly.</p>
          
          <h2>4. Limit Hard Inquiries</h2>
          <p>Each time you apply for credit, a hard inquiry appears on your report. Too many inquiries in a short period can lower your score. Space out your credit applications.</p>
          
          <h2>5. Monitor Your Credit Report Regularly</h2>
          <p>Check your credit report for errors or fraudulent activity. You're entitled to one free credit report annually from each credit bureau. Dispute any inaccuracies immediately.</p>
          
          <h2>6. Maintain a Healthy Credit Mix</h2>
          <p>A mix of credit types (credit cards, personal loans, home loans) can positively impact your score. However, don't take on unnecessary debt just for the sake of diversification.</p>
          
          <h2>7. Pay Off Debt Strategically</h2>
          <p>Use the avalanche method (pay highest interest first) or snowball method (pay smallest balances first) to eliminate debt. Consistent payments show responsible credit management.</p>
          
          <h2>8. Become an Authorized User</h2>
          <p>If you have a family member with good credit, being added as an authorized user on their card can help build your credit history.</p>
          
          <h2>9. Use Credit Builder Loans</h2>
          <p>Consider credit builder loans designed to help establish or rebuild credit. These small loans report payments to credit bureaus, building positive history.</p>
          
          <h2>10. Be Patient and Consistent</h2>
          <p>Building good credit takes time. Stay consistent with your financial habits, and you'll see improvement over 6-12 months.</p>
          
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold mb-3">🏦 Ready to Improve Your Credit Score?</h3>
            <p class="mb-4">At VDS Finance, we offer personalized guidance to help you achieve your financial goals.</p>
            <button class="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Us</button>
          </div>
        </div>
      `,
      author: "Rajesh Mehta",
      authorRole: "CEO & Founder",
      authorInitials: "RM",
      date: "March 20, 2026",
      readTime: "8 min read",
      category: "credit-tips",
      categoryName: "Credit Tips",
      tags: ["Credit Score", "Personal Finance", "Credit Tips", "CIBIL"],
      image: "/api/placeholder/800/500",
      bgColor: "#1E3A8A",
      icon: "📊",
      views: 12500,
      comments: 45
    },
    {
      id: 2,
      title: "Personal Loan vs. Credit Card: Which is Right for Your Needs?",
      excerpt: "Compare personal loans and credit cards to understand which borrowing option suits your financial situation best. Learn about interest rates, repayment terms, and more.",
      content: `
        <div class="prose max-w-none">
          <p>When you need funds, two common options are personal loans and credit cards. But which one is right for your situation? Let's compare both options to help you make an informed decision.</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="bg-blue-50 p-6 rounded-xl">
              <h3 class="text-xl font-bold text-blue-900 mb-3">💰 Personal Loans</h3>
              <p class="text-blue-800 mb-4">Best for: Large expenses, debt consolidation, planned purchases</p>
              <ul class="list-disc list-inside text-blue-700">
                <li>Lower interest rates (10-24%)</li>
                <li>Fixed monthly payments</li>
                <li>Set repayment term</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-xl">
              <h3 class="text-xl font-bold text-green-900 mb-3">💳 Credit Cards</h3>
              <p class="text-green-800 mb-4">Best for: Daily expenses, building credit, emergency funds</p>
              <ul class="list-disc list-inside text-green-700">
                <li>Convenient for purchases</li>
                <li>Rewards and cashback</li>
                <li>Interest-free grace period</li>
              </ul>
            </div>
          </div>
          
          <h2>When to Choose a Personal Loan</h2>
          <p>A personal loan is ideal for:</p>
          <ul>
            <li>Debt consolidation</li>
            <li>Home renovations</li>
            <li>Major life events (weddings, medical expenses)</li>
            <li>Large purchases with fixed repayment plan</li>
          </ul>
          
          <h2>When to Use a Credit Card</h2>
          <p>A credit card works best for:</p>
          <ul>
            <li>Daily expenses and small purchases</li>
            <li>Building credit history</li>
            <li>Emergency expenses you can repay quickly</li>
            <li>Taking advantage of rewards programs</li>
          </ul>
          
          <div class="bg-amber-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-amber-900 mb-3">📈 Comparison at a Glance</h3>
            <table class="w-full">
              <tr class="border-b">
                <td class="py-2 font-semibold">Feature</td>
                <td class="py-2 font-semibold">Personal Loan</td>
                <td class="py-2 font-semibold">Credit Card</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">Interest Rate</td>
                <td class="py-2">10-24%</td>
                <td class="py-2">24-42%</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">Repayment Term</td>
                <td class="py-2">1-5 years fixed</td>
                <td class="py-2">Revolving</td>
              </tr>
              <tr>
                <td class="py-2">Best For</td>
                <td class="py-2">Large purchases</td>
                <td class="py-2">Daily expenses</td>
              </tr>
            </table>
          </div>
          
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold mb-3">✨ Need Help Choosing?</h3>
            <p>Our experts at VDS Finance can help you find the right borrowing solution for your needs.</p>
          </div>
        </div>
      `,
      author: "Priya Sharma",
      authorRole: "Chief Product Officer",
      authorInitials: "PS",
      date: "March 15, 2026",
      readTime: "6 min read",
      category: "loans",
      categoryName: "Loans Guide",
      tags: ["Personal Loan", "Credit Card", "Comparison", "Borrowing"],
      image: "/api/placeholder/800/500",
      bgColor: "#10B981",
      icon: "💳",
      views: 8900,
      comments: 32
    },
    {
      id: 3,
      title: "A Complete Guide to Home Loans: Everything First-Time Buyers Need to Know",
      excerpt: "Navigate the home buying process with confidence. Learn about loan eligibility, documentation, interest rates, and tips for first-time home buyers.",
      content: `
        <div class="prose max-w-none">
          <p>Buying your first home is an exciting milestone, but the home loan process can seem overwhelming. This comprehensive guide will walk you through everything you need to know.</p>
          
          <div class="bg-indigo-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-indigo-900 mb-3">🏠 Did You Know?</h3>
            <p class="text-indigo-800">Home loans offer tax benefits up to ₹2 lakhs on interest and ₹1.5 lakhs on principal under Section 24(b) and 80C.</p>
          </div>
          
          <h2>Understanding Home Loan Basics</h2>
          <p>A home loan is a secured loan where the property serves as collateral. Key components include:</p>
          <ul>
            <li><strong>Principal:</strong> The amount you borrow</li>
            <li><strong>Interest Rate:</strong> The cost of borrowing</li>
            <li><strong>Tenure:</strong> Repayment period (typically 15-30 years)</li>
            <li><strong>EMI:</strong> Equated Monthly Installment</li>
          </ul>
          
          <h2>Eligibility Criteria</h2>
          <p>Most lenders consider these factors:</p>
          <ul>
            <li>Age: 21-65 years</li>
            <li>Income: Stable employment or business income</li>
            <li>Credit Score: 750+ preferred</li>
            <li>Employment Status: Salaried or self-employed</li>
          </ul>
          
          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="bg-gray-50 p-5 rounded-lg">
              <h3 class="font-bold mb-3">📋 Required Documents</h3>
              <ul class="text-sm space-y-1">
                <li>✓ Identity proof (Aadhaar, PAN)</li>
                <li>✓ Address proof</li>
                <li>✓ Income proof (salary slips, IT returns)</li>
                <li>✓ Bank statements (last 6 months)</li>
                <li>✓ Property documents</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-5 rounded-lg">
              <h3 class="font-bold mb-3">⚠️ Common Mistakes to Avoid</h3>
              <ul class="text-sm space-y-1">
                <li>✗ Not checking eligibility before property selection</li>
                <li>✗ Ignoring hidden charges</li>
                <li>✗ Choosing wrong tenure</li>
                <li>✗ Not comparing multiple lenders</li>
              </ul>
            </div>
          </div>
          
          <h2>Types of Home Loans</h2>
          <ul>
            <li><strong>Fixed Rate:</strong> Interest rate remains constant</li>
            <li><strong>Floating Rate:</strong> Rate changes with market conditions</li>
            <li><strong>Hybrid:</strong> Combination of fixed and floating</li>
          </ul>
          
          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold mb-3">🌟 Ready to Buy Your Dream Home?</h3>
            <p>VDS Finance offers competitive home loans with flexible terms and expert guidance.</p>
          </div>
        </div>
      `,
      author: "Amit Kumar",
      authorRole: "Home Loan Specialist",
      authorInitials: "AK",
      date: "March 10, 2026",
      readTime: "10 min read",
      category: "home-loans",
      categoryName: "Home Loans",
      tags: ["Home Loan", "First Time Buyer", "Real Estate", "Property"],
      image: "/api/placeholder/800/500",
      bgColor: "#EF4444",
      icon: "🏠",
      views: 15400,
      comments: 67
    },
    {
      id: 4,
      title: "Smart Investment Strategies for Young Professionals",
      excerpt: "Start building wealth early with these investment strategies tailored for young professionals. Learn about SIPs, mutual funds, and retirement planning.",
      content: `
        <div class="prose max-w-none">
          <p>As a young professional, you have a powerful advantage: time. Starting early can significantly impact your long-term wealth. Here's how to build a strong investment foundation.</p>
          
          <div class="bg-green-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-green-900 mb-3">⏰ The Power of Compounding</h3>
            <p class="text-green-800">Starting at 25 instead of 35 can double your retirement corpus. Every year matters!</p>
          </div>
          
          <h2>Start with an Emergency Fund</h2>
          <p>Before investing, build an emergency fund covering 6 months of expenses. This ensures you won't need to sell investments during market downturns.</p>
          
          <h2>Understand Your Risk Tolerance</h2>
          <p>Young professionals can typically take more risk due to longer investment horizons. Consider a mix of:</p>
          <ul>
            <li>Equity mutual funds (60-70%)</li>
            <li>Debt funds (20-30%)</li>
            <li>Gold/REITs (10%)</li>
          </ul>
          
          <div class="bg-blue-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-blue-900 mb-3">📈 Recommended Asset Allocation</h3>
            <div class="space-y-2">
              <div><span class="font-semibold">Equity:</span> 60% <span class="text-gray-600">(High growth potential)</span></div>
              <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-blue-600 rounded-full h-2" style="width: 60%"></div></div>
              <div><span class="font-semibold">Debt:</span> 30% <span class="text-gray-600">(Stability)</span></div>
              <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-green-600 rounded-full h-2" style="width: 30%"></div></div>
              <div><span class="font-semibold">Gold/Others:</span> 10% <span class="text-gray-600">(Hedge)</span></div>
              <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-amber-600 rounded-full h-2" style="width: 10%"></div></div>
            </div>
          </div>
          
          <h2>Start with SIPs</h2>
          <p>Systematic Investment Plans (SIPs) are perfect for beginners. Start with as little as ₹500 per month and increase gradually. SIPs offer:</p>
          <ul>
            <li>Rupee cost averaging</li>
            <li>Disciplined investing</li>
            <li>Power of compounding</li>
          </ul>
          
          <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold mb-3">💰 Start Your Investment Journey Today</h3>
            <p>VDS Finance can help you find the right investment products aligned with your goals.</p>
          </div>
        </div>
      `,
      author: "Neha Gupta",
      authorRole: "Financial Advisor",
      authorInitials: "NG",
      date: "March 05, 2026",
      readTime: "7 min read",
      category: "investments",
      categoryName: "Investments",
      tags: ["Investment", "SIP", "Wealth Building", "Mutual Funds"],
      image: "/api/placeholder/800/500",
      bgColor: "#F59E0B",
      icon: "📈",
      views: 11200,
      comments: 41
    },
    {
      id: 5,
      title: "Understanding Business Loan Interest Rates: A Complete Breakdown",
      excerpt: "Learn how business loan interest rates are calculated and how to get the best rates for your business. Discover factors that influence rates and negotiation tips.",
      content: `
        <div class="prose max-w-none">
          <p>For business owners, understanding how loan interest rates work is crucial for making informed borrowing decisions. This guide breaks down everything you need to know.</p>
          
          <div class="bg-purple-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-purple-900 mb-3">🏢 Business Loan Fact</h3>
            <p class="text-purple-800">MSMEs can get loans at 8-12% under government schemes. Check if your business qualifies!</p>
          </div>
          
          <h2>Types of Interest Rates</h2>
          <p><strong>Fixed Interest Rate:</strong> Remains constant throughout the loan term. Ideal when you expect rates to rise and want predictable payments.</p>
          <p><strong>Floating Interest Rate:</strong> Changes with market conditions. Usually lower initially but carries risk of increasing rates.</p>
          
          <h2>Factors Affecting Business Loan Rates</h2>
          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="border rounded-lg p-4">
              <span class="font-bold text-blue-600">Credit Score</span>
              <p class="text-sm">750+ gets best rates</p>
            </div>
            <div class="border rounded-lg p-4">
              <span class="font-bold text-blue-600">Business Vintage</span>
              <p class="text-sm">3+ years preferred</p>
            </div>
            <div class="border rounded-lg p-4">
              <span class="font-bold text-blue-600">Annual Turnover</span>
              <p class="text-sm">Higher turnover = lower rates</p>
            </div>
            <div class="border rounded-lg p-4">
              <span class="font-bold text-blue-600">Industry Type</span>
              <p class="text-sm">Stable industries get better rates</p>
            </div>
          </div>
          
          <h2>How to Get Better Rates</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li>Maintain a high credit score (750+)</li>
            <li>Show consistent business growth</li>
            <li>Provide collateral when possible</li>
            <li>Compare offers from multiple lenders</li>
            <li>Negotiate based on your business strength</li>
          </ol>
          
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold mb-3">📊 Grow Your Business with VDS Finance</h3>
            <p>We offer competitive business loans tailored to your specific needs.</p>
          </div>
        </div>
      `,
      author: "Vikram Singh",
      authorRole: "Business Banking Head",
      authorInitials: "VS",
      date: "February 28, 2026",
      readTime: "9 min read",
      category: "business-loans",
      categoryName: "Business Loans",
      tags: ["Business Loan", "Interest Rates", "MSME", "Entrepreneurship"],
      image: "/api/placeholder/800/500",
      bgColor: "#8B5CF6",
      icon: "🏢",
      views: 7800,
      comments: 23
    },
    {
      id: 6,
      title: "5 Common Credit Card Mistakes and How to Avoid Them",
      excerpt: "Avoid these common credit card pitfalls to maintain a healthy credit score and maximize your rewards. Learn smart credit card management tips.",
      content: `
        <div class="prose max-w-none">
          <p>Credit cards are powerful financial tools, but they can also lead to debt if not managed properly. Here are common mistakes to avoid and how to use credit cards wisely.</p>
          
          <div class="bg-red-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-red-900 mb-3">⚠️ Warning Sign</h3>
            <p class="text-red-800">Credit card debt in India has grown by 20% annually. Don't become part of this statistic!</p>
          </div>
          
          <h2>1. Paying Only the Minimum Due</h2>
          <p><strong>The Mistake:</strong> Paying only the minimum amount each month.</p>
          <p><strong>Why It's Harmful:</strong> The remaining balance accrues high interest (24-42% APR), and it can take years to pay off the debt.</p>
          <p><strong>Solution:</strong> Always pay the full statement balance to avoid interest charges.</p>
          
          <h2>2. Maxing Out Your Credit Limit</h2>
          <p><strong>The Mistake:</strong> Using close to 100% of your available credit.</p>
          <p><strong>Why It's Harmful:</strong> High credit utilization (above 30%) lowers your credit score.</p>
          <p><strong>Solution:</strong> Keep utilization below 30%. Request a credit limit increase if needed.</p>
          
          <h2>3. Applying for Multiple Cards at Once</h2>
          <p><strong>The Mistake:</strong> Submitting multiple credit card applications in a short period.</p>
          <p><strong>Why It's Harmful:</strong> Each application creates a hard inquiry, temporarily lowering your score.</p>
          <p><strong>Solution:</strong> Space out applications by 6 months.</p>
          
          <div class="bg-green-50 p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold text-green-900 mb-3">💳 Smart Credit Card Habits</h3>
            <ul class="space-y-2">
              <li>✓ Set up automatic full payment</li>
              <li>✓ Use cards that match your spending patterns</li>
              <li>✓ Track your rewards and maximize benefits</li>
              <li>✓ Monitor your credit score regularly</li>
            </ul>
          </div>
          
          <h2>Building Credit with Cards</h2>
          <p>Used responsibly, credit cards can help build a strong credit history.</p>
          
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl my-6">
            <h3 class="text-xl font-bold mb-3">✨ Get Your First Credit Card</h3>
            <p>VDS Finance offers credit cards with competitive rates and rewards designed for your needs.</p>
          </div>
        </div>
      `,
      author: "Sneha Patel",
      authorRole: "Credit Card Expert",
      authorInitials: "SP",
      date: "February 20, 2026",
      readTime: "7 min read",
      category: "credit-cards",
      categoryName: "Credit Cards",
      tags: ["Credit Card", "Credit Score", "Financial Tips", "Debt Management"],
      image: "/api/placeholder/800/500",
      bgColor: "#EC4899",
      icon: "💳",
      views: 9300,
      comments: 28
    }
  ];

  // Categories with icons
  const categories = [
    { id: 'all', label: 'All Posts', icon: FaBookOpen, count: blogPosts.length },
    { id: 'credit-tips', label: 'Credit Tips', icon: FaChartLine, count: blogPosts.filter(p => p.category === 'credit-tips').length },
    { id: 'loans', label: 'Loans Guide', icon: FaPiggyBank, count: blogPosts.filter(p => p.category === 'loans').length },
    { id: 'home-loans', label: 'Home Loans', icon: FaHome, count: blogPosts.filter(p => p.category === 'home-loans').length },
    { id: 'business-loans', label: 'Business Loans', icon: FaBuilding, count: blogPosts.filter(p => p.category === 'business-loans').length },
    { id: 'investments', label: 'Investments', icon: MdTrendingUp, count: blogPosts.filter(p => p.category === 'investments').length },
    { id: 'credit-cards', label: 'Credit Cards', icon: FaCreditCard, count: blogPosts.filter(p => p.category === 'credit-cards').length }
  ];

  // Popular posts (by views)
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 4);

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle like
  const handleLike = (postId) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  // Handle bookmark
  const handleBookmark = (postId) => {
    setBookmarkedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  // Share functionality
  const sharePost = (platform, post) => {
    const url = window.location.href;
    const text = post.title;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Blog Post Modal Component with enhanced styling
  const BlogPostModal = ({ post, onClose }) => {
    if (!post) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div
              className="w-full h-64 rounded-t-2xl bg-gradient-to-r flex items-center justify-center relative"
              style={{ background: `linear-gradient(135deg, ${post.bgColor || '#1E3A8A'}, ${post.bgColor === '#1E3A8A' ? '#3B82F6' : '#8B5CF6'})` }}
            >
              <div className="text-center text-white">
                <div className="text-8xl mb-4">{post.icon}</div>
                <h2 className="text-2xl font-bold">{post.categoryName}</h2>
                <p className="text-lg opacity-90">VDS Finance</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
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
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <MdAccessTime className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <FaUser className="w-4 h-4" />
                {post.author}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {post.categoryName}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.authorInitials}
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-gray-600">{post.authorRole}</p>
              </div>
            </div>

            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-8 pt-6 border-t">
              <h4 className="font-semibold mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSearchTerm(tag);
                      onClose();
                    }}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-4 justify-between items-center">
              <div className="flex gap-2">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${likedPosts[post.id] ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <FaHeart className={likedPosts[post.id] ? 'fill-current' : ''} />
                  Like
                </button>
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  <FaShareAlt />
                  Share
                </button>
              </div>
              <button
                onClick={() => handleBookmark(post.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${bookmarkedPosts[post.id] ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <FaBookmark className={bookmarkedPosts[post.id] ? 'fill-current' : ''} />
                {bookmarkedPosts[post.id] ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Share Modal Component
  const ShareModal = ({ post, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Share this article</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <button onClick={() => sharePost('facebook', post)} className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
              <FaFacebook className="w-5 h-5 mx-auto" />
            </button>
            <button onClick={() => sharePost('twitter', post)} className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition">
              <FaTwitter className="w-5 h-5 mx-auto" />
            </button>
            <button onClick={() => sharePost('linkedin', post)} className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition">
              <FaLinkedin className="w-5 h-5 mx-auto" />
            </button>
            <button onClick={() => sharePost('whatsapp', post)} className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
              <FaWhatsapp className="w-5 h-5 mx-auto" />
            </button>
            <button onClick={() => sharePost('email', post)} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition">
              <FaEnvelope className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Wraper>
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section with VDS Finance Branding */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FaBookOpen className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">VDS FINANCE BLOG</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Insights for Your Financial Journey</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover expert advice, financial tips, and in-depth guides to help you make smarter money decisions
            </p>
            <div className="max-w-2xl mx-auto relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                    <span className={`text-sm ${selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'}`}>
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="md:flex">
                      <div className="md:w-2/5 relative overflow-hidden">
                        <div
                          className="w-full h-48 md:h-full bg-gradient-to-br flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                          style={{ background: `linear-gradient(135deg, ${post.bgColor}, ${post.bgColor === '#1E3A8A' ? '#3B82F6' : '#8B5CF6'})` }}
                        >
                          <div className="text-center text-white">
                            <div className="text-5xl mb-2">{post.icon}</div>
                            <p className="text-sm font-semibold opacity-90">VDS FINANCE</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:w-3/5">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MdAccessTime className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {post.categoryName}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                          <button onClick={() => setSelectedPost(post)} className="text-left">
                            {post.title}
                          </button>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {post.authorInitials}
                            </div>
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </div>
                          <button
                            onClick={() => setSelectedPost(post)}
                            className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 group"
                          >
                            Read More
                            <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl shadow-md">
                  <FaBookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Popular Posts Widget */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8 sticky top-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-3">
                  <MdTrendingUp className="text-blue-600" />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map(post => (
                    <div
                      key={post.id}
                      className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition group"
                      onClick={() => setSelectedPost(post)}
                    >
                      <div
                        className="w-16 h-16 rounded-lg bg-gradient-to-br flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${post.bgColor}, ${post.bgColor === '#1E3A8A' ? '#3B82F6' : '#8B5CF6'})` }}
                      >
                        <span className="text-2xl">{post.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-3">
                  <FaTag className="text-blue-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.slice(1).map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded-lg transition group"
                    >
                      <span className="flex items-center gap-2">
                        <category.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                        <span className="group-hover:text-blue-600">{category.label}</span>
                      </span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-md p-6 text-white mb-8">
                <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
                <p className="mb-4 text-blue-100">Get the latest financial tips delivered to your inbox</p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Tags Cloud Widget */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-3">
                  <FaTag className="text-blue-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Credit Score', 'Personal Loan', 'Home Loan', 'Investment', 'SIP', 'EMI', 'Tax Saving', 'Retirement', 'Insurance', 'Financial Planning', 'CIBIL', 'Mutual Funds', 'Debt Management', 'Wealth Building'].map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        {selectedPost && (
          <BlogPostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
        {showShareModal && selectedPost && (
          <ShareModal
            post={selectedPost}
            onClose={() => setShowShareModal(false)}
          />
        )}
      </div>
    </Wraper>
  );
};

export default Blog;