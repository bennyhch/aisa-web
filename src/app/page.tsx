import H2 from "@/components/H2";
import HorizontalLine from "@/components/HorizontalLine";
import PageWrapper from "@/components/PageWrapper";
import topics from "@/data/topics";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <header className="py-8 px-28">
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
        <article className="px-18 w-full lg:w-3/5 pt-20 text-justify lg:pr-38">
          <h2 className="text-white text-5xl font-bold">WHO WE ARE</h2>
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
      <section className="flex flex-col ">
        <H2 heading="WHERE WE WORK" />
        <HorizontalLine />
        <article className="flex px-18 gap-x-10">
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <Image
              src="/asiamap.png"
              alt="Map of Asia"
              width={1000}
              height={500}
              className="object-contain"
            />
          </div>

          <div className="w-full lg:w-3/5 text-justify flex items-center justify-around">
            <article className="w-2/3">
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

      {/* WHAT WE DO */}
      <section className="flex flex-col ">
        <H2 heading="WHAT WE DO" />
        <HorizontalLine />
        <div className="flex flex-col lg:flex-row lg:justify-content lg:px-60 lg:gap-x-26 w-full py-26">
          {topics.map(({ imageSrc, alt, title, description }) => (
            <article key={title} className="w-full lg:w-1/3">
              <div className="h-30 flex justify-center items-center">
                <Image
                  src={imageSrc}
                  alt={alt}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold pt-4 text-center">{title}</h3>
              <p className="pt-2 text-justify">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        {/* <div> */}
        <Image
          src="/evening.png"
          alt="evening skyline in Asia"
          width={1000}
          height={500}
          className="object-contain w-full"
        />
        {/* </div> */}
      </section>
    </PageWrapper>
  );
}
