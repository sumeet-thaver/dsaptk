import React from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Info } from 'lucide-react';
import { GalleryItem } from '../data/associationData';

interface ImageLightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between text-white pb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
              {item.category === 'swimming' ? 'Training & Facility' : 'Tournament Highlights'}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with Prev/Next buttons */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-contain"
          />

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Title Bar */}
        <div className="w-full bg-slate-900/90 text-white p-4 rounded-xl mt-3 flex flex-col gap-1 border border-slate-800">
          <h4 className="font-bold text-base text-white">{item.title}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
