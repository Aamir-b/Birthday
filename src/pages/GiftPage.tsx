import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import Confetti from '@/components/effects/Confetti';
import HeartExplosion from '@/components/effects/HeartExplosion';
import GlowButton from '@/components/ui/GlowButton';

interface GiftPageProps {
  onNext: () => void;
}

export default function GiftPage({ onNext }: GiftPageProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg flex flex-col items-center justify-center px-5 py-16 safe-top safe-bottom">
      <StarField count={60} hearts heartsCount={10} />
      <Sparkles active count={20} />

      {opened && (
        <>
          <Confetti active count={120} duration={7000} />
          <HeartExplosion active duration={4000} />
          <Sparkles active burst count={60} />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 text-glow-pink mb-10"
        >
          {birthdayConfig.giftHeading}
        </motion.h1>

        {/* Gift Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
          className="relative mb-10"
          style={{ perspective: '600px' }}
        >
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.button
                key="closed"
                onClick={() => setOpened(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Lid */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-20 mx-auto"
                  style={{
                    width: '180px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #ff6b9d, #e63946)',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {/* Ribbon vertical */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-full bg-gradient-to-b from-rose-300 to-rose-500" />
                  {/* Bow */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6 text-3xl">🎀</div>
                </motion.div>

                {/* Box body */}
                <div
                  className="relative z-10 mx-auto -mt-2"
                  style={{
                    width: '170px',
                    height: '130px',
                    background: 'linear-gradient(180deg, #ff85b3, #ff6b9d, #e63946)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    border: '2px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-full bg-gradient-to-b from-rose-300 to-rose-500" />
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-rose-300/50" />
                  <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-50">🎁</div>
                </div>

                {/* Glow underneath */}
                <div className="absolute -inset-4 rounded-full bg-pink-500/20 blur-2xl -z-10" />
              </motion.button>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Light rays */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,215,0,0.4), rgba(255,107,157,0.2), transparent 70%)',
                  }}
                />

                {/* Open box */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Lid flying off */}
                  <motion.div
                    initial={{ y: 0, rotate: 0, opacity: 1 }}
                    animate={{ y: -100, rotate: -20, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute"
                    style={{
                      width: '180px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #ff6b9d, #e63946)',
                      borderRadius: '8px',
                    }}
                  />
                  <div
                    className="mx-auto"
                    style={{
                      width: '170px',
                      height: '100px',
                      background: 'linear-gradient(180deg, rgba(255,133,179,0.3), rgba(230,57,70,0.2))',
                      borderRadius: '8px',
                      border: '2px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div key="btn" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
              <GlowButton onClick={() => setOpened(true)} className="glow-pulse">
                {birthdayConfig.giftButton}
              </GlowButton>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="font-dancing text-2xl sm:text-3xl text-pink-200 text-glow-pink mb-6 max-w-md"
              >
                {birthdayConfig.giftRevealMessage}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="photo-frame rounded-2xl overflow-hidden mb-6"
              >
                <img
                  src={birthdayConfig.giftPhoto}
                  alt="Her gift photo"
                  loading="lazy"
                  className="w-56 h-72 sm:w-64 sm:h-80 object-cover"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="font-serif-elegant text-base sm:text-lg text-white/70 leading-relaxed max-w-md mb-8"
              >
                {birthdayConfig.giftPersonalMessage}
              </motion.p>

              <GlowButton onClick={onNext}>
                One More Thing... 😍
              </GlowButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
