import Hero from './_components/Hero';

export default function Home() {
  return (
    <header className="flex flex-col w-full h-auto bg-gradient-to-tl bg-[linear-gradient(to_top,theme(colors.dull-lavender.900)_40%,theme(colors.dull-lavender.800)_60%,theme(colors.dull-lavender.600)_100%)]">
      <Hero />
    </header>
  );
}
