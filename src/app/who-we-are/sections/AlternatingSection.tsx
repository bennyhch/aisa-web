import AlternatingRow from '@/components/AlternatingRow';
import SectionWrapper from '@/components/SectionWrapper';

export default function AlternatingSection() {
  return (
    <SectionWrapper>
      <section className="w-full py-16 rounded-lg">
        <div className="rounded-t-lg overflow-hidden bg-white">
          <AlternatingRow
            title="Mission"
            text="Strengthening AI governance and safety through collaboration. We connect policymakers, experts, researchers, and communities to ensure that artificial intelligence grows with fairness, accountability, and shared benefit across Asia. "
            text2="Our mission is to turn knowledge into action — creating systems that are transparent, inclusive, and grounded in human values."
            imageSrc="/glass-building.jpg"
          />
        </div>

        <AlternatingRow
          title="Vision"
          text="A future where technology and humanity move forward together. We envision a region where every country, regardless of scale or resource, has the capacity to shape responsible AI."
          text2="A future where innovation respects ethics, builds trust, and helps people live better — not just faster."
          imageSrc="/tall-building.jpg"
          reverse
        />
      </section>
    </SectionWrapper>
  );
}
