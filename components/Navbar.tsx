"use client";

import StockBadge from "./Stocks";

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
          <div className="flex flex-col gap-2 md:flex-col lg:flex-row lg:items-baseline min-w-0">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", window.location.pathname);
              }}
              aria-label="Scroll to top"
              className="flex items-baseline min-w-0"
            >
              <span className="whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight xl:tracking-normal">
                Aryan's Portfolio.
              </span>
            </button>

            <div className="flex gap-2 md:gap-2 lg:gap-3">
              <StockBadge
                symbol="VFV.TO"
                label="VFV"
                href="https://finance.yahoo.com/quote/VFV.TO"
              />
              <StockBadge
                symbol="AAPL"
                label="AAPL"
                href="https://finance.yahoo.com/quote/AAPL"
              />
            </div>
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
