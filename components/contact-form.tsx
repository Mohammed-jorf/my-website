"use client";

import { useState } from "react";

import { contactConfig } from "@/content/site";

type FormStatus = {
  type: "idle" | "error" | "success";
  message?: string;
};

const initialStatus: FormStatus = { type: "idle" };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submittedName, setSubmittedName] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || contactConfig.formEndpoint;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honey = String(formData.get("website") || "").trim();
    const nextErrors: Record<string, string> = {};

    if (!name) {
      nextErrors.name = "Please share your name.";
    }

    if (!email) {
      nextErrors.email = "Please add your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please use a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Please write a short message.";
    } else if (message.length < 20) {
      nextErrors.message = "A little more detail helps me respond usefully.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setStatus({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setFieldErrors({});

    if (contactConfig.spamProtectionMode === "honeypot" && honey) {
      setStatus({ type: "success", message: contactConfig.successMessage });
      setSubmittedName(name);
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
      setSubmittedName(name);
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
    <div className="contact-form-wrap">
      <div className="contact-form-intro">
        <h3>Start the conversation</h3>
        <p>
          Share a bit of context and I will get back to you as soon as I can. Project
          collaborations, research discussions, and speaking opportunities are all welcome.
        </p>
      </div>

      {status.type === "success" ? (
        <div className="form-success-panel" role="status">
          <p className="form-success-eyebrow">Message sent</p>
          <h3>Thanks{submittedName ? `, ${submittedName}` : ""}.</h3>
          <p>{status.message}</p>
          <p className="form-hint">
            If your note is urgent, you can also email{" "}
            <a href={`mailto:${contactConfig.publicEmail}`}>{contactConfig.publicEmail}</a>.
          </p>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => {
              setStatus(initialStatus);
              setSubmittedName("");
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              aria-invalid={fieldErrors.name ? "true" : "false"}
            />
            {fieldErrors.name ? <span className="field-error">{fieldErrors.name}</span> : null}
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={fieldErrors.email ? "true" : "false"}
            />
            {fieldErrors.email ? <span className="field-error">{fieldErrors.email}</span> : null}
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me what you are working on, what you need, and any timelines that matter."
              aria-invalid={fieldErrors.message ? "true" : "false"}
            />
            {fieldErrors.message ? (
              <span className="field-error">{fieldErrors.message}</span>
            ) : (
              <span className="field-hint">A few sentences is enough.</span>
            )}
          </label>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden-field"
            aria-hidden
          />
          <div className="form-actions">
            <button type="submit" className="button button-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="button-spinner" aria-hidden="true" />
                  Sending message...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            <p className="form-hint">
              Prefer email? <a href={`mailto:${contactConfig.publicEmail}`}>{contactConfig.publicEmail}</a>
            </p>
          </div>
          {status.type === "error" ? (
            <p className="form-error" role="alert">
              {status.message}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}
