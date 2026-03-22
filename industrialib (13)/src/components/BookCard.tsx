import { Link } from 'react-router-dom';
import { Book } from '../data/books';
import { motion } from 'motion/react';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link to={`/books/${book.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}
        transition={{ duration: 0.2 }}
        className="bg-bg-card h-full flex flex-col rounded-xl overflow-hidden border border-black/5"
      >
        <div className="w-full bg-black/5 pt-8 pb-4 flex justify-center items-center">
          <div className="aspect-[2/3] w-[70%] relative overflow-hidden shadow-md rounded-md">
            <img
              src={book.coverImage}
              alt={book.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-xs font-sans tracking-widest uppercase text-text-muted mb-3">
            {book.category}
          </div>
          <h3 className="font-serif text-xl font-medium leading-snug mb-2 text-text-primary group-hover:text-black dark:group-hover:text-indigo-300 transition-colors">
            {book.title}
          </h3>
          <p className="text-sm font-sans text-text-secondary mb-4 group-hover:text-slate-700 dark:group-hover:text-indigo-200 transition-colors">
            by {book.author}
          </p>
          <p className="text-sm text-text-muted line-clamp-2 mt-auto leading-relaxed">
            {book.abstractPreview}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
