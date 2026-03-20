import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { contactConfig, profile, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohammed Jorf for opportunities, collaboration, or consulting.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      description="Use the form for collaborations, research discussions, speaking requests, or consulting inquiries."
    >
      <div className="contact-grid">
        <ContactForm />
        <aside className="card contact-card">
          <h3>Direct Contact</h3>
          <p className="contact-card-lead">
            If you prefer a direct route, email or LinkedIn works well too.
          </p>
          <div className="response-note">
            <p className="response-note-label">Typical response time</p>
            <p>I usually reply within 1 to 2 business days.</p>
          </div>
          <p>
            Email: <a href={`mailto:${contactConfig.publicEmail}`}>{contactConfig.publicEmail}</a>
          </p>
          {profile.phone ? <p>Phone: {profile.phone}</p> : null}
          {profile.location ? <p>Location: {profile.location}</p> : null}
          <h4>Profiles</h4>
          <ul className="footer-links">
            {siteConfig.socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
