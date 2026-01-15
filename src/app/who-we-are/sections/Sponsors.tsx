import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';

const Sponsors = () => {
  return (
    <section className="flex justify-center flex-col">
      <SectionHeader>Supported By</SectionHeader>
      <div className="w-full px-5 md:w-2/3 md:mx-auto py-20">
        <Image
          src="/support-by.png"
          alt="sponsoring organisations"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Sponsors;
