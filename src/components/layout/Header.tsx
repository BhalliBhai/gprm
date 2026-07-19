
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const creatorSupportUrl = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL || "https://buymeacoffee.com/bhalli";
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background-light dark:bg-background-dark rounded-lg border border-primary/10 flex items-center justify-center">
              <Image className="rounded-full" src="/icon0.svg" alt="Logo" width={50} height={50} />
            </div>
          </div>
          <div className="flex flex-col space-y-0">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              GITHUB
            </h2>
            <span className="text-[9px] sm:text-[10px] font-bold text-primary/80 uppercase tracking-[0.2em] leading-none">
              Readme Maker
            </span>
          </div>
        </Link>
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
          <a
            href={creatorSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-4 sm:px-6 bg-primary text-slate-900 text-xs sm:text-sm font-bold hover:brightness-110 transition-all gap-2"
          >
            <span className="text-base sm:text-lg">☕</span>
            <span>Buy me a coffee</span>
          </a>
        </div>
      </div>
    </header>
  );
}
