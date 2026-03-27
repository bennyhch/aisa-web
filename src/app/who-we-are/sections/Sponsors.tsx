import SectionHeader from '@/components/SectionHeader';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

const Sponsors = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Trusted By</SectionHeader>
      <div className="w-full  py-20">
        <Image
          src="/support-by.webp"
          alt="sponsoring organisations"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default Sponsors;
