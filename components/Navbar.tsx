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
      <div className="mx-auto w-full max-w-7xl px-8 py-5 lg:py-6 flex items-center">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", window.location.pathname);
              }} className="flex items-center gap-3 text-3xl font-black tracking-tight"
              aria-label="Scroll to top">
              <span>
                Aryan's Personal Website.
              </span>
            </button>
            <a href="#contact" className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Open to Opportunities
              </span>
            </a>
          </div>
          <nav className="ml-auto hidden sm:flex items-center gap-10 text-lg font-semibold">
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
          <nav className="sm:hidden mt-4">
            <div className="grid grid-cols-3 gap-3">
              {links.slice(0, 3).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="flex justify-center rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:text-zinc-900"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex justify-center">
              <a
                href={links[3].href}
                className="rounded-full border border-zinc-200 bg-white/80 px-6 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:text-zinc-900"
              >
                {links[3].label}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

