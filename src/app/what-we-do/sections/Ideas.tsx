import { ArticleCard } from '@/app/sections/Articles';
import SectionHeader from '@/components/SectionHeader';
import SectionWrapper from '@/components/SectionWrapper';
import articles from '@/data/articles';

const Ideas = () => {
  return (
    <SectionWrapper>
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <SectionHeader>Where Ideas Become Real Impact</SectionHeader>
          <p className="text-slate max-w-4xl mx-auto mt-4">
            Our programs combine research, policy, and executive learning —
            helping leaders and institutions navigate AI responsibly.
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
      </section>
    </SectionWrapper>
  );
};

export default Ideas;
