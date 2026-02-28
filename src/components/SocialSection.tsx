"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { CONTACT } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

export default function SocialSection() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-12 text-center">
          <AnimateOnScroll>
            <p className="text-warm-gold text-sm tracking-[3px] uppercase mb-4">
              Stay Connected
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-8">
              Follow Me on Facebook
            </h2>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-warm-gold text-warm-gold text-sm tracking-[2px] uppercase hover:bg-warm-gold hover:text-white transition-all duration-300 rounded-full"
            >
              <Image
                src="/images/facebook-icon.png"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Follow Diana May
              <ExternalLink size={14} />
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
