import PageWrapper from '@/components/PageWrapper';
import HeroSection from './sections/HeroSection';
import AlternatingSection from './sections/AlternatingSection';
import Belief from './sections/Belief';
import Sponsors from './sections/Sponsors';
import Principles from './sections/Principles';
import Team from './sections/Team';
import Advisors from './sections/Advisors';

const page = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <AlternatingSection />
      <Belief />
      <Principles />
      <Team />
      <Advisors />
      <Sponsors />
    </PageWrapper>
  );
};

export default page;
