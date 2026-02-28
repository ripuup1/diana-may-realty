"use client";

import { useEffect } from "react";
import { CONTACT } from "@/lib/constants";

export default function SearchRedirect() {
  useEffect(() => {
    window.location.href = CONTACT.searchUrl;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="font-heading text-3xl text-charcoal mb-4">
          Redirecting to Property Search...
        </h1>
        <p className="text-charcoal/60 mb-6">
          You are being redirected to the property search portal.
        </p>
        <a
          href={CONTACT.searchUrl}
          className="inline-block px-8 py-3 bg-warm-gold text-white text-sm tracking-[2px] uppercase hover:bg-deep-gold transition-colors"
        >
          Click Here if Not Redirected
        </a>
      </div>
    </div>
  );
}
