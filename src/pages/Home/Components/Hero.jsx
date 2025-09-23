import { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

export default function StartupPacksHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePosition({ x: mouseX, y: mouseY });
    x.set(mouseX);
    y.set(mouseY);
  };

  const playVideo = () => {
    alert('Video would play here! You can integrate with YouTube, Vimeo, or your own video player.');
  };

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  // Item variants for individual elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Button variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Floating element component with motion
  const FloatingElement = ({ size, opacity, initialX, initialY, delay }) => (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `rgba(173, 70, 255, ${opacity})`,
      }}
      initial={{ x: initialX, y: initialY }}
      animate={{
        x: [initialX, initialX + 20, initialX - 15, initialX],
        y: [initialY, initialY - 25, initialY + 10, initialY],
        rotate: [0, 120, 240, 360]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.2 }}
    />
  );

  return (
    <motion.section 
      className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white relative overflow-hidden flex items-center py-20"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-purple-100/30"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-black leading-tight"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Startup Packs Designed to{' '}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Solve Your Business Problems
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 font-medium tracking-wide"
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              Professional Identity • Online Presence • Leads & Growth
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5"
              variants={containerVariants}
            >
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => console.log('Get Started clicked')}
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">Get Started Today</span>
              </motion.button>
              
              <motion.button 
                className="group relative px-8 py-4 bg-white text-purple-500 font-semibold rounded-xl border-2 border-purple-500 overflow-hidden"
                variants={buttonVariants}
                whileHover={{
                  ...buttonVariants.hover,
                  backgroundColor: "#8b5cf6",
                  color: "#ffffff",
                  borderColor: "#8b5cf6"
                }}
                whileTap="tap"
                onClick={() => console.log('Schedule Call clicked')}
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">Schedule a Free Call</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Video Section */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-2xl shadow-purple-500/10 relative overflow-hidden"
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
              }}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent pointer-events-none"
                animate={{
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="relative h-96 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex flex-col items-center justify-center cursor-pointer"
                onClick={playVideo}
                onHoverStart={() => setIsVideoHovered(true)}
                onHoverEnd={() => setIsVideoHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Play Button with Advanced Animations */}
                <motion.div className="relative mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30"
                    animate={{
                      boxShadow: isVideoHovered 
                        ? "0 20px 40px rgba(139, 92, 246, 0.4)" 
                        : "0 10px 30px rgba(139, 92, 246, 0.3)",
                      scale: isVideoHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-0 h-0 ml-1"
                      style={{
                        borderLeft: '20px solid white',
                        borderTop: '14px solid transparent',
                        borderBottom: '14px solid transparent'
                      }}
                      animate={{ 
                        scale: isVideoHovered ? 1.1 : 1,
                        x: isVideoHovered ? 2 : 0
                      }}
                    />
                  </motion.div>
                  
                  {/* Enhanced Ripple Effects */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                <motion.h3 
                  className="text-2xl font-semibold text-black mb-2"
                  animate={{ 
                    color: isVideoHovered ? "#8b5cf6" : "#000000" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  See How It Works
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-lg"
                  animate={{ 
                    y: isVideoHovered ? -2 : 0 
                  }}
                >
                  Watch our 2-minute demo
                </motion.p>

                {/* Animated Decorative Elements */}
              </motion.div>

              {/* Animated Video Stats */}
              <motion.div 
                className="flex justify-between items-center mt-4 text-sm text-gray-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.span 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  Live Demo Available
                </motion.span>
                
                <motion.span
                  whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                >
                  2:30 duration
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}