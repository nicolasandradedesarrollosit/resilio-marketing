'use client';

import { Button } from '@heroui/react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const manifestoBlocks = [
  {
    label: 'Origen',
    before: 'Resilio nace de una forma de hacer donde ',
    highlight: 'creatividad, innovación y negocio',
    after: ' convergen dentro de una misma visión.',
  },
  {
    label: 'Método',
    before:
      'Desarrollamos marcas, experiencias y proyectos desde un enfoque integral, transformando cada contenido, campaña y activación en parte de ',
    highlight: 'un sistema con identidad, dirección y presencia real',
    after: '.',
  },
  {
    label: 'Creencia',
    before: 'No creemos en acciones aisladas, sino en ',
    highlight: 'universos de marca capaces de evolucionar',
    after: ', conectar con las personas y generar impacto real.',
  },
  {
    label: 'Filosofía',
    before:
      'Para nosotros, innovar no es seguir tendencias, sino encontrar nuevas formas de activar marcas, mover audiencias y ',
    highlight: 'construir ideas que trascienden la pantalla',
    after:
      ' para ocupar un lugar real en la cultura y en la vida de las personas.',
  },
];

export default function ThirdSection() {
  const router = useRouter();
  const manifestoRef = useRef<HTMLDivElement>(null);
  const manifestoInView = useInView(manifestoRef, {
    once: true,
    margin: '-100px',
  });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="process-heading"
      className="relative w-full py-20 px-4 md:px-8 overflow-hidden"
      id="process"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-dull-lavender-500/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dull-lavender-400/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dull-lavender-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-dull-lavender-200 to-dull-lavender-400 bg-clip-text text-transparent"
            id="process-heading"
          >
            Nuestro Proceso
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-dull-lavender-400 to-dull-lavender-600 rounded-full"
          />
        </div>

        <div
          ref={manifestoRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {manifestoBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              animate={
                manifestoInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: prefersReducedMotion ? 0 : 24 }
              }
              className="flex"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: 'easeOut',
                    }
              }
            >
              <div className="relative flex-1 flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-dull-lavender-400 to-dull-lavender-600"
                />
                <div className="flex-1 flex flex-col justify-center p-6 md:p-7">
                  <span className="inline-block text-[10px] md:text-xs uppercase tracking-widest text-dull-lavender-400/70 font-medium mb-3">
                    {block.label}
                  </span>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">
                    {block.before}
                    <span className="bg-gradient-to-r from-dull-lavender-200 to-dull-lavender-400 bg-clip-text text-transparent font-semibold">
                      {block.highlight}
                    </span>
                    {block.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            className="bg-gradient-to-r from-dull-lavender-500 to-dull-lavender-700 hover:from-dull-lavender-400 hover:to-dull-lavender-600 text-white font-semibold px-12 py-7 text-sm md:text-lg shadow-xl shadow-dull-lavender-500/30 hover:shadow-2xl hover:shadow-dull-lavender-400/40 transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100"
            size="lg"
            onPress={() => router.push('/contact')}
          >
            Comienza tu proyecto ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
