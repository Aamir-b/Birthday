import { motion } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import GlowButton from '@/components/ui/GlowButton';

interface QualitiesProps {
  onNext: () => void;
}

export default function QualitiesPage({ onNext }: QualitiesProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg px-5 py-16 safe-top safe-bottom">
      <StarField count={50} />
      <Sparkles active count={15} />

      <div className="relative z-10 flex flex-col items-center text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 text-glow-pink"
        >
          {birthdayConfig.qualitiesHeading}
        </motion.h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
        {birthdayConfig.qualities.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.97 }}
            className="perspective-1000"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center min-h-[140px] justify-center"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)' }}
            >
              <span className="text-3xl sm:text-4xl mb-3">{q.emoji}</span>
              <p className="font-dancing text-lg sm:text-xl text-pink-100">{q.title}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center mt-14">
        <GlowButton onClick={onNext}>
          Read Your Letter 💌
        </GlowButton>
      </div>
    </div>
  );
}
