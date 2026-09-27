import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import GlowButton from '@/components/ui/GlowButton';

interface LetterProps {
  onNext: () => void;
}

export default function LetterPage({ onNext }: LetterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const total = birthdayConfig.letterParagraphs.length;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleParagraphs(current);
      if (current >= total) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden romantic-bg px-5 py-16 safe-top safe-bottom">
      <StarField count={70} hearts heartsCount={10} />
      <Sparkles active count={20} />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 text-glow-pink mb-10 text-center"
        >
          {birthdayConfig.letterHeading}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 w-full"
          style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)' }}
        >
          <div className="space-y-3 sm:space-y-4">
            {birthdayConfig.letterParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{
                  opacity: i < visibleParagraphs ? 1 : 0,
                  filter: i < visibleParagraphs ? 'blur(0px)' : 'blur(8px)',
                }}
                transition={{ duration: 0.8 }}
                className={`font-serif-elegant text-base sm:text-lg md:text-xl leading-relaxed ${
                  i === 0 ? 'text-pink-200 font-medium' : 'text-white/80'
                } ${i >= birthdayConfig.letterParagraphs.length - 2 ? 'text-pink-200' : ''}`}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {visibleParagraphs >= birthdayConfig.letterParagraphs.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10"
          >
            <GlowButton onClick={onNext}>
              Make A Wish 🎂
            </GlowButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
