import {
    SiPython,
    SiC,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiMysql,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiFastapi,
    SiTailwindcss,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const iconColors: Record<string, string> = {
    Python: "text-[#3776AB]",
    Java: "text-[#007396]",
    C: "text-[#A8B9CC]",
    "C++": "text-[#00599C]",
    JavaScript: "text-[#F7DF1E]",
    TypeScript: "text-[#3178C6]",
    "SQL (MySQL)": "text-[#4479A1]",
    React: "text-[#61DAFB]",
    "Next.js": "text-black",
    "Node.js": "text-[#339933]",
    FastAPI: "text-[#009688]",
    "Tailwind CSS": "text-[#38BDF8]",
    pandas: "text-[#150458]",
    NumPy: "text-[#013243]",
    "scikit-learn": "text-[#F7931E]",
    Matplotlib: "text-[#11557C]",
    yfinance: "text-[#1f6feb]",
};

export default function About() {
    return (
        <section
            id="about"
            className="py-24 border-t border-zinc-200"
        >
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <div className="inline-flex items-center gap-3">
                        <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                        <h2
                            className="font-black uppercase tracking-[0.28em] text-zinc-900 text-3xl sm:text-4xl"
                            style={{
                                fontFamily:
                                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial',
                            }}
                        >
                            ABOUT
                        </h2>
                    </div>

                    <p className="mt-4 max-w-2xl text-lg text-black-700 leading-relaxed">
                        Hi! I’m Aryan, a first-year Computing & Financial Management student at the University of Waterloo (Co-op).
                        On my free time, I enjoy building projects that are at the intersection of finance and technology, where stocks and code
                        come together to solve real problems.
                    </p>

                    <p className="mt-3 max-w-2xl text-lg text-black-700 leading-relaxed">
                        My interest in FinTech started early - I was introduced to programming, specifcially HTML and CSS, in middle school,
                        where I discovered my passion for coding and technology. As my skills grew, I began exploring the world of finance, and
                        finance-related projects online, which naturally led me into the world of FinTech.
                    </p>

                    <p className="mt-3 max-w-2xl text-lg text-black-700 leading-relaxed">
                        Currently, I’m focused on learning new technologies and building data-driven tools that will
                        shape the future of financial technology. If I am not coding or studying, you can find me watching basketball or baseball!
                    </p>
                </div>

                <div className="flex flex-col gap-6 w-full sm:w-105">
                    <div className="flex flex-wrap gap-3 mt-1 animate-fade-in transition-all duration-300">
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
                            QUICK FACTS:
                        </h3>
                        <ul className="mt-3 space-y-3 text-zinc-700">
                            <li className="flex items-center gap-3">
                                <span className="text-lg">🏀⚾️</span>
                                <span>Favorite Sports: Basketball and Baseball!</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-lg">📊</span>
                                <span>Currently building at the intersection of finance & technology!</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-lg">📈</span>
                                <span>Follows markets & investing trends!</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 rounded-xl overflow-hidden border border-zinc-200 bg-white">

                </div>
            </div>

            <div className="sm:col-span-2 rounded-3xl border border-zinc-200 bg-white/60 p-6 shadow-sm gap-6 mt-8">
                <h3 className="text-lg font-black uppercase tracking-[0.22em] text-zinc-900">
                    LANGUAGES & FRAMEWORKS I ENJOY BUILDING WITH!
                </h3>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-mono tracking-tight">
                    {[
                        { name: "Python", url: "https://www.python.org/", icons: [SiPython] },
                        { name: "Java", url: "https://www.oracle.com/ca-en/java/", icons: [FaJava] },
                        { name: "C", url: "https://en.cppreference.com/w/c/language.html", icons: [SiC] },
                        { name: "C++", url: "https://isocpp.org/", icons: [SiCplusplus] },
                        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icons: [SiJavascript] },
                        { name: "TypeScript", url: "https://www.typescriptlang.org/", icons: [SiTypescript] },
                        { name: "SQL (MySQL)", url: "https://www.mysql.com/", icons: [SiMysql] },
                        { name: "React", url: "https://react.dev/", icons: [SiReact] },
                        { name: "Next.js", url: "https://nextjs.org/", icons: [SiNextdotjs] },
                        { name: "Node.js", url: "https://nodejs.org/", icons: [SiNodedotjs] },
                        { name: "FastAPI", url: "https://fastapi.tiangolo.com/", icons: [SiFastapi] },
                        { name: "Tailwind CSS", url: "https://tailwindcss.com/", icons: [SiTailwindcss] },
                        { name: "pandas", url: "https://pandas.pydata.org/", icons: [SiPandas] },
                        { name: "NumPy", url: "https://numpy.org/", icons: [SiNumpy] },
                        { name: "scikit-learn", url: "https://scikit-learn.org/", icons: [SiScikitlearn] },
                        {
                            name: "yfinance",
                            url: "https://pypi.org/project/yfinance/",
                            image: "/yfinance.png"
                        }].map(({ name, url, icons, image }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 rounded-xl border border-zinc-200/80 bg-white/80
                            px-4 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm transition
                            hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:border-zinc-400">
                                {icons && icons.map((Icon, idx) => (
                                    <Icon key={idx} className={`text-lg ${iconColors[name] ?? "text-zinc-700"}`} />
                                ))}
                                {image && (
                                    <img
                                        src={image}
                                        alt={name}
                                        className="h-5 w-5 object-contain"
                                    />
                                )}
                                <span>{name}</span>
                            </a>
                        ))}
                </div>
            </div>
        </section>
    );
}

