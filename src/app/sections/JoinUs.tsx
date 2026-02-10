import { EventCard } from '@/components/EventCard';
import SectionHeader from '@/components/SectionHeader';
import SectionWrapper from '@/components/SectionWrapper';

const JoinUs = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <SectionHeader>Join us in Shaping the Future of AI</SectionHeader>
        <p className="text-slate max-w-4xl mx-auto mt-4">
          Participate in our seminars, training programs, and regional dialogues
          to advance AI safety and governance across Asia.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-12">
        <EventCard
          location="Meeting Room 9, Bharat Mandapam"
          title="AI Crisis Diplomacy: Asia Leads – Governing Artificial Intelligence in a Fragmented World"
          dateTime="February 17, 2026 (11:30 AM - 12:25 PM)"
          description="As an official session at the India AI Impact Summit 2026, AISA convenes an official Summit high-level workshop that reframes Asia from policy recipient to governance innovator as global thought-leaders and regional policymakers to build practical crisis response infrastructure."
          registerUrl="https://docs.google.com/forms/d/e/1FAIpQLSeK0Owp25ZVUZ2O1f9VeTtxAzfTDK-QuF7X0GNQ40JOD1vqFQ/viewform?usp=dialog"
        />
        <EventCard
          location="Le Méridien New Delhi"
          title="AI Safety and Biosecurity in Asia - Panel Discussion"
          dateTime="February 18, 2026 (9:00 AM - 11:00 AM)"
          description="AISA convenes security experts, policy architects, and biosafety leaders to map the convergence of AI capabilities and biological risk across Asia. This high-level panel moves beyond theoretical scenarios to build regional biosecurity preparedness frameworks that policymakers can operationalize immediately."
          registerUrl="https://docs.google.com/forms/d/e/1FAIpQLSccThLWeHWltJ6IvjEm63zfxvY6XjBKj-kEvgO5dUf8lVmtgw/viewform?usp=dialog"
        />
        <EventCard
          location="High Commission of Canada in India"
          title="'International AI Safety Report' Launch Reception"
          dateTime="February 18, 2026 (5:00 PM - 7:00 PM)"
          description={`AISA convenes global AI safety leaders at the High Commission of Canada to unveil the International AI Safety Report—bridging frontier research with actionable governance frameworks. This closed-door ministerial reception brings together government officials and institutional representatives to establish shared principles for international AI safety coordination. \n\nThis reception is a closed-door session for government officials and government institutional representatives. Registration is required, and attendance is by confirmed invitation only. Successful participants will receive email confirmation in advance of the event.`}
          registerUrl="https://docs.google.com/forms/d/e/1FAIpQLSe1Apd--M_0Kum6pxNtoA0iopeY270kZCmQGsas7N22qbfMnw/viewform?usp=dialog"
        />
        <EventCard
          location="West Wing Room 4 A, Bharat Mandapam"
          title="Trusted AI at Scale: A Global South Leadership Dialogue"
          dateTime="February 20, 2026 (2:30 PM - 3:30 PM)"
          description='This high-level roundtable gathers senior ICT officials in the global south to operationalize the Summit’s "Safe & Trusted AI" Chakra. Addressing the imperative to embed institutional safety directly into the fabric of rapid AI deployment, the session bridges Global North-South governance gaps by translating abstract policy into operational reality. Supported by JPMorganChase, the dialogue integrates private-sector risk expertise with public-sector scale, positioning New Delhi as the strategic center for defining interoperable, inclusive AI strategies.'
          registerUrl="https://docs.google.com/forms/d/e/1FAIpQLSfb-_Oyd5IH9CKTNnEfDh4mkN0_2dChehXP7B-HkDwWvZsi_w/viewform?usp=dialog"
        />
      </div>
    </SectionWrapper>
  );
};

export default JoinUs;
