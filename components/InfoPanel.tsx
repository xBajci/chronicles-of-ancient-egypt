import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../types';
import { Calendar, Scroll, User, Crown, Landmark, Hammer, ExternalLink, Lightbulb, Search, Info, Tag, Users, BookOpen, HelpCircle, FileText, Anchor } from 'lucide-react';

interface InfoPanelProps {
  event: TimelineItem | null;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ event, onClose }) => {
  if (!event) return <div className="w-full h-full bg-[#16191d] flex items-center justify-center text-gray-500 font-serif italic">Select an item from the timeline</div>;

  const formatYear = (year: number | null | undefined) => {
    if (year === null || year === undefined) return '?';
    return year < 0 ? `${Math.abs(year)} BC` : `${year} AD`;
  };

  const getTypeColor = (type: string) => {
      switch(type) {
          case 'period': return 'bg-[#8B4513]';
          case 'pharaoh': return 'bg-[#d4af37]';
          case 'monument': return 'bg-[#40E0D0]';
          case 'person': return 'bg-[#9b59b6]';
          case 'dynasty': return 'bg-[#2E86C1]';
          default: return 'bg-gray-500';
      }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
        case 'period': return <Scroll size={14} className="text-white" />;
        case 'pharaoh': return <Crown size={14} className="text-black" />;
        case 'monument': return <Landmark size={14} className="text-black" />;
        case 'person': return <User size={14} className="text-white" />;
        case 'dynasty': return <Users size={14} className="text-white" />;
        default: return null;
    }
  };

  return (
    <div className="h-full w-full bg-papyrus flex flex-col text-gray-900 overflow-hidden">
      
      {/* 1. Header Section (Text Only pattern since images are removed) */}
      <motion.div 
        key={`header-${event.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex-shrink-0 bg-gray-900 overflow-hidden flex flex-col justify-end border-b-4 border-[#d4af37]"
        style={{ minHeight: '180px' }}
      >
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-20" style={{ 
              backgroundImage: 'radial-gradient(circle at 50% 120%, #d4af37 0%, transparent 60%), url("https://www.transparenttextures.com/patterns/black-scales.png")' 
          }}></div>
          
          <div className="relative p-6 md:p-8 w-full z-10">
            <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg ${getTypeColor(event.type)} ${event.type === 'pharaoh' || event.type === 'monument' ? 'text-black' : 'text-white'}`}>
                    {getTypeIcon(event.type)}
                    {event.type}
                </span>
                {event.confidence && (
                    <span className={`text-[10px] uppercase border px-2 py-0.5 rounded text-gray-400 border-gray-600 ${event.confidence === 'low' ? 'text-red-400 border-red-900' : ''}`}>
                        Confidence: {event.confidence}
                    </span>
                )}
                {event.dynasty && event.type !== 'dynasty' && (
                    <span className="text-[#d4af37] text-sm font-serif italic border border-[#d4af37]/30 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm">
                        {event.dynasty}
                    </span>
                )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold cinzel-font text-[#fdf6e3] leading-tight drop-shadow-lg">
                {event.name}
            </h1>
            <div className="mt-2 text-gray-400 font-serif text-lg flex items-center gap-2">
                <Calendar size={16} />
                {formatYear(event.displayStartYear ?? event.startYear)} – {formatYear(event.displayEndYear ?? event.endYear)}
            </div>
          </div>
      </motion.div>

      {/* 2. Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#fcf8f2]">
        <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-10">
            
            {/* Overview & Description */}
            <motion.div 
              key={`desc-${event.id}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
                <div className="flex items-center gap-2 mb-4 border-b-2 border-[#d4af37] inline-block pb-1">
                   <Info size={20} className="text-[#d4af37]" />
                   <h3 className="cinzel-font text-xl font-bold text-[#1a1a1a]">Overview</h3>
                </div>
                
                <p className="text-gray-800 text-lg leading-relaxed font-light">
                    {event.description}
                </p>

                {/* Who (for persons/rulers) */}
                {event.detail?.who && (
                    <div className="mt-4 p-4 bg-stone-100 border-l-4 border-[#d4af37] text-stone-700 italic">
                        {event.detail.who}
                    </div>
                )}

                {/* Legacy or New BuiltBy/BuiltFor display */}
                {(event.builtBy || event.detail?.builtFor) && (
                    <div className="mt-4 flex items-center gap-2 text-gray-700 italic bg-[#d4af37]/10 p-3 rounded-lg border border-[#d4af37]/20">
                        <Hammer size={18} />
                        <span>Commissioned by <strong>{event.builtBy || event.detail?.builtFor}</strong></span>
                    </div>
                )}
                
                {/* Tags */}
                {event.tags && event.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {event.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-xs uppercase tracking-wider bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                )}
            </motion.div>
            
            {/* Rich Detail Sections */}
            {event.detail && (
              <motion.div
                 key={`details-${event.id}`}
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="grid gap-8"
              >
                  {/* What Happens (Periods/Dynasties) */}
                  {event.detail.whatHappens && event.detail.whatHappens.length > 0 && (
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                      <h4 className="cinzel-font text-lg font-bold text-[#2E86C1] mb-3 flex items-center gap-2">
                        <FileText size={18} /> Key Events
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {event.detail.whatHappens.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Why Important / Why It Matters */}
                  {(event.detail.whyImportant || event.detail.whyItMatters) && (
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                      <h4 className="cinzel-font text-lg font-bold text-[#8B4513] mb-3 flex items-center gap-2">
                        <Crown size={18} /> Why it matters
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {(event.detail.whyImportant || event.detail.whyItMatters || []).map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Character / Key Themes (Dynasties) */}
                  {(event.detail.character || event.detail.keyThemes) && (
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                      <h4 className="cinzel-font text-lg font-bold text-stone-700 mb-3 flex items-center gap-2">
                        <BookOpen size={18} /> Character & Themes
                      </h4>
                      <div className="space-y-4">
                        {event.detail.character && (
                             <ul className="list-disc list-inside space-y-2 text-stone-700">
                                {event.detail.character.map((item, idx) => (
                                <li key={idx} className="leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        )}
                        {event.detail.keyThemes && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {event.detail.keyThemes.map(theme => (
                                    <span key={theme} className="text-xs bg-stone-200 text-stone-800 px-2 py-1 rounded font-serif uppercase tracking-wide">
                                        {theme}
                                    </span>
                                ))}
                            </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* What to look for */}
                  {event.detail.whatToLookFor && event.detail.whatToLookFor.length > 0 && (
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                      <h4 className="cinzel-font text-lg font-bold text-[#26619C] mb-3 flex items-center gap-2">
                        <Search size={18} /> What to look for
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {event.detail.whatToLookFor.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Myths vs Reality */}
                  {event.detail.mythsVsReality && event.detail.mythsVsReality.length > 0 && (
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h4 className="cinzel-font text-lg font-bold text-orange-800 mb-3 flex items-center gap-2">
                        <HelpCircle size={18} /> Myths vs Reality
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-orange-900">
                        {event.detail.mythsVsReality.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Fun Facts */}
                  {event.detail.funFacts && event.detail.funFacts.length > 0 && (
                    <div className="bg-[#f0f9ff] p-6 rounded-xl border border-blue-100">
                      <h4 className="cinzel-font text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <Lightbulb size={18} /> Did you know?
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-blue-900">
                        {event.detail.funFacts.map((item, idx) => (
                          <li key={idx} className="leading-relaxed italic">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              </motion.div>
            )}
        </div>
        
        {/* Footer Padding */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default InfoPanel;