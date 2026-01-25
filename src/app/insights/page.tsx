import H2 from '@/components/H2';
import HorizontalLine from '@/components/HorizontalLine';
import PageWrapper from '@/components/PageWrapper';
import collaborators from '@/data/collaborators';
import LatestInsights from './LatestInsights';

const page = () => {
  return (
    <PageWrapper>
      <LatestInsights />

      {/* <section>
        <H2 heading="HOW WE COLLABORATE" />
        <HorizontalLine />
        <div className="min-h-screen py-6 px-2 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {collaborators.map((collaborator, index) => (
                <div key={index} className="bg-white p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {collaborator.title}:
                  </h2>
                  <p className="text-lg text-gray-600">
                    {collaborator.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <H2 heading="ENGAGE WITH US" />
        <HorizontalLine />
        <article className="py-15 px-10 md:px-30 text-justify">
          <p>
            As a nonprofit, nonpartisan, publicly supported organization, we
            rely on the generosity of individuals, corporations, and foundations
            to develop programs and initiatives that focus on helping bring
            together experts, decision-makers, partners and civil society to
            minimise the risks of AI adoption while supporting societies to
            adopt AI safely. Our supporters are an integral force in advancing
            our mission, providing the experience, perspectives, and resources
            that make our work better.{' '}
          </p>

          <br />
          <h4 className="font-bold text-xl">
            Support Our Events, Engage with Industry Thought Leaders
          </h4>
          <br />
          <p>
            We bring together the strengths of each partnering organization,
            amplifying our impact to convene critical stakeholders for urgent
            discussions on international AI governance. 
          </p>
          <br />
          <h4 className="font-bold text-xl">
            Support Our Programs to Uplift the Asian AI Safety Leaders of
            Tomorrow
          </h4>
          <br />
          <p>
            We provide capacity building programs for the private sector, civil
            society organisations, junior policy researchers, and civil
            servants, equipping them with the knowledge and skills to shape
            responsible AI policies in Asia.
          </p>
        </article>
      </section> */}
    </PageWrapper>
  );
};

export default page;
