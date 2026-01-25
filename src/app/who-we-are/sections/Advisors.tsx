import ProfileCard from '@/components/ProfileCard';
import SectionHeader from '@/components/SectionHeader';
import SectionWrapper from '@/components/SectionWrapper';
import advisors from '@/data/advisors';

const Advisors = () => {
  return (
    <SectionWrapper>
      {/* <section className="w-full max-w-6xl mx-auto px-4 py-16"> */}
      <div className="text-center mb-12">
        <SectionHeader>Our Advisors</SectionHeader>
        <br />
        <p className="text-slate max-w-4xl mx-auto">
          At AI Safety Asia (AISA), our work is built on shared values that
          guide how we think, act, and collaborate. These principles remind us
          that progress in technology must always reflect progress in humanity.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advisors.map(({ name, id, description, imageSrc, linkedinUrl }) => (
          <ProfileCard
            key={id}
            name={name}
            description={description}
            imageSrc={imageSrc}
            linkedinUrl={linkedinUrl || ''}
          />
        ))}
      </div>
      {/* </section> */}
    </SectionWrapper>
  );
};

export default Advisors;
