import { ArticleCard } from '@/app/sections/Articles';
import SectionWrapper from '@/components/SectionWrapper';
import insights from '@/data/insights';

const index = () => {
  return (
    <SectionWrapper>
      <div className="py-20">
        {/* <section className="w-full px-4 py-16 bg-paleGray"> */}
        <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <ArticleCard
              key={insight.id}
              title={insight.title}
              description={insight.description}
              href={insight.href}
            />
          ))}
        </div>
      </div>
      {/* </section> */}
    </SectionWrapper>
  );
};

export default index;
