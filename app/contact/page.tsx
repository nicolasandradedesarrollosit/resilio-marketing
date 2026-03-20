import type { Metadata } from 'next';

import Image from 'next/image';

import FirstComponent from './_components/FirstComponent';
import SecondComponent from './_components/SecondComponent';

import GoBack from '@/common/GoBack';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con Resilio Life para consultas sobre marketing creativo, producción de eventos, diseño gráfico, fotografía y más. Respondemos en menos de 24 horas.',
  openGraph: {
    title: 'Contacto - Resilio Life',
    description:
      'Contacta con Resilio Life para consultas sobre marketing creativo. Respondemos en menos de 24 horas.',
  },
};

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="flex flex-col h-screen overflow-hidden w-full bg-dull-lavender-50"
    >
      <GoBack url="/" />
      <div className="flex h-16 md:h-20 lg:h-24 shrink-0 justify-center items-center bg-dull-lavender-500 w-full py-18">
        <Image
          alt="Logo de Resilio Life"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
          height={56}
          src="/logo-icon.png"
          width={56}
        />
      </div>
      <h1 className="sr-only" id="contact-heading">
        Contacto - Resilio Life
      </h1>

      <div className="flex flex-col lg:flex-row w-full flex-1 overflow-y-auto bg-dull-lavender-50 py-12">
        <FirstComponent />
        <SecondComponent />
      </div>
    </section>
  );
}
