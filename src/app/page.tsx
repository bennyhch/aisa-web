import H2 from "@/components/H2";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <header className="py-8 px-18">
        <h1 className="text-oceanGreen text-6xl font-extrabold">
          Building Asia as a
          <br /> globally-leading safe and
          <br /> responsible AI innovator
        </h1>

        <p className="pt-8 font-bold">
          <Link href="/what-we-do">Explore what we do</Link>
        </p>
      </header>

      <section className="flex flex-col lg:flex-row text-white bg-oceanGreen">
        <article className="px-12 w-full lg:w-3/5 pt-20 text-justify lg:pr-38">
          <H2 heading="WHO WE ARE" textColor="white" />
          <p className="pt-16">
            Established in 2024, AI Safety Asia (AISA) is a global non-profit
            dedicated to building Asia as a globally-leading safe and
            responsible AI innovator.
          </p>{" "}
          <br />
          <br />
          <p>
            We strive to minimise the risks of AI adoption while supporting
            societies to adopt AI safely.
          </p>{" "}
          <br />
          <br />
          <p>
            {" "}
            At the core of our mission is the integrated, diverse and
            collaborative nature of our work. We believe that achieving safe and
            governed AI begins with building bridges—between generations,
            disciplines, and regions through actionable steps across our three
            interrelated program pillars that convene, research and build
            capacity to shape the future of AI governance in Asia.
          </p>
        </article>

        <div className="w-full lg:w-2/5">
          <Image
            src="/skyscraper_night.png"
            alt="Skyscrapers at night"
            width={700}
            height={350}
            className="object-contain"
          />
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="flex flex-col">
        <H2
          heading="WHERE WE WORK"
          textColor="black"
          paddingHorizontal="12"
          paddingVertical="10"
        />
        <hr className="w-full bg-black" />
        <article className="flex px-12">
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <Image
              src="/asiamap.png"
              alt="Map of Asia"
              width={1000}
              height={500}
              className="object-contain"
            />
          </div>

          <div className="w-full lg:w-2/3 text-justify flex flex-col justify-center">
            <article>
              <p>
                At the core of our mission is the integrated, diverse and
                collaborative nature of our work.
              </p>
              <br />
              <br />
              <p>
                We collaborate with civil society organisations, governments,
                and think tanks across Southeast, East, and South Asia, to build
                an ecosystem to advance safe, regionally grounded AI governance
              </p>
            </article>
          </div>
        </article>
      </section>
    </PageWrapper>
  );
}
