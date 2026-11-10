import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Play, CheckCircle, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenVideo: (title?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenVideo }) => {
  const videoTestimonials = [
    {
      title: "« La meilleure décision que j'ai prise »",
      speaker: 'Dr. Karim T. · Anesthésie',
      duration: '4:15 min',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: "« Elle a réussi les EVC : témoignage de Maria »",
      speaker: 'Dr. Maria S. · Radiologie',
      duration: '5:40 min',
      image: 'https://images.unsplash.com/photo-1594824813587-c5980a316c02?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: "« Major de promo dès le 1er essai »",
      speaker: 'Dr. Youssef B. · Urgences',
      duration: '3:50 min',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Retours d'Expérience Confraternels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Ils sont <span className="text-blue-600">lauréats des EVC</span> grâce à leur préparation avec nous
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Découvrez comment nos étudiants ont transformé leur préparation et obtenu leur affectation en hôpital français.
          </p>
        </div>

        {/* Written Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header with 5 stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Lauréat Vérifié</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h4>
                  <div className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    {t.specialty} {t.rank && `· ${t.rank}`}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.hospital}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Strip (Exact to Image 1) */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 text-center sm:text-left flex items-center gap-2">
            <Play className="w-4 h-4 text-blue-600" />
            <span>Témoignages vidéos de nos lauréats</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {videoTestimonials.map((v, i) => (
              <div
                key={i}
                onClick={() => onOpenVideo(v.title)}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 cursor-pointer bg-slate-900"
              >
                {/* Thumbnail */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Play circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-semibold backdrop-blur-sm">
                    {v.duration}
                  </div>
                </div>

                {/* Bottom title */}
                <div className="p-4 bg-slate-900 text-white">
                  <h4 className="text-xs font-bold line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {v.speaker}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
