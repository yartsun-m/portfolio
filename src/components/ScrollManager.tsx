import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type LocationState = {
  scrollTo?: string;
};

export default function ScrollManager() {
  const { pathname, hash, state } = useLocation();
  const navigate = useNavigate();
  const lastHandled = useRef('');

  useEffect(() => {
    const handleKey = `${pathname}|${hash}|${JSON.stringify(state ?? null)}`;
    if (lastHandled.current === handleKey) return;

    if (pathname.startsWith('/projects/')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      lastHandled.current = handleKey;
      return;
    }

    if (pathname !== '/') return;

    const stateTarget = (state as LocationState | null)?.scrollTo;
    const hashTarget = hash ? hash.slice(1) : null;
    const target = stateTarget ?? hashTarget;
    if (!target) return;

    const timer = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      lastHandled.current = handleKey;

      if (stateTarget) {
        navigate('/', { replace: true, state: null });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [pathname, hash, state, navigate]);

  return null;
}
