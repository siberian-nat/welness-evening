import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleDot,
  Clock3,
  Droplets,
  Flame,
  Leaf,
  MapPin,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { Countdown } from "./components/Countdown";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wellness-evening.vercel.app";
const registrationUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_URL ||
  "https://forms.gle/replace-with-your-google-form";
const isExternalRegistration = registrationUrl.startsWith("http");

const highlights = [
  {
    icon: Leaf,
    title: "Guided stretch",
    text: "A slow, elegant mobility practice designed to soften the nervous system and open the body.",
  },
  {
    icon: Flame,
    title: "Private sauna",
    text: "Heat, quiet, and recovery in a private setting reserved for the group.",
  },
  {
    icon: Waves,
    title: "Pool access",
    text: "A refreshing swim ritual between movement, warmth, and conversation.",
  },
  {
    icon: Sparkles,
    title: "Wellness refreshments",
    text: "Light bites, mineral water, herbal infusions, and small finishing details.",
  },
];

const schedule = [
  ["18:30", "Arrival", "Tea, towels, soft landing, and a moment to switch off."],
  ["18:50", "Stretch", "A guided full-body release with breath-led pacing."],
  ["19:35", "Sauna", "Private sauna rotation with calm recovery pauses."],
  ["20:20", "Pool", "Unhurried pool access and a quiet reset."],
  ["21:00", "Refreshments", "Light wellness table, conversation, and closing ritual."],
];

const assurances = [
  "Small group of 10 guests",
  "No previous stretch experience needed",
  "Towels and refreshments included",
  "Designed as a calm premium evening, not a workout class",
];

const faqs = [
  {
    question: "Do I need to be flexible?",
    answer:
      "No. The stretch session is slow, accessible, and guided with options for different bodies.",
  },
  {
    question: "What should I bring?",
    answer:
      "Swimwear, comfortable clothes for stretching, and anything personal you like after sauna.",
  },
  {
    question: "How many people can join?",
    answer:
      "Only 10 places are available so the evening stays calm, personal, and easy to host well.",
  },
];

