import { useRef, useEffect } from 'react';

export const useFlasher = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.setAttribute(
      'style',
      'box-shadow: 0 0 2px 1px orange; transition: box-shadow 100ms ease-out;',
    );
    setTimeout(() => {
      if (!ref.current) return;
      ref.current.setAttribute('style', '');
    }, 300);
  });
  return ref as any; // FIXME how can we properly type this?
};
