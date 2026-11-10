import React from 'react';
import { Play, Check, ShieldCheck, BookOpen, Clock } from 'lucide-react';

interface DifferenceSectionProps {
  onOpenVideo: () => void;
}

export const DifferenceSection: React.FC<DifferenceSectionProps> = ({ onOpenVideo }) => {
  return (
    <section id="difference" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Pourquoi Choisir Notre Académie
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Ce qui fait la <span className="text-blue-600">différence</span> avec PrepEVC
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Une méthode pragmatique conçue par des praticiens hospitaliers en poste pour maximiser votre note aux épreuves écrites et orales du concours national.
          </p>
        </div>

        {/* Video Card + Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Video Showcase Card matching screenshot 1 */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group cursor-pointer" onClick={onOpenVideo}>
              
              {/* Doctor Video Thumbnail */}
              <img
                src="/src/assets/images/doctor_hero_scrubs_1793878008487.jpg"
                alt="Vidéo Échouer ou réussir les EVC"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors" />

              {/* Title Banner on Video (Exact to Screenshot 1: "« ÉCHOUER OU RÉUSSIR LES EVC ? »") */}
              <div className="absolute top-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/90 text-white text-xs font-bold shadow-md">
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Conférence Méthodologique</span>
                </div>
              </div>

              {/* Big Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-blue-600 ml-1" />
                </div>
              </div>

              {/* Bottom Video Headline Banner */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white">
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white drop-shadow">
                  « ÉCHOUER OU RÉUSSIR LES EVC ? »
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Vidéo d’analyse complète par le Dr. Perrin · 18 min</span>
                </p>
              </div>

            </div>
          </div>

          {/* Right: Methodological Explanation & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Les Épreuves de Vérification des Connaissances (EVC) & la PAE</span>
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Les EVC constituent le seuil décisif d’accès à la Procédure d’Autorisation d’Exercice (PAE) en France. Chaque année, des milliers de confrères PADHUE se présentent, mais seuls les candidats maîtrisant le formalisme académique français et la hiérarchisation diagnostique obtiennent l’admissibilité.
              </p>
            </div>

            {/* Pillar 1: Passe Méthodologique */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Passe méthodologique & décryptage du barème
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Apprenez à rédiger vos dossiers cliniques selon les grilles de notation secrètes des jurys du Centre National de Gestion (mots-clés valorisés, diagnostics différentiels pondérés, examens complémentaires justifiés).
                </p>
              </div>
            </div>

            {/* Pillar 2: Formations EVC Complètes */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-1">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Formations EVC complètes par spécialité
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Accès instantané à l’ensemble des annales 2018-2024 intégrées, cours magistraux actualisés aux recommandations HAS 2024, et entraînements intensifs avec des médecins seniors.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
