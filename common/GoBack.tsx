'use client';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export default function GoBack({ url }: { url: string }) {
  const router = useRouter();

  return (
    <Button
      aria-label="Volver a la página anterior"
      className="absolute z-50 cursor-pointer top-6 left-6 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100 group"
      variant="ghost"
      onPress={() => {
        router.push(url);
      }}
    >
      <svg
        aria-hidden="true"
        className="w-3 h-3 sm:h-5 sm:w-5 text-gray-700 group-hover:text-black transition-colors"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
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
    </Button>
  );
}
