import AlternatingRow from '@/components/AlternatingRow';

export default function AlternatingSection() {
  return (
    <section className="w-full py-16 rounded-lg">
      <div className="rounded-t-lg overflow-hidden bg-white">
        <AlternatingRow
          title="Dialogue & Policy Engagement"
          text="We build bridges between policymakers, researchers, and industry leaders to turn AI challenges into shared governance frameworks"
          imageSrc="/lecture1.jpg"
        />
      </div>

      <AlternatingRow
        title="Training & Capacity Building"
        text="We design programs that empower institutions and individuals to understand, regulate, and innovate responsibly with AI."
        imageSrc="/lecture2.JPG"
        reverse
      />

      <div className="rounded-b-lg overflow-hidden bg-white">
        <AlternatingRow
          title="Research & Governance Studies"
          text="We conduct multi-country studies, policy analyses, and regional reports that guide evidence-based AI governance decisions."
          imageSrc="/raisesea.png"
        />
      </div>
    </section>
  );
}
