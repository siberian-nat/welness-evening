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
    title: "Стретчинг",
    text: "Мягкое движение и дыхание, чтобы снять напряжение после недели. Опыт не нужен.",
  },
  {
    icon: Waves,
    title: "Сауна + бассейн",
    text: "Приватный слот 50 минут только для нашей группы, без спешки и посторонних.",
  },
  {
    icon: Droplets,
    title: "Велнес-шейк",
    text: "Дегустация Ketology: протеин, MCT и лёгкий персиковый вкус.",
  },
  {
    icon: Sparkles,
    title: "Карты",
    text: "Немного магии, честные разговоры и повод мягко заглянуть внутрь себя.",
  },
  {
    icon: Gift,
    title: "Подарочный мешочек",
    text: "Каждая уходит с маленьким приятным сюрпризом после вечера.",
  },
  {
    icon: Flame,
    title: "Вино по желанию",
    text: "Бокал в приятной компании у бассейна для тех, кому хочется.",
  },
];

const schedule = [
  ["18:30", "Сбор гостей", "Чай, знакомство, полотенца и мягкое переключение из городского темпа."],
  ["18:50", "Стретчинг", "Лёгкое движение, дыхание и расслабление всего тела."],
  ["19:35", "Карты и шейк", "Дегустация Ketology, карты и разговоры в камерном кругу."],
  ["20:05", "Сауна и бассейн", "Приватная сауна 50 минут, вода, тепло и восстановление."],
  ["21:05", "Вино, подарки и финал", "Свободное общение, подарочные мешочки и спокойное завершение."],
  ["21:30", "Завершение", "Уходим легче, теплее и с ощущением маленького отпуска."],
];

const assurances = [
  "Всего 10 мест, чтобы вечер оставался личным",
  "Опыт йоги или стретчинга не нужен",
  "Коврики, полотенца и пропсы предоставляет студия",
  "Место фиксируется после оплаты через Tikkie или Revolut",
];

const faqs = [
  {
    question: "Нужен ли опыт в йоге?",
    answer:
      "Нет, совсем. Это лёгкий вечерний стретчинг, который подходит всем без исключения.",
  },
  {
    question: "Что взять с собой?",
    answer:
      "Купальник для бассейна и сауны, удобную одежду для стретчинга и личные мелочи, которые нужны после воды.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "После заявки Наташа напишет лично. Оплата через Tikkie или Revolut, место закрепляется после перевода.",
  },
  {
    question: "Где находится Stretch & Fold?",
    answer:
      "Студия находится в Амстердаме. Точный адрес придёт после бронирования.",
  },
];

