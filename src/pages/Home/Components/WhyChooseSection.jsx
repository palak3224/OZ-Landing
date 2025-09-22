import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  Award,
  ArrowRight,
  Check
} from 'lucide-react';

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: <Target size={32} className="text-purple-600" />,
      title: "Tailored Solutions",
      description: "Custom-built for startups & small businesses",
      details: "We understand the unique challenges of growing businesses and create solutions that fit your specific needs and budget."
    },
    {
      icon: <TrendingUp size={32} className="text-purple-600" />,
      title: "Problem-Solving Approach", 
      description: "Launch → Growth → Scale methodology",
      details: "Our proven three-stage process takes you from startup to scale-up with strategic planning at every step."
    },
    {
      icon: <DollarSign size={32} className="text-purple-600" />,
      title: "Affordable Pricing",
      description: "Designed for Indian entrepreneurs",
      details: "Competitive rates that make professional digital solutions accessible to businesses of all sizes across India."
    },
    {
      icon: <Award size={32} className="text-purple-600" />,
      title: "Professional Assets",
      description: "Designs, strategies & ready-to-use materials",
      details: "Get complete packages with professional designs, actionable strategies, and assets you can implement immediately."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#dcd4ff] text-black px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-[4px_4px_0px_#000] border-2 border-black">
            <TrendingUp size={20} className="inline mr-2" />
            WHY CHOOSE OZ MEDIA PLANET
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Your Business, Solved
            <br />
            <span className="text-purple-600">Step by Step</span>
          </h2>
          
          <p className="text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            We don't just create solutions – we solve problems. From launch to growth to scale, 
            we're your strategic partner in digital success.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Icon and Check Mark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000]">
                    <Check size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-purple-600">
                    {benefit.description}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.details}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={24} className="text-purple-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Roadmap Visual */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_#000] mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Growth Roadmap
            </h3>
            <p className="text-gray-600 text-lg">
              From startup to success - your journey with us
            </p>
          </div>

          {/* Roadmap Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-full transform -translate-y-1/2 z-0"></div>
            
            {/* Step 1: Launch */}
            <div className="relative z-10 text-center bg-[#dcd4ff] p-8 rounded-3xl border-2 border-black shadow-[6px_6px_0px_#000] lg:w-1/3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000]">
                <Target size={32} className="text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">Launch</h4>
              <p className="text-gray-700">Build foundation & establish presence</p>
            </div>

            {/* Step 2: Growth */}
            <div className="relative z-10 text-center bg-white p-8 rounded-3xl border-2 border-black shadow-[6px_6px_0px_#000] lg:w-1/3">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000]">
                <TrendingUp size={32} className="text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">Growth</h4>
              <p className="text-gray-700">Expand reach & generate consistent leads</p>
            </div>

            {/* Step 3: Scale */}
            <div className="relative z-10 text-center bg-[#dcd4ff] p-8 rounded-3xl border-2 border-black shadow-[6px_6px_0px_#000] lg:w-1/3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000]">
                <Award size={32} className="text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">Scale</h4>
              <p className="text-gray-700">Optimize systems & maximize revenue</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.button
            className="bg-[#dcd4ff] text-black px-12 py-6 rounded-full font-bold text-xl border-2 border-black shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all duration-300 flex items-center gap-4 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp size={28} className="text-purple-600" />
            Start Your Growth Journey Today
            <ArrowRight size={28} className="text-purple-600" />
          </motion.button>
          
          <p className="text-gray-600 mt-6 text-lg">
            Join 200+ businesses that chose growth over guesswork
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;