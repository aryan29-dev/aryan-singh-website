export default function About() {
    return (
        <section
            id="about"
            className="py-24 border-t border-zinc-200"
        >
            {/* HEADER */}
            <div className="flex items-start justify-between gap-10">
                <div>
                    <div className="inline-flex items-center gap-3">
                        <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                        <h2
                            className="
                font-black uppercase tracking-[0.28em]
                text-zinc-900
                text-3xl sm:text-4xl
              "
                            style={{
                                fontFamily:
                                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial',
                            }}
                        >
                            ABOUT
                        </h2>
                    </div>

                    {/* Subline */}
                    <p className="mt-4 max-w-2xl text-lg text-black-700 leading-relaxed">
                        I’m Aryan, a first-year Computing & Financial Management student at the
                        University of Waterlsoo. On my free time, I enjoy building and exploring projects that intersect
                        in the world of finance and technology. You might wonder where I found my FinTech vibe — well, I was introduced to
                        the programming world in middle school and that's where I found my passion for coding and technology. With this foundation,
                        I found myself digging the internet for finance-related projects to work on, and the rest is history! Now, I'm interested into learning
                        all types of new technologies that will shape the future of FinTech!
                    </p>
                </div>

                {/* “Stat chips” + Quick Facts right column */}
                <div className="hidden sm:flex flex-col gap-6 w-[400px]">
                    <div className="flex gap-3 mt-1 animate-fade-in transition-all duration-300 hover:-translate-y-0.5">
                        <div className="rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 shadow-sm">
                            <div className="text-xs font-black uppercase tracking-widest text-zinc-500">ROLE</div>
                            <div className="text-sm font-semibold text-zinc-900">CFM Student</div>
                        </div>

                        <div className="rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 shadow-sm">
                            <div className="text-xs font-black uppercase tracking-widest text-zinc-500">FOCUS</div>
                            <div className="text-sm font-semibold text-zinc-900">Projects + Growth</div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-zinc-200 bg-white/60 p-7 shadow-sm">
                        <h3 className="text-sm font-black uppercase tracking-[0.22em] text-zinc-900">
                            QUICK FACTS
                        </h3>
                        <ul className="mt-3 space-y-3 text-zinc-700">
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-zinc-900" />
                                🏀 Sports: basketball + baseball
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-zinc-900" />
                                📊 Building at the intersection of finance & technology!
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-zinc-900" />
                                📈 Follow markets & investing trends!
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="sm:col-span-2 rounded-3xl border border-zinc-200 bg-white/60 p-6 shadow-sm gap-6 mt-8">
                {/* Section title */}
                <h3 className="text-lg font-black uppercase tracking-[0.22em] text-zinc-900">
                    THE VIBE · LANGUAGES & FRAMEWORKS I ENJOY BUILDING WITH!
                </h3>

                {/* Tech grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-mono tracking-tight">
                    {[
                        { name: "Python", url: "https://www.python.org/" },
                        { name: "Java", url: "https://www.oracle.com/ca-en/java/" },
                        { name: "C / C++", url: "https://isocpp.org/" },
                        { name: "JavaScript / TypeScript", url: "https://www.typescriptlang.org/" },
                        { name: "SQL (MySQL)", url: "https://www.mysql.com/" },
                        { name: "React", url: "https://react.dev/" },
                        { name: "Next.js", url: "https://nextjs.org/" },
                        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
                        { name: "Node.js", url: "https://nodejs.org/" },
                        { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
                    ].map(({ name, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-xl border border-zinc-200/80 bg-white/80
                            px-4 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:-translate-y-0.5 
                            hover:shadow-md hover:bg-white cursor-pointer hover:border-zinc-400">
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

