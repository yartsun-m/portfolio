import { useEffect, useRef } from 'react';
import { usePointerEffectsEnabled } from '@/hooks/usePointerEffectsEnabled';

const MAJOR = 32;
const MINOR = 8;
const WARP_RADIUS = 190;
const WARP_STRENGTH = 0.14;
const LINE_STEP = 5;

function displace(x: number, y: number, mx: number, my: number) {
  const dx = x - mx;
  const dy = y - my;
  const dist = Math.hypot(dx, dy);
  if (dist > WARP_RADIUS || dist < 0.001) return { x, y };

  const t = 1 - dist / WARP_RADIUS;
  const scale = 1 + t * t * WARP_STRENGTH;
  return { x: mx + dx * scale, y: my + dy * scale };
}

function drawVerticalLine(
  ctx: CanvasRenderingContext2D,
  x: number,
  h: number,
  color: string,
  warp: boolean,
  mx: number,
  my: number
) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let y = 0; y <= h; y += LINE_STEP) {
    const p = warp ? displace(x, y, mx, my) : { x, y };
    if (y === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
}

function drawHorizontalLine(
  ctx: CanvasRenderingContext2D,
  y: number,
  w: number,
  color: string,
  warp: boolean,
  mx: number,
  my: number
) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x <= w; x += LINE_STEP) {
    const p = warp ? displace(x, y, mx, my) : { x, y };
    if (x === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
}

export default function BlueprintGridWarp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const enabled = usePointerEffectsEnabled();
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let idleTimer = 0;
    let running = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(false);
    };

    const drawFrame = (warp: boolean) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { x: mx, y: my, active } = mouse.current;
      const applyWarp = warp && active;

      ctx.clearRect(0, 0, w, h);

      for (let x = 0; x <= w; x += MAJOR) {
        drawVerticalLine(ctx, x, h, 'rgba(34, 211, 238, 0.11)', applyWarp, mx, my);
      }
      for (let y = 0; y <= h; y += MAJOR) {
        drawHorizontalLine(ctx, y, w, 'rgba(34, 211, 238, 0.11)', applyWarp, mx, my);
      }

      for (let x = 0; x <= w; x += MINOR) {
        if (x % MAJOR === 0) continue;
        drawVerticalLine(ctx, x, h, 'rgba(34, 211, 238, 0.04)', applyWarp, mx, my);
      }
      for (let y = 0; y <= h; y += MINOR) {
        if (y % MAJOR === 0) continue;
        drawHorizontalLine(ctx, y, w, 'rgba(34, 211, 238, 0.04)', applyWarp, mx, my);
      }

      if (applyWarp) {
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, WARP_RADIUS);
        glow.addColorStop(0, 'rgba(34, 211, 238, 0.07)');
        glow.addColorStop(0.45, 'rgba(34, 211, 238, 0.02)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mx, my, WARP_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      drawFrame(enabled);
      if (running) raf = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!enabled || running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(raf);
      drawFrame(false);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY, active: true };
      if (enabled) {
        startLoop();
        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(() => {
          mouse.current.active = false;
          stopLoop();
        }, 1200);
      }
    };

    const onLeave = () => {
      mouse.current.active = false;
      stopLoop();
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    if (!enabled) drawFrame(false);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
