import SectionHeader from '@/components/SectionHeader';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

const Sponsors = () => {
  return (
    // <section className="w-full max-w-6xl mx-auto px-4 pt-16">
    <SectionWrapper>
      <SectionHeader>Trusted By</SectionHeader>
      <div className="w-full  py-20">
        <Image
          src="/support-by.png"
          alt="sponsoring organisations"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      {/* </section> */}
    </SectionWrapper>
  );
};

export default Sponsors;
