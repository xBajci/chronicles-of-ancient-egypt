import React, { useState } from 'react';
import { TIMELINE_DATA } from './constants';
import Timeline from './components/Timeline';
import InfoPanel from './components/InfoPanel';
import { TimelineItem } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [selectedEventId, setSelectedEventId] = useState<string | null>(TIMELINE_DATA[0].id);
  // On mobile, we might want to collapse the timeline to see details
  const [isTimelineCollapsedMobile, setIsTimelineCollapsedMobile] = useState<boolean>(false);

  // Derived State
  const selectedEvent = TIMELINE_DATA.find(e => e.id === selectedEventId) || TIMELINE_DATA[0];

  // Handlers
  const handleEventSelect = (event: TimelineItem) => {
    setSelectedEventId(event.id);
    // On mobile, auto-collapse timeline to show details after selection
    if (window.innerWidth < 768) {
      setIsTimelineCollapsedMobile(true);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#0f0f11] text-white overflow-hidden flex flex-col md:flex-row font-sans">
      
      {/* HEADER (Mobile Only) */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#111] border-b border-[#d4af37]/20 z-50">
         <h1 className="text-xl cinzel-font text-[#d4af37]">Chronicles of the Nile</h1>
         <button 
           onClick={() => setIsTimelineCollapsedMobile(!isTimelineCollapsedMobile)}
           className="text-[#d4af37] p-1 border border-[#d4af37]/30 rounded"
         >
           <Menu size={20} />
         </button>
      </div>

      {/* LEFT COLUMN: Vertical Timeline */}
      {/* Desktop: Fixed width. Mobile: Toggleable or fixed height area?
          The prompt says "mobile: axis top / detail below". 
          We'll make it a scrollable area at the top on mobile.
      */}
      <div 
        className={`
          flex-shrink-0 bg-[#111] border-b md:border-b-0 md:border-r border-[#d4af37]/20 transition-all duration-300
          md:w-[350px] md:h-full overflow-hidden flex flex-col
          ${isTimelineCollapsedMobile ? 'h-0 opacity-0 md:h-full md:opacity-100' : 'h-[40vh] md:h-full opacity-100'}
        `}
      >
        <div className="hidden md:block p-6 border-b border-[#d4af37]/10 bg-gradient-to-b from-[#161616] to-[#111]">
           <h1 className="text-2xl cinzel-font text-[#d4af37] tracking-wider text-center">
             Chronicles <br/><span className="text-white text-base font-light">of Ancient Egypt</span>
           </h1>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <Timeline 
            events={TIMELINE_DATA}
            selectedEventId={selectedEventId}
            onSelectEvent={handleEventSelect}
          />
        </div>
      </div>

      {/* RIGHT COLUMN: Detail Content (The "Content") */}
      <div className="flex-1 bg-[#16191d] relative overflow-hidden flex flex-col h-full">
        <InfoPanel 
          event={selectedEvent}
          onClose={() => {}} // No close action needed in split view
        />
      </div>
    </div>
  );
};

export default App;