const H2 = ({
  heading,
  textColor,
  paddingHorizontal = "0",
  paddingVertical = "0",
}: {
  heading: string;
  textColor: string;
  paddingHorizontal?: string;
  paddingVertical?: string;
}) => {
  return (
    <h2
      className={`text-${textColor} text-5xl font-bold px-${paddingHorizontal} py-${paddingVertical}`}
    >
      {heading}
    </h2>
  );
};

export default H2;
