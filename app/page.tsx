"use client";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      {/* NAV */}
      <header className="sticky top-0 z-50 pt-4">
        <div className="flex items-center justify-between rounded-2xl nav-pill px-4 py-3">
          {/* top-left name -> scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 font-semibold tracking-wide"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-300/20">
              🏀⚾
            </span>
            <span className="text-lg">Aryan Singh</span>
          </button>

          {/* top-right links */}
          <nav className="hidden sm:flex items-center gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="rounded-xl px-4 py-2 text-sm text-blue-50/90 hover:text-white transition nav-pill"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-16 pb-14">
        <div className="section-card rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Sports + Tech • Blue Theme Portfolio
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-blue-400">Aryan</span> — I build things,
              and I love the grind.
            </h1>

            <p className="text-base sm:text-lg text-blue-100/80 max-w-2xl">
              I study at <span className="text-blue-200 font-semibold">[YOUR SCHOOL HERE]</span>. This page is a
              one-scroll portfolio with a basketball/baseball vibe — clean, bold, and fast.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToId("projects")}
                className="rounded-2xl bg-blue-500 hover:bg-blue-400 transition px-6 py-3 font-semibold"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-2xl nav-pill px-6 py-3 font-semibold"
              >
                Contact Me
              </button>
            </div>

            {/* little stat row */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { k: "Focus", v: "School + Projects" },
                { k: "Theme", v: "Blue Sports" },
                { k: "Style", v: "One-Scroll" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-blue-300/15 bg-white/5 px-5 py-4">
                  <div className="text-sm text-blue-100/70">{x.k}</div>
                  <div className="text-lg font-semibold">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-10 scroll-mt-28">
        <div className="section-card rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <p className="mt-4 text-blue-100/80 leading-relaxed max-w-3xl">
            Write a short paragraph about you here — what you’re studying, what you’re building,
            and the vibe you want. Keep it confident and simple (like a sports highlight reel).
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-10 scroll-mt-28">
        <div className="section-card rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>

          <div className="mt-6 grid gap-4">
            {[
              { role: "Role / Position", place: "Company / Team", time: "2025 — Present", desc: "What you did + impact (numbers if possible)." },
              { role: "Role / Position", place: "Company / Team", time: "2024 — 2025", desc: "Another strong bullet-style sentence about results." },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl border border-blue-300/15 bg-white/5 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-lg font-semibold">{e.role} • <span className="text-blue-200">{e.place}</span></div>
                  <div className="text-sm text-blue-100/70">{e.time}</div>
                </div>
                <p className="mt-3 text-blue-100/80">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-10 scroll-mt-28">
        <div className="section-card rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Project One", tag: "Python / Web", desc: "One-sentence description. What problem it solves." },
              { title: "Project Two", tag: "Java / GUI", desc: "Another project. Mention any cool feature." },
              { title: "Project Three", tag: "Data / Finance", desc: "Something analytical — show results." },
              { title: "Project Four", tag: "Sports App", desc: "Anything sports-related fits perfectly here." },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-blue-300/15 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs rounded-full bg-blue-500/15 border border-blue-300/20 px-3 py-1 text-blue-100">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 text-blue-100/80">{p.desc}</p>
                <div className="mt-4 text-sm text-blue-200/90">
                  Add links → GitHub • Demo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-10 pb-20 scroll-mt-28">
        <div className="section-card rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
          <p className="mt-4 text-blue-100/80">
            Put your email + socials here.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-blue-500 hover:bg-blue-400 transition px-6 py-3 font-semibold"
              href="mailto:YOUR_EMAIL_HERE"
            >
              Email Me
            </a>
            <a className="rounded-2xl nav-pill px-6 py-3 font-semibold" href="#">
              GitHub
            </a>
            <a className="rounded-2xl nav-pill px-6 py-3 font-semibold" href="#">
              LinkedIn
            </a>
          </div>

          <div className="mt-10 border-t border-blue-300/15 pt-6 text-sm text-blue-100/60">
            © {new Date().getFullYear()} Aryan Singh • Built with Next.js + Vercel
          </div>
        </div>
      </section>
    </div>
  );
}
