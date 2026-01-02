import { Card, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FirstSection() {
  const router = useRouter();

  const cardsData = [
    {
      imageSrc: '/service-1.png',
      title: 'Servicio de fotografía',
    },
    {
      imageSrc: '/service-2.png',
      title: 'Producción de eventos',
    },
    {
      imageSrc: '/service-3.png',
      title: 'Diseño gráfico',
    },
    {
      imageSrc: '/service-4.png',
      title: 'Administración de redes sociales',
    },
  ];

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div
      className="w-full min-h-[60vh] py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 flex flex-col gap-6 bg-black items-center"
      id="services"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dull-lavender-400 text-center max-w-4xl">
        Nuestros servicios
      </h1>
      <span className="text-base md:text-lg text-white/70 text-center max-w-2xl">
        Descubre lo que ofrecemos para ti
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 w-full max-w-7xl">
        {cardsData.map((card, index) => (
          <Card
            key={`${index}-${card.title}`}
            className="relative h-64 md:h-72 lg:h-80 w-full overflow-hidden rounded-lg"
            variant="transparent"
          >
            <Image
              alt={card.title}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
              height={320}
              src={card.imageSrc}
              width={400}
            />
            <Card.Footer className="z-10 mt-auto flex flex-col rounded-3xl items-start gap-2 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="w-full">
                <h3
                  className="text-sm font-semibold text-white"
                  style={{ textShadow: '3px 3px 5px rgba(0,0,0,1)' }}
                >
                  {card.title}
                </h3>
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
        ))}
      </div>
    </div>
  );
}
