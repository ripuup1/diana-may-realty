"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { TEAM_TEXT, CONTACT } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimateOnScroll>
            <div>
              <p className="text-warm-gold text-sm tracking-[3px] uppercase mb-3">
                Our Team
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl text-white mb-8">
                The Diana May<br />Real Estate Team
              </h2>
              <div className="w-12 h-[2px] bg-warm-gold mb-8" />
              <p className="text-white/70 leading-relaxed mb-8">
                {TEAM_TEXT}
              </p>
              <div className="space-y-3">
                <p className="text-warm-gold font-heading text-lg tracking-wide">
                  Call or text me to connect!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${CONTACT.cell}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-warm-gold text-white text-sm tracking-[1px] uppercase hover:bg-deep-gold transition-colors"
                  >
                    <Phone size={14} />
                    Cell: {CONTACT.cell}
                  </a>
                  <a
                    href={`tel:${CONTACT.office}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm tracking-[1px] uppercase hover:bg-white/10 transition-colors"
                  >
                    <Phone size={14} />
                    Office: {CONTACT.office}
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Image */}
          <AnimateOnScroll delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/diana-team.jpg"
                alt="The Diana May Real Estate Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
