import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DifferenceSection } from './components/DifferenceSection';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { StructureSection } from './components/StructureSection';
import { ComparisonSection } from './components/ComparisonSection';
import { ResultsSection } from './components/ResultsSection';
import { InstructorsSection } from './components/InstructorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { NeumorphicLoginPage } from './components/NeumorphicLoginPage';
import { SpecialtyModal } from './components/SpecialtyModal';
import { VideoModal } from './components/VideoModal';
import { ContactModal } from './components/ContactModal';
import { Specialty } from './types';

export default function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; role: string } | null>(null);
  
  // Modals state
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState<string>("« ÉCHOUER OU RÉUSSIR LES EVC ? »");
  const [contactDoctor, setContactDoctor] = useState<string | null>(null);

  // Check persisted user
  useEffect(() => {
    const saved = localStorage.getItem('prepevc_user');
    if (saved) {
      try {
        setCurrentUser(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleLoginSuccess = (user: { name: string; email: string; role: string }) => {
    setCurrentUser(user);
    localStorage.setItem('prepevc_user', JSON.stringify(user));
    setIsLoginModalOpen(false);
    setIsLoginView(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('prepevc_user');
  };

  const handleOpenVideo = (customTitle?: string) => {
    if (customTitle) setVideoTitle(customTitle);
    setVideoModalOpen(true);
  };

  // If in Standalone Fullscreen Login View (exact to Image 2)
  if (isLoginView) {
    return (
      <div className="relative min-h-screen">
        <NeumorphicLoginPage
          isStandalonePage={true}
          onBackToLanding={() => setIsLoginView(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    );
  }

  // Main PrepEVC Website (exact to Image 1)
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Top Navigation */}
      <Navbar
        onOpenLogin={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        isLoginView={isLoginView}
        onToggleView={() => setIsLoginView(!isLoginView)}
      />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenLogin={() => setIsLoginModalOpen(true)}
          onOpenVideo={() => handleOpenVideo("« ÉCHOUER OU RÉUSSIR LES EVC ? »")}
          onOpenSpecialties={() => {
            const el = document.getElementById('formations');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: Ce qui fait la différence avec PrepEVC */}
        <DifferenceSection
          onOpenVideo={() => handleOpenVideo("« ÉCHOUER OU RÉUSSIR LES EVC ? »")}
        />

        {/* Section 3: Nous proposons les formations EVC suivantes */}
        <SpecialtiesGrid
          onSelectSpecialty={(specialty) => setSelectedSpecialty(specialty)}
          onOpenLogin={() => setIsLoginModalOpen(true)}
        />

        {/* Section 4: Comment est structurée notre formation aux EVC ? */}
        <StructureSection
          onOpenLogin={() => setIsLoginModalOpen(true)}
        />

        {/* Section 5: Ce qui distingue PrepEVC des autres formations */}
        <ComparisonSection
          onOpenRegister={() => setIsLoginModalOpen(true)}
        />

        {/* Section 6: Nos résultats EVC 2024 */}
        <ResultsSection
          onOpenRegister={() => setIsLoginModalOpen(true)}
        />

        {/* Section 7: Nos médecins formateurs EVC */}
        <InstructorsSection
          onOpenConsultation={(docName) => setContactDoctor(docName)}
        />

        {/* Section 8: Ils sont lauréats des EVC grâce à leur préparation avec nous */}
        <TestimonialsSection
          onOpenVideo={(title) => handleOpenVideo(title)}
        />

        {/* Section 9: Questions fréquentes (FAQ) */}
        <FaqSection
          onContactSupport={() => setContactDoctor('Conseiller Pédagogique')}
        />
      </main>

      {/* Footer */}
      <Footer onOpenLogin={() => setIsLoginModalOpen(true)} />

      {/* Floating Action Button for immediate access to the Neumorphic Login Page */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsLoginView(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 text-white dark:bg-blue-600 font-bold text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/20"
          title="Ouvrir la page de connexion neumorphique en plein écran"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
          <span>Voir Page de Connexion (Image 2)</span>
        </button>
      </div>

      {/* Neumorphic Login Modal Popup (Exact to Image 2) */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-[430px] my-auto">
            <NeumorphicLoginPage
              isStandalonePage={false}
              onBackToLanding={() => setIsLoginModalOpen(false)}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        </div>
      )}

      {/* Specialty Curriculum Details Modal */}
      {selectedSpecialty && (
        <SpecialtyModal
          specialty={selectedSpecialty}
          onClose={() => setSelectedSpecialty(null)}
          onOpenLogin={() => {
            setSelectedSpecialty(null);
            setIsLoginModalOpen(true);
          }}
        />
      )}

      {/* Video Presentation Modal */}
      {videoModalOpen && (
        <VideoModal
          title={videoTitle}
          onClose={() => setVideoModalOpen(false)}
          onOpenLogin={() => {
            setVideoModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      )}

      {/* Doctor / Advisor Consultation Modal */}
      {contactDoctor && (
        <ContactModal
          doctorName={contactDoctor}
          onClose={() => setContactDoctor(null)}
        />
      )}

    </div>
  );
}
