"use client";

import { useState, FormEvent } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function AlertsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-heading text-2xl text-charcoal mb-3">
          Thank You!
        </h3>
        <p className="text-charcoal/60">
          We&apos;ll set up your custom property search and start sending alerts
          right away.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
      <div>
        <label htmlFor="alert-name" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          Name
        </label>
        <input
          id="alert-name"
          type="text"
          required
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="alert-email" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          Email
        </label>
        <input
          id="alert-email"
          type="email"
          required
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="alert-phone" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          Phone Number
        </label>
        <input
          id="alert-phone"
          type="tel"
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm"
          placeholder="(919) 555-0123"
        />
      </div>
      <div>
        <label htmlFor="alert-city" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          City/Town To Search
        </label>
        <input
          id="alert-city"
          type="text"
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm"
          placeholder="e.g., Clayton, Raleigh, Durham"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="alert-bedrooms" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
            Bedrooms
          </label>
          <select
            id="alert-bedrooms"
            className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal text-sm"
          >
            <option value="">Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
        </div>
        <div>
          <label htmlFor="alert-price" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
            Price Range
          </label>
          <select
            id="alert-price"
            className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal text-sm"
          >
            <option value="">Any</option>
            <option>Under $200K</option>
            <option>$200K - $300K</option>
            <option>$300K - $400K</option>
            <option>$400K - $500K</option>
            <option>$500K+</option>
          </select>
        </div>
      </div>
      <AnimateOnScroll>
        <button
          type="submit"
          className="w-full py-4 bg-warm-gold text-white text-sm tracking-[2px] uppercase hover:bg-deep-gold transition-colors duration-300 rounded-full shadow-md"
        >
          Yes, Send Me Alerts
        </button>
      </AnimateOnScroll>
    </form>
  );
}
