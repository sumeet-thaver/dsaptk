import React, { useState } from 'react';
import { 
  Users, 
  Phone, 
  Mail, 
  Award, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';
import { OFFICE_BEARERS, OfficeBearer } from '../data/associationData';

export const OfficeBearersScreen: React.FC = () => {
  const [filterRole, setFilterRole] = useState<'All' | 'Executive' | 'Technical'>('All');

  const filteredBearers = OFFICE_BEARERS.filter(b => {
    if (filterRole === 'All') return true;
    if (filterRole === 'Technical') return b.role === 'Technical';
    return b.role !== 'Technical';
  });

  return (
    <div className="w-full py-10 sm:py-14 bg-[#faf8ff]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Banner */}
        <div className="bg-[#0b2545] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col gap-3">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
            Governance & Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Executive Committee & Office Bearers
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            The dedicated administrators, legal officers, certified coaches, and former aquatic athletes driving swimming development in District Pathankot.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setFilterRole('All')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filterRole === 'All' 
                  ? 'bg-[#006399] text-white shadow-sm' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Bearers ({OFFICE_BEARERS.length})
            </button>
            <button 
              onClick={() => setFilterRole('Executive')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filterRole === 'Executive' 
                  ? 'bg-[#006399] text-white shadow-sm' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Executive Council
            </button>
            <button 
              onClick={() => setFilterRole('Technical')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filterRole === 'Technical' 
                  ? 'bg-[#006399] text-white shadow-sm' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Technical Officials & Coaches
            </button>
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Affiliated to Punjab Swimming Association
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBearers.map((bearer) => (
            <div 
              key={bearer.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center font-bold text-[#006399] shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#f2f3ff] text-[#006399] uppercase tracking-wider border border-sky-100">
                    {bearer.designation}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-extrabold text-lg text-[#001026] leading-snug">
                    {bearer.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span>{bearer.experience}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {bearer.bio}
                </p>
              </div>

              {/* Contact Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs">
                {bearer.phone && (
                  <a 
                    href={`tel:${bearer.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#006399] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{bearer.phone}</span>
                  </a>
                )}
                {bearer.email && (
                  <a 
                    href={`mailto:${bearer.email}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#006399] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{bearer.email}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Note */}
        <div className="bg-sky-50 rounded-xl p-5 border border-sky-100 flex items-start gap-3 text-xs text-slate-700">
          <ShieldCheck className="w-5 h-5 text-[#006399] shrink-0 mt-0.5" />
          <p>
            Official elections and appointments are conducted periodically in accordance with the registered bylaws of the Pathankot District Swimming Association (Reg. No. DIC/PTK/16). For official correspondence, please contact the General Secretary at <strong className="text-slate-900">info@dsaptk.org</strong>.
          </p>
        </div>

      </div>
    </div>
  );
};
