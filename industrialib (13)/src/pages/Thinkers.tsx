import { useState } from 'react';
import { motion } from 'motion/react';
import { thinkers } from '../data/thinkers';
import { ThinkerCard } from '../components/ThinkerCard';

const CATEGORIES = [
  'All',
  'Foundations of Industrial Engineering',
  'Production & Lean Systems',
  'Operations Research & Systems',
  'Quality & Management'
];

export function Thinkers() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredThinkers = activeCategory === 'All' 
    ? thinkers 
    : thinkers.filter(t => t.category === activeCategory);

  return (
    <div className="w-full py-24 bg-bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-text-primary mb-6">The Pioneers of IE</h1>
          <p className="font-sans text-text-secondary text-xl max-w-2xl leading-relaxed font-light">
            Biographies and contributions of the pioneers who optimized the world.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-black/5 pb-6">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-text-primary text-bg-primary'
                  : 'bg-transparent text-text-muted hover:text-text-primary hover:bg-black/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThinkers.map((thinker, i) => (
            <motion.div
              key={thinker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <ThinkerCard thinker={thinker} />
            </motion.div>
          ))}
        </div>
        
        {filteredThinkers.length === 0 && (
          <div className="py-24 text-center text-text-muted font-serif text-xl italic">
            No thinkers found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
