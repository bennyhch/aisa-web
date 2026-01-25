type SectionHeadingProps = {
  title: string;
  highlight: string;
  titleColor?: string; // Tailwind text color class
};

export function SectionHeading({
  title,
  highlight,
  titleColor = 'text-black',
}: SectionHeadingProps) {
  return (
    <h2 className="w-full break-words font-bold py-12">
      <span
        className={`block ${titleColor} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
      >
        {title}
      </span>

      <span className="block text-oceanGreen mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        {highlight}
      </span>
    </h2>
  );
}
