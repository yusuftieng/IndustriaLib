import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { books } from '../data/books';
import { ArrowLeft, Tag, BookOpen, Layers, GraduationCap } from 'lucide-react';

export function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-text-primary">
        <h1 className="font-serif text-4xl mb-6">Book Not Found</h1>
        <Link to="/books" className="text-sm font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Return to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-bg-primary py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/books" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Books
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Cover & Meta */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="w-full bg-black/5 rounded-xl border border-black/5 flex justify-center items-center py-12">
                <div className="aspect-[2/3] w-[70%] rounded-md overflow-hidden shadow-2xl shadow-black/10 relative group">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="bg-bg-secondary p-8 rounded-xl border border-black/5 space-y-6">
                <div>
                  <h4 className="text-xs font-sans tracking-widest uppercase text-text-muted mb-2 flex items-center gap-2">
                    <BookOpen size={14} /> Category
                  </h4>
                  <p className="font-medium text-text-primary">{book.category}</p>
                </div>
                
                <div className="h-[1px] w-full bg-black/5"></div>
                
                <div>
                  <h4 className="text-xs font-sans tracking-widest uppercase text-text-muted mb-2 flex items-center gap-2">
                    <GraduationCap size={14} /> Intended Reader
                  </h4>
                  <p className="font-medium text-text-primary leading-relaxed">{book.readerLevel}</p>
                </div>

                <div className="h-[1px] w-full bg-black/5"></div>

                <div>
                  <h4 className="text-xs font-sans tracking-widest uppercase text-text-muted mb-3 flex items-center gap-2">
                    <Layers size={14} /> Subfields
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {book.subfields.map(field => (
                      <span key={field} className="px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-text-secondary">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-8">
              <div className="mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-text-muted bg-black/5 px-3 py-1 rounded-full">
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                  {book.title}
                </h1>
                <p className="text-xl md:text-2xl font-sans text-text-secondary font-light">
                  by {book.author}
                </p>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="font-serif text-2xl font-medium text-text-primary mb-6 border-b border-black/5 pb-4">Abstract</h2>
                <p className="text-text-secondary leading-relaxed font-light mb-12 text-lg">
                  {book.fullAbstract}
                </p>

                <h2 className="font-serif text-2xl font-medium text-text-primary mb-6 border-b border-black/5 pb-4">Key Takeaways</h2>
                <ul className="space-y-4">
                  {book.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-text-primary text-bg-primary flex items-center justify-center text-xs font-bold mt-1">
                        {index + 1}
                      </span>
                      <span className="text-text-secondary leading-relaxed font-light text-lg">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
