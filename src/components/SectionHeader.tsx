type SectionHeaderProps = {
  children: React.ReactNode;
  colorClass?: string;
  justify?: boolean;
};

const SectionHeader = ({
  children,
  colorClass = 'text-black',
  justify = false,
}: SectionHeaderProps) => {
  return (
    <h2
      className={`w-full break-words text-3xl md:text-5xl font-bold ${
        justify ? 'text-justify' : 'text-center'
      } ${colorClass}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
