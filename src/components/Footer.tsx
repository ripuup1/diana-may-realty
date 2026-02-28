"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Image
              src="/images/diana-may-team-logo.png"
              alt="Diana May Realty Team"
              width={200}
              height={65}
              className="h-14 w-auto brightness-0 invert opacity-80"
            />
            <p className="text-sm leading-relaxed text-white/60">
              Dedicated listing specialist serving the Triangle Area in North
              Carolina. Buy, sell, rent or find commercial space with expert
              guidance.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/images/facebook-icon.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="h-8 w-8 opacity-60 hover:opacity-100 transition-opacity brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-warm-gold font-heading text-lg tracking-[2px] uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-warm-gold transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={CONTACT.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-warm-gold transition-colors tracking-wide uppercase"
              >
                Search Properties
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-warm-gold font-heading text-lg tracking-[2px] uppercase">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <a
                href={`tel:${CONTACT.cell}`}
                className="flex items-center gap-3 text-white/60 hover:text-warm-gold transition-colors"
              >
                <Phone size={16} className="text-warm-gold flex-shrink-0" />
                Cell: {CONTACT.cell}
              </a>
              <a
                href={`tel:${CONTACT.office}`}
                className="flex items-center gap-3 text-white/60 hover:text-warm-gold transition-colors"
              >
                <Phone size={16} className="text-warm-gold flex-shrink-0" />
                Office: {CONTACT.office}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-warm-gold transition-colors break-all"
              >
                <Mail size={16} className="text-warm-gold flex-shrink-0" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-warm-gold transition-colors"
              >
                <MapPin size={16} className="text-warm-gold flex-shrink-0 mt-0.5" />
                {CONTACT.address}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/images/equal-housing-logo.jpg"
              alt="Equal Housing Opportunity"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <Image
              src="/images/htr-logo.png"
              alt="HomeTowne Realty"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-xs text-white/40 text-center">
            &copy; {new Date().getFullYear()} Diana May | {CONTACT.brokerage}.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
