import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <Link
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg">
        {/* Image */}
        <div className="relative h-56 w-full">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="line-clamp-1 text-lg font-semibold text-black">
            {name}
          </h3>

          <p className="mt-1 line-clamp-1 text-sm font-medium text-oceanGreen">
            {title}
          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProfileCard;
