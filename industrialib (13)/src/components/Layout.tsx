import { Link, Outlet, useLocation } from 'react-router-dom';
import { QuoteCarousel } from './QuoteCarousel';
import { BookOpen, Users, Library, History as HistoryIcon, Globe, Menu, X, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Layout() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary selection:bg-black/10 dark:selection:bg-white/10 transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-[67px] h-[67px] rounded-full border border-black/10 dark:border-white/10 overflow-hidden flex items-center justify-center bg-white transition-transform group-hover:scale-105 shrink-0">
                <img 
                  src="/logo.png" 
                  alt="IndustriaLib Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image is not found
                    e.currentTarget.parentElement!.style.display = 'none';
                    e.currentTarget.parentElement!.nextElementSibling?.classList.remove('hidden');
                    e.currentTarget.parentElement!.nextElementSibling?.classList.add('flex');
                  }}
                />
              </div>
              <div className="hidden w-[60px] h-[60px] rounded-full bg-text-primary flex-col items-center justify-center text-bg-primary transition-transform group-hover:scale-105 shrink-0">
                <Library size={28} />
              </div>
              <span className="font-museo text-2xl font-medium tracking-tight">IndustriaLib</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 -mr-20">
            <Link to="/books" className="text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
              <BookOpen size={16} />
              Books
            </Link>
            <Link to="/thinkers" className="text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
              <Users size={16} />
              Thinkers
            </Link>
            <Link to="/dictionary" className="text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
              <Library size={16} />
              Dictionary
            </Link>
            <Link to="/history" className="text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
              <HistoryIcon size={16} />
              History
            </Link>
            <Link to="/case-studies" className="text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
              <BookOpen size={16} />
              Case Studies
            </Link>
            <Link to="/tools" className="text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
              <Wrench size={16} />
              Essential Tools
            </Link>
            <Link to="/worldview" className="text-sm font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
              <Globe size={16} />
              IE Worldview
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 text-text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-bg-primary border-b border-black/5 dark:border-white/5 shadow-lg py-4 px-6 flex flex-col gap-4 transition-colors duration-300">
            <Link to="/books" className="text-base font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3 py-2">
              <BookOpen size={20} />
              Books
            </Link>
            <Link to="/thinkers" className="text-base font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3 py-2">
              <Users size={20} />
              Thinkers
            </Link>
            <Link to="/dictionary" className="text-base font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3 py-2">
              <Library size={20} />
              Dictionary
            </Link>
            <Link to="/history" className="text-base font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3 py-2">
              <HistoryIcon size={20} />
              History
            </Link>
            <Link to="/case-studies" className="text-base font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3 py-2">
              <BookOpen size={20} />
              Case Studies
            </Link>
            <Link to="/tools" className="text-base font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3 py-2">
              <Wrench size={20} />
              Essential Tools
            </Link>
            <Link to="/worldview" className="text-base font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3 py-2">
              <Globe size={20} />
              IE Worldview
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="mt-auto">
        <QuoteCarousel />
        <div className="py-8 text-center text-sm text-text-muted font-sans bg-bg-primary transition-colors duration-300">
          <p>© {new Date().getFullYear()} <span className="font-museo font-medium">IndustriaLib</span>. A curated site for Industrial Engineers and candidates. By Abdulkadir Yusuf Tunc</p>
        </div>
      </footer>
    </div>
  );
}
