import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-primary/10 py-16 px-6 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 flex flex-col gap-6">
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
            <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              The ultimate tool for developers to create stunning GitHub profile READMEs in seconds.
            </p>
            <div className="flex gap-4">
              <a className="size-10 rounded-lg border border-slate-200 dark:border-primary/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/40 transition-all" href="#">
                <span className="material-symbols-outlined text-xl">code</span>
              </a>
              <a className="size-10 rounded-lg border border-slate-200 dark:border-primary/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/40 transition-all" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="size-10 rounded-lg border border-slate-200 dark:border-primary/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/40 transition-all" href="#">
                <span className="material-symbols-outlined text-xl">chat</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">category</span> Product
            </h4>
            <nav className="flex flex-col gap-4">
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs">edit_document</span> Editor
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs">view_quilt</span> Templates
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs">monitoring</span> Stats Tool
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">library_books</span> Resources
            </h4>
            <nav className="flex flex-col gap-4">
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs">code_blocks</span> GitHub Repository
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs">book</span> Documentation
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-xs">forum</span> Community Help
              </a>
            </nav>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center md:justify-start gap-1">
              &copy; {new Date().getFullYear()} GPRM. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center md:justify-start gap-1">
              <span className="material-symbols-outlined text-xs">favorite</span> Built with love by <a className='hover:text-primary flex items-center gap-1 font-bold' href="https://bhalli.dev" target="_blank" rel="noopener noreferrer">Bhalli B</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-slate-500 dark:text-slate-500">
            <a className="hover:text-primary flex items-center gap-1" href="/privacy-policy">
              <span className="material-symbols-outlined text-xs">policy</span> Privacy Policy
            </a>
            <a className="hover:text-primary flex items-center gap-1" href="/terms-of-service">
              <span className="material-symbols-outlined text-xs">gavel</span> Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
