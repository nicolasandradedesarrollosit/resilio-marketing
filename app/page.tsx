import Hero from './_components/Hero';

import Navbar from '@/common/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col w-full h-auto bg-gradient-to-tl bg-[linear-gradient(to_top,theme(colors.blue.marguerite.900)_40%,theme(colors.blue.marguerite.800)_60%,theme(colors.blue.marguerite.600)_100%)]">
      <Navbar />
      <Hero />
    </main>
  );
}
