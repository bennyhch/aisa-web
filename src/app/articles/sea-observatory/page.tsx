import ArticleLayout from '@/components/ArticleLayout';
import React from 'react';

const page = () => {
  return (
    <ArticleLayout
      title="SEA Observatory: Born from Necessity, Built for Impact"
      subtitle="Awarded second prize at UNESCO Global Forum on AI Ethics 2025, the SEA Observatory transforms fragmented knowledge into actionable intelligence for Southeast Asian AI governance"
    >
      <h3 className="font-bold">The Knowledge Gap That Sparked a Movement</h3>
      <br />
      <p>
        {
          "A fundamental disconnect exists in AI governance: technologists across Southeast Asia are building and deploying sophisticated AI systems while remaining largely disconnected from how their own region is preparing for these technologies' societal impact. This isn't a failure of individual awareness, it's a systemic infrastructure problem."
        }
      </p>
      <br />
      <p>
        {
          "Despite Southeast Asia's 700 million inhabitants and rapidly expanding digital economy, comprehensive information about the region's AI governance landscape remains remarkably difficult to access. For researchers, policymakers, and technologists alike, understanding what's actually happening across the region requires navigating a maze of fragmented resources, broken links, and incomplete documentation."
        }
      </p>
      <br />
      <p>
        {
          "The infrastructure needed to make informed decisions about AI governance in Southeast Asia simply doesn't exist in any coherent form."
        }
      </p>
      <br />
      <h3 className="font-bold">Confronting the Reality</h3>
      <br />
      <p>
        {
          "What began as a straightforward research question - 'What is Southeast Asia doing about AI governance?', quickly revealed a more troubling reality. Starting in August 2024, the search for answers led not to insights but to obstacles: broken links, outdated resources, fragmented information scattered across inaccessible databases. Most Southeast Asian countries lacked comprehensive AI strategies, and the few policy documents that existed were nearly impossible to locate systematically."
        }
      </p>
      <br />
      <p>
        {
          "Conversations with researchers, civil servants, and policy professionals across the region confirmed a universal frustration: 'It's hard to stay updated, and even harder to make sense of what we find.'"
        }
      </p>
      <br />
      <p>
        {
          "Yet when these stakeholders shared their sources, the problem's scope became clear. The information existed, but in such fragmented form that comprehensive understanding remained perpetually out of reach."
        }
      </p>
      <br />
      <h3 className="font-bold">The Global North Blind Spot</h3>
      <br />
      <p>
        {
          'Meanwhile, global AI repositories and databases proliferated, but their focus remained locked on the usual suspects. The United States, European Union, and other Global North jurisdictions received exhaustive documentation, creating an illusion of comprehensive coverage while Southeast Asia remained systematically underrepresented.'
        }
      </p>
      <br />
      <p>
        {
          "This wasn't accidental. Funding flows to established AI leaders, research concentrates where infrastructure already exists, and governance frameworks are designed primarily for contexts that already dominate the conversation. The result is resources and policies built for the Global North with little adaptation to the unique social systems, cultural contexts, and development trajectories defining Southeast Asia."
        }
      </p>
      <br />
      <p>
        {
          'For researchers, policymakers, and civil society organizations trying to understand or contribute to AI governance in Southeast Asia, this gap was disabling.'
        }
      </p>
      <br />
      <p>
        {
          "SEA Observatory emerged from this necessity. Not as a predetermined project, but as the organic response to a problem that couldn't be ignored. What began as an independent research effort evolved into something larger: a reconceptualization of how we document, analyze, and engage with regional technological policy evolution."
        }
      </p>
      <br />
      <p>
        {
          "The vision crystallized: a searchable, visual-first platform focused exclusively on AI governance across Southeast Asia's 11 nations. Not simply another repository, but infrastructure purpose-built for the region's needs, designed to be easy to explore, intuitive to compare across contexts, and trackable over time as policies evolve."
        }
      </p>
      <br />
      <p>
        {
          "Most critically, SEA Observatory would provide what the region desperately needed: a single source of truth for understanding Southeast Asia's AI governance landscape."
        }
      </p>
      <br />
      <h3 className="font-bold">Building the Policy Lab Foundation</h3>
      <br />
      <p>
        {
          "Today, SEA Observatory serves as the foundation of AI Safety Asia's policy lab—the empirical bedrock upon which exciting new governance ideas, policies, and research papers are being built. By bringing clarity to Southeast Asia's AI governance landscape, the Observatory sparks new conversations, enables evidence-based innovation, and ensures that Southeast Asian perspectives are grounded in rigorous regional data."
        }
      </p>
      <br />
      <p>
        {
          "The platform transforms what was once fragmented and inaccessible into something usable, comparable, and actionable. It ensures that researchers don't spend months hunting down basic information that should take minutes to find. It gives policymakers the comparative intelligence needed to design context-appropriate frameworks. It provides civil society with the transparency essential for meaningful engagement."
        }
      </p>
      <br />
      <p>
        {
          "Explore SEA Observatory and contribute to building Southeast Asia's AI governance knowledge base:"
        }{' '}
        <span className="underline text-blue-600">
          <a href="http://seaobservatory.org/">seaobservatory.org</a>
        </span>
      </p>
    </ArticleLayout>
  );
};

export default page;
