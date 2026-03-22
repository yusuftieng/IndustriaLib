import { useState } from 'react';
import { motion } from 'motion/react';
import { toolsData } from '../data/tools';
import { ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';

export function Tools() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(toolsData[0].id);

  const toggleCategory = (id: string) => {
    if (expandedCategory === id) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-[120.4px] pt-[97px] pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-museo font-medium text-text-primary mb-4 tracking-tight">
          Essential Tools for IE
        </h1>
        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed m-0 p-0">
          Essential Software and Applications Used in Industrial Engineering. From data extraction to process automation, these tools are the backbone of modern industrial engineering.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-[25px]"
      >
        {/* Categories List (Sidebar on Desktop, Top on Mobile) */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {toolsData.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 border ${
                  isExpanded 
                    ? 'bg-text-primary text-bg-primary border-text-primary shadow-md' 
                    : 'bg-white dark:bg-black/20 border-black/10 dark:border-white/10 text-text-primary hover:border-black/30 dark:hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isExpanded ? 'bg-bg-primary/20' : 'bg-black/5 dark:bg-white/5'}`}>
                    <Icon size={20} className={isExpanded ? 'text-bg-primary' : 'text-text-secondary'} />
                  </div>
                  <span className="font-medium text-sm md:text-base">{category.title}</span>
                </div>
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8">
          {toolsData.map((category) => {
            if (expandedCategory !== category.id) return null;

            return (
              <div key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-black/20 rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 mb-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl">
                      <category.icon size={28} className="text-text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-museo font-medium text-text-primary">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-8">
                    {category.tools.map((tool, index) => (
                      <div key={index} className="bg-bg-primary rounded-xl p-6 border border-black/5 dark:border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                          {/* Circular Image Placeholder */}
                          <div className="w-16 h-16 rounded-full bg-white border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 overflow-hidden group relative">
                            {typeof tool.imagePlaceholder === 'string' ? (
                              <img src={tool.imagePlaceholder} alt={tool.name} className="w-full h-full object-contain p-2" />
                            ) : (
                              <>
                                <ImageIcon size={24} className="text-text-muted group-hover:scale-110 transition-transform" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <span className="text-[10px] text-white font-medium text-center px-1">Upload Image</span>
                                </div>
                              </>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-text-primary">{tool.name}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Purpose</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">{tool.purpose}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Use Cases</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">{tool.useCases}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Importance</h4>
                          <p className="text-text-secondary text-sm leading-relaxed">{tool.importance}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">Related Topics</h4>
                          <div className="flex flex-wrap gap-2">
                            {tool.relatedTopics.map((topic, i) => (
                              <span 
                                key={i} 
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 text-text-primary border border-black/10 dark:border-white/10"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
