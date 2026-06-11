"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  text: string;
  image: string;
  alt: string;
}

interface AboutCarouselProps {
  eyebrow: string;
  slides: Slide[];
  prevLabel: string;
  nextLabel: string;
}

export function AboutCarousel({
  eyebrow,
  slides,
  prevLabel,
  nextLabel,
}: AboutCarouselProps) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next: number) => setIndex((next + count) % count);

  useEffect(() => {
    if (count <= 1 || paused) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [count, paused]);

  return (
    <div
      className="about-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="about-carousel__media" data-cursor-light data-tilt-card>
        {slides.map((slide, slideIndex) => (
          <Image
            key={slide.image}
            className={`about-carousel__photo${
              slideIndex === index ? " is-active" : ""
            }`}
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 900px) 82vw, 380px"
            priority={slideIndex === 0}
          />
        ))}
      </div>

      <div className="about-carousel__panel">
        <div className="about-carousel__head">
          <p className="eyebrow">{eyebrow}</p>
          <span className="about-carousel__count">
            {index + 1} / {count}
          </span>
        </div>

        <div className="about-carousel__stage">
          <p className="about-carousel__text" key={index}>
            {slides[index].text}
          </p>
        </div>

        <div className="about-carousel__controls">
          <button
            type="button"
            className="about-carousel__arrow"
            aria-label={prevLabel}
            onClick={() => go(index - 1)}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <div className="about-carousel__dots" role="tablist">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.image}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`${slideIndex + 1}`}
                className={`about-carousel__dot${
                  slideIndex === index ? " is-active" : ""
                }`}
                onClick={() => setIndex(slideIndex)}
              />
            ))}
          </div>

          <button
            type="button"
            className="about-carousel__arrow"
            aria-label={nextLabel}
            onClick={() => go(index + 1)}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
