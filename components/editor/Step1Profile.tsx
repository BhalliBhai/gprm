import React from 'react';
import { EditorState } from './types';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step1Profile({ state, setState, nextStep }: StepProps) {
  const handleProfileChange = (field: keyof EditorState['profile'], value: string) => {
    setState((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value
      }
    }));
  };

  const clearAbout = () => handleProfileChange('about', '');

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
      {/* Left Side: Basic Info & Socials */}
      <div className="xl:col-span-5 flex flex-col gap-8">
        <section className="rounded-xl border border-primary/10 bg-white dark:bg-primary/5 p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">person</span>
            Identity
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">Full Name</label>
              <input suppressHydrationWarning
                value={state.profile.fullName}
                onChange={(e) => handleProfileChange('fullName', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" 
                placeholder="e.g. Alex Rivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">Professional Title</label>
              <input suppressHydrationWarning
                value={state.profile.title}
                onChange={(e) => handleProfileChange('title', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" 
                placeholder="e.g. Senior Frontend Engineer" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">Portfolio / Personal Website</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50 text-slate-500 dark:text-slate-400">link</span>
                <input suppressHydrationWarning
                  value={state.profile.website}
                  onChange={(e) => handleProfileChange('website', e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-3 pl-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" 
                  placeholder="https://alexrivera.dev" 
                  type="url"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">✨ GitHub Username (Required)</label>
              <input suppressHydrationWarning
                value={state.profile.github}
                onChange={(e) => handleProfileChange('github', e.target.value)}
                className="w-full rounded-lg border border-primary/50 dark:border-primary bg-primary/5 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white font-bold" 
                placeholder="e.g. arivera" 
                type="text"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-primary/10 bg-white dark:bg-primary/5 p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">share</span>
            Social Presence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">LinkedIn Profile</label>
              <input suppressHydrationWarning
                value={state.profile.linkedin}
                onChange={(e) => handleProfileChange('linkedin', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="in/alexrivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Twitter/X Handle</label>
              <input suppressHydrationWarning
                value={state.profile.twitter}
                onChange={(e) => handleProfileChange('twitter', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@arivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Instagram</label>
              <input suppressHydrationWarning
                value={state.profile.instagram}
                onChange={(e) => handleProfileChange('instagram', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@alex" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Threads</label>
              <input suppressHydrationWarning
                value={state.profile.threads}
                onChange={(e) => handleProfileChange('threads', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@alex" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">YouTube Channel</label>
              <input suppressHydrationWarning
                value={state.profile.youtube}
                onChange={(e) => handleProfileChange('youtube', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@alexrivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Twitch</label>
              <input suppressHydrationWarning
                value={state.profile.twitch}
                onChange={(e) => handleProfileChange('twitch', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="alexriveradev" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Discord Tag</label>
              <input suppressHydrationWarning
                value={state.profile.discord}
                onChange={(e) => handleProfileChange('discord', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="arivera#1234" 
                type="text"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Right Side: About Me Editor */}
      <div className="xl:col-span-7 h-full flex flex-col">
        <section className="flex flex-1 flex-col rounded-xl border border-primary/10 bg-white dark:bg-primary/5 overflow-hidden shadow-sm min-h-[500px]">
          <div className="flex items-center justify-between border-b border-primary/10 bg-slate-50 dark:bg-background-dark/20 p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">About Me</h3>
              <span className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">Markdown Support</span>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="p-2 text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">format_bold</span>
              </button>
              <button className="p-2 text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">format_italic</span>
              </button>
              <button className="p-2 text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">link</span>
              </button>
              <button className="p-2 text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">format_list_bulleted</span>
              </button>
              <div className="w-px h-6 bg-slate-200 dark:bg-primary/10 mx-1 self-center"></div>
              <button className="flex items-center gap-2 rounded bg-primary px-3 py-1 text-xs font-bold text-background-dark hover:brightness-90 transition-all">
                <span className="material-symbols-outlined text-xs">visibility</span>
                Preview
              </button>
            </div>
          </div>
          <div className="flex-1 p-0 flex">
            <textarea suppressHydrationWarning
              value={state.profile.about}
              onChange={(e) => handleProfileChange('about', e.target.value)}
              className="w-full flex-1 resize-none border-none bg-transparent p-6 font-mono text-sm focus:ring-0 placeholder:text-slate-400 dark:placeholder:text-primary/30 text-slate-700 dark:text-slate-300 outline-none" 
              placeholder="### 👋 Hi there! I'm Alex..."></textarea>
          </div>
          <div className="border-t border-primary/10 bg-slate-50 dark:bg-background-dark/20 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-wider opacity-60 dark:opacity-40 font-bold text-slate-500 dark:text-slate-400 w-full sm:w-auto text-center sm:text-left">
              Characters: {state.profile.about.length} / 2000
            </p>
            <div className="flex gap-4 w-full sm:w-auto">
              <button onClick={clearAbout} className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity text-slate-600 dark:text-slate-300 px-4">
                Clear All
              </button>
              <button onClick={nextStep} className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Continue to Step 2
                <span className="material-symbols-outlined font-bold">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
