import React from "react";
import Image from "next/image";
import H2 from "@/components/H2";
import HorizontalLine from "@/components/HorizontalLine";
import PageWrapper from "@/components/PageWrapper";
import initiatives from "@/data/initiatives";

const page = () => {
  return (
    <PageWrapper>
      <H2 heading="WHAT WE DO" />
      <HorizontalLine />

      <section className="w-full flex justify-center px-4 lg:px-0">
        <div className="w-full lg:w-2/3 py-14 space-y-8">
          {/* Header + empty right side */}
          <div className="flex flex-col lg:flex-row">
            <header className="text-left w-full lg:w-1/2 px-4 py-5">
              <h3 className="text-oceanGreen text-4xl font-black">
                We convene, research, and build capacity to shape the future of
                AI governance in Asia.
              </h3>
            </header>
            <div className="w-full lg:w-1/2"></div>
          </div>

          {/* Empty left side + Article */}
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2"></div>
            <article className="w-full lg:w-1/2 flex flex-col justify-center px-4 py-5 space-y-4">
              <p>
                We believe that achieving safe and governed AI begins with
                building bridges—between generations, disciplines, and regions
                through actionable steps across our three interrelated program
                pillars.
              </p>
              <p>
                We strive to minimise the risks of AI adoption while supporting
                societies to adopt AI safely.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col justify-between pt-10 gap-4">
        {initiatives.map(({ id, title, color, content, link }) => (
          <article key={id} className={`${color} py-10 px-15 lg:w-1/3 w-full`}>
            <header className="text-center py-20">
              <h3 className="text-3xl font-bold mb-4">{title}</h3>
            </header>
            {content.map((paragraph, i) => (
              <p
                key={i}
                className={`mb-5 text-justify ${i === 0 ? "font-bold" : ""}`}
              >
                {paragraph}
              </p>
            ))}
            {link && <p className="underline cursor-pointer">{link}</p>}
          </article>
        ))}
      </section>

      <section>
        <H2 heading="OUR FOCUS AREAS" />
        <HorizontalLine />
        <div className="flex flex-col md:flex-row py-20 justify-center gap-6">
          <article className="w-full md:w-[200px] px-3 flex flex-col items-center">
            <div className="flex-shrink-0">
              <Image
                src="/climate.png"
                alt="iceberg"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>

            <h3 className="text-center font-bold text-xl py-4">Climate</h3>
            <p className="text-center">
              AI in climate modeling, disaster response, sustainability
            </p>
          </article>

          <article className="w-full md:w-[200px] px-3 flex flex-col items-center">
            <div className="flex-shrink-0">
              <Image
                src="/bio-security.png"
                alt="microscope"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-bold text-xl py-4">Bio-Security</h3>
            <p className="text-center">
              AI’s role in synthetic biology, pandemic prevention
            </p>
          </article>

          <article className="w-full md:w-[200px] px-3 flex flex-col items-center">
            <div className="flex-shrink-0">
              <Image
                src="/swing.png"
                alt="child playing on a swing"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-bold text-xl py-4">AI for Good</h3>
            <p className="text-center">
              Ethical deployment, inclusive development, child safety to support
              the advancement of Sustainable Development Goals
            </p>
          </article>
        </div>
      </section>

      <section>
        <H2 heading="WHERE WE WORK" />
        <HorizontalLine />
        <div className="flex flex-col lg:flex-row p-6 lg:p-30 gap-y-6 lg:gap-x-4 justify-center items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/asiamap.png"
              alt="Map of Asia"
              width={1000}
              height={500}
              className="object-contain"
            />
          </div>
          <article className="w-full lg:w-1/2 text-justify space-y-4">
            <p>
              Asia is home to 60% of the world’s population and is a highly
              diverse region with distinct political, social, and technological
              contexts. The continent is rapidly becoming a key part of the
              global AI value chain, with AI investments projected to reach $110
              billion by 2028.
            </p>
            <p>
              However, AI development and governance across the region remain
              highly uneven. In particular, Southeast Asia has a less mature AI
              ecosystem and is significantly underrepresented in global AI
              safety and governance research and dialogue. The gap between
              limited governance preparedness and rising foreign direct
              investment in AI critical infrastructure across the region further
              heightens the risks associated with rapid AI adoption.
            </p>
            <p>
              We aim to maximize the impact of our work. Beginning in Southeast
              Asia, we support the development of policy, technical, and
              research capabilities across the Asia-Pacific region to help
              ensure AI is governed safely and responsibly.
            </p>
          </article>
        </div>
      </section>
    </PageWrapper>
  );
};

export default page;
