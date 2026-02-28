"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { CONTACT } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <AnimateOnScroll>
          <p className="text-warm-gold text-sm tracking-[3px] uppercase mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Have Questions? Looking To<br className="hidden sm:block" /> Buy Or
            Sell? Call Me Today!
          </h2>
          <div className="w-16 h-[2px] bg-warm-gold mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.cell}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-warm-gold text-white text-sm tracking-[2px] uppercase hover:bg-deep-gold transition-colors duration-300"
            >
              <Phone size={16} />
              {CONTACT.cell}
            </a>
            <a
              href={CONTACT.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-sm tracking-[2px] uppercase hover:bg-white/10 transition-colors duration-300"
            >
              <MessageCircle size={16} />
              Message Me
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
