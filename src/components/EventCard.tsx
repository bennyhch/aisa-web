'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const DESCRIPTION_CHAR_LIMIT = 120;
  const shouldTruncateDescription = description.length > DESCRIPTION_CHAR_LIMIT;

  return (
    <article className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
      {/* Top row */}
      <div className="flex items-center gap-4 text-slate-500 text-sm">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
      </div>

      {/* Title - Fixed height with line clamp */}
      <h3 className="mt-3 text-lg font-semibold text-black min-h-[5rem]">
        {title}
      </h3>

      {/* Date & time */}
      <div className="mt-2 flex items-center gap-2 text-slate-600 text-sm">
        <FaCalendarAlt />
        <span>{dateTime}</span>
      </div>

      {/* Description */}
      <div className="mt-3 text-justify">
        <p className="text-slate-600 text-sm whitespace-pre-line">
          {shouldTruncateDescription && !isExpanded
            ? `${description.slice(0, DESCRIPTION_CHAR_LIMIT)}...`
            : description}
        </p>

        {shouldTruncateDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 text-sm font-medium text-oceanGreen hover:underline focus:outline-none"
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>

      {/* CTA */}
      <a
        href={registerUrl}
        className="mt-4 inline-block text-sm font-medium text-oceanGreen hover:underline"
      >
        Register Now →
      </a>
    </article>
  );
}
