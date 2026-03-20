import Link from "next/link";

import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">{siteConfig.name}</p>
          <p className="footer-copy">{siteConfig.description}</p>
        </div>
        <div>
          <p className="footer-title">Elsewhere</p>
          <ul className="footer-links">
            {siteConfig.socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-title">Legal</p>
          <ul className="footer-links">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-meta">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
