import React from 'react';
import { ArrowRight, Play, CheckCircle2, Award, Users, Star, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenLogin: () => void;
  onOpenVideo: () => void;
  onOpenSpecialties: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenLogin,
  onOpenVideo,
  onOpenSpecialties,
}) => {
  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950">
      
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              <span>Académie de Référence PADHUE · France</span>
            </div>

            {/* Headline matching screenshot 1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight text-balance">
              Préparation N°1 aux{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                EVC
              </span>
              : valide ta{' '}
              <span className="underline decoration-blue-500/50 decoration-wavy decoration-2">
                PAE
              </span>{' '}
              en France !
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Préparation d’élite aux Épreuves de Vérification des Connaissances (EVC) et à la Procédure d’Autorisation d’Exercice (PAE). Enseignement par des Praticiens Hospitaliers, 3000+ QCM d’annales et simulations d’oraux individuelles.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenSpecialties}
                className="px-7 py-3.5 rounded-2xl text-white font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Rejoindre le programme</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-3.5 rounded-2xl text-slate-700 dark:text-slate-200 font-semibold text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 flex items-center gap-2.5 shadow-sm transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Découvrir la méthode</span>
              </button>
            </div>

            {/* Proof Badges Row under CTA matching Image 1 */}
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                  370+
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Lauréats accompagnés
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums tracking-tight">
                  97%
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Taux de réussite
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                  70%
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Dès la 1ère tentative
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                    4.9
                  </span>
                  <span className="text-sm font-semibold text-slate-400">/5</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 ml-1" />
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Avis vérifiés PADHUE
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Visual with doctor in scrubs & floating UI plates */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer soft card with doctor photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                <img
                  src="/src/assets/images/doctor_hero_scrubs_1793878008487.jpg"
                  alt="Docteur formateur PrepEVC en tenue médicale"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>Session EVC 2024 / 2025</span>
                      </p>
                      <p className="text-xs text-slate-200">Accompagnement personnalisé par spécialité</p>
                    </div>
                    <button
                      onClick={onOpenLogin}
                      className="px-3 py-1.5 bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md rounded-xl text-xs font-bold text-white transition-all shadow-md"
                    >
                      Espace E-learning
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic Pill 1: Top Right Score Badge */}
              <div className="absolute -top-4 -right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Dossier EVC validé</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">Score Jury : 18.5 / 20</div>
                </div>
              </div>

              {/* Floating Glassmorphic Pill 2: Bottom Left Live Session Badge */}
              <div className="absolute -bottom-6 -left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Oral blanc individuel</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Conditions réelles de concours</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
