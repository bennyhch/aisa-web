import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import HeroSection from './sections/HeroSection';
import AlternatingSection from './sections/AlternatingSection';
import Ideas from './sections/Ideas';

const page = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <AlternatingSection />
      <Ideas />
    </PageWrapper>
  );
};

export default page;
