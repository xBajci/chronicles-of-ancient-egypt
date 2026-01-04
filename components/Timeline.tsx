import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../types';
import { User, Landmark, Crown, Hammer, ChevronRight, ChevronDown } from 'lucide-react';

interface TimelineProps {
  events: TimelineItem[];
  selectedEventId: string | null;
  onSelectEvent: (event: TimelineItem) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, selectedEventId, onSelectEvent }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [collapsedPeriods, setCollapsedPeriods] = useState<Set<string>>(new Set());

  const togglePeriod = (e: React.MouseEvent, periodId: string) => {
      e.stopPropagation();
      const newSet = new Set(collapsedPeriods);
      if (newSet.has(periodId)) {
          newSet.delete(periodId);
      } else {
          newSet.add(periodId);
      }
      setCollapsedPeriods(newSet);
  };

  // Scroll active item into view
  useEffect(() => {
    if (selectedEventId && scrollContainerRef.current) {
      const selectedEl = document.getElementById(`timeline-item-${selectedEventId}`);
      if (selectedEl) {
        // Use simpler scroll on mobile to avoid jarring movements
        selectedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedEventId]);

  const formatYear = (year: number) => {
    return year < 0 ? `${Math.abs(year)} BC` : `${year} AD`;
  };

  const displayedEvents = events.filter(event => {
      if (event.type === 'period') return true;
      // If the event belongs to a period that is currently collapsed, hide it
      if (event.periodId && collapsedPeriods.has(event.periodId)) return false;
      return true;
  });

  return (
    <div className="w-full h-full bg-[#111] flex flex-col relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#111] z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#111] z-20 pointer-events-none"></div>

      <div className="flex-1 overflow-y-auto custom-scrollbar relative px-2" ref={scrollContainerRef}>
        {/* Continuous Vertical Connection Line */}
        <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-[#d4af37]/10 z-0"></div>

        <div className="flex flex-col py-8 space-y-1">
          {displayedEvents.map((event, index) => {
            const isSelected = selectedEventId === event.id;
            const type = event.type;
            
            // --- RENDER: PERIOD (Background Band) ---
            if (type === 'period') {
              const isCollapsed = collapsedPeriods.has(event.id);
              return (
                <motion.div 
                  key={event.id}
                  id={`timeline-item-${event.id}`}
                  className="relative z-10 w-full mt-6 mb-2 cursor-pointer group"
                  onClick={() => onSelectEvent(event)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={`
                    w-full py-3 px-3 border-l-4 
                    transition-all duration-300 relative overflow-hidden
                    ${isSelected 
                      ? 'bg-[#d4af37] border-[#fff] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                      : 'bg-[#1a1a1a] border-[#d4af37] text-[#d4af37] hover:bg-[#222]'
                    }
                  `}>
                    {/* Period Background Texture */}
                     <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex flex-col">
                           <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isSelected ? 'text-black/70' : 'text-gray-500'}`}>
                             Period
                           </span>
                           <h2 className="cinzel-font font-bold text-base leading-tight">
                             {event.name}
                           </h2>
                           <span className={`text-xs font-serif mt-1 ${isSelected ? 'text-black/80' : 'text-gray-500'}`}>
                             {formatYear(event.startYear)} – {formatYear(event.endYear)}
                           </span>
                        </div>
                        
                        {/* Collapse/Expand Toggle */}
                        <button 
                            onClick={(e) => togglePeriod(e, event.id)}
                            className={`p-1.5 rounded-full hover:bg-black/20 transition-colors ${isSelected ? 'text-black' : 'text-[#d4af37]'}`}
                        >
                            {isCollapsed ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // --- RENDER: DYNASTY (Sub-header) ---
            if (type === 'dynasty') {
                return (
                  <motion.div
                    key={event.id}
                    id={`timeline-item-${event.id}`}
                    className="relative z-10 pl-4 pr-2 py-2 cursor-pointer group mt-2"
                    onClick={() => onSelectEvent(event)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                     <div className={`
                        flex items-center gap-2 border-b border-[#d4af37]/30 pb-1
                        transition-colors duration-300
                        ${isSelected ? 'text-[#d4af37]' : 'text-gray-400 group-hover:text-gray-300'}
                     `}>
                        <div className="w-2 h-2 rounded-full bg-[#d4af37]/50"></div>
                        <h3 className="cinzel-font text-sm font-bold tracking-wider uppercase">
                            {event.name}
                        </h3>
                     </div>
                  </motion.div>
                );
            }

            // --- RENDER: NODES (Pharaoh, Monument, Person) ---
            
            // Indentation logic
            // Pharaoh & Person = Main line
            // Monument = Child node (indented)
            const isChild = type === 'monument';
            // Increased padding to prevent icon overlapping text
            // Child (Monument): Icon at left-[60px] (ends ~88px) -> Use pl-24 (96px)
            // Parent (Pharaoh): Icon at left-[14px] (ends ~50px) -> Use pl-16 (64px)
            const paddingLeft = isChild ? 'pl-24' : 'pl-16';
            const iconSize = isChild ? 28 : 36;
            
            return (
              <motion.div
                key={event.id}
                id={`timeline-item-${event.id}`}
                className={`relative z-10 ${paddingLeft} py-2 group cursor-pointer transition-all duration-300`}
                onClick={() => onSelectEvent(event)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                // removed delay based on index because filtering messes up index stability for animations
              >
                {/* Connector from main line to node */}
                <div className={`
                   absolute left-[31px] top-1/2 -translate-y-1/2 h-px transition-colors duration-300
                   ${isChild ? 'w-8 border-t border-dashed border-[#d4af37]/40' : 'w-0'} 
                `}></div>

                {/* Node Icon Circle */}
                <div 
                  className={`
                    absolute top-1/2 -translate-y-1/2 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-20
                    ${isChild ? 'left-[50px]' : 'left-[14px]'}
                    ${isSelected 
                       ? 'bg-[#d4af37] border-white text-black scale-110 shadow-[0_0_15px_rgba(212,175,55,0.5)]' 
                       : 'bg-[#0f0f11] border-[#d4af37]/30 text-gray-500 group-hover:border-[#d4af37] group-hover:text-[#d4af37]'
                    }
                  `}
                  style={{ width: iconSize, height: iconSize }}
                >
                  {type === 'pharaoh' && <Crown size={isSelected ? 18 : 14} />}
                  {type === 'person' && <User size={isSelected ? 18 : 14} />}
                  {type === 'monument' && <Landmark size={isSelected ? 14 : 12} />}
                </div>

                {/* Card Content */}
                <div 
                  className={`
                    p-3 rounded-lg border transition-all duration-300 w-full text-left relative overflow-hidden
                    ${isSelected 
                      ? 'bg-[#d4af37]/10 border-[#d4af37] shadow-lg' 
                      : 'bg-[#1e1e1e]/40 border-transparent hover:bg-[#1e1e1e] hover:border-[#d4af37]/20'
                    }
                  `}
                >
                  {/* Hover visual cue */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300
                    ${isSelected ? 'bg-[#d4af37]' : 'bg-transparent group-hover:bg-[#d4af37]/50'}
                  `}></div>

                  <div className="flex justify-between items-start mb-0.5 pl-2">
                     <span className={`text-[10px] font-serif font-bold ${isSelected ? 'text-[#d4af37]' : 'text-gray-500'}`}>
                        {formatYear(event.startYear)}
                     </span>
                     {event.type === 'person' && (
                       <span className="text-[9px] uppercase text-[#9b59b6] bg-[#9b59b6]/10 px-1 rounded">Ext. Influence</span>
                     )}
                  </div>
                  
                  <h3 className={`pl-2 cinzel-font font-bold leading-tight ${isChild ? 'text-sm' : 'text-base'} ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {event.name}
                  </h3>
                  
                  {event.dynasty && (
                     <div className="pl-2 mt-1 text-[10px] text-gray-500 uppercase tracking-wider">
                       {event.dynasty}
                     </div>
                  )}
                  
                  {isChild && event.builtBy && (
                     <div className="pl-2 mt-1 text-[10px] text-gray-500 italic flex items-center gap-1">
                       <Hammer size={10} /> {event.builtBy}
                     </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;