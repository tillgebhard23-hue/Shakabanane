import Image from "next/image";
import { de } from "@/content/de";
import { Button } from "../Button";
import hero from "@/public/img/hero-texture.jpg";

/**
 * Asymmetric split: copy on the left, artwork on the right.
 *
 * The briefing also lists three figures for the hero. They sit in their own
 * strip directly below instead, so the hero holds one message and one decision:
 * a headline, a sentence, two buttons. The figures still land above the fold on
 * a laptop.
 *
 * The artwork is a generated placeholder and deliberately abstract. FAIRFÜHRER
 * is built on real places and real voices, so an invented photograph of the
 * Lindau harbour would misrepresent the very thing the brand promises.
 */
export function Hero() {
  return (
    <section className="shell grid items-center gap-10 pt-12 pb-14 md:gap-16 md:pt-20 md:pb-20 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <h1 className="text-[2.125rem] leading-[1.06] md:text-[2.875rem] lg:text-[3rem]">
          {de.hero.headline}
        </h1>

        <p className="mt-6 max-w-[34ch] text-lg text-ink-muted md:text-xl">
          {de.hero.subline}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={de.hero.primary.href}>{de.hero.primary.label}</Button>
          <Button href={de.hero.secondary.href} variant="secondary">
            {de.hero.secondary.label}
          </Button>
        </div>
      </div>

      <div className="lg:col-span-4">
        <Image
          src={hero}
          alt={de.hero.imageAlt}
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="w-full rounded-[var(--radius-image)]"
        />
      </div>
    </section>
  );
}
