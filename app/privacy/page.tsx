import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice and data handling summary.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container prose-block">
        <h1>Privacy Notice</h1>
        <p>
          This site collects only the data required to respond to contact requests and monitor basic
          aggregate traffic. No sensitive personal data is sold or shared with third parties for
          advertising purposes.
        </p>
        <h2>Contact Form Data</h2>
        <p>
          If you submit the contact form, your name, email, and message are sent to a hosted form
          provider for delivery. This information is used solely to respond to your inquiry.
        </p>
        <h2>Analytics</h2>
        <p>
          The site may use privacy-friendly analytics to understand page usage trends without
          intrusive profiling.
        </p>
        <h2>Updates</h2>
        <p>This notice can be updated as the website evolves.</p>
      </div>
    </section>
  );
}
