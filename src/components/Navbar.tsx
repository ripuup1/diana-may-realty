"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const LEFT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const RIGHT_LINKS = [
  { label: "Alerts", href: "/#alerts" },
  { label: "Contact", href: "/contact" },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

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

  const linkClass = `relative text-base tracking-[2.5px] uppercase transition-colors duration-300 hover:text-warm-gold after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-warm-gold after:transition-all after:duration-300 hover:after:w-full ${
    scrolled ? "text-charcoal" : "text-white"
  }`;

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
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">

            {/* Mobile: Logo left + hamburger right */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/diana-may-team-logo.png"
                  alt="Diana May Realty Team"
                  width={200}
                  height={70}
                  className="h-11 sm:h-14 w-auto"
                  priority
                />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 transition-colors ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop: Left links | Center logo | Right links */}
            <div className="hidden lg:flex items-center justify-between w-full">
              {/* Left Links */}
              <div className="flex items-center gap-10 flex-1 justify-end pr-12">
                {LEFT_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                ))}
                <a
                  href={CONTACT.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Search
                </a>
              </div>

              {/* Center Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/diana-may-team-logo.png"
                  alt="Diana May Realty Team"
                  width={280}
                  height={90}
                  className={`w-auto transition-all duration-500 ${
                    scrolled ? "h-16" : "h-20"
                  }`}
                  priority
                />
              </Link>

              {/* Right Links */}
              <div className="flex items-center gap-10 flex-1 justify-start pl-12">
                {RIGHT_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${CONTACT.cell}`}
                  className="flex items-center gap-2 bg-warm-gold text-white px-6 py-3 text-sm tracking-[1.5px] uppercase hover:bg-deep-gold transition-colors duration-300 shadow-md hover:shadow-lg ml-auto rounded-full"
                >
                  <Phone size={15} />
                  {CONTACT.cell}
                </a>
              </div>
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
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 sm:pt-28 px-6 sm:px-8"
          >
            <div className="flex flex-col gap-6">
              {ALL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-heading text-charcoal tracking-[3px] uppercase hover:text-warm-gold active:text-warm-gold transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={CONTACT.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-heading text-charcoal tracking-[3px] uppercase hover:text-warm-gold active:text-warm-gold transition-colors py-1"
              >
                Search Properties
              </a>
            </div>
            <div className="mt-auto pb-10 space-y-3">
              <a
                href={`tel:${CONTACT.cell}`}
                className="flex items-center justify-center gap-2 bg-warm-gold text-white py-4 text-base tracking-[1px] uppercase hover:bg-deep-gold active:bg-deep-gold transition-colors shadow-md rounded-full"
              >
                <Phone size={18} />
                {CONTACT.cell}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-center text-charcoal/70 text-sm py-2"
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
