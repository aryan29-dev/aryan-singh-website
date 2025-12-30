"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* name left */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 text-3xl font-black tracking-tight"
            aria-label="Scroll to top">
            <span>
              Aryan's Personal Website<span className="text-black-400">.</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Open to Opportunities
            </span>
          </button>
          <nav className="hidden sm:flex items-center gap-10 text-lg font-semibold">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-zinc-800 hover:text-zinc-500 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

