"use client";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 py-10 mt-32">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

                <div className="space-y-1 text-zinc-700">
                    <p className="font-f1 text-xl font-black tracking-wide">
                        Aryan's Personal Website.
                    </p>
                    <p className="text-sm">
                        © 2026 Aryan Singh. All rights reserved.
                    </p>
                    <p className="text-sm">
                        Built by Aryan Singh.
                    </p>
                </div>

                <div className="flex gap-10 text-sm font-semibold text-zinc-900">
                    <a
                        href="mailto:a923sing@uwaterloo.ca"
                        className="hover:opacity-70 transition"
                    >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aryan-singh29/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/aryan29-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </footer>
    );
}
