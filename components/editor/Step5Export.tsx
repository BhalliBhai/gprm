import React, { useMemo, useState } from 'react';
import { EditorState } from './types';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  prevStep: () => void;
}

const generateMarkdown = (state: EditorState): string => {
  let md = '';

  // Title & Subtitle
  if (state.profile.fullName) {
    if (state.templateId === 'creative') {
      md += `<h1 align="center">✨ Hi 👋, I'm ${state.profile.fullName} ✨</h1>\n`;
    } else {
      md += `<h1 align="center">Hi 👋, I'm ${state.profile.fullName}</h1>\n`;
    }
  }
  
  if (state.profile.title) {
    md += `<h3 align="center">${state.profile.title}</h3>\n\n`;
  }

  // Social Badges
  const socials = [];
  if (state.profile.website) socials.push(`[<img src="https://img.shields.io/badge/Website-102216?style=for-the-badge&logo=About.me&logoColor=11d452"/>](${state.profile.website})`);
  if (state.profile.github) socials.push(`[<img src="https://img.shields.io/badge/GitHub-102216?style=for-the-badge&logo=github&logoColor=11d452"/>](https://github.com/${state.profile.github})`);
  if (state.profile.linkedin) socials.push(`[<img src="https://img.shields.io/badge/LinkedIn-102216?style=for-the-badge&logo=linkedin&logoColor=11d452"/>](https://linkedin.com/in/${state.profile.linkedin})`);
  if (state.profile.twitter) socials.push(`[<img src="https://img.shields.io/badge/Twitter-102216?style=for-the-badge&logo=x&logoColor=11d452"/>](https://twitter.com/${state.profile.twitter})`);
  if (state.profile.instagram) socials.push(`[<img src="https://img.shields.io/badge/Instagram-102216?style=for-the-badge&logo=instagram&logoColor=11d452"/>](https://instagram.com/${state.profile.instagram})`);
  if (state.profile.threads) socials.push(`[<img src="https://img.shields.io/badge/Threads-102216?style=for-the-badge&logo=threads&logoColor=11d452"/>](https://threads.net/@${state.profile.threads})`);
  if (state.profile.youtube) socials.push(`[<img src="https://img.shields.io/badge/YouTube-102216?style=for-the-badge&logo=youtube&logoColor=11d452"/>](https://youtube.com/@${state.profile.youtube})`);
  if (state.profile.twitch) socials.push(`[<img src="https://img.shields.io/badge/Twitch-102216?style=for-the-badge&logo=twitch&logoColor=11d452"/>](https://twitch.tv/${state.profile.twitch})`);
  if (state.profile.discord) socials.push(`[<img src="https://img.shields.io/badge/Discord-102216?style=for-the-badge&logo=discord&logoColor=11d452"/>](#)`);

  if (socials.length > 0) md += `<p align="center">\n${socials.join('\n')}\n</p>\n\n<hr/>\n\n`;

  // Visitor Badge
  if (state.analytics.showVisitorBadge) {
    const githubUser = state.profile.github || 'anuraghazra';
    md += `<p align="left">\n  <img src="https://komarev.com/ghpvc/?username=${githubUser}&color=11d452&style=for-the-badge" alt="Visitor Badge" />\n</p>\n\n`;
  }

  // About Me
  if (state.profile.about) md += `${state.profile.about}\n\n`;

  // Trophies
  if (state.analytics.showTrophies) {
    const githubUser = state.profile.github || 'anuraghazra';
    const trophyTheme = state.analytics.theme === 'transparent' ? 'radical' : state.analytics.theme;
    md += `## 🏆 GitHub Trophies\n\n<p align="left">\n  <img src="https://github-profile-trophy-mu.vercel.app/?username=${githubUser}&theme=${trophyTheme}&no-frame=true&no-bg=true&margin-w=15" alt="GitHub Trophies" />\n</p>\n\n`;
  }

  // Skills
  if (state.skills.length > 0) {
    md += `## 💻 Tech Stack\n\n<p align="left">\n`;
    state.skills.forEach(skillId => {
      // Standard shield format
      md += `  <img src="https://img.shields.io/badge/${skillId.toUpperCase()}-102216?style=for-the-badge&logo=${skillId}&logoColor=11d452" alt="${skillId}"/>\n`;
    });
    md += `</p>\n\n<br/>\n\n`;
  }

  // Analytics
  const githubUser = state.profile.github || 'anuraghazra';
  const themeParam = state.analytics.theme !== 'transparent' && state.analytics.theme !== 'default' 
    ? `&theme=${state.analytics.theme}` 
    : '&bg_color=00000000&hide_border=true&title_color=11d452&icon_color=11d452';
  
  if (state.analytics.showStats || state.analytics.showLanguages || state.analytics.showStreak || state.analytics.showGraph) {
    md += `## 📊 GitHub Analytics\n\n`;
    
    if (state.templateId === 'data-driven' || state.templateId === 'creative') {
      md += `<p align="center">\n`;
    }

    if (state.analytics.showStats) {
      md += `  <img src="https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUser}&show_icons=true${themeParam}" alt="GitHub Stats" />\n`;
    }
    if (state.analytics.showLanguages) {
      md += `  <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUser}&layout=compact${themeParam}" alt="Top Languages" />\n`;
    }
    if (state.analytics.showStreak) {
      md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}${themeParam.replace('&theme=', '&theme=')}" alt="GitHub Streak" />\n`;
    }
    if (state.analytics.showGraph) {
      md += `  <br/>\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=102216&color=11d452&line=11d452&point=11d452&area=true&hide_border=true" alt="Activity Graph" />\n`;
    }

    if (state.templateId === 'data-driven' || state.templateId === 'creative') {
      md += `</p>\n\n`;
    } else {
      md += `\n`;
    }
  }

  return md;
};

