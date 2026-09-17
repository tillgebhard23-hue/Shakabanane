"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { de } from "@/content/de";
import { Button } from "./Button";

/**
 * Sticky header, 68px tall, single line at desktop.
 *
 * The briefing requires a priority one call to action reachable without
 * scrolling on every page, which is what "App laden" is doing up here.
 *
 * The brand mark is set in type for now. A real logo SVG replaces the wordmark
 * and the PIN circle once the file arrives.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span aria-hidden className="grid size-8 place-items-center rounded-full bg-brand">
            <span className="block size-2.5 rounded-full bg-surface" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            {de.nav.brand}
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {de.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={de.nav.cta.href}>{de.nav.cta.label}</Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? de.nav.menuClose : de.nav.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-bg lg:hidden">
          <nav aria-label="Hauptnavigation" className="shell py-4">
            <ul className="flex flex-col">
              {de.nav.links.map((link) => (
                <li key={link.href} className="border-b border-border last:border-0">
                  <Link
                    href={link.href}
                    className="block py-3.5 text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-5">
              <Button href={de.nav.cta.href}>{de.nav.cta.label}</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
