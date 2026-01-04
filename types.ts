export interface Coordinate {
  x: number; // Percentage 0-100 relative to map container
  y: number; // Percentage 0-100 relative to map container
}

export interface LocationData {
  id: string;
  name: string;
  coordinates: Coordinate;
  aliases?: string[]; // Helper to map JSON location strings to this ID
}

export type ItemType = 'period' | 'pharaoh' | 'monument' | 'person' | 'dynasty';

export interface ImageResource {
  url: string;
  caption: string;
  source?: string;
  credit?: string;
  queryHint?: string;
}

export interface RelatedEntity {
  id: string;
  relation: string;
}

export interface DetailInfo {
  // Common text blocks
  who?: string;
  summary?: string;
  
  // Lists
  whatHappens?: string[];       // Periods/Dynasties
  whyItMatters?: string[];      // Periods
  whyImportant?: string[];      // Entities
  whatToLookFor?: string[];     // Common
  funFacts?: string[];          // Common
  mythsVsReality?: string[];    // Monuments
  
  // Dynasty specific
  keyThemes?: string[];
  character?: string[];
  notes?: string;
  rulersCount?: number;

  // Monument specific
  builtFor?: string;
  purpose?: string;
  attribution?: string;

  // Relations
  relatedEntities?: RelatedEntity[];
  
  // Legacy / Context
  context?: string[]; 
  controversies?: string[];
  tags?: string[]; // Sometimes nested in detail
}

export interface TimelineItem {
  id: string;
  type: ItemType;
  name: string;
  startYear: number;
  endYear: number;
  displayStartYear?: number | null; // For UI when actual date is null/uncertain
  displayEndYear?: number | null;
  confidence?: string; // 'high', 'medium', 'low'
  description: string;
  periodId?: string; 
  dynasty?: string; 
  location?: string[]; 
  builtBy?: string; 
  image?: ImageResource;
  detail?: DetailInfo; 
  tags?: string[]; 
}

export interface AppState {
  selectedItemId: string | null;
  isMenuOpen: boolean;
}