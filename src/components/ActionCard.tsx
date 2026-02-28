"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  href: string;
  external?: boolean;
}

export default function ActionCard({ icon: Icon, label, href, external }: Props) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white/90 backdrop-blur-sm border border-light-gray hover:border-warm-gold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl active:shadow-md"
    >
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-warm-gold flex items-center justify-center group-hover:bg-warm-gold transition-colors duration-300">
        <Icon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-warm-gold group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="text-[10px] sm:text-xs tracking-[1.5px] sm:tracking-[2px] uppercase text-charcoal/80 group-hover:text-warm-gold transition-colors text-center leading-tight">
        {label}
      </span>
    </motion.a>
  );
}
