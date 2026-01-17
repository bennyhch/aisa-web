import SectionHeader from '@/components/SectionHeader';
import { team } from '@/data/team';
import Image from 'next/image';
import Link from 'next/link';

type ProfileCardProps = {
  name: string;
  title: string;
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
      <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg">
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
        <div className="p-6">
          <h3 className="text-lg font-semibold text-black">{name}</h3>

          <p className="mt-1 text-sm font-medium text-oceanGreen">{title}</p>

          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}

const Team = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <SectionHeader>Our Team</SectionHeader>
        <br />
        <p className="text-slate max-w-4xl mx-auto">
          At AI Safety Asia (AISA), our work is built on shared values that
          guide how we think, act, and collaborate. These principles remind us
          that progress in technology must always reflect progress in humanity.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map(({ name, id, title, description, imageSrc, linkedinUrl }) => (
          <ProfileCard
            key={id}
            name={name}
            title={title}
            description={description}
            imageSrc={imageSrc}
            linkedinUrl={linkedinUrl || ''}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
