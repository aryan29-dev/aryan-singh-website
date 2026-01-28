"use client";

import { useEffect, useState } from "react";

type Quote = {
  price: number | null;
  change: number | null;
  changePct: number | null;
};

function fmt(n: number, digits = 2) {
  return n.toFixed(digits);
}

export default function StockBadge({
  symbol,
  label,
  href,
}: {
  symbol: string;     // e.g. "VFV.TO", "AAPL"
  label: string;      // e.g. "VFV", "AAPL"
  href: string;       // Yahoo / TradingView link
}) {
  const [q, setQ] = useState<Quote>({ price: null, change: null, changePct: null });
  const [err, setErr] = useState(false);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setErr(false);
        const res = await fetch(`/api/quote?v=${symbol}`, { cache: "no-store" });
        if (!res.ok) throw new Error();

        const data = await res.json();
        if (!alive) return;

        setQ({
          price: data.price ?? null,
          change: data.change ?? null,
          changePct: data.changePct ?? null,
        });
      } catch {
        if (!alive) return;
        setErr(true);
      }
    }

    load();
    const id = setInterval(load, 60_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [symbol]);

  const up = (q.change ?? 0) >= 0;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80
      px-2 py-0.5 md:px-2 md:py-0.5 lg:px-3 lg:py-1 text-[11px] md:text-[11px] lg:text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur
      hover:-translate-y-0.5 hover:shadow-md transition"
      title={symbol}
    >
      <span className="text-[10px] font-black tracking-widest text-zinc-500">
        {label}
      </span>

      {err || q.price === null ? (
        <span className="text-zinc-500">—</span>
      ) : (
        <>
          <span className="tabular-nums">{fmt(q.price)}</span>
          <span className={`tabular-nums ${up ? "text-green-600" : "text-red-600"}`}>
            {up ? "▲" : "▼"} {fmt(q.change!)} ({fmt(q.changePct!)}%)
          </span>
        </>
      )}
    </a>
  );
}
