"use client";

import {
  useEffect,
  useRef,
  type JSX,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
};

export const Reveal = ({
  children,
  className = "",
  as = "div",
  delayMs = 0,
}: RevealProps): JSX.Element => {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as;

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      node.classList.add("in");
      return;
    }

    if (delayMs > 0) {
      const timer = window.setTimeout(() => {
        node.classList.add("in");
      }, delayMs);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <Tag
      ref={ref as never}
      className={`rv ${className}`.trim()}
    >
      {children}
    </Tag>
  );
};
