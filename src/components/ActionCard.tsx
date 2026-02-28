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
      className="group flex flex-col items-center gap-3 p-6 bg-white border border-light-gray hover:border-warm-gold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="w-14 h-14 rounded-full border-2 border-warm-gold flex items-center justify-center group-hover:bg-warm-gold transition-colors duration-300">
        <Icon
          size={22}
          className="text-warm-gold group-hover:text-white transition-colors duration-300"
        />
      </div>
      <span className="text-xs tracking-[2px] uppercase text-charcoal/80 group-hover:text-warm-gold transition-colors">
        {label}
      </span>
    </motion.a>
  );
}
