import React, { useMemo, useState } from 'react';
import { EditorState } from '../types';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  prevStep: () => void;
}

import { generateMarkdown } from '../../../../utils/markdown';

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
      <div className="xl:col-span-5 space-y-6">
        <div className="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Ready to Export</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Your profile README is generated using the <span className="font-bold uppercase text-primary text-xs ml-1">{state.templateId}</span> template.
            </p>
          </div>
        </div>

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

        <button onClick={prevStep} className="flex items-center justify-center gap-2 w-full p-3 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5">
          <span className="material-symbols-outlined font-bold text-sm">arrow_back</span>
          Back to Templates
        </button>
      </div>

      <div className="xl:col-span-7 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">code</span>
            Raw Code Preview
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">Markdown</span>
        </div>
        <div className="w-full bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-xl flex flex-col h-[400px] xl:h-[600px] relative">
          <div className="bg-slate-200 dark:bg-[#161b22] px-4 py-3 flex gap-2 border-b border-slate-300 dark:border-slate-800">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="p-6 relative flex-1 overflow-y-auto font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed whitespace-pre-wrap rounded-b-xl wrap-break-word">
            {markdownContent}
          </div>
        </div>
      </div>
    </div>
  );
}
