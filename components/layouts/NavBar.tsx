// components/layouts/NavBar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music, Calendar, Star, Phone, User, Headphones, Volume2, Play, CalendarDays } from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: <Music className="w-5 h-5" />,
    hoverColor: "from-cyan-400 to-purple-500",
    activeColor: "from-cyan-500 to-purple-500"
  },
  {
    name: "About Me",
    path: "/about",
    icon: <User className="w-5 h-5" />,
    hoverColor: "from-purple-400 to-pink-500",
    activeColor: "from-purple-500 to-pink-500"
  },
  {
    name: "Events",
    path: "/event-services",
    icon: <Calendar className="w-5 h-5" />,
    hoverColor: "from-pink-400 to-rose-500",
    activeColor: "from-pink-500 to-rose-500"
  },
  {
    name: "Reviews",
    path: "/reviews",
    icon: <Star className="w-5 h-5" />,
    hoverColor: "from-rose-400 to-orange-500",
    activeColor: "from-rose-500 to-orange-500"
  },
  {
    name: "Contact Me",
    path: "/contact",
    icon: <Phone className="w-5 h-5" />,
    hoverColor: "from-orange-400 to-cyan-500",
    activeColor: "from-orange-500 to-cyan-500"
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeGlow, setActiveGlow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Active glow effect
    const glowInterval = setInterval(() => {
      setActiveGlow(prev => !prev);
    }, 2500);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearInterval(glowInterval);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Only render client-specific elements after mount
  const renderAudioWaveVisualizer = isMounted && typeof window !== 'undefined' && window.innerWidth >= 1024;

  return (
    <>
      {/* Add global styles for navbar hover/active states */}
      <style jsx global>{`
        /* Force update hover effects */
        .nav-link-item {
          position: relative;
        }
        
        .nav-link-item .hover-bg {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .nav-link-item:hover .hover-bg {
          opacity: 0.15 !important;
        }
        
        .nav-link-item.active .active-bg {
          opacity: 0.1 !important;
        }
        
        .nav-link-item.active .active-line {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        /* Force text color changes */
        .nav-link-item .icon {
          transition: all 0.3s ease;
        }
        
        .nav-link-item:hover .icon {
          color: white !important;
          transform: rotate(10deg);
        }
        
        .nav-link-item.active .icon {
          color: white !important;
          transform: scale(1.1);
        }
        
        .nav-link-item .text {
          transition: all 0.3s ease;
        }
        
        .nav-link-item:hover .text {
          color: white !important;
        }
        
        .nav-link-item.active .text {
          color: white !important;
          font-weight: 600 !important;
        }
      `}</style>

      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3"
            : "bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-xl py-5"
        }`}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "300% 300%",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Enhanced Professional Logo */}
            <Link href="/" className="group relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 lg:gap-4"
              >
                {/* DJ Logo Container */}
                <div className="relative">
                  {/* Pulsing outer glow */}
                  <motion.div
                    className="absolute -inset-3 lg:-inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20"
                    animate={{
                      scale: activeGlow ? 1.1 : 1,
                      opacity: activeGlow ? 0.4 : 0.2,
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    style={{
                      filter: 'blur(6px)',
                    }}
                  />

                  {/* Main logo container */}
                  <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg border-2 border-white/20 flex items-center justify-center shadow-2xl">
                    {/* Center dot */}
                    <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                    
                    {/* Ring */}
                    <div className="absolute w-8 h-8 rounded-full border-2 border-cyan-400/50" />
                    
                    {/* Vinyl lines */}
                    <div className="absolute w-10 h-10 rounded-full border border-white/20" />
                    
                    {/* Play icon */}
                    <Play className="w-5 h-5 text-white relative z-10" />
                  </div>
                </div>

                {/* Text Logo */}
                <div className="hidden sm:block">
                  <motion.div
                    className="flex flex-col"
                    whileHover={{ x: 3 }}
                  >
                    <div className="text-white font-bold text-2xl lg:text-3xl tracking-tight leading-none">
                      <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                        DJ
                      </span>
                      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent ml-2">
                        BUGATI
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-[10px] lg:text-xs text-cyan-200/90 tracking-[0.15em] font-medium uppercase">
                        PREMIER DJ · PERTH
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - SIMPLIFIED with working hover */}
            <div className="hidden lg:flex items-center">
              {/* Nav items with proper spacing */}
              <div className="flex items-center">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <div
                      key={item.name}
                      className={`nav-link-item relative mx-1.5 ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Link
                        href={item.path}
                        className="relative px-5 py-2.5 group block"
                        onClick={handleNavClick}
                      >
                        {/* Hover background - SIMPLE and WORKING */}
                        <div
                          className={`hover-bg absolute inset-0 rounded-lg bg-gradient-to-r ${item.hoverColor}`}
                          style={{
                            opacity: hoveredItem === item.name ? 0.15 : 0
                          }}
                        />

                        {/* Active background */}
                        {isActive && (
                          <div
                            className={`active-bg absolute inset-0 rounded-lg bg-gradient-to-r ${item.activeColor} opacity-0`}
                          />
                        )}

                        {/* Content */}
                        <div className="relative z-10 flex items-center gap-2">
                          <span className="icon text-lg text-white/70">
                            {item.icon}
                          </span>
                          <span className="text font-medium text-white/80">
                            {item.name}
                          </span>
                        </div>

                        {/* Active indicator line */}
                        {isActive && (
                          <div
                            className={`active-line absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r ${item.activeColor} rounded-full opacity-0`}
                            style={{
                              transform: 'translateY(5px)'
                            }}
                          />
                        )}

                        {/* Hover dot indicator */}
                        {hoveredItem === item.name && !isActive && (
                          <div className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-x-1/2" />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Spacer */}
              <div className="ml-6"></div>

              {/* Book Now Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/book"
                  className="group relative block"
                  onClick={handleNavClick}
                >
                  {/* Outer glow */}
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      filter: 'blur(4px)',
                    }}
                  />

                  {/* Main button */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-xl border border-white/20 rounded-full px-7 py-3 overflow-hidden group-hover:border-cyan-400/30 transition-all duration-300">
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Button content */}
                    <div className="relative flex items-center gap-3">
                      {/* Calendar icon */}
                      <motion.div
                        className="relative"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <CalendarDays className="w-5 h-5 text-cyan-400" />
                        <motion.div
                          className="absolute -inset-1 rounded-full bg-cyan-400/20"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>

                      {/* Text */}
                      <div className="flex flex-col">
                        <span className="text-white font-bold tracking-wider uppercase text-sm">
                          BOOK EVENT
                        </span>
                        <span className="text-cyan-300/80 text-[10px] tracking-widest uppercase font-medium">
                          AVAILABLE NOW
                        </span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10"
                        animate={{
                          x: [0, 2, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Play className="w-3 h-3 text-white rotate-90" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative group"
              aria-label="Toggle menu"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <X className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <Menu className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-gradient-to-b from-black/95 via-purple-900/20 to-black/95 backdrop-blur-2xl z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-24 left-4 right-4 md:left-1/4 md:right-1/4 z-40 lg:hidden"
            >
              <div className="bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Menu Header */}
                <div className="p-6 border-b border-white/10 bg-gradient-to-r from-black/50 to-gray-900/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                        <Volume2 className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">
                          DJ <span className="text-cyan-300">BUGATI</span>
                        </div>
                        <div className="text-xs text-cyan-200/70 tracking-widest font-medium">NAVIGATION</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-2 last:mb-0"
                      >
                        <Link
                          href={item.path}
                          onClick={handleNavClick}
                          className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                            isActive
                              ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/20"
                              : "hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          {/* Icon */}
                          <div className={`p-2.5 rounded-lg ${
                            isActive
                              ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30"
                              : "bg-white/5 group-hover:bg-white/10"
                          }`}>
                            <div className={isActive ? "text-white" : "text-white/70"}>
                              {item.icon}
                            </div>
                          </div>

                          {/* Text */}
                          <div className="flex-1">
                            <span className={`font-semibold ${
                              isActive
                                ? "text-white"
                                : "text-white/80 group-hover:text-white"
                            }`}>
                              {item.name}
                            </span>
                          </div>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Mobile Book Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.1 }}
                    className="mt-6"
                  >
                    <Link
                      href="/book"
                      onClick={handleNavClick}
                      className="block group"
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-xl"
                          animate={{
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            filter: 'blur(4px)',
                          }}
                        />

                        {/* Button */}
                        <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-white/20 rounded-xl px-6 py-4 overflow-hidden group-hover:border-cyan-400/30 transition-all duration-300">
                          <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <motion.div
                                className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center border border-white/20"
                                animate={{
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                <CalendarDays className="w-5 h-5 text-white" />
                              </motion.div>
                              <div>
                                <div className="text-white font-bold text-sm">BOOK YOUR EVENT</div>
                                <div className="text-cyan-300/80 text-xs font-medium">Click to Enquire</div>
                              </div>
                            </div>
                            <motion.div
                              className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/20"
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Play className="w-4 h-4 text-white" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Audio wave visualizer */}
      {renderAudioWaveVisualizer && (
        <div className="fixed bottom-0 left-0 right-0 h-1 z-[99] pointer-events-none opacity-50">
          {[...Array(48)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 h-1 bg-gradient-to-t from-cyan-400/30 to-purple-500/30 rounded-t-sm"
              style={{
                left: `${(i * 2.08)}%`,
              }}
              animate={{
                height: ["1px", "3px", "1px"],
              }}
              transition={{
                duration: 1 + Math.random() * 0.5,
                repeat: Infinity,
                delay: i * 0.02,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}