export function Step5Export({ state, prevStep }: StepProps) {
  const [copied, setCopied] = useState(false);
  const markdownContent = useMemo(() => generateMarkdown(state), [state]);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = state.profile.github ? `${state.profile.github}-README.md` : "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
      {/* Left Column: Actions & Help */}
      <div className="xl:col-span-5 space-y-6">
        {/* Status Card */}
        <div className="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Ready to Export</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Your profile README is successfully generated using the <span className="font-bold uppercase text-primary text-xs ml-1">{state.templateId}</span> template.</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={handleCopy}
            className="flex flex-col items-center justify-center gap-2 p-6 bg-primary text-background-dark rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all outline-none"
          >
            <span className="material-symbols-outlined text-3xl">{copied ? 'done_all' : 'content_copy'}</span>
            <span>{copied ? 'Code Copied!' : 'Copy Markdown'}</span>
          </button>
          <button 
            onClick={handleDownload}
            className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-95 outline-none"
          >
            <span className="material-symbols-outlined text-3xl">download</span>
            <span>Download .MD</span>
          </button>
        </div>

        {/* Back Button */}
        <button onClick={prevStep} className="flex items-center justify-center gap-2 w-full p-3 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5">
          <span className="material-symbols-outlined font-bold text-sm">arrow_back</span>
          Back to Templates
        </button>

        {/* How to use */}
        <div className="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6 space-y-6 shadow-sm hidden md:block">
          <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">info</span>
            How to use
          </h3>
          <div className="space-y-6 relative">
            <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-slate-200 dark:bg-white/10"></div>
            <div className="relative flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-background-dark font-bold text-xs flex items-center justify-center shrink-0 z-10 shadow-sm shadow-primary/30">1</div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 shrink-0">Create a Repository</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Go to GitHub and create a repository named exactly the same as your username.</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/20 text-slate-700 dark:text-white font-bold text-xs flex items-center justify-center shrink-0 z-10">2</div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Paste the content</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Copy the generated code and paste it into the repository&apos;s <code className="bg-slate-100 dark:bg-black/50 px-1 py-0.5 rounded text-[10px] border border-slate-300 dark:border-white/10">README.md</code>.</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/20 text-slate-700 dark:text-white font-bold text-xs flex items-center justify-center shrink-0 z-10">3</div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Commit changes</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Commit and push the file to see your new developer profile shine on your GitHub account page!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Code Preview */}
      <div className="xl:col-span-7 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">code</span>
            Raw Code Preview
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">Markdown</span>
        </div>
        <div className="w-full bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-xl flex flex-col h-[400px] xl:h-[600px] relative">
          
          {/* Browser Top Bar Mock */}
          <div className="bg-slate-200 dark:bg-[#161b22] px-4 py-3 flex gap-2 border-b border-slate-300 dark:border-slate-800">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          
          {/* Code Render */}
          <div className="p-6 relative flex-1 overflow-y-auto font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed whitespace-pre-wrap rounded-b-xl break-words">
            {markdownContent}
          </div>
        </div>

        <div className="border-t border-primary/10 bg-slate-50 dark:bg-background-dark/20 p-4 mt-8 flex justify-between items-center rounded-xl shadow-sm border border-slate-200 dark:border-transparent xl:hidden">
          <button onClick={prevStep} className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg">
            <span className="material-symbols-outlined font-bold">arrow_back</span>
            Back to Templates
          </button>
        </div>
      </div>
    </div>
  );
}
