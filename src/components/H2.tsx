const H2 = ({ heading }: { heading: string }) => {
  return (
    <h2 className={`text-black text-5xl font-bold py-12 px-18 bg-slate-50`}>
      {heading}
    </h2>
  );
};

export default H2;
