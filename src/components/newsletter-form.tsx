"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      setStatus("Subscription failed. Please try again.");
      return;
    }

    event.currentTarget.reset();
    setStatus("Thanks. You are subscribed.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label htmlFor="newsletter-email" className="text-sm text-stone">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        className="w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-ink placeholder:text-stone/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
        placeholder="you@example.com"
      />
      <button
        type="submit"
        className="w-full rounded-2xl bg-rose px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
      >
        Subscribe
      </button>
      {status ? <p className="text-sm text-stone">{status}</p> : null}
    </form>
  );
}
