import { useEffect, useState } from 'react';
import { usePointerEffectsEnabled } from '@/hooks/usePointerEffectsEnabled';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary, [tabindex]:not([tabindex="-1"])';

type CrosshairState = {
  x: number;
  y: number;
  rect: DOMRect | null;
  visible: boolean;
};

const HIDDEN: CrosshairState = { x: 0, y: 0, rect: null, visible: false };

function ElementBrackets({ rect }: { rect: DOMRect }) {
  const pad = 5;
  const l = rect.left - pad;
  const t = rect.top - pad;
  const r = rect.right + pad;
  const b = rect.bottom + pad;
  const len = 9;

  const corners = [
    { left: l, top: t, borders: 'border-t border-l' },
    { left: r - len, top: t, borders: 'border-t border-r' },
    { left: l, top: b - len, borders: 'border-b border-l' },
    { left: r - len, top: b - len, borders: 'border-b border-r' },
  ];

  return (
    <>
      {corners.map((corner, i) => (
        <span
          key={i}
          className={`absolute border-cyan-400/75 ${corner.borders}`}
          style={{ left: corner.left, top: corner.top, width: len, height: len }}
        />
      ))}
    </>
  );
}

export default function CrosshairHover() {
  const enabled = usePointerEffectsEnabled();
  const [state, setState] = useState<CrosshairState>(HIDDEN);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) {
        setState(HIDDEN);
        return;
      }

      const interactive = target.closest(INTERACTIVE_SELECTOR);
      if (!interactive || interactive.closest('[data-no-crosshair]')) {
        setState(HIDDEN);
        return;
      }

      setState({
        x: e.clientX,
        y: e.clientY,
        rect: interactive.getBoundingClientRect(),
        visible: true,
      });
    };

    const onLeave = () => setState(HIDDEN);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  if (!enabled || !state.visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[200]" aria-hidden="true">
      {state.rect && <ElementBrackets rect={state.rect} />}

      <svg
        className="absolute text-cyan-400/80"
        style={{ left: state.x, top: state.y, transform: 'translate(-50%, -50%)' }}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.65" />
        <line x1="24" y1="4" x2="24" y2="14" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.55" />
        <line x1="24" y1="34" x2="24" y2="44" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.55" />
        <line x1="4" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.55" />
        <line x1="34" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.55" />
        <circle cx="24" cy="24" r="1.25" fill="currentColor" fillOpacity="0.85" />
      </svg>
    </div>
  );
}
