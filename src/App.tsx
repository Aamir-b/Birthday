import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/pages/LoadingScreen';
import CountdownPage from '@/pages/CountdownPage';
import GrandRevealPage from '@/pages/GrandRevealPage';
import BeautifulGirlPage from '@/pages/BeautifulGirlPage';
import PhotoGalleryPage from '@/pages/PhotoGalleryPage';
import QualitiesPage from '@/pages/QualitiesPage';
import LetterPage from '@/pages/LetterPage';
import CakePage from '@/pages/CakePage';
import WishesPage from '@/pages/WishesPage';
import DreamsPage from '@/pages/DreamsPage';
import GiftPage from '@/pages/GiftPage';
import BeautyParadePage from '@/pages/BeautyParadePage';
import FinalPage from '@/pages/FinalPage';
import MusicButton from '@/components/MusicButton';
import { birthdayConfig } from '@/config/birthdayConfig';

type Phase = 'loading' | 'countdown' | 'reveal' | 'beautifulGirl' | 'gallery' | 'qualities' | 'letter' | 'cake' | 'wishes' | 'dreams' | 'gift' | 'parade' | 'final';

export default function App() {
  const [phase, setPhase] = useState<Phase>('loading');

  const pageVariants = {
    initial: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {phase === 'loading' && (
          <motion.div key="loading" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <LoadingScreen onComplete={() => setPhase('countdown')} />
          </motion.div>
        )}

        {phase === 'countdown' && (
          <motion.div key="countdown" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <CountdownPage onReveal={() => setPhase('reveal')} />
          </motion.div>
        )}

        {phase === 'reveal' && (
          <motion.div key="reveal" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <GrandRevealPage onNext={() => setPhase('beautifulGirl')} />
          </motion.div>
        )}

        {phase === 'beautifulGirl' && (
          <motion.div key="beautifulGirl" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <BeautifulGirlPage onNext={() => setPhase('gallery')} />
          </motion.div>
        )}

        {phase === 'gallery' && (
          <motion.div key="gallery" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <PhotoGalleryPage onNext={() => setPhase('qualities')} />
          </motion.div>
        )}

        {phase === 'qualities' && (
          <motion.div key="qualities" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <QualitiesPage onNext={() => setPhase('letter')} />
          </motion.div>
        )}

        {phase === 'letter' && (
          <motion.div key="letter" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <LetterPage onNext={() => setPhase('cake')} />
          </motion.div>
        )}

        {phase === 'cake' && (
          <motion.div key="cake" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <CakePage onNext={() => setPhase('wishes')} />
          </motion.div>
        )}

        {phase === 'wishes' && (
          <motion.div key="wishes" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <WishesPage onNext={() => setPhase('dreams')} />
          </motion.div>
        )}

        {phase === 'dreams' && (
          <motion.div key="dreams" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <DreamsPage onNext={() => setPhase('gift')} />
          </motion.div>
        )}

        {phase === 'gift' && (
          <motion.div key="gift" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <GiftPage onNext={() => setPhase('parade')} />
          </motion.div>
        )}

        {phase === 'parade' && (
          <motion.div key="parade" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <BeautyParadePage onNext={() => setPhase('final')} />
          </motion.div>
        )}

        {phase === 'final' && (
          <motion.div key="final" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.8 }}>
            <FinalPage onComplete={() => setPhase('final')} />
          </motion.div>
        )}
      </AnimatePresence>

      {birthdayConfig.enableMusic && phase !== 'loading' && <MusicButton />}
    </div>
  );
}
