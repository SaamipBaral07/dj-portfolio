// components/events/AnimatedServiceCard.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, MapPin, ArrowRight, Star, Users, Zap, Calendar, Sparkles } from "lucide-react";
import { useState, useRef } from 'react';

interface AnimatedServiceCardProps {
  service: {
    id: string;
    title: string;
    icon: React.ReactNode;
    tagline: string;
    description: string;
    features: string[];
    images: string[];
    gradient: string;
    priceRange: string;
    duration: string;
    popularFor: string[];
    stats: {
      label: string;
      value: string;
      icon: React.ReactNode;
    }[];
  };
  index: number;
}

export default function AnimatedServiceCard({ service, index }: AnimatedServiceCardProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05, 
        ease: "easeOut"
      }}
      className="relative group"
    >
      {/* Enhanced Floating badge with glow effect */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.3, 
          delay: index * 0.05 + 0.1,
          ease: "easeOut"
        }}
        className="absolute -top-5 -left-5 z-20"
      >
        <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/20">
          <motion.div 
            className="w-2.5 h-2.5 rounded-full bg-cyan-400"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-sm text-white font-bold tracking-wider">#{index + 1} SERVICE</span>
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl -z-10" />
        </div>
      </motion.div>

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl shadow-2xl transition-all duration-300 will-change-transform"
      >
        {/* Animated gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none`}
          animate={isHovered ? { opacity: 0.08 } : { opacity: 0 }}
        />
        
        {/* Shimmer effect - only on hover for performance */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
            }}
          />
        )}

        {/* Main Content */}
        <div className="p-8 md:p-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
            {/* Enhanced Icon and Title Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} bg-opacity-25 border border-white/30 shadow-2xl backdrop-blur-sm group/icon`}>
                <div className="relative z-10 text-white">
                  {service.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-2xl opacity-30 rounded-3xl`} />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Enhanced Content */}
            <div className="flex-1">
              <div className="mb-6">
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {service.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-cyan-300 font-bold text-lg md:text-xl flex items-center gap-3 group/tagline"
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    <Zap className="w-5 h-5 text-cyan-400 drop-shadow-lg" />
                  </motion.span>
                  <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
                    {service.tagline}
                  </span>
                </motion.div>
              </div>

              <motion.div 
                className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {service.description}
              </motion.div>

              {/* Enhanced Quick Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Duration",
                    value: service.duration,
                    color: "from-cyan-500/30 via-cyan-500/20 to-cyan-500/10",
                    borderColor: "border-cyan-500/40",
                    glowColor: "shadow-cyan-500/20"
                  },
                  {
                    icon: <span className="text-lg">💰</span>,
                    label: "Investment",
                    value: service.priceRange,
                    color: "from-emerald-500/30 via-emerald-500/20 to-emerald-500/10",
                    borderColor: "border-emerald-500/40",
                    glowColor: "shadow-emerald-500/20"
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Location",
                    value: "Perth Area",
                    color: "from-purple-500/30 via-purple-500/20 to-purple-500/10",
                    borderColor: "border-purple-500/40",
                    glowColor: "shadow-purple-500/20"
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    label: "Capacity",
                    value: "Up to 1000+",
                    color: "from-pink-500/30 via-pink-500/20 to-pink-500/10",
                    borderColor: "border-pink-500/40",
                    glowColor: "shadow-pink-500/20"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.03, duration: 0.25 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      transition: { duration: 0.15 }
                    }}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl border-2 ${item.borderColor} bg-gradient-to-br ${item.color} backdrop-blur-sm shadow-lg ${item.glowColor} group/info`}
                  >
                    <div className="p-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 group-hover/info:bg-white/25 transition-colors">
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-wider font-semibold mb-1">{item.label}</div>
                      <div className="text-white font-bold text-lg">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {service.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05, duration: 0.25 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  transition: { duration: 0.15 }
                }}
                className="relative p-5 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm shadow-lg group/stat overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Image Gallery */}
        <div className="px-8 md:px-12 pb-8 relative z-10">
          <motion.div 
            className="mb-6 flex items-center justify-between"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.3 }}
          >
            <h4 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-3">
              <Star className="w-6 h-6 text-cyan-400 drop-shadow-lg" />
              <span>Event Gallery</span>
            </h4>
            <div className="text-white/70 text-sm font-medium hidden md:block">
              Hover to preview • Click to enlarge
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.25 + idx * 0.05,
                  ease: "easeOut"
                }}
                onMouseEnter={() => setHoveredImage(idx)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ y: -5 }}
                className="relative h-64 md:h-72 rounded-2xl overflow-hidden group/image cursor-pointer border-2 border-white/10 shadow-2xl will-change-transform"
              >
                <Image
                  src={img}
                  alt={`${service.title} - Image ${idx + 1}`}
                  fill
                  className={`object-cover transition-all duration-700 ease-out ${
                    hoveredImage === idx ? 'scale-125 brightness-110' : 'scale-100 brightness-90'
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Enhanced Overlay with gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredImage === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/40 shadow-lg">
                    <span className="text-white text-sm font-bold">#{idx + 1}</span>
                  </div>
                </div>
                
                {/* Enhanced Hover Content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 to-transparent transition-transform duration-300 ${
                    hoveredImage === idx ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg mb-1">View Full Size</div>
                      <div className="text-white/70 text-sm">Click to explore</div>
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-400/50 flex items-center justify-center backdrop-blur-sm shadow-lg transition-transform duration-300 ${
                      hoveredImage === idx ? 'rotate-45 scale-110' : ''
                    }`}>
                      <ArrowRight className="w-5 h-5 text-cyan-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Features & CTA */}
        <div className="p-8 md:p-12 border-t border-white/20 relative z-10 bg-gradient-to-b from-transparent to-black/20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enhanced Features List */}
            <div className="lg:col-span-2">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-4 flex items-center gap-4">
                  <motion.div 
                    className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-400/40 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-7 h-7 text-cyan-300" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                    Premium Inclusions
                  </span>
                </h4>
                <p className="text-white/70 mb-6 text-lg font-light">
                  Everything you need for a flawless event experience
                </p>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.25, 
                      delay: 0.3 + idx * 0.03,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 5, 
                      scale: 1.01,
                      transition: { duration: 0.15 }
                    }}
                    className="flex items-start gap-4 p-5 rounded-2xl border-2 border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm group/feature shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="relative w-10 h-10 rounded-full border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover/feature:border-cyan-400 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                      </div>
                    </div>
                    <span className="text-white/90 group-hover/feature:text-white font-medium text-base transition-colors leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="relative">
              <motion.div 
                className="sticky top-24"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 border-2 border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Popular For Tags */}
                  <div className="mb-8 relative z-10">
                    <h5 className="text-white font-extrabold mb-4 flex items-center gap-3 text-lg">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Users className="w-5 h-5 text-cyan-400" />
                      </motion.div>
                      <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                        Perfect For
                      </span>
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {service.popularFor.map((item, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.35 + idx * 0.05, duration: 0.2 }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            transition: { duration: 0.15 }
                          }}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-cyan-500/15 to-purple-500/20 border border-cyan-500/40 text-cyan-200 text-sm font-bold backdrop-blur-sm shadow-lg hover:shadow-cyan-500/20 transition-all"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="space-y-4 relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }} 
                      whileTap={{ scale: 0.98 }}
                      className="relative"
                    >
                      <Link
                        href={`/book?service=${service.id}`}
                        className="block w-full text-center py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-purple-500 text-white font-extrabold text-lg md:text-xl relative overflow-hidden group/btn shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/50"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-full transition-all duration-500" />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <Calendar className="w-6 h-6" />
                          Book Now
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={`/gallery?filter=${service.id}`}
                        className="block w-full text-center py-5 rounded-2xl border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/20"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          View Full Gallery
                        </span>
                      </Link>
                    </motion.div>

                    <div className="pt-6 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-white/70 text-sm mb-3 font-medium">Need help deciding?</div>
                        <Link
                          href="/contact"
                          className="text-cyan-300 hover:text-cyan-200 text-sm font-bold inline-flex items-center gap-2 group/link transition-colors"
                        >
                          <span>Chat with our team</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Background Effects */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none rounded-3xl`}
          animate={isHovered ? { opacity: 0.12 } : { opacity: 0 }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Reduced Floating particles for performance */}
        {Array.from({ length: 6 }).map((_, i) => {
          const left = 10 + (i * 20) % 80;
          const top = 15 + (i * 25) % 75;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + (i % 2),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Corner accent lights */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-br-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>

      {/* Enhanced Connecting line for visual flow */}
      {index < 4 && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-cyan-500/60 via-purple-500/60 to-transparent rounded-full shadow-lg shadow-cyan-500/30"
        />
      )}
    </motion.div>
  );
}