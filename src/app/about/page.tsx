"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { BIO_TEXT, TEAM_TEXT, CONTACT } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";

const galleryImages = [
  { src: "/images/diana-about-1.jpg", alt: "Diana May professional portrait" },
  { src: "/images/diana-about-2.jpg", alt: "Diana May at work" },
  { src: "/images/diana-about-3.jpg", alt: "Diana May community" },
  { src: "/images/diana-hero-2.jpg", alt: "Diana May headshot" },
];

export default function AboutPage() {
  const paragraphs = BIO_TEXT.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/diana-hero-3.jpg"
          alt="Diana May"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4">
          <AnimateOnScroll>
            <p className="text-warm-gold text-sm tracking-[4px] uppercase mb-4">
              Get to Know
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              About Diana May
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll>
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-warm-gold" />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/diana-bio.jpg"
                    alt="Diana May - dedicated listing specialist"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div>
                <p className="text-warm-gold text-sm tracking-[3px] uppercase mb-3">
                  {CONTACT.title} | {CONTACT.brokerage}
                </p>
                <h2 className="font-heading text-4xl text-charcoal mb-8">
                  A Passion for Real Estate
                </h2>
                <div className="w-12 h-[2px] bg-warm-gold mb-8" />
                <div className="space-y-5 text-charcoal/70 leading-relaxed">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading title="In Action" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <AnimateOnScroll key={img.src} delay={i * 0.1}>
                <div className="relative aspect-square overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/diana-team.jpg"
                  alt="The Diana May Real Estate Team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div>
                <p className="text-warm-gold text-sm tracking-[3px] uppercase mb-3">
                  The Team
                </p>
                <h2 className="font-heading text-4xl text-white mb-8">
                  {CONTACT.teamName}
                </h2>
                <div className="w-12 h-[2px] bg-warm-gold mb-8" />
                <p className="text-white/70 leading-relaxed">{TEAM_TEXT}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <MapPin size={40} className="text-warm-gold mx-auto mb-6" />
            <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-4">
              Servicing the Triangle Area
            </h2>
            <p className="text-charcoal/60 text-lg mb-8">
              Proudly serving clients across {CONTACT.serviceArea}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-warm-gold text-white text-sm tracking-[2px] uppercase hover:bg-deep-gold transition-colors duration-300"
            >
              <Phone size={14} className="inline mr-2" />
              Get In Touch
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
