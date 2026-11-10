import React, { useState } from 'react';
import { SPECIALTIES_DATA } from '../data/mockData';
import { Specialty } from '../types';
import { BookOpen, Check, ArrowRight, Clock, Award } from 'lucide-react';

interface SpecialtiesGridProps {
  onSelectSpecialty: (specialty: Specialty) => void;
  onOpenLogin: () => void;
}

export const SpecialtiesGrid: React.FC<SpecialtiesGridProps> = ({
  onSelectSpecialty,
  onOpenLogin,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSpecialties = SPECIALTIES_DATA.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="formations" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Curriculum Complet & Certifié
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Nous proposons les <span className="text-blue-600">formations EVC</span> suivantes
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Chaque programme est dirigé par un Praticien Hospitalier spécialisé et couvre 100% des items requis pour les épreuves théoriques et pratiques.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
          
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Toutes ({SPECIALTIES_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('emergency')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'emergency'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Urgences & Réanimation
            </button>
            <button
              onClick={() => setActiveCategory('medicine')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'medicine'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Médecine
            </button>
            <button
              onClick={() => setActiveCategory('surgery')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'surgery'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Chirurgie
            </button>
            <button
              onClick={() => setActiveCategory('radiology')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'radiology'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Radiologie
            </button>
          </div>

          {/* Quick Search */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Rechercher une spécialité..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-blue-500"
            />
          </div>

        </div>

        {/* Specialties Grid (matching screenshot 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecialties.map((specialty) => (
            <div
              key={specialty.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Popular tag */}
                {specialty.isPopular && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wide shadow-md">
                    Forte Demande
                  </div>
                )}

                {/* Pass rate text badge */}
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs font-bold drop-shadow">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{specialty.passRate}% Taux de réussite</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {specialty.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{specialty.hours}h de cours</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span>{specialty.casesCount} cas cliniques</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-3 flex items-center gap-2">
                  <button
                    onClick={() => onSelectSpecialty(specialty)}
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Détails & Programme</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={onOpenLogin}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                    title="Accéder aux QCM de cette spécialité"
                  >
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
