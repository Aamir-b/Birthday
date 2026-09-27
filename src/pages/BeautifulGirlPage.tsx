import { motion } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import FloatingPetals from '@/components/effects/FloatingPetals';
import Sparkles from '@/components/effects/Sparkles';
import GlowButton from '@/components/ui/GlowButton';

interface BeautifulGirlProps {
  onNext: () => void;
}

export default function BeautifulGirlPage({ onNext }: BeautifulGirlProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg flex flex-col items-center justify-center px-5 py-16 safe-top safe-bottom">
      <FloatingPetals active count={20} />
      <Sparkles active count={25} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 text-glow-pink mb-4"
        >
          {birthdayConfig.beautifulGirlHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif-elegant text-base sm:text-xl text-white/60 mb-10"
        >
          {birthdayConfig.beautifulGirlSubHeading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, type: 'spring', bounce: 0.3 }}
          className="relative mb-10 perspective-1000"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-pink-500/30 to-rose-400/20 blur-2xl" />
          <div className="relative photo-frame rounded-2xl overflow-hidden">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={birthdayConfig.beautifulGirlPhoto}
                alt="Beautiful her"
                loading="lazy"
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="font-dancing text-2xl sm:text-3xl text-pink-200 text-glow-pink mb-4"
        >
          {birthdayConfig.beautifulGirlBelowPhoto}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-serif-elegant text-base sm:text-lg text-white/60 mb-10"
        >
          {birthdayConfig.beautifulGirlFinalLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <GlowButton onClick={onNext}>
            See More of You ✨
          </GlowButton>
        </motion.div>
      </div>
    </div>
  );
}
