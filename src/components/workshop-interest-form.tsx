"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export function WorkshopInterestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setIsSuccess(false);

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      businessOrOccupation: String(formData.get("businessOrOccupation") || "").trim(),
      industry: String(formData.get("industry") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phoneNumber: String(formData.get("phoneNumber") || "").trim(),
      digitalChallenge: String(formData.get("digitalChallenge") || "").trim(),
      companySize: String(formData.get("companySize") || "").trim(),
      freeConsultation: String(formData.get("freeConsultation") || "").trim()
    };

    const response = await fetch("/api/workshop-interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("Submission failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    event.currentTarget.reset();
    setIsSuccess(true);
    setStatus("Thanks, your expression of interest has been received. A follow-up will be sent by email.");
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-stone">
          Full Name *
          <input
            name="fullName"
            type="text"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </label>
        <label className="space-y-2 text-sm text-stone">
          Email Address *
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-stone">
          Business Name/Individual occupation *
          <input
            name="businessOrOccupation"
            type="text"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </label>
        <label className="space-y-2 text-sm text-stone">
          Industry *
          <input
            name="industry"
            type="text"
            required
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-stone">
          Phone Number
          <input
            name="phoneNumber"
            type="tel"
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </label>
        <label className="space-y-2 text-sm text-stone">
          Company size
          <select
            name="companySize"
            defaultValue=""
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <option value="">Select company size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="20+">20+</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm text-stone">
        What digital challenge is your business facing?
        <textarea
          name="digitalChallenge"
          rows={6}
          className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        />
      </label>

      <label className="space-y-2 text-sm text-stone">
        Would you like a free consultation?
        <select
          name="freeConsultation"
          defaultValue=""
          className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit interest"}
      </Button>

      {status ? (
        isSuccess ? (
          <GlassCard className="rounded-2xl border-border/70 bg-surface/70 p-4">
            <p className="mb-1 text-sm text-ink">Interest submitted</p>
            <p className="mb-0 text-sm text-stone">{status}</p>
          </GlassCard>
        ) : (
          <p className="text-sm text-rose">{status}</p>
        )
      ) : null}
    </form>
  );
}
