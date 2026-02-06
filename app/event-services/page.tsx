// app/events/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Music, Users, Sparkles, Building2, Cake, PartyPopper, Headphones, MapPin, Clock, CheckCircle, Star, Volume2, Award, Zap, Shield, Check, Radio } from "lucide-react";
import AnimatedHero from "@/components/events/AnimatedHero";
import AnimatedServiceCard from "@/components/events/AnimatedServiceCard";
import AnimatedTestimonials from "@/components/events/AnimatedTestimonials";

export const metadata: Metadata = {
  title: "Event Services | DJ BUGATI - Weddings, Corporate Events, Night Clubs & More",
  description: "Professional DJ services in Perth for weddings, corporate events, night clubs, birthday parties, and private events. Premium sound systems, lighting, and unforgettable experiences.",
  keywords: "DJ services Perth, wedding DJ, corporate event DJ, night club DJ, birthday party DJ, private event DJ, Perth DJ",
  openGraph: {
    title: "Event Services | DJ BUGATI - Perth's Premier DJ",
    description: "Professional DJ services for all your events in Perth",
    type: "website",
  },
};

interface EventService {
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
}

const eventServices: EventService[] = [
 
  {
    id: "weddings",
    title: "Wedding DJ Services",
    icon: <Sparkles className="w-10 h-10" />,
    tagline: "Your Perfect Day, Our Perfect Mix",
    description: "Transform your wedding celebration with a seamless musical journey. From the romantic ceremony to the energetic reception, we craft personalized soundtracks that reflect your love story and keep your guests dancing all night.",
    features: [
      "Ceremony & Cocktail Hour Music",
      "Custom Love Story Playlist",
      "Professional MC & Host Services",
      "Wireless Lapel & Handheld Mics",
      "Elegant Uplighting & Dance Floor Effects",
      "Pre-Event Musical Planning Session",
      "Parent & Grandparent Dance Coordination",
      "Cultural & Traditional Music Integration"
    ],
    images: [
      "/images/events/wedding-1.jpg",
      "/images/events/wedding-2.jpg",
      "/images/events/wedding-3.jpg",
      "/images/events/wedding-4.jpg"
    ],
    gradient: "from-pink-500 via-rose-500 to-red-500",
    priceRange: "$1,200 - $3,500",
    duration: "6-10 Hours",
    popularFor: ["Receptions", "Ceremonies", "Engagement Parties", "Vow Renewals"],
    stats: [
      { label: "Events", value: "250+", icon: <Calendar className="w-5 h-5" /> },
      { label: "Happy Couples", value: "500+", icon: <Users className="w-5 h-5" /> },
      { label: "Rating", value: "5.0", icon: <Star className="w-5 h-5" /> },
      { label: "Quick Response", value: "<2h", icon: <Clock className="w-5 h-5" /> }
    ]
  },
  {
    id: "corporate",
    title: "Corporate Events",
    icon: <Building2 className="w-10 h-10" />,
    tagline: "Professional Sound for Business Excellence",
    description: "Elevate your corporate gatherings with sophisticated audio solutions. From background music that sets the tone to energizing beats for celebrations, we understand corporate needs and deliver flawless execution.",
    features: [
      "Brand-Aligned Music Curation",
      "Professional Announcement System",
      "Multi-Zone Audio Setup",
      "Wireless Presentation Support",
      "Executive Gala Entertainment",
      "Team Building Activity Soundtracks",
      "Product Launch Audio Production",
      "Conference & Seminar Support"
    ],
    images: [
      "/images/events/corporate-1.jpg",
      "/images/events/corporate-2.jpg",
      "/images/events/corporate-3.jpg",
      "/images/events/corporate-4.jpg"
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    priceRange: "$800 - $2,500",
    duration: "4-8 Hours",
    popularFor: ["Conferences", "Galas", "Product Launches", "Award Nights"],
    stats: [
      { label: "Companies", value: "120+", icon: <Building2 className="w-5 h-5" /> },
      { label: "Events", value: "300+", icon: <Award className="w-5 h-5" /> },
      { label: "Repeat Clients", value: "85%", icon: <CheckCircle className="w-5 h-5" /> },
      { label: "Industries", value: "15+", icon: <Shield className="w-5 h-5" /> }
    ]
  },
  {
    id: "nightclubs",
    title: "Night Club & Venue DJ",
    icon: <Music className="w-10 h-10" />,
    tagline: "Energy That Packs The Dance Floor",
    description: "Bring explosive energy to your venue with our high-performance DJ sets. Specializing in creating electrifying atmospheres, we read crowds perfectly and deliver mixes that keep guests moving until last call.",
    features: [
      "High-Energy Continuous Mixing",
      "Latest Chart Hits & Timeless Classics",
      "Professional Club Lighting Systems",
      "Advanced Sound System Setup",
      "Extended 4-6 Hour Sets",
      "Genre-Specific Nights",
      "Crowd Reading & Energy Management",
      "Late Night & After-Hours Coverage"
    ],
    images: [
      "/images/events/nightclub-1.jpg",
      "/images/events/nightclub-2.jpg",
      "/images/events/nightclub-3.jpg",
      "/images/events/nightclub-4.jpg"
    ],
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    priceRange: "$500 - $1,500",
    duration: "4-6 Hours",
    popularFor: ["Clubs", "Bars", "Venue Nights", "Festivals"],
    stats: [
      { label: "Venues", value: "45+", icon: <MapPin className="w-5 h-5" /> },
      { label: "Weekly Sets", value: "15+", icon: <Zap className="w-5 h-5" /> },
      { label: "Capacity", value: "1000+", icon: <Users className="w-5 h-5" /> },
      { label: "Genres", value: "12+", icon: <Radio className="w-5 h-5" /> }
    ]
  },
  {
    id: "birthdays",
    title: "Birthday Celebrations",
    icon: <Cake className="w-10 h-10" />,
    tagline: "Celebrate Your Milestone in Style",
    description: "Make every birthday unforgettable with personalized party soundtracks. Whether it's a sweet sixteen, milestone celebration, or intimate gathering, we create the perfect atmosphere for your special day.",
    features: [
      "Age-Appropriate Music Selection",
      "Custom Birthday Playlist Creation",
      "Interactive Party Games & Activities",
      "Photo Booth Music & Announcements",
      "Flexible Indoor/Outdoor Setup",
      "Kid-Friendly & Adult Party Options",
      "Surprise Musical Arrangements",
      "Themed Party Soundtracks"
    ],
    images: [
      "/images/events/birthday-1.jpg",
      "/images/events/birthday-2.jpg",
      "/images/events/birthday-3.jpg",
      "/images/events/birthday-4.jpg"
    ],
    gradient: "from-yellow-500 via-orange-500 to-amber-500",
    priceRange: "$400 - $1,200",
    duration: "3-5 Hours",
    popularFor: ["Milestones", "Surprises", "Family Gatherings", "Theme Parties"],
    stats: [
      { label: "Parties", value: "180+", icon: <PartyPopper className="w-5 h-5" /> },
      { label: "Age Range", value: "1-100", icon: <Cake className="w-5 h-5" /> },
      { label: "Theme Parties", value: "60+", icon: <Sparkles className="w-5 h-5" /> },
      { label: "Repeat Clients", value: "70%", icon: <Users className="w-5 h-5" /> }
    ]
  },
  {
    id: "private",
    title: "Private Events",
    icon: <PartyPopper className="w-10 h-10" />,
    tagline: "Intimate Gatherings, Exceptional Sound",
    description: "From anniversaries to housewarmings, graduation parties to engagement celebrations - we provide personalized DJ services that make your private event truly special and memorable.",
    features: [
      "Personalized Music Consultation",
      "Intimate Gathering Sound Solutions",
      "Custom Playlist Development",
      "Flexible Scheduling & Setup",
      "Residential-Friendly Equipment",
      "Neighborhood Noise Management",
      "Special Request Accommodation",
      "All-Inclusive Package Options"
    ],
    images: [
      "/images/events/private-1.jpg",
      "/images/events/private-2.jpg",
      "/images/events/private-3.jpg",
      "/images/events/private-4.jpg"
    ],
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    priceRange: "$350 - $1,000",
    duration: "3-6 Hours",
    popularFor: ["Anniversaries", "Graduations", "House Parties", "Engagements"],
    stats: [
      { label: "Events", value: "200+", icon: <Calendar className="w-5 h-5" /> },
      { label: "Repeat Clients", value: "70%", icon: <CheckCircle className="w-5 h-5" /> },
      { label: "Response Time", value: "<24h", icon: <Clock className="w-5 h-5" /> },
      { label: "Setup Time", value: "60 min", icon: <Zap className="w-5 h-5" /> }
    ]
  }
];

export default function EventServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950">
      {/* Hero Section - Client Component with proper padding */}
      <div className="pt-24"> {/* Fixed padding top */}
        <AnimatedHero />
      </div>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
              <div className="px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm">
                <span className="text-cyan-300 font-bold tracking-widest uppercase text-sm">
                  Signature Services
                </span>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-6">
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent leading-tight">
                Unforgettable
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Experiences
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto">
              Each event is a unique masterpiece, crafted with precision and passion
            </p>
          </div>

          {/* Services */}
          <div className="space-y-20">
            {eventServices.map((service, index) => (
              <AnimatedServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedTestimonials />

      {/* Premium Equipment Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-400/10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/70 uppercase tracking-widest">Professional Gear</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Industry-Leading Equipment
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We invest in the best so you can experience premium sound quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Pioneer DJM-900NXS2",
                description: "Professional Mixer",
                features: ["4-Channel", "Magvel Fader", "64-Bit Processing"],
                icon: <Radio className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "JBL SRX800",
                description: "Premium Speakers",
                features: ["2000W RMS", "Crystal Clear", "Portable"],
                icon: <Volume2 className="w-8 h-8" />,
                color: "from-orange-500 to-yellow-500"
              },
              {
                name: "Chauvet Rogue",
                description: "Moving Head Lights",
                features: ["RGBW LEDs", "Fast Pan/Tilt", "DMX Control"],
                icon: <Zap className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Shure Wireless",
                description: "Microphone System",
                features: ["Professional Grade", "Long Range", "Dual Channel"],
                icon: <Headphones className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                <div className="relative z-10">
                  <div className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 inline-block`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-cyan-300 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-white/70 text-sm">
                        <Check className="w-3 h-3 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 pb-32 relative"> {/* Added pb-32 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/20">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-sm" />
              </div>

              <div className="relative p-12 md:p-16 text-center">
                <div className="inline-block p-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-8">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6">
                  <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                    Ready to Elevate
                  </span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Your Event?
                  </span>
                </h2>

                <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let's create something extraordinary together. Contact us for a personalized consultation and experience the DJ BUGATI difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/book"
                    className="group relative px-10 py-5 rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Calendar className="w-5 h-5 text-white" />
                      <span className="text-white font-bold text-lg tracking-wider">
                        Book Your Consultation
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/contact"
                    className="group px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Headphones className="w-5 h-5" />
                      Ask Questions First
                    </span>
                  </Link>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span>Free Quote Within 24 Hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span>Flexible Payment Options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span>100% Satisfaction Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}