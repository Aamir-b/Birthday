import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayConfig } from "@/config/birthdayConfig";
import StarField from "@/components/effects/StarField";
import Sparkles from "@/components/effects/Sparkles";
import GlowButton from "@/components/ui/GlowButton";

interface CountdownProps {
  onReveal: () => void;
}

function getTimeRemaining(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function CountdownPage({ onReveal }: CountdownProps) {
  const [time, setTime] = useState(() =>
    getTimeRemaining(new Date(birthdayConfig.birthdayDate)),
  );
  const [celebrating, setCelebrating] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (time.done) return;
    const interval = setInterval(() => {
      const t = getTimeRemaining(new Date(birthdayConfig.birthdayDate));
      setTime(t);
      if (t.done) {
        clearInterval(interval);
        setCelebrating(true);
        setTimeout(() => setShowButton(true), 3500);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time.done]);

  const units = [
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden animated-gradient-bg flex flex-col items-center justify-center px-5 py-12 safe-top safe-bottom">
      <StarField count={100} hearts={!celebrating} shootingStars />
      <Sparkles active count={20} />

      <AnimatePresence mode="wait">
        {!celebrating ? (
          <motion.div
            key="countdown"
            className="relative z-10 flex flex-col items-center text-center w-full"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-dancing text-3xl sm:text-4xl md:text-5xl text-pink-200 text-glow-pink mb-3"
            >
              {birthdayConfig.heroMessage}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-serif-elegant text-sm sm:text-base md:text-lg text-white/60 mb-10"
            >
              {birthdayConfig.heroSubMessage}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-10 w-full max-w-md"
            >
              {units.map((u, i) => (
                <div key={u.label} className="flex flex-col items-center">
                  <div className="glass-card rounded-xl sm:rounded-2xl px-1 py-3 sm:px-3 sm:py-4 w-full">
                    <motion.div
                      key={u.value}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="font-serif-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-glow-soft text-center tabular-nums"
                    >
                      {String(u.value).padStart(2, "0")}
                    </motion.div>
                  </div>
                  <span className="mt-2 text-[9px] sm:text-xs tracking-widest text-pink-300/60 font-medium">
                    {u.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="font-serif-elegant text-sm sm:text-base text-white/50 mb-8"
            >
              Your special moment is almost here... ✨
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="font-dancing text-lg sm:text-xl text-pink-300/70"
            >
              {birthdayConfig.heroBottomMessage}
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="celebrating"
            className="relative z-10 flex flex-col items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="mb-8"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-24 h-24 sm:w-32 sm:h-32"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(255,107,157,0.8))",
                }}
              >
                <path
                  d="M12 21s-6.5-4.35-9.5-8.5C0.5 9.5 2 5.5 5.5 5.5c2 0 3.5 1.5 6.5 4.5 3-3 4.5-4.5 6.5-4.5 3.5 0 5 4 3 7-3 4.15-9.5 8.5-9.5 8.5z"
                  fill="url(#bigHeart)"
                />
                <defs>
                  <linearGradient id="bigHeart" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff6b9d" />
                    <stop offset="100%" stopColor="#e63946" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <Sparkles active={showButton} burst count={60} />

            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="font-dancing text-4xl sm:text-6xl md:text-7xl text-glow-pink mb-8"
            >
              <span className="pink-gradient-text">IT'S YOUR DAY! 🎉❤️</span>
            </motion.h1>

            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="font-serif-elegant text-lg sm:text-xl text-pink-200/80 mb-6 text-glow-soft">
                  ✨ Open Your Birthday Surprise ✨
                </p>
                <GlowButton
                  onClick={onReveal}
                  className="glow-pulse text-lg sm:text-xl"
                >
                  Open My Surprise ❤️
                </GlowButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
