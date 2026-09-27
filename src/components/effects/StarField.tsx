import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  alphaSpeed: number;
  color: string;
}

interface StarFieldProps {
  count?: number;
  className?: string;
  shootingStars?: boolean;
  hearts?: boolean;
  heartsCount?: number;
}

export default function StarField({ count = 80, className = '', shootingStars = true, hearts = false, heartsCount = 15 }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const parent = canvasRef.current?.parentElement;
      if (parent) {
        setDimensions({ width: parent.offsetWidth, height: parent.offsetHeight });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particles: Particle[] = [];
    const colors = ['#ffffff', '#fff0f6', '#ffd6e8', '#ffe4f0'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        alphaSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const heartParticles: Particle[] = [];
    if (hearts) {
      for (let i = 0; i < heartsCount; i++) {
        heartParticles.push({
          x: Math.random() * dimensions.width,
          y: dimensions.height + Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(Math.random() * 0.5 + 0.2),
          size: Math.random() * 6 + 4,
          alpha: Math.random() * 0.5 + 0.3,
          alphaSpeed: 0,
          color: '#ff6b9d',
        });
      }
    }

    let shootingStar: { x: number; y: number; vx: number; vy: number; life: number } | null = null;

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0 || p.alpha >= 1) p.alphaSpeed *= -1;
        if (p.x < 0) p.x = dimensions.width;
        if (p.x > dimensions.width) p.x = 0;
        if (p.y < 0) p.y = dimensions.height;
        if (p.y > dimensions.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.8;
        ctx.fill();
      });

      if (hearts) {
        ctx.globalAlpha = 1;
        heartParticles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -20) {
            p.y = dimensions.height + 20;
            p.x = Math.random() * dimensions.width;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.scale(p.size / 10, p.size / 10);
          ctx.beginPath();
          ctx.moveTo(0, 3);
          ctx.bezierCurveTo(0, 0, -5, 0, -5, 3);
          ctx.bezierCurveTo(-5, 6, 0, 9, 0, 12);
          ctx.bezierCurveTo(0, 9, 5, 6, 5, 3);
          ctx.bezierCurveTo(5, 0, 0, 0, 0, 3);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.restore();
        });
      }

      if (shootingStars && !shootingStar && Math.random() < 0.003) {
        shootingStar = {
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height * 0.4,
          vx: Math.random() * 4 + 3,
          vy: Math.random() * 2 + 1,
          life: 1,
        };
      }

      if (shootingStar) {
        ctx.globalAlpha = shootingStar.life;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.vx * 8, shootingStar.y - shootingStar.vy * 8);
        ctx.stroke();

        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life -= 0.02;

        if (shootingStar.life <= 0 || shootingStar.x > dimensions.width) {
          shootingStar = null;
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [dimensions, count, hearts, heartsCount, shootingStars]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
