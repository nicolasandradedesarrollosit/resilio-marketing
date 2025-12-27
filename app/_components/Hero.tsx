import { Button } from '@heroui/react';

import Navbar from '@/common/Navbar';

export default function Hero() {
  return (
    <div className="w-full relative" id="header">
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row min-h-screen w-full px-4 md:px-8 lg:px-0">
        <div className="w-full lg:w-1/2 flex justify-center items-center py-8 lg:py-0 mt-24 lg:mt-0">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-dull-lavender-400/30 via-dull-lavender-300/20 to-dull-lavender-500/30 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              alt="Hero"
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-cover rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-dull-lavender-500/50"
              src="/hero-image.png"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 pointer-events-none" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 items-center text-center px-4 py-12 lg:py-0">
          <img
            alt=""
            className="h-16 w-16 sm:h-24 sm:w-24"
            src="/logo-icon.png"
          />
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-white/90 font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight">
              Resilio Life
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/70 font-light">
              Transformamos ideas en experiencias
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 sm:px-0">
            <Button
              className="bg-dull-lavender-400/50 hover:bg-dull-lavender-600/70 text-white/90 transition-all duration-300 w-full sm:w-auto px-8 py-6 text-base sm:text-lg font-medium"
              size="lg"
              variant="ghost"
            >
              Nuestros trabajos
            </Button>
            <Button
              className="bg-white/90 text-dull-lavender-900 hover:bg-white transition-all duration-300 w-full sm:w-auto px-8 py-6 text-base sm:text-lg font-medium"
              size="lg"
              variant="primary"
            >
              Envía un mensaje
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
