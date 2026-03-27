import InfoBox from '@/components/InfoBox';
import SectionHeader from '@/components/SectionHeader';
import SectionWrapper from '@/components/SectionWrapper';

const PILLARS = [
  {
    title: 'Dialogue',
    description:
      'We connect policymakers, researchers, and innovators to shape responsible AI governance. Through dialogue and shared understanding, we build trust and align innovation with human values.',
    icon: '/dialogue_icon.webp',
  },
  {
    title: 'Knowledge Ecosystem',
    description:
      'We empower policy leaders, researchers, academics, civil society and young professionals with the knowledge to influence responsible AI policy. Our programs inspire ethical leadership and practical action across Asia.',
    icon: '/knowledge.webp',
  },
  {
    title: 'Research & Governance Studies',
    description:
      'We turn research into real-world impact. By analysing trends and developing evidence-based insights, we help governments and institutions design AI policies that protect people and promote progress.',
    icon: '/research.webp',
  },
];

const Pillars = () => {
  return (
    <SectionWrapper>
      <section className="w-full py-16 rounded-lg bg-oceanGreen px-10">
        {/* Top content */}
        <div className="text-center mb-12">
          <SectionHeader colorClass="text-white">
            Foster collaboration, building capacity and advancing research
          </SectionHeader>
          <br />
          <p className="text-white max-w-4xl mx-auto">
            Three interconnected pillars drive our mission — fostering
            collaboration, building capacity, and advancing research — to shape
            a safer and more inclusive AI future for Asia.
          </p>
        </div>

        {/* Boxes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ icon, title, description }) => {
            return (
              <InfoBox
                key={title}
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Pillars;
