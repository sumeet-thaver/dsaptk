import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';
import { 
  HALL_OF_FAME_HIGHLIGHTS, 
  DISTRICT_RECORDS, 
  HallOfFameItem,
  DistrictRecord 
} from '../data/associationData';

interface HallOfFameScreenProps {
  onOpenLightboxWithItem?: (item: any) => void;
}

export const HallOfFameScreen: React.FC<HallOfFameScreenProps> = () => {
  const [recordSearch, setRecordSearch] = useState('');
  const [selectedStrokeFilter, setSelectedStrokeFilter] = useState('All');

  const filteredRecords = DISTRICT_RECORDS.filter(rec => {
    const matchesQuery = rec.swimmer.toLowerCase().includes(recordSearch.toLowerCase()) ||
                         rec.event.toLowerCase().includes(recordSearch.toLowerCase()) ||
                         rec.club.toLowerCase().includes(recordSearch.toLowerCase());
    
    if (selectedStrokeFilter === 'All') return matchesQuery;
    return matchesQuery && rec.event.toLowerCase().includes(selectedStrokeFilter.toLowerCase());
  });

  return (
    <div className="w-full py-10 sm:py-14 bg-[#faf8ff]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Banner */}
        <div className="bg-[#0b2545] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col gap-3">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
            Excellence & Accolades
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hall Of Fame & District Records
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            Honoring exceptional swimmers, record breakers, podium finishers, and dedicated mentors representing Pathankot in state, national, and championship meets.
          </p>
        </div>

        {/* 3 Authentic Photo Showcases */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#001026]">
              Championship Ceremonies & Felicitations
            </h2>
            <span className="text-xs text-[#006399] font-bold">
              Official Archives
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HALL_OF_FAME_HIGHLIGHTS.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-[443/500] w-full overflow-hidden relative bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md ${
                    item.tagType === 'secondary' ? 'bg-[#006399]' : 'bg-[#001026]/90'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-extrabold text-base text-[#001026] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#006399]" />
                      Season {item.year}
                    </span>
                    <span className="text-[#006399] font-bold">
                      Municipal Pool Lamini
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official District Records Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#006399] uppercase tracking-widest block mb-1">
                Official Benchmark Times
              </span>
              <h3 className="text-2xl font-extrabold text-[#001026]">
                Pathankot District Swimming Records (Long Course 50M)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Verified electronic touch-pad timings ratified by PDSA Technical Committee.
              </p>
            </div>

            {/* Search & Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search athlete or stroke..."
                  value={recordSearch}
                  onChange={e => setRecordSearch(e.target.value)}
                  className="pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#006399] w-48 sm:w-56"
                />
              </div>

              <select 
                value={selectedStrokeFilter}
                onChange={e => setSelectedStrokeFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#006399]"
              >
                <option value="All">All Strokes</option>
                <option value="Freestyle">Freestyle</option>
                <option value="Butterfly">Butterfly</option>
                <option value="Breaststroke">Breaststroke</option>
                <option value="Backstroke">Backstroke</option>
                <option value="Medley">Individual Medley</option>
              </select>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#eaedff] text-[#001026] uppercase font-bold tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Event Discipline</th>
                  <th className="py-3 px-4">Age Category</th>
                  <th className="py-3 px-4">Record Holder</th>
                  <th className="py-3 px-4">Affiliated Club</th>
                  <th className="py-3 px-4">Record Time</th>
                  <th className="py-3 px-4 text-right">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((rec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{rec.event}</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-medium">
                        {rec.category}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#001026]">
                        {rec.swimmer}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {rec.club}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-[#006399]">
                        {rec.recordTime}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 text-right font-medium">
                        {rec.year}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-400">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs text-slate-600">
            <span>
              💡 Athletes who break an existing district record are awarded the PDSA Championship Trophy and direct qualification seeds for Punjab State Aquatics.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
