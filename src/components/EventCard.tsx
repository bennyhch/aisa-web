import { FaReact, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

type EventCardProps = {
  location: string;
  title: string;
  dateTime: string;
  description: string;
  registerUrl: string;
};

export function EventCard({
  location,
  title,
  dateTime,
  description,
  registerUrl,
}: EventCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
      {/* Top row */}
      <div className="flex items-center gap-4 text-slate-500 text-sm">
        <FaReact className="text-sky-500 text-xl" />

        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold text-black">{title}</h3>

      {/* Date & time */}
      <div className="mt-2 flex items-center gap-2 text-slate-600 text-sm">
        <FaCalendarAlt />
        <span>{dateTime}</span>
      </div>

      {/* Description */}
      <p className="mt-3 text-slate-600 text-sm">{description}</p>

      {/* CTA */}
      <a
        href={registerUrl}
        className="mt-4 inline-block text-sm font-medium text-sky-600 hover:text-sky-700"
      >
        Register Now →
      </a>
    </article>
  );
}
