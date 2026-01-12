import Image from 'next/image';

type AlternatingRowProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // controls image/text order on desktop
};

function AlternatingRow({
  title,
  text,
  imageSrc,
  imageAlt = '',
  reverse = false,
}: AlternatingRowProps) {
  return (
    <article
      className={`flex flex-col md:flex-row items-stretch overflow-hidden text-white ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text */}
      <div
        className={`md:w-1/2 flex flex-col justify-center p-8 md:p-12 ${
          reverse ? 'bg-darkTeal' : 'bg-oceanGreen'
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p>{text}</p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={500}
          className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
        />
      </div>
    </article>
  );
}

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
