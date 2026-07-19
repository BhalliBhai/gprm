import { EditorState } from '../components/features/editor/types';
import { SKILL_LABELS, SKILL_ICONS } from '../components/features/editor/components/Step2Skills';
import { siteConfig } from '@/config/site';

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
    const skillIcon = SKILL_ICONS[skillId] || skillId;
    return `  <img src="https://img.shields.io/badge/${encodeURIComponent(skillLabel)}-102216?style=for-the-badge&logo=${encodeURIComponent(skillIcon)}&logoColor=11d452" alt="${escapeHtml(skillLabel)}"/>`;
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

export const generateMarkdown = (state: EditorState): string => {
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
    md += `---\nBuilt with [GPRM](${siteConfig.url})`;
  }

  return md.trim();
};
