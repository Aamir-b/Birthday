import { motion } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import FloatingPetals from '@/components/effects/FloatingPetals';
import GlowButton from '@/components/ui/GlowButton';

interface WishesPageProps {
  onNext: () => void;
}

export default function WishesPage({ onNext }: WishesPageProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg-2 px-5 py-16 safe-top safe-bottom">
      <StarField count={40} hearts heartsCount={8} />
      <Sparkles active count={15} />
      <FloatingPetals active count={12} />

      <div className="relative z-10 flex flex-col items-center text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 text-glow-pink"
        >
          {birthdayConfig.wishesHeading}
        </motion.h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
        {birthdayConfig.wishes.map((wish, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-center min-h-[80px]">
              <span className="text-2xl mr-3 flex-shrink-0">💌</span>
              <p className="font-serif-elegant text-base sm:text-lg text-pink-50 text-left leading-relaxed">
                {wish}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center mt-14">
        <GlowButton onClick={onNext}>
          Your Dreams ✨
        </GlowButton>
      </div>
    </div>
  );
}
