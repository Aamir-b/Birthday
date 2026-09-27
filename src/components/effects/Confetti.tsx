import { useEffect, useRef } from 'react';

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  shape: 'rect' | 'circle' | 'heart';
  life: number;
}

interface ConfettiProps {
  active: boolean;
  count?: number;
  duration?: number;
  className?: string;
}

const colors = ['#ff6b9d', '#ffd700', '#ff85b3', '#e63946', '#ffb4d2', '#ff4081', '#fce4ec', '#fff0f6', '#f8bbd0'];

export default function Confetti({ active, count = 120, duration = 6000, className = '' }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const piecesRef = useRef<ConfettiPiece[]>([]);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

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

    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < count; i++) {
      const shapeRand = Math.random();
      pieces.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height * 0.5 - 20,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapeRand < 0.5 ? 'rect' : shapeRand < 0.8 ? 'circle' : 'heart',
        life: 1,
      });
    }
    piecesRef.current = pieces;
    startTimeRef.current = Date.now();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - startTimeRef.current;
      const fade = elapsed > duration - 1000 ? Math.max(0, (duration - elapsed) / 1000) : 1;

      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * fade;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        } else if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const s = p.size / 10;
          ctx.beginPath();
          ctx.moveTo(0, 2 * s);
          ctx.bezierCurveTo(0, 0, -4 * s, 0, -4 * s, 2 * s);
          ctx.bezierCurveTo(-4 * s, 5 * s, 0, 7 * s, 0, 10 * s);
          ctx.bezierCurveTo(0, 7 * s, 4 * s, 5 * s, 4 * s, 2 * s);
          ctx.bezierCurveTo(4 * s, 0, 0, 0, 0, 2 * s);
          ctx.fill();
        }
        ctx.restore();

        if (p.y > canvas.height + 20) {
          p.life = 0;
        }
      });

      if (elapsed < duration) {
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
  }, [active, count, duration]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-40 ${className}`}
    />
  );
}
