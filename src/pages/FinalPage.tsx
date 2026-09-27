import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import Confetti from '@/components/effects/Confetti';
import Balloons from '@/components/effects/Balloons';
import HeartExplosion from '@/components/effects/HeartExplosion';
import Fireworks from '@/components/effects/Fireworks';
import FloatingPetals from '@/components/effects/FloatingPetals';

interface FinalPageProps {
  onComplete: () => void;
}

export default function FinalPage({ onComplete }: FinalPageProps) {
  const [step, setStep] = useState(0);
  const [celebrate, setCelebrate] = useState(false);

  const allLines = [
    ...birthdayConfig.finalLines,
    'pause',
    birthdayConfig.finalBirthdayText,
    birthdayConfig.herName,
    ...birthdayConfig.finalClosingLines,
    birthdayConfig.finalGoodbye,
    'pause',
    `With lots of love,\n${birthdayConfig.myName} ❤️`,
  ];

  useEffect(() => {
    if (step >= allLines.length) return;
    const isPause = allLines[step] === 'pause';
    const delay = isPause ? 2000 : 1800;
    const t = setTimeout(() => {
      if (step < allLines.length - 1) {
        setStep(step + 1);
      } else if (!celebrate) {
        setCelebrate(true);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [step, celebrate]);

  useEffect(() => {
    if (!celebrate) return;
    const t = setTimeout(() => onComplete(), 15000);
    return () => clearTimeout(t);
  }, [celebrate, onComplete]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg flex flex-col items-center justify-center px-5 py-16 safe-top safe-bottom">
      <StarField count={60} hearts={celebrate} heartsCount={celebrate ? 30 : 5} />
      <Sparkles active count={celebrate ? 40 : 10} />

      {celebrate && (
        <>
          <Confetti active count={200} duration={14000} />
          <Balloons active count={25} />
          <HeartExplosion active duration={12000} />
          <Fireworks active duration={12000} />
          <FloatingPetals active count={30} />
          <Sparkles active burst count={100} />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {!celebrate && (
          <>
            {step >= 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-10"
              >
                <div className="photo-frame rounded-2xl overflow-hidden">
                  <img
                    src={birthdayConfig.finalPhoto}
                    alt="Beautiful her"
                    loading="lazy"
                    className="w-48 h-60 sm:w-56 sm:h-72 object-cover"
                  />
                </div>
              </motion.div>
            )}

            <div className="min-h-[280px] flex flex-col items-center justify-center">
              {allLines.slice(0, step + 1).map((line, i) => {
                if (line === 'pause') return null;
                const isBirthday = line === birthdayConfig.finalBirthdayText;
                const isName = line === birthdayConfig.herName;
                const isClosing = birthdayConfig.finalClosingLines.includes(line);
                const isGoodbye = line === birthdayConfig.finalGoodbye;
                const isSignature = line.includes(birthdayConfig.myName);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                  >
                    {isName ? (
                      <h2 className="font-script text-5xl sm:text-6xl md:text-7xl pink-gradient-text text-glow-pink">
                        {line}
                      </h2>
                    ) : isBirthday ? (
                      <h2 className="font-dancing text-3xl sm:text-5xl md:text-6xl pink-gradient-text text-glow-pink">
                        {line}
                      </h2>
                    ) : isClosing ? (
                      <p className="font-dancing text-xl sm:text-2xl text-pink-200 text-glow-soft">
                        {line}
                      </p>
                    ) : isGoodbye ? (
                      <p className="font-serif-elegant text-lg sm:text-xl md:text-2xl text-pink-100 text-glow-soft">
                        {line}
                      </p>
                    ) : isSignature ? (
                      <div className="mt-6">
                        <p className="font-dancing text-xl sm:text-2xl text-pink-200/80 leading-relaxed">
                          {line.split('\n').map((l, j) => (
                            <span key={j} className="block">
                              {l}
                            </span>
                          ))}
                        </p>
                      </div>
                    ) : (
                      <p className="font-serif-elegant text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
                        {line}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

        {celebrate && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="flex flex-col items-center"
          >
            <motion.h1
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="font-dancing text-5xl sm:text-7xl md:text-8xl pink-gradient-text text-glow-pink mb-6"
            >
              {birthdayConfig.celebrationText}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-script text-4xl sm:text-6xl md:text-7xl gold-gradient-text text-glow-gold mb-8"
            >
              {birthdayConfig.herName}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-dancing text-xl sm:text-2xl md:text-3xl text-pink-200 text-glow-soft"
            >
              {birthdayConfig.celebrationSubText}
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
