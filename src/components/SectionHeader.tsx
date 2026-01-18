type SectionHeaderProps = {
  children: React.ReactNode;
  colorClass?: string;
};

const SectionHeader = ({
  children,
  colorClass = 'text-black',
}: SectionHeaderProps) => {
  return (
    <h2
      className={`text-center w-full break-words text-3xl md:text-5xl font-bold ${colorClass}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
