'use client';

import Image from 'next/image';
import Link from 'next/link';

import EventComponent from './_components/EventComponent';
import { useEvents } from './_hooks/useEvents';

import GoBack from '@/common/GoBack';
import Footer from '@/common/Footer';

export default function Events() {
  const { events, isLoading } = useEvents();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-dull-lavender-400" />
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-black via-black to-dull-lavender-950 overflow-x-hidden">
        <GoBack url="/" />
        <div className="relative w-full px-5 md:px-8 mt-8 md:mt-12 py-8 md:py-16 lg:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Image
                alt="Resilio Events"
                className="h-8 w-8 md:h-10 md:w-10"
                height={40}
                src="/logo-icon.png"
                width={40}
              />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dull-lavender-100">
                Nuestros Eventos
              </h1>
            </div>
            <p className="text-sm md:text-lg text-white/60 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Descubre las experiencias y eventos que te acercarán a la
              comunidad creativa de Resilio.
            </p>
          </div>

          <div className="hidden md:block absolute top-0 right-0 w-72 h-72 bg-dull-lavender-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        </div>

        <div className="flex-1 w-full px-5 md:px-8 py-8 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 md:mb-8 text-center md:text-left">
              <p className="text-white/60 text-xs md:text-base">
                <span className="font-semibold text-white">
                  {events.length}
                </span>{' '}
                eventos próximos
              </p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
              {events.map((event, index) => (
                <EventComponent
                  key={`${index}-${event.title}`}
                  date={event.date}
                  description={event.description}
                  href={event.url_provider}
                  image={event.url_image}
                  location={event.location}
                  title={event.title}
                />
              ))}
            </div>

            <div className="mt-10 md:mt-20 p-6 md:p-12 rounded-xl md:rounded-2xl bg-gradient-to-r from-dull-lavender-600/20 to-dull-lavender-500/10 border border-dull-lavender-500/30 text-center">
              <h2 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-4">
                ¿Quieres organizar un evento?
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto leading-relaxed">
                Contactanos para explorar oportunidades de colaboración.
              </p>
              <Link
                className="inline-block px-6 md:px-8 py-2.5 md:py-3 rounded-lg bg-dull-lavender-500 hover:bg-dull-lavender-600 active:scale-95 text-white text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-dull-lavender-500/30"
                href="/contact"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
