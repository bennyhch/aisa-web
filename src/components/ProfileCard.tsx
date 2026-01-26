'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProfileCardProps = {
  name: string;
  title?: string;
  description: string;
  imageSrc: string;
  linkedinUrl: string;
};

function ProfileCard({
  name,
  title,
  description,
  imageSrc,
  linkedinUrl,
}: ProfileCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg">
      {/* Clickable image */}
      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full aspect-square block"
      >
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="line-clamp-1 text-lg font-semibold text-black hover:underline">
            {name}
          </h3>
        </Link>

        <p className="mt-1 line-clamp-1 text-sm font-medium text-oceanGreen">
          {title}
        </p>

        <p
          className={`mt-3 text-sm leading-relaxed text-gray-600 ${
            expanded ? '' : 'line-clamp-3'
          }`}
        >
          {description}
        </p>

        {description.length > 120 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 w-fit text-sm font-medium text-oceanGreen hover:underline"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>
    </article>
  );
}

export default ProfileCard;
