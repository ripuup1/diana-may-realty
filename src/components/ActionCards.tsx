"use client";

import { Phone, Mail, Search, Bell } from "lucide-react";
import ActionCard from "./ActionCard";
import AnimateOnScroll from "./AnimateOnScroll";
import { CONTACT } from "@/lib/constants";

const actions = [
  { icon: Phone, label: "Call Diana", href: `tel:${CONTACT.cell}` },
  { icon: Mail, label: "Contact", href: "/contact" },
  {
    icon: Search,
    label: "Search Properties",
    href: CONTACT.searchUrl,
    external: true,
  },
  { icon: Bell, label: "Get Alerts", href: "#alerts" },
];

export default function ActionCards() {
  return (
    <section className="relative -mt-14 z-20 px-4">
      <AnimateOnScroll>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {actions.map((action) => (
            <ActionCard key={action.label} {...action} />
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
