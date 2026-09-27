import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { birthdayConfig } from '@/config/birthdayConfig';

export default function MusicButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audio) {
      const a = new Audio(birthdayConfig.musicPath);
      a.loop = true;
      a.volume = volume;
      setAudio(a);
      a.play().catch(() => {});
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolume = (v: number) => {
    setVolume(v);
    if (audio) audio.volume = v;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-2xl p-4 flex flex-col gap-3 w-44"
            style={{
              background: 'rgba(20, 10, 30, 0.85)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 107, 157, 0.3)',
              boxShadow: '0 0 20px rgba(255, 107, 157, 0.2)',
            }}
          >
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 text-white text-sm hover:text-pink-300 transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 text-white text-sm hover:text-pink-300 transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <div className="flex items-center gap-2">
              <Volume2 size={14} className="text-white/70" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={(e) => handleVolume(parseFloat(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer bg-pink-900/50 accent-pink-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center
          bg-gradient-to-r from-pink-500/80 to-rose-500/80
          shadow-[0_0_20px_rgba(255,107,157,0.4)]
          border border-pink-300/30 backdrop-blur-md"
        aria-label="Music controls"
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { duration: 4, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
        >
          <Music size={20} className="text-white" />
        </motion.div>
      </motion.button>
    </div>
  );
}
