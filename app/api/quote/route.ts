import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const v = searchParams.get("v") ?? "VFV.TO";

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
      v
    )}?interval=1m&range=1d`;

    const r = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    });

    if (!r.ok) {
      return NextResponse.json({ error: "fetch_failed" }, { status: 500 });
    }

    const j = await r.json();
    const result = j?.chart?.result?.[0];
    const meta = result?.meta;

    const price = meta?.regularMarketPrice;
    const prev = meta?.previousClose;

    if (typeof price !== "number" || typeof prev !== "number") {
      return NextResponse.json({ error: "no_data" }, { status: 500 });
    }

    const change = price - prev;
    const changePct = (change / prev) * 100;

    return NextResponse.json({
      symbol: v,
      price,
      change,
      changePct,
    });
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
