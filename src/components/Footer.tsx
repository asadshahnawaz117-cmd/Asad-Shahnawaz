import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-white" strokeWidth="2.2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Prep<span className="text-blue-500">EVC</span>
              </span>
            </div>

            <p className="mt-4 text-xs text-slate-400 max-w-sm leading-relaxed">
              La plateforme française de référence pour la préparation aux Épreuves de Vérification des Connaissances (EVC) et l’intégration à la Procédure d’Autorisation d’Exercice (PAE) des médecins praticiens diplômés hors Union Européenne (PADHUE).
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Conforme au référentiel du Centre National de Gestion (CNG)</span>
            </div>
          </div>

          {/* Col 1: Formations EVC */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Spécialités Phares
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#formations" className="hover:text-white transition-colors">Anesthésie-Réanimation</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Médecine d’Urgence</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Médecine Générale</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Radiologie & Imagerie</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Chirurgie Orthopédique</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Cardiologie</a></li>
            </ul>
          </div>

          {/* Col 2: Méthodologie */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              La Démarche EVC
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#difference" className="hover:text-white transition-colors">Passe Méthodologique</a></li>
              <li><a href="#structure" className="hover:text-white transition-colors">Banque de 3000+ QCM</a></li>
              <li><a href="#structure" className="hover:text-white transition-colors">Simulations d’Oraux Blancs</a></li>
              <li><a href="#resultats" className="hover:text-white transition-colors">Statistiques de Réussite</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Calendrier & Inscriptions</a></li>
            </ul>
          </div>

          {/* Col 3: Espace Membre */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Espace Membre
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={onOpenLogin} className="hover:text-blue-400 text-left transition-colors font-medium">
                  Se connecter à la plateforme
                </button>
              </li>
              <li>
                <button onClick={onOpenLogin} className="hover:text-blue-400 text-left transition-colors">
                  Créer un compte candidat
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Assistance pédagogique
                </a>
              </li>
              <li>
                <a href="#resultats" className="hover:text-white transition-colors">
                  Promotion 2024 / 2025
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PrepEVC. Tous droits réservés. Dédié à la réussite des confrères médecins.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-slate-400 cursor-pointer">Politique de Confidentialité</span>
            <span className="hover:text-slate-400 cursor-pointer">Conditions Générales</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
