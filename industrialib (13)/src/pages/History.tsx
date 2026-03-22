import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { historyData } from '../data/history';
import { TimelineFuture } from '../components/TimelineFuture';

export function History() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full py-24 bg-bg-primary min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center md:text-left"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-text-primary mb-6">History</h1>
          <p className="font-sans text-text-secondary text-xl max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
            A journey through the milestones that defined Industrial Engineering.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative w-full pb-12">
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/5 transform -translate-x-1/2" />

          {/* Animated Foreground Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-600 dark:bg-indigo-600 transform -translate-x-1/2 origin-top z-0"
          />

          <div className="relative z-10">
            {historyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex items-start w-full mb-24 md:mb-32 group">
                  {/* Center Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-bg-primary border-[3px] border-slate-800 dark:border-indigo-400 transform -translate-x-1/2 mt-2.5 z-20 transition-colors duration-300 group-hover:bg-slate-800 dark:group-hover:bg-indigo-400"
                  />

                  {/* Content Container */}
                  <div className={`w-full pl-12 md:pl-0 flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-start justify-between`}>
                    {/* Text Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-bold text-[#4b5ccb] tracking-tight">
                          {item.period}
                        </span>
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                          {item.country}
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-text-primary mt-4 leading-snug">
                          {item.title}
                        </h3>
                        <h4 className="font-sans text-lg font-medium text-[#487aff] mt-2">
                          {item.event}
                        </h4>
                        <p className="font-sans text-text-secondary leading-relaxed mt-4 font-light text-lg">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                      className={`w-full md:w-1/2 mt-8 md:mt-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                    >
                      {item.image && (
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-black/5">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              // Hide if image doesn't exist yet
                              e.currentTarget.parentElement!.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Future Timeline Animation */}
        <TimelineFuture />
      </div>
    </div>
  );
}
