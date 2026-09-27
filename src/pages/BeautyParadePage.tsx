import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import GlowButton from '@/components/ui/GlowButton';

interface BeautyParadeProps {
  onNext: () => void;
}

export default function BeautyParadePage({ onNext }: BeautyParadeProps) {
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const photos = birthdayConfig.beautyParadePhotos;
  const compliments = birthdayConfig.compliments;

  const next = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
    setIndex((i) => (i + 1) % photos.length);
  };

  const prev = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg flex flex-col items-center justify-center px-5 py-16 safe-top safe-bottom">
      <StarField count={40} />
      <Sparkles active count={15} />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-2xl sm:text-4xl md:text-5xl text-pink-200 text-glow-pink mb-10 leading-tight"
        >
          {birthdayConfig.beautyParadeHeading}
        </motion.h1>

        {/* Carousel */}
        <div className="relative w-full mb-8">
          <div className="relative rounded-2xl overflow-hidden photo-frame mx-auto" style={{ maxWidth: '360px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={photos[index]}
                  alt="Beautiful"
                  loading="lazy"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Camera flash overlay */}
            <AnimatePresence>
              {flash && (
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-white pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Compliment */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-dancing text-2xl sm:text-3xl text-pink-100 text-glow-soft text-center"
                >
                  {compliments[index % compliments.length]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-between items-center mt-4 px-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-pink-200 hover:scale-110 transition-transform"
              aria-label="Previous"
            >
              ‹
            </button>
            <div className="flex gap-1.5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setFlash(true);
                    setTimeout(() => setFlash(false), 200);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-pink-400' : 'w-2 bg-white/30'}`}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-pink-200 hover:scale-110 transition-transform"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        <GlowButton onClick={onNext}>
          Before You Go... ❤️
        </GlowButton>
      </div>
    </div>
  );
}
