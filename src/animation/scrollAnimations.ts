import gsap from 'gsap';

/**
 * Reusable animation primitives for Maya Garh progressive motion design.
 * All animations are bound strictly to hardware-accelerated CSS properties.
 */

export const animateClipReveal = (
  element: HTMLElement | string,
  vars: gsap.TweenVars = {}
): gsap.core.Tween => {
  return gsap.fromTo(
    element,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.2,
      ease: 'power3.out',
      ...vars,
    }
  );
};

export const animateParallax = (
  element: HTMLElement | string,
  speed: number = 0.5,
  vars: gsap.TweenVars = {}
): gsap.core.Tween => {
  return gsap.to(element, {
    yPercent: speed * 20,
    ease: 'none',
    ...vars,
  });
};

export const animateTextFade = (
  element: HTMLElement | string,
  vars: gsap.TweenVars = {}
): gsap.core.Tween => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power2.out',
      ...vars,
    }
  );
};

export const animateDollyZoom = (
  element: HTMLElement | string,
  vars: gsap.TweenVars = {}
): gsap.core.Tween => {
  return gsap.fromTo(
    element,
    { scale: 1.08 },
    {
      scale: 1.0,
      duration: 2.0,
      ease: 'power2.out',
      ...vars,
    }
  );
};
