import Image from 'next/image';

type AlternatingRowProps = {
  title: string;
  text: string;
  text2?: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // controls image/text order on desktop
};

export default function AlternatingRow({
  title,
  text,
  text2,
  imageSrc,
  imageAlt = '',
  reverse = false,
}: AlternatingRowProps) {
  return (
    <article
      className={`flex flex-col md:flex-row items-stretch overflow-hidden text-white ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text */}
      <div
        className={`md:w-1/2 flex flex-col justify-center p-8 md:p-12 ${
          reverse ? 'bg-darkTeal' : 'bg-oceanGreen'
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p>{text}</p>
        <br />
        <p>{text2}</p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={500}
          className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
        />
      </div>
    </article>
  );
}
