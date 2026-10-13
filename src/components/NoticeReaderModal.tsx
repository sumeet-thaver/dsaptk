import React from 'react';
import { X, FileText, Download, ShieldCheck, Calendar, Hash } from 'lucide-react';
import { OfficialNotice } from '../data/associationData';

interface NoticeReaderModalProps {
  notice: OfficialNotice | null;
  onClose: () => void;
}

export const NoticeReaderModal: React.FC<NoticeReaderModalProps> = ({ notice, onClose }) => {
  if (!notice) return null;

  const handleDownload = () => {
    alert(`Downloading verified circular document: ${notice.attachment}`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scaleUp"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#006399] flex items-center justify-center text-white shrink-0">
              <FileText className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 block">
                Official Association Gazette
              </span>
              <h3 className="font-bold text-base text-white leading-snug">{notice.title}</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm text-slate-700">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 text-xs">
            <span className="text-slate-500 flex items-center gap-1 font-mono">
              <Hash className="w-3.5 h-3.5 text-[#006399]" />
              Ref: <strong className="text-slate-800">{notice.refNo}</strong>
            </span>
            <span className="text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#006399]" />
              Date of Issue: <strong className="text-slate-800">{notice.date}</strong>
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 leading-relaxed text-slate-800">
            {notice.description}
          </div>

          <div className="p-3 bg-sky-50 rounded-lg border border-sky-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#006399]" />
              <span className="text-xs font-semibold text-slate-800">{notice.attachment}</span>
            </div>
            <button 
              onClick={handleDownload}
              className="px-3 py-1.5 bg-[#006399] text-white text-xs font-semibold rounded hover:bg-[#004f7a] transition-colors flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Authenticated by General Secretary, Pathankot District Swimming Association</span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0b2545] text-white rounded-lg text-xs font-semibold hover:bg-[#006399]"
          >
            Close Gazette
          </button>
        </div>
      </div>
    </div>
  );
};
