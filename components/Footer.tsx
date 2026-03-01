import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-primary/10 py-16 px-6 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-md">
                <span className="material-symbols-outlined text-background-dark font-bold text-sm">terminal</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">ReadmeGen</h2>
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
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center md:justify-start gap-1">
            <span className="material-symbols-outlined text-xs">favorite</span> Built with love by Bhalli B
          </p>
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
