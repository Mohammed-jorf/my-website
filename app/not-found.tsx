import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container empty-state">
        <h1>Page not found</h1>
        <p>The page you requested does not exist or was moved.</p>
        <Link href="/" className="button button-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
