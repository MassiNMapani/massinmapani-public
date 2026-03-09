"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setIsSuccess(false);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      organization: String(formData.get("organization") || "").trim(),
      reason: String(formData.get("reason") || "").trim(),
      budgetRange: String(formData.get("budgetRange") || "").trim(),
      timeline: String(formData.get("timeline") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("Message failed to send. Please try again.");
      setIsSubmitting(false);
      return;
    }

    event.currentTarget.reset();
    setIsSuccess(true);
    setStatus("Thanks, your message is in. You can expect a response within 1-2 business days.");
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-stone">
          Name
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </label>
        <label className="space-y-2 text-sm text-stone">
          Email
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-stone">
        Organization
        <input
          name="organization"
          type="text"
          className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        />
      </label>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <label className="space-y-2 text-sm text-stone">
          Reason
          <select
            name="reason"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            defaultValue=""
          >
            <option value="" disabled>Select a reason</option>
            <option>Advisory</option>
            <option>Partnerships</option>
            <option>Speaking</option>
            <option>Digital products</option>
            <option>Other</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-stone">
          Budget range (optional)
          <select
            name="budgetRange"
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            defaultValue=""
          >
            <option value="">Select range</option>
            <option>{"<1k"}</option>
            <option>1-5k</option>
            <option>5-15k</option>
            <option>15k+</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-stone">
          Timeline
          <select
            name="timeline"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            defaultValue=""
          >
            <option value="" disabled>Select timeline</option>
            <option>ASAP</option>
            <option>2-4 weeks</option>
            <option>1-3 months</option>
            <option>Flexible</option>
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm text-stone">
        Brief
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        />
      </label>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
      {status ? (
        isSuccess ? (
          <GlassCard className="rounded-2xl border-border/70 bg-surface/70 p-4">
            <p className="mb-1 text-sm text-ink">Message sent</p>
            <p className="mb-0 text-sm text-stone">{status}</p>
          </GlassCard>
        ) : (
          <p className="text-sm text-rose">{status}</p>
        )
      ) : null}
    </form>
  );
}
