import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type NewsletterPayload = { email?: string };

type SubscriberRecord = {
  email: string;
  createdAt: string;
};

const FILE_PATH = path.join(process.cwd(), "src", "content", "subscribers.json");

async function readSubscribers(): Promise<SubscriberRecord[]> {
  try {
    const content = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(content) as SubscriberRecord[];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as NewsletterPayload;
  const email = body.email?.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const subscribers = await readSubscribers();

  if (subscribers.some((entry) => entry.email === email)) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const updated = [...subscribers, { email, createdAt: new Date().toISOString() }];

  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(updated, null, 2));
  } catch {
    console.log("[TODO:STORAGE] Newsletter subscriber", email);
    return NextResponse.json({ ok: true, mode: "console" });
  }

  return NextResponse.json({ ok: true, mode: "file" });
}
