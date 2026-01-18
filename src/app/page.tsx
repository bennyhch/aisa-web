import H2 from '@/components/H2';
import HorizontalLine from '@/components/HorizontalLine';
import PageWrapper from '@/components/PageWrapper';
import topics from '@/data/topics';
import Image from 'next/image';
import Link from 'next/link';
import Mission from './sections/Mission';
import Pillars from './sections/Pillars';

export default function Home() {
  return (
    <PageWrapper>
      <header className="min-h-[90vh] flex flex-col justify-center py-[1.75rem] sm:py-8 px-6 sm:px-12 md:px-20 lg:px-28 bg-slate-50">
        <h1 className="text-oceanGreen text-4xl sm:text-5xl md:text-7_5xl font-extrabold leading-tight">
          <span className="block">Building Asia as a</span>
          <span className="block">globally-leading safe and</span>
          <span className="block">responsible AI innovator</span>
        </h1>

        <p className="pt-8 font-bold text-xl">
          <Link href="/what-we-do">Explore what we do</Link>
        </p>
      </header>

      <Mission />

      <Pillars />
    </PageWrapper>
  );
}
