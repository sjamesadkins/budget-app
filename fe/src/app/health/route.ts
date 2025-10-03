// app/health/route.ts

import { NextResponse } from "next/server";
export async function GET() {
  try {
    console.log("BACKEND_URL =", process.env.BACKEND_URL)

    const backendUrl = process.env.BACKEND_URL;

    if (!backendUrl) {
      return NextResponse.json(
        { status: "unhealthy", backendStatus: "BACKEND_URL not set" },
        { status: 500 }
      );
    }

    const res = await fetch(`${backendUrl}/health`);

    const raw = await res.text();

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      data = { raw };
    }

    return NextResponse.json({
      status: res.ok ? "ok" : "unhealthy",
      backend: data,
      timestamp: Date.now(),
      debug: { backendUrl: backendUrl }, // 👈
    });
  } catch (err) {
      console.error("Fetch to backend failed:", err);
    return NextResponse.json(
      { status: "unhealthy", error: String(err) },
      { status: 500 }
    );
  }
}