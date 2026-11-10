import React from 'react';
import { Video, HelpCircle, UserCheck, Award, Monitor, Smartphone, ArrowRight } from 'lucide-react';

interface StructureSectionProps {
  onOpenLogin: () => void;
}

export const StructureSection: React.FC<StructureSectionProps> = ({ onOpenLogin }) => {
  return (
    <section id="structure" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Ingénierie Pédagogique Avancée
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Comment est <span className="text-blue-600">structurée notre formation</span> aux EVC ?
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Un écosystème d’apprentissage hybride pensé pour concilier vos contraintes hospitalières avec un entraînement intensif au concours.
          </p>
        </div>

        {/* Central Laptop Showcase matching Image 1 */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-800">
            <img
              src="/src/assets/images/elearning_laptop_mockup_1793878009981.jpg"
              alt="Plateforme e-learning PrepEVC"
              className="w-full h-auto object-cover max-h-[520px]"
              referrerPolicy="no-referrer"
            />
            
            {/* Ambient subtle badge overlay */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-2 border border-white/10 shadow-lg">
              <Monitor className="w-4 h-4 text-blue-400" />
              <span>Plateforme Web & Mobile accessible 24/7</span>
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
              <button
                onClick={onOpenLogin}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Tester la plateforme</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (matching screenshot 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Visioconférences & replays illimités
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Sessions live hebdomadaires animées par des PH, entièrement enregistrées en haute définition et indexées par mots-clés.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
              100% disponible en différé
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Banques de QCM & cas cliniques EVC
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Plus de 3 000 questions types conformes aux exigences du jury national, avec explications détaillées et pièges fréquents.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              Actualisation continue 2024
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Entraînements méthodologiques & oraux blancs
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                4 concours blancs en conditions réelles et simulations orales individuelles avec débriefing immédiat par un médecin membre de jury.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
              Grilles officielles du CNG
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Accompagnement tutorat individuel
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Un tuteur dédié vous suit personnellement pour auditer vos révisions, ajuster votre planning et relire vos dossiers administratifs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              Suivi jusqu’à l’affectation
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
