"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/diana-may-team-logo.png"
                alt="Diana May Realty Team"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-[2px] uppercase transition-colors duration-300 hover:text-warm-gold ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={CONTACT.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm tracking-[2px] uppercase transition-colors duration-300 hover:text-warm-gold ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                Search
              </a>
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${CONTACT.cell}`}
                className="hidden sm:flex items-center gap-2 bg-warm-gold text-white px-5 py-2.5 text-sm tracking-[1px] uppercase hover:bg-deep-gold transition-colors duration-300"
              >
                <Phone size={14} />
                {CONTACT.cell}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 transition-colors ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-heading text-charcoal tracking-[2px] uppercase hover:text-warm-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={CONTACT.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-heading text-charcoal tracking-[2px] uppercase hover:text-warm-gold transition-colors"
              >
                Search Properties
              </a>
            </div>
            <div className="mt-auto pb-12 space-y-4">
              <a
                href={`tel:${CONTACT.cell}`}
                className="flex items-center justify-center gap-2 bg-warm-gold text-white py-4 text-lg tracking-[1px] uppercase hover:bg-deep-gold transition-colors"
              >
                <Phone size={18} />
                {CONTACT.cell}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-center text-charcoal/70 text-sm"
              >
                {CONTACT.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
