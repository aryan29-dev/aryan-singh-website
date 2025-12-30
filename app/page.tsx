"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
                {/* HERO */}
                <section className="pt-24 pb-32 sm:pb-40">
                    <div className="relative mx-auto max-w-6xl px-6">
                        <div
                            className="pointer-events-none absolute right-6 top-[95px] block"
                        >
                            <div className="relative w-[320px] h-[180px]">
                                <Image
                                    src="/sports/basketball.png"
                                    alt="Basketball"
                                    width={225}
                                    height={200}
                                    className="absolute left-30 top-0 rotate-[12deg] opacity-95 shadow-2xl rounded-xl"
                                />
                                <Image
                                    src="/sports/baseball.png"
                                    alt="Baseball"
                                    width={200}
                                    height={150}
                                    className="absolute right-20 top-[145px] rotate-[-10deg] opacity-95 shadow-2xl rounded-xl"
                                />
                            </div>
                        </div>


                        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] text-zinc-900">
                            “Hard work beats talent when talent doesn't work hard.” {" "}
                            <Highlight rotate="-3deg">- Tim Notke</Highlight>
                        </h1>

                        <p className="mt-6 text-xl text-black-700 max-w-2xl">
                            Hi, I'm Aryan Singh, a first-year Computing And Financial Management student (Co-op) @ <a
                                href="https://uwaterloo.ca"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold underline underline-offset-4 hover:text-blue-600 transition"
                            >
                                University of Waterloo
                            </a>.
                        </p>

                        <div className="mt-8 flex gap-4 text-lg text-zinc-800 font-semibold">
                            <a
                                className="hover:underline"
                                href="#"
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
                </section>

                <About />
                <Experience />
                <Projects />
                <Contact />

            </main>
        </>
    );
}
