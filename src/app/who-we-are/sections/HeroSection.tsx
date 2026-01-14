import { SectionHeading } from '@/components/SectionHeading';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <SectionHeading
            title="Building Trus at the Heart of"
            highlight="AI's Future in Asia"
          />
        </div>
        <article className="md:w-1/2 text-gray-700 text-lg md:text-xl">
          <p>
            We believe that progress in artificial intelligence must begin with
            people. At AI Safety Asia (AISA), we bring together policymakers,
            experts, researchers, and civil society to create an AI ecosystem
            built on trust, inclusion, and shared responsibility.
          </p>
          <br />
          <p>
            Our mission is to help Asia lead the way in developing AI that
            uplifts communities, proects values, and serves humanity with
            integrity.
          </p>
        </article>
      </div>

      <div className="w-full rounded-lg overflow-hidden">
        <Image
          src="/downtown.jpg"
          alt="downtown"
          width={1600} // large enough for desktop
          height={350} // flatter height
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
