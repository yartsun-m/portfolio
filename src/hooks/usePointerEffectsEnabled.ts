import { useEffect, useState } from 'react';

export function usePointerEffectsEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setEnabled(!coarse.matches && !reduced.matches);
    };

    update();
    coarse.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      coarse.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);

  return enabled;
}
