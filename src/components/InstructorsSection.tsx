import React from 'react';
import { INSTRUCTORS_DATA } from '../data/mockData';
import { Stethoscope, Building2, MapPin, MessageSquare } from 'lucide-react';

interface InstructorsSectionProps {
  onOpenConsultation: (doctorName: string) => void;
}

export const InstructorsSection: React.FC<InstructorsSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="formateurs" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Excellence Médicale & Pédagogique
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Nos <span className="text-blue-600">médecins formateurs</span> EVC
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Des Praticiens Hospitaliers et Maîtres de Conférences qui connaissent intimement les grilles d’évaluation et le fonctionnement des jurys.
          </p>
        </div>

        {/* 3 Instructors Cards matching screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTRUCTORS_DATA.map((instructor) => (
            <div
              key={instructor.id}
              className="group rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Avatar with subtle glow */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-700">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {instructor.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {instructor.role}
                  </p>

                  <div className="mt-4 flex flex-col items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{instructor.hospital}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{instructor.city}</span>
                    </span>
                  </div>

                  {/* Quote block */}
                  <div className="mt-5 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-750 text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                    "{instructor.quote}"
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <button
                  onClick={() => onOpenConsultation(instructor.name)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Échanger avec le {instructor.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
