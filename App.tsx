import React, { useState } from 'react';
import { TIMELINE_DATA } from './constants';
import Timeline from './components/Timeline';
import InfoPanel from './components/InfoPanel';
import { TimelineItem } from './types';

const App: React.FC = () => {
  // State
  const [selectedEventId, setSelectedEventId] = useState<string | null>(TIMELINE_DATA[0].id);

  // Derived State
  const selectedEvent = TIMELINE_DATA.find(e => e.id === selectedEventId) || TIMELINE_DATA[0];

  // Handlers
  const handleEventSelect = (event: TimelineItem) => {
    setSelectedEventId(event.id);
  };

  return (
    <div className="h-screen w-screen bg-[#0f0f11] text-white overflow-hidden flex flex-row font-sans">
      
      {/* LEFT COLUMN: Vertical Timeline */}
      <div 
        className="flex-shrink-0 bg-[#111] border-r border-[#d4af37]/20 w-[350px] h-full overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b border-[#d4af37]/10 bg-gradient-to-b from-[#161616] to-[#111]">
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