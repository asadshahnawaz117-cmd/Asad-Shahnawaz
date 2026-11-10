import React, { useState } from 'react';
import { X, Play, Pause, Volume2, Maximize, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  title?: string;
  onClose: () => void;
  onOpenLogin: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  title = "« ÉCHOUER OU RÉUSSIR LES EVC ? »",
  onClose,
  onOpenLogin,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(145); // in seconds
  const totalDuration = 1080; // 18 mins

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden text-white">
        
        {/* Top Bar */}
        <div className="p-4 px-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-sm font-bold truncate max-w-md">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative h-64 sm:h-96 w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/src/assets/images/doctor_hero_scrubs_1793878008487.jpg"
            alt="Présentation vidéo"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-600 flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-white ml-1" />}
          </button>

          {/* Chapter badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-slate-200">
            Chapitre 2 : Les erreurs fatales dans la rédaction clinique
          </div>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
            {/* Scrubber */}
            <div className="w-full h-1.5 bg-slate-700 rounded-full mb-3 cursor-pointer overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${(currentTime / totalDuration) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                  {isPlaying ? 'Pause' : 'Lecture'}
                </button>
                <span>
                  {formatTime(currentTime)} / {formatTime(totalDuration)}
                </span>
                <Volume2 className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-blue-400 font-bold">1080p HD</span>
                <Maximize className="w-4 h-4 cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Video Footer info & Call to action */}
        <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <div>
            <p className="text-xs text-slate-400">
              Pour accéder à l'intégralité des 120 heures de cours et des fiches annales corrigées :
            </p>
            <p className="text-sm font-bold text-white mt-0.5">
              Rejoignez l'espace de travail PrepEVC
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/30 whitespace-nowrap cursor-pointer"
          >
            Se connecter / S'inscrire
          </button>
        </div>

      </div>
    </div>
  );
};
