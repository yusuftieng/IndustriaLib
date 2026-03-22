import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { caseStudies, CaseStudy } from '../data/caseStudies';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';

export function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.domain)))];

  const filteredStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.domain === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full py-24 bg-bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-text-primary mb-6">Case Studies</h1>
          <p className="font-sans text-text-secondary text-xl max-w-2xl leading-relaxed font-light">
            Engaging, real-world industrial engineering scenarios. Test your knowledge and explore how industry leaders solved complex operational challenges.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-black/5 pb-6">
          {categories.map(category => (
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

        {/* Case Studies List */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {filteredStudies.map((study, i) => {
            const isExpanded = expandedId === study.id;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 shadow-sm bg-[#fdfbf7] dark:bg-[#1d293d]"
              >
                {/* Problem Section */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                      {study.domain}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                      {study.difficulty}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-slate-900 dark:text-slate-100 mb-6">
                    {study.title}
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">The Scenario</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {study.scenario}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">The Data & Constraints</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                            <th className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">Metric / Constraint</th>
                            <th className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">Pre-Optimization State</th>
                            <th className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">Target / Constraint</th>
                          </tr>
                        </thead>
                        <tbody>
                          {study.constraints.map((c, idx) => (
                            <tr key={idx} className="border-b border-slate-200 dark:border-slate-800">
                              <td className="py-3 px-4 text-slate-700 dark:text-slate-300 font-medium">{c.metric}</td>
                              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{c.before}</td>
                              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{c.target}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">The Objective</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      {study.objective}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleExpand(study.id)}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90 mt-4"
                    style={{ backgroundColor: '#1e3a8a' }} // Modern navy color
                  >
                    <Lightbulb size={18} />
                    {isExpanded ? 'Hide IE Solution' : 'Show the IE Solution'}
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                {/* Solution Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden bg-slate-50 dark:bg-[#1a1a1a] border-t border-slate-200 dark:border-slate-800"
                    >
                      <div className="p-6 md:p-8">
                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Methodology Used</h3>
                          <p className="text-slate-700 dark:text-slate-300">{study.methodology}</p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Step-by-Step Breakdown</h3>
                          <div className="space-y-4">
                            <div>
                              <strong className="text-slate-800 dark:text-slate-200">Analyze:</strong>
                              <p className="text-slate-700 dark:text-slate-300 mt-1">{study.breakdown.analyze}</p>
                            </div>
                            <div>
                              <strong className="text-slate-800 dark:text-slate-200">Solve:</strong>
                              <p className="text-slate-700 dark:text-slate-300 mt-1">{study.breakdown.solve}</p>
                            </div>
                            <div>
                              <strong className="text-slate-800 dark:text-slate-200">Optimize:</strong>
                              <p className="text-slate-700 dark:text-slate-300 mt-1">{study.breakdown.optimize}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Business Impact</h3>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {study.impact}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
        {filteredStudies.length === 0 && (
          <div className="py-24 text-center text-text-muted font-serif text-xl italic">
            No case studies found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
