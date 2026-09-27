import { useEffect, useRef } from 'react';

interface Firework {
  x: number;
  y: number;
  particles: { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number }[];
  exploded: boolean;
  color: string;
  vy: number;
}

interface FireworksProps {
  active: boolean;
  className?: string;
  duration?: number;
}

const colors = ['#ff6b9d', '#ffd700', '#ff85b3', '#e63946', '#ffb4d2', '#ff4081', '#fce4ec', '#fff'];

export default function Fireworks({ active, className = '', duration = 12000 }: FireworksProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const fireworksRef = useRef<Firework[]>([]);
  const startTimeRef = useRef(0);
  const lastLaunchRef = useRef(0);

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
    fireworksRef.current = [];

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - startTimeRef.current;

      if (elapsed - lastLaunchRef.current > 400 + Math.random() * 600 && elapsed < duration) {
        lastLaunchRef.current = elapsed;
        const color = colors[Math.floor(Math.random() * colors.length)];
        fireworksRef.current.push({
          x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
          y: canvas.height,
          particles: [],
          exploded: false,
          color,
          vy: -(Math.random() * 4 + 6),
        });
      }

      fireworksRef.current.forEach((fw, idx) => {
        if (!fw.exploded) {
          fw.y += fw.vy;
          fw.vy += 0.08;
          ctx.beginPath();
          ctx.arc(fw.x, fw.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = fw.color;
          ctx.fill();

          if (fw.vy >= 0 || fw.y < canvas.height * 0.3) {
            fw.exploded = true;
            const particleCount = 40 + Math.floor(Math.random() * 20);
            for (let i = 0; i < particleCount; i++) {
              const angle = (Math.PI * 2 * i) / particleCount;
              const speed = Math.random() * 3 + 2;
              fw.particles.push({
                x: fw.x,
                y: fw.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                color: fw.color,
                size: Math.random() * 2 + 1,
              });
            }
          }
        } else {
          fw.particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.03;
            p.vx *= 0.99;
            p.life -= 0.015;

            if (p.life > 0) {
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fillStyle = p.color;
              ctx.globalAlpha = p.life;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
          });

          if (fw.particles.every((p) => p.life <= 0)) {
            fireworksRef.current.splice(idx, 1);
          }
        }
      });

      if (elapsed < duration + 3000) {
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
