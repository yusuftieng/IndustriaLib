import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { books } from '../data/books';
import { BookCard } from '../components/BookCard';
import Fuse from 'fuse.js';
import { Search } from 'lucide-react';

const CATEGORIES = ['All', 'Student', 'Academic', 'Industry / Professional'];

export function Books() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const fuse = useMemo(() => new Fuse(books, {
    keys: ['title', 'author'],
    threshold: 0.4, // Fuzzy matching threshold for typos
    distance: 100,
  }), []);

  const filteredBooks = useMemo(() => {
    let result = books;
    
    if (searchQuery.trim()) {
      result = fuse.search(searchQuery).map(res => res.item);
    }

    if (activeCategory !== 'All') {
      result = result.filter(book => book.category === activeCategory);
    }

    return result;
  }, [searchQuery, activeCategory, fuse]);

  return (
    <div className="w-full py-24 bg-bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-start justify-between gap-6"
        >
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-text-primary mb-6 mt-0">The Library</h1>
            <p className="font-sans text-text-secondary text-xl max-w-2xl leading-relaxed font-light">
              A curated collection of essential texts spanning the foundations of scientific management to modern lean production systems.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80 flex-shrink-0 md:mt-2">
            <div className="relative flex items-center w-full h-12 rounded-full bg-[#2d3748] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow overflow-hidden">
              <div className="pl-4 pr-2 text-slate-400 dark:text-slate-500">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full bg-transparent border-none outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 text-base pr-4"
              />
            </div>
          </div>
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
          {filteredBooks.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
        
        {filteredBooks.length === 0 && (
          <div className="py-24 text-center text-text-muted font-serif text-xl italic">
            No books found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
