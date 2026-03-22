import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { universities, University } from '../data/universities';
import { X, MapPin, Building2, GraduationCap, Trophy, Calendar, BookOpen, ExternalLink, Search } from 'lucide-react';
import Fuse from 'fuse.js';

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom minimal icon
const createCustomIcon = (isDark: boolean, isSelected: boolean = false) => {
  const color = isSelected ? '#ef4444' : (isDark ? '#3b82f6' : '#2563eb'); // red-500 for selected, blue for default
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="white"></circle>
    </svg>
  `;
  
  return L.divIcon({
    className: `custom-map-marker ${isSelected ? 'selected-marker' : ''}`,
    html: svgIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

function MapUpdater({ isDark }: { isDark: boolean }) {
  const map = useMap();
  
  useEffect(() => {
    // Force a re-render of tiles when theme changes if needed, 
    // but we'll handle it via CSS filter on the tile layer container
  }, [isDark, map]);
  
  return null;
}

function MapController({ selectedUni }: { selectedUni: University | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedUni) {
      map.flyTo(selectedUni.coordinates, 6, {
        duration: 1.5
      });
    }
  }, [selectedUni, map]);
  
  return null;
}

export function Worldview() {
  const [selectedUni, setSelectedUni] = useState<University | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<University[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => new Fuse(universities, {
    keys: ['name', 'country', 'location'],
    threshold: 0.4,
    distance: 100,
  }), []);

  useEffect(() => {
    if (searchQuery.trim()) {
      setSearchResults(fuse.search(searchQuery).map(res => res.item).slice(0, 5));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, fuse]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectUniversity = (uni: University) => {
    setSelectedUni(uni);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Create a mutation observer to watch for class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] relative overflow-hidden bg-bg-primary transition-colors duration-300">
      {/* Search Bar Overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[400] w-full max-w-md px-4" ref={searchRef}>
        <div className="relative w-full">
          <div className="relative flex items-center w-full h-12 rounded-full bg-bg-primary/80 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl focus-within:shadow-xl transition-all overflow-hidden">
            <div className="pl-4 pr-2 text-text-muted">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchResults.length > 0) {
                  handleSelectUniversity(searchResults[0]);
                }
              }}
              className="w-full h-full bg-transparent border-none outline-none text-text-primary placeholder-text-muted text-base pr-4"
            />
            {searchQuery && (
              <button 
                onClick={() => { setSearchQuery(''); setIsSearchFocused(false); }}
                className="pr-4 text-text-muted hover:text-text-primary"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {isSearchFocused && searchQuery.trim() && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-bg-primary/95 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden"
              >
                {searchResults.map((uni) => (
                  <button
                    key={uni.id}
                    onClick={() => handleSelectUniversity(uni)}
                    className="w-full text-left px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 border-b border-black/5 dark:border-white/5 last:border-0 transition-colors flex flex-col"
                  >
                    <span className="font-medium text-text-primary truncate w-full">{uni.name}</span>
                    <span className="text-xs text-text-secondary truncate w-full">{uni.location}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-6 left-6 z-[400] pointer-events-none hidden md:block">
        <AnimatePresence>
          {showInfo && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-bg-primary/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-black/5 dark:border-white/5 pointer-events-auto max-w-sm relative"
            >
              <button 
                onClick={() => setShowInfo(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <h1 className="font-serif text-3xl font-medium text-text-primary mb-2 pr-6">IE Worldview</h1>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-6">
                Explore top-class universities worldwide offering Industrial Engineering programs. Click on a pin to view details.
              </p>
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowInfo(false)}
                  className="px-5 py-2.5 bg-text-primary text-bg-primary font-sans text-xs font-medium tracking-wide uppercase hover:bg-black transition-colors rounded-full"
                >
                  Let's explore!
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={`w-full h-full z-0 ${isDark ? 'map-dark-mode' : ''}`}>
        <MapContainer 
          center={[20, 0]} 
          zoom={3} 
          style={{ height: '100%', width: '100%', background: isDark ? '#1a1a1a' : '#f8f9fa' }}
          zoomControl={false}
          minZoom={2}
          maxBounds={[[-90, -180], [90, 180]]}
          maxBoundsViscosity={1.0}
        >
          <MapUpdater isDark={isDark} />
          <MapController selectedUni={selectedUni} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            className="map-tiles"
          />
          
          {universities.map((uni) => {
            const isSelected = selectedUni?.id === uni.id;
            return (
              <Marker 
                key={uni.id} 
                position={uni.coordinates}
                icon={createCustomIcon(isDark, isSelected)}
                eventHandlers={{
                  click: () => setSelectedUni(uni),
                }}
              />
            );
          })}
        </MapContainer>
      </div>

      <AnimatePresence>
        {selectedUni && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedUni(null)}
              className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[500]"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full md:w-[450px] bg-bg-primary shadow-2xl z-[501] overflow-y-auto border-l border-black/5 dark:border-white/5"
            >
              <div className="p-8 relative">
                <button 
                  onClick={() => setSelectedUni(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors z-10"
                >
                  <X size={20} />
                </button>

                {/* Header Image */}
                <div className="relative w-[calc(100%+4rem)] h-56 -mt-8 -mx-8 mb-8">
                  <img 
                    src={selectedUni.imageUrl || `https://picsum.photos/seed/${selectedUni.id}/800/400`} 
                    alt={selectedUni.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium tracking-wide uppercase mb-4">
                    <MapPin size={14} />
                    {selectedUni.country}
                  </div>
                  
                  <h2 className="font-serif text-3xl font-medium text-text-primary mb-2 leading-tight">
                    {selectedUni.name}
                  </h2>
                  <p className="text-text-secondary text-sm flex items-center gap-2 mb-8">
                    <Building2 size={16} />
                    {selectedUni.location}
                  </p>

                  <div className="space-y-6">
                    <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl p-5 border border-black/5 dark:border-white/5">
                      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                        <GraduationCap size={14} />
                        Program Nomenclature
                      </h3>
                      <p className="text-text-primary font-medium">{selectedUni.programName}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl p-5 border border-black/5 dark:border-white/5">
                        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Trophy size={14} />
                          Ranking
                        </h3>
                        <p className="text-text-primary font-medium text-sm">{selectedUni.ranking}</p>
                      </div>
                      <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl p-5 border border-black/5 dark:border-white/5">
                        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Calendar size={14} />
                          Founded
                        </h3>
                        <p className="text-text-primary font-medium text-sm">{selectedUni.foundingYear}</p>
                      </div>
                    </div>

                    <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl p-5 border border-black/5 dark:border-white/5">
                      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BookOpen size={14} />
                        Curriculum Focus
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-wrap">
                        {selectedUni.curriculumFocus}
                      </p>
                    </div>

                    <a 
                      href={selectedUni.website || `https://www.google.com/search?q=${encodeURIComponent(selectedUni.name + ' official website')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3.5 mt-8 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors gap-2"
                    >
                      Visit Official Website
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
