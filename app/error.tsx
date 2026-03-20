"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface runtime route errors in the browser console while keeping UI resilient.
    console.error(error);
  }, [error]);

  return (
    <section className="section">
      <div className="container empty-state">
        <h1>Something went wrong</h1>
        <p>An unexpected error occurred. Please try again.</p>
        <button type="button" className="button button-primary" onClick={() => reset()}>
          Retry
        </button>
      </div>
    </section>
  );
}
