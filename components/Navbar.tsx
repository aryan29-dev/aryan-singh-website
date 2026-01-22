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
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-5 lg:py-6 flex items-center">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-baseline gap-3 min-w-0">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", window.location.pathname);
              }}
              aria-label="Scroll to top"
              className="flex items-baseline min-w-0"
            >
              <span className="whitespace-nowrap text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
                Aryan's Portfolio.
              </span>
            </button>
            <a href="#contact" className="hidden lg:inline-flex shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur relative -top-px">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Open to Opportunities
              </span>
            </a>
          </div>
          <nav className="ml-auto hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 text-base md:text-lg font-semibold">
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
          <nav className="sm:hidden mt-2">
            <div className="grid grid-cols-2 gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="flex justify-center rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:text-zinc-900"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
