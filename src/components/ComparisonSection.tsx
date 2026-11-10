import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenRegister: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenRegister }) => {
  const comparisonItems = [
    {
      label: 'Corps enseignant composé de Praticiens Hospitaliers & MCU en activité',
      prepEVC: true,
      others: false,
    },
    {
      label: 'Accompagnement continu jusqu’au choix d’affectation hospitalière',
      prepEVC: true,
      others: false,
    },
    {
      label: 'Entraînements oraux blancs individuels notés selon la grille CNG',
      prepEVC: true,
      others: false,
    },
    {
      label: 'Plateforme e-learning interactive 24/7 avec 3000+ QCM corrigés',
      prepEVC: true,
      others: false,
    },
    {
      label: 'Corrections personnalisées et détaillées de vos copies écrites',
      prepEVC: true,
      others: false,
    },
    {
      label: 'Taux de réussite documenté et audité supérieur à 95%',
      prepEVC: true,
      others: false,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Transparence & Rigueur
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Ce qui <span className="text-blue-600">distingue PrepEVC</span> des autres formations
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Comparez objectivement les piliers de notre accompagnement face aux préparations généralistes et au travail isolé.
          </p>
        </div>

        {/* Content Split: Photo on left, Table on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Photo on Left */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 dark:border-slate-800">
              <img
                src="/src/assets/images/medical_interns_collaboration_1793878009820.jpg"
                alt="Confrères médecins préparant les EVC"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-50 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-300 text-center font-medium">
                Des groupes de travail par spécialité encadrés chaque semaine.
              </div>
            </div>
          </div>

          {/* Comparison Matrix on Right */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm bg-white dark:bg-slate-900">
              
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-slate-50 dark:bg-slate-800/80 px-6 py-4 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                <div className="col-span-8">Fonctionnalités & Garanties</div>
                <div className="col-span-2 text-center text-blue-600 dark:text-blue-400">PrepEVC</div>
                <div className="col-span-2 text-center text-slate-400">Autres</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparisonItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-slate-50/50 dark:hover:bg-slate-850/50 transition-colors">
                    <div className="col-span-8 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 pr-4">
                      {item.label}
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <div className="w-7 h-7 rounded-full bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center text-rose-500">
                        <X className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* CTA Banner matching screenshot 1: "Prépare tes EVC dès maintenant !" */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Prépare tes <span className="underline decoration-blue-300">EVC</span> dès maintenant !
            </h3>
            <p className="mt-2 text-sm text-blue-100">
              Les places en tutorat individuel sont limitées à 30 confrères par spécialité afin de préserver la qualité de correction.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenRegister}
              className="px-8 py-4 rounded-2xl bg-white text-blue-900 font-extrabold text-sm hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Commencer ici</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Ambient circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