export default function Home() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Wellness Evening Amsterdam",
    startDate: "2026-06-27T18:30:00+02:00",
    endDate: "2026-06-27T21:30:00+02:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    maximumAttendeeCapacity: 10,
    location: {
      "@type": "Place",
      name: "Private wellness location",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
    },
    image: [
      `${siteUrl}/images/wellness-clouds.jpg`,
      `${siteUrl}/images/wellness-beach.jpg`,
    ],
    description:
      "An intimate wellness evening in Amsterdam with guided stretching, private sauna, pool access, and nourishing refreshments.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/LimitedAvailability",
      url: registrationUrl,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <section className="hero" id="top">
        <Image
          className="hero__image"
          src="/images/wellness-beach.jpg"
          alt="Evening beach atmosphere in Amsterdam"
          fill
          priority
          loading="eager"
          sizes="100vw"
        />
        <div className="hero__shade" />

        <nav className="nav" aria-label="Main navigation">
          <a className="nav__brand" href="#top">
            Wellness
          </a>
          <div className="nav__links">
            <a href="#experience">Experience</a>
            <a href="#program">Program</a>
            <a href="#reserve">Reserve</a>
          </div>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">Amsterdam / June 27 / 10 places</p>
          <h1>Wellness Evening Amsterdam</h1>
          <p className="hero__lead">
            A private stretch, sauna, and pool ritual for the kind of evening
            that makes the body exhale before the weekend begins.
          </p>

          <div className="hero__details" aria-label="Event details">
            <span>
              <CalendarDays size={18} aria-hidden="true" />
              June 27, 2026
            </span>
            <span>
              <Clock3 size={18} aria-hidden="true" />
              18:30-21:30
            </span>
            <span>
              <MapPin size={18} aria-hidden="true" />
              Amsterdam
            </span>
          </div>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
            >
              Reserve a place
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#program">
              See the evening
            </a>
          </div>
        </div>
      </section>

      <div className="ribbon" aria-label="Event summary">
        <span>Guided stretch</span>
        <CircleDot size={12} aria-hidden="true" />
        <span>Private sauna</span>
        <CircleDot size={12} aria-hidden="true" />
        <span>Pool access</span>
        <CircleDot size={12} aria-hidden="true" />
        <span>Wellness refreshments</span>
      </div>

      <section className="intro section">
        <div className="section__inner intro__grid">
          <div>
            <p className="eyebrow">Designed to feel different</p>
            <h2>A calm social ritual, made intimate.</h2>
          </div>
          <p className="intro__copy">
            The evening moves through stretch, heat, water, and a soft closing
            table. Nothing rushed, nothing loud. Just a beautiful private
            setting, a small group, and the rare feeling of having nowhere else
            to be.
          </p>
        </div>
      </section>

      <section className="poster section">
        <div className="section__inner poster__layout">
          <div className="poster__image" aria-hidden="true">
            <Image
              src="/images/wellness-clouds.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) 82vw, 420px"
            />
          </div>
          <div className="poster__text">
            <p className="eyebrow">The atmosphere</p>
            <h2>Soft light. Warm air. Quiet water. The city left outside.</h2>
            <p>
              A premium evening for people who want their body to feel lighter,
              their mind to feel quieter, and their calendar to finally include
              something restorative.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Included</p>
            <h2>Everything is curated around the reset.</h2>
          </div>

          <div className="feature-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="program section" id="program">
        <div className="section__inner program__grid">
          <div className="program__sticky">
            <p className="eyebrow">Program</p>
            <h2>Three hours, paced like a deep breath.</h2>
            <p>
              The flow is built to ease guests into the space, warm the body,
              refresh with water, and close without the usual post-event noise.
            </p>
          </div>

          <div className="timeline">
            {schedule.map(([time, title, text]) => (
              <article className="timeline__item" key={time}>
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

      <section className="gallery section" aria-label="Mood gallery">
        <div className="section__inner gallery__grid">
          <figure className="gallery__large">
            <Image
              src="/images/wellness-beach.jpg"
              alt="Evening beach scene with soft sky and sand"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </figure>
          <div className="gallery__caption">
            <p className="eyebrow">Afterglow energy</p>
            <h2>Leave with the feeling of a tiny holiday.</h2>
            <p>
              The visual language is sunset, skin, linen, mineral water, and
              the hush that appears after good heat and slow movement.
            </p>
          </div>
        </div>
      </section>

      <section className="reserve section" id="reserve">
        <div className="section__inner reserve__grid">
          <div className="reserve__copy">
            <p className="eyebrow">Limited invitation</p>
            <h2>Only 10 places. The room should feel spacious.</h2>
            <p>
              This is intentionally small. If the date feels like exactly what
              your body has been asking for, reserve now and receive the private
              location details after confirmation.
            </p>

            <ul className="check-list">
              {assurances.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="booking-panel" aria-label="Booking panel">
            <div className="booking-panel__top">
              <span className="booking-panel__label">June 27</span>
              <Users size={24} aria-hidden="true" />
            </div>
            <Countdown />
            <div className="booking-panel__meta">
              <span>
                <Droplets size={16} aria-hidden="true" />
                Stretch / sauna / pool
              </span>
              <span>
                <MapPin size={16} aria-hidden="true" />
                Amsterdam
              </span>
            </div>
            <a
              className="button button--primary booking-panel__button"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
            >
              Apply for a place
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <section className="faq section">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Good to know</p>
            <h2>Simple details, premium care.</h2>
          </div>
          <div className="faq__grid">
            {faqs.map((item) => (
              <article className="faq__item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section__inner footer__inner">
          <a className="nav__brand" href="#top">
            Wellness
          </a>
          <p>Amsterdam / June 27 / 10 places</p>
        </div>
      </footer>
    </main>
  );
}
