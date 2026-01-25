type SectionProps = {
  children: React.ReactNode;
  fullBleed?: boolean;
  bgColor?: string;
};

function SectionWrapper({
  children,
  fullBleed = false,
  bgColor,
}: SectionProps) {
  if (fullBleed) {
    return <section>{children}</section>;
  }

  return (
    <section className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${bgColor}`}>
      {children}
    </section>
  );
}

export default SectionWrapper;
