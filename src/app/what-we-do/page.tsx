import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import HeroSection from './sections/HeroSection';
import AlternatingSection from './sections/AlternatingSection';

const page = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <AlternatingSection />
    </PageWrapper>
  );
};

export default page;
