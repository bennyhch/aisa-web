import { SectionHeading } from '@/components/SectionHeading';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <SectionHeading
            title="Turning Ideas into Action for a"
            highlight="Safer AI Future"
          />
        </div>
        <article className="md:w-1/2 text-gray-700 text-lg md:text-xl">
          <p>
            AI is evolving fast — but safety, ethics, and inclusivity must
            evolve faster. At AI Safety Asia (AISA), we transform research and
            collaboration into real chagne — from policy design to regional
            training and multi-country studies.
          </p>
          <br />
          <p>
            {
              "Our work ensures that Asia's AI future is not only innovative, but also accountable and human-centered."
            }
          </p>
        </article>
      </div>

      <div className="w-full rounded-lg overflow-hidden">
        <Image
          src="/nasa-globe.jpg"
          alt="spaceview"
          width={1600} // large enough for desktop
          height={350} // flatter height
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
        />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
