import { de } from "@/content/de";
import { Reveal } from "../Reveal";

/**
 * A single statement on a tinted band. No image, no columns, no card.
 *
 * This is the one place on the page where the message is the design, so it gets
 * the largest type outside the hero and nothing to compete with.
 */
export function Problem() {
  return (
    <section className="section bg-brand-wash">
      <div className="shell">
        <Reveal className="mx-auto max-w-[28ch] text-center">
          <h2 className="text-[2rem] leading-[1.1] md:text-[3rem]">
            {de.problem.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mx-auto mt-6 max-w-[58ch] text-center">
          <p className="text-lg text-ink-muted md:text-xl">{de.problem.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
