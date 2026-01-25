import SectionHeader from '@/components/SectionHeader';
import articles from '@/data/articles';
import Link from 'next/link';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';

type ArticleCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function ArticleCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt = '',
}: ArticleCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg border border-slate-200">
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Title: height constrained */}
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-black">
          {title}
        </h3>

        {/* Description: now aligned */}
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        {/* CTA pinned */}
        <Link
          href={href}
          className="mt-auto pt-4 text-sm font-medium text-oceanGreen hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}

const Articles = () => {
  return (
    <SectionWrapper>
      {/* <section className="w-full max-w-6xl mx-auto px-4 py-16"> */}
      <div className="text-center mb-12">
        <SectionHeader>Knowledge that Drives Change</SectionHeader>
        <p className="text-slate max-w-4xl mx-auto mt-4">
          Evidence-based insights from AISA’s research, dialogues, and
          capacity-building programs — transforming ideas into actionable impact
          across Asia.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map(
          ({ id, title, description, href, imageSrc, imageAlt }) => {
            return (
              <ArticleCard
                key={id}
                title={title}
                description={description}
                href={href}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
              />
            );
          },
        )}
      </div>
      {/* </section> */}
    </SectionWrapper>
  );
};

export default Articles;
