import H2 from "@/components/H2";
import HorizontalLine from "@/components/HorizontalLine";
import PageWrapper from "@/components/PageWrapper";
import advisors from "@/data/advisors";
import founders from "@/data/founders";
import teamMembers from "@/data/teamMembers";
import Image from "next/image";

const page = () => {
  return (
    <PageWrapper>
      <section>
        <H2 heading="WHO WE ARE" />
        <HorizontalLine />
        <article className="flex flex-col justify-center py-20 px-8 sm:px-6 md:px-10 gap-y-6 w-full mx-auto text-justify">
          <p>
            Established in 2024, AI Safety Asia (AISA) is a global non-profit
            dedicated to building Asia as a globally-leading safe and
            responsible AI innovator.
          </p>
          <p>
            We strive to minimise the risks of AI adoption while supporting
            societies to adopt AI safely.
          </p>
          <p>
            At the core of our mission is the integrated, diverse and
            collaborative nature of our work. We believe that achieving safe and
            governed AI begins with building bridges—between generations,
            disciplines, and regions through actionable steps across our three
            interrelated program pillars that convene, research and build
            capacity to shape the future of AI governance in Asia.
          </p>
        </article>
      </section>

      <section>
        <H2 heading="OUR TEAM" />
        <HorizontalLine />
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              {founders.map((founder) => (
                <div
                  key={founder.id}
                  className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
                >
                  {/* Founder Photo */}
                  <div className="mb-6">
                    <div className="w-32 h-32 relative">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="rounded-full object-cover border-4 border-gray-200"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h2>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-oceanGreen mb-6">
                    {founder.title}
                  </h3>

                  {/* Bullet Points */}
                  <div className="flex-1 text-left">
                    <ul className="space-y-3">
                      {founder.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              {teamMembers.map(({ id, image, name, bulletPoints, title }) => (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
                >
                  {/* Founder Photo */}
                  <div className="mb-6">
                    <div className="w-32 h-32 relative">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="rounded-full object-cover border-4 border-gray-200"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {name}
                  </h2>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-oceanGreen mb-6">
                    {title}
                  </h3>

                  {/* Bullet Points */}
                  <div className="flex-1 text-left">
                    <ul className="space-y-3">
                      {bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <H2 heading="OUR ADVISORS" />
        <HorizontalLine />
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              {advisors.map(({ id, image, name, bulletPoints }) => (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
                >
                  {/* Founder Photo */}
                  <div className="mb-6">
                    <div className="w-32 h-32 relative">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="rounded-full object-cover border-4 border-gray-200"
                      />
                    </div>
                  </div>
                  {/* Name */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {name}
                  </h2>
                  {/* Title
                  <h3 className="text-lg font-semibold text-oceanGreen mb-6">
                    {title}
                  </h3> */}
                  {/* Bullet Points */}
                  <div className="flex-1 text-left">
                    <ul className="space-y-3">
                      {bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <H2 heading="OUR PARTNERS" />
        <HorizontalLine />
        <div className=" w-full px-5 md:w-2/3 md:mx-auto py-20">
          <Image
            src="/partners.png"
            alt="Partners"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </PageWrapper>
  );
};

export default page;
