"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { CONTACT } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="py-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/diana-about-1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-charcoal/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-12 sm:py-20 lg:py-24 px-5 sm:px-8 text-center">
            <AnimateOnScroll>
              <p className="text-warm-gold text-xs sm:text-sm tracking-[3px] uppercase mb-3 sm:mb-4">
                Ready to Get Started?
              </p>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 leading-tight">
                Have Questions? Looking To<br className="hidden sm:block" /> Buy Or
                Sell? Call Me Today!
              </h2>
              <div className="w-12 sm:w-16 h-[2px] bg-warm-gold mx-auto mb-6 sm:mb-8" />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={`tel:${CONTACT.cell}`}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-warm-gold text-white text-sm tracking-[2px] uppercase hover:bg-deep-gold transition-colors duration-300 rounded-full shadow-lg"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  {CONTACT.cell}
                </a>
                <a
                  href={CONTACT.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/40 text-white text-sm tracking-[2px] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 rounded-full"
                >
                  <MessageCircle size={16} className="flex-shrink-0" />
                  Message Me
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
