"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import AlertsForm from "./AlertsForm";

export default function AlertsSection() {
  return (
    <section id="alerts" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 sm:p-12 lg:p-16">
          <AnimateOnScroll>
            <SectionHeading
              title="Get Alerts"
              subtitle="I'll create 'Your CUSTOM Search' so you can see what's currently available PLUS you will get email ALERTS when NEW properties hit the market!"
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="max-w-xl mx-auto">
              <AlertsForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
