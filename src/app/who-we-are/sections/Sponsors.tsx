import Image from 'next/image';
import H2 from '@/components/H2';

const Sponsors = () => {
  return (
    <section className="flex justify-center flex-col">
      <h2 className="text-center w-full break-words text-black text-3xl md:text-5xl font-bold">
        Supported By
      </h2>
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
