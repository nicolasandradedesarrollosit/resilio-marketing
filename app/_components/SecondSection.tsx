import { Card, Button } from '@heroui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const mockProjects = [
  {
    id: 1,
    title: 'Plataforma E-commerce',
    client: 'TechStore SA',
    category: 'Desarrollo Web',
    imageSrc:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
  },
  {
    id: 2,
    title: 'App Mobile Banking',
    client: 'Banco Digital',
    category: 'Mobile App',
    imageSrc:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
  {
    id: 3,
    title: 'Sistema de Gestión',
    client: 'Logística Pro',
    category: 'Software',
    imageSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    client: 'DataViz Corp',
    category: 'Data Science',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 5,
    title: 'Portal Educativo',
    client: 'EduTech',
    category: 'E-learning',
    imageSrc:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
  },
  {
    id: 6,
    title: 'App de Delivery',
    client: 'FastFood Group',
    category: 'Mobile App',
    imageSrc:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80',
  },
];

export default function SecondSection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % mockProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleContact = () => {
    router.push('/contact');
  };

  const getTransform = () => {
    return `translateX(-${currentIndex * 100}%)`;
  };

  const getTransformDesktop = () => {
    return `translateX(-${currentIndex * (100 / 3)}%)`;
  };

  return (
    <div
      className="relative flex flex-col w-full min-h-[70vh] items-center justify-center py-16 md:py-20 overflow-hidden"
      id="portfolio"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-dull-lavender-50 to-dull-lavender-100" />

      <div className="absolute top-10 right-10 w-64 h-64 bg-dull-lavender-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-dull-lavender-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dull-lavender-100/40 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-dull-lavender-700 via-dull-lavender-600 to-dull-lavender-500 bg-clip-text text-transparent">
            Proyectos
          </h1>
          <span className="text-base md:text-lg lg:text-xl text-dull-lavender-900/70 font-medium">
            Portfolio empresarial de nuestros partners y clientes
          </span>
        </div>

        <div
          className="block md:hidden relative w-full overflow-hidden mx-auto"
          style={{ maxWidth: '100vw' }}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: getTransform(),
            }}
          >
            {mockProjects.concat(mockProjects).map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 px-2"
                style={{ width: '100%', minWidth: '100%' }}
              >
                <Card
                  className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variant="transparent"
                >
                  <img
                    alt={project.title}
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    src={project.imageSrc}
                  />
                  <Card.Footer className="z-10 mt-auto flex flex-col rounded-3xl items-start gap-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5">
                    <div className="w-full">
                      <h3
                        className="text-base font-bold text-white mb-1.5"
                        style={{ textShadow: '3px 3px 5px rgba(0,0,0,1)' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-white/90"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,1)' }}
                      >
                        {project.client} • {project.category}
                      </p>
                    </div>
                    <Button
                      className="bg-white/15 hover:bg-white hover:text-black text-white border-white/40 border backdrop-blur-md transition-all duration-300 w-full font-medium"
                      size="sm"
                      variant="tertiary"
                      onPress={handleContact}
                    >
                      Escríbenos!
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block relative w-full overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-out px-1"
            style={{
              transform: getTransformDesktop(),
            }}
          >
            {mockProjects.concat(mockProjects).map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: 'calc((100% - 48px) / 3)' }}
              >
                <Card
                  className="relative h-72 lg:h-80 w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variant="transparent"
                >
                  <img
                    alt={project.title}
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    src={project.imageSrc}
                  />
                  <Card.Footer className="z-10 mt-auto flex flex-col rounded-3xl items-start gap-2 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <div className="w-full">
                      <h3
                        className="text-sm font-semibold text-white mb-1"
                        style={{ textShadow: '3px 3px 5px rgba(0,0,0,1)' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-xs text-white/80"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,1)' }}
                      >
                        {project.client} • {project.category}
                      </p>
                    </div>
                    <Button
                      className="bg-white/10 hover:bg-white hover:text-black text-white border-white/30 border backdrop-blur-sm transition-all duration-300 w-full"
                      size="sm"
                      variant="tertiary"
                      onPress={handleContact}
                    >
                      Escríbenos!
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 md:mt-10">
          {mockProjects.map((_, index) => (
            <button
              key={index}
              aria-label={`Ir al proyecto ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-dull-lavender-700 w-8'
                  : 'bg-dull-lavender-400/50 w-2 hover:bg-dull-lavender-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
