import { Card, Button } from '@heroui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Target, Sparkles, Rocket, Gem } from 'lucide-react';

export default function ThirdSection() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description:
        'Entendemos tu visión, objetivos y audiencia para crear una estrategia personalizada.',
      icon: Target,
      color: 'from-dull-lavender-400 to-dull-lavender-500',
    },
    {
      number: '02',
      title: 'Creatividad',
      description:
        'Desarrollamos conceptos únicos que capturan la esencia de tu marca y mensaje.',
      icon: Sparkles,
      color: 'from-dull-lavender-500 to-dull-lavender-600',
    },
    {
      number: '03',
      title: 'Producción',
      description:
        'Ejecutamos con precisión y atención al detalle para dar vida a tu proyecto.',
      icon: Rocket,
      color: 'from-dull-lavender-600 to-dull-lavender-700',
    },
    {
      number: '04',
      title: 'Impacto',
      description:
        'Entregamos resultados que generan engagement y transforman tu presencia digital.',
      icon: Gem,
      color: 'from-dull-lavender-700 to-dull-lavender-800',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div
      className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-black via-dull-lavender-950 to-black"
      id="process"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dull-lavender-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dull-lavender-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dull-lavender-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-dull-lavender-200 to-dull-lavender-400 bg-clip-text text-transparent">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            De la idea a la realidad: así transformamos tu visión en
            experiencias memorables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                className={`relative h-full overflow-hidden cursor-pointer group ${
                  activeStep === index ? 'ring-2 ring-dull-lavender-400' : ''
                }`}
                variant="transparent"
                onClick={() => setActiveStep(index)}
              >
                <div className="relative p-6 h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:border-dull-lavender-400/50 hover:bg-white/10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative flex items-start justify-between mb-4">
                    <span className="text-6xl md:text-7xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                      {step.number}
                    </span>
                    <step.icon
                      className="w-10 h-10 text-dull-lavender-400 group-hover:text-dull-lavender-300 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-dull-lavender-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {activeStep === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dull-lavender-400 to-dull-lavender-600">
                      <div className="h-full bg-white/50 animate-pulse" />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '200+', label: 'Proyectos completados' },
            { value: '98%', label: 'Clientes satisfechos' },
            { value: '5+', label: 'Años de experiencia' },
            { value: '24/7', label: 'Soporte disponible' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-700 hover:bg-white/10 hover:border-dull-lavender-400/50 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-dull-lavender-300 to-dull-lavender-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-dull-lavender-500 to-dull-lavender-700 hover:from-dull-lavender-400 hover:to-dull-lavender-600 text-white font-semibold px-12 py-7 text-lg shadow-xl shadow-dull-lavender-500/30 hover:shadow-2xl hover:shadow-dull-lavender-400/40 transition-all duration-300 hover:scale-105"
            size="lg"
            onPress={handleContact}
          >
            Comienza tu proyecto ahora
          </Button>
        </div>
      </div>
    </div>
  );
}
