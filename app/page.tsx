'use client';
import Hero from './_components/Hero';
import FirstSection from './_components/FirstSection';
import SecondSection from './_components/SecondSection';
import ThirdSection from './_components/ThirdSection';

import Footer from '@/common/Footer';

export default function Home() {
  return (
    <>
      <header
        className="flex flex-col w-full h-auto"
        style={{
          background:
            'linear-gradient(to top right, #000000 40%, #5031a2 60%, #7247e4 100%)',
        }}
      >
        <Hero />
      </header>
      <main>
        <FirstSection />
        <ThirdSection />
        <SecondSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
