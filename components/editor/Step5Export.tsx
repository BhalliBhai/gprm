import React, { useMemo, useState } from 'react';
import { EditorState } from './types';
import { SKILL_LABELS } from './Step2Skills';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  prevStep: () => void;
}

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const stripLeadingAt = (value: string) => value.trim().replace(/^@+/, '');

const sanitizeGithubUsername = (value: string) => stripLeadingAt(value).replace(/[^a-zA-Z0-9-]/g, '');

const normalizeWebsite = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
  return `https://${trimmed}`;
};

const ensureSegment = (value: string, removePrefix: string) => {
  const trimmed = value.trim();
  return trimmed.startsWith(removePrefix) ? trimmed.slice(removePrefix.length) : trimmed;
};

const linkOrEmpty = (label: string, logo: string, href: string) => {
  if (!href) return '';
  return `[<img src="https://img.shields.io/badge/${encodeURIComponent(label)}-102216?style=for-the-badge&logo=${logo}&logoColor=11d452"/>](${href})`;
};

const buildSocialLinks = (state: EditorState) => {
  const website = normalizeWebsite(state.profile.website);
  const github = sanitizeGithubUsername(state.profile.github);
  const linkedin = ensureSegment(stripLeadingAt(state.profile.linkedin), 'in/');
  const twitter = stripLeadingAt(state.profile.twitter);
  const instagram = stripLeadingAt(state.profile.instagram);
  const threads = stripLeadingAt(state.profile.threads);
  const youtube = stripLeadingAt(state.profile.youtube);
  const twitch = stripLeadingAt(state.profile.twitch);

  return [
    linkOrEmpty('Website', 'aboutdotme', website),
    linkOrEmpty('GitHub', 'github', github ? `https://github.com/${github}` : ''),
    linkOrEmpty('LinkedIn', 'linkedin', linkedin ? `https://linkedin.com/in/${linkedin}` : ''),
    linkOrEmpty('Twitter', 'x', twitter ? `https://twitter.com/${twitter}` : ''),
    linkOrEmpty('Instagram', 'instagram', instagram ? `https://instagram.com/${instagram}` : ''),
    linkOrEmpty('Threads', 'threads', threads ? `https://threads.net/@${threads}` : ''),
    linkOrEmpty('YouTube', 'youtube', youtube ? `https://youtube.com/@${youtube}` : ''),
    linkOrEmpty('Twitch', 'twitch', twitch ? `https://twitch.tv/${twitch}` : '')
  ].filter(Boolean);
};

const skillsToBadges = (skills: string[]) =>
  skills.map((skillId) => {
    const skillLabel = SKILL_LABELS[skillId] || skillId;
    return `  <img src="https://img.shields.io/badge/${encodeURIComponent(skillLabel)}-102216?style=for-the-badge&logo=${encodeURIComponent(skillId)}&logoColor=11d452" alt="${escapeHtml(skillLabel)}"/>`;
  });

const buildAnalyticsBlock = (state: EditorState, centerAlign: boolean) => {
  const githubUser = sanitizeGithubUsername(state.profile.github) || 'anuraghazra';
  const themeParam =
    state.analytics.theme !== 'transparent' && state.analytics.theme !== 'default'
      ? `&theme=${state.analytics.theme}`
      : '&bg_color=00000000&hide_border=true&title_color=11d452&icon_color=11d452';

  const lines: string[] = [];
  if (centerAlign) lines.push('<p align="center">');
  if (state.analytics.showStats) {
    lines.push(
      `  <img src="https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUser}&show_icons=true${themeParam}" alt="GitHub Stats" />`
    );
  }
  if (state.analytics.showLanguages) {
    lines.push(
      `  <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUser}&layout=compact${themeParam}" alt="Top Languages" />`
    );
  }
  if (state.analytics.showStreak) {
    lines.push(
      `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}${themeParam}" alt="GitHub Streak" />`
    );
  }
  if (state.analytics.showGraph) {
    lines.push('  <br/>');
    lines.push(
      `  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=102216&color=11d452&line=11d452&point=11d452&area=true&hide_border=true" alt="Activity Graph" />`
    );
  }
  if (centerAlign) lines.push('</p>');
  return lines.join('\n');
};

const generateMarkdown = (state: EditorState): string => {
  const githubUser = sanitizeGithubUsername(state.profile.github) || 'anuraghazra';
  const socials = buildSocialLinks(state);
  const safeName = escapeHtml(state.profile.fullName.trim());
  const safeTitle = escapeHtml(state.profile.title.trim());
  const safeAbout = state.profile.about.trim();

  let md = '';

  if (safeName) {
    if (state.templateId === 'creative') {
      md += `<h1 align="center">✨ Hi 👋, I'm ${safeName} ✨</h1>\n`;
    } else if (state.templateId === 'compact') {
      md += `## 👋 ${safeName}\n`;
    } else {
      md += `<h1 align="center">Hi 👋, I'm ${safeName}</h1>\n`;
    }
  }

  if (safeTitle) {
    if (state.templateId === 'compact') {
      md += `**${safeTitle}**\n\n`;
    } else {
      md += `<h3 align="center">${safeTitle}</h3>\n\n`;
    }
  }

  if (socials.length > 0) {
    if (state.templateId === 'developer') {
      md += `### Connect with me\n\n${socials.join(' ')}\n\n`;
    } else {
      md += `<p align="center">\n${socials.join('\n')}\n</p>\n\n<hr/>\n\n`;
    }
  }

  if (state.analytics.showVisitorBadge) {
    md += `<p align="left">\n  <img src="https://komarev.com/ghpvc/?username=${githubUser}&color=11d452&style=for-the-badge" alt="Visitor Badge" />\n</p>\n\n`;
  }

  if (safeAbout) md += `${safeAbout}\n\n`;

  if (state.analytics.showTrophies) {
    const trophyTheme = state.analytics.theme === 'transparent' ? 'radical' : state.analytics.theme;
    md += `## 🏆 GitHub Trophies\n\n<p align="left">\n  <img src="https://github-profile-trophy-mu.vercel.app/?username=${githubUser}&theme=${trophyTheme}&no-frame=true&no-bg=true&margin-w=15" alt="GitHub Trophies" />\n</p>\n\n`;
  }

  if (state.skills.length > 0) {
    const skillBadges = skillsToBadges(state.skills);
    if (state.templateId === 'compact') {
      md += `## 🧰 Stack\n\n${skillBadges.join('\n')}\n\n`;
    } else {
      md += `## 💻 Tech Stack\n\n<p align="left">\n${skillBadges.join('\n')}\n</p>\n\n`;
    }
  }

  if (state.analytics.showStats || state.analytics.showLanguages || state.analytics.showStreak || state.analytics.showGraph) {
    const centerAlign = state.templateId === 'creative' || state.templateId === 'data-driven';
    const heading =
      state.templateId === 'data-driven'
        ? '## 📈 Performance & Activity'
        : state.templateId === 'developer'
          ? '## 📊 Engineering Metrics'
          : '## 📊 GitHub Analytics';
    md += `${heading}\n\n${buildAnalyticsBlock(state, centerAlign)}\n\n`;
  }

  if (state.templateId === 'minimalist') {
    md += `---\nBuilt with [GPRM](https://gprm.bhalli.dev)`;
  }

  return md.trim();
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
