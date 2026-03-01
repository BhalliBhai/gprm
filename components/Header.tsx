import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background-light dark:bg-background-dark p-2 rounded-lg border border-primary/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-primary">
                <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col -space-y-0">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              GPRM
            </h2>
            <span className="text-[9px] sm:text-[10px] font-bold text-primary/80 uppercase tracking-[0.2em] leading-none">
              Readme Maker
            </span>
          </div>
        </div>
        {/* <nav className="hidden md:flex items-center gap-8 lg:gap-10">
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
        </nav> */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-4 sm:px-6 bg-primary text-background-dark text-xs sm:text-sm font-bold hover:brightness-110 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
