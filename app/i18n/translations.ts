export type Locale = "en" | "ru";

export const DEFAULT_LOCALE: Locale = "en";

export interface Dictionary {
  nav: {
    ariaLabel: string;
    links: {
      experience: string;
      program: string;
      price: string;
      reserve: string;
    };
  };
  langSwitch: {
    label: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    detailsAriaLabel: string;
    date: string;
    time: string;
    location: string;
    primaryCta: string;
    ghostCta: string;
    imageAlt: string;
    sideTop: string;
    sideNumber: string;
    sideText: string;
    sideHours: string;
    sidePrice: string;
  };
  ribbon: {
    ariaLabel: string;
    items: string[];
  };
  intro: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  poster: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    highlights: { title: string; text: string }[];
  };
  program: {
    eyebrow: string;
    title: string;
    copy: string;
    schedule: { time: string; title: string; text: string }[];
  };
  about: {
    photoAlt: string;
    caption: string;
    eyebrow: string;
    title: string;
    copy: string;
    facts: string[];
  };
  gallery: {
    ariaLabel: string;
    imageAlt: string;
    eyebrow: string;
    title: string;
    copy: string;
  };
  pastEvents: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string; alt: string }[];
  };
  price: {
    eyebrow: string;
    title: string;
    copy: string;
    details: string[];
    spotsLabel: string;
    spotsCopy: string;
    cta: string;
  };
  reserve: {
    eyebrow: string;
    title: string;
    copy: string;
    assurances: string[];
    panelAriaLabel: string;
    panelDate: string;
    panelMetaActivities: string;
    panelMetaLocation: string;
    panelMetaPrice: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    meta: string;
  };
  mobileCta: string;
  countdown: {
    ariaLabel: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

const ru: Dictionary = {
  nav: {
    ariaLabel: "Основная навигация",
    links: {
      experience: "Что внутри",
      program: "Программа",
      price: "Цена",
      reserve: "Бронь",
    },
  },
  langSwitch: {
    label: "Сменить язык",
  },
  hero: {
    eyebrow: "Амстердам / 27 июня / 10 мест",
    title: "Wellness Evening Amsterdam",
    lead: "Камерный вечер для девушек: стретчинг, сауна с бассейном, карты, подарки и тёплое общение в Амстердаме.",
    detailsAriaLabel: "Детали события",
    date: "27 июня 2026",
    time: "17:00-20:00",
    location: "Амстердам",
    primaryCta: "Забронировать место",
    ghostCta: "Смотреть программу",
    imageAlt: "Камерный wellness-вечер в Амстердаме с сауной и бассейном",
    sideTop: "Private ritual",
    sideNumber: "10",
    sideText: "мест в камерной группе, чтобы вечер оставался личным.",
    sideHours: "3 часа",
    sidePrice: "€65",
  },
  ribbon: {
    ariaLabel: "Описание события",
    items: ["Стретчинг", "Приватная сауна", "Бассейн", "Карты и подарки"],
  },
  intro: {
    eyebrow: "Для тех, кто хочет выдохнуть",
    title: "Не тренировка и не вечеринка. Мягкий вечер для себя.",
    copy: "Мы начнём с лёгкого стретчинга, потом перейдём в сауну и бассейн, попробуем велнес-шейк, достанем карты и завершим вечер маленькими подарками. Всё спокойно, красиво и без ощущения, что нужно куда-то успевать.",
  },
  poster: {
    eyebrow: "Атмосфера",
    title: "Мягкий свет, тёплый воздух, спокойная вода и город за дверью.",
    copy: "Это вечер, после которого тело становится легче, голова тише, а в календаре наконец появляется что-то восстановительное.",
  },
  experience: {
    eyebrow: "Что включено",
    title: "Всё собрано вокруг мягкого восстановления.",
    highlights: [
      {
        title: "Стретчинг",
        text: "Мягкое движение и дыхание, чтобы снять напряжение после недели. Опыт не нужен.",
      },
      {
        title: "Сауна + бассейн",
        text: "Приватный слот 50 минут только для нашей группы, без спешки и посторонних.",
      },
      {
        title: "Велнес-шейк",
        text: "Дегустация Ketology: протеин, MCT и лёгкий персиковый вкус.",
      },
      {
        title: "Карты",
        text: "Немного магии, честные разговоры и повод мягко заглянуть внутрь себя.",
      },
      {
        title: "Подарочный мешочек",
        text: "Каждая уходит с маленьким приятным сюрпризом после вечера.",
      },
      {
        title: "Вино по желанию",
        text: "Бокал в приятной компании у бассейна для тех, кому хочется.",
      },
    ],
  },
  program: {
    eyebrow: "Программа",
    title: "Три часа, которые идут в темпе глубокого вдоха.",
    copy: "Начало в 17:00. Сначала мягко разогреваем тело, затем уходим в тепло и воду, а финал оставляем для разговоров, вина по желанию и подарков.",
    schedule: [
      {
        time: "17:00",
        title: "Сбор гостей",
        text: "Чай, знакомство, полотенца и мягкое переключение из городского темпа.",
      },
      {
        time: "17:20",
        title: "Стретчинг",
        text: "Лёгкое движение, дыхание и расслабление всего тела.",
      },
      {
        time: "18:05",
        title: "Карты и шейк",
        text: "Дегустация Ketology, карты и разговоры в камерном кругу.",
      },
      {
        time: "18:35",
        title: "Сауна и бассейн",
        text: "Приватная сауна 50 минут, вода, тепло и восстановление.",
      },
      {
        time: "19:35",
        title: "Вино, подарки и финал",
        text: "Свободное общение, подарочные мешочки и спокойное завершение.",
      },
      {
        time: "20:00",
        title: "Завершение",
        text: "Уходим легче, теплее и с ощущением маленького отпуска.",
      },
    ],
  },
  about: {
    photoAlt: "Плейсхолдер фото Наташи, организатора Wellness Evening Amsterdam",
    caption: "Фото Наташи",
    eyebrow: "О Наташе",
    title:
      "Наташа собирает вечер так, чтобы в нём было спокойно с первой минуты.",
    copy: "В фокусе не идеальная растяжка, а ощущение заботы: понятные инструкции, мягкий темп, личный контакт и пространство, где можно прийти без подготовки.",
    facts: ["Камерная группа", "Только 10 мест", "Личное подтверждение брони"],
  },
  gallery: {
    ariaLabel: "Галерея атмосферы",
    imageAlt: "Тёплая атмосфера после сауны и бассейна",
    eyebrow: "После вечера",
    title: "Уйти с ощущением маленького отпуска.",
    copy: "Немного тепла, воды, движения, разговоров и красивых деталей, которые остаются с тобой ещё по дороге домой.",
  },
  pastEvents: {
    eyebrow: "Уже было",
    title: "Прошлые встречи: живые, маленькие и очень тёплые.",
    items: [
      {
        title: "Амстердам",
        text: "Встреча в парке",
        alt: "Плейсхолдер фото прошлой встречи в парке в Амстердаме",
      },
      {
        title: "Барселона",
        text: "Встреча в студии",
        alt: "Плейсхолдер фото прошлой встречи в студии в Барселоне",
      },
      {
        title: "Скоро",
        text: "Фото или логотип",
        alt: "Плейсхолдер для третьего фото или логотипа",
      },
    ],
  },
  price: {
    eyebrow: "Стоимость",
    title: "€65 за вечер, всё включено.",
    copy: "Оплата при бронировании. После заявки Наташа напишет лично и пришлёт детали для перевода через Tikkie или Revolut.",
    details: [
      "~3 часа программы",
      "Приватный формат, только 10 мест",
      "Стретчинг, сауна, бассейн, карты и подарки",
      "Место бронируется предоплатой",
    ],
    spotsLabel: "Осталось мест",
    spotsCopy:
      "Камерный формат: максимум 10 гостей. Место закрепляется после оплаты.",
    cta: "Забронировать",
  },
  reserve: {
    eyebrow: "Бронирование",
    title: "Всего 10 мест. Пространству нужно оставаться просторным.",
    copy: "Если 27 июня звучит как вечер, который нужен телу и голове, оставь заявку. Точный адрес студии в Амстердаме придёт после подтверждения брони.",
    assurances: [
      "Всего 10 мест, чтобы вечер оставался личным",
      "Опыт йоги или стретчинга не нужен",
      "Коврики, полотенца и пропсы предоставляет студия",
      "Место фиксируется после оплаты через Tikkie или Revolut",
    ],
    panelAriaLabel: "Панель бронирования",
    panelDate: "27 июня",
    panelMetaActivities: "Стретчинг / сауна / бассейн",
    panelMetaLocation: "Амстердам",
    panelMetaPrice: "€65 всё включено",
    cta: "Оставить заявку",
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Всё просто: приходишь, выдыхаешь, остальное уже собрано.",
    items: [
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
    ],
  },
  footer: {
    meta: "Амстердам / 27.06.2026 / 17:00 / 10 мест",
  },
  mobileCta: "Забронировать",
  countdown: {
    ariaLabel: "Обратный отсчёт до wellness-вечера",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
  },
};

const en: Dictionary = {
  nav: {
    ariaLabel: "Main navigation",
    links: {
      experience: "What's inside",
      program: "Program",
      price: "Price",
      reserve: "Reserve",
    },
  },
  langSwitch: {
    label: "Change language",
  },
  hero: {
    eyebrow: "Amsterdam / June 27 / 10 spots",
    title: "Wellness Evening Amsterdam",
    lead: "An intimate evening for women: stretching, a sauna with a pool, cards, gifts and warm company in Amsterdam.",
    detailsAriaLabel: "Event details",
    date: "June 27, 2026",
    time: "17:00-20:00",
    location: "Amsterdam",
    primaryCta: "Reserve your spot",
    ghostCta: "See the program",
    imageAlt: "Intimate wellness evening in Amsterdam with a sauna and pool",
    sideTop: "Private ritual",
    sideNumber: "10",
    sideText: "spots in an intimate group, so the evening stays personal.",
    sideHours: "3 hours",
    sidePrice: "€65",
  },
  ribbon: {
    ariaLabel: "Event summary",
    items: ["Stretching", "Private sauna", "Pool", "Cards & gifts"],
  },
  intro: {
    eyebrow: "For those who want to exhale",
    title: "Not a workout, not a party. A gentle evening for yourself.",
    copy: "We start with gentle stretching, then move into the sauna and pool, try a wellness shake, pull out the cards and close the evening with little gifts. Everything calm, beautiful and without any feeling that you need to rush.",
  },
  poster: {
    eyebrow: "Atmosphere",
    title: "Soft light, warm air, calm water and the city just outside the door.",
    copy: "It's an evening after which the body feels lighter, the mind quieter, and your calendar finally holds something restorative.",
  },
  experience: {
    eyebrow: "What's included",
    title: "Everything is built around gentle recovery.",
    highlights: [
      {
        title: "Stretching",
        text: "Gentle movement and breathing to release the tension of the week. No experience needed.",
      },
      {
        title: "Sauna + pool",
        text: "A private 50-minute slot just for our group, unhurried and without strangers.",
      },
      {
        title: "Wellness shake",
        text: "A Ketology tasting: protein, MCT and a light peach flavour.",
      },
      {
        title: "Cards",
        text: "A little magic, honest conversations and a reason to gently look inward.",
      },
      {
        title: "Gift bag",
        text: "Everyone leaves with a small, pleasant surprise after the evening.",
      },
      {
        title: "Wine if you like",
        text: "A glass in good company by the pool for those who feel like it.",
      },
    ],
  },
  program: {
    eyebrow: "Program",
    title: "Three hours that move at the pace of a deep breath.",
    copy: "We start at 17:00. First we gently warm up the body, then move into warmth and water, and save the finale for conversation, wine if you like and gifts.",
    schedule: [
      {
        time: "17:00",
        title: "Arrival",
        text: "Tea, introductions, towels and a soft shift out of the city pace.",
      },
      {
        time: "17:20",
        title: "Stretching",
        text: "Light movement, breathing and full-body relaxation.",
      },
      {
        time: "18:05",
        title: "Cards & shake",
        text: "A Ketology tasting, cards and conversation in an intimate circle.",
      },
      {
        time: "18:35",
        title: "Sauna & pool",
        text: "A private 50-minute sauna, water, warmth and recovery.",
      },
      {
        time: "19:35",
        title: "Wine, gifts & finale",
        text: "Easy conversation, gift bags and a calm wrap-up.",
      },
      {
        time: "20:00",
        title: "Closing",
        text: "We leave lighter, warmer and with the feeling of a little vacation.",
      },
    ],
  },
  about: {
    photoAlt: "Placeholder photo of Natasha, host of Wellness Evening Amsterdam",
    caption: "Photo of Natasha",
    eyebrow: "About Natasha",
    title: "Natasha shapes the evening so it feels calm from the very first minute.",
    copy: "The focus isn't a perfect stretch but a feeling of care: clear guidance, a gentle pace, personal contact and a space you can come to without any preparation.",
    facts: ["Intimate group", "Only 10 spots", "Personal booking confirmation"],
  },
  gallery: {
    ariaLabel: "Atmosphere gallery",
    imageAlt: "Warm atmosphere after the sauna and pool",
    eyebrow: "After the evening",
    title: "Leave feeling like you had a little vacation.",
    copy: "A little warmth, water, movement, conversation and beautiful details that stay with you all the way home.",
  },
  pastEvents: {
    eyebrow: "Already happened",
    title: "Past gatherings: alive, small and very warm.",
    items: [
      {
        title: "Amsterdam",
        text: "Gathering in the park",
        alt: "Placeholder photo of a past gathering in a park in Amsterdam",
      },
      {
        title: "Barcelona",
        text: "Gathering in the studio",
        alt: "Placeholder photo of a past gathering in a studio in Barcelona",
      },
      {
        title: "Soon",
        text: "Photo or logo",
        alt: "Placeholder for a third photo or logo",
      },
    ],
  },
  price: {
    eyebrow: "Price",
    title: "€65 for the evening, all included.",
    copy: "Payment on booking. After your request Natasha will message you personally and send the details for a transfer via Tikkie or Revolut.",
    details: [
      "~3 hours of program",
      "Private format, only 10 spots",
      "Stretching, sauna, pool, cards and gifts",
      "Your spot is held with a prepayment",
    ],
    spotsLabel: "Spots left",
    spotsCopy:
      "Intimate format: 10 guests maximum. Your spot is held once payment is made.",
    cta: "Reserve",
  },
  reserve: {
    eyebrow: "Booking",
    title: "Only 10 spots. The space needs to stay spacious.",
    copy: "If June 27 sounds like an evening your body and mind need, leave a request. The exact studio address in Amsterdam arrives after your booking is confirmed.",
    assurances: [
      "Only 10 spots, so the evening stays personal",
      "No yoga or stretching experience needed",
      "Mats, towels and props are provided by the studio",
      "Your spot is confirmed after payment via Tikkie or Revolut",
    ],
    panelAriaLabel: "Booking panel",
    panelDate: "June 27",
    panelMetaActivities: "Stretching / sauna / pool",
    panelMetaLocation: "Amsterdam",
    panelMetaPrice: "€65 all included",
    cta: "Send a request",
  },
  faq: {
    eyebrow: "Questions",
    title: "It's simple: you arrive, you exhale, the rest is already taken care of.",
    items: [
      {
        question: "Do I need yoga experience?",
        answer:
          "Not at all. This is light evening stretching that suits absolutely everyone.",
      },
      {
        question: "What should I bring?",
        answer:
          "A swimsuit for the pool and sauna, comfortable clothes for stretching and any personal bits you need after the water.",
      },
      {
        question: "How does payment work?",
        answer:
          "After your request Natasha will message you personally. Payment via Tikkie or Revolut, and your spot is held once the transfer is made.",
      },
      {
        question: "Where is Stretch & Fold?",
        answer:
          "The studio is in Amsterdam. The exact address arrives after booking.",
      },
    ],
  },
  footer: {
    meta: "Amsterdam / 27.06.2026 / 17:00 / 10 spots",
  },
  mobileCta: "Reserve",
  countdown: {
    ariaLabel: "Countdown to the wellness evening",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
  },
};

export const translations: Record<Locale, Dictionary> = { en, ru };
