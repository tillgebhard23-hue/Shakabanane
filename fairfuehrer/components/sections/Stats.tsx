import { de } from "@/content/de";
import { Reveal } from "../Reveal";

/**
 * The three figures the briefing wants near the top, as a hairline strip rather
 * than a row of cards. Nothing here needs elevation, so nothing gets a box.
 */
export function Stats() {
  return (
    <section aria-label="Der Fairführer in Zahlen" className="shell pb-16 md:pb-24">
      <Reveal>
        <dl className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {de.stats.map((stat) => (
            <div key={stat.label} className="py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-bold tabular-nums md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[15px] text-ink-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
