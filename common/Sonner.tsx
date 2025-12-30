'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Toaster as SonnerToaster, ToasterProps } from 'sonner';
import { CircleCheck, Info, Loader2, Octagon, Triangle } from 'lucide-react';

export const Toaster = (props: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <SonnerToaster
      className="toaster group"
      icons={{
        success: <CircleCheck className="h-4 w-4" />,
        info: <Info className="h-4 w-4" />,
        warning: <Triangle className="h-4 w-4" />,
        error: <Octagon className="h-4 w-4" />,
        loading: <Loader2 className="h-4 w-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      theme={theme as ToasterProps['theme']}
      {...props}
    />
  );
};

export default Toaster;
