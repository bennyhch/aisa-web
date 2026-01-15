const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-center w-full break-words text-black text-3xl md:text-5xl font-bold">
      {children}
    </h2>
  );
};

export default SectionHeader;
