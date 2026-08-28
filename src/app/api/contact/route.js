import { NextResponse } from "next/server";

export async function POST(request) {
  const endpoint = (
    process.env.FORMSPREE_ENDPOINT ||
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    process.env.NEXT_PRIVATE_FORMSPREE_ENDPOINT
  )?.trim();

  if (!endpoint) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: data?.errors?.[0]?.message || "Submission failed." },
        { status: res.status }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Network error. Please try again." },
      { status: 500 }
    );
  }
}
