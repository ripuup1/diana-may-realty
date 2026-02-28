"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { BIO_TEXT } from "@/lib/constants";

export default function AboutSection() {
  const paragraphs = BIO_TEXT.split("\n\n");

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-5 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with gold frame offset */}
            <AnimateOnScroll>
              <div className="relative max-w-md mx-auto lg:mx-0 mr-4 mb-4 sm:mr-0 sm:mb-0">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-warm-gold rounded hidden sm:block" />
                <div className="relative aspect-[3/4] overflow-hidden rounded">
                  <Image
                    src="/images/diana-hero-1.jpg"
                    alt="Diana May - REALTOR and listing specialist"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text Content */}
            <AnimateOnScroll delay={0.2}>
              <div>
                <p className="text-warm-gold text-sm tracking-[3px] uppercase mb-3">
                  About
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6 sm:mb-8">
                  Diana May
                </h2>
                <div className="w-12 h-[2px] bg-warm-gold mb-6 sm:mb-8" />
                <div className="space-y-4 sm:space-y-5 text-charcoal/70 leading-relaxed text-sm sm:text-base">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-block mt-6 sm:mt-8 px-8 py-3.5 border border-warm-gold text-warm-gold text-sm tracking-[2px] uppercase hover:bg-warm-gold hover:text-white transition-all duration-300 rounded-full"
                >
                  Learn More
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
