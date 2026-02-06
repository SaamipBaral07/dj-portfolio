"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useId } from "react";
import { FiMusic, FiHeadphones, FiVolume2, FiRadio, FiMic, FiPlayCircle } from "react-icons/fi";
import { FaRecordVinyl, FaWaveSquare } from "react-icons/fa";

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const uniqueId = useId();

  // Fixed particle positions - MOVE INSIDE useEffect to fix hydration
  const [particlePositions, setParticlePositions] = useState<Array<{ x: string, y: string }>>([]);

  // Enhanced audio bar heights for better visualizer
  const audioBarHeights = [
    20, 45, 70, 35, 60, 25, 55, 30, 75, 40,
    50, 35, 65, 45, 30, 60, 40, 55, 25, 70,
    35, 50, 45, 60, 30, 55, 40, 65, 35, 50,
    25, 60, 45, 55, 30, 65, 40, 50, 35, 60,
    45, 55, 30, 65, 40, 50, 35, 60, 45, 55,
    30, 65, 40, 50, 35, 60, 45, 55, 30, 65
  ];

  // Professional DJ icons for the rotating square
  const djIcons = [
    { Icon: FiMusic, color: "text-cyan-400" },
    { Icon: FiHeadphones, color: "text-purple-400" },
    { Icon: FaRecordVinyl, color: "text-blue-400" },
    { Icon: FiVolume2, color: "text-cyan-400" },
    { Icon: FiRadio, color: "text-purple-400" },
    { Icon: FiMic, color: "text-blue-400" },
    { Icon: FaWaveSquare, color: "text-cyan-400" },
    { Icon: FiPlayCircle, color: "text-purple-400" },
  ];

  useEffect(() => {
    setIsClient(true);

    // Set particle positions on client only to fix hydration
    setParticlePositions([
      { x: "10vw", y: "20vh" },
      { x: "25vw", y: "45vh" },
      { x: "40vw", y: "15vh" },
      { x: "60vw", y: "70vh" },
      { x: "75vw", y: "30vh" },
      { x: "85vw", y: "60vh" },
      { x: "30vw", y: "80vh" },
      { x: "50vw", y: "10vh" },
      { x: "90vw", y: "40vh" },
      { x: "15vw", y: "55vh" },
      { x: "70vw", y: "25vh" },
      { x: "35vw", y: "65vh" },
      { x: "55vw", y: "35vh" },
      { x: "20vw", y: "75vh" },
      { x: "45vw", y: "85vh" },
    ]);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      // Prevent body scrolling
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };

    const handleScroll = () => {
      setHasScrolled(true);
      // Prevent scrolling beyond the page
      window.scrollTo(0, 0);
    };

    handleResize(); // Initial call
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Set initial styles to prevent scroll
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      // Clean up styles
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Add a separate useEffect to handle scroll prevention
  useEffect(() => {
    if (isClient) {
      // Prevent any scrolling behavior
      const preventDefault = (e: Event) => {
        e.preventDefault();
      };

      // Disable wheel, touch, and keyboard scrolling
      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("touchmove", preventDefault, { passive: false });
      window.addEventListener("keydown", (e) => {
        if ([32, 33, 34, 35, 36, 38, 40].includes(e.keyCode)) {
          e.preventDefault();
        }
      });

      // Ensure we're at the top
      window.scrollTo(0, 0);

      return () => {
        window.removeEventListener("wheel", preventDefault);
        window.removeEventListener("touchmove", preventDefault);
      };
    }
  }, [isClient]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
      {/* PARALLAX BACKGROUND LAYERS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-blue-900/15"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
        />

        {/* Particle effect - Only render on client */}
        {isClient && (
          <div className="absolute inset-0">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={`particle-${uniqueId}-${i}`}
                className="absolute w-[2px] h-[2px] bg-cyan-300/50 rounded-full"
                initial={{
                  x: pos.x,
                  y: pos.y,
                  opacity: 0,
                }}
                animate={{
                  y: [null, "-100vh"],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        {/* Dynamic gradient squares - Changed from circles to squares */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl"
          animate={
            isClient ? {
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
            } : {}
          }
          transition={
            isClient ? {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            } : {}
          }
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-2xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 blur-3xl"
          animate={
            isClient ? {
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 30, 0],
            } : {}
          }
          transition={
            isClient ? {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            } : {}
          }
        />
      </div>

      {/* ENHANCED BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={isClient ? { scale: 1 } : { scale: 1.15 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src="/images/bg-photo2.jpg"
          alt="DJ Bugati - Perth's Premier DJ"
          fill
          priority
          className="object-cover opacity-40"
          style={{
            maskImage: "radial-gradient(circle at center, black 50%, transparent 90%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center pt-16 sm:pt-18 md:pt-20 lg:pt-24 xl:pt-28">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* LEFT SIDE - SQUARE IMAGE CONTAINER */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1 flex justify-center"
            >
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]">

                {/* OUTER SPINNING ANIMATION FRAMES - SQUARE BASED */}

                {/* Frame 2 - Inner spinning frame (reverse) */}
                <motion.div
                  className="absolute -inset-2 sm:-inset-3 rounded-2xl"
                  animate={imageLoaded && isClient ? {
                    rotate: -360,
                  } : {}}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: "conic-gradient(from 180deg, transparent 0%, #a855f7 30%, #3b82f6 60%, #00ffff 90%, transparent 100%)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "2px",
                    borderRadius: '16px',
                    opacity: 0.5,
                  }}
                />

                {/* Professional DJ icons rotating around the square */}
                <motion.div
                  className="absolute inset-0"
                  animate={imageLoaded && isClient ? {
                    rotate: 360,
                  } : {}}
                  transition={{
                    duration: 55,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {djIcons.map(({ Icon, color }, index) => {
                    // Calculate positions in a square pattern
                    const angle = (index * 45 * Math.PI) / 180;
                    const radius = 60;
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);

                    return (
                      <motion.div
                        key={`icon-${index}`}
                        className={`absolute ${color} text-lg sm:text-xl opacity-70`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        animate={imageLoaded && isClient ? {
                          scale: [1, 1.15, 1],
                          y: [0, -3, 0],
                          opacity: [0.6, 0.8, 0.6],
                        } : {}}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: index * 0.4,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className="drop-shadow-md" />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* MAIN SQUARE IMAGE CONTAINER */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/5 bg-gradient-to-br from-gray-900/90 to-black/90 shadow-2xl backdrop-blur-sm">

                  {/* Image container */}
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 0.9 }}
                    animate={imageLoaded ? { scale: 1 } : { scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/dj-bugati.jpeg"
                      alt="DJ Bugati - Perth DJ"
                      fill
                      className="object-contain rounded-2xl"  // Changed to object-contain with rounded corners
                      onLoadingComplete={() => setImageLoaded(true)}
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
                      priority
                      style={{
                        // Center the image in the square container
                        objectPosition: "center center",
                      }}
                    />
                  </motion.div>

                  {/* Dark overlay to make image pop */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/20 via-transparent to-black/20" />

                  {/* Inner glow border */}
                  <motion.div
                    className="absolute inset-2 sm:inset-3 rounded-xl border border-white/10"
                    animate={imageLoaded && isClient ? {
                      scale: [1, 1.02, 1],
                      opacity: [0.3, 0.5, 0.3],
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Corner accents - Enhanced for square container */}
                  <motion.div
                    className="absolute top-3 left-3 w-6 h-6 z-10"
                    animate={imageLoaded && isClient ? {
                      rotate: [0, 360],
                    } : {}}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-4 h-4 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-lg" />
                    <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  </motion.div>

                  {/* Other corner accents */}
                  <motion.div
                    className="absolute top-3 right-3 w-6 h-6 z-10"
                    animate={imageLoaded && isClient ? {
                      rotate: [0, -360],
                    } : {}}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-4 h-4 border-t-2 border-r-2 border-purple-400/70 rounded-tr-lg" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-3 left-3 w-6 h-6 z-10"
                    animate={imageLoaded && isClient ? {
                      rotate: [0, 360],
                    } : {}}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-4 h-4 border-b-2 border-l-2 border-blue-400/70 rounded-bl-lg" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-3 right-3 w-6 h-6 z-10"
                    animate={imageLoaded && isClient ? {
                      rotate: [0, -360],
                    } : {}}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-4 h-4 border-b-2 border-r-2 border-cyan-400/70 rounded-br-lg" />
                  </motion.div>

                  {/* Center point */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                </div>

                {/* Loading overlay */}
                {!imageLoaded && (
                  <div className="absolute inset-0 rounded-2xl bg-gray-900/90 flex items-center justify-center">
                    <motion.div
                      className="relative w-16 h-16"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <FaRecordVinyl className="w-full h-full text-purple-400/70" />
                      <div className="absolute inset-3 rounded-full border-2 border-transparent border-l-cyan-400" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* RIGHT SIDE - TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left order-1 lg:order-2 mb-6 md:mb-0"
            >
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-1.5 mb-2 sm:mb-3"
              >
                <div className="w-5 sm:w-6 md:w-7 h-[1px] bg-gradient-to-r from-cyan-400 to-purple-500" />
                <span className="text-xs tracking-[0.15em] uppercase text-white/90 font-medium">
                  Perth's Premier DJ
                </span>
                <div className="w-5 sm:w-6 md:w-7 h-[1px] bg-gradient-to-r from-purple-500 to-cyan-400" />
              </motion.div>

              {/* Main title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase leading-tight">
                <motion.span
                  className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg"
                  animate={
                    isClient ? {
                      backgroundPosition: ["0% 50%", "100% 50%"],
                    } : {}
                  }
                  transition={
                    isClient ? {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    } : {}
                  }
                  style={{
                    backgroundSize: "300% 100%",
                  }}
                >
                  DJ
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mt-1 sm:mt-2 lg:mt-3 drop-shadow-lg"
                  animate={
                    isClient ? {
                      backgroundPosition: ["0% 50%", "100% 50%"],
                    } : {}
                  }
                  transition={
                    isClient ? {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    } : {}
                  }
                  style={{
                    backgroundSize: "300% 100%",
                  }}
                >
                  BUGATI
                </motion.span>
              </h1>

              {/* Location tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-1.5 mt-2 sm:mt-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-sm border border-white/10 shadow-sm"
              >
                <motion.div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-xs tracking-wider text-white/90 uppercase font-medium">
                  Perth · Weddings · Events · Collaborations
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-2 sm:mt-3 md:mt-4 text-white/80 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed font-light"
              >
                Creating unforgettable atmospheres through music.
                Specializing in weddings, corporate events, and nightlife experiences across Perth.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book"
                  className="group relative inline-block"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 blur-xs sm:blur-sm opacity-50 group-hover:opacity-70"
                    animate={
                      isClient ? {
                        scale: isHovered ? 1.1 : 1,
                      } : {}
                    }
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-md border border-white/20 overflow-hidden">
                    <span className="relative text-white font-bold tracking-wider uppercase flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm">
                      <motion.span
                        animate={
                          isClient ? { rotate: isHovered ? 360 : 0 } : {}
                        }
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                      >
                        <FiMusic />
                      </motion.span>
                      Book Your Event
                      <motion.span
                        animate={
                          isClient ? { x: isHovered ? 4 : 0 } : {}
                        }
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Social stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5"
              >
                {[
                  { label: "Events", value: "500+" },
                  { label: "Weddings", value: "150+" },
                  { label: "Rating", value: "4.9★" },
                ].map((stat, index) => (
                  <motion.div
                    key={`stat-${uniqueId}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={isClient ? { y: -3 } : {}}
                    className="text-center"
                  >
                    <div className="text-base sm:text-lg md:text-xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent drop-shadow">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/80 mt-0.5 font-medium tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ENHANCED AUDIO VISUALIZER LINES - Only on client */}
      {isClient && typeof window !== 'undefined' && window.innerWidth >= 768 && (
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

          {/* Main visualizer lines */}
          <div className="h-16 md:h-18 lg:h-20 xl:h-24 flex items-end justify-center gap-[2px] md:gap-0.5 px-1 md:px-2">
            {audioBarHeights.slice(0, 40).map((height, i) => (
              <motion.div
                key={`audio-bar-${uniqueId}-${i}`}
                className="relative rounded-t"
                style={{
                  width: "5px",
                  height: `${height * 0.50}%`,
                  background: i % 3 === 0
                    ? "linear-gradient(to top, #00ffff, #0080ff)"
                    : i % 3 === 1
                      ? "linear-gradient(to top, #a855f7, #3b82f6)"
                      : "linear-gradient(to top, #3b82f6, #00ffff)",
                  boxShadow: `0 -1px 3px ${i % 3 === 0 ? 'rgba(0, 255, 255, 0.25)' : i % 3 === 1 ? 'rgba(168, 85, 247, 0.25)' : 'rgba(59, 130, 246, 0.25)'}`,
                  minHeight: "4px",
                }}
                animate={{
                  height: [
                    `${height * 0.50}%`,
                    `${Math.min(height + 12, 70) * 0.50}%`,
                    `${height * 0.50}%`,
                  ],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 0.6 + (i % 4) * 0.15,
                  repeat: Infinity,
                  delay: i * 0.015,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/15 blur-xs rounded-t" />
              </motion.div>
            ))}
          </div>

          {/* Reflection effect */}
          <div className="absolute -top-3 md:-top-4 lg:-top-5 left-0 right-0 h-3 md:h-4 lg:h-5 opacity-10">
            <div className="w-full h-full bg-gradient-to-b from-cyan-500/10 to-transparent blur-sm" />
          </div>
        </div>
      )}

      {/* Custom CSS for better fit */}
      <style jsx global>{`
        /* Ensure content fits within viewport */
        .min-h-screen {
          min-height: 100vh;
          max-height: 100vh;
        }
        
        /* Prevent any overflow */
        body, html {
          overflow: hidden;
          max-width: 100vw;
          max-height: 100vh;
        }
        
        /* Smooth animations */
        * {
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 375px) {
          .pt-16 {
            padding-top: 3.5rem !important;
          }
          
          h1 {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 400px) {
          .pt-16 {
            padding-top: 4rem !important;
          }
        }
        
        @media (min-width: 768px) {
          .pt-16 {
            padding-top: 4.5rem !important;
          }
        }
        
        @media (min-width: 1024px) {
          .pt-16 {
            padding-top: 5.5rem !important;
          }
        }
        
        @media (min-width: 1280px) {
          .pt-16 {
            padding-top: 6.5rem !important;
          }
        }
        
        @media (min-width: 1536px) {
          .pt-16 {
            padding-top: 7.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}