const H2 = ({ heading }: { heading: string }) => {
  return (
    <h2 className="w-full break-words text-black text-3xl md:text-5xl font-bold py-12 px-10 sm:px-6 md:px-12 lg:px-24 bg-slate-50">
      {heading}
    </h2>
  );
};

export default H2;
