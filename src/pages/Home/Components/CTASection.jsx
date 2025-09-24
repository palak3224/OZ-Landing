import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Rocket, 
  Calendar, 
  Phone, 
  MessageCircle, 
  Mail,
  QrCode,
  ArrowRight,
  Zap,
  Users,
  Clock,
  Shield,
  Star
} from 'lucide-react';

const CTASection = () => {
  const [hoveredContact, setHoveredContact] = useState(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mock QR code component
  const QRCodePlaceholder = () => (
    <motion.div 
      className="w-32 h-32 bg-white border-2 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mx-auto"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-center">
        <QrCode size={48} className="text-black mx-auto mb-2" />
        <div className="text-xs font-bold text-black">SCAN ME</div>
      </div>
    </motion.div>
  );

  const contactMethods = [
    {
      icon: <Phone size={18} className="text-purple-600" />,
      title: "+91-XXXXXXXXXX",
      subtitle: "Call Us Directly",
      color: "purple"
    },
    {
      icon: <MessageCircle size={18} className="text-purple-600" />,
      title: "WhatsApp Chat",
      subtitle: "Instant Support",
      color: "green"
    },
    {
      icon: <Mail size={18} className="text-purple-600" />,
      title: "contact@ozmediaplanet.com",
      subtitle: "Email Us",
      color: "blue"
    }
  ];

  const stats = [
    {
      icon: <Users size={20} className="text-purple-600" />,
      number: "200+",
      label: "Happy Clients"
    },
    {
      icon: <Clock size={20} className="text-purple-600" />,
      number: "24/7",
      label: "Support Available"
    },
    {
      icon: <Shield size={20} className="text-purple-600" />,
      number: "100%",
      label: "Satisfaction Guaranteed"
    }
  ];

  // Animation variants
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

  const slideInVariants = {
    hidden: { 
      opacity: 0, 
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-purple-600 rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-16 h-16 bg-blue-600 rounded-full opacity-10"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
      
      <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content Container */}
        <motion.div 
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 md:p-10 border-2 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-10 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={fadeUpVariants}
              className="inline-block bg-[#dcd4ff] text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-[4px_4px_0px_#000] border-2 border-black relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 rounded-full"
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Zap size={18} className="inline mr-2" />
              READY TO GROW YOUR BUSINESS?
            </motion.div>
            
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight"
            >
              Let's Solve Your Business Problems
              <br />
              <span className="text-purple-600 relative">
                & Grow Online!
                <motion.div
                  className="absolute -top-2 -right-6"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star size={16} className="text-purple-400" />
                </motion.div>
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeUpVariants}
              className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Stop struggling with digital challenges. Get professional solutions that actually work.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.button
              variants={fadeUpVariants}
              className="bg-[#dcd4ff] text-black px-10 py-4 rounded-full font-bold text-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
              <Rocket size={20} className="text-purple-600" />
              Get Started Now
              <ArrowRight size={20} className="text-purple-600" />
            </motion.button>

            <motion.button
              variants={fadeUpVariants}
              className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] hover:bg-[#dcd4ff] transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar size={20} className="text-purple-600" />
              Book Free Consultation
            </motion.button>
          </motion.div>

          {/* QR Code and Contact Info Container */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 items-start mb-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            
            {/* QR Code Section */}
            <motion.div 
              variants={slideInVariants}
              className="text-center"
            >
              <div className="group inline-block">
                <QRCodePlaceholder />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-black mb-2">Quick Access</h3>
                <p className="text-gray-700">
                  Scan to Buy a Pack or Schedule a Call Instantly
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={slideInVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-black mb-6 text-center lg:text-left flex items-center gap-2">
                <MessageCircle size={24} className="text-purple-600" />
                Get in Touch
              </h3>
              
              {/* Contact Methods */}
              <div className="space-y-3">
                {contactMethods.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-[#dcd4ff] rounded-full flex items-center justify-center shadow-[2px_2px_0px_#000]"
                      animate={{
                        scale: hoveredContact === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-bold text-black">{contact.title}</div>
                      <div className="text-gray-700 text-sm">{contact.subtitle}</div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredContact === index ? 1 : 0,
                        x: hoveredContact === index ? 0 : -10
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={20} className="text-purple-600" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Statistics */}
          <motion.div 
            className="pt-8 border-t-2 border-gray-300 relative z-10"
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  <motion.div 
                    className="text-3xl font-bold text-black mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Trust Message */}
          <motion.div
            className="text-center mt-8 relative z-10"
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-gray-600 text-lg">
              Join our growing community of successful businesses
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;