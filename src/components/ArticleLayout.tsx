import SectionHeader from '@/components/SectionHeader';

type ArticleLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const ArticleLayout = ({ title, subtitle, children }: ArticleLayoutProps) => {
  return (
    <article className="w-full max-w-3xl mx-auto px-4 py-16 text-justify">
      {/* Header */}
      <header className="mb-10 text-center">
        <SectionHeader justify={false}>{title}</SectionHeader>
        <br />
        {subtitle && (
          <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-slate max-w-none">{children}</div>
    </article>
  );
};

export default ArticleLayout;
