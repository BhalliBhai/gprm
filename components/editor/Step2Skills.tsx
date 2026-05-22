import React, { useState } from 'react';
import Image from 'next/image';
import { EditorState } from './types';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
  iconColor?: string;
}

const AVAILABLE_SKILLS: Skill[] = [
  { id: 'react', name: 'React', category: 'Frontend', icon: 'react' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', icon: 'nextdotjs' },
  { id: 'vuejs', name: 'Vue.js', category: 'Frontend', icon: 'vuedotjs' },
  { id: 'angular', name: 'Angular', category: 'Frontend', icon: 'angular' },
  { id: 'svelte', name: 'Svelte', category: 'Frontend', icon: 'svelte' },
  { id: 'astro', name: 'Astro', category: 'Frontend', icon: 'astro' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwindcss' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', icon: 'bootstrap' },
  { id: 'sass', name: 'Sass', category: 'Frontend', icon: 'sass' },
  { id: 'vite', name: 'Vite', category: 'Frontend', icon: 'vite' },
  { id: 'redux', name: 'Redux', category: 'Frontend', icon: 'redux' },
  { id: 'jquery', name: 'jQuery', category: 'Frontend', icon: 'jquery' },
  { id: 'html5', name: 'HTML5', category: 'Frontend', icon: 'html5' },
  { id: 'css3', name: 'CSS3', category: 'Frontend', icon: 'css3' },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', icon: 'javascript' },
  { id: 'typescript', name: 'TypeScript', category: 'Languages', icon: 'typescript' },
  { id: 'python', name: 'Python', category: 'Languages', icon: 'python' },
  { id: 'java', name: 'Java', category: 'Languages', icon: 'openjdk' },
  { id: 'go', name: 'Go', category: 'Languages', icon: 'go' },
  { id: 'rust', name: 'Rust', category: 'Languages', icon: 'rust' },
  { id: 'php', name: 'PHP', category: 'Languages', icon: 'php' },
  { id: 'ruby', name: 'Ruby', category: 'Languages', icon: 'ruby' },
  { id: 'cplusplus', name: 'C++', category: 'Languages', icon: 'cplusplus' },
  { id: 'csharp', name: 'C#', category: 'Languages', icon: 'csharp' },
  { id: 'swift', name: 'Swift', category: 'Languages', icon: 'swift' },
  { id: 'kotlin', name: 'Kotlin', category: 'Languages', icon: 'kotlin' },
  { id: 'dart', name: 'Dart', category: 'Languages', icon: 'dart' },
  { id: 'bash', name: 'Bash', category: 'Languages', icon: 'gnubash' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', icon: 'nodedotjs' },
  { id: 'express', name: 'Express', category: 'Backend', icon: 'express' },
  { id: 'nestjs', name: 'NestJS', category: 'Backend', icon: 'nestjs' },
  { id: 'django', name: 'Django', category: 'Backend', icon: 'django' },
  { id: 'flask', name: 'Flask', category: 'Backend', icon: 'flask' },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend', icon: 'fastapi' },
  { id: 'spring', name: 'Spring', category: 'Backend', icon: 'spring' },
  { id: 'laravel', name: 'Laravel', category: 'Backend', icon: 'laravel' },
  { id: 'rails', name: 'Rails', category: 'Backend', icon: 'rubyonrails' },
  { id: 'graphql', name: 'GraphQL', category: 'Backend', icon: 'graphql' },
  { id: 'apollo', name: 'Apollo GraphQL', category: 'Backend', icon: 'apollographql' },
  { id: 'socketio', name: 'Socket.IO', category: 'Backend', icon: 'socketdotio' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database', icon: 'postgresql' },
  { id: 'mysql', name: 'MySQL', category: 'Database', icon: 'mysql' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', icon: 'mongodb' },
  { id: 'redis', name: 'Redis', category: 'Database', icon: 'redis' },
  { id: 'sqlite', name: 'SQLite', category: 'Database', icon: 'sqlite' },
  { id: 'supabase', name: 'Supabase', category: 'Database', icon: 'supabase' },
  { id: 'firebase', name: 'Firebase', category: 'Database', icon: 'firebase' },
  { id: 'prisma', name: 'Prisma', category: 'Database', icon: 'prisma' },
  { id: 'planetscale', name: 'PlanetScale', category: 'Database', icon: 'planetscale' },
  { id: 'elasticsearch', name: 'Elasticsearch', category: 'Database', icon: 'elasticsearch' },
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps', icon: 'docker' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'kubernetes' },
  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps', icon: 'amazonwebservices' },
  { id: 'gcp', name: 'Google Cloud', category: 'Cloud & DevOps', icon: 'googlecloud' },
  { id: 'azure', name: 'Azure', category: 'Cloud & DevOps', icon: 'microsoftazure' },
  { id: 'cloudflare', name: 'Cloudflare', category: 'Cloud & DevOps', icon: 'cloudflare' },
  { id: 'vercel', name: 'Vercel', category: 'Cloud & DevOps', icon: 'vercel' },
  { id: 'netlify', name: 'Netlify', category: 'Cloud & DevOps', icon: 'netlify' },
  { id: 'nginx', name: 'Nginx', category: 'Cloud & DevOps', icon: 'nginx' },
  { id: 'git', name: 'Git', category: 'Tools', icon: 'git' },
  { id: 'github', name: 'GitHub', category: 'Tools', icon: 'github' },
  { id: 'githubactions', name: 'GitHub Actions', category: 'Cloud & DevOps', icon: 'githubactions' },
  { id: 'gitlab', name: 'GitLab', category: 'Tools', icon: 'gitlab' },
  { id: 'linux', name: 'Linux', category: 'Tools', icon: 'linux' },
  { id: 'ubuntu', name: 'Ubuntu', category: 'Tools', icon: 'ubuntu' },
  { id: 'postman', name: 'Postman', category: 'Tools', icon: 'postman' },
  { id: 'insomnia', name: 'Insomnia', category: 'Tools', icon: 'insomnia' },
  { id: 'figma', name: 'Figma', category: 'Design', icon: 'figma' },
  { id: 'adobexd', name: 'Adobe XD', category: 'Design', icon: 'adobexd' },
  { id: 'photoshop', name: 'Photoshop', category: 'Design', icon: 'adobephotoshop' },
  { id: 'illustrator', name: 'Illustrator', category: 'Design', icon: 'adobeillustrator' },
  { id: 'canva', name: 'Canva', category: 'Design', icon: 'canva' },
  { id: 'flutter', name: 'Flutter', category: 'Mobile', icon: 'flutter' },
  { id: 'reactnative', name: 'React Native', category: 'Mobile', icon: 'react' },
  { id: 'android', name: 'Android', category: 'Mobile', icon: 'android' },
  { id: 'ios', name: 'iOS', category: 'Mobile', icon: 'apple' },
  { id: 'xcode', name: 'Xcode', category: 'Mobile', icon: 'xcode' },
  { id: 'jest', name: 'Jest', category: 'Testing', icon: 'jest' },
  { id: 'vitest', name: 'Vitest', category: 'Testing', icon: 'vitest' },
  { id: 'cypress', name: 'Cypress', category: 'Testing', icon: 'cypress' },
  { id: 'playwright', name: 'Playwright', category: 'Testing', icon: 'playwright' },
  { id: 'selenium', name: 'Selenium', category: 'Testing', icon: 'selenium' },
  { id: 'storybook', name: 'Storybook', category: 'Testing', icon: 'storybook' },
  { id: 'pytorch', name: 'PyTorch', category: 'AI / Data', icon: 'pytorch' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI / Data', icon: 'tensorflow' },
  { id: 'scikitlearn', name: 'Scikit-Learn', category: 'AI / Data', icon: 'scikitlearn' },
  { id: 'pandas', name: 'Pandas', category: 'AI / Data', icon: 'pandas' },
  { id: 'numpy', name: 'NumPy', category: 'AI / Data', icon: 'numpy' },
  { id: 'jupyter', name: 'Jupyter', category: 'AI / Data', icon: 'jupyter' },
  { id: 'openai', name: 'OpenAI API', category: 'AI / Data', icon: 'openai' },
  { id: 'huggingface', name: 'Hugging Face', category: 'AI / Data', icon: 'huggingface' },
  { id: 'langchain', name: 'LangChain', category: 'AI / Data', icon: 'langchain' },
  { id: 'n8n', name: 'n8n', category: 'AI / Data', icon: 'n8n' },
  { id: 'notion', name: 'Notion', category: 'Tools', icon: 'notion' },
  { id: 'slack', name: 'Slack', category: 'Tools', icon: 'slack' },
  { id: 'trello', name: 'Trello', category: 'Tools', icon: 'trello' },
  { id: 'jira', name: 'Jira', category: 'Tools', icon: 'jira' },
  { id: 'pnpm', name: 'pnpm', category: 'Tools', icon: 'pnpm' },
  { id: 'npm', name: 'npm', category: 'Tools', icon: 'npm' },
  { id: 'yarn', name: 'Yarn', category: 'Tools', icon: 'yarn' }
];

export const SKILL_LABELS = AVAILABLE_SKILLS.reduce<Record<string, string>>((acc, skill) => {
  acc[skill.id] = skill.name;
  return acc;
}, {});

const CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'Languages',
  'Database',
  'Cloud & DevOps',
  'AI / Data',
  'Tools',
  'Design',
  'Mobile',
  'Testing'
];

const iconUrl = (skill: Skill) => {
  if (skill.iconColor) {
    return `https://cdn.simpleicons.org/${skill.icon}/${skill.iconColor}`;
  }
  return `https://cdn.simpleicons.org/${skill.icon}`;
};

export function Step2Skills({ state, setState, nextStep, prevStep }: StepProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = AVAILABLE_SKILLS.filter((skill) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      skill.name.toLowerCase().includes(query) ||
      skill.id.toLowerCase().includes(query) ||
      skill.category.toLowerCase().includes(query);
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSkill = (id: string) => {
    setState((prev) => {
      const isSelected = prev.skills.includes(id);
      return {
        ...prev,
        skills: isSelected ? prev.skills.filter((s) => s !== id) : [...prev.skills, id]
      };
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 mb-1">
        <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">
          Select your stack, tools, and workflow
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-3xl">
          Pick everything you actively use. We generate cleaner badges and a stronger first impression in your
          profile README.
        </p>
      </div>

      <div className="sticky top-20 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-4 mb-1 -mx-2 px-2 rounded-xl border border-slate-200/70 dark:border-primary/20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-primary/5 border-2 border-slate-200 dark:border-primary/20 focus:border-primary rounded-xl text-slate-900 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400"
              placeholder="Search by tech, language, cloud, AI, design or tools..."
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-background-dark'
                  : 'bg-slate-200 dark:bg-primary/10 text-slate-700 dark:text-slate-300 hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
          {filteredSkills.length} available, {state.skills.length} selected
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[300px] content-start">
        {filteredSkills.map((skill) => {
          const isSelected = state.skills.includes(skill.id);
          return (
            <button
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`group relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-primary shadow-[0_10px_24px_rgba(17,212,82,0.28)] bg-linear-to-b from-primary/10 to-white dark:to-primary/5'
                  : 'border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:border-primary/45'
              }`}
              style={{
                transform: isSelected ? 'translateY(-2px)' : undefined
              }}
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.55),transparent_55%)]" />
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                </div>
              )}
              <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-xl bg-linear-to-b from-white to-slate-100 dark:from-background-dark dark:to-[#0d1d13] border border-slate-200 dark:border-primary/15 shadow-inner shadow-black/5">
                <Image
                  className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                  alt={`${skill.name} logo icon`}
                  src={iconUrl(skill)}
                  width={36}
                  height={36}
                />
              </div>
              <span
                className={`text-xs text-center leading-tight ${
                  isSelected
                    ? 'font-bold text-slate-900 dark:text-slate-100'
                    : 'font-semibold text-slate-600 dark:text-slate-400 group-hover:text-primary'
                }`}
              >
                {skill.name}
              </span>
            </button>
          );
        })}

        {filteredSkills.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl opacity-50">search_off</span>
            <p>No technologies found matching your search.</p>
          </div>
        )}
      </div>

      <div className="border-t border-primary/10 bg-slate-50 dark:bg-background-dark/20 p-4 mt-8 flex justify-between items-center rounded-xl shadow-sm">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg"
        >
          <span className="material-symbols-outlined font-bold">arrow_back</span>
          Back
        </button>
        <button
          onClick={nextStep}
          className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Continue to Step 3
          <span className="material-symbols-outlined font-bold">arrow_forward</span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      ` }} />
    </div>
  );
}
