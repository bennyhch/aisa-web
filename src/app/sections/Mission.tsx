'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { FiChevronDown } from 'react-icons/fi';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

const accordionData = [
  {
    eyebrow: 'Who We Are',
    title: 'Building a Trusted Future for AI in Asia',
    content: [
      'AI Safety Asia (AISA) is an Asian non-profit dedicated to building the region as a globally leading safe and responsible AI innovator.',
      'We strive to minimise the risks of AI adoption while supporting societies to adopt AI safely.',
      'At the core of our mission is the integrated, diverse and collaborative nature of our work. We believe that achieving safe and governed AI begins with building bridges—between generations, disciplines and regions through actionable steps across our three interrelated programme pillars that foster collaboration, build capacity and advance research that creates the architecture of an Asian Knowledge Ecosystem to shape the future of AI governance in Asia.',
    ],
  },
  {
    eyebrow: 'What We Do',
    title: 'Turning Insight into Action for Safer AI',
    content: [
      'Our work is built around three pillars — Foster collaboration, build capacity and advance research. We convene policymakers and experts, equip leaders with practical knowledge, and produce research and other knowledge products from Asian experts to help guide AI governance across the region.',
    ],
  },
  {
    eyebrow: 'Asia in Focus',
    title: 'Connecting Regional Strengths for Global Impact',
    content: [
      'At the core of our mission is the integrated, diverse and collaborative nature of our work.',
      'We collaborate with civil society organisations, governments, and think tanks across the Asia-Pacific to build an ecosystem that advances safe, regionally grounded AI governance.',
    ],
  },
];

export default function Mission() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      {/* Header */}
      <div className="text-center mb-12">
        <SectionHeader>Our Mission and Impact</SectionHeader>
        <p className="text-slate max-w-4xl mx-auto mt-4">
          Working together to build a safer, more human-centered future for AI
          in Asia.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Accordion */}
        <div className="space-y-6">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-300 p-6 cursor-pointer transition-shadow hover:shadow-md"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  {' '}
                  <p className="text-oceanGreen text-sm font-semibold mb-2">
                    {item.eyebrow}
                  </p>
                  <FiChevronDown
                    className={`text-xl text-slate transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-black pb-4">
                  {item.title}
                </h3>

                {isOpen && (
                  <div className="space-y-4">
                    {item.content.map((paragraph, i) => (
                      <p key={i} className="text-slate leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <Image
            src="/nasa-globe.webp"
            alt="Mission and impact"
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
