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
                                “Hard work beats talent when talent doesn't work hard.”
                            </h1>
                            <p className="mt-4 font-black italic text-zinc-900 text-2xl sm:text-3xl md:text-4xl">
                                <Highlight rotate="-3deg">- Tim Notke</Highlight>
                            </p>

                            <p className="mt-6 text-xl text-black-700 max-w-2xl">
                                Hi, I'm Aryan Singh, a first-year Computing And Financial Management student (Co-op) @ <a
                                    href="https://uwaterloo.ca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline underline-offset-4 hover:text-blue-600 transition"
                                >
                                    University of Waterloo
                                </a>, interested in software, data, and finance.
                            </p>

                            <div className="mt-8 flex gap-4 text-lg text-zinc-800 font-semibold">
                                <a
                                    className="hover:underline"
                                    href="/Aryan_Singh_S26_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Resume
                                </a>

                                <span>•</span>

                                <a
                                    className="hover:underline"
                                    href="https://github.com/aryan29-dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>

                                <span>•</span>

                                <a
                                    className="hover:underline"
                                    href="https://www.linkedin.com/in/aryan-singh29/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
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
