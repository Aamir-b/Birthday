import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import Confetti from '@/components/effects/Confetti';
import Balloons from '@/components/effects/Balloons';
import HeartExplosion from '@/components/effects/HeartExplosion';
import Fireworks from '@/components/effects/Fireworks';
import GlowButton from '@/components/ui/GlowButton';

interface CakePageProps {
  onNext: () => void;
}

const CANDLE_COUNT = 5;

export default function CakePage({ onNext }: CakePageProps) {
  const [extinguished, setExtinguished] = useState<boolean[]>(Array(CANDLE_COUNT).fill(false));
  const [wishMade, setWishMade] = useState(false);
  const [smokeId, setSmokeId] = useState<number | null>(null);

  const toggleCandle = (i: number) => {
    if (extinguished[i]) return;
    const next = [...extinguished];
    next[i] = true;
    setExtinguished(next);
    setSmokeId(i);
    setTimeout(() => setSmokeId(null), 2000);

    if (next.every(Boolean)) {
      setTimeout(() => setWishMade(true), 800);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg flex flex-col items-center justify-center px-5 py-16 safe-top safe-bottom">
      <StarField count={50} />
      <Sparkles active count={15} />

      {wishMade && (
        <>
          <Confetti active count={150} duration={10000} />
          <Balloons active count={20} />
          <HeartExplosion active duration={5000} />
          <Fireworks active duration={10000} />
          <Sparkles active burst count={80} />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 text-glow-pink mb-3"
        >
          {birthdayConfig.cakeHeading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif-elegant text-base sm:text-lg text-white/60 mb-10"
        >
          {birthdayConfig.cakeInstruction}
        </motion.p>

        {/* 3D Cake */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="relative mb-10"
          style={{ perspective: '800px' }}
        >
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {/* Candles */}
            <div className="flex justify-center gap-6 sm:gap-10 mb-2">
              {extinguished.map((isOut, i) => (
                <button
                  key={i}
                  onClick={() => toggleCandle(i)}
                  className="relative flex flex-col items-center cursor-pointer"
                  aria-label={`Candle ${i + 1}`}
                >
                  {/* Flame */}
                  <motion.div
                    animate={isOut ? { opacity: 0, scaleY: 0 } : { opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <motion.div
                      animate={isOut ? {} : { scaleY: [1, 1.2, 1], scaleX: [1, 0.9, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-3 h-5 rounded-full"
                      style={{
                        background: 'radial-gradient(ellipse at center, #fff 0%, #ffd700 30%, #ff8c00 70%, transparent 100%)',
                        boxShadow: '0 0 15px #ffaa00, 0 0 25px #ff6600',
                      }}
                    />
                  </motion.div>

                  {/* Smoke */}
                  <AnimatePresence>
                    {smokeId === i && (
                      <motion.div
                        initial={{ opacity: 0.6, y: 0, scale: 1 }}
                        animate={{ opacity: 0, y: -40, scale: 2 }}
                        transition={{ duration: 2 }}
                        className="absolute top-0 w-2 h-2 rounded-full bg-gray-400 pointer-events-none"
                      />
                    )}
                  </AnimatePresence>

                  {/* Wick */}
                  <div className="w-0.5 h-2 bg-gray-700" />
                  {/* Candle body */}
                  <div
                    className="w-2.5 h-10 sm:h-12 rounded-sm"
                    style={{
                      background: `linear-gradient(to bottom, #ff6b9d, #ff85b3, #ff6b9d)`,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Top tier */}
            <div
              className="relative mx-auto rounded-t-lg"
              style={{
                width: '140px',
                height: '50px',
                background: 'linear-gradient(to bottom, #fff5f7, #ffd6e8, #ff6b9d)',
                boxShadow: '0 4px 15px rgba(255,107,157,0.3)',
                border: '2px solid rgba(255,255,255,0.2)',
              }}
            >
              {/* Decorations */}
              <div className="absolute top-2 left-3 text-sm">🌸</div>
              <div className="absolute top-2 right-3 text-sm">🎀</div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-sm">❤️</div>
              {/* Drips */}
              <div className="absolute -bottom-2 left-2 w-3 h-4 rounded-b-full bg-pink-300" />
              <div className="absolute -bottom-2 left-8 w-4 h-5 rounded-b-full bg-pink-200" />
              <div className="absolute -bottom-2 right-4 w-3 h-4 rounded-b-full bg-pink-300" />
              <div className="absolute -bottom-2 right-10 w-4 h-5 rounded-b-full bg-pink-200" />
            </div>

            {/* Middle tier */}
            <div
              className="relative mx-auto"
              style={{
                width: '200px',
                height: '60px',
                background: 'linear-gradient(to bottom, #ffd6e8, #ff85b3, #e63946)',
                boxShadow: '0 4px 15px rgba(230,57,70,0.3)',
                border: '2px solid rgba(255,255,255,0.15)',
              }}
            >
              <div className="absolute top-2 left-4 text-base">✨</div>
              <div className="absolute top-2 right-4 text-base">✨</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-base">🎂</div>
              <div className="absolute -bottom-2 left-4 w-4 h-5 rounded-b-full bg-pink-300" />
              <div className="absolute -bottom-2 right-6 w-4 h-5 rounded-b-full bg-pink-200" />
            </div>

            {/* Bottom tier */}
            <div
              className="relative mx-auto rounded-b-lg"
              style={{
                width: '260px',
                height: '70px',
                background: 'linear-gradient(to bottom, #ff85b3, #ff6b9d, #c9264a)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                border: '2px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="absolute top-2 left-6 text-base">🌸</div>
              <div className="absolute top-2 right-6 text-base">🌸</div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg">❤️</div>
            </div>

            {/* Plate */}
            <div
              className="mx-auto rounded-full"
              style={{
                width: '300px',
                height: '12px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.05))',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!wishMade ? (
            <motion.p
              key="tapping"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-serif-elegant text-sm sm:text-base text-white/40"
            >
              {extinguished.filter(Boolean).length} of {CANDLE_COUNT} candles lit... keep tapping
            </motion.p>
          ) : (
            <motion.div
              key="wish-made"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h2 className="font-dancing text-4xl sm:text-5xl pink-gradient-text text-glow-pink mb-3">
                {birthdayConfig.cakeWishMade}
              </h2>
              <p className="font-serif-elegant text-base sm:text-lg text-white/70 mb-8">
                {birthdayConfig.cakeWishSubText}
              </p>
              <GlowButton onClick={onNext}>
                More Wishes For You 🌸
              </GlowButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
