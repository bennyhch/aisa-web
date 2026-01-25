import H2 from '@/components/H2';
import HorizontalLine from '@/components/HorizontalLine';
import PageWrapper from '@/components/PageWrapper';
import topics from '@/data/topics';
import Image from 'next/image';
import Link from 'next/link';
import Mission from './sections/Mission';
import Pillars from './sections/Pillars';
import Sponsors from './who-we-are/sections/Sponsors';
import Articles from './sections/Articles';
import JoinUs from './sections/JoinUs';
import HeroSection from './sections/HeroSection';

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <Sponsors />
      <Mission />
      <Pillars />
      <Articles />
      <JoinUs />
    </PageWrapper>
  );
}
