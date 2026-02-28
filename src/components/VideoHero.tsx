"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Force play for mobile browsers that don't autoplay despite attributes
    video.play().catch(() => {
      // Autoplay blocked — poster image will show as fallback
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/diana-hero-1.jpg"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content — pushed up from center so scroll arrow has clear space */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-4 pb-32 sm:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-warm-gold text-xs sm:text-base tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4 drop-shadow-md">
            {CONTACT.brokerage}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-4xl sm:text-6xl lg:text-8xl text-white tracking-wide"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Diana May
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-16 sm:w-20 h-[1px] bg-warm-gold my-4 sm:my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/90 text-sm sm:text-xl tracking-[2px] sm:tracking-[3px] uppercase mb-8 sm:mb-10 drop-shadow-md"
        >
          REALTOR® | Listing Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href={CONTACT.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-10 py-3.5 sm:py-4 bg-warm-gold text-white text-sm tracking-[2px] uppercase hover:bg-deep-gold transition-all duration-300 shadow-lg hover:shadow-xl rounded-full text-center"
          >
            Search Properties
          </a>
          <Link
            href="/contact"
            className="px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-white/50 text-white text-sm tracking-[2px] uppercase hover:bg-white/15 hover:border-white transition-all duration-300 rounded-full text-center"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator — positioned above the action card overlap zone */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-white/50 text-[10px] tracking-[3px] uppercase">Scroll</span>
          <ChevronDown size={22} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
