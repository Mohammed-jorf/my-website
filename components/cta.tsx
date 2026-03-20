import Link from "next/link";

type CTAProps = {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTA({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CTAProps) {
  return (
    <aside className="cta">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="cta-actions">
        <Link href={primaryHref} className="button button-primary">
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link href={secondaryHref} className="button button-secondary">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
