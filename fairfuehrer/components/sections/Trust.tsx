import { de } from "@/content/de";
import { Reveal } from "../Reveal";
import { Button } from "../Button";

/**
 * Three commitments on hairlines. No cards, no icons, no badges.
 *
 * This section's job is credibility, and credibility reads better plainly
 * stated than decorated.
 */
export function Trust() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <h2 className="text-[1.875rem] md:text-[2.75rem]">{de.trust.headline}</h2>
        </Reveal>

        <dl className="mt-10 grid gap-px border-t border-border md:mt-12 md:grid-cols-3">
          {de.trust.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="border-b border-border py-7 md:border-b-0 md:pr-8">
                <dt className="font-display text-lg font-semibold">{item.title}</dt>
                <dd className="mt-2 max-w-[38ch] text-[15.5px] text-ink-muted">
                  {item.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <Button href={de.trust.link.href} variant="text">
              {de.trust.link.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
