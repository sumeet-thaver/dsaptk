/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { OfficeBearersScreen } from './components/OfficeBearersScreen';
import { HallOfFameScreen } from './components/HallOfFameScreen';
import { ScheduleScreen } from './components/ScheduleScreen';
import { NewsScreen } from './components/NewsScreen';
import { NoticesScreen } from './components/NoticesScreen';
import { ReachUsScreen } from './components/ReachUsScreen';
import { RegistrationModal } from './components/RegistrationModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { NoticeReaderModal } from './components/NoticeReaderModal';
import { MEDIA_GALLERY, GalleryItem, OfficialNotice } from './data/associationData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [activeNotice, setActiveNotice] = useState<OfficialNotice | null>(null);

  const handleNavigateTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e] antialiased selection:bg-[#eaedff] selection:text-[#006399]">
      {/* Fixed Sticky Header */}
      <Header 
        currentTab={currentTab}
        onSelectTab={handleNavigateTab}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Main Content Area offset for 120px fixed header */}
      <main className="w-full pt-[120px] flex-1">
        {currentTab === 'home' && (
          <HomeScreen 
            onNavigateTab={handleNavigateTab}
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentTab === 'about' && (
          <AboutScreen 
            onOpenRegister={() => setIsRegisterOpen(true)}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {currentTab === 'office-bearers' && (
          <OfficeBearersScreen />
        )}

        {currentTab === 'hall-of-fame' && (
          <HallOfFameScreen />
        )}

        {currentTab === 'schedule' && (
          <ScheduleScreen 
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {currentTab === 'news' && (
          <NewsScreen 
            onNavigateTab={handleNavigateTab}
          />
        )}

        {currentTab === 'notices' && (
          <NoticesScreen 
            onOpenNoticeReader={(notice) => setActiveNotice(notice)}
          />
        )}

        {currentTab === 'reach-us' && (
          <ReachUsScreen />
        )}
      </main>

      {/* Official Association Footer */}
      <Footer 
        onSelectTab={handleNavigateTab}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Athlete Competition Registration Modal */}
      <RegistrationModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Full Screen Image Lightbox */}
      <ImageLightboxModal 
        item={lightboxItem}
        items={MEDIA_GALLERY}
        onClose={() => setLightboxItem(null)}
        onSelect={(item) => setLightboxItem(item)}
      />

      {/* Official Notice Gazette Reader Modal */}
      <NoticeReaderModal 
        notice={activeNotice}
        onClose={() => setActiveNotice(null)}
      />
    </div>
  );
}
