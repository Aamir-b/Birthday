import { motion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = '', background = 'bg-[#0a0410]', id }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-5 py-16 sm:px-8 sm:py-20 ${background} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
