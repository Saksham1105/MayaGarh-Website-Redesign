'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface UseGSAPContextOptions {
  scope?: React.RefObject<HTMLElement | null>;
}

/**
 * Custom hook managing GSAP Context lifecycle, ScrollTrigger cleanup,
 * and media query reduced motion checks.
 */
export const useGSAPContext = (
  animationCallback: (ctx: gsap.Context) => void,
  options: UseGSAPContextOptions = {}
) => {
  const { scope } = options;
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const targetElement = scope?.current || undefined;

    ctxRef.current = gsap.context((context) => {
      animationCallback(context);
    }, targetElement);

    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  return ctxRef;
};
