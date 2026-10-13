import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  Share2
} from 'lucide-react';
import { NEWS_ARTICLES, NewsArticle } from '../data/associationData';

interface NewsScreenProps {
  onNavigateTab: (tab: string) => void;
}

export const NewsScreen: React.FC<NewsScreenProps> = ({ onNavigateTab }) => {
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  return (
    <div className="w-full py-10 sm:py-14 bg-[#faf8ff]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Banner */}
        <div className="bg-[#0b2545] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col gap-3">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
            Media & Publications
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            News, Press Releases & Tournament Articles
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            Verified dispatches from local newspapers, Punjab sports desks, and official PDSA media bulletins.
          </p>
        </div>

        {/* Featured News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Articles List (Span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {NEWS_ARTICLES.map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 overflow-hidden"
              >
                {article.image && (
                  <div className="w-full max-h-64 overflow-hidden rounded-xl bg-slate-100 border border-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#eaedff] text-[#006399] font-bold text-xs uppercase tracking-wider">
                    {article.source}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-xl text-[#001026] leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#006399] mt-1">
                    {article.category} · {article.edition}
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {article.fullText}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Press Release
                  </span>
                  <button
                    onClick={() => alert(`Sharing link: ${article.title}`)}
                    className="text-slate-500 hover:text-[#006399] flex items-center gap-1 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Article</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Media Contacts Sidebar (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[#0b2545] rounded-2xl p-6 text-white shadow-lg space-y-4">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-widest block">
                Press Desk & Credentials
              </span>
              <h4 className="font-extrabold text-lg">
                Media Accreditations
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Journalists, sports photojournalists, and broadcast representatives covering the upcoming District Swimming Championship may apply for deck access passes.
              </p>

              <div className="p-3 bg-white/10 rounded-xl space-y-1.5 text-xs">
                <span className="text-slate-300 block">Chief Public Relations Officer:</span>
                <strong className="text-white block font-semibold">+91 98721 03430</strong>
                <span className="text-sky-300 block">pro@dsaptk.org</span>
              </div>

              <button
                onClick={() => onNavigateTab('reach-us')}
                className="w-full py-2.5 px-4 bg-[#006399] hover:bg-[#0077b6] text-white text-xs font-bold rounded-lg transition-colors text-center shadow"
              >
                Submit Media Request
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-[#001026]">Archival Press Highlights</h4>
              <ul className="text-xs text-slate-600 space-y-2 divide-y divide-slate-100">
                <li className="pt-2">
                  <span className="font-semibold text-slate-800 block">Dainik Jagran (Punjab)</span>
                  <span>"Lamini pool records historic turnout in district aquatic coaching schemes."</span>
                </li>
                <li className="pt-2">
                  <span className="font-semibold text-slate-800 block">The Tribune Sports</span>
                  <span>"Pathankot swimmers gear up for national circuit trials in Goa."</span>
                </li>
                <li className="pt-2">
                  <span className="font-semibold text-slate-800 block">Punjab Kesari</span>
                  <span>"Felicitation ceremony awards gold medals to local swim prodigies."</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
