import { Suspense, lazy, useEffect, useState } from 'react';
import { usePointerEffectsEnabled } from '@/hooks/usePointerEffectsEnabled';

const WireframeSchematicScene = lazy(() => import('./WireframeSchematicScene'));

export default function BlueprintWireframe3D() {
  const enabled = usePointerEffectsEnabled();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const mount = () => setMounted(true);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(mount, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(mount, 300);
    return () => window.clearTimeout(id);
  }, [enabled]);

  if (!enabled || !mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none opacity-70">
      <Suspense fallback={null}>
        <WireframeSchematicScene />
      </Suspense>
    </div>
  );
}
