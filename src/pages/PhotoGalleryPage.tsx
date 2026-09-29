import { motion } from 'framer-motion';
import { birthdayConfig } from '@/config/birthdayConfig';
import FloatingPetals from '@/components/effects/FloatingPetals';
import Sparkles from '@/components/effects/Sparkles';
import GlowButton from '@/components/ui/GlowButton';
import type { BirthdayPhoto } from '@/config/birthdayConfig';

interface PhotoGalleryProps {
  onNext: () => void;
}

const layouts = [
  'polaroid',
  'floating',
  'card3d',
  'cinematic',
  'glow',
  'polaroid',
  'card3d',
  'floating',
  'cinematic',
  'glow',
  'polaroid',
  'card3d',
  'floating',
  'cinematic',
  'glow',
  'polaroid',
  'card3d',
  'floating',
  'cinematic',
  'glow',
  'polaroid',
  'card3d',
  'floating',
  'cinematic',
];

function GalleryMedia({ photo, className }: { photo: BirthdayPhoto; className: string }) {
  if (photo.video) {
    return (
      <video
        src={photo.image}
        controls
        playsInline
        preload="metadata"
        aria-label={photo.caption}
        className={className}
      />
    );
  }

  return <img src={photo.image} alt={photo.caption} loading="lazy" className={className} />;
}

export default function PhotoGalleryPage({ onNext }: PhotoGalleryProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden romantic-bg-2 px-5 py-16 safe-top safe-bottom">
      <FloatingPetals active count={15} />
      <Sparkles active count={15} />

      <div className="relative z-10 flex flex-col items-center text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 text-glow-pink mb-3"
        >
          {birthdayConfig.galleryHeading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif-elegant text-base sm:text-xl text-white/60"
        >
          {birthdayConfig.gallerySubHeading}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-dancing text-xl sm:text-2xl text-pink-300/80 mt-4"
        >
          {birthdayConfig.galleryFinalLine}
        </motion.p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
        {birthdayConfig.photos.map((photo, i) => {
          const layout = layouts[i % layouts.length];

          if (layout === 'cinematic') {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="break-inside-avoid mb-4 sm:mb-5 w-full"
              >
                <div className="relative rounded-2xl overflow-hidden photo-frame">
                  <GalleryMedia photo={photo} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 font-dancing text-base sm:text-lg text-pink-100 text-glow-soft text-left">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            );
          }

          if (layout === 'polaroid') {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                className="break-inside-avoid mb-4 sm:mb-5 polaroid rounded-sm"
              >
                <GalleryMedia photo={photo} className="w-full h-auto object-cover" />
                <p className="mt-3 font-dancing text-base sm:text-lg text-gray-700 text-center">{photo.caption}</p>
              </motion.div>
            );
          }

          if (layout === 'card3d') {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateY: 30 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="break-inside-avoid mb-4 sm:mb-5 perspective-1000"
              >
                <div className="card-3d glass-card rounded-2xl overflow-hidden">
                  <GalleryMedia photo={photo} className="w-full h-auto object-cover" />
                  <div className="p-3">
                    <p className="font-dancing text-base sm:text-lg text-pink-100 text-center">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            );
          }

          if (layout === 'glow') {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="break-inside-avoid mb-4 sm:mb-5"
              >
                <div className="relative rounded-2xl overflow-hidden glow-pulse" style={{ border: '2px solid rgba(255,107,157,0.3)' }}>
                  <GalleryMedia photo={photo} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 ring-1 ring-pink-400/20 rounded-2xl pointer-events-none" />
                </div>
                <p className="mt-2 font-dancing text-sm sm:text-base text-pink-200/70 text-center">{photo.caption}</p>
              </motion.div>
            );
          }

          // floating
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="break-inside-avoid mb-4 sm:mb-5"
            >
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: 'easeInOut' }}>
                <div className="glass-card rounded-xl overflow-hidden">
                  <GalleryMedia photo={photo} className="w-full h-auto object-cover" />
                  <p className="p-3 font-dancing text-base sm:text-lg text-pink-100 text-center">{photo.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center mt-12">
        <GlowButton onClick={onNext}>
          What Makes You Special? ❤️
        </GlowButton>
      </div>
    </div>
  );
}
