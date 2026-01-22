"use client";

import Navbar from "../components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";

function Highlight({
    children,
    rotate = "-2deg",
}: {
    children: React.ReactNode;
    rotate?: string;
}) {
    return (
        <span className="relative inline-block">
            <span
                className="absolute -inset-x-2 inset-y-1 rounded-md bg-blue-300"
                style={{ transform: `rotate(${rotate})` }}
            />
            <span className="relative italic font-black">{children}</span>
        </span>
    );
}

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-6xl px-6">
                <section className="pt-24 pb-32 sm:pb-40">
                    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                        <div className="relative mx-auto max-w-6xl px-6">
                            <h1 className="font-black text-zinc-900 tracking-tight leading-tight text-[clamp(2.75rem,6vw,4.75rem)]">
                                I <Highlight rotate="-3deg">design</Highlight> with vision and <Highlight rotate="-3deg">code</Highlight> with purpose.
                            </h1>
                            <p className="mt-4 font-black italic text-zinc-900 text-2xl sm:text-3xl md:text-4xl">
                                Built through consistency.
                            </p>

                            <p className="mt-6 text-xl text-zinc-700 max-w-2xl">
                                Hi! I'm Aryan Singh, a first-year Computing And Financial Management student (Co-op) @{" "}
                                <a
                                    href="https://uwaterloo.ca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative font-semibold inline-block border-b-2 border-zinc-900 
                                    hover:border-blue-600 hover:text-blue-600 transition"
                                >
                                    University of Waterloo
                                </a>
                                , who is passionate about the intersection of software, data, and finance!
                            </p>

                            <div className="mt-8 w-full max-w-sm">
                                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-nowrap sm:gap-3">
                                    <a
                                        href="/Aryan_Singh_S26_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-5 py-2 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white hover:shadow-sm sm:w-auto"
                                    >
                                        Resume
                                    </a>

                                    <a
                                        href="https://github.com/aryan29-dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-5 py-2 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white hover:shadow-sm sm:w-auto"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/aryan-singh29/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-5 py-2 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white hover:shadow-sm sm:w-auto"
                                    >
                                        LinkedIn
                                    </a>
                                    <div className="sm:hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />

            </main >
        </>
    );
}
