import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { books } from '../data/books';
import { thinkers } from '../data/thinkers';
import { BookCard } from '../components/BookCard';
import { ThinkerCard } from '../components/ThinkerCard';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { HeroHeadline } from '../components/HeroHeadline';

export function Home() {
  const featuredBooks = books.slice(0, 3);
  const featuredThinkers = thinkers.slice(0, 3);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const bgX = useTransform(springX, [-0.5, 0.5], ['-1%', '1%']);
  const bgY = useTransform(springY, [-0.5, 0.5], ['-1%', '1%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-bg-secondary border-b border-black/5">
        <motion.div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', 
            backgroundSize: '40px 40px',
            x: bgX,
            y: bgY
          }} 
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <HeroHeadline />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="text-xl md:text-2xl font-sans text-text-secondary leading-relaxed mb-12 font-light"
            >
              Explore the history, thinkers, and essential literature of Industrial Engineering.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/books" className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-bg-primary font-sans text-sm font-medium tracking-wide uppercase hover:bg-black transition-colors rounded-full">
                Explore Library
                <ArrowRight size={16} />
              </Link>
              <Link to="/thinkers" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-black/10 text-text-primary font-sans text-sm font-medium tracking-wide uppercase hover:border-black/30 transition-colors rounded-full">
                Meet Thinkers
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-4">Essential Reading</h2>
              <p className="font-sans text-text-secondary text-lg">Discover the books that shaped the field of Industrial Engineering.</p>
            </div>
            <Link to="/books" className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors pb-1 border-b border-transparent hover:border-text-primary">
              View All Books
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/books" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">
              View All Books <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Thinkers */}
      <section className="py-24 bg-bg-secondary border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-4">Visionary Thinkers</h2>
              <p className="font-sans text-text-secondary text-lg">Meet the minds behind the optimization of our world.</p>
            </div>
            <Link to="/thinkers" className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors pb-1 border-b border-transparent hover:border-text-primary">
              View All Thinkers
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredThinkers.map((thinker, i) => (
              <motion.div
                key={thinker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ThinkerCard thinker={thinker} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/thinkers" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">
              View All Thinkers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-24 bg-bg-primary border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-6">Real-World Impact</h2>
            <p className="font-sans text-text-secondary text-lg md:text-xl leading-relaxed mb-10 font-light">
              See how Industrial Engineering principles are applied to solve complex problems in modern industry.
            </p>
            <Link to="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-bg-primary font-sans text-sm font-medium tracking-wide uppercase hover:bg-black transition-colors rounded-full">
              Explore Case Studies
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
