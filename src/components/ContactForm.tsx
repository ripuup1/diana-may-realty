"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-heading text-2xl text-charcoal mb-3">
          Message Sent!
        </h3>
        <p className="text-charcoal/60">
          Thank you for reaching out. You&apos;ll receive a response within 12
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-charcoal/60 mb-6">
        Please fill out the form below to request more information. You&apos;ll
        get a response within 12 hours!
      </p>
      <div>
        <label htmlFor="contact-name" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          required
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm"
          placeholder="(919) 555-0123"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm text-charcoal/70 mb-1.5 tracking-wide">
          Your Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-white border border-light-gray text-charcoal placeholder:text-charcoal/30 text-sm resize-none"
          placeholder="How can I help you?"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-warm-gold text-white text-sm tracking-[2px] uppercase hover:bg-deep-gold transition-colors duration-300 rounded-full shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
