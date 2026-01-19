import KnowledgeIcon from '@/components/icons/KnowledgeIcon';
import PolicyIcon from '@/components/icons/PolicyIcon';
import ResearchIcon from '@/components/icons/ResearchIcon';
import InfoBox from '@/components/InfoBox';
import SectionHeader from '@/components/SectionHeader';

const PILLARS = [
  {
    title: 'Dialogue',
    description:
      'We connect policymakers, researchers, and innovators to shape responsible AI governance. Through dialogue and shared understanding, we build trust and align innovation with human values.',
    icon: <PolicyIcon />,
  },
  {
    title: 'Knowledge Ecosystem',
    description:
      'We empower leaders, educators, and young professionals with the knowledge and tools to use AI responsibly. Our programs inspire ethical leadership and practical action across Asia.',
    icon: <KnowledgeIcon />,
  },
  {
    title: 'Research & Governance Studies',
    description:
      'We turn research into real-world impact. By analyzing trends and developing evidence-based insights, we help governments and institutions design AI policies that protect people and promote progress.',
    icon: <ResearchIcon />,
  },
];

const Pillars = () => {
  return (
    <section className="w-full py-16 rounded-lg bg-oceanGreen px-10">
      {/* Top content */}
      <div className="text-center mb-12">
        <SectionHeader colorClass="text-white">
          Foster collaboration, building capacity and advancing research
        </SectionHeader>
        <br />
        <p className="text-white max-w-4xl mx-auto">
          Three interconnected pillars drive our mission — fostering
          collaboration, building capacity, and advancing research to shap a
          safer and more inclusive AI future for Asia.
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
  );
};

export default Pillars;
