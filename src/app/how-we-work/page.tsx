import H2 from "@/components/H2";
import HorizontalLine from "@/components/HorizontalLine";
import PageWrapper from "@/components/PageWrapper";
import collaborators from "@/data/collaborators";

const page = () => {
  return (
    <PageWrapper>
      <section>
        <H2 heading="HOW WE WORK" />
        <HorizontalLine />
        <div className="flex flex-row justify-between items-start gap-5 py-20 w-[750px]  mx-auto">
          <header className="mt-0">
            <h3 className="text-oceanGreen font-bold text-3xl">
              The principles that guide us:
            </h3>
          </header>
          <article className="mt-20">
            {" "}
            {/* Increase margin-top for more downward shift */}
            <ul className="flex flex-col gap-y-3 font-bold text-lg list-none">
              <li>Regionally grounded</li>
              <li>Multistakeholder and inclusive</li>
              <li>Evidence-based and future-facing</li>
              <li>Cross-border collaboration</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <H2 heading="HOW WE COLLABORATE" />
        <HorizontalLine />
        <div>
          {collaborators.map(({ title, description }) => (
            <div key={title} className="border-2">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <H2 heading="ENGAGE WITH US" />
        <HorizontalLine />
        <article className="py-15 px-30 text-justify">
          <p>
            As a nonprofit, nonpartisan, publicly supported organization, we
            rely on the generosity of individuals, corporations, and foundations
            to develop programs and initiatives that focus on helping bring
            together experts, decision-makers, partners and civil society to
            minimise the risks of AI adoption while supporting societies to
            adopt AI safely. Our supporters are an integral force in advancing
            our mission, providing the experience, perspectives, and resources
            that make our work better.{" "}
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
      </section>
    </PageWrapper>
  );
};

export default page;
