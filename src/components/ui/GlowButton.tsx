import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function GlowButton({ children, onClick, className = '', disabled = false }: GlowButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-base sm:text-lg
        text-white transition-all
        bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400
        shadow-[0_0_25px_rgba(255,107,157,0.5),0_0_50px_rgba(255,107,157,0.3)]
        hover:shadow-[0_0_35px_rgba(255,107,157,0.7),0_0_70px_rgba(255,107,157,0.4)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      style={{
        border: '1px solid rgba(255,255,255,0.2)',
      }}
    >
      <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
        {children}
      </span>
    </motion.button>
  );
}
