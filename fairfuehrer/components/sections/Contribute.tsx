import { de } from "@/content/de";
import { Reveal } from "../Reveal";
import { Button } from "../Button";

/**
 * The editorial path as a vertical timeline.
 *
 * The three steps in "So funktioniert es" describe what a visitor does in a
 * minute. These four describe what happens to a suggestion over days, so they
 * run downward against a connecting line rather than across in a row.
 */
export function Contribute() {
  return (
    <section className="section border-y border-border bg-surface">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="max-w-[20ch] text-[1.875rem] md:text-[2.75rem]">
            {de.contribute.headline}
          </h2>
          <p className="mt-5 max-w-[42ch] text-lg text-ink-muted">{de.contribute.body}</p>
          <div className="mt-8">
            <Button href={de.contribute.cta.href}>{de.contribute.cta.label}</Button>
          </div>
        </Reveal>

        <ol className="relative lg:col-span-6 lg:col-start-7">
          <span
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-border"
          />
          {de.contribute.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07}>
              <li className="relative list-none pb-8 pl-12 last:pb-0">
                <span
                  aria-hidden
                  className="absolute left-0 top-1 grid size-8 place-items-center rounded-full border border-border bg-bg font-display text-sm font-bold tabular-nums"
                >
                  {i + 1}
                </span>
                <h3 className="text-lg">{step.title}</h3>
                <p className="mt-1.5 max-w-[44ch] text-[15.5px] text-ink-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
