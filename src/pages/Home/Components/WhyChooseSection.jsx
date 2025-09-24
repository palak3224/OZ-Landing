import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  Award,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';

const WhyChooseSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Auto-progress roadmap steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  const roadmapSteps = [
    {
      icon: <Target size={32} className="text-purple-600" />,
      title: "Launch",
      description: "Build foundation & establish presence"
    },
    {
      icon: <TrendingUp size={32} className="text-purple-600" />,
      title: "Growth",
      description: "Expand reach & generate consistent leads"
    },
    {
      icon: <Award size={32} className="text-purple-600" />,
      title: "Scale",
      description: "Optimize systems & maximize revenue"
    }
  ];

  // Clean animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden" ref={ref}>
      <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={fadeUpVariants}
            className="inline-block bg-[#dcd4ff] text-black px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-[4px_4px_0px_#000] border-2 border-black"
          >
            <TrendingUp size={20} className="inline mr-2" />
            WHY CHOOSE OZ MEDIA PLANET
          </motion.div>
          
          <motion.h2 
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
          >
            Your Business, Solved
            <br />
            <span className="text-purple-600">Step by Step</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeUpVariants}
            className="text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            We don't just create solutions – we solve problems. From launch to growth to scale, 
            we're your strategic partner in digital success.
          </motion.p>
          
          <motion.div
            variants={fadeUpVariants}
            className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-8"
          />
        </motion.div>

        {/* Benefits Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 h-full">
                
                {/* Icon and Check Mark */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000]"
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check size={20} className="text-white" />
                  </motion.div>
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
                <motion.div 
                  className="mt-6 flex justify-end"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    x: hoveredCard === index ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={24} className="text-purple-600" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Growth Roadmap Visual */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_#000] mb-16 relative overflow-hidden"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }} />

          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 relative">
              Our Growth Roadmap
              <motion.div
                className="absolute -top-1 -right-8"
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star size={20} className="text-purple-600" />
              </motion.div>
            </h3>
            <p className="text-gray-600 text-lg">
              From startup to success - your journey with us
            </p>
          </div>

          {/* Roadmap Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeStep + 1) / 3) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
            
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative z-10 text-center p-8 rounded-3xl border-2 border-black lg:w-1/3 cursor-pointer transition-all duration-500 ${
                  index === activeStep 
                    ? 'bg-[#dcd4ff] shadow-[8px_8px_0px_#000]' 
                    : 'bg-white shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: index !== activeStep ? 1.02 : 1 }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] transition-all duration-300 ${
                    index === activeStep ? 'bg-white' : 'bg-[#dcd4ff]'
                  }`}
                  animate={{
                    scale: index === activeStep ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>

                <h4 className="text-2xl font-bold text-black mb-2">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Progress indicators for mobile */}
          <div className="flex justify-center mt-8 gap-3 lg:hidden">
            {roadmapSteps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeStep ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button
            className="bg-[#dcd4ff] text-black px-12 py-6 rounded-full font-bold text-xl border-2 border-black shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all duration-300 flex items-center gap-4 mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <TrendingUp size={28} className="text-purple-600" />
            Start Your Growth Journey Today
            <ArrowRight size={28} className="text-purple-600" />
          </motion.button>
          
          <p className="text-gray-600 mt-6 text-lg">
            Join <span className="font-bold text-purple-600">200+</span> businesses that chose growth over guesswork
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseSection;