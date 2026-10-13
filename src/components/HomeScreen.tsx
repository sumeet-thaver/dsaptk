import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Waves, 
  Newspaper, 
  ExternalLink, 
  Sparkles,
  HelpCircle,
  Clock,
  Radio
} from 'lucide-react';
import { 
  OBJECTIVES, 
  HALL_OF_FAME_HIGHLIGHTS, 
  MEDIA_GALLERY, 
  GalleryItem 
} from '../data/associationData';

interface HomeScreenProps {
  onNavigateTab: (tab: string) => void;
  onOpenRegister: () => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateTab,
  onOpenRegister,
  onOpenLightbox
}) => {
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'swimming' | 'tournament'>('all');
  const PRIMARY_BANNER_URL = "https://dsaptk.org/images/banner.png";
  const FALLBACK_BANNER_URL = "https://lh3.googleusercontent.com/aida/AEtjO1VHE4pjdUOXXAlZVcpR4qoDyjlmL0TH801xBgonpPLQIHhQh2WPR9kjbaBd4EkoYRV9l9dB5xeHN1z1kuabNEAJHF37cKUsdCdIcRWMduIgReVQtaP9cHlnmMHjjamnqJfdBwyV7uR7TCk-QxwEh5eb9pRqXydWIkJWSHv_CdQnZcBmFf6zBXwrEzpyH0U4tUu3b6iEqwzNwsag3U2RWxUjuecalitcj75RbRfmdlNxcXPoYYzrhpGAN2id";
  const [bannerSrc, setBannerSrc] = useState(PRIMARY_BANNER_URL);

  const PRIMARY_POOL_URL = "https://dsaptk.org/images/pool.png";
  const FALLBACK_POOL_URL = "https://lh3.googleusercontent.com/aida/AEtjO1UhzVJ2DPMPYq8HMmnPQ72Ui_QH8CfaoIBZ2aGzrW9gixQEZDbbhlY6yTReCm6pY18Va-Z6qa-f7_Gl_sBBL5Qda5QUwuTRaUJBd2iqXZm1I9SQKBC44IJsag_KVbqmsY-P90ir9yuWUuzdQHdWf-OpZn1NpngAXEa_Tr3DRFNBk9Hz-I1Ejw7tlsnzzTHqS2muK62NJbSKzrsLzM__QIF7cYe-JrQcr_opnrrLoNHk7hHwwG8_t_WR0XzS";
  const [poolSrc, setPoolSrc] = useState(PRIMARY_POOL_URL);

  const filteredGallery = MEDIA_GALLERY.filter(item => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Dynamic Athletic Bulletin */}
      <section className="w-full bg-[#001026] text-white py-2.5 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-sm border-b border-[#0b2545]">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#006399] text-white text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-ping"></span>
              District Meet
            </span>
            <span className="hidden sm:inline text-xs font-semibold text-slate-200">
              Affiliated with Punjab Swimming Association & SFI
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300 overflow-hidden whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              Official Reg No: <strong className="text-white font-semibold">DIC/PTK/16 of 2026-27</strong>
            </span>
            <span className="opacity-40">|</span>
            <span className="hidden md:inline text-slate-300">
              Municipal Swimming Pool, Lamini • Training & Trials Active
            </span>
          </div>
        </div>
      </section>

      {/* 1. Hero Showcase / Tournament Announcement */}
      <section className="w-full py-8 sm:py-10 bg-gradient-to-b from-[#f2f3ff] via-[#faf8ff] to-[#eaedff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          
          {/* Primary Feature Banner Container */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0b2545] border border-slate-200/40">
            {/* Banner Image Display */}
            <div className="w-full aspect-[21/9] sm:aspect-[2.18/1] min-h-[290px] max-h-[520px] relative overflow-hidden flex items-center justify-center">
              <img 
                src={bannerSrc} 
                alt="Pathankot District Swimming Association - District Swimming Competition Official Banner"
                onError={() => setBannerSrc(FALLBACK_BANNER_URL)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001026]/90 via-[#001026]/30 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="flex flex-col text-white">
                  <span className="text-[11px] font-bold text-sky-300 tracking-widest uppercase mb-1 drop-shadow">
                    Annual District Championship
                  </span>
                  <h1 className="font-extrabold text-2xl sm:text-4xl text-white drop-shadow-md leading-tight">
                    District Swimming Competition
                  </h1>
                  <p className="text-sm sm:text-base text-slate-200 mt-1 font-medium">
                    Sub-Junior, Junior & Senior State Qualifying Heats
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 flex-wrap">
                  <button 
                    onClick={onOpenRegister}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#006399] text-white font-bold text-sm hover:bg-[#0077b6] transition-all shadow-md active:scale-95"
                  >
                    <Trophy className="w-4 h-4 text-sky-200" />
                    <span>Register for Competition</span>
                  </button>

                  <button 
                    onClick={() => onNavigateTab('schedule')}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/95 backdrop-blur-md text-[#001026] font-bold text-sm hover:bg-white transition-all shadow-sm active:scale-95"
                  >
                    <span>View Meet Schedule</span>
                    <Calendar className="w-4 h-4 text-[#006399]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Live Countdown & Fixture Telemetry Strip */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100">
            {/* Box 1: Championship Date */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#006399] shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Championship Date</span>
                <span className="font-bold text-base text-[#001026]">09 OCT, Friday</span>
                <span className="text-xs text-[#006399] font-semibold">08:00 HRS Onwards</span>
              </div>
            </div>

            {/* Box 2: Official Venue */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#006399] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Official Venue</span>
                <span className="font-bold text-base text-[#001026]">MC Swimming Pool</span>
                <span className="text-xs text-slate-500">Lamini, Pathankot</span>
              </div>
            </div>

            {/* Box 3: Age Divisions */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#006399] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Age Divisions</span>
                <span className="font-bold text-base text-[#001026]">Sub-Junior / Junior / Senior</span>
                <span className="text-xs text-slate-500">Boys & Girls Categories</span>
              </div>
            </div>

            {/* Box 4: Entry Status */}
            <div className="flex flex-col justify-center bg-[#0b2545] text-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between text-[11px] font-bold text-sky-200 uppercase tracking-wider mb-1">
                <span>Entry Status</span>
                <span className="inline-flex items-center gap-1.5 text-sky-300">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  Live Portal
                </span>
              </div>
              <span className="font-extrabold text-base text-white">Open Enrollment</span>
              <span className="text-xs text-slate-300">Affiliated club verifications mandatory</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. About Section & Accreditations */}
      <section className="w-full py-14 sm:py-16 bg-[#faf8ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Pool Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div 
                className="relative overflow-hidden shadow-xl bg-slate-100 group border border-slate-200"
                style={{ borderRadius: '0 80px 0 0' }}
              >
                <img 
                  src={poolSrc} 
                  alt="Municipal Swimming Pool Lamini Pathankot facility"
                  onError={() => setPoolSrc(FALLBACK_POOL_URL)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover aspect-[0.97/1] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0b2545]/90 backdrop-blur-md rounded-xl p-4 text-white flex items-center gap-3.5 shadow-lg border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#006399] flex items-center justify-center shrink-0">
                    <Waves className="w-5 h-5 text-sky-200" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-sky-300 uppercase tracking-widest">Municipal Landmark</span>
                    <span className="text-sm font-bold text-white">Lamini Swimming Center</span>
                    <span className="text-xs text-slate-300">A vintage gem, carefully maintained since 1980</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content & Verbatim Bullets */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#006399] uppercase tracking-widest">
                  About
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001026] tracking-tight leading-tight">
                  Pathankot District Swimming Association
                </h2>
                <div className="w-16 h-1 rounded-full bg-[#006399] mt-1"></div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Pathankot District Swimming Association is a non-profit organization. It is the governing body and driving force behind swimming in district pathankot. It has been constantly working towards promotion and growth of swimming and nurturing talented swimmers in the state of punjab from district pathankot.
              </p>

              {/* Core Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  'Experienced Team',
                  'Fun and Enjoyment',
                  'Comprehensive Programs',
                  'Community Spirit',
                  'Focus on Safety',
                  'A vintage gem, carefully maintained since 1980'
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-sky-200 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#006399] shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button 
                  onClick={() => onNavigateTab('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#006399] text-white font-bold text-sm hover:bg-[#001026] transition-all shadow-md active:scale-95"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Affiliations Row with Real dsaptk.org Logos */}
              <div className="mt-2 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-4">
                  Our Affiliations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* IOA Partner */}
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://dsaptk.org/images/patners-logo.png" 
                      alt="Indian Olympic Association Partners"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 object-contain rounded-xl bg-slate-50 p-1 border border-slate-200 shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#001026] leading-tight">Indian Olympic Association</span>
                      <span className="text-[11px] text-slate-500">Apex National Governing Body</span>
                    </div>
                  </div>

                  {/* SFI */}
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://dsaptk.org/images/Swimming_Federation_of_India.png" 
                      alt="Swimming Federation of India (SFI)"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 object-contain rounded-xl bg-slate-50 p-1 border border-slate-200 shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#001026] leading-tight">Swimming Federation of India</span>
                      <span className="text-[11px] text-slate-500">National Aquatic Federation</span>
                    </div>
                  </div>

                  {/* PSA */}
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://dsaptk.org/images/Punjab_Swimming%20_Association.png" 
                      alt="Punjab Swimming Association"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 object-contain rounded-xl bg-slate-50 p-1 border border-slate-200 shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#001026] leading-tight">Punjab Swimming Association</span>
                      <span className="text-[11px] text-slate-500">State Aquatic Authority</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Objective Section */}
      <section className="w-full py-16 bg-[#0b2545] text-[#f2f3ff] shadow-inner">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
                Charter & Mission
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Our Objective
              </h2>
              <div className="w-16 h-1 rounded-full bg-[#006399] mt-1"></div>
            </div>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Chartered guidelines empowering youth aquatic talent, standardizing competitive meets, and cultivating champions for Punjab and India.
            </p>
          </div>

          {/* Grid of 8 Verbatim Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OBJECTIVES.map((obj) => (
              <div 
                key={obj.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#001026]/70 backdrop-blur-sm hover:bg-[#001026] transition-all border border-slate-700/50 shadow-md group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-extrabold text-2xl text-sky-400 font-mono">
                    {obj.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sky-300 group-hover:bg-[#006399] group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {obj.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Hall Of Fame Highlights */}
      <section className="w-full py-16 bg-[#f2f3ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-[#006399] uppercase tracking-widest">
                Championship Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001026] tracking-tight">
                Hall Of Fame
              </h2>
              <div className="w-16 h-1 rounded-full bg-[#006399] mt-1"></div>
            </div>

            <button 
              onClick={() => onNavigateTab('hall-of-fame')}
              className="inline-flex items-center gap-2 text-[#006399] font-bold text-sm hover:text-[#001026] transition-colors"
            >
              <span>Explore Hall of Fame Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Authentic Ceremony Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HALL_OF_FAME_HIGHLIGHTS.map((card) => (
              <div 
                key={card.id}
                onClick={() => onNavigateTab('hall-of-fame')}
                className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all cursor-pointer group border border-slate-100"
              >
                <div className="w-full aspect-[443/500] relative overflow-hidden bg-slate-100">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-sm ${
                    card.tagType === 'secondary' 
                      ? 'bg-[#006399] text-white' 
                      : 'bg-[#001026]/85 text-white'
                  }`}>
                    {card.tag}
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-1.5">
                  <h3 className="font-bold text-base text-[#001026] leading-snug group-hover:text-[#006399] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Media Gallery (Tournaments & Training) */}
      <section className="w-full py-16 bg-[#faf8ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          
          <div className="flex flex-col items-center text-center gap-1.5">
            <span className="text-xs font-bold text-[#006399] uppercase tracking-widest">
              Moments In Action
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001026] tracking-tight">
              Media Gallery
            </h2>
            <div className="w-16 h-1 rounded-full bg-[#006399] mt-1"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <button 
              onClick={() => setGalleryFilter('all')}
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
                galleryFilter === 'all' 
                  ? 'bg-[#006399] text-white shadow-md' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setGalleryFilter('swimming')}
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
                galleryFilter === 'swimming' 
                  ? 'bg-[#006399] text-white shadow-md' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Swimming
            </button>
            <button 
              onClick={() => setGalleryFilter('tournament')}
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
                galleryFilter === 'tournament' 
                  ? 'bg-[#006399] text-white shadow-md' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Tournament
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all border border-slate-200 cursor-pointer"
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#001026]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <span className="text-white font-bold text-xs">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Latest News & Articles Section */}
      <section className="w-full py-16 bg-[#f2f3ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#006399] uppercase tracking-widest">
                  News
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001026] tracking-tight">
                  News And Articles Latest
                </h2>
                <div className="w-16 h-1 rounded-full bg-[#006399] mt-1"></div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Swimming associations are vital to the promotion, development, and sustainability of swimming as a sport and a life skill. By joining and supporting your local swimming association, you're contributing to the growth of a vibrant, healthy, and safe swimming community.
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => onNavigateTab('news')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#006399] text-white font-bold text-sm hover:bg-[#001026] transition-all shadow-md active:scale-95"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Press Coverage Mosaic */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b2545] rounded-2xl p-6 sm:p-7 shadow-xl text-white flex flex-col gap-5 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                    Press Coverage & Media Releases
                  </span>
                  <Newspaper className="w-5 h-5 text-sky-400" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Press Card 1 */}
                  <div 
                    onClick={() => onNavigateTab('news')}
                    className="flex flex-col bg-white text-[#001026] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group"
                  >
                    <div className="w-full h-32 overflow-hidden rounded-lg mb-2.5 bg-slate-100 border border-slate-100">
                      <img 
                        src="https://dsaptk.org/images/pathankot-new.png" 
                        alt="Dainik newspaper clipping"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#006399] uppercase tracking-wider mb-1">
                      Dainik Times / Local Daily
                    </span>
                    <h4 className="font-bold text-sm leading-snug">
                      District Swimmers Shine in State Tournament Trials
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                      Special press release highlighting Pathankot athletes winning laurels across 50M and 100M freestyle events.
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100 text-[11px]">
                      <span className="text-slate-400 font-medium">District Edition</span>
                      <span className="text-[#006399] font-bold flex items-center gap-1">
                        Verified Press <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    </div>
                  </div>

                  {/* Press Card 2 */}
                  <div 
                    onClick={() => onNavigateTab('news')}
                    className="flex flex-col bg-white text-[#001026] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group"
                  >
                    <div className="w-full h-32 overflow-hidden rounded-lg mb-2.5 bg-slate-100 border border-slate-100">
                      <img 
                        src="https://dsaptk.org/images/pathankot-new2.png" 
                        alt="Punjab Kesari newspaper clipping"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#006399] uppercase tracking-wider mb-1">
                      Punjab Kesari Sports
                    </span>
                    <h4 className="font-bold text-sm leading-snug">
                      Lamini Municipal Pool Hosts District Aquatics Meet
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                      Coverage of comprehensive training camps, referee delegations, and young prodigies preparing for National Games.
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100 text-[11px]">
                      <span className="text-slate-400 font-medium">State Sports Desk</span>
                      <span className="text-[#006399] font-bold flex items-center gap-1">
                        Archive <ExternalLink className="w-3 h-3 text-[#006399]" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl flex items-center justify-between text-xs text-slate-300 border border-white/10">
                  <span className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-sky-400 shrink-0" />
                    Press reporters and media personnel can request official credentials
                  </span>
                  <button 
                    onClick={() => onNavigateTab('reach-us')}
                    className="text-sky-300 hover:text-white font-semibold transition-colors underline shrink-0 ml-2"
                  >
                    Contact PRO
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
