'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function HoverNavbar() {
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    opacity: 0,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#' },
    { name: 'Proyectos', href: '#' },
    { name: 'Contacto', href: '#' },
  ];

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const container = link.parentElement as any;

    const linkRect = link.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setIndicatorStyle({
      width: linkRect.width,
      height: linkRect.height,
      left: linkRect.left - containerRect.left,
      top: linkRect.top - containerRect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="absolute inset-x-0 top-6 flex items-start justify-center py-4 bg-transparent pointer-events-none">
      <nav className="pointer-events-auto hidden md:block bg-black px-6 py-2 rounded-full shadow-2xl">
        <div
          className="flex gap-4 lg:gap-8 relative items-center"
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl pointer-events-none transition-all duration-300 ease-out"
            style={{
              width: `${indicatorStyle.width}px`,
              height: `${indicatorStyle.height}px`,
              left: `${indicatorStyle.left}px`,
              top: `${indicatorStyle.top}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
          {navBarItems.map((items, index) => (
            <a
              key={index}
              className="text-white text-sm lg:text-md font-medium px-3 lg:px-4 py-2 relative z-10 transition-colors duration-300 hover:text-white whitespace-nowrap"
              href={items.href}
              onMouseEnter={handleMouseEnter}
            >
              {items.name}
            </a>
          ))}
        </div>
      </nav>

      <nav className="pointer-events-auto md:hidden bg-black rounded-3xl shadow-2xl w-[90%] max-w-md">
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-white font-bold text-lg">Menu</span>
          <button
            className="text-white p-2 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
            {navBarItems.map((items, index) => (
              <a
                key={index}
                className="text-white text-md font-medium px-4 py-3 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                href={items.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {items.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
