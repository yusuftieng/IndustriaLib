import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { dictionaryData, DictionaryCategory } from '../data/dictionary';
import Fuse from 'fuse.js';
import { Search } from 'lucide-react';

export function Dictionary() {
  const [searchQuery, setSearchQuery] = useState('');

  const fuse = useMemo(() => {
    const allTerms = dictionaryData.flatMap(cat => 
      cat.terms.map(term => ({ ...term, categoryTitle: cat.title }))
    );
    return new Fuse(allTerms, {
      keys: ['term', 'englishExplanation', 'turkishExplanation'],
      threshold: 0.4,
      distance: 100,
    });
  }, []);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return dictionaryData;
    }

    const results = fuse.search(searchQuery).map(res => res.item);
    
    const grouped = results.reduce((acc, item) => {
      if (!acc[item.categoryTitle]) {
        acc[item.categoryTitle] = {
          title: item.categoryTitle,
          terms: []
        };
      }
      acc[item.categoryTitle].terms.push({
        term: item.term,
        englishExplanation: item.englishExplanation,
        turkishExplanation: item.turkishExplanation
      });
      return acc;
    }, {} as Record<string, DictionaryCategory>);

    return dictionaryData
      .map(cat => grouped[cat.title])
      .filter(Boolean);
  }, [searchQuery, fuse]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full pt-24 pb-16 bg-bg-primary">
        <motion.div 
          className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row md:items-start justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-text-primary mb-6 mt-0">IE Dictionary</h1>
            <p className="font-sans text-text-secondary text-xl max-w-2xl leading-relaxed font-light">
              A comprehensive glossary of essential terms and concepts in Industrial Engineering.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 flex-shrink-0 md:mt-2">
            <div className="relative flex items-center w-full h-12 rounded-full bg-[#1d293d] border border-[#1d293d] shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow overflow-hidden">
              <div className="pl-4 pr-2 text-white/70">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search words..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full bg-transparent border-none outline-none text-white placeholder-white/70 text-base pr-4"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full py-24 bg-bg-secondary border-t border-black/5 flex-grow">
        <div className="max-w-4xl mx-auto px-6">
          {filteredData.length === 0 ? (
            <div className="py-12 text-center text-text-muted font-serif text-xl italic">
              No words found matching your search.
            </div>
          ) : (
            <div className="space-y-24">
              {filteredData.map((category, idx) => (
                <motion.section 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h2 className="font-serif text-2xl font-medium text-text-primary mb-10 border-b border-black/5 pb-4">
                    {category.title}
                  </h2>
                  <ul className="space-y-10">
                    {category.terms.map((item, termIdx) => (
                      <li key={termIdx} className="font-sans flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                        <span className="font-medium text-text-primary text-lg sm:w-1/4 shrink-0 mt-1">{item.term}</span>
                        <div className="flex-1">
                          <p className="text-text-secondary text-lg leading-[1.8] font-light">
                            {item.englishExplanation}
                          </p>
                          <p className="text-text-muted italic text-sm mt-2">
                            {item.turkishExplanation}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
