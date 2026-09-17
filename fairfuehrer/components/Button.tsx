import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";

/*
 * Primary buttons put dark ink on the brand orange, not white.
 *
 * White on #EF7B22 measures 2.79:1, short of the 4.5:1 that WCAG AA asks for,
 * while #222824 on the same orange measures 5.39:1. The live site currently
 * sets white on orange; this is the one place that decision is enforced.
 */
const base =
  "inline-flex items-center justify-center rounded-full font-display font-semibold " +
  "transition-[transform,background-color,border-color] duration-150 active:scale-[0.98] " +
  "h-[52px] md:h-12 px-7 text-base whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink hover:bg-[#e06c15]",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink/5",
  text: "text-brand-ink underline underline-offset-4 h-auto px-0 hover:no-underline",
};

export function Button({
  href,
  variant = "primary",
  children,
  external,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
}) {
  const className = `${base} ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
