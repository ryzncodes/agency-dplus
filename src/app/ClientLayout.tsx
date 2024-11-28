'use client';

import Lenis from 'lenis';
import { useEffect, useState } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dimension, setDimension] = useState<any>(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resize);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}