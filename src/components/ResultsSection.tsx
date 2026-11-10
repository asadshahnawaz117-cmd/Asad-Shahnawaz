import React from 'react';
import { ArrowRight, CheckCircle, Trophy } from 'lucide-react';

interface ResultsSectionProps {
  onOpenRegister: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="resultats" className="py-20 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Bilan Officiel du Concours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Nos <span className="text-blue-600">résultats</span> EVC 2024
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Des promotions où l’excellence méthodique transforme les perspectives de carrière des praticiens diplômés hors UE.
          </p>
        </div>

        {/* Big Card Split matching screenshot 1 */}
        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl p-8 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: 6 Stats Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              
              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                <span className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 tabular-nums">
                  100%
                </span>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  En Radiologie & Anesthésie
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tabular-nums">
                  94%
                </span>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Admissibilité globale
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700">
                <span className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
                  87%
                </span>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Classés Top 15%
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-slate-800/80 border border-emerald-100 dark:border-slate-700">
                <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">
                  93%
                </span>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Affectation immédiate CHU
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tabular-nums">
                  61%
                </span>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Mention Très Bien
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                <span className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 tabular-nums">
                  370+
                </span>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Médecins en poste
                </p>
              </div>

              {/* Sub-banner */}
              <div className="col-span-2 sm:col-span-3 pt-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Des formations EVC complètes, avec accompagnement individuel jusqu’à la réussite.</span>
                </p>
              </div>

            </div>

            {/* Right: Instructors Group Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 dark:border-slate-800">
                <img
                  src="/src/assets/images/medical_instructors_trio_1793878009537.jpg"
                  alt="Équipe médicale de formateurs PrepEVC"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Équipe Pédagogique Lauréate</span>
              </div>
            </div>

          </div>

          {/* Bottom Action */}
          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Session EVC 2025 : inscriptions ouvertes par spécialité
            </span>
            <button
              onClick={onOpenRegister}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Vérifier mon éligibilité</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
