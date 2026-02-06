// components/events/AnimatedTestimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote, Users, Award, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "DJ BUGATI transformed our wedding into pure magic! From the ceremony to the last dance, every moment was perfectly scored. Our guests are still talking about the music.",
    author: "Sarah & James Thompson",
    role: "Wedding Couple",
    rating: 5,
    event: "Luxury Wedding Reception",
    highlight: "Perfect musical journey from start to finish"
  },
  {
    id: 2,
    quote: "Our annual corporate gala reached new heights with DJ BUGATI. Professional, precise, and perfectly understood our brand's vibe. The energy was electric all night!",
    author: "Michael Chen",
    role: "CEO, TechCorp Australia",
    rating: 5,
    event: "Corporate Annual Gala",
    highlight: "Brand-aligned perfection"
  },
  {
    id: 3,
    quote: "Friday nights will never be the same! The dance floor was packed solid for 4 hours straight. DJ BUGATI reads the crowd like no one else in Perth.",
    author: "Lisa Rodriguez",
    role: "Venue Manager",
    rating: 5,
    event: "Weekly Club Night",
    highlight: "Unbeatable crowd energy"
  }
];

export default function AnimatedTestimonials() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
              <Quote className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              Stories of Success
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Hear from clients who've experienced the DJ BUGATI difference
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full border border-cyan-400/10" />
                </div>

                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 left-6 opacity-10"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Quote className="w-16 h-16 text-cyan-400" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 italic text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Highlight */}
                  <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-pink-400" />
                      <span className="text-cyan-300 text-sm font-medium">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">{testimonial.author}</div>
                        <div className="text-white/60 text-sm">{testimonial.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 text-sm font-semibold">{testimonial.event}</div>
                        <div className="text-white/40 text-xs">Verified Client</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-3 -right-3"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold">
                  #{idx + 1}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "5-Star Rated", icon: <Star className="w-5 h-5" />, value: "4.9/5" },
            { label: "Happy Clients", icon: <Users className="w-5 h-5" />, value: "500+" },
            { label: "Events Hosted", icon: <Award className="w-5 h-5" />, value: "750+" },
            { label: "Repeat Bookings", icon: <Heart className="w-5 h-5" />, value: "85%" }
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-cyan-500/20">
                  <div className="text-cyan-300">{badge.icon}</div>
                </div>
                <div className="text-2xl font-bold text-white">{badge.value}</div>
              </div>
              <div className="text-white/60 text-sm">{badge.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}