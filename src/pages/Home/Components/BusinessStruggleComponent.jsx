import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ban, 
  Eye, 
  MessageSquare, 
  TrendingDown,
  ArrowRight
} from 'lucide-react';

const BusinessStruggleComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const points = [
    {
      icon: <Ban size={32} className="text-red-500" />,
      title: "No professional brand identity",
      description: "Without a cohesive brand identity, businesses struggle to establish credibility and stand out from competitors in the marketplace.",
      image: "https://imlondon.co.uk/wp-content/uploads/2021/01/Brand-Identity-Image.png"
    },
    {
      icon: <Eye size={32} className="text-orange-500" />,
      title: "Low or zero online visibility",
      description: "Many businesses remain invisible to potential customers due to poor SEO, limited social media presence, and lack of digital marketing strategy.",
      image: "https://www.thevisibilitymethod.com/wp-content/uploads/2024/09/The-Visibility-Hive.jpg"
    },
    {
      icon: <MessageSquare size={32} className="text-yellow-500" />,
      title: "No leads or customer engagement",
      description: "Without effective lead generation systems and engagement strategies, businesses fail to build meaningful relationships with their target audience.",
      image: "https://ideascale.com/wp-content/uploads/2023/09/Customer-Engagement-cover.jpg"
    },
    {
      icon: <TrendingDown size={32} className="text-blue-500" />,
      title: "No way to track growth",
      description: "Lack of proper analytics and tracking systems makes it impossible to measure success, identify opportunities, or make data-driven decisions.",
      image: "https://img.freepik.com/free-vector/hand-drawn-stock-market-concept-with-arrow_23-2149163552.jpg?semt=ais_hybrid&w=740"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [points.length]);

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 px-4 sm:px-6">
      <div className="w-full lg:w-[85%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#dcd4ff] text-black px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-[4px_4px_0px_#000] border-2 border-black">
            <TrendingDown size={20} className="inline mr-2 text-red-500" />
            COMMON BUSINESS STRUGGLES
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Why Most Small Businesses
            <br />
            <span className="text-purple-600">Struggle Online</span>
          </h2>
          
          <p className="text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Starting a business is tough. Many startups and small businesses fail to grow because they lack the right digital foundation. Common challenges include:
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image Section */}
          <div className="lg:sticky lg:top-8 order-2 lg:order-1">
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-100 border-2 border-black shadow-[8px_8px_0px_#000] group hover:shadow-[12px_12px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={points[activeIndex].image}
                  alt={points[activeIndex].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#dcd4ff] to-purple-100 flex items-center justify-center text-gray-700 hidden">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000]">
                      {points[activeIndex].icon}
                    </div>
                    <p className="text-xl font-bold text-black">{points[activeIndex].title}</p>
                  </div>
                </div>
              </AnimatePresence>
              
              {/* Active Point Badge */}
              <div className="absolute top-6 left-6 bg-[#dcd4ff] text-black px-4 py-2 rounded-full text-sm font-bold shadow-[4px_4px_0px_#000] border-2 border-black flex items-center gap-2">
                {points[activeIndex].icon}
                Point {activeIndex + 1}
              </div>
              
              {/* Progress indicator dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                {points.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-black ${
                      activeIndex === index 
                        ? 'bg-[#dcd4ff] shadow-[2px_2px_0px_#000]' 
                        : 'bg-white/70 hover:bg-white'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`p-6 rounded-3xl border-2 border-black transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#dcd4ff] shadow-[8px_8px_0px_#000] -translate-x-1 -translate-y-1' 
                    : 'bg-white shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1'
                }`}>
                  {/* Progress Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-200 rounded-l-3xl overflow-hidden">
                    <motion.div
                      className="w-full"
                      initial={{ height: '0%' }}
                      animate={{ 
                        height: activeIndex === index ? '100%' : '0%',
                        backgroundColor: activeIndex === index ? '#8b5cf6' : '#dcd4ff'
                      }}
                      transition={{ duration: activeIndex === index ? 3 : 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="ml-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] transition-all duration-300 ${
                          activeIndex === index ? 'bg-white' : 'bg-[#dcd4ff]'
                        }`}>
                          {point.icon}
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                          activeIndex === index ? 'text-black' : 'text-gray-600'
                        }`}>
                          {point.title}
                        </h3>
                      </div>
                      
                      <ArrowRight 
                        size={24} 
                        className={`transition-all duration-300 ${
                          activeIndex === index 
                            ? 'text-purple-600 translate-x-1' 
                            : 'text-gray-400 opacity-0 group-hover:opacity-100'
                        }`} 
                      />
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-700 text-lg leading-relaxed ml-16"
                        >
                          {point.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000] max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Ready to Solve These Problems?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Don't let these challenges hold your business back. Our solutions are designed to address exactly these pain points.
            </p>
            <button className="bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-bold text-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all duration-300 flex items-center gap-3 mx-auto">
              <ArrowRight size={24} className="text-purple-600" />
              Explore Our Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStruggleComponent;