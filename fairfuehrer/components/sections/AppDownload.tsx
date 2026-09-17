import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";
import { de } from "@/content/de";
import { Reveal } from "../Reveal";

/**
 * Closing section, and the page's second priority one call to action.
 *
 * The store links are set as buttons rather than as Apple's and Google's
 * official badge artwork. Both companies publish those badges under brand
 * guidelines with fixed proportions and clear space, and the files are not
 * available in this environment. Swapping these for the official assets is a
 * drop-in replacement and should happen before launch.
 */
export function AppDownload() {
  return (
    <section id="app" className="section bg-brand-wash">
      <div className="shell text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] text-[2rem] md:text-[3rem]">
            {de.app.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-lg text-ink-muted">
            {de.app.body}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={de.app.appStore.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-full bg-ink px-7 font-display font-semibold text-bg transition-transform duration-150 active:scale-[0.98]"
            >
              <AppleLogo aria-hidden size={22} weight="fill" />
              {de.app.appStore.label}
            </a>
            <a
              href={de.app.playStore.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-full bg-ink px-7 font-display font-semibold text-bg transition-transform duration-150 active:scale-[0.98]"
            >
              <GooglePlayLogo aria-hidden size={22} weight="fill" />
              {de.app.playStore.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
