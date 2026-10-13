import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Download, 
  Filter, 
  Trophy, 
  Users, 
  CheckCircle, 
  ArrowRight,
  FileSpreadsheet
} from 'lucide-react';
import { MEET_SCHEDULE, SwimEvent } from '../data/associationData';

interface ScheduleScreenProps {
  onOpenRegister: () => void;
}

export const ScheduleScreen: React.FC<ScheduleScreenProps> = ({ onOpenRegister }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGender, setSelectedGender] = useState<string>('All');

  const filteredEvents = MEET_SCHEDULE.filter(evt => {
    const catMatch = selectedCategory === 'All' || evt.category === selectedCategory;
    const genderMatch = selectedGender === 'All' || evt.gender === selectedGender;
    return catMatch && genderMatch;
  });

  const handleDownloadStartList = () => {
    alert("Downloading official Start List (PDF) for District Swimming Competition 2026-27.");
  };

  return (
    <div className="w-full py-10 sm:py-14 bg-[#faf8ff]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Banner */}
        <div className="bg-[#0b2545] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
              Annual District Championship 2026-27
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Competition Meet Schedule & Heats
            </h1>
            <p className="text-sm text-slate-200 leading-relaxed">
              Official order of events and marshaling timetable for Sub-Junior, Junior, and Senior divisions at Municipal Swimming Pool, Lamini.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={handleDownloadStartList}
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 border border-white/20 transition-all"
            >
              <Download className="w-4 h-4 text-sky-300" />
              <span>Download Start List (PDF)</span>
            </button>
            <button
              onClick={onOpenRegister}
              className="px-5 py-2.5 rounded-lg bg-[#006399] hover:bg-[#0077b6] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <Trophy className="w-4 h-4" />
              <span>Enroll Swimmer</span>
            </button>
          </div>
        </div>

        {/* Meet Key Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#006399]" />
            <div>
              <span className="text-[11px] text-slate-500 font-bold uppercase block">Date & Day</span>
              <strong className="text-sm text-[#001026]">09 OCT, Friday</strong>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#006399]" />
            <div>
              <span className="text-[11px] text-slate-500 font-bold uppercase block">First Race Start</span>
              <strong className="text-sm text-[#001026]">08:00 HRS Sharp</strong>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#006399]" />
            <div>
              <span className="text-[11px] text-slate-500 font-bold uppercase block">Facility</span>
              <strong className="text-sm text-[#001026]">MC Swimming Pool Lamini</strong>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-600 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Filter Division:
            </span>
            {['All', 'Sub-Junior', 'Junior', 'Senior'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#006399] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 mr-1">Gender:</span>
            {['All', 'Boys', 'Girls'].map(g => (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedGender === g
                    ? 'bg-[#0b2545] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEvents.map(evt => (
            <div 
              key={evt.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#eaedff] text-[#006399] text-xs font-mono font-bold">
                      {evt.code}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{evt.session}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    evt.status === 'Finals' 
                      ? 'bg-amber-100 text-amber-800' 
                      : evt.status === 'Qualifying' 
                        ? 'bg-sky-100 text-[#006399]' 
                        : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {evt.status}
                  </span>
                </div>

                <div className="mt-3">
                  <h3 className="font-extrabold text-base text-[#001026]">
                    {evt.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-600 mt-1 font-medium">
                    <span>Division: <strong>{evt.category}</strong></span>
                    <span>·</span>
                    <span>Gender: <strong>{evt.gender}</strong></span>
                    <span>·</span>
                    <span>Stroke: <strong>{evt.stroke}</strong></span>
                  </div>
                </div>

                <div className="mt-3 p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">District Record Target:</span>
                  <span className="font-mono font-bold text-[#006399]">
                    {evt.recordTime} ({evt.holder})
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Electronic touchpads enabled
                </span>
                <button
                  onClick={onOpenRegister}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006399] hover:text-[#001026] transition-colors"
                >
                  <span>Submit Entry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Guidelines */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <h4 className="font-bold text-sm text-[#001026]">Meet Marshal Instructions & Lane Discipline</h4>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5 leading-relaxed">
            <li>Athletes must report to the Clerk of the Course 20 minutes before the scheduled heat start.</li>
            <li>One-start rule strictly applies under Swimming Federation of India (SFI) and World Aquatics bylaws.</li>
            <li>Medal presentation ceremony for morning session events will take place at 13:00 HRS.</li>
            <li>Top 2 finishers from qualifying finals will be selected for Punjab State Aquatic Championship trials.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
