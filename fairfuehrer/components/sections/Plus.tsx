import { Check } from "@phosphor-icons/react/dist/ssr";
import { de } from "@/content/de";
import { Reveal } from "../Reveal";
import { Button } from "../Button";

/**
 * Free against Fairführer+, as copy on the left and the two offers stacked on
 * the right. The paid card is the only element on the page with a brand-coloured
 * border, which is how it reads as the recommendation without a "most popular"
 * badge.
 */
export function Plus() {
  return (
    <section className="section border-y border-border bg-surface">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-[1.875rem] md:text-[2.75rem]">{de.plus.headline}</h2>
          <p className="mt-5 max-w-[46ch] text-lg text-ink-muted">{de.plus.body}</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-bg p-6">
              <h3 className="text-lg">{de.plus.free.name}</h3>
              <p className="mt-1 font-display text-3xl font-bold">{de.plus.free.price}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {de.plus.free.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[15.5px] text-ink-muted">
                    <Check aria-hidden size={18} className="mt-0.5 shrink-0 text-green-ink" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border-2 border-brand bg-bg p-6">
              <h3 className="text-lg">{de.plus.paid.name}</h3>
              <p className="mt-1 font-display text-3xl font-bold">{de.plus.paid.price}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {de.plus.paid.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[15.5px] text-ink-muted">
                    <Check aria-hidden size={18} className="mt-0.5 shrink-0 text-green-ink" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href={de.plus.paid.cta.href}>{de.plus.paid.cta.label}</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