const pastEvents = [
  {
    title: "Амстердам",
    text: "Встреча в парке",
    image: "/images/wellness-clouds.jpg",
    alt: "Плейсхолдер фото прошлой встречи в парке в Амстердаме",
  },
  {
    title: "Барселона",
    text: "Встреча в студии",
    image: "/images/wellness-afterglow.png",
    alt: "Плейсхолдер фото прошлой встречи в студии в Барселоне",
  },
  {
    title: "Скоро",
    text: "Фото или логотип",
    image: "/images/wellness-still-life.png",
    alt: "Плейсхолдер для третьего фото или логотипа",
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
      name: "Приватная wellness-локация",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
    },
    image: [
      `${siteUrl}/images/wellness-hero.png`,
      `${siteUrl}/images/wellness-still-life.png`,
      `${siteUrl}/images/wellness-afterglow.png`,
    ],
    description:
      "Камерный wellness-вечер для девушек в Амстердаме: стретчинг, сауна с бассейном, карты, подарки и мягкое общение.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/LimitedAvailability",
      price: "65",
      priceCurrency: "EUR",
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
          src="/images/wellness-hero.png"
          alt="Камерный wellness-вечер в Амстердаме с сауной и бассейном"
          fill
          priority
          loading="eager"
          sizes="100vw"
        />
        <div className="hero__shade" />

        <nav className="nav" aria-label="Основная навигация">
          <a className="nav__brand" href="#top">
            Wellness
          </a>
          <div className="nav__links">
            <a href="#experience">Что внутри</a>
            <a href="#program">Программа</a>
            <a href="#price">Цена</a>
            <a href="#reserve">Бронь</a>
          </div>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">Амстердам / 27 июня / 10 мест</p>
          <h1>Wellness Evening Amsterdam</h1>
          <p className="hero__lead">
            Камерный вечер для девушек: стретчинг, сауна с бассейном,
            карты, подарки и тёплое общение в Амстердаме.
          </p>

          <div className="hero__details" aria-label="Детали события">
            <span>
              <CalendarDays size={18} aria-hidden="true" />
              27 июня 2026
            </span>
            <span>
              <Clock3 size={18} aria-hidden="true" />
              18:30-21:30
            </span>
            <span>
              <MapPin size={18} aria-hidden="true" />
              Амстердам
            </span>
          </div>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
            >
              Забронировать место
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#program">
              Смотреть программу
            </a>
          </div>
        </div>
      </section>

      <div className="ribbon" aria-label="Event summary">
        <span>Стретчинг</span>
        <CircleDot size={12} aria-hidden="true" />
        <span>Приватная сауна</span>
        <CircleDot size={12} aria-hidden="true" />
        <span>Бассейн</span>
        <CircleDot size={12} aria-hidden="true" />
        <span>Карты и подарки</span>
      </div>

      <section className="intro section">
        <div className="section__inner intro__grid">
          <div>
            <p className="eyebrow">Для тех, кто хочет выдохнуть</p>
            <h2>Не тренировка и не вечеринка. Мягкий вечер для себя.</h2>
          </div>
          <p className="intro__copy">
            Мы начнём с лёгкого стретчинга, потом перейдём в сауну и бассейн,
            попробуем велнес-шейк, достанем карты и завершим вечер маленькими
            подарками. Всё спокойно, красиво и без ощущения, что нужно куда-то
            успевать.
          </p>
        </div>
      </section>

      <section className="poster section">
        <div className="section__inner poster__layout">
          <div className="poster__image" aria-hidden="true">
            <Image
              src="/images/wellness-still-life.png"
              alt=""
              fill
              sizes="(max-width: 760px) 82vw, 420px"
            />
          </div>
          <div className="poster__text">
            <p className="eyebrow">Атмосфера</p>
            <h2>Мягкий свет, тёплый воздух, спокойная вода и город за дверью.</h2>
            <p>
              Это вечер, после которого тело становится легче, голова тише,
              а в календаре наконец появляется что-то восстановительное.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Что включено</p>
            <h2>Всё собрано вокруг мягкого восстановления.</h2>
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
            <p className="eyebrow">Программа</p>
            <h2>Три часа, которые идут в темпе глубокого вдоха.</h2>
            <p>
              Начало в 18:30. Сначала мягко разогреваем тело, затем уходим в
              тепло и воду, а финал оставляем для разговоров, вина по желанию
              и подарков.
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

      <section className="about section" id="about">
        <div className="section__inner about__grid">
          <figure className="about__photo">
            <Image
              src="/images/wellness-beach.jpg"
              alt="Плейсхолдер фото Наташи, организатора Wellness Evening Amsterdam"
              fill
              sizes="(max-width: 900px) 82vw, 360px"
            />
            <figcaption>Фото Наташи</figcaption>
          </figure>
          <div className="about__copy">
            <p className="eyebrow">О Наташе</p>
            <h2>Наташа собирает вечер так, чтобы в нём было спокойно с первой минуты.</h2>
            <p>
              В фокусе не идеальная растяжка, а ощущение заботы: понятные
              инструкции, мягкий темп, личный контакт и пространство, где можно
              прийти без подготовки.
            </p>
            <div className="about__facts">
              <span>Камерная группа</span>
              <span>Только 10 мест</span>
              <span>Личное подтверждение брони</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery section" aria-label="Галерея атмосферы">
        <div className="section__inner gallery__grid">
          <figure className="gallery__large">
            <Image
              src="/images/wellness-afterglow.png"
              alt="Тёплая атмосфера после сауны и бассейна"
              fill
              loading="eager"
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </figure>
          <div className="gallery__caption">
            <p className="eyebrow">После вечера</p>
            <h2>Уйти с ощущением маленького отпуска.</h2>
            <p>
              Немного тепла, воды, движения, разговоров и красивых деталей,
              которые остаются с тобой ещё по дороге домой.
            </p>
          </div>
        </div>
      </section>

      <section className="past-events section" id="past-events">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Уже было</p>
            <h2>Прошлые встречи: живые, маленькие и очень тёплые.</h2>
          </div>

          <div className="past-events-grid">
            {pastEvents.map((event) => (
              <article className="past-event-card" key={event.title}>
                <figure className="past-event-card__image">
                  <Image
                    src={event.image}
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
          <div>
            <p className="eyebrow">Стоимость</p>
            <h2>€65 за вечер, всё включено.</h2>
            <p>
              Оплата при бронировании. После заявки Наташа напишет лично и
              пришлёт детали для перевода через Tikkie или Revolut.
            </p>
          </div>

          <div className="price__details" aria-label="Что входит в стоимость">
            <div>~3 часа программы</div>
            <div>Приватный формат, только 10 мест</div>
            <div>Стретчинг, сауна, бассейн, карты и подарки</div>
            <div>Место бронируется предоплатой</div>
          </div>
        </div>

        <div className="section__inner">
          <div className="spots-bar">
            <div id="spotsCounter" style={{ display: "none" }}>
              <div className="spots-label">Осталось мест</div>
              <div className="spots-count" id="spotsNumber">
                5
              </div>
            </div>
            <p>
              Камерный формат: максимум 10 гостей. Место закрепляется после
              оплаты.
            </p>
            <a
              className="button button--primary"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
            >
              Забронировать
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="reserve section" id="reserve">
        <div className="section__inner reserve__grid">
          <div className="reserve__copy">
            <p className="eyebrow">Бронирование</p>
            <h2>Всего 10 мест. Пространству нужно оставаться просторным.</h2>
            <p>
              Если 27 июня звучит как вечер, который нужен телу и голове,
              оставь заявку. Точный адрес студии в Амстердаме придёт после
              подтверждения брони.
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

          <aside className="booking-panel" aria-label="Панель бронирования">
            <div className="booking-panel__top">
              <span className="booking-panel__label">27 июня</span>
              <Users size={24} aria-hidden="true" />
            </div>
            <Countdown />
            <div className="booking-panel__meta">
              <span>
                <Droplets size={16} aria-hidden="true" />
                Стретчинг / сауна / бассейн
              </span>
              <span>
                <MapPin size={16} aria-hidden="true" />
                Амстердам
              </span>
              <span>
                <Sparkles size={16} aria-hidden="true" />
                €65 всё включено
              </span>
            </div>
            <a
              className="button button--primary booking-panel__button"
              href={registrationUrl}
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
            >
              Оставить заявку
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <section className="faq section">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Вопросы</p>
            <h2>Всё просто: приходишь, выдыхаешь, остальное уже собрано.</h2>
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
          <p>Амстердам / 27.06.2026 / 18:30 / 10 мест</p>
        </div>
      </footer>

      <a
        className="mobile-booking-cta"
        href={registrationUrl}
        target={isExternalRegistration ? "_blank" : undefined}
        rel={isExternalRegistration ? "noreferrer" : undefined}
      >
        Забронировать
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </main>
  );
}
