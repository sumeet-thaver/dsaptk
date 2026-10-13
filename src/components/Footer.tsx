import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Globe, 
  Camera, 
  Hash, 
  PlaySquare, 
  Award,
  ChevronRight 
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenRegister }) => {
  const PRIMARY_LOGO_URL = "https://dsaptk.org/images/swimlogo.jpg";
  const FALLBACK_LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1Xr4y1__DzImEBrEpAOsE_BSP2b8Fr1NhT_xbsf4ZE1AoWZoGZZ1ku-SVLA8T-bJzSBvdW7Z33flL7xabjgkAJruteDqsV3svFg8Q2gvd8sP1SjN0iv93XKTLjJ0yzXCT-4IXftZgY1b50JEC0d5nFaO8wEQ0RpffiCbheSvxl12Ip-Zoc8WiwpgC-P7XjV_GCh8fWISY1k3iW3myhqbnYi81ywfHnN_YktNS_7Ane5LnjitsjT6qH53CtO";
  const [logoSrc, setLogoSrc] = React.useState(PRIMARY_LOGO_URL);

  const handleTab = (tab: string) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0b2545] text-[#d5e3ff] border-t border-[#132c4e]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Charter Summary (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoSrc} 
                alt="Pathankot District Swimming Association Logo" 
                onError={() => setLogoSrc(FALLBACK_LOGO_URL)}
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain bg-white/10 p-1 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight uppercase leading-snug">
                  Pathankot District
                </span>
                <span className="text-[11px] font-bold text-sky-300 uppercase tracking-widest">
                  Swimming Association (Regd.)
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              The governing athletic authority committed to fostering aquatic excellence, certified training, and ethical competitive water sports standards across Pathankot district.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-sky-200">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Affiliated to Punjab Swimming Association & SFI</span>
            </div>
          </div>

          {/* Column 2: Get In Touch (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-bold text-sm text-white uppercase tracking-wider border-b border-sky-800/60 pb-2 inline-block">
              Get In Touch
            </span>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-300 mt-1 shrink-0" />
                <span>C/o Deepak Agencies Main Bazar, Pathankot - 145001 (Punjab)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                <a href="tel:+919872103430" className="hover:text-white transition-colors">
                  +91 98721 03430
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                <a href="mailto:info@dsaptk.org" className="hover:text-white transition-colors">
                  info@dsaptk.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
                <span>Reg No: DIC/PTK/16 of 2026-27</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Menus (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="font-bold text-sm text-white uppercase tracking-wider border-b border-sky-800/60 pb-2 inline-block">
              Menus
            </span>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => handleTab('about')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTab('office-bearers')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>Office Bearers</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTab('hall-of-fame')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>Hall of Fame</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTab('schedule')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>Meet Schedule</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTab('news')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>News & Press</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTab('notices')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>Notices</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTab('reach-us')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>Reach Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Info (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-bold text-sm text-white uppercase tracking-wider border-b border-sky-800/60 pb-2 inline-block">
              Social Info
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              Connect with our athletic community across media platforms for real-time race events, heat sheets, and announcements.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook Community" 
                className="w-9 h-9 rounded-lg bg-[#001026] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#006399] transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram Highlights" 
                className="w-9 h-9 rounded-lg bg-[#001026] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#006399] transition-all"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Official X Feed" 
                className="w-9 h-9 rounded-lg bg-[#001026] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#006399] transition-all"
              >
                <Hash className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube Channel" 
                className="w-9 h-9 rounded-lg bg-[#001026] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#006399] transition-all"
              >
                <PlaySquare className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full py-2 px-3 bg-[#006399] hover:bg-[#0077b6] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors text-center"
              >
                Online Swimmer Entry Portal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2025 | All rights reserved by Pathankot District Swimming Association</p>
          <p className="text-slate-400">
            Regd. under Societies Registration Act XXI of 1860 (DIC/PTK/16)
          </p>
        </div>
      </div>
    </footer>
  );
};
