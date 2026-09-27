import { useEffect, useRef } from 'react';

interface Sparkle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
}

interface SparklesProps {
  active?: boolean;
  count?: number;
  className?: string;
  burst?: boolean;
}

export default function Sparkles({ active = true, count = 30, className = '', burst = false }: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const sparkles: Sparkle[] = [];
    const spawnSparkle = () => {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        life: 0,
        maxLife: Math.random() * 60 + 30,
        vx: burst ? (Math.random() - 0.5) * 3 : 0,
        vy: burst ? (Math.random() - 0.5) * 3 : 0,
      });
    };

    for (let i = 0; i < count; i++) spawnSparkle();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        if (burst) {
          s.vx *= 0.97;
          s.vy *= 0.97;
        }
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

        const size = s.size * (1 + Math.sin(s.life * 0.3) * 0.3);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffd6e8';
        ctx.shadowBlur = 10;

        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
        ctx.fill();

        if (s.life >= s.maxLife) {
          if (!burst) {
            sparkles.splice(i, 1);
            spawnSparkle();
          } else {
            sparkles.splice(i, 1);
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [active, count, burst]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
