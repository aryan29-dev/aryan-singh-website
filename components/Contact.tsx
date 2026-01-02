import { Mail, Linkedin, Github, FileText } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-28 border-t border-zinc-200">
            <div className="mb-16">
                <div className="inline-flex items-center gap-3">
                    <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                    <h2
                        className="font-black uppercase tracking-[0.28em] text-zinc-900 text-3xl sm:text-4xl"
                        style={{
                            fontFamily:
                                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial",
                        }}
                    >
                        CONTACT
                    </h2>
                </div>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 items-center">
                <div className="space-y-10 text-zinc-900">
                    <a
                        href="mailto:a923sing@uwaterloo.ca"
                        className="group flex items-center gap-5 transition hover:opacity-80 cursor-pointer"
                    >
                        <Mail className="h-7 w-7" />
                        <span className="font-f1 text-2xl tracking-wide group-hover:underline underline-offset-4">
                            a923sing@uwaterloo.ca
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aryan-singh29/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 transition hover:opacity-80 cursor-pointer"
                    >
                        <Linkedin className="h-7 w-7" />
                        <span className="font-f1 text-2xl tracking-wide group-hover:underline underline-offset-4">
                            aryan-singh29
                        </span>
                    </a>

                    <a
                        href="/Aryan_Singh_S26_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 transition hover:opacity-80 cursor-pointer"
                    >
                        <FileText className="h-7 w-7" />
                        <span className="font-f1 text-2xl tracking-wide group-hover:underline underline-offset-4">
                            Resume
                        </span>
                    </a>

                    <a
                        href="https://github.com/aryan29-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 transition hover:opacity-80 cursor-pointer"
                    >
                        <Github className="h-7 w-7" />
                        <span className="font-f1 text-2xl tracking-wide group-hover:underline underline-offset-4">
                            aryan29-dev
                        </span>
                    </a>
                </div>

                <div className="flex justify-center sm:justify-end">
                    <div className="border-[5px] border-zinc-900 p-2">
                        <img
                            src="/profile.jpg"
                            alt="Aryan Singh"
                            className="w-80 h-80 sm:w-96 sm:h-96 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
