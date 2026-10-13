import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Download, 
  Calendar, 
  ShieldAlert, 
  AlertCircle,
  ExternalLink 
} from 'lucide-react';
import { OFFICIAL_NOTICES, OfficialNotice } from '../data/associationData';

interface NoticesScreenProps {
  onOpenNoticeReader: (notice: OfficialNotice) => void;
}

export const NoticesScreen: React.FC<NoticesScreenProps> = ({ onOpenNoticeReader }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredNotices = OFFICIAL_NOTICES.filter(not => {
    const matchesSearch = not.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          not.refNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          not.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedType === 'All') return matchesSearch;
    return matchesSearch && not.type === selectedType;
  });

  return (
    <div className="w-full py-10 sm:py-14 bg-[#faf8ff]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Banner */}
        <div className="bg-[#0b2545] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col gap-3">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
            Gazette & Official Bulletins
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Notices, Circulars & Regulatory Orders
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            Official announcements issued by the Pathankot District Swimming Association concerning championships, age verification, club affiliations, and anti-doping mandates.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Circular', 'Eligibility', 'Anti-Doping', 'Affiliation'].map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedType === t
                    ? 'bg-[#006399] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search circular or ref number..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#006399]"
            />
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div 
              key={notice.id}
              onClick={() => onOpenNoticeReader(notice)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#006399] bg-[#eaedff] px-2 py-0.5 rounded">
                    {notice.refNo}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                    {notice.type}
                  </span>
                  {notice.important && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700">
                      High Priority
                    </span>
                  )}
                  <span className="text-xs text-slate-400 flex items-center gap-1 ml-auto md:ml-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {notice.date}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-[#001026] hover:text-[#006399] transition-colors leading-snug">
                  {notice.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {notice.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                <span className="text-xs font-bold text-[#006399] flex items-center gap-1 group-hover:underline">
                  <span>View Gazette</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
