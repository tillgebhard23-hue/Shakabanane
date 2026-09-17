"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The page's one entry animation: content rises a little as it comes into view.
 *
 * It earns its place by establishing reading order, so a section's heading
 * settles before the detail under it. Anything that does not benefit from that
 * sequence should not be wrapped.
 *
 * The hidden state lives in CSS, not in inline styles, and that is deliberate.
 * Driving it from a component meant the server rendered `opacity: 0` and React
 * left that inline style in place during hydration, so the whole page stayed
 * invisible for anyone whose preferences should have skipped the animation
 * altogether. In CSS the media queries decide before first paint: no animation
 * for reduced-motion, and nothing hidden when scripting is unavailable.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
