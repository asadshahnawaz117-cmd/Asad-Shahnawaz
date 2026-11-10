import React, { useState } from 'react';
import { Specialty } from '../types';
import { X, Clock, HelpCircle, CheckCircle2, Award, ArrowRight, BookOpen, Shield } from 'lucide-react';

interface SpecialtyModalProps {
  specialty: Specialty | null;
  onClose: () => void;
  onOpenLogin: () => void;
}

export const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  onClose,
  onOpenLogin,
}) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!specialty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-150 dark:border-slate-800 overflow-hidden my-8">
        
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 w-full">
          <img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider">
              Programme Officiel EVC
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">
              {specialty.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {specialty.description}
          </p>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center">
            <div>
              <div className="text-lg font-black text-blue-600 dark:text-blue-400 tabular-nums">
                {specialty.hours}h
              </div>
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Volume de cours
              </div>
            </div>
            <div>
              <div className="text-lg font-black text-slate-900 dark:text-white tabular-nums">
                {specialty.casesCount}
              </div>
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Cas cliniques
              </div>
            </div>
            <div>
              <div className="text-lg font-black text-emerald-600 dark:text-emerald-400 tabular-nums">
                {specialty.passRate}%
              </div>
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Taux de réussite
              </div>
            </div>
          </div>

          {/* Syllabus Modules */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Programme des modules de la spécialité</span>
            </h3>

            <div className="space-y-2.5">
              {specialty.modules.map((mod, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-150 dark:border-slate-700/60 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {mod}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Included guarantees */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-blue-600" />
              Replays 24/7 illimités
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              4 concours blancs inclus
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900"
            >
              Fermer
            </button>

            {enrolled ? (
              <div className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Demande enregistrée !</span>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEnrolled(true);
                  setTimeout(() => {
                    onOpenLogin();
                  }, 1200);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Rejoindre cette formation ({specialty.name})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
