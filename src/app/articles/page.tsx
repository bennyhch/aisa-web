import PageWrapper from '@/components/PageWrapper';
import React from 'react';

const page = () => {
  return (
    <PageWrapper>
      <ArticleLayout
        images={[{ src: '/bio-security.png', alt: 'sth', caption: '' }]}
        subtitle="A landmark collaboration between AI Safety Asia and the Brookings Institution charts a new course for inclusive AI governance"
        title="AI Safety Governance, The Southeast Asian Way: Bridging Global North Leadership with Regional Realities"
      >
        <h2>Centering Southeast Asia in Global AI Conversations</h2>
        <p>
          For too long, the discourse on artificial intelligence safety has been
          dominated by a narrow set of voices—primarily those from the United
          States and China, the world's leading compute, talent, and financial
          hubs. While their contributions have shaped critical frameworks for
          managing AI risks, this concentration has left vast regions
          underrepresented in decisions that will affect billions.{' '}
        </p>{' '}
        <p>
          {' '}
          Southeast Asia, home to over 700 million people and one of the world's
          fastest-growing digital economies, represents a crucial yet often
          overlooked stakeholder in global AI governance. Young, digitally
          connected, and rapidly adopting AI technologies across sectors, the
          region is uniquely positioned to offer fresh perspectives on balancing
          innovation with safety, economic development with responsible
          deployment.
        </p>{' '}
        <p>
          {' '}
          In August 2025, AI Safety Asia (AISA) and the Brookings Institution's
          Center for Technology Innovation released "AI Safety Governance, The
          Southeast Asian Way", a comprehensive report examining AI governance
          developments across 11 Southeast Asian nations and charting a path
          toward more inclusive, regionally grounded frameworks.
        </p>
        <h2>A Multistakeholder Approach to Regional Governance</h2>
        <p>
          The report represents the culmination of six high-level roundtable
          discussions convened by AISA throughout Southeast Asia, bringing
          together diverse voices from government ministries, technology
          companies, academic institutions, and civil society organizations.
          This deliberate multistakeholder methodology reflects AISA's core
          commitment to inclusive, evidence-based policymaking.
        </p>
        <p>
          Spanning Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar,
          Philippines, Singapore, Thailand, Timor-Leste, and Vietnam, the
          research captures the heterogeneity of the region, from Singapore's
          advanced digital infrastructure to emerging digital economies still
          building foundational capacity. This diversity isn't a limitation;
          it's an asset that offers lessons for diverse and developing regions
          worldwide.
        </p>
        <h2>Drawing from Global Best Practices, Tailored to Local Realities</h2>
        <p>
          On August 28, 2025, AISA and Brookings hosted an online discussion
          examining the report's findings and their implications for global AI
          governance. The conversation centered on a critical question: How can
          regions like Southeast Asia draw from established frameworks in the
          Global North while designing solutions that reflect their own economic
          realities, cultural contexts, and development priorities?{' '}
        </p>{' '}
        <p>
          The answer lies not in wholesale adoption of Western models, but in
          strategic adaptation - identifying universal principles while creating
          space for regional innovation in implementation. Southeast Asian
          countries are demonstrating that effective AI safety governance
          doesn't require choosing between rapid innovation and robust
          safeguards; it requires designing systems that enable both.
        </p>
        <h2>AISA as Bridge-Builder</h2>
        <p>
          This collaboration exemplifies AISA's strategic positioning as a
          bridge between Global North expertise and Global South innovation. By
          partnering with leading institutions like Brookings while maintaining
          deep regional roots, AISA ensures that Southeast Asian perspectives
          don't merely respond to global frameworks, they help shape them.
        </p>
        <p>
          The report's recommendations, developed through sustained engagement
          with regional stakeholders, offer actionable pathways for governments,
          private sector actors, and civil society organizations seeking to
          navigate the complexities of AI governance. More importantly, they
          contribute to a growing body of evidence that inclusive AI governance
          is not just ethically necessary, it's strategically essential for
          developing technologies that truly serve global needs.
        </p>
        <h2>The Path Forward</h2>
        <p>
          As AI technologies continue to advance at unprecedented speed, the
          imperative for inclusive governance frameworks grows more urgent.
          Southeast Asia's active participation in global AI safety
          conversations isn't simply about representation, it's about ensuring
          that the frameworks being built today can work for diverse contexts
          tomorrow.
        </p>
        <p>
          The AISA-Brookings collaboration marks a significant milestone in this
          journey, but it's only the beginning. As the region continues to
          digitize and its role in the global digital economy expands, Southeast
          Asia's contributions to AI safety governance will become increasingly
          indispensable.
        </p>
        <p>
          Read the full report:{' '}
          <a href="https://www.google.com/url?q=https://papers.ssrn.com/sol3/papers.cfm?abstract_id%3D5407826&sa=D&source=docs&ust=1768765461554301&usg=AOvVaw2g5XRzF3E0B0SQSfy202FS">
            AI Safety Governance, The Southeast Asian Way
          </a>
        </p>
      </ArticleLayout>
    </PageWrapper>
  );
};

export default page;

type ArticleImage = {
  src: string;
  alt?: string;
  caption?: string;
};

type ArticleLayoutProps = {
  title: string;
  subtitle?: string;
  images?: ArticleImage[];
  children: React.ReactNode; // paragraphs, headings, etc.
};

const ArticleLayout = ({
  title,
  subtitle,
  images = [],
  children,
}: ArticleLayoutProps) => {
  return (
    <article className="w-full max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </header>

      {/* Hero Image */}
      {images[0] && (
        <figure className="mb-12">
          <img
            src={images[0].src}
            alt={images[0].alt || ''}
            className="w-full rounded-xl object-cover"
          />
          {images[0].caption && (
            <figcaption className="text-sm text-slate mt-2 text-center">
              {images[0].caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Content */}
      <div className="prose prose-slate max-w-none">{children}</div>

      {/* Additional Images */}
      {images.slice(1).map((img, index) => (
        <figure key={index} className="my-12">
          <img
            src={img.src}
            alt={img.alt || ''}
            className="w-full rounded-xl object-cover"
          />
          {img.caption && (
            <figcaption className="text-sm text-slate mt-2 text-center">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </article>
  );
};
