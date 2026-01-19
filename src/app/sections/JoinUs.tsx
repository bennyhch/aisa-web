import { EventCard } from '@/components/EventCard';
import SectionHeader from '@/components/SectionHeader';
import React from 'react';

const JoinUs = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <SectionHeader>Join us in Shaping the Future of AI</SectionHeader>
        <p className="text-slate max-w-4xl mx-auto mt-4">
          Participate in our summits, training programs, and regional dialogues
          to advance AI safety and governance across Asia.
        </p>
      </div>
      <div>
        <EventCard
          location="Meeting Room 9, Bharat Mandapam"
          title="AI Crisis Diplomacy: Asia Leads – Governing Artificial Intelligence in a Fragmented World"
          dateTime="February 17, 2026 (11:30 AM - 12:25 PM)"
          description="As an official session at the India AI Impact Summit 2026, AISA convenes an official Summit high-level workshop that reframes Asia from policy recipient to governance innovator as global thought-leaders and regional policymakers to build practical crisis response infrastructure."
          registerUrl="/"
        />
      </div>
    </section>
  );
};

export default JoinUs;
