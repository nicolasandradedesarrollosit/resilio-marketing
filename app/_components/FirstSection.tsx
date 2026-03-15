import { Card, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FirstSection() {
  const router = useRouter();

  const cardsData = [
    { imageSrc: '/services/fotografia.png', title: 'Fotografía y video' },
    { imageSrc: '/services/produccion.png', title: 'Producción de eventos' },
    { imageSrc: '/services/diseño-grafico.png', title: 'Diseño gráfico' },
    { imageSrc: '/services/3d.png', title: 'Modelado y renderizado 3D' },
    { imageSrc: '/services/redes-sociales.png', title: 'Redes sociales' },
    { imageSrc: '/services/motion.jpg', title: 'Visuals & Motion graphics' },
    {
      imageSrc: '/services/programacion.jpg',
      title: 'Programación y software',
    },
    { imageSrc: '/services/ai.jpg', title: 'IA' },
    { imageSrc: '/services/scouting.jpg', title: 'Scouting e influencers' },
  ];

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div
      className="w-full min-h-[60vh] py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 flex flex-col gap-6 items-center"
      id="services"
    >
      <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-dull-lavender-200 to-dull-lavender-400 bg-clip-text text-transparent text-center">
        Nuestros servicios
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-dull-lavender-400 to-dull-lavender-600 rounded-full mb-3" />
      <span className="text-xs md:text-lg text-white/60 font-medium text-center max-w-2xl">
        Descubre lo que ofrecemos para ti
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 w-full max-w-7xl">
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
