import InfoBox from '@/components/InfoBox';
import SectionHeader from '@/components/SectionHeader';
import PolicyIcon from '@/components/icons/PolicyIcon';

export const PRINCIPLES = [
  {
    title: 'Regionally grounded',
    description:
      'We bring Asia-Pacific expertise to global AI governance conversations, ensuring regional realities shape international frameworks. Our grounding in local contexts—from Jakarta to Seoul—enables us to bridge the Global AI Divide with authenticity and impact.',
    icon: <PolicyIcon />,
  },
  {
    title: 'Multistakeholder and inclusive',
    description:
      'We convene governments, civil society, industry, and academia to ensure AI governance reflects diverse voices. By centering perspectives from Asia, Global South and middle powers, we advance frameworks that serve all of humanity.',
    icon: <PolicyIcon />,
  },
  {
    title: 'Evidence-based and future-facing',
    description:
      "Our work is anchored in rigorous research and strategic foresight, anticipating tomorrow's challenges while addressing today's urgencies. We combine analytical depth with forward-looking vision to inform policies that are both grounded and transformative.",
    icon: <PolicyIcon />,
  },
  {
    title: 'Cross-border collaboration',
    description:
      "We build bridges between regions, institutions, and sectors—connecting Asia with global governance networks and facilitating dialogue across borders. Our partnerships with world-class organizations amplify collective impact and ensure no region is left behind in shaping AI's future.",
    icon: <PolicyIcon />,
  },
  {
    title: 'Impact',
    description:
      'We measure success by the change we create — in policies, people, and possibilities. Every action should bring us closer to a safer, fairer, and more sustainable AI.',
    icon: <PolicyIcon />,
  },
];

const Principles = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 bg-paleGray">
      {/* Top content */}
      <div className="text-center mb-12">
        <SectionHeader>
          Guided by Principles that Shape Every Action
        </SectionHeader>
        <br />
        <p className="text-slate max-w-4xl mx-auto">
          At AI Safety Asia (AISA), our work is built on shared values that
          guide how we think, act, and collaborate. These principles remind us
          that progress in technology must always reflect progress in humanity.
        </p>
      </div>

      {/* Boxes */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map(({ icon, title, description }) => {
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

export default Principles;
