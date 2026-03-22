import { motion } from 'motion/react';

export function TimelineFuture() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="relative w-full h-56 mt-0 mb-16">
      {/* Fading line connecting to the main timeline */}
      <div className="absolute top-0 left-4 md:left-1/2 w-[2px] h-20 bg-gradient-to-b from-slate-600 dark:from-indigo-600 to-transparent transform -translate-x-1/2" />

      {/* Animation Center */}
      <div className="absolute top-24 left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-0 h-0 flex items-center justify-center">
          {/* Core glow */}
          <motion.div
            animate={{
              scale: [0.8, 2.5, 0.8],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-10 h-10 rounded-full bg-[#487aff] dark:bg-indigo-500 blur-xl"
          />
          
          {/* Core solid */}
          <motion.div
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 rounded-full bg-[#4b5ccb] dark:bg-indigo-300 blur-[1px]"
          />

          {/* Particles */}
          {particles.map((_, i) => {
            const angle = (i / particles.length) * Math.PI * 2;
            const startRadius = 30 + Math.random() * 30;
            const startX = Math.cos(angle) * startRadius;
            const startY = Math.sin(angle) * startRadius;
            
            const endRadius = 60 + Math.random() * 40;
            const endX = Math.cos(angle) * endRadius;
            const endY = Math.sin(angle) * endRadius;

            return (
              <motion.div
                key={i}
                animate={{
                  x: [startX, 0, endX],
                  y: [startY, 0, endY],
                  opacity: [0, 1, 0],
                  scale: [0.2, 1.2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 4, // Spread out the animation
                }}
                className="absolute w-1 h-1 rounded-full bg-[#487aff] dark:bg-indigo-400"
              />
            );
          })}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-40 left-12 md:left-1/2 transform md:-translate-x-1/2 whitespace-nowrap"
      >
        <p className="font-serif text-sm font-light tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase">
          The Journey Continues
        </p>
      </motion.div>
    </div>
  );
}
