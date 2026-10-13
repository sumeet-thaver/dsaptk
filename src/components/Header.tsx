import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Globe, 
  Camera, 
  Hash, 
  PlaySquare, 
  ChevronDown, 
  ArrowRight, 
  User, 
  Menu, 
  X,
  Award,
  Calendar,
  FileText
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PRIMARY_LOGO_URL = "https://dsaptk.org/images/swimlogo.jpg";
  const FALLBACK_LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1Xr4y1__DzImEBrEpAOsE_BSP2b8Fr1NhT_xbsf4ZE1AoWZoGZZ1ku-SVLA8T-bJzSBvdW7Z33flL7xabjgkAJruteDqsV3svFg8Q2gvd8sP1SjN0iv93XKTLjJ0yzXCT-4IXftZgY1b50JEC0d5nFaO8wEQ0RpffiCbheSvxl12Ip-Zoc8WiwpgC-P7XjV_GCh8fWISY1k3iW3myhqbnYi81ywfHnN_YktNS_7Ane5LnjitsjT6qH53CtO";
  const [logoSrc, setLogoSrc] = useState(PRIMARY_LOGO_URL);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-slate-100">
      {/* 1. Top Informational Bar */}
      <div className="bg-[#0b2545] text-[#f2f3ff] text-xs font-medium">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center h-10 gap-2">
          {/* Contact Details */}
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="mailto:info@dsaptk.org" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-300" />
              <span>info@dsaptk.org</span>
            </a>
            <span className="hidden sm:inline text-slate-400 opacity-40">|</span>
            <a 
              href="tel:+919872103430" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              <span>+91 98721 03430</span>
            </a>
          </div>

          {/* Social Follow Links */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-wider text-sky-200 hidden md:inline font-semibold">
              Follow on:
            </span>
            <div className="flex items-center gap-1.5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Public Facebook Page" 
                className="w-6 h-6 rounded-full bg-[#001026] flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#006399] transition-all"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Photo Gallery Stream" 
                className="w-6 h-6 rounded-full bg-[#001026] flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#006399] transition-all"
              >
                <Camera className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Official Feed" 
                className="w-6 h-6 rounded-full bg-[#001026] flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#006399] transition-all"
              >
                <Hash className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Video Channel" 
                className="w-6 h-6 rounded-full bg-[#001026] flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#006399] transition-all"
              >
                <PlaySquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="h-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <img 
              src={logoSrc} 
              alt="Pathankot District Swimming Association Logo" 
              onError={() => setLogoSrc(FALLBACK_LOGO_URL)}
              referrerPolicy="no-referrer"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-[17px] sm:text-[19px] text-[#001026] tracking-tight leading-none uppercase">
                Pathankot District
              </span>
              <span className="text-[11px] font-bold text-[#006399] uppercase tracking-widest mt-0.5">
                Swimming Association
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            <button 
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg ${
                currentTab === 'home' 
                  ? 'bg-[#eaedff] text-[#006399]' 
                  : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* About Us with Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg inline-flex items-center gap-1 ${
                  currentTab === 'about' 
                    ? 'bg-[#eaedff] text-[#006399]' 
                    : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {aboutDropdownOpen && (
                <div 
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                  className="absolute left-0 top-full pt-1.5 w-52 z-50 animate-fadeIn"
                >
                  <div className="bg-white rounded-lg shadow-lg border border-slate-100 p-1.5">
                    <button 
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-[#eaedff] hover:text-[#006399] rounded font-medium flex items-center justify-between"
                    >
                      <span>Overview & History</span>
                    </button>
                    <button 
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-[#eaedff] hover:text-[#006399] rounded font-medium"
                    >
                      Vision & Mission
                    </button>
                    <button 
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-[#eaedff] hover:text-[#006399] rounded font-medium"
                    >
                      Municipal Pool Lamini
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('office-bearers')}
              className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg ${
                currentTab === 'office-bearers' 
                  ? 'bg-[#eaedff] text-[#006399]' 
                  : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
              }`}
            >
              Office Bearers
            </button>

            <button 
              onClick={() => handleNavClick('hall-of-fame')}
              className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg ${
                currentTab === 'hall-of-fame' 
                  ? 'bg-[#eaedff] text-[#006399]' 
                  : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
              }`}
            >
              Hall of Fame
            </button>

            <button 
              onClick={() => handleNavClick('schedule')}
              className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg ${
                currentTab === 'schedule' 
                  ? 'bg-[#eaedff] text-[#006399]' 
                  : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
              }`}
            >
              Schedule
            </button>

            <button 
              onClick={() => handleNavClick('news')}
              className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg ${
                currentTab === 'news' 
                  ? 'bg-[#eaedff] text-[#006399]' 
                  : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
              }`}
            >
              News
            </button>

            <button 
              onClick={() => handleNavClick('notices')}
              className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg ${
                currentTab === 'notices' 
                  ? 'bg-[#eaedff] text-[#006399]' 
                  : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
              }`}
            >
              Notices
            </button>

            <button 
              onClick={() => handleNavClick('reach-us')}
              className={`px-3 py-1.5 text-sm font-semibold transition-all rounded-lg ${
                currentTab === 'reach-us' 
                  ? 'bg-[#eaedff] text-[#006399]' 
                  : 'text-slate-700 hover:text-[#006399] hover:bg-slate-50'
              }`}
            >
              Reach Us
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0b2545] text-white font-semibold text-sm rounded-lg hover:bg-[#006399] transition-all shadow-[0_2px_8px_-2px_rgba(11,37,69,0.25)] hover:shadow-md"
            >
              <span>Register now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => handleNavClick('office-bearers')}
              title="Official Administration"
              className="w-9 h-9 rounded-full bg-[#001026] text-white flex items-center justify-center hover:bg-[#006399] transition-colors"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-xl animate-fadeIn">
          <button 
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'home' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'about' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            About Us & Facilities
          </button>
          <button 
            onClick={() => handleNavClick('office-bearers')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'office-bearers' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            Office Bearers
          </button>
          <button 
            onClick={() => handleNavClick('hall-of-fame')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'hall-of-fame' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            Hall of Fame
          </button>
          <button 
            onClick={() => handleNavClick('schedule')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'schedule' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            Meet Schedule & Heats
          </button>
          <button 
            onClick={() => handleNavClick('news')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'news' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            News & Press Releases
          </button>
          <button 
            onClick={() => handleNavClick('notices')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'notices' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            Notices & Circulars
          </button>
          <button 
            onClick={() => handleNavClick('reach-us')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'reach-us' ? 'bg-[#eaedff] text-[#006399]' : 'text-slate-700'
            }`}
          >
            Reach Us & Map
          </button>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-2.5 px-4 bg-[#006399] text-white font-semibold rounded-lg text-center shadow"
            >
              Athlete Competition Registration
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
