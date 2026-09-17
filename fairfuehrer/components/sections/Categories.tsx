import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { de } from "@/content/de";
import { Reveal } from "../Reveal";
import { Button } from "../Button";

/*
 * Five categories, five cells. The grid is shaped around that number rather
 * than padded out to a tidy six, and the two wide cells carry a colour wash so
 * the block is not five white boxes in a row.
 */
const LAYOUT = [
  "md:col-span-3 bg-brand-wash",
  "md:col-span-3 bg-green-wash",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export function Categories() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <h2 className="max-w-[26ch] text-[1.875rem] md:text-[2.75rem]">
            {de.categories.headline}
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:mt-12 md:grid-cols-6">
          {de.categories.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06} className={LAYOUT[i]}>
              <li className="h-full list-none">
                <Link
                  href={de.categories.cta.href}
                  className={`group flex h-full flex-col rounded-[var(--radius-card)] border border-border p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    LAYOUT[i].includes("bg-") ? "" : "bg-surface"
                  }`}
                >
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="mt-2 text-[15.5px] text-ink-muted">{item.body}</p>
                  <ArrowRight
                    aria-hidden
                    size={20}
                    className="mt-5 text-brand-ink transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <Button href={de.categories.cta.href}>{de.categories.cta.label}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
