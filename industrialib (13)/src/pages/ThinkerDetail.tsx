import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { thinkers } from '../data/thinkers';
import { ArrowLeft, Quote, BookOpen, Briefcase, Award } from 'lucide-react';

export function ThinkerDetail() {
  const { id } = useParams<{ id: string }>();
  const thinker = thinkers.find(t => t.id === id);

  if (!thinker) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-text-primary">
        <h1 className="font-serif text-4xl mb-6">Pioneer Not Found</h1>
        <Link to="/thinkers" className="text-sm font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Return to Pioneers
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/thinkers" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Pioneers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Portrait & Meta */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-8">
              <div className="w-64 h-64 lg:w-full lg:h-auto lg:aspect-square rounded-full lg:rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-black/5 bg-black/5 relative group">
                <img
                  src={thinker.portraitImage}
                  alt={thinker.name}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full bg-bg-primary p-8 rounded-xl border border-black/5 space-y-6">
                <div>
                  <h4 className="text-xs font-sans tracking-widest uppercase text-text-muted mb-2 flex items-center gap-2">
                    <Briefcase size={14} /> Primary Field
                  </h4>
                  <p className="font-medium text-text-primary">{thinker.primaryField}</p>
                </div>
                
                <div className="h-[1px] w-full bg-black/5"></div>
                
                <div>
                  <h4 className="text-xs font-sans tracking-widest uppercase text-text-muted mb-2 flex items-center gap-2">
                    <Award size={14} /> Category
                  </h4>
                  <p className="font-medium text-text-primary leading-relaxed">{thinker.category}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-8">
              <div className="mb-12 text-center lg:text-left">
                <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                  {thinker.name}
                </h1>
                <p className="text-xl md:text-2xl font-sans text-text-secondary font-light max-w-3xl">
                  {thinker.biography}
                </p>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="font-serif text-2xl font-medium text-text-primary mb-6 border-b border-black/5 pb-4">Core Contribution</h2>
                <p className="text-text-secondary leading-relaxed font-light mb-12 text-lg">
                  {thinker.contribution}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h2 className="font-serif text-2xl font-medium text-text-primary mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
                      <BookOpen size={20} /> Major Works
                    </h2>
                    <ul className="space-y-4">
                      {thinker.majorWorks.map((work, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-text-muted mt-2.5"></span>
                          <span className="text-text-secondary leading-relaxed font-light text-lg italic">
                            {work}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-medium text-text-primary mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
                      <Quote size={20} /> Notable Quotes
                    </h2>
                    <div className="space-y-6">
                      {thinker.quotes.map((quote, index) => (
                        <blockquote key={index} className="border-l-2 border-text-muted pl-4">
                          <p className="text-text-secondary leading-relaxed font-light italic text-lg m-0">
                            "{quote}"
                          </p>
                        </blockquote>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
