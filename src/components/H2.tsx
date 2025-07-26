const H2 = ({ heading }: { heading: string }) => {
  return (
    <h2 className="w-full break-words text-black text-3xl md:text-5xl font-bold py-12 px-6 md:px-12 bg-slate-50">
      {heading}
    </h2>
  );
};

export default H2;
