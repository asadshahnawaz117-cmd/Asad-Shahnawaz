import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, ArrowRight, Moon, Sun, ArrowLeft, Check, Sparkles } from 'lucide-react';

interface NeumorphicLoginProps {
  onBackToLanding?: () => void;
  onLoginSuccess?: (user: { name: string; email: string; role: string }) => void;
  isStandalonePage?: boolean;
}

export const NeumorphicLoginPage: React.FC<NeumorphicLoginProps> = ({
  onBackToLanding,
  onLoginSuccess,
  isStandalonePage = false,
}) => {
  const [isDark, setIsDark] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUsername] = useState('dr.amina@prepevc.fr');
  const [password, setPassword] = useState('EVC2024france!');
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState('Dr. Amina Benali');
  const [specialty, setSpecialty] = useState('Anesthésie-Réanimation');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      const authenticatedUser = {
        name: isSignUp ? fullName : (username.includes('@') ? username.split('@')[0] : username),
        email: username,
        role: specialty || 'Médecin EVC 2024'
      };
      setStatusMessage('Connexion réussie ! Bienvenue sur PrepEVC.');
      if (onLoginSuccess) {
        onLoginSuccess(authenticatedUser);
      }
    }, 800);
  };

  const handleSocialLogin = (platform: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const authenticatedUser = {
        name: `Confrère ${platform}`,
        email: `medecin@${platform.toLowerCase()}.com`,
        role: 'Candidat PAE / EVC'
      };
      setStatusMessage(`Authentification via ${platform} validée !`);
      if (onLoginSuccess) {
        onLoginSuccess(authenticatedUser);
      }
    }, 600);
  };

  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 transition-colors duration-300 overflow-hidden ${isDark ? 'dark bg-[#0a0f1d] text-slate-100' : 'bg-[#eef3f9] text-slate-800'}`}>
      
      {/* Background Soft Organic Floating Neumorphic Shapes matching Image 2 */}
      <div className="absolute top-[-10%] left-[-10%] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-300/35 via-blue-200/20 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[480px] h-[480px] rounded-full bg-gradient-to-tl from-indigo-300/30 via-sky-200/20 to-transparent blur-3xl pointer-events-none" />
      
      {/* Decorative Frosted Glass Spheres like the circles in Image 2 */}
      <div className="absolute top-12 left-10 w-28 h-28 rounded-full border border-white/60 dark:border-white/10 shadow-[8px_8px_20px_rgba(180,195,215,0.4),-8px_-8px_20px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4)] pointer-events-none hidden md:block opacity-75" />
      <div className="absolute bottom-16 right-12 w-36 h-36 rounded-full border border-white/50 dark:border-white/10 shadow-[10px_10px_24px_rgba(180,195,215,0.4),-10px_-10px_24px_rgba(255,255,255,0.8)] dark:shadow-[10px_10px_24px_rgba(0,0,0,0.5)] pointer-events-none hidden md:block opacity-65" />
      <div className="absolute top-1/3 right-8 w-20 h-20 rounded-full border border-white/40 dark:border-white/10 shadow-[6px_6px_16px_rgba(180,195,215,0.35),-6px_-6px_16px_rgba(255,255,255,0.7)] pointer-events-none hidden lg:block opacity-60" />

      {/* Top Bar Switcher & Back to Site Button */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-3">
        {onBackToLanding && (
          <button
            onClick={onBackToLanding}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              isDark
                ? 'bg-[#131d2e] shadow-[4px_4px_10px_#070b14,-4px_-4px_10px_#1b2942] text-slate-300 hover:text-white'
                : 'bg-[#edf2f8] shadow-[5px_5px_12px_#d0d9e5,-5px_-5px_12px_#ffffff] text-slate-700 hover:text-blue-600'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isStandalonePage ? 'Retour au site PrepEVC' : 'Fermer la connexion'}</span>
          </button>
        )}
      </div>

      {/* Top Right Neumorphic Moon / Theme Toggle (Exact to Image 2) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
            isDark
              ? 'bg-[#121c2c] shadow-[6px_6px_14px_#060a12,-6px_-6px_14px_#1e2e46] text-amber-300 hover:text-amber-200 active:shadow-[inset_3px_3px_6px_#060a12,inset_-3px_-3px_6px_#1e2e46]'
              : 'bg-[#edf2f8] shadow-[6px_6px_14px_#cfd8e5,-6px_-6px_14px_#ffffff] text-slate-800 hover:text-blue-600 active:shadow-[inset_3px_3px_6px_#cfd8e5,inset_-3px_-3px_6px_#ffffff]'
          }`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 fill-slate-800 text-slate-800" />}
        </button>
      </div>

      {/* Main Neumorphic Card Container matching Image 2 */}
      <div className="relative z-10 w-full max-w-[420px] mx-auto py-6">
        <div
          className={`relative rounded-[2.5rem] p-7 sm:p-9 transition-all duration-300 ${
            isDark
              ? 'bg-[#111927]/90 backdrop-blur-xl shadow-[18px_18px_40px_#070a12,-18px_-18px_40px_#1b273e] border border-white/5'
              : 'bg-[#f0f4f9]/90 backdrop-blur-xl shadow-[18px_18px_36px_#d1dbe7,-18px_-18px_36px_#ffffff] border border-white/80'
          }`}
        >

          {/* Top Neumorphic Emblem Plate with 3D Swirl Icon (Exact to Image 2) */}
          <div className="flex justify-center mb-6">
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-[2rem] flex items-center justify-center transition-all p-3 ${
                isDark
                  ? 'bg-gradient-to-br from-[#162236] to-[#0e1624] shadow-[10px_10px_22px_#070b14,-10px_-10px_22px_#1f2f4a]'
                  : 'bg-gradient-to-br from-[#f8fafd] to-[#e7eef7] shadow-[10px_10px_22px_#ced8e6,-10px_-10px_22px_#ffffff]'
              }`}
            >
              {/* Iridescent 3D Blue Wave / Flame Emblem matching Image 2 */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-[0_8px_16px_rgba(37,99,235,0.4)]"
                >
                  <defs>
                    <linearGradient id="waveGrad1" x1="10%" y1="0%" x2="90%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="25%" stopColor="#93c5fd" />
                      <stop offset="70%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                    <linearGradient id="waveGrad2" x1="0%" y1="10%" x2="100%" y2="90%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="waveGlow" x1="30%" y1="20%" x2="70%" y2="80%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Left bottom curl */}
                  <path
                    d="M 28 62 C 22 55, 26 38, 42 30 C 37 38, 36 48, 45 54 C 49 57, 51 63, 47 70 C 43 77, 34 77, 28 72 C 24 69, 23 66, 28 62 Z"
                    fill="url(#waveGrad2)"
                  />
                  {/* Main central 3D energetic swirl */}
                  <path
                    d="M 52 14 C 54 22, 50 30, 43 38 C 36 46, 38 60, 48 66 C 54 70, 58 64, 60 56 C 62 48, 58 38, 64 28 C 69 20, 60 14, 52 14 Z"
                    fill="url(#waveGrad1)"
                  />
                  {/* Upper light crest highlight */}
                  <path
                    d="M 53 14 C 59 18, 62 25, 61 34 C 60 41, 55 49, 57 58 C 55 52, 57 43, 63 36 C 67 31, 68 22, 53 14 Z"
                    fill="url(#waveGlow)"
                  />
                  {/* Subtle right accent swirl */}
                  <path
                    d="M 64 36 C 72 44, 73 56, 68 66 C 72 59, 74 48, 67 40 C 65 37, 63 36, 64 36 Z"
                    fill="#3b82f6"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Title and Subtitle (Exact typography from Image 2) */}
          <div className="text-center mb-7">
            <h1 className={`text-2xl sm:text-[1.75rem] font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#101828]'}`}>
              {isSignUp ? 'Créer un compte' : 'Welcome Back'}
            </h1>
            <p className={`text-xs sm:text-sm font-medium mt-1 tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {isSignUp ? 'Rejoindre la promotion EVC 2024' : 'Sign in to continue'}
            </p>
          </div>

          {/* Feedback notification */}
          {statusMessage && (
            <div className="mb-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            {/* If Sign Up mode: Full Name field */}
            {isSignUp && (
              <div
                className={`relative flex items-center rounded-2xl px-4 py-3.5 transition-all ${
                  isDark
                    ? 'bg-[#0c1422] shadow-[inset_4px_4px_8px_#060a12,inset_-4px_-4px_8px_#18243a]'
                    : 'bg-[#edf2f8] shadow-[inset_4px_4px_8px_#cfd8e5,inset_-4px_-4px_8px_#ffffff]'
                }`}
              >
                <Sparkles className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 mr-3" />
                <input
                  type="text"
                  required
                  placeholder="Nom & Prénom (ex: Dr. Benali)"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
            )}

            {/* Input 1: Username or Email (Exact to Image 2) */}
            <div
              className={`relative flex items-center rounded-2xl px-4 py-3.5 transition-all ${
                isDark
                  ? 'bg-[#0c1422] shadow-[inset_4px_4px_8px_#060a12,inset_-4px_-4px_8px_#18243a]'
                  : 'bg-[#edf2f8] shadow-[inset_4px_4px_8px_#cfd8e5,inset_-4px_-4px_8px_#ffffff]'
              }`}
            >
              <User className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 mr-3 stroke-[1.8]" />
              <input
                type="text"
                required
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent text-sm font-medium outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
              />
            </div>

            {/* If Sign Up mode: Specialty selection */}
            {isSignUp && (
              <div
                className={`relative flex items-center rounded-2xl px-4 py-3.5 transition-all ${
                  isDark
                    ? 'bg-[#0c1422] shadow-[inset_4px_4px_8px_#060a12,inset_-4px_-4px_8px_#18243a]'
                    : 'bg-[#edf2f8] shadow-[inset_4px_4px_8px_#cfd8e5,inset_-4px_-4px_8px_#ffffff]'
                }`}
              >
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium outline-none text-slate-800 dark:text-slate-100 cursor-pointer"
                >
                  <option value="Anesthésie-Réanimation" className="dark:bg-slate-900">Anesthésie-Réanimation</option>
                  <option value="Médecine d'Urgence" className="dark:bg-slate-900">Médecine d'Urgence</option>
                  <option value="Médecine Générale" className="dark:bg-slate-900">Médecine Générale</option>
                  <option value="Chirurgie Orthopédique" className="dark:bg-slate-900">Chirurgie Orthopédique</option>
                  <option value="Radiologie" className="dark:bg-slate-900">Radiologie</option>
                  <option value="Cardiologie" className="dark:bg-slate-900">Cardiologie</option>
                  <option value="Autre spécialité EVC" className="dark:bg-slate-900">Autre spécialité EVC</option>
                </select>
              </div>
            )}

            {/* Input 2: Password with Eye Toggle (Exact to Image 2) */}
            <div
              className={`relative flex items-center rounded-2xl px-4 py-3.5 transition-all ${
                isDark
                  ? 'bg-[#0c1422] shadow-[inset_4px_4px_8px_#060a12,inset_-4px_-4px_8px_#18243a]'
                  : 'bg-[#edf2f8] shadow-[inset_4px_4px_8px_#cfd8e5,inset_-4px_-4px_8px_#ffffff]'
              }`}
            >
              <Lock className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 mr-3 stroke-[1.8]" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm font-medium outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 ml-2 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Remember Me & Forgot Password Row (Exact to Image 2) */}
            <div className="flex items-center justify-between pt-1 pb-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    rememberMe
                      ? 'bg-blue-600 shadow-sm text-white'
                      : isDark
                      ? 'bg-[#0c1422] shadow-[inset_2px_2px_4px_#060a12,inset_-2px_-2px_4px_#18243a]'
                      : 'bg-[#edf2f8] shadow-[inset_2px_2px_4px_#cfd8e5,inset_-2px_-2px_4px_#ffffff]'
                  }`}
                >
                  {rememberMe && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                </div>
                <span className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Remember Me
                </span>
              </label>

              <button
                type="button"
                onClick={() => setForgotModalOpen(true)}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:underline transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Primary Glowing Gradient CTA Button with Arrow (Exact to Image 2) */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-full text-white font-bold text-base flex items-center justify-between transition-all duration-200 neumorph-glow-btn active:scale-[0.98] cursor-pointer disabled:opacity-70"
              >
                <span className="w-7"></span>
                <span className="text-center font-bold tracking-wide">
                  {isLoading ? 'Patientez...' : isSignUp ? 'Créer mon compte' : 'Login'}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </form>

          {/* "OR CONTINUE WITH" Separator (Exact to Image 2) */}
          <div className="relative my-7 flex items-center justify-center">
            <div className={`w-full border-t ${isDark ? 'border-slate-800' : 'border-slate-300/80'}`} />
            <span
              className={`absolute px-3 text-[10px] uppercase font-bold tracking-widest ${
                isDark ? 'bg-[#111927] text-slate-500' : 'bg-[#f0f4f9] text-slate-400'
              }`}
            >
              OR CONTINUE WITH
            </span>
          </div>

          {/* Social Sign-In Buttons: Google, Discord, Facebook (Exact to Image 2) */}
          <div className="flex items-center justify-center gap-4">
            
            {/* Google Button */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              aria-label="Continue with Google"
              className={`w-14 h-14 sm:w-16 sm:h-14 rounded-2xl flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-[#121c2d] shadow-[5px_5px_12px_#070b14,-5px_-5px_12px_#1b2940] hover:shadow-[3px_3px_6px_#070b14,-3px_-3px_6px_#1b2940] active:shadow-[inset_2px_2px_5px_#070b14,inset_-2px_-2px_5px_#1b2940]'
                  : 'bg-[#edf2f8] shadow-[6px_6px_14px_#cfd8e5,-6px_-6px_14px_#ffffff] hover:shadow-[3px_3px_8px_#cfd8e5,-3px_-3px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#cfd8e5,inset_-2px_-2px_5px_#ffffff]'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </button>

            {/* Discord Button */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Discord')}
              aria-label="Continue with Discord"
              className={`w-14 h-14 sm:w-16 sm:h-14 rounded-2xl flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-[#121c2d] shadow-[5px_5px_12px_#070b14,-5px_-5px_12px_#1b2940] hover:shadow-[3px_3px_6px_#070b14,-3px_-3px_6px_#1b2940] active:shadow-[inset_2px_2px_5px_#070b14,inset_-2px_-2px_5px_#1b2940]'
                  : 'bg-[#edf2f8] shadow-[6px_6px_14px_#cfd8e5,-6px_-6px_14px_#ffffff] hover:shadow-[3px_3px_8px_#cfd8e5,-3px_-3px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#cfd8e5,inset_-2px_-2px_5px_#ffffff]'
              }`}
            >
              <svg className="w-5 h-5 fill-[#5865F2]" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </button>

            {/* Facebook Button */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Facebook')}
              aria-label="Continue with Facebook"
              className={`w-14 h-14 sm:w-16 sm:h-14 rounded-2xl flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-[#121c2d] shadow-[5px_5px_12px_#070b14,-5px_-5px_12px_#1b2940] hover:shadow-[3px_3px_6px_#070b14,-3px_-3px_6px_#1b2940] active:shadow-[inset_2px_2px_5px_#070b14,inset_-2px_-2px_5px_#1b2940]'
                  : 'bg-[#edf2f8] shadow-[6px_6px_14px_#cfd8e5,-6px_-6px_14px_#ffffff] hover:shadow-[3px_3px_8px_#cfd8e5,-3px_-3px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#cfd8e5,inset_-2px_-2px_5px_#ffffff]'
              }`}
            >
              <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

          </div>

          {/* Toggle between Login and Registration */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setStatusMessage(null);
              }}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {isSignUp ? 'Vous avez déjà un compte ? Se connecter' : "Pas encore de compte ? S'inscrire"}
            </button>
          </div>

          {/* Bottom Micro-Text (Exact to Image 2: "PLAY · COMPETE · GROW TOGETHER") */}
          <div className="mt-7 text-center">
            <p className="text-[10px] tracking-[0.22em] text-slate-400 dark:text-slate-500 font-semibold uppercase select-none">
              PLAY &nbsp;·&nbsp; COMPETE &nbsp;·&nbsp; GROW TOGETHER
            </p>
            <p className="text-[9px] tracking-[0.15em] text-slate-400/70 dark:text-slate-600 font-medium uppercase mt-1">
              PREPEVC · ACADÉMIE MÉDICALE PAE FRANCE
            </p>
          </div>

        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="w-full max-w-sm p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Réinitialiser le mot de passe
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
              Entrez votre adresse email pour recevoir un lien sécurisé de réinitialisation.
            </p>

            {forgotSent ? (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-4">
                Un email de réinitialisation a été envoyé à <strong>{forgotEmail || 'votre adresse'}</strong>.
              </div>
            ) : (
              <input
                type="email"
                placeholder="Votre adresse email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white mb-4 outline-none focus:border-blue-500"
              />
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setForgotModalOpen(false);
                  setForgotSent(false);
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900"
              >
                Fermer
              </button>
              {!forgotSent && (
                <button
                  type="button"
                  onClick={() => setForgotSent(true)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Envoyer le lien
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
