'use client';

import { Button } from '@heroui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  description: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: '',
    client: 'Boiler',
    category: 'Motion graphics',
    mediaSrc: '/works/boiler.mp4',
    mediaType: 'video',
    description: 'Motion graphics para la campaña de lanzamiento de Boiler.',
  },
];

const reducedMotionTransition = { duration: 0 };

function MediaRenderer({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (project.mediaType === 'video') {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label={`Video de proyecto: ${project.client} - ${project.category}`}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={project.mediaSrc} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    );
  }

  return (
    <Image
      fill
      alt={project.title || `Proyecto ${project.client} - ${project.category}`}
      className="object-cover"
      priority={priority}
      src={project.mediaSrc}
    />
  );
}

// ─── Desktop Accordion ────────────────────────────────────────────────────────

function DesktopAccordion({
  projects,
  onContact,
}: {
  projects: Project[];
  onContact: () => void;
}) {
  const [expandedId, setExpandedId] = useState<number>(projects[0].id);

  const toggle = (id: number) => {
    setExpandedId(prev => (prev === id ? -1 : id));
  };

  return (
    <div
      className="hidden md:flex gap-2 w-full"
      role="tablist"
      style={{ height: '65vh', maxHeight: 520 }}
    >
      {projects.map((project, i) => {
        const isExpanded = expandedId === project.id;

        return (
          <motion.div
            key={project.id}
            animate={{ flex: isExpanded ? 5 : 1 }}
            aria-expanded={isExpanded}
            aria-label={`Proyecto ${project.client}`}
            className="relative overflow-hidden rounded-2xl cursor-pointer shadow-lg group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dull-lavender-400"
            role="tab"
            style={{ minWidth: 56 }}
            tabIndex={0}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => toggle(project.id)}
            onKeyDown={e => e.key === 'Enter' && toggle(project.id)}
          >
            {/* Media */}
            <MediaRenderer priority={i === 0} project={project} />

            {/* Gradient only behind text, not covering media */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"
            />

            {/* Collapsed label (rotated title) */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="text-white font-semibold text-sm whitespace-nowrap tracking-wider"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {project.client}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-3"
                  exit={{ opacity: 0, y: 16 }}
                  initial={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                >
                  <div>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-widest mb-1">
                      {project.client} · {project.category}
                    </p>
                    <h3 className="text-white text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <Button
                    className="bg-white/15 hover:bg-white hover:text-black text-white border-white/40 border backdrop-blur-md transition-all duration-300 w-fit font-medium"
                    size="sm"
                    variant="tertiary"
                    onPress={() => {
                      onContact();
                    }}
                  >
                    Escribenos!
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Mobile Accordion ─────────────────────────────────────────────────────────

function MobileAccordion({
  projects,
  onContact,
}: {
  projects: Project[];
  onContact: () => void;
}) {
  const [expandedId, setExpandedId] = useState<number>(-1);

  const toggle = (id: number) => {
    setExpandedId(prev => (prev === id ? -1 : id));
  };

  return (
    <div className="flex md:hidden flex-col gap-3 w-full">
      {projects.map(project => {
        const isExpanded = expandedId === project.id;

        return (
          <div
            key={project.id}
            className="rounded-2xl overflow-hidden shadow-md bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {/* Header */}
            <button
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Contraer' : 'Expandir'} proyecto ${project.client}`}
              className="w-full flex items-center justify-between px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dull-lavender-400"
              onClick={() => toggle(project.id)}
            >
              <div>
                <p className="text-dull-lavender-300 text-xs font-medium uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="text-white font-bold text-base leading-tight">
                  {project.client}
                </h3>
              </div>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                aria-hidden="true"
                className="shrink-0 ml-3 text-white/50"
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="content"
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="relative h-48 w-full">
                    <MediaRenderer project={project} />
                  </div>
                  <div className="px-5 py-4 flex flex-col gap-3">
                    <p className="text-white/70 text-sm">
                      {project.description}
                    </p>
                    <Button
                      className="bg-dull-lavender-600 hover:bg-dull-lavender-700 text-white transition-all duration-300 w-full font-medium"
                      size="sm"
                      variant="primary"
                      onPress={onContact}
                    >
                      Escribenos!
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function SecondSection() {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="relative flex flex-col w-full min-h-[70vh] items-center justify-center py-16 md:py-20 overflow-hidden"
      id="portfolio"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-10 w-64 h-64 bg-dull-lavender-500/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 left-10 w-80 h-80 bg-dull-lavender-400/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none delay-1000"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dull-lavender-600/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-dull-lavender-200 to-dull-lavender-400 bg-clip-text text-transparent"
            id="portfolio-heading"
          >
            Proyectos
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-dull-lavender-400 to-dull-lavender-600 rounded-full mb-3"
          />
          <p className="text-xs md:text-lg text-white/60 font-medium">
            Portfolio empresarial de nuestros partners y clientes
          </p>
        </div>

        {/* Accordions */}
        <DesktopAccordion projects={mockProjects} onContact={handleContact} />
        <MobileAccordion projects={mockProjects} onContact={handleContact} />
      </div>
    </section>
  );
}
