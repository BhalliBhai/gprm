import Link from 'next/link';

export default function Home() {
  const repoUrl = process.env.NEXT_PUBLIC_GPRM_GITHUB_URL || 'https://github.com/BhalliBhai/gprm';
  const creatorUrl = 'https://bhalli.dev';
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 lg:gap-8 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">v2.0 is live</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Level Up Your <br className="hidden sm:block lg:hidden" /> <span className="text-primary">GitHub Profile</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Create professional, data-driven READMEs in minutes. Generate your bio with AI, showcase your skills, stats, and projects like a pro - all for free.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Link href="/editor" className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-background-dark text-base font-bold hover:scale-[1.02] transition-transform glow-effect w-full sm:w-auto">
                Get Started <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
             {/* <button className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 border border-slate-200 dark:border-primary/20 bg-white dark:bg-primary/5 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-primary/10 transition-all w-full sm:w-auto">
                Watch Demo <span className="material-symbols-outlined">play_circle</span>
              </button> */} 
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Built by <a className="font-bold text-primary hover:underline" href={creatorUrl} target="_blank" rel="noopener noreferrer">Bhalli.dev</a> for developers who want a profile that looks world-class.
            </p>
          </div>
          {/* Visual Preview Mockup */}
          <div className="relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-full">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30"></div>
            <div className="relative rounded-xl border border-slate-200 dark:border-primary/20 bg-white dark:bg-[#152a1c] p-2 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-background-dark/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mx-auto text-[10px] font-mono text-slate-400 dark:text-primary/40 uppercase tracking-widest flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">edit</span> readme-editor.md
                </div>
              </div>
              <div className="aspect-square sm:aspect-4/3 lg:aspect-square xl:aspect-4/3 w-full bg-white dark:bg-background-dark p-4 sm:p-6 overflow-hidden">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="h-6 sm:h-8 w-32 sm:w-48 bg-slate-100 dark:bg-primary/10 rounded-lg"></div>
                    <div className="h-5 sm:h-6 w-20 sm:w-24 bg-primary/20 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="h-24 sm:h-32 rounded-lg border border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-primary/5 p-3 sm:p-4 flex flex-col justify-end gap-2">
                      <div className="h-2 w-full bg-primary/30 rounded"></div>
                      <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
                    </div>
                    <div className="h-24 sm:h-32 rounded-lg border border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-primary/5 p-3 sm:p-4 flex flex-col justify-end gap-2">
                      <div className="h-2 w-full bg-primary/30 rounded"></div>
                      <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
                    </div>
                    <div className="hidden sm:flex h-32 rounded-lg border border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-primary/5 p-4 flex-col justify-end gap-2">
                      <div className="h-2 w-full bg-primary/30 rounded"></div>
                      <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-2 sm:h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                    <div className="h-2 sm:h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                    <div className="h-2 sm:h-3 w-4/5 bg-slate-100 dark:bg-slate-800 rounded"></div>
                  </div>
                  <div className="pt-2 sm:pt-4 flex gap-2 sm:gap-3">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 px-6 border-y border-slate-200 dark:border-primary/10 bg-slate-50 dark:bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-20">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">route</span> Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white">Three steps to a better profile</h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">Our streamlined process helps you build a stunning README without touching any complex markdown code.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="group relative flex flex-col p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark hover:border-primary/40 transition-all">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-4xl sm:text-6xl font-black text-slate-100 dark:text-primary/5 select-none">01</div>
              <div className="size-12 sm:size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">account_circle</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">Fill Info</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">Connect your GitHub account and add your personal details, biography, and location automatically.</p>
            </div>
            {/* Step 2 */}
            <div className="group relative flex flex-col p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark hover:border-primary/40 transition-all">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-4xl sm:text-6xl font-black text-slate-100 dark:text-primary/5 select-none">02</div>
              <div className="size-12 sm:size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">token</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">Select Tech</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">Pick from 500+ icons of frameworks, languages, and tools you use from our extensive curated library.</p>
            </div>
            {/* Step 3 */}
            <div className="group relative flex flex-col p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark hover:border-primary/40 transition-all sm:col-span-2 md:col-span-1">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-4xl sm:text-6xl font-black text-slate-100 dark:text-primary/5 select-none">03</div>
              <div className="size-12 sm:size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">dashboard_customize</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">Choose Design</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">Select from multiple modern layouts and customize colors, themes, and animations to match your personal brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-6 border-b border-slate-200 dark:border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-20">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">construction</span> Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white">Everything you need for a <br className="hidden sm:block lg:hidden"/><span className="text-primary">perfect README</span></h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">Powerful tools designed to make your GitHub profile stand out from the crowd.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="size-10 sm:size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">AI-Powered Bio & Socials</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Write your bio in seconds with our AI generator - pick a tone and let AI craft the perfect intro. Link your socials with beautiful, consistent iconography.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="size-10 sm:size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <span className="material-symbols-outlined">apps</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">500+ Tech Icons</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">An interactive skill selection grid. Search and filter through a massive library of framework and language badges.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="size-10 sm:size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">Dynamic Analytics</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Real-time preview of your GitHub stats, top languages, and contribution streaks directly in the editor.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="size-10 sm:size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6">
                <span className="material-symbols-outlined">auto_awesome_motion</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">Premium Templates</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Choose from 5+ diverse, high-conversion README designs tailored for different developer roles and styles.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:bg-primary/10 transition-colors sm:col-span-2">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
                <div className="flex-1">
                  <div className="size-10 sm:size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6">
                    <span className="material-symbols-outlined">content_copy</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">Markdown Export</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">No complicated downloads required. One-click copy to clipboard or download the .md file directly to your local machine.</p>
                </div>
                <div className="w-full md:w-auto flex md:flex-col lg:flex-row gap-2 p-4 bg-background-dark/50 rounded-lg border border-primary/20 items-center justify-center">
                  <span className="material-symbols-outlined text-primary hidden md:block lg:hidden">download</span>
                  <div className="px-3 py-1 bg-primary/10 rounded text-xs font-mono text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px] lg:hidden">description</span> README.md
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded text-xs font-mono text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px] lg:hidden">check_circle</span> Exported
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Bio Generator - Spotlight Section */}
      <section className="py-16 sm:py-24 px-6 border-b border-slate-200 dark:border-primary/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="material-symbols-outlined text-primary text-sm animate-pulse">auto_awesome</span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Industry First</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white leading-tight">
                Write Your Bio with <span className="text-primary">AI</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                No other GitHub README generator offers this. Just fill in your details, pick a tone, and our AI writes a professional, witty, or casual bio for you in seconds - powered by Google&apos;s latest Generative AI.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Professional', 'Witty', 'Casual', 'Minimal'].map((tone) => (
                  <span key={tone} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-primary/10 border border-slate-200 dark:border-primary/20 text-slate-700 dark:text-slate-300">
                    {tone}
                  </span>
                ))}
              </div>
              <Link href="/editor" className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary text-background-dark text-sm font-bold hover:scale-[1.02] transition-transform glow-effect w-fit mt-2">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                Try AI Bio Generator
              </Link>
            </div>

            {/* Right: Visual Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-primary/40 via-primary/20 to-primary/40 rounded-2xl blur-sm opacity-60 animate-pulse"></div>
              <div className="relative rounded-xl border border-primary/20 bg-white dark:bg-[#0d1117] p-1 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-background-dark/50 rounded-t-lg">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="mx-auto text-[10px] font-mono text-slate-400 dark:text-primary/40 uppercase tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">auto_awesome</span> ai-bio-generator
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-5">
                  {/* Tone selector mock */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tone:</span>
                    <span className="px-2 py-0.5 rounded bg-primary text-background-dark text-[10px] font-bold">Witty</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-slate-200 dark:border-primary/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold">Professional</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-slate-200 dark:border-primary/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold">Casual</span>
                  </div>
                  {/* Generated bio mock */}
                  <div className="space-y-3 font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="text-primary font-bold">## 👋 Hey, I&apos;m Alex!</p>
                    <p>A <span className="text-primary font-bold">Full Stack Developer</span> who turns caffeine into code ☕</p>
                    <p>🔭 Currently building the next big thing</p>
                    <p>🌱 Learning <span className="text-primary">Rust</span> and <span className="text-primary">WebAssembly</span></p>
                    <p>💬 Ask me about <span className="text-primary">React</span>, <span className="text-primary">Node.js</span>, and why tabs are better</p>
                    <p>📫 Reach me at <span className="text-primary underline">alex@dev.io</span></p>
                  </div>
                  {/* Bottom bar */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-primary/10">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-xs">check_circle</span> Generated in 3.2s
                    </span>
                    <span className="px-3 py-1 bg-primary rounded text-background-dark text-[10px] font-bold">Copy to Editor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Community Section */}
      <section className="py-16 sm:py-24 px-6 border-b border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-sm">code</span> Open Source
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Help Build The Best GitHub README Generator
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              GPRM is community-driven. Contribute templates, add integrations, improve performance, or ship UI upgrades that help thousands of developers present their best work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-slate-900 text-white dark:bg-primary dark:text-background-dark font-bold hover:scale-[1.02] transition-transform"
              >
                <span className="material-symbols-outlined text-lg">deployed_code</span>
                Contribute on GitHub
              </a>
              <a
                href={creatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 border border-slate-300 dark:border-primary/30 text-slate-700 dark:text-slate-200 font-bold hover:border-primary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">person</span>
                Creator: Bhalli.dev
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 bg-primary/15 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-primary/5 p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Contributor Impact</h3>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-bold">View Repo</a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 dark:border-primary/15 bg-white dark:bg-background-dark p-4">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">+Templates</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">High-quality README designs for every developer persona.</p>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-primary/15 bg-white dark:bg-background-dark p-4">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">+Integrations</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Stats cards, AI flows, badges, and productivity tools.</p>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-primary/15 bg-white dark:bg-background-dark p-4 col-span-2">
                  <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <svg className="w-9 h-9 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.06 1.81 2.77 1.29 3.45.99.1-.77.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.24a11.4 11.4 0 0 1 6.01 0c2.28-1.56 3.3-1.24 3.3-1.24.66 1.68.24 2.93.12 3.24.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .5Z" />
                    </svg>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Join the GPRM GitHub community</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Open issues, pull requests, and roadmap discussions</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 sm:gap-10">
          <div className="rounded-full bg-primary/10 p-4 border border-primary/20 text-primary">
            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold dark:text-white">Ready to transform your profile?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">Join over 50,000+ developers who have already elevated their GitHub presence using GPRM.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/editor" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg h-14 px-10 bg-primary text-background-dark text-lg font-bold hover:scale-[1.05] transition-transform glow-effect">
              Get Started Now <span className="material-symbols-outlined">bolt</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1 mt-2 sm:mt-0">
               <span className="material-symbols-outlined text-xs">money_off</span> Free to use. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
