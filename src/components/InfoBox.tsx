type InfoBoxProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function InfoBox({ icon, title, description }: InfoBoxProps) {
  return (
    <article className="rounded-xl p-6 bg-white shadow-lg">
      {/* Icon */}
      <div className="text-2xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Description */}
      <div className="space-y-1 text-sm text-slate">{description}</div>
    </article>
  );
}

export default InfoBox;
