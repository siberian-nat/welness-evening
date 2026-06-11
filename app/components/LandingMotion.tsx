"use client";

import { useEffect } from "react";

const POINTER_SELECTOR = "[data-cursor-light], [data-tilt-card]";

export function LandingMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | null = null;

    const updateScrollState = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

        root.style.setProperty("--scroll-progress", progress.toFixed(4));
        root.classList.toggle("is-scrolled", window.scrollY > 28);
        frame = 0;
      });
    };

    root.classList.add("motion-ready");
    updateScrollState();

    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -4% 0px",
          threshold: 0.08,
        },
      );

      revealNodes.forEach((node, index) => {
        node.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
        observer?.observe(node);
      });
    }

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const interactiveNodes = canHover
      ? Array.from(document.querySelectorAll<HTMLElement>(POINTER_SELECTOR))
      : [];

    const cleanups = interactiveNodes.map((node) => {
      const handleMove = (event: PointerEvent) => {
        const rect = node.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

        node.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
        node.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);

        if (node.hasAttribute("data-tilt-card")) {
          node.style.setProperty("--rx", `${((0.5 - y) * 4.5).toFixed(2)}deg`);
          node.style.setProperty("--ry", `${((x - 0.5) * 5.5).toFixed(2)}deg`);
          node.style.setProperty("--lift", "-4px");
        }
      };

      const handleLeave = () => {
        node.style.removeProperty("--mx");
        node.style.removeProperty("--my");
        node.style.removeProperty("--rx");
        node.style.removeProperty("--ry");
        node.style.removeProperty("--lift");
      };

      node.addEventListener("pointermove", handleMove);
      node.addEventListener("pointerleave", handleLeave);

      return () => {
        node.removeEventListener("pointermove", handleMove);
        node.removeEventListener("pointerleave", handleLeave);
      };
    });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      observer?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready", "is-scrolled");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
