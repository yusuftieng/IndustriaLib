import { Link } from 'react-router-dom';
import { Thinker } from '../data/thinkers';
import { motion } from 'motion/react';

interface ThinkerCardProps {
  thinker: Thinker;
}

export function ThinkerCard({ thinker }: ThinkerCardProps) {
  return (
    <Link to={`/thinkers/${thinker.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}
        transition={{ duration: 0.2 }}
        className="bg-bg-card h-full flex flex-col rounded-xl overflow-hidden border border-black/5 p-6 items-center text-center"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-black/5 ring-4 ring-bg-primary group-hover:ring-black/5 transition-all duration-300">
          <img
            src={thinker.portraitImage}
            alt={thinker.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
        </div>
        <h3 className="font-serif text-xl font-medium mb-2 text-text-primary group-hover:text-black dark:group-hover:text-indigo-300 transition-colors">
          {thinker.name}
        </h3>
        <p className="text-xs font-sans tracking-widest uppercase text-text-muted mb-4 group-hover:text-slate-600 dark:group-hover:text-indigo-200 transition-colors">
          {thinker.primaryField}
        </p>
        <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10 mb-4 group-hover:w-16 group-hover:bg-black/20 dark:group-hover:bg-indigo-400 transition-all duration-300"></div>
        <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">
          {thinker.biography}
        </p>
      </motion.div>
    </Link>
  );
}
