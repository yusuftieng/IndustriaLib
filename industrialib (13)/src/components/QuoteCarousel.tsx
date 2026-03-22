import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quotes } from '../data/quotes';

export function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-10 bg-bg-secondary border-t border-black/5 flex justify-center items-center text-center px-6">
      <div className="max-w-5xl relative min-h-[120px] flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute w-full flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
          >
            <p className="font-serif text-lg md:text-xl text-text-primary italic leading-relaxed max-w-4xl">
              "{quotes[currentIndex].text}"
            </p>
            <p className="text-xs md:text-sm font-sans text-text-muted tracking-widest uppercase whitespace-nowrap">
              — {quotes[currentIndex].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
