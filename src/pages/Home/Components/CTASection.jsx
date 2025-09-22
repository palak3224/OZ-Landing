import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Calendar, 
  Phone, 
  MessageCircle, 
  Mail,
  QrCode,
  ArrowRight,
  Zap,
  Users
} from 'lucide-react';

const CTASection = () => {
  // Mock QR code component since we can't generate real QR codes
  const QRCodePlaceholder = () => (
    <div className="w-32 h-32 bg-white border-2 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
      <div className="text-center">
        <QrCode size={48} className="text-black mx-auto mb-2" />
        <div className="text-xs font-bold text-black">QR CODE</div>
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-600 rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content Container */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 md:p-10 border-2 border-black shadow-[8px_8px_0px_#000]">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block bg-[#dcd4ff] text-black px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-[4px_4px_0px_#000] border-2 border-black">
              <Zap size={18} className="inline mr-2" />
              READY TO GROW YOUR BUSINESS?
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Let's Solve Your Business Problems
              <br />
              <span className="text-purple-600">& Grow Online!</span>
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stop struggling with digital challenges. Get professional solutions that actually work.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              className="bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] hover:bg-red-600 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={20} />
              Get Started Now
            </motion.button>

            <motion.button
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              Book Free Consultation
            </motion.button>
          </div>

          {/* QR Code and Contact Info Container */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* QR Code Section */}
            <div className="text-center">
              <div className="group inline-block">
                <div className="w-24 h-24 bg-white border-2 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mx-auto">
                  <div className="text-center">
                    <QrCode size={32} className="text-black mx-auto mb-1" />
                    <div className="text-xs font-bold text-black">QR CODE</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-black mb-1">Quick Access</h3>
                <p className="text-gray-700 text-sm">
                  Scan to Buy a Pack or Schedule a Call
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black mb-4 text-center lg:text-left">
                Get in Touch
              </h3>
              
              {/* Contact Methods */}
              <div className="space-y-3">
                {/* Phone */}
                <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-[#dcd4ff] rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-black text-sm">+91-XXXXXXXXXX</div>
                    <div className="text-gray-700 text-xs">Call Us</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-[#dcd4ff] rounded-full flex items-center justify-center">
                    <MessageCircle size={18} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-black text-sm">WhatsApp</div>
                    <div className="text-gray-700 text-xs">Quick Chat Support</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-[#dcd4ff] rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-black text-sm">contact@ozmediaplanet.com</div>
                    <div className="text-gray-700 text-xs">Email Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics */}
          <div className="mt-8 pt-6 border-t-2 border-gray-300">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="group">
                <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-gray-700 font-semibold text-xs">Happy Clients</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-700 font-semibold text-xs">Support Available</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-700 font-semibold text-xs">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;