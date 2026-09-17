import { Check } from "@phosphor-icons/react/dist/ssr";
import { de } from "@/content/de";
import { Reveal } from "../Reveal";
import { Button } from "../Button";

/**
 * The partner offer: two levels side by side, then the price recommendations as
 * a short table, then the entry requirements.
 *
 * The prices are recommendations rather than a tariff, which is why they sit in
 * their own block under the comparison instead of on the cards. How long a
 * partner PIN runs for is still open in the briefing and is marked as such
 * rather than guessed.
 */
export function Partners() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink">
            {de.partners.eyebrow}
          </p>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.75rem]">
            {de.partners.headline}
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg text-ink-muted">{de.partners.body}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[de.partners.free, de.partners.paid].map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-[var(--radius-card)] p-6 md:p-8 ${
                  i === 1 ? "border-2 border-brand bg-surface" : "border border-border bg-surface"
                }`}
              >
                <h3 className="text-xl">{tier.name}</h3>
                <p className="mt-1 font-display text-2xl font-bold">{tier.price}</p>
                <p className="mt-2 text-[15px] text-ink-muted">{tier.note}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[15.5px] text-ink-muted">
                      <Check aria-hidden size={18} className="mt-0.5 shrink-0 text-green-ink" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <h3 className="text-xl">{de.partners.prices.title}</h3>
            <dl className="mt-4 divide-y divide-border border-t border-border">
              {de.partners.prices.rows.map((row) => (
                <div key={row.who} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[15.5px] text-ink-muted">{row.who}</dt>
                  <dd className="font-display font-semibold tabular-nums">{row.amount}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[15px] text-ink-muted">{de.partners.prices.footnote}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="text-xl">{de.partners.requirements.title}</h3>
            <p className="mt-4 max-w-[52ch] text-ink-muted">{de.partners.requirements.body}</p>
            <div className="mt-5">
              <Button href={de.partners.requirements.link.href} variant="text">
                {de.partners.requirements.link.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Button href={de.partners.cta.href}>{de.partners.cta.label}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
