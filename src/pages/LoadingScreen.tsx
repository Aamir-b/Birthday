import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 40);

    const t1 = setTimeout(() => setPhase(1), 2500);
    const t2 = setTimeout(() => onComplete(), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center romantic-bg px-6"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-20 h-20 sm:w-24 sm:h-24"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 21s-6.5-4.35-9.5-8.5C0.5 9.5 2 5.5 5.5 5.5c2 0 3.5 1.5 6.5 4.5 3-3 4.5-4.5 6.5-4.5 3.5 0 5 4 3 7-3 4.15-9.5 8.5-9.5 8.5z"
                fill="url(#heartGrad)"
                style={{ filter: 'drop-shadow(0 0 15px rgba(255,107,157,0.6))' }}
              />
              <defs>
                <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff6b9d" />
                  <stop offset="100%" stopColor="#e63946" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ boxShadow: ['0 0 20px rgba(255,107,157,0.3)', '0 0 50px rgba(255,107,157,0.6)', '0 0 20px rgba(255,107,157,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="font-dancing text-xl sm:text-2xl text-pink-200 text-center text-glow-pink"
          >
            {phase === 0
              ? 'Preparing something beautiful for you... ❤️'
              : 'Just a little longer... ✨'}
          </motion.p>
        </AnimatePresence>

        <div className="mt-10 w-48 h-1 rounded-full bg-pink-950/50 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
