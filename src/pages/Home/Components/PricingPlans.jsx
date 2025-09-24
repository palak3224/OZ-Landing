import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PricingPlans = () => {
  const [expandedCategory, setExpandedCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
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
      popular: false,
      gradient: "from-blue-50 to-purple-50"
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
      popular: true,
      gradient: "from-purple-50 to-indigo-50"
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
      popular: false,
      gradient: "from-indigo-50 to-purple-50"
    }
  ];

  const comparisonFeatures = [
    {
      category: "Brand Identity",
      icon: <Palette size={20} className="text-purple-600" />,
      features: [
        { name: "Logo Design Concepts", starter: "1", growth: "3 + Final", premium: "Unlimited + Final" },
        { name: "Branding Assets", starter: "Basic", growth: "Extended", premium: "Complete Kit" },
        { name: "Business Card Design", starter: <X size={16} className="text-red-500" />, growth: <X size={16} className="text-red-500" />, premium: <Check size={16} className="text-green-500" /> },
        { name: "Brand Guidelines", starter: <X size={16} className="text-red-500" />, growth: "Basic", premium: "Comprehensive" }
      ]
    },
    {
      category: "Digital Presence",
      icon: <Globe size={20} className="text-purple-600" />,
      features: [
        { name: "Social Media Setup", starter: "1 Platform", growth: "3 Platforms", premium: "All Major Platforms" },
        { name: "Social Media Templates", starter: "3", growth: "10", premium: "20+" },
        { name: "Website Pages", starter: <X size={16} className="text-red-500" />, growth: "1 Landing Page", premium: "Landing + 3 Pages" },
        { name: "Content Strategy", starter: <X size={16} className="text-red-500" />, growth: "Basic Guide", premium: "Full Strategy" }
      ]
    },
    {
      category: "Growth & Analytics",
      icon: <BarChart3 size={20} className="text-purple-600" />,
      features: [
        { name: "Lead Generation Setup", starter: "Guide Only", growth: "Template", premium: "Full Setup" },
        { name: "Analytics Dashboard", starter: <X size={16} className="text-red-500" />, growth: "Template", premium: "Custom Setup" },
        { name: "SEO Optimization", starter: <X size={16} className="text-red-500" />, growth: <Check size={16} className="text-green-500" />, premium: "Complete Guide" },
        { name: "Growth Consultation", starter: <X size={16} className="text-red-500" />, growth: <Check size={16} className="text-green-500" />, premium: "1:1 Session" }
      ]
    },
    {
      category: "Support & Delivery",
      icon: <Headphones size={20} className="text-purple-600" />,
      features: [
        { name: "Support Level", starter: "Email", growth: "Priority Email", premium: "24/7 Priority" },
        { name: "Delivery Time", starter: "1 Week", growth: "2 Weeks", premium: "3 Weeks" },
        { name: "Revisions", starter: <X size={16} className="text-red-500" />, growth: "1 Round", premium: "Unlimited" },
        { name: "Money Back Guarantee", starter: <X size={16} className="text-red-500" />, growth: <Check size={16} className="text-green-500" />, premium: <Check size={16} className="text-green-500" /> }
      ]
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const shineVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="py-24 bg-white px-4 sm:px-6 overflow-hidden">
      <div className="w-full lg:w-[85%] mx-auto">
        {/* Header Section with enhanced animation */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose Your Pack
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pick the Right Package for Your Stage & Budget
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Enhanced Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${plan.gradient} rounded-3xl p-8 border-2 border-black overflow-hidden group cursor-pointer ${
                plan.popular 
                  ? 'shadow-[12px_12px_0px_#000] scale-105' 
                  : 'shadow-[8px_8px_0px_#000]'
              }`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
                variants={shineVariants}
                initial="initial"
                animate={hoveredCard === index ? "animate" : "initial"}
              />

              {/* Floating particles animation */}
              {hoveredCard === index && (
                <motion.div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 2) * 30}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <div className="bg-[#dcd4ff] text-black px-6 py-2 rounded-full text-sm font-bold shadow-[4px_4px_0px_#000] border-2 border-black flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Star size={16} className="text-purple-600" />
                    </motion.div>
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className="text-center mb-8 relative z-10">
                <motion.div 
                  className="flex items-center justify-center gap-3 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#dcd4ff] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000]"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {plan.icon}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {plan.name}
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-gray-600 text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {plan.description}
                </motion.p>
                <motion.div 
                  className="mb-8"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
                >
                  <span className="text-5xl md:text-6xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-lg ml-2">one-time</span>
                </motion.div>
                <motion.button
                  className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 border-2 border-black relative overflow-hidden ${
                    plan.popular 
                      ? 'bg-[#dcd4ff] text-black shadow-[4px_4px_0px_#000]'
                      : 'bg-white text-black shadow-[4px_4px_0px_#000] hover:bg-[#dcd4ff]'
                  }`}
                  whileHover={{ 
                    y: -2,
                    boxShadow: "6px 6px 0px #000"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  Buy {plan.name}
                </motion.button>
              </div>

              <div className="space-y-4 mb-8 relative z-10">
                <h4 className="font-bold text-lg text-black mb-4 flex items-center gap-2">
                  <ShoppingBag size={20} className="text-purple-600" />
                  What's Included:
                </h4>
                {plan.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-start gap-3"
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                    custom={featureIndex}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Check size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="border-t-2 border-gray-200 pt-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.8 }}
              >
                <h4 className="font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Zap size={20} className="text-purple-600" />
                  Outcome:
                </h4>
                <p className="text-gray-700 leading-relaxed italic">
                  {plan.outcome}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Redesigned Comparison Section */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_#000] border-2 border-black relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Background decoration */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 -translate-y-32 translate-x-32"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          <motion.div className="text-center mb-16 relative z-10">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Detailed Feature Comparison
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              See exactly what's included in each package
            </motion.p>
          </motion.div>

          {/* Modern Card-based Comparison */}
          <div className="space-y-8">
            {comparisonFeatures.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + categoryIndex * 0.2 }}
              >
                <motion.div
                  className="bg-[#dcd4ff] p-6 cursor-pointer flex items-center justify-between border-b-2 border-black"
                  onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? -1 : categoryIndex)}
                  whileHover={{ backgroundColor: "#c4b5fd" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000]"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-2xl font-bold text-black">
                      {category.category}
                    </h4>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} className="text-black" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {expandedCategory === categoryIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
                        <div className="font-bold text-lg text-black flex items-center">
                          <div className="w-3 h-3 bg-purple-600 rounded-full mr-3" />
                          Feature
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg text-black bg-gray-100 rounded-lg py-2 px-4">
                            Starter
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg text-black bg-[#dcd4ff] rounded-lg py-2 px-4 shadow-[2px_2px_0px_#000] border border-black">
                            Growth
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg text-black bg-gray-100 rounded-lg py-2 px-4">
                            Premium
                          </div>
                        </div>

                        {category.features.map((feature, featureIndex) => (
                          <React.Fragment key={featureIndex}>
                            <motion.div 
                              className="py-4 text-black font-semibold flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-3" />
                              {feature.name}
                            </motion.div>
                            <motion.div 
                              className="py-4 text-center text-gray-700 font-medium flex justify-center items-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: featureIndex * 0.1 + 0.1 }}
                            >
                              <div className="bg-gray-50 rounded-lg px-3 py-2 border">
                                {feature.starter}
                              </div>
                            </motion.div>
                            <motion.div 
                              className="py-4 text-center text-black font-bold flex justify-center items-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: featureIndex * 0.1 + 0.2 }}
                            >
                              <div className="bg-[#dcd4ff] rounded-lg px-3 py-2 border border-black shadow-[2px_2px_0px_#000]">
                                {feature.growth}
                              </div>
                            </motion.div>
                            <motion.div 
                              className="py-4 text-center text-gray-700 font-medium flex justify-center items-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: featureIndex * 0.1 + 0.3 }}
                            >
                              <div className="bg-gray-50 rounded-lg px-3 py-2 border">
                                {feature.premium}
                              </div>
                            </motion.div>
                          </React.Fragment>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <p className="text-gray-700 text-xl mb-8">
              Still not sure which package is right for you?
            </p>
            <motion.button
              className="bg-[#dcd4ff] text-black px-10 py-5 rounded-full font-bold text-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all duration-300 flex items-center gap-3 mx-auto relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Users size={24} className="text-purple-600" />
              </motion.div>
              Get Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPlans;