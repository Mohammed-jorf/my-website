"use client";

import { useMemo, useState } from "react";

import { contactConfig } from "@/content/site";

type FormStatus = {
  type: "idle" | "error" | "success";
  message?: string;
};

const initialStatus: FormStatus = { type: "idle" };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const endpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORM_ENDPOINT || contactConfig.formEndpoint,
    []
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honey = String(formData.get("website") || "").trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    if (contactConfig.spamProtectionMode === "honeypot" && honey) {
      setStatus({ type: "success", message: contactConfig.successMessage });
      form.reset();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Form provider returned a non-success status.");
      }

      setStatus({ type: "success", message: contactConfig.successMessage });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: `Your message could not be sent. Email me directly at ${contactConfig.publicEmail}.`
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="name">
        Name
        <input id="name" name="name" type="text" required autoComplete="name" />
      </label>
      <label htmlFor="email">
        Email
        <input id="email" name="email" type="email" required autoComplete="email" />
      </label>
      <label htmlFor="message">
        Message
        <textarea id="message" name="message" required rows={6} />
      </label>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden-field"
        aria-hidden
      />
      <button type="submit" className="button button-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <p className="form-hint">Prefer email? <a href={`mailto:${contactConfig.publicEmail}`}>{contactConfig.publicEmail}</a></p>
      {status.type !== "idle" ? (
        <p className={status.type === "success" ? "form-success" : "form-error"} role="status">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
