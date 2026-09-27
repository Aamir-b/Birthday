import { useEffect, useRef } from 'react';

interface Heart {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  color: string;
}

interface HeartExplosionProps {
  active: boolean;
  className?: string;
  duration?: number;
}

const heartColors = ['#ff6b9d', '#ff85b3', '#e63946', '#ffb4d2', '#ff4081'];

export default function HeartExplosion({ active, className = '', duration = 4000 }: HeartExplosionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const heartsRef = useRef<Heart[]>([]);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    startTimeRef.current = Date.now();
    heartsRef.current = [];

    const spawnHearts = () => {
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        heartsRef.current.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 100,
          y: canvas.height / 2 + (Math.random() - 0.5) * 100,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          size: Math.random() * 15 + 10,
          life: 1,
          color: heartColors[Math.floor(Math.random() * heartColors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - startTimeRef.current;

      if (elapsed < duration && Math.random() < 0.5) {
        spawnHearts();
      }

      heartsRef.current = heartsRef.current.filter((h) => h.life > 0);
      heartsRef.current.forEach((h) => {
        h.x += h.vx;
        h.y += h.vy;
        h.vy += 0.02;
        h.life -= 0.008;

        ctx.save();
        ctx.translate(h.x, h.y);
        ctx.scale(h.size / 10, h.size / 10);
        ctx.globalAlpha = h.life;
        ctx.fillStyle = h.color;
        ctx.beginPath();
        ctx.moveTo(0, 3);
        ctx.bezierCurveTo(0, 0, -5, 0, -5, 3);
        ctx.bezierCurveTo(-5, 6, 0, 9, 0, 12);
        ctx.bezierCurveTo(0, 9, 5, 6, 5, 3);
        ctx.bezierCurveTo(5, 0, 0, 0, 0, 3);
        ctx.fill();
        ctx.restore();
      });

      if (elapsed < duration + 2000 && (heartsRef.current.length > 0 || elapsed < duration)) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animate();
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [active, duration]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-30 ${className}`}
    />
  );
}
