// components/events/AnimatedHero.tsx
"use client";

import { motion } from "framer-motion";
import { Headphones, Volume2, Sparkles, Music, Star, Award } from "lucide-react";
import Link from "next/link";
import AnimatedParticles from "./AnimatedParticles";

export default function AnimatedHero() {
  // Predefined particle positions (no random on server)
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "25%", top: "35%" },
    { left: "40%", top: "15%" },
    { left: "60%", top: "25%" },
    { left: "75%", top: "40%" },
    { left: "90%", top: "30%" },
    { left: "15%", top: "70%" },
    { left: "30%", top: "85%" },
    { left: "50%", top: "75%" },
    { left: "65%", top: "90%" },
    { left: "80%", top: "65%" },
    { left: "95%", top: "80%" },
  ];

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-24"> {/* Added pt-24 */}
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Use fixed particle positions */}
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Large gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Animated badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-semibold tracking-widest uppercase">
              PERTH'S PREMIER DJ
            </span>
          </motion.div>

          {/* Main title with staggered animation */}
          <div className="relative mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent bottom-0"
            />
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
              >
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent leading-[0.9]">
                  EVENT
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-[0.9] mt-2">
                  EXCELLENCE
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1 }}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent top-0"
            />
          </div>

          {/* Animated tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Where{" "}
              <span className="text-cyan-300 font-semibold">professionalism</span> meets{" "}
              <span className="text-purple-300 font-semibold">perfection</span> in every beat.
              <span className="block mt-3 text-lg text-white/70">
                Elevating Perth's events with unparalleled musical experiences since 2013.
              </span>
            </p>
          </motion.div>

          {/* Animated stats with icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {[
              { 
                value: "500+", 
                label: "Events",
                icon: <Music className="w-5 h-5" />,
                color: "from-cyan-400 to-blue-500"
              },
              { 
                value: "98%", 
                label: "Satisfaction",
                icon: <Star className="w-5 h-5" />,
                color: "from-yellow-400 to-orange-500"
              },
              { 
                value: "10+", 
                label: "Years Experience",
                icon: <Award className="w-5 h-5" />,
                color: "from-purple-400 to-pink-500"
              },
              { 
                value: "24/7", 
                label: "Support",
                icon: <Headphones className="w-5 h-5" />,
                color: "from-green-400 to-emerald-500"
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            
            <Link
              href="/book"
              className="relative group flex items-center gap-4 px-10 py-5 rounded-full overflow-hidden"
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #00ffff, #9d4edd, #00ffff, transparent)",
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[2px] bg-black rounded-full" />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
                >
                  <Volume2 className="w-6 h-6 text-cyan-300" />
                </motion.div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg tracking-wider uppercase">
                    START YOUR EXPERIENCE
                  </div>
                  <div className="text-cyan-300/80 text-sm font-medium">
                    Free Consultation • Custom Quote • Instant Response
                  </div>
                </div>
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/20"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-cyan-400/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full border border-purple-400/20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}