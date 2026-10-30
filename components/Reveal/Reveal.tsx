"use client";

import {
  createElement,
  useEffect,
  useRef,
  type JSX,
  type ReactNode,
} from "react";

type RevealTag = "div" | "h1" | "h2" | "h3" | "p" | "li" | "span";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  delayMs?: number;
};

const isInViewport = (node: HTMLElement): boolean => {
  const rect = node.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < viewHeight &&
    rect.left < viewWidth
  );
};

export const Reveal = ({
  children,
  className = "",
  as = "div",
  delayMs = 0,
}: RevealProps): JSX.Element => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const show = (): void => {
      node.classList.add("in");
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      show();
      return;
    }

    if (delayMs > 0) {
      const timer = window.setTimeout(show, delayMs);
      return () => window.clearTimeout(timer);
    }

    if (isInViewport(node)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            show();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "40px 0px 40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return createElement(
    as,
    {
      ref,
      className: `rv ${className}`.trim(),
    },
    children
  );
};
