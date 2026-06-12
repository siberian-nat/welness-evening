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
  MessageCircle,
  Play,
  Plus,
  Send,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { Countdown } from "./Countdown";
import { LandingMotion } from "./LandingMotion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AboutCarousel } from "./AboutCarousel";
import { useLanguage } from "../i18n/LanguageProvider";

const registrationUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_URL ||
  "https://forms.gle/Pxf25LH8xCFRkbDU7";
const isExternalRegistration = registrationUrl.startsWith("http");

const telegramUrl = "https://t.me/natmovement";
const whatsappUrl = "https://wa.me/79118271714";
const instagramUrl =
  "https://www.instagram.com/nataliachiriateva?igsh=MXRybjQwc2twbnN0cg==";

const highlightIcons = [Leaf, Waves, Droplets, Sparkles, Gift, Flame];
const pastEventMedia: { image: string; video?: string }[] = [
  {
    image: "/images/past-amsterdam-picnic.jpg",
    video: "https://www.instagram.com/reel/C8CjZ9xt2Nx/?igsh=aHdrcXIyNzI2cmRl",
  },
  {
    image: "/images/past-barcelona-sarana.jpg",
    video: "https://www.instagram.com/reel/C_c7XQcITkD/?igsh=MTF1cGp1bDE3aWU2YQ==",
  },
  {
    image: "/images/past-amsterdam-studio.jpg",
  },
];
const atmosphereImages = [
  "/images/wellness-atmosphere-1.jpg",
  "/images/wellness-atmosphere-2.jpg",
  "/images/wellness-atmosphere-3.jpg",
];

export function Landing() {
  const { t } = useLanguage();

  return (
    <main>
      <LandingMotion />

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
            <p className="eyebrow">
              {t.intro.eyebrow.lead} <em>{t.intro.eyebrow.accent}</em>
            </p>
            <h2>{t.intro.title}</h2>
          </div>
          <p className="intro__copy" data-reveal>
            {t.intro.copy}
          </p>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section__inner" data-reveal>
          <AboutCarousel
            eyebrow={t.about.eyebrow}
            slides={t.about.slides}
            prevLabel={t.about.controls.prev}
            nextLabel={t.about.controls.next}
          />
          <div className="contact-links" aria-label={t.contacts.ariaLabel}>
            <a
              className="contact-link"
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-light
            >
              <Send size={16} aria-hidden="true" />
              {t.contacts.telegram}
            </a>
            <a
              className="contact-link"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-light
            >
              <MessageCircle size={16} aria-hidden="true" />
              {t.contacts.whatsapp}
            </a>
            <a
              className="contact-link"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-light
            >
              <Camera size={16} aria-hidden="true" />
              {t.contacts.instagram}
            </a>
          </div>
        </div>
      </section>

      <section className="poster section">
        <div className="section__inner">
          <p className="eyebrow poster__eyebrow" data-reveal>
            {t.poster.eyebrow}
          </p>
          <div className="poster__row">
            {t.poster.images.map((image, index) => (
              <figure
                className="poster__photo"
                key={index}
                data-reveal
                data-cursor-light
                data-tilt-card
              >
                <Image
                  src={atmosphereImages[index] ?? atmosphereImages[0]}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 760px) 82vw, 33vw"
                />
              </figure>
            ))}
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
            {t.pastEvents.items.map((event, index) => {
              const media = pastEventMedia[index] ?? pastEventMedia[0];
              return (
                <article className="past-event-card" key={index} data-reveal data-cursor-light data-tilt-card>
                  <figure className="past-event-card__image">
                    <Image
                      src={media.image}
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
                  {media.video && (
                    <a
                      className="past-event-card__video"
                      href={media.video}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Play size={15} aria-hidden="true" />
                      {t.pastEvents.videoLabel}
                    </a>
                  )}
                </article>
              );
            })}
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
                {item.links && (
                  <div className="faq__links">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        className="faq__link"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
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
          <div className="footer__contacts" aria-label={t.contacts.ariaLabel}>
            <a href={telegramUrl} target="_blank" rel="noreferrer">
              <Send size={16} aria-hidden="true" />
              {t.contacts.telegram}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={16} aria-hidden="true" />
              {t.contacts.whatsapp}
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <Camera size={16} aria-hidden="true" />
              {t.contacts.instagram}
            </a>
          </div>
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
