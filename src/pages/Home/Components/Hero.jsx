import { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

export default function StartupPacksHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  
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

  const openVideoPopup = () => {
    setIsVideoPopupOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
  };

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeVideoPopup();
      }
    };
    
    if (isVideoPopupOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVideoPopupOpen]);

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

  // Video popup variants
  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
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
    <>
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
                  className="relative h-96 rounded-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                  onClick={openVideoPopup}
                  onHoverStart={() => setIsVideoHovered(true)}
                  onHoverEnd={() => setIsVideoHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Video Thumbnail */}
                  <img 
                    src="/preview.png"
                    alt="Video thumbnail showing business presentation"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/20 rounded-xl" />
                  
                  {/* Play Button with Advanced Animations */}
                  <motion.div className="relative mb-6 z-10">
                    <motion.div 
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        boxShadow: isVideoHovered 
                          ? "0 20px 40px rgba(0, 0, 0, 0.3)" 
                          : "0 10px 30px rgba(0, 0, 0, 0.2)",
                        scale: isVideoHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-0 h-0 ml-1"
                        style={{
                          borderLeft: '20px solid #8b5cf6',
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
                        className="absolute inset-0 rounded-full border-2 border-white/50"
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
                    className="text-2xl font-semibold text-white mb-2 z-10 text-center"
                    animate={{ 
                      y: isVideoHovered ? -2 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    See How It Works
                  </motion.h3>
                  
                  <motion.p 
                    className="text-white/90 text-lg z-10"
                    animate={{ 
                      y: isVideoHovered ? -2 : 0 
                    }}
                  >
                    Watch our 2-minute demo
                  </motion.p>
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

      {/* Video Popup */}
      <AnimatePresence>
        {isVideoPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoPopup}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors"
                onClick={closeVideoPopup}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Video Player */}
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  poster="/preview.png"
                >
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Startup Packs Demo Video
                </h3>
                <p className="text-gray-600">
                  Learn how our startup packs can transform your business in just 2 minutes
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}