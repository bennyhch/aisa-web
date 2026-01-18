import H2 from '@/components/H2';
import HorizontalLine from '@/components/HorizontalLine';
import PageWrapper from '@/components/PageWrapper';
import topics from '@/data/topics';
import Image from 'next/image';
import Link from 'next/link';
import Mission from './sections/Mission';

export default function Home() {
  return (
    <PageWrapper>
      <header className="min-h-[90vh] flex flex-col justify-center py-[1.75rem] sm:py-8 px-6 sm:px-12 md:px-20 lg:px-28 bg-slate-50">
        <h1 className="text-oceanGreen text-4xl sm:text-5xl md:text-7_5xl font-extrabold leading-tight">
          <span className="block">Building Asia as a</span>
          <span className="block">globally-leading safe and</span>
          <span className="block">responsible AI innovator</span>
        </h1>

        <p className="pt-8 font-bold text-xl">
          <Link href="/what-we-do">Explore what we do</Link>
        </p>
      </header>

      <Mission />

      {/* WHERE WE WORK */}
      <section>
        <H2 heading="WHERE WE WORK" />
        <HorizontalLine />

        <article className="flex flex-col lg:flex-row px-10 sm:px-6 md:px-10 lg:px-24 gap-y-8 lg:gap-x-10 pt-8">
          {/* Image temporarily removed
          <div className="w-full lg:w-2/5 flex justify-center items-center">
             <Image
              src="/asiamap.png"
              alt="Map of Asia"
              width={1000}
              height={500}
              className="object-contain w-full max-w-full h-auto"
            /> 
          </div>
          */}

          <div className="w-full lg:w-3/5 text-justify flex items-center">
            <div className="w-full">
              <p>
                At the core of our mission is the integrated, diverse and
                collaborative nature of our work.
              </p>
              <br />
              <p>
                We collaborate with civil society organisations, governments,
                and think tanks across Southeast, East, and South Asia, to build
                an ecosystem to advance safe, regionally grounded AI governance.
              </p>
              <br />
              <br />
            </div>
          </div>
        </article>
      </section>

      {/* WHAT WE DO */}
      <section className="flex flex-col ">
        <H2 heading="WHAT WE DO" />
        <HorizontalLine />
        <div className="flex flex-col lg:flex-row lg:justify-content lg:px-60 lg:gap-x-26 gap-y-12 w-full py-26 px-10">
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
