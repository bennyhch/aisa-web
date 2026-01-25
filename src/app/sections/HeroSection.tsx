import { SectionHeading } from '@/components/SectionHeading';

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background image */}
      <img
        src="/Hero.png"
        alt="landing background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex flex-col">
              <SectionHeading
                title="Together, We’re Building a Safer Digital Future for Asia"
                highlight=""
                titleColor="text-white"
              />

              <article className="text-white leading-relaxed">
                <p>
                  AI Safety Asia (AISA) is a global non-profit dedicated to
                  building Asia as a globally-leading safe and responsible AI
                  innovator. We strive to minimise the risks of AI adoption
                  while supporting societies to adopt AI safely.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
