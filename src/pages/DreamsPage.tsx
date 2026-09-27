import { motion } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import StarField from '@/components/effects/StarField';
import Sparkles from '@/components/effects/Sparkles';
import GlowButton from '@/components/ui/GlowButton';

interface DreamsPageProps {
  onNext: () => void;
}

export default function DreamsPage({ onNext }: DreamsPageProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-5 py-16 safe-top safe-bottom"
      style={{ background: 'radial-gradient(ellipse at top, #0d1a3a 0%, #0a0410 50%, #050208 100%)' }}
    >
      <StarField count={100} shootingStars />

      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-16 right-8 sm:right-20 z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #fff8e7, #f5e6c8, #d4c5a0)',
            boxShadow: '0 0 40px rgba(255,248,231,0.4), 0 0 80px rgba(255,248,231,0.2)',
          }}
        />
      </motion.div>

      {/* Clouds */}
      <div className="absolute top-1/4 left-0 w-full pointer-events-none">
        <motion.div
          animate={{ x: [-100, 100] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-32 h-12 rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.3), transparent)' }}
        />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-glow-soft mb-8"
        >
          <span className="gold-gradient-text">{birthdayConfig.dreamsHeading}</span>
        </motion.h1>

        <div className="space-y-4 mb-10">
          {birthdayConfig.dreamsIntro.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.5 }}
              className="font-serif-elegant text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg">
          {birthdayConfig.dreams.map((dream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', bounce: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-xl px-5 py-4 text-center"
            >
              <span className="font-dancing text-lg sm:text-xl" style={{ color: '#ffd700' }}>
                {dream}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <GlowButton onClick={onNext}>
            One More Surprise... 🎁
          </GlowButton>
        </motion.div>
      </div>
    </div>
  );
}
