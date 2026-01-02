'use client';

import { useRouter } from 'next/navigation';

export default function GoBack({ url }: { url: string }) {
  const router = useRouter();

  return (
    <button
      className="absolute cursor-pointer top-6 left-6 flex items-center gap-1 sm:gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
      onClick={() => {
        router.push(url);
      }}
    >
      <svg
        className="w-3 h-3 sm:h-5 w-5 text-gray-700 group-hover:text-black transition-colors"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 19l-7-7 7-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
        Volver
      </span>
    </button>
  );
}
