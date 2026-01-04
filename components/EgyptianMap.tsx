import React from 'react';
import { motion } from 'framer-motion';
import { LocationData } from '../types';
import { LOCATIONS } from '../constants';

interface EgyptianMapProps {
  locations: LocationData[];
  activeLocationId: string | null;
  onLocationClick: (locationId: string) => void;
}

const EgyptianMap: React.FC<EgyptianMapProps> = ({ activeLocationId, onLocationClick }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Texture Overlay (Subtle noise) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Decorative Border around the map viewing area */}
      <div className="absolute inset-8 border border-[#d4af37]/10 pointer-events-none rounded-2xl z-0"></div>
      
      {/* Map Container */}
      {/* We use h-full to ensure it uses vertical space, and auto width to maintain aspect ratio */}
      <div className="relative h-[90%] w-full max-w-2xl aspect-[2/3] flex items-center justify-center p-4">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Base Land */}
          <path
            d="M0 0 H100 V100 H0 Z"
            fill="#E6C288" // Sandstone color
            fillOpacity="0.1"
          />

          {/* The Nile River - Stylized Path */}
          <motion.path
            d="M50 100 C 60 90, 65 85, 65 80 C 65 75, 60 70, 65 65 C 70 60, 60 55, 58 50 C 56 45, 60 40, 55 35 C 50 30, 52 25, 52 25 L 45 10 L 59 10 L 52 25 Z"
            fill="none"
            stroke="#40E0D0" // Turquoise
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
           {/* Nile Delta Fill */}
           <path 
             d="M 52 25 L 45 10 L 59 10 Z"
             fill="#40E0D0"
             fillOpacity="0.3"
           />

           {/* Desert Details (Subtle Waves) */}
           <path d="M10 80 Q 20 75 30 80" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
           <path d="M70 20 Q 80 15 90 20" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
           <path d="M15 40 Q 25 35 35 40" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />

          {/* Locations */}
          {LOCATIONS.map((loc) => {
            const isActive = loc.id === activeLocationId;
            return (
              <g 
                key={loc.id} 
                className="cursor-pointer group"
                onClick={() => onLocationClick(loc.id)}
              >
                {/* Ping Animation for Active */}
                {isActive && (
                   <motion.circle
                   cx={loc.coordinates.x}
                   cy={loc.coordinates.y}
                   r="3"
                   fill="none"
                   stroke="#d4af37"
                   strokeWidth="0.5"
                   initial={{ scale: 1, opacity: 0.8 }}
                   animate={{ scale: 3, opacity: 0 }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                 />
                )}

                {/* Location Dot */}
                <motion.circle
                  cx={loc.coordinates.x}
                  cy={loc.coordinates.y}
                  r={isActive ? 1.5 : 1}
                  fill={isActive ? "#d4af37" : "#26619C"} // Gold or Lapis
                  stroke="#1a1a1a"
                  strokeWidth="0.2"
                  whileHover={{ scale: 2 }}
                />

                {/* Label (Only show active or on hover) */}
                <foreignObject
                  x={loc.coordinates.x - 15}
                  y={loc.coordinates.y - 5}
                  width="30"
                  height="10"
                  className={`pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  <div className="flex justify-center items-center h-full">
                    <span className="text-[3px] bg-black/70 text-[#d4af37] px-1 py-0.5 rounded cinzel-font whitespace-nowrap shadow-lg">
                      {loc.name}
                    </span>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* Compass / Legend decoration */}
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30 pointer-events-none">
             <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#d4af37" strokeWidth="1" fill="none" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="#d4af37" strokeWidth="0.5" />
                <text x="50" y="25" textAnchor="middle" fill="#d4af37" fontSize="10" className="cinzel-font">N</text>
             </svg>
        </div>
      </div>
    </div>
  );
};

export default EgyptianMap;