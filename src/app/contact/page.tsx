"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-12 sm:pb-16">
      {/* Page Title */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <AnimateOnScroll>
          <p className="text-warm-gold text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4">
            Let&apos;s Connect
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl text-charcoal">
            Contact Me
          </h1>
          <div className="w-16 sm:w-20 h-[2px] bg-warm-gold mx-auto mt-5 sm:mt-6" />
        </AnimateOnScroll>
      </div>

      {/* Contact Content — floating card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-5 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Form */}
            <AnimateOnScroll>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl text-charcoal mb-2">
                  Send a Message
                </h2>
                <div className="w-12 h-[2px] bg-warm-gold mb-6 sm:mb-8" />
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll delay={0.2}>
              <div className="space-y-6 sm:space-y-8">
                {/* Profile Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src="/images/diana-contact-bio.jpg"
                    alt="Diana May REALTOR"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Info Card */}
                <div className="bg-cream/80 p-5 sm:p-8 rounded border border-light-gray space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Image
                      src="/images/diana-profile-circle.png"
                      alt="Diana May"
                      width={64}
                      height={64}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg sm:text-xl text-charcoal">
                        {CONTACT.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal/60 truncate">
                        {CONTACT.title} | {CONTACT.brokerage}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-light-gray text-sm sm:text-base">
                    <a
                      href={`tel:${CONTACT.cell}`}
                      className="flex items-center gap-3 text-charcoal/70 hover:text-warm-gold transition-colors"
                    >
                      <Phone size={18} className="text-warm-gold flex-shrink-0" />
                      <div>
                        <p className="text-xs text-charcoal/50 uppercase tracking-wide">Cell</p>
                        <p>{CONTACT.cell}</p>
                      </div>
                    </a>

                    <a
                      href={`tel:${CONTACT.office}`}
                      className="flex items-center gap-3 text-charcoal/70 hover:text-warm-gold transition-colors"
                    >
                      <Phone size={18} className="text-warm-gold flex-shrink-0" />
                      <div>
                        <p className="text-xs text-charcoal/50 uppercase tracking-wide">Office</p>
                        <p>{CONTACT.office}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-3 text-charcoal/70 hover:text-warm-gold transition-colors"
                    >
                      <Mail size={18} className="text-warm-gold flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-charcoal/50 uppercase tracking-wide">Email</p>
                        <p className="break-all">{CONTACT.email}</p>
                      </div>
                    </a>

                    <a
                      href={CONTACT.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-charcoal/70 hover:text-warm-gold transition-colors"
                    >
                      <MapPin size={18} className="text-warm-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-charcoal/50 uppercase tracking-wide">Address</p>
                        <p>{CONTACT.address}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 text-charcoal/70">
                      <Clock size={18} className="text-warm-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-charcoal/50 uppercase tracking-wide">Availability</p>
                        <p>Available 7 days a week</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={CONTACT.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-warm-gold text-white text-sm tracking-[1px] uppercase hover:bg-deep-gold transition-colors rounded-full shadow-md"
                  >
                    Search Properties
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
