"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/diana-lifestyle-1.jpg", alt: "North Carolina landscape" },
  { src: "/images/diana-lifestyle-2.jpg", alt: "Triangle Area living" },
  { src: "/images/diana-lifestyle-3.jpg", alt: "Clayton NC lifestyle" },
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="relative aspect-[4/3] overflow-hidden group"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        </motion.div>
      ))}
    </div>
  );
}
