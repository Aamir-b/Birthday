import { motion } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import Confetti from '@/components/effects/Confetti';
import Balloons from '@/components/effects/Balloons';
import FloatingPetals from '@/components/effects/FloatingPetals';
import GlowButton from '@/components/ui/GlowButton';

interface GrandRevealProps {
  onNext: () => void;
}

export default function GrandRevealPage({ onNext }: GrandRevealProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg flex flex-col items-center justify-center px-5 py-16 safe-top safe-bottom">
      <StarField count={60} hearts heartsCount={20} />
      <Sparkles active count={30} />
      <FloatingPetals active count={15} />
      <Confetti active count={100} duration={8000} />
      <Balloons active count={12} />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl sm:text-6xl mb-6"
        >
          🎂
        </motion.div>

        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="font-dancing text-4xl sm:text-6xl md:text-7xl mb-4 text-glow-pink"
        >
          <span className="pink-gradient-text">{birthdayConfig.revealHeading}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif-elegant text-lg sm:text-xl md:text-2xl text-white/70 mb-6"
        >
          {birthdayConfig.revealSubHeading}
        </motion.p>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5, type: 'spring', bounce: 0.4 }}
          className="my-6 w-full px-3"
        >
          <h2 className="font-dancing font-bold text-6xl sm:text-7xl md:text-8xl text-pink-100 text-glow-pink leading-tight">
            {birthdayConfig.herName}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="font-dancing text-xl sm:text-2xl text-pink-200 mb-8"
        >
          Today is all about YOU. 🌸
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="font-serif-elegant text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-10"
        >
          {birthdayConfig.revealMessage}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <GlowButton onClick={onNext}>
            Continue Your Surprise ✨
          </GlowButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
