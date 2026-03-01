import React, { useState } from 'react';
import Image from 'next/image';
import { EditorState } from './types';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

const AVAILABLE_SKILLS = [
  // Frontend
  { id: 'react', name: 'React', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertDark: true },
  { id: 'vuejs', name: 'Vue.js', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { id: 'angularjs', name: 'Angular', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { id: 'svelte', name: 'Svelte', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
  { id: 'tailwind', name: 'Tailwind', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { id: 'sass', name: 'Sass', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { id: 'html5', name: 'HTML5', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 'css3', name: 'CSS3', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id: 'python', name: 'Python', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id: 'java', name: 'Java', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { id: 'cplusplus', name: 'C++', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id: 'csharp', name: 'C#', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { id: 'express', name: 'Express', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertDark: true },
  { id: 'django', name: 'Django', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { id: 'flask', name: 'Flask', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', invertDark: true },
  { id: 'spring', name: 'Spring', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { id: 'go', name: 'Go', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { id: 'rust', name: 'Rust', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg', invertDark: true },
  { id: 'php', name: 'PHP', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { id: 'laravel', name: 'Laravel', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { id: 'ruby', name: 'Ruby', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
  { id: 'rails', name: 'Rails', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg' },
  { id: 'graphql', name: 'GraphQL', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },

  // Mobile
  { id: 'flutter', name: 'Flutter', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { id: 'swift', name: 'Swift', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { id: 'kotlin', name: 'Kotlin', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { id: 'android', name: 'Android', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { id: 'apple', name: 'iOS', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', invertDark: true },

  // Database
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id: 'mysql', name: 'MySQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { id: 'redis', name: 'Redis', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { id: 'sqlite', name: 'SQLite', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  { id: 'supabase', name: 'Supabase', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { id: 'firebase', name: 'Firebase', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { id: 'prisma', name: 'Prisma', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', invertDark: true },

  // Cloud/DevOps
  { id: 'docker', name: 'Docker', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { id: 'aws', name: 'AWS', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invertDark: true },
  { id: 'googlecloud', name: 'Google Cloud', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { id: 'azure', name: 'Azure', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { id: 'githubactions', name: 'GitHub Actions', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invertDark: true },
  { id: 'git', name: 'Git', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { id: 'linux', name: 'Linux', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { id: 'nginx', name: 'Nginx', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { id: 'vercel', name: 'Vercel', category: 'Cloud/DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invertDark: true },

  // Design
  { id: 'figma', name: 'Figma', category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { id: 'photoshop', name: 'Photoshop', category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { id: 'illustrator', name: 'Illustrator', category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { id: 'xd', name: 'Adobe XD', category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
  
  // Testing
  { id: 'jest', name: 'Jest', category: 'Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { id: 'cypress', name: 'Cypress', category: 'Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg', invertDark: true },
  { id: 'selenium', name: 'Selenium', category: 'Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' }
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Mobile', 'Cloud/DevOps', 'Database', 'Design', 'Testing'];

export function Step2Skills({ state, setState, nextStep, prevStep }: StepProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = AVAILABLE_SKILLS.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSkill = (id: string) => {
    setState((prev) => {
      const isSelected = prev.skills.includes(id);
      return {
        ...prev,
        skills: isSelected 
          ? prev.skills.filter(s => s !== id) 
          : [...prev.skills, id]
      };
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 mb-4">
        <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">Select your Stack</h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
          Choose the technologies you&apos;re using. We&apos;ll automatically generate high-quality badges and shield icons for your profile or project README.
        </p>
      </div>

      <div className="sticky top-20 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-4 mb-2 -mx-2 px-2 rounded-xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-primary/5 border-2 border-slate-200 dark:border-primary/20 focus:border-primary rounded-xl text-slate-900 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400" 
              placeholder="Search technologies (e.g. React, Python, Docker...)"
            />
          </div>
        </div>
        
        {/* Categories horizontally scrollable */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-colors ${
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[300px] content-start">
        {filteredSkills.map(skill => {
          const isSelected = state.skills.includes(skill.id);
          return (
            <div 
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-primary/5 rounded-xl border-2 cursor-pointer transition-all hover:scale-105 ${
                isSelected 
                  ? 'border-primary shadow-[0_0_15px_rgba(17,212,82,0.2)]' 
                  : 'border-transparent hover:border-primary/40'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                </div>
              )}
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <Image 
                  className={`w-10 h-10 ${skill.invertDark ? 'dark:invert' : ''}`} 
                  alt={`${skill.name} logo icon`} 
                  src={skill.logo}
                  width={40}
                  height={40}
                />
              </div>
              <span className={`text-sm transition-colors ${
                isSelected
                  ? 'font-bold text-slate-900 dark:text-slate-100'
                  : 'font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary'
              }`}>
                {skill.name}
              </span>
            </div>
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
        <button onClick={prevStep} className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg">
          <span className="material-symbols-outlined font-bold">arrow_back</span>
          Back
        </button>
        <button onClick={nextStep} className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          Continue to Step 3
          <span className="material-symbols-outlined font-bold">arrow_forward</span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
