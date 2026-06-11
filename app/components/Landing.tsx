"use client";

import { Fragment } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Check,
  CircleDot,
  Clock3,
  Droplets,
  Flame,
  Gift,
  Leaf,
  MapPin,
  Plus,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { Countdown } from "./Countdown";
import { LandingMotion } from "./LandingMotion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageProvider";

const registrationUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_URL ||
  "https://forms.gle/replace-with-your-google-form";
const isExternalRegistration = registrationUrl.startsWith("http");

const highlightIcons = [Leaf, Waves, Droplets, Sparkles, Gift, Flame];
const pastEventImages = [
  "/images/wellness-clouds.jpg",
  "/images/wellness-afterglow.png",
  "/images/wellness-still-life.png",
];

export function Landing() {
  const { t } = useLanguage();

  return (
    <main>
      <LandingMotion />

      <section className="hero" id="top">
        <Image
          className="hero__image"
          src="/images/wellness-hero.png"
          alt={t.hero.imageAlt}
          fill
          priority
          loading="eager"
          sizes="100vw"
        />
        <div className="hero__shade" />
        <div className="hero__texture" aria-hidden="true" />
        <div className="hero__waterline" aria-hidden="true" />

        <nav className="nav" aria-label={t.nav.ariaLabel}>
          <a className="nav__brand" href="#top">
            Wellness
          </a>
          <div className="nav__right">
            <div className="nav__links">
              <a href="#experience">{t.nav.links.experience}</a>
              <a href="#program">{t.nav.links.program}</a>
              <a href="#price">{t.nav.links.price}</a>
              <a href="#reserve">{t.nav.links.reserve}</a>
            </div>
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="hero__content" data-reveal>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero__lead">{t.hero.lead}</p>

          <div className="hero__details" aria-label={t.hero.detailsAriaLabel}>
            <span>
              <CalendarDays size={18} aria-hidden="true" />
              {t.hero.date}
            </span>
            <span>
              <Clock3 size={18} aria-hidden="true" />
              {t.hero.time}
            </span>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {t.hero.location}
            </span>
          </div>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
              data-cursor-light
            >
              {t.hero.primaryCta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#program" data-cursor-light>
              {t.hero.ghostCta}
            </a>
          </div>
        </div>

        <aside className="hero__side" data-reveal data-cursor-light data-tilt-card>
          <div className="hero__side-top">
            <span>{t.hero.sideTop}</span>
            <Sparkles size={18} aria-hidden="true" />
          </div>
          <strong>{t.hero.sideNumber}</strong>
          <p>{t.hero.sideText}</p>
          <div className="hero__side-row">
            <span>{t.hero.sideHours}</span>
            <span>{t.hero.sidePrice}</span>
          </div>
        </aside>
      </section>

      <div className="ribbon" aria-label={t.ribbon.ariaLabel}>
        <div className="ribbon__track">
          {[...t.ribbon.items, ...t.ribbon.items].map((item, index) => (
            <Fragment key={`${item}-${index}`}>
              <span aria-hidden={index >= t.ribbon.items.length}>{item}</span>
              <CircleDot size={12} aria-hidden="true" />
            </Fragment>
          ))}
        </div>
      </div>

      <section className="intro section">
        <div className="section__inner intro__grid">
          <div data-reveal>
            <p className="eyebrow">{t.intro.eyebrow}</p>
            <h2>{t.intro.title}</h2>
          </div>
          <p className="intro__copy" data-reveal>
            {t.intro.copy}
          </p>
        </div>
      </section>

      <section className="poster section">
        <div className="section__inner poster__layout">
          <div className="poster__image" aria-hidden="true" data-reveal data-cursor-light data-tilt-card>
            <Image
              src="/images/wellness-still-life.png"
              alt=""
              fill
              sizes="(max-width: 760px) 82vw, 420px"
            />
          </div>
          <div className="poster__text" data-reveal>
            <p className="eyebrow">{t.poster.eyebrow}</p>
            <h2>{t.poster.title}</h2>
            <p>{t.poster.copy}</p>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section__inner">
          <div className="section__header" data-reveal>
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2>{t.experience.title}</h2>
          </div>

          <div className="feature-grid">
            {t.experience.highlights.map(({ title, text }, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;
              return (
                <article className="feature-card" key={index} data-reveal data-cursor-light data-tilt-card>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="program section" id="program">
        <div className="section__inner program__grid">
          <div className="program__sticky" data-reveal>
            <p className="eyebrow">{t.program.eyebrow}</p>
            <h2>{t.program.title}</h2>
            <p>{t.program.copy}</p>
          </div>

          <div className="timeline">
            {t.program.schedule.map(({ time, title, text }, index) => (
              <article className="timeline__item" key={index} data-reveal>
                <time>{time}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section__inner about__grid">
          <figure className="about__photo" data-reveal data-cursor-light data-tilt-card>
            <Image
              src="/images/wellness-beach.jpg"
              alt={t.about.photoAlt}
              fill
              sizes="(max-width: 900px) 82vw, 360px"
            />
            <figcaption>{t.about.caption}</figcaption>
          </figure>
          <div className="about__copy" data-reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <p>{t.about.copy}</p>
            <div className="about__facts">
              {t.about.facts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery section" aria-label={t.gallery.ariaLabel}>
        <div className="section__inner gallery__grid">
          <figure className="gallery__large" data-reveal data-cursor-light>
            <Image
              src="/images/wellness-afterglow.png"
              alt={t.gallery.imageAlt}
              fill
              loading="eager"
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </figure>
          <div className="gallery__caption" data-reveal>
            <p className="eyebrow">{t.gallery.eyebrow}</p>
            <h2>{t.gallery.title}</h2>
            <p>{t.gallery.copy}</p>
          </div>
        </div>
      </section>

      <section className="past-events section" id="past-events">
        <div className="section__inner">
          <div className="section__header" data-reveal>
            <p className="eyebrow">{t.pastEvents.eyebrow}</p>
            <h2>{t.pastEvents.title}</h2>
          </div>

          <div className="past-events-grid">
            {t.pastEvents.items.map((event, index) => (
              <article className="past-event-card" key={index} data-reveal data-cursor-light data-tilt-card>
                <figure className="past-event-card__image">
                  <Image
                    src={pastEventImages[index] ?? pastEventImages[0]}
                    alt={event.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, 33vw"
                  />
                  <span aria-hidden="true">
                    <Camera size={18} />
                  </span>
                </figure>
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="price section" id="price">
        <div className="section__inner price__layout">
          <div data-reveal>
            <p className="eyebrow">{t.price.eyebrow}</p>
            <h2>{t.price.title}</h2>
            <p>{t.price.copy}</p>
          </div>

          <div className="price__details" aria-label={t.price.eyebrow} data-reveal data-cursor-light>
            {t.price.details.map((detail) => (
              <div key={detail}>{detail}</div>
            ))}
          </div>
        </div>

        <div className="section__inner">
          <div className="spots-bar" data-reveal data-cursor-light>
            <div id="spotsCounter" style={{ display: "none" }}>
              <div className="spots-label">{t.price.spotsLabel}</div>
              <div className="spots-count" id="spotsNumber">
                5
              </div>
            </div>
            <p>{t.price.spotsCopy}</p>
            <a
              className="button button--primary"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
              data-cursor-light
            >
              {t.price.cta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="reserve section" id="reserve">
        <div className="section__inner reserve__grid">
          <div className="reserve__copy" data-reveal>
            <p className="eyebrow">{t.reserve.eyebrow}</p>
            <h2>{t.reserve.title}</h2>
            <p>{t.reserve.copy}</p>

            <ul className="check-list">
              {t.reserve.assurances.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="booking-panel" aria-label={t.reserve.panelAriaLabel} data-reveal data-cursor-light data-tilt-card>
            <div className="booking-panel__top">
              <span className="booking-panel__label">{t.reserve.panelDate}</span>
              <Users size={24} aria-hidden="true" />
            </div>
            <Countdown />
            <div className="booking-panel__meta">
              <span>
                <Droplets size={16} aria-hidden="true" />
                {t.reserve.panelMetaActivities}
              </span>
              <span>
                <MapPin size={16} aria-hidden="true" />
                {t.reserve.panelMetaLocation}
              </span>
              <span>
                <Sparkles size={16} aria-hidden="true" />
                {t.reserve.panelMetaPrice}
              </span>
            </div>
            <a
              className="button button--primary booking-panel__button"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
              data-cursor-light
            >
              {t.reserve.cta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <section className="faq section">
        <div className="section__inner">
          <div className="section__header" data-reveal>
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2>{t.faq.title}</h2>
          </div>
          <div className="faq__grid">
            {t.faq.items.map((item, index) => (
              <details className="faq__item" key={index} data-reveal data-cursor-light>
                <summary>
                  <h3>{item.question}</h3>
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section__inner footer__inner">
          <a className="nav__brand" href="#top">
            Wellness
          </a>
          <p>{t.footer.meta}</p>
        </div>
      </footer>

      <a
        className="mobile-booking-cta"
        href={registrationUrl}
        target={isExternalRegistration ? "_blank" : undefined}
        rel={isExternalRegistration ? "noreferrer" : undefined}
        data-cursor-light
      >
        {t.mobileCta}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </main>
  );
}
