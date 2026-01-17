import Image from 'next/image';
import Link from 'next/link';

interface EventComponentProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  href: string;
}

export default function EventComponent({
  title,
  description,
  date,
  location,
  image,
  href,
}: EventComponentProps) {
  return (
    <Link className="block w-full" href={href}>
      <div
        className={`group relative overflow-hidden 
                /* Mobile: Linktree style - compact horizontal card */
                rounded-xl md:rounded-2xl 
                bg-gradient-to-br from-dull-lavender-900/20 to-dull-lavender-900/30 
                p-4 md:p-6 lg:p-8 
                backdrop-blur-sm border border-white/10 
                hover:border-dull-lavender-400/50 hover:scale-[1.02]
                active:scale-[0.98]
                transition-all duration-300 
                hover:shadow-lg hover:shadow-dull-lavender-500/20`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-4 h-full">
          <div className="relative p-2 md:p-2.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
            <Image
              alt={title}
              className="h-6 w-6 md:h-8 md:w-8"
              height={32}
              src={image}
              width={32}
            />
          </div>

          <div className="flex-1 min-w-0 text-left md:w-full">
            <div className="flex flex-col md:flex-col-reverse gap-1 md:gap-2">
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold md:font-bold text-white group-hover:text-white transition-colors truncate md:line-clamp-2 md:whitespace-normal">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2 text-[10px] md:text-xs">
                <span className="font-medium text-dull-lavender-300/80 md:text-white/70 md:px-3 md:py-1 md:rounded-full md:bg-white/10 md:group-hover:text-white/90 md:group-hover:bg-white/15 transition-all">
                  {new Date(date).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                {location && (
                  <span className="flex items-center gap-1 font-medium text-dull-lavender-300/80 md:text-white/70 md:px-3 md:py-1 md:rounded-full md:bg-white/10 md:group-hover:text-white/90 md:group-hover:bg-white/15 transition-all">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    {location}
                  </span>
                )}
              </div>
            </div>

            <p className="hidden md:block mt-3 text-sm lg:text-base text-white/70 group-hover:text-white/80 transition-colors line-clamp-3">
              {description}
            </p>
          </div>

          <div className="md:hidden shrink-0">
            <svg
              className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>

          <div className="hidden md:flex items-end justify-between pt-2 mt-auto w-full">
            <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
              Ver evento
            </div>
            <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white text-white group-hover:text-dull-lavender-900 transition-all duration-300">
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-300" />
      </div>
    </Link>
  );
}
