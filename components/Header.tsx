import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1 sm:p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-background-dark font-bold text-sm sm:text-base">terminal</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">ReadmeGen</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <a className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1" href="#">
            <span className="material-symbols-outlined text-[1rem]">dashboard</span> Editor
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1" href="#">
            <span className="material-symbols-outlined text-[1rem]">style</span> Templates
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1" href="#">
            <span className="material-symbols-outlined text-[1rem]">public</span> Community
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1" href="#">
            <span className="material-symbols-outlined text-[1rem]">menu_book</span> Docs
          </a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden sm:flex items-center justify-center rounded-lg h-9 sm:h-10 px-4 sm:px-6 bg-primary text-background-dark text-xs sm:text-sm font-bold hover:brightness-110 transition-all">
            Get Started
          </button>
          <button className="md:hidden text-slate-900 dark:text-white flex items-center justify-center h-10 w-10 hover:bg-slate-100 dark:hover:bg-background-dark/80 rounded-lg transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
