import { Play } from "@phosphor-icons/react/dist/ssr";
import { de } from "@/content/de";
import { Reveal } from "../Reveal";

/*
 * Bar heights for the waveform. Fixed rather than random so the shape is stable
 * between server and client render, and so it reads as one specific recording.
 */
const WAVE = [
  28, 46, 64, 38, 72, 90, 56, 40, 68, 84, 52, 30, 44, 76, 96, 60, 34, 48, 70, 42,
  58, 88, 50, 32, 62, 80, 46, 36, 54, 26,
];

/**
 * Three steps, then the example recording.
 *
 * The play control is deliberately inert and labelled as such. There is no
 * sample audio yet, and a waveform that animates as though something were
 * playing would be a promise the page cannot keep.
 */
export function How() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink">
            {de.how.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[20ch] text-[1.875rem] md:text-[2.75rem]">
            {de.how.headline}
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {de.how.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="list-none">
                <span
                  aria-hidden
                  className="grid size-10 place-items-center rounded-full bg-brand font-display text-lg font-bold text-ink"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl">{step.title}</h3>
                <p className="mt-2 max-w-[38ch] text-ink-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.12}>
          <figure className="mt-14 rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-sm md:mt-16 md:p-8">
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                disabled
                aria-label={de.how.example.play}
                className="grid size-14 shrink-0 place-items-center rounded-full bg-brand text-ink disabled:opacity-60"
              >
                <Play size={22} weight="fill" />
              </button>

              <figcaption className="min-w-0">
                <span className="block font-display text-lg font-semibold">
                  {de.how.example.title}
                </span>
                <span className="block text-[15px] text-ink-muted">
                  {de.how.example.caption}
                </span>
              </figcaption>

              <span className="ml-auto font-display text-[15px] tabular-nums text-ink-muted">
                {de.how.example.duration}
              </span>
            </div>

            <div aria-hidden className="mt-6 flex h-16 items-center justify-between gap-[3px]">
              {WAVE.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-[3px] shrink-0 rounded-full bg-brand/40"
                />
              ))}
            </div>

            <p className="mt-4 text-[15px] text-ink-muted">{de.how.example.note}</p>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
