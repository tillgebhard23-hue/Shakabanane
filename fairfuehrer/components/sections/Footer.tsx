import Link from "next/link";
import { de } from "@/content/de";

/**
 * The legal pages are linked, not written. The briefing is explicit that
 * Impressum, Datenschutz and AGB must not be drafted here, so these routes are
 * placeholders pointing at the existing pages until they are wired up.
 */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell grid gap-10 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <span className="font-display text-lg font-bold tracking-tight">
            {de.nav.brand}
          </span>
          <p className="mt-3 max-w-[38ch] text-[15px] text-ink-muted">{de.footer.since}</p>
        </div>

        <address className="not-italic md:col-span-3">
          <span className="block font-display font-semibold">{de.footer.operator}</span>
          {de.footer.address.map((line) => (
            <span key={line} className="block text-[15px] text-ink-muted">
              {line}
            </span>
          ))}
          <span className="mt-2 block text-[15px] text-ink-muted">
            {de.footer.management}
          </span>
          <a
            href={`mailto:${de.footer.email}`}
            className="mt-2 block text-[15px] text-brand-ink underline underline-offset-4"
          >
            {de.footer.email}
          </a>
        </address>

        <nav aria-label="Weitere Links" className="md:col-span-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {de.footer.social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[15px] text-ink-muted hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {de.footer.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-ink-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="shell border-t border-border py-6">
        <p className="text-[14px] text-ink-muted">{de.footer.copyright}</p>
      </div>
    </footer>
  );
}
