import Image from 'next/image';

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="flex gap-4">
      {/* Left: Year + line */}
      <div className="flex flex-col items-center">
        <div className="text-sm font-semibold">{year}</div>
        <div className="flex-1 w-px bg-gray-200 mt-2" />
      </div>

      {/* Right: Content */}
      <div className="pb-2">
        <p className="text-slate leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function TimelineBox() {
  return (
    <section className="w-full max-w-3xl bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8">
      <h3 className="text-2xl font-semibold mb-8">Our Journey</h3>

      <div className="space-y-8">
        <TimelineItem
          year="2023"
          text="Founded by a collective of AI and policy experts across Asia."
        />
        <TimelineItem
          year="2024"
          text="Published first Regional AI Governance Report and launched pilot training programs."
        />
        <TimelineItem
          year="2025"
          text="Completed Southeast Asia roundtable series covering all ASEAN countries, and co-published landmark report with Brookings on AI Safety and Governance in Southeast Asia; Responsible AI Scenario Exploration for Southeast Asia (RAISE for SEA) was selected as one of the top 10 projects at the Paris Peace Forum 2025; SEA Observatory selected as 2nd best award at the UNESCO Global Forum on AI Ethics."
        />
        <TimelineItem
          year="2026"
          text="Pre-summit events at the India AI Summit 2026."
        />
      </div>
    </section>
  );
}

const Belief = () => {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Left: Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-[400px]">
        <Image
          src="/building-under-sky.jpg"
          alt="Building under blue sky"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Born from Collaboration, Built for the Region
        </h2>
        <p>
          AI Safety Asia (AISA) began with a simple belief — that the future of
          artificial intelligence in Asia should be shaped by collaboration, not
          competition.{' '}
        </p>{' '}
        <br />
        <p>
          Across the region, AI is evolving faster than the frameworks that
          govern it. Researchers, policymakers, and civil society all face the
          same challenge: how to harness innovation without losing human values.{' '}
        </p>{' '}
        <br />
        <p>
          AISA was founded to bridge these worlds — turning dialogue into
          strategy, research into action, and regional diversity into shared
          strength. By connecting experts across borders, we’re helping Asia
          lead with empathy, foresight, and purpose.
        </p>
        <br />
        <TimelineBox />
      </div>
    </section>
  );
};

export default Belief;
