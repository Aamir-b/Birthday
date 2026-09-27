import { useEffect, useRef } from 'react';

interface Balloon {
  x: number;
  y: number;
  vy: number;
  size: number;
  color: string;
  sway: number;
  swaySpeed: number;
  swayOffset: number;
}

interface BalloonsProps {
  active: boolean;
  count?: number;
  className?: string;
}

const colors = ['#ff6b9d', '#ff85b3', '#e63946', '#ffb4d2', '#ff4081', '#f8bbd0', '#ffd1dc'];

export default function Balloons({ active, count = 15, className = '' }: BalloonsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

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

    const balloons: Balloon[] = [];
    for (let i = 0; i < count; i++) {
      balloons.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 300,
        vy: -(Math.random() * 1 + 0.5),
        size: Math.random() * 20 + 25,
        color: colors[Math.floor(Math.random() * colors.length)],
        sway: Math.random() * 20,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balloons.forEach((b) => {
        b.y += b.vy;
        b.swayOffset += b.swaySpeed;
        const x = b.x + Math.sin(b.swayOffset) * b.sway;

        // Balloon body
        ctx.save();
        ctx.translate(x, b.y);
        ctx.beginPath();
        ctx.ellipse(0, 0, b.size * 0.45, b.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = 0.85;
        ctx.fill();

        // Highlight
        ctx.beginPath();
        ctx.ellipse(-b.size * 0.15, -b.size * 0.2, b.size * 0.1, b.size * 0.18, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fill();

        // Knot
        ctx.beginPath();
        ctx.moveTo(-3, b.size * 0.5);
        ctx.lineTo(3, b.size * 0.5);
        ctx.lineTo(0, b.size * 0.6);
        ctx.closePath();
        ctx.fillStyle = b.color;
        ctx.fill();

        // String
        ctx.beginPath();
        ctx.moveTo(0, b.size * 0.6);
        ctx.bezierCurveTo(
          Math.sin(b.swayOffset) * 5, b.size + 20,
          Math.sin(b.swayOffset + 1) * 8, b.size + 40,
          0, b.size + 60
        );
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        if (b.y < -b.size - 80) {
          b.y = canvas.height + 50;
          b.x = Math.random() * canvas.width;
        }
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [active, count]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-30 ${className}`}
    />
  );
}
