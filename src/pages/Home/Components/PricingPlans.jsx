import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  Crown, 
  Check, 
  Star, 
  ShoppingBag,
  Palette,
  Globe,
  BarChart3,
  Users,
  MessageSquare,
  Headphones,
  Clock,
  RefreshCw,
  Shield,
  Zap,
  X
} from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter Pack",
      price: "₹5,000",
      description: "Perfect for new businesses taking the first step online.",
      icon: <Rocket size={24} className="text-purple-600" />,
      features: [
        "1 Logo design concept",
        "Social media page setup (1 platform)",
        "3 editable social media post templates",
        "Basic lead generation guide",
        "Email support",
        "1 week delivery"
      ],
      outcome: "Build your online presence, look professional, and start collecting leads.",
      popular: false
    },
    {
      name: "Growth Pack",
      price: "₹8,000",
      description: "For businesses ready to scale visibility & generate leads consistently.",
      icon: <TrendingUp size={24} className="text-purple-600" />,
      features: [
        "Logo & branding assets (3 concepts + 1 final)",
        "Social media setup & templates (3 platforms)",
        "Website landing page mockup (1 page)",
        "Analytics dashboard template",
        "Content strategy guide",
        "Priority email support",
        "2 weeks delivery",
        "1 revision round"
      ],
      outcome: "Strengthen your brand, expand visibility, and track growth.",
      popular: true
    },
    {
      name: "Premium Pack",
      price: "₹12,000",
      description: "Your complete digital business solution to grow & scale.",
      icon: <Crown size={24} className="text-purple-600" />,
      features: [
        "Full branding kit (logo, business card, social media kit)",
        "Social media strategy + templates (all major platforms)",
        "Multi-page website mockup (landing + 3 inner pages)",
        "Lead generation & analytics dashboard setup",
        "1:1 growth consultation & roadmap",
        "SEO optimization guide",
        "24/7 priority support",
        "3 weeks delivery",
        "Unlimited revisions"
      ],
      outcome: "Launch a strong brand, grow visibility, generate leads, and scale with confidence.",
      popular: false
    }
  ];

  const comparisonFeatures = [
    {
      category: "Brand Identity",
      icon: <Palette size={20} className="text-purple-600" />,
      features: [
        { name: "Logo Design Concepts", starter: "1", growth: "3 + Final", premium: "Unlimited + Final" },
        { name: "Branding Assets", starter: "Basic", growth: "Extended", premium: "Complete Kit" },
        { name: "Business Card Design", starter: <X size={16} className="text-red-500" />, growth: <X size={16} className="text-red-500"   />, premium: <Check size={16} className="text-green-500" /> },
        { name: "Brand Guidelines", starter: <X size={16} className="text-red-500"   />, growth: "Basic", premium: "Comprehensive" }
      ]
    },
    {
      category: "Digital Presence",
      icon: <Globe size={20} className="text-purple-600" />,
      features: [
        { name: "Social Media Setup", starter: "1 Platform", growth: "3 Platforms", premium: "All Major Platforms" },
        { name: "Social Media Templates", starter: "3", growth: "10", premium: "20+" },
        { name: "Website Pages", starter: <X size={16} className="text-red-500"   />, growth: "1 Landing Page", premium: "Landing + 3 Pages" },
        { name: "Content Strategy", starter: <X size={16} className="text-red-500"   />, growth: "Basic Guide", premium: "Full Strategy" }
      ]
    },
    {
      category: "Growth & Analytics",
      icon: <BarChart3 size={20} className="text-purple-600" />,
      features: [
        { name: "Lead Generation Setup", starter: "Guide Only", growth: "Template", premium: "Full Setup" },
        { name: "Analytics Dashboard", starter: <X size={16} className="text-red-500"   />, growth: "Template", premium: "Custom Setup" },
        { name: "SEO Optimization", starter: <X size={16} className="text-red-500"   />, growth: <Check size={16} className="text-green-500"   />, premium: "Complete Guide" },
        { name: "Growth Consultation", starter: <X size={16} className="text-red-500"   />, growth: <Check size={16} className="text-green-500"   />, premium: "1:1 Session" }
      ]
    },
    {
      category: "Support & Delivery",
      icon: <Headphones size={20} className="text-purple-600" />,
      features: [
        { name: "Support Level", starter: "Email", growth: "Priority Email", premium: "24/7 Priority" },
        { name: "Delivery Time", starter: "1 Week", growth: "2 Weeks", premium: "3 Weeks" },
        { name: "Revisions", starter: <X size={16} className="text-red-500"   />, growth: "1 Round", premium: "Unlimited" },
        { name: "Money Back Guarantee", starter: <X size={16} className="text-red-500"   />, growth: <Check size={16} className="text-green-500" />, premium: <Check size={16} className="text-green-500" /> }
      ]
    }
  ];

  return (
    <div className="py-24 bg-white px-4 sm:px-6">
      <div className="w-full lg:w-[85%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            Choose Your Pack
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-6">
            Pick the Right Package for Your Stage & Budget
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 ${
                plan.popular 
                  ? 'shadow-[12px_12px_0px_#000] scale-105 bg-gradient-to-br from-purple-50 to-blue-50' 
                  : 'shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#dcd4ff] text-black px-6 py-2 rounded-full text-sm font-bold shadow-[4px_4px_0px_#000] border-2 border-black flex items-center gap-2">
                    <Star size={16} className="text-purple-600" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#dcd4ff] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000]">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-5xl md:text-6xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-lg ml-2">one-time</span>
                </div>
                <motion.button
                  className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 border-2 border-black ${
                    plan.popular 
                      ? 'bg-[#dcd4ff] text-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]'
                      : 'bg-white text-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] hover:bg-[#dcd4ff]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy {plan.name}
                </motion.button>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-lg text-black mb-4 flex items-center gap-2">
                  <ShoppingBag size={20} className="text-purple-600" />
                  What's Included:
                </h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-gray-200 pt-6">
                <h4 className="font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Zap size={20} className="text-purple-600" />
                  Outcome:
                </h4>
                <p className="text-gray-700 leading-relaxed italic">
                  {plan.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_#000] border-2 border-black">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Detailed Feature Comparison
            </h3>
            <p className="text-gray-600 text-xl">
              See exactly what's included in each package
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="text-left py-6 px-6 font-bold text-xl text-black">Features</th>
                  <th className="text-center py-6 px-6 font-bold text-xl text-black">Starter</th>
                  <th className="text-center py-6 px-6 font-bold text-xl text-black bg-[#dcd4ff] rounded-t-lg border-2 border-black border-b-0 shadow-[0px_-4px_0px_#000]">Growth</th>
                  <th className="text-center py-6 px-6 font-bold text-xl text-black">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td colSpan="4" className="py-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#dcd4ff] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000]">
                            {category.icon}
                          </div>
                          <h4 className="text-2xl font-bold text-black">
                            {category.category}
                          </h4>
                        </div>
                        <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b-2 border-gray-200 hover:bg-white/50 transition-colors duration-200">
                        <td className="py-6 px-6 text-black font-semibold text-lg">{feature.name}</td>
                        <td className="py-6 px-6 text-center text-gray-700 font-medium">{feature.starter}</td>
                        <td className="py-6 px-6 text-center text-black font-bold bg-[#dcd4ff]/30">{feature.growth}</td>
                        <td className="py-6 px-6 text-center text-gray-700 font-medium">{feature.premium}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-700 text-xl mb-8">
              Still not sure which package is right for you?
            </p>
            <motion.button
              className="bg-[#dcd4ff] text-black px-10 py-5 rounded-full font-bold text-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={24} className="text-purple-600" />
              Get Free Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;