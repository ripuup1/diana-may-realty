"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import AlertsForm from "./AlertsForm";

export default function AlertsSection() {
  return (
    <section id="alerts" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Get Alerts"
            subtitle="I'll create 'Your CUSTOM Search' so you can see what's currently available PLUS you will get email ALERTS when NEW properties hit the market!"
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <div className="max-w-xl mx-auto bg-white p-8 sm:p-12 border border-light-gray">
            <AlertsForm />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
