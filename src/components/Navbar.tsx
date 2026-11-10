import React from 'react';
import { User, LogIn, LogOut } from 'lucide-react';

interface NavbarProps {
  onOpenLogin: () => void;
  currentUser: { name: string; email: string; role: string } | null;
  onLogout: () => void;
  isLoginView: boolean;
  onToggleView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  currentUser,
  onLogout,
  isLoginView,
  onToggleView,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      
      {/* Top Demo Helper Banner to make toggling between Landing Page & Login Page instantaneous */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white/90">Design identique aux 2 images :</span>
            <span className="hidden sm:inline text-white/80">Site PrepEVC (Image 1) & Page de Connexion Neumorphique (Image 2)</span>
          </div>
          <button
            onClick={onToggleView}
            className="px-3 py-1 bg-white text-blue-900 rounded-md font-bold text-xs hover:bg-blue-50 transition-colors shadow-sm shrink-0 cursor-pointer"
          >
            {isLoginView ? '← Revenir au Site Principal' : '✨ Afficher la Page de Connexion Neumorphique'}
          </button>
        </div>
      </div>

      {/* Main Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Prep<span className="text-blue-600">EVC</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-0.5">
              PAE France
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a href="#formations" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
            Nos Formations EVC
          </a>
          <a href="#difference" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
            La Méthode PAE
          </a>
          <a href="#structure" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
            Structure
          </a>
          <a href="#resultats" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
            Résultats 2024
          </a>
          <a href="#formateurs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
            Nos Médecins
          </a>
          <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (with Login/Logout) */}
        <div className="flex items-center gap-3 shrink-0">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                  {currentUser.name.charAt(0)}
                </div>
                <span className="hidden sm:inline max-w-[120px] truncate">{currentUser.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Se déconnecter"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>Espace Membre</span>
              </button>
              
              <a
                href="#formations"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20 whitespace-nowrap cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Rejoindre</span>
              </a>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
