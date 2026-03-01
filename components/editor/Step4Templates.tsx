import React from 'react';
import Image from 'next/image';
import { EditorState } from './types';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

const ReadmePreview = ({ state }: { state: EditorState }) => {
  const githubUser = state.profile.github || 'anuraghazra';
  const themeParam = state.analytics.theme !== 'transparent' && state.analytics.theme !== 'default' 
    ? `&theme=${state.analytics.theme}` 
    : '&bg_color=00000000&hide_border=true&title_color=11d452&icon_color=11d452';

  const trophyTheme = state.analytics.theme === 'transparent' ? 'radical' : state.analytics.theme;

  return (
    <div className="font-sans text-slate-100 bg-[#0d1117] p-8 rounded-b-2xl min-h-[600px] border border-slate-800">
      
      {state.profile.fullName && (
        <h1 className="text-3xl font-bold border-b border-slate-700 pb-2 mb-4">
          {state.templateId === 'creative' ? `✨ Hi 👋, I'm ${state.profile.fullName} ✨` : `Hi 👋, I'm ${state.profile.fullName}`}
        </h1>
      )}

      {state.profile.title && (
        <h3 className="text-xl font-medium mb-6">{state.profile.title}</h3>
      )}

      {/* Social Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {state.profile.website && <Image src={`https://img.shields.io/badge/Website-102216?style=for-the-badge&logo=About.me&logoColor=11d452`} alt="Website" width={100} height={100} />}
        {state.profile.github && <Image src={`https://img.shields.io/badge/GitHub-102216?style=for-the-badge&logo=github&logoColor=11d452`} alt="GitHub" width={100} height={100} />}
        {state.profile.linkedin && <Image src={`https://img.shields.io/badge/LinkedIn-102216?style=for-the-badge&logo=linkedin&logoColor=11d452`} alt="LinkedIn" width={100} height={100} />}
        {state.profile.twitter && <Image src={`https://img.shields.io/badge/Twitter-102216?style=for-the-badge&logo=x&logoColor=11d452`} alt="Twitter" width={100} height={100} />}
        {state.profile.instagram && <Image src={`https://img.shields.io/badge/Instagram-102216?style=for-the-badge&logo=instagram&logoColor=11d452`} alt="Instagram" width={100} height={100} />}
        {state.profile.threads && <Image src={`https://img.shields.io/badge/Threads-102216?style=for-the-badge&logo=threads&logoColor=11d452`} alt="Threads" width={100} height={100} />}
        {state.profile.youtube && <Image src={`https://img.shields.io/badge/YouTube-102216?style=for-the-badge&logo=youtube&logoColor=11d452`} alt="YouTube" width={100} height={100} />}
        {state.profile.twitch && <Image src={`https://img.shields.io/badge/Twitch-102216?style=for-the-badge&logo=twitch&logoColor=11d452`} alt="Twitch" width={100} height={100} />}
        {state.profile.discord && <Image src={`https://img.shields.io/badge/Discord-102216?style=for-the-badge&logo=discord&logoColor=11d452`} alt="Discord" width={100} height={100} />}
      </div>

      {(state.profile.website || state.profile.github || state.profile.linkedin || state.profile.twitter || state.profile.instagram || state.profile.threads || state.profile.youtube || state.profile.twitch || state.profile.discord) && (
        <hr className="border-slate-800 mb-6" />
      )}

      {/* Visitor Badge */}
      {state.analytics.showVisitorBadge && (
        <div className="mb-6">
          <Image src={`https://komarev.com/ghpvc/?username=${githubUser}&color=11d452&style=for-the-badge`} alt="Visitor Badge" width={200} height={100} />
        </div>
      )}

      {/* About Me */}
      {state.profile.about && (
        <div className="prose prose-invert prose-emerald max-w-none mb-6 whitespace-pre-wrap">
          {state.profile.about}
        </div>
      )}

      {/* Trophies */}
      {state.analytics.showTrophies && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-4">🏆 GitHub Trophies</h2>
          <div className="mb-6 flex overflow-x-auto">
            <Image src={`https://github-profile-trophy-mu.vercel.app/?username=${githubUser}&theme=${trophyTheme}&no-frame=true&no-bg=true&margin-w=15`} alt="GitHub Trophies" className="max-w-full" width={800} height={200} />
          </div>
        </div>
      )}

      {/* Tech Stack */}
      {state.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-4">💻 Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {state.skills.map(skillId => (
              <Image key={skillId} src={`https://img.shields.io/badge/${skillId.toUpperCase()}-102216?style=for-the-badge&logo=${skillId}&logoColor=11d452`} alt={skillId} width={100} height={100} />
            ))}
          </div>
        </div>
      )}

      {/* GitHub Analytics */}
      {(state.analytics.showStats || state.analytics.showLanguages || state.analytics.showStreak || state.analytics.showGraph) && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-4">📊 GitHub Analytics</h2>
          <div className={`flex flex-wrap gap-4 ${['data-driven', 'creative'].includes(state.templateId) ? 'justify-between' : 'flex-col items-start'}`}>
            {state.analytics.showLanguages && <Image src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUser}&layout=compact${themeParam}`} alt="Top Languages" className="max-w-full" width={300} height={150} />}
            {state.analytics.showStreak && <Image src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}${themeParam.replace('&theme=', '&theme=')}`} alt="GitHub Streak" className="max-w-full" width={400} height={150} />}
            {state.analytics.showStats && <Image src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUser}&show_icons=true${themeParam}`} alt="GitHub Stats" className="max-w-full" width={495} height={192} />}
            {state.analytics.showGraph && (
              <div className="w-full mt-4">
                <Image src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=102216&color=11d452&line=11d452&point=11d452&area=true&hide_border=true`} alt="Activity Graph" className="max-w-full" width={800} height={200} />
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export function Step4Templates({ state, setState, nextStep, prevStep }: StepProps) {
  const templates = [
    { id: 'minimalist', label: 'Minimalist' },
    { id: 'data-driven', label: 'Data-Driven' },
    { id: 'developer', label: 'Developer' },
    { id: 'creative', label: 'Creative' },
    { id: 'compact', label: 'Compact' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Step 4: Template Selection & Preview</h2>
          <p className="text-slate-500 dark:text-slate-400">Choose a layout style and watch your profile come to life instantly in the live preview.</p>
        </div>
        
        {/* Template Tabs/Toggles */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-primary/5 p-1 rounded-xl border border-slate-200 dark:border-primary/10">
          {templates.map(tpl => (
            <button 
              key={tpl.id}
              onClick={() => setState(s => ({ ...s, templateId: tpl.id }))}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                state.templateId === tpl.id 
                  ? 'bg-primary text-background-dark shadow-md rounded-lg' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-primary/10 rounded-lg'
              }`}
            >
              {tpl.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full relative shadow-[0_0_15px_rgba(17,212,82,0.2)] border-2 border-primary/30 rounded-2xl overflow-hidden bg-slate-900">
        
        {/* Mac OS Style Header */}
        <div className="bg-[#161b22] px-6 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs font-mono opacity-50 text-white">README.md</span>
          </div>
          <div className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Live Sync</span>
          </div>
        </div>

        {/* The Live Render Component */}
        <div className="max-h-[800px] overflow-y-auto custom-scrollbar">
          <ReadmePreview state={state} />
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-primary/10 bg-white dark:bg-background-dark/20 p-4 flex justify-between items-center rounded-xl shadow-sm border dark:border-transparent transition-all">
        <button onClick={prevStep} className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg">
          <span className="material-symbols-outlined font-bold">arrow_back</span>
          Back
        </button>
        <button onClick={nextStep} className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all outline-none">
          Generate Final Code
          <span className="material-symbols-outlined font-bold">rocket_launch</span>
        </button>
      </div>

    </div>
  );
}
