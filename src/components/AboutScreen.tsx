import React from 'react';
import { 
  ShieldCheck, 
  Waves, 
  Award, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  Users, 
  Clock, 
  Trophy 
} from 'lucide-react';
import { OBJECTIVES } from '../data/associationData';

interface AboutScreenProps {
  onOpenRegister: () => void;
  onNavigateTab: (tab: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenRegister, onNavigateTab }) => {
  return (
    <div className="w-full py-10 sm:py-14 bg-[#faf8ff]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Header Breadcrumb Banner */}
        <div className="bg-[#0b2545] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
              Institutional Heritage & Constitution
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Pathankot District Swimming Association
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Empowering aquatic athletes, standardizing competition rules, and maintaining the historic Municipal Swimming Pool Lamini since 1980.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-sky-200">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Reg No: DIC/PTK/16 of 2026-27
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-sky-200">
                <Award className="w-4 h-4 text-sky-400" />
                Affiliated to Punjab Swimming Association & SFI
              </span>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#006399]/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Section 1: Overview & History Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div 
              className="overflow-hidden shadow-lg border border-slate-200 bg-slate-100"
              style={{ borderRadius: '0 80px 0 0' }}
            >
              <img 
                src="https://dsaptk.org/images/pool.png" 
                alt="Lamini Municipal Pool"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#006399] flex items-center justify-center text-white font-bold">
                1980
              </div>
              <div>
                <span className="text-xs font-bold text-[#001026] block">Established Landmark</span>
                <span className="text-[11px] text-slate-500">46+ Years of Swimming Legacy</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#006399] uppercase tracking-widest">
              Origins & Founding
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001026]">
              A Non-Profit Athletic Foundation for Pathankot
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Pathankot District Swimming Association is a non-profit organization. It is the governing body and driving force behind swimming in district Pathankot. It has been constantly working towards promotion and growth of swimming and nurturing talented swimmers in the state of Punjab from district Pathankot.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Formed under the aegis of the Punjab Swimming Association and the Swimming Federation of India, PDSA coordinates state trial delegations, certifies technical officials, and organizes the prestigious Annual District Swimming Competition.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-2xl font-bold text-[#006399] block font-mono">1,200+</span>
                <span className="text-xs text-slate-600">Youth Swimmers Trained</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-2xl font-bold text-[#006399] block font-mono">48</span>
                <span className="text-xs text-slate-600">State & National Medals</span>
              </div>
            </div>

            {/* Affiliations Badges */}
            <div className="pt-2 flex items-center gap-4">
              <img 
                src="https://dsaptk.org/images/patners-logo.png" 
                alt="IOA Partners" 
                className="h-10 w-auto object-contain bg-white p-1 rounded border border-slate-200" 
              />
              <img 
                src="https://dsaptk.org/images/Swimming_Federation_of_India.png" 
                alt="Swimming Federation of India" 
                className="h-10 w-auto object-contain bg-white p-1 rounded border border-slate-200" 
              />
              <img 
                src="https://dsaptk.org/images/Punjab_Swimming%20_Association.png" 
                alt="Punjab Swimming Association" 
                className="h-10 w-auto object-contain bg-white p-1 rounded border border-slate-200" 
              />
            </div>
          </div>
        </div>

        {/* Section 2: Municipal Pool Lamini Infrastructure */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-[#006399] uppercase tracking-widest">
              Official Facility
            </span>
            <h3 className="text-2xl font-extrabold text-[#001026]">
              Municipal Swimming Pool, Lamini
            </h3>
            <p className="text-sm text-slate-600">
              The flagship aquatic arena located in Lamini, Pathankot, serving as the training headquarters and competition arena.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
              <Waves className="w-6 h-6 text-[#006399]" />
              <h4 className="font-bold text-sm text-[#001026]">50M Standard Racing Waters</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                8 dedicated racing lanes equipped with anti-wave turbulence lane ropes, certified starting blocks, and clear backstroke flags.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
              <ShieldCheck className="w-6 h-6 text-[#006399]" />
              <h4 className="font-bold text-sm text-[#001026]">Certified Water Filtration</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated continuous sand filtration system with strict daily chlorine and pH monitoring ensuring clinical grade water purity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
              <Users className="w-6 h-6 text-[#006399]" />
              <h4 className="font-bold text-sm text-[#001026]">Lifeguards & NIS Coaching</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified lifeguards on deck at all hours, accompanied by NIS Patiala qualified coaches overseeing morning and evening squads.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: The 8 Objectives Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold text-[#006399] uppercase tracking-widest">
              Bylaws & Charter
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001026]">
              Our 8 Chartered Objectives
            </h3>
            <p className="text-sm text-slate-600">
              Codified under official registration DIC/PTK/16 of 2026-27 to govern district aquatics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OBJECTIVES.map((obj) => (
              <div 
                key={obj.id} 
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-extrabold text-[#006399]">{obj.num}</span>
                  <Award className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {obj.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#eaedff] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-sky-100">
          <div>
            <h4 className="font-extrabold text-lg text-[#001026]">Participate in the Upcoming District Meet</h4>
            <p className="text-xs text-slate-600">Entries open for Sub-Junior, Junior, and Senior divisions.</p>
          </div>
          <button 
            onClick={onOpenRegister}
            className="px-6 py-2.5 bg-[#006399] hover:bg-[#004f7a] text-white rounded-lg font-bold text-sm shadow transition-colors shrink-0"
          >
            Register Swimmer Now
          </button>
        </div>

      </div>
    </div>
  );
};
