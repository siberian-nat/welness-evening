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
    eyebrow: { lead: string; accent: string };
    title: string;
    copy: string;
  };
  poster: {
    eyebrow: string;
    images: { alt: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    highlights: { title: string; text: string }[];
  };
  program: {
    eyebrow: string;
    title: string;
    schedule: { time: string; title: string; text: string }[];
  };
  about: {
    eyebrow: string;
    slides: { text: string; image: string; alt: string }[];
    controls: { prev: string; next: string };
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
    videoLabel: string;
    items: {
      title: string;
      text: (string | { label: string; href: string })[];
      alt: string;
    }[];
  };
  contacts: {
    ariaLabel: string;
    telegram: string;
    whatsapp: string;
    instagram: string;
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
    items: {
      question: string;
      answer: string;
      links?: { label: string; href: string }[];
    }[];
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
    eyebrow: "Амстердам / 11 июля / мест немного",
    title: "Wellness Evening Amsterdam",
    lead: "Камерный вечер для девушек: стретчинг, сауна с бассейном, карточная игра We are Not Really Strangers, подарки и тёплое общение.",
    detailsAriaLabel: "Детали события",
    date: "11 июля 2026, суббота",
    time: "17:00-20:00",
    location: "Stretch & Fold studio Amsterdam",
    primaryCta: "Забронировать место",
    ghostCta: "Смотреть программу",
    imageAlt: "Камерный wellness-вечер в Амстердаме с сауной и бассейном",
    sideTop: "Private ritual",
    sideNumber: "3",
    sideText: "часа в камерном кругу. Количество мест ограничено, чтобы вечер оставался личным.",
    sideHours: "Стретчинг · сауна",
    sidePrice: "€65",
  },
  ribbon: {
    ariaLabel: "Описание события",
    items: ["Стретчинг", "Сауна и бассейн", "Коммьюнити", "Подарки"],
  },
  intro: {
    eyebrow: { lead: "Вечер, чтобы", accent: "выдохнуть" },
    title:
      "Не тренировка и не вечеринка. Мягкий вечер для себя — и, может, подруги.",
    copy: "Мы начнём с лёгкого стретчинга, потом познакомимся через игру в карты We are Not Really Strangers, попробуем велнес-шейк и коллаген, завершим вечер тёплой сауной, бассейном и итальянским вином с закусками по желанию. Всё спокойно, красиво и без ощущения, что нужно куда-то успевать. Уходишь как будто побывала в мини-отпуске.",
  },
  poster: {
    eyebrow: "Атмосфера",
    images: [
      { alt: "Девушка в полотенце на балконе с видом на город" },
      { alt: "Сауна с панорамным окном на закате" },
      { alt: "Студия для стретчинга с ковриками и мягким светом" },
    ],
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
        title: "Велнес-шейк + коллаген",
        text: "Дегустация Ketology и коллагена от Siberian Wellness — попробуем и поговорим, зачем это телу 🍑",
      },
      {
        title: "Карты We are Not Really Strangers",
        text: "Душевные разговоры и повод мягко заглянуть внутрь себя и узнать новых людей.",
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
    title: "Как пройдёт вечер",
    schedule: [
      {
        time: "17:00",
        title: "Сбор гостей",
        text: "Попробуем протеиновый бленд Ketology и коллаген, который я пью сама. Приземляемся и переключаемся из городского темпа.",
      },
      {
        time: "17:30",
        title: "Стретчинг",
        text: "Лёгкое движение, дыхание и расслабление всего тела.",
      },
      {
        time: "18:30",
        title: "Карты We are Not Really Strangers",
        text: "Познакомимся друг с другом и плавно настроимся на спа и разговоры у бассейна.",
      },
      {
        time: "19:00",
        title: "Сауна и бассейн",
        text: "Приватная сауна 50 минут, вода, тепло и восстановление. Вино и общение.",
      },
      {
        time: "20:00",
        title: "Завершение",
        text: "Уходим с ощущением маленького отпуска.",
      },
    ],
  },
  about: {
    eyebrow: "Познакомимся",
    slides: [
      {
        text: "Привет, я Наташа 🤍 Wellness-амбассадор · Siberian Wellness. С детства танцую латину — движение для меня буквально жизнь. Урал, Питер, Москва, Роттердам, Амстердам — в каждом городе всегда включала этот self-care ритуал: йога, пилатес, растяжка, танцы. Люблю то ощущение в теле после практики — когда всё на месте и можно просто дышать. Вижу: как только подключаешься к себе через тело, тревожность уходит, дышать легче, телу приятно. В этот вечер хочу подарить тебе именно это ощущение. Верю, что красота идёт изнутри наружу — когда всё хорошо с ЖКТ, нервной системой и иммунитетом, кожа, волосы и энергия скажут спасибо сами.",
        image: "/images/wellness-natasha-1.jpg",
        alt: "Наташа у бассейна на крыше с видом на город",
      },
      {
        text: "Ещё я фанат интерьерного дизайна — брала курсы и слежу за этим постоянно. Для меня важно, как выглядит и ощущается пространство: свет, материалы, детали. Это тоже часть велнеса — среда влияет на настроение и состояние не меньше, чем практика. Поэтому выбрала одно из самых красивых мест Амстердама.",
        image: "/images/wellness-natasha-2.jpg",
        alt: "Наташа на крыше с видом на воду и марину",
      },
      {
        text: "Мечтаю создать sisterhood — женский круг, где движение, нутрициология и забота о себе живут рядом. Этот вечер — первый шаг. А ещё хочу строить кофейную и велнес-карту Амстердама вместе, ужинать в новых местах и создавать что-то классное. Если захочешь разобраться в нутритивной поддержке для себя — поговорим об этом тоже: расскажу, какие саплименты помогают восполнить дефициты и как распознать сигналы организма 🤍",
        image: "/images/wellness-natasha-3.jpg",
        alt: "Наташа на коврике для стретчинга с видом на город",
      },
    ],
    controls: { prev: "Предыдущая карточка", next: "Следующая карточка" },
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
    videoLabel: "Смотреть видео",
    items: [
      {
        title: "Амстердам 🇳🇱",
        text: [
          "Протеиновые бленды после йоги на ",
          {
            label: "HUMA-пикник",
            href: "https://www.instagram.com/explain.in.huma?igsh=MTNhdG82d2F0MHhnZw==",
          },
          " в Вонделпарке",
        ],
        alt: "Протеиновые бленды после йоги на пикнике в Вонделпарке в Амстердаме",
      },
      {
        title: "Барселона 🇪🇸",
        text: [
          "Утренняя йога в уютной студии ",
          {
            label: "Centro Sarana",
            href: "https://www.instagram.com/centrosarana?igsh=MXNvNzNyZTJsNmY5Mg==",
          },
          " 💛",
        ],
        alt: "Группа после утренней йоги в студии Centro Sarana в Барселоне",
      },
      {
        title: "Амстердам 🇳🇱",
        text: ["Стретчинг, спа и уютные разговоры в Stretch&Fold Studio"],
        alt: "Зал студии Stretch & Fold с ковриками и мягким светом",
      },
    ],
  },
  contacts: {
    ariaLabel: "Контакты Наташи",
    telegram: "Написать в Telegram",
    whatsapp: "Написать в WhatsApp",
    instagram: "Instagram",
  },
  price: {
    eyebrow: "Стоимость",
    title: "€65 за вечер, всё включено.",
    copy: "Оплата при бронировании. После заявки Наташа напишет лично и пришлёт детали для перевода через Tikkie или Revolut.",
    details: [
      "~3 часа программы",
      "Приватный формат, количество мест ограничено",
      "Стретчинг, сауна, бассейн, карты и подарки",
      "Место бронируется предоплатой",
    ],
    spotsLabel: "Осталось мест",
    spotsCopy:
      "Камерный формат: число гостей ограничено. Место закрепляется после оплаты.",
    cta: "Забронировать",
  },
  reserve: {
    eyebrow: "Бронирование",
    title: "Количество мест ограничено.",
    copy: "Если 11 июля звучит как вечер, который нужен телу и голове, оставь заявку.",
    assurances: [
      "Места ограниченны, чтобы вечер оставался личным",
      "Опыт йоги или стретчинга не нужен",
      "Коврики, полотенца и пропсы предоставляет студия",
      "Место фиксируется после оплаты через Tikkie или Revolut",
    ],
    panelAriaLabel: "Панель бронирования",
    panelDate: "11 июля",
    panelMetaActivities: "Стретчинг / сауна / бассейн",
    panelMetaLocation: "Stretch & Fold, Amsterdam",
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
          "Любимые слиперы, купальник, удобную одежду для стретчинга и личные мелочи, которые нужны после воды.",
      },
      {
        question: "Как происходит оплата?",
        answer:
          "После заявки Наташа напишет лично. Оплата через Tikkie или Revolut, место закрепляется после перевода.",
      },
      {
        question: "Где находится Stretch & Fold?",
        answer:
          "Студия Stretch & Fold находится в Амстердаме — точку на карте и атмосферу студии можно посмотреть по ссылкам ниже.",
        links: [
          {
            label: "Открыть на карте",
            href: "https://maps.app.goo.gl/ZUDP5bPAwPhTEebp8?g_st=ic",
          },
          {
            label: "Студия в Instagram",
            href: "https://www.instagram.com/stretchandfoldstudio?igsh=MWJuaWQ4cnMxdmhteQ==",
          },
        ],
      },
    ],
  },
  footer: {
    meta: "Амстердам / 11.07.2026 / 17:00 / мест немного",
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
    eyebrow: "Amsterdam / July 11 / limited spots",
    title: "Wellness Evening Amsterdam",
    lead: "An intimate evening for women: stretching, a sauna with a pool, the card game We are Not Really Strangers, gifts and warm company.",
    detailsAriaLabel: "Event details",
    date: "July 11, 2026, Saturday",
    time: "17:00-20:00",
    location: "Stretch & Fold studio Amsterdam",
    primaryCta: "Reserve your spot",
    ghostCta: "See the program",
    imageAlt: "Intimate wellness evening in Amsterdam with a sauna and pool",
    sideTop: "Private ritual",
    sideNumber: "3",
    sideText: "hours in an intimate circle. Spots are limited, so the evening stays personal.",
    sideHours: "Stretch · sauna",
    sidePrice: "€65",
  },
  ribbon: {
    ariaLabel: "Event summary",
    items: ["Stretching", "Sauna & pool", "Community", "Gifts"],
  },
  intro: {
    eyebrow: { lead: "An evening to", accent: "exhale" },
    title: "Not a workout, not a party. A gentle evening for yourself — and maybe a friend.",
    copy: "We start with gentle stretching, then get to know each other through the card game We are Not Really Strangers, try a wellness shake and collagen, and close the evening with a warm sauna, the pool and Italian wine with snacks if you like. Everything calm, beautiful and without any feeling that you need to rush. You leave as if you'd been on a mini-vacation.",
  },
  poster: {
    eyebrow: "Atmosphere",
    images: [
      { alt: "Woman in a towel on a balcony with a city view" },
      { alt: "Sauna with a panoramic window at sunset" },
      { alt: "Stretching studio with mats and soft light" },
    ],
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
        title: "Wellness shake + collagen",
        text: "A tasting of Ketology and collagen by Siberian Wellness — we'll try it and talk about why the body needs it 🍑",
      },
      {
        title: "We are Not Really Strangers cards",
        text: "Heartfelt conversations and a reason to gently look inward and get to know new people.",
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
    title: "How the evening flows",
    schedule: [
      {
        time: "17:00",
        title: "Arrival",
        text: "We'll try the Ketology protein blend and the collagen I drink myself. We land and shift out of the city pace.",
      },
      {
        time: "17:30",
        title: "Stretching",
        text: "Light movement, breathing and full-body relaxation.",
      },
      {
        time: "18:30",
        title: "We are Not Really Strangers cards",
        text: "We get to know each other and gently tune into the spa and poolside conversations.",
      },
      {
        time: "19:00",
        title: "Sauna & pool",
        text: "A private 50-minute sauna, water, warmth and recovery. Wine and conversation.",
      },
      {
        time: "20:00",
        title: "Closing",
        text: "We leave with the feeling of a little vacation.",
      },
    ],
  },
  about: {
    eyebrow: "Let's get to know each other",
    slides: [
      {
        text: "Hi, I'm Natasha 🤍 Wellness ambassador · Siberian Wellness. I've danced Latin since childhood — movement is literally life for me. The Urals, St. Petersburg, Moscow, Rotterdam, Amsterdam — in every city I kept up this self-care ritual: yoga, pilates, stretching, dancing. I love that feeling in the body after a practice, when everything is in place and you can just breathe. I see how, the moment you connect with yourself through the body, anxiety fades, breathing gets easier, the body feels good. On this evening I want to give you exactly that feeling. I believe beauty comes from the inside out — when your gut, nervous system and immunity are well, your skin, hair and energy say thank you on their own.",
        image: "/images/wellness-natasha-1.jpg",
        alt: "Natasha by the rooftop pool with a city view",
      },
      {
        text: "I'm also a huge fan of interior design — I've taken courses and follow it all the time. How a space looks and feels matters to me: light, materials, details. That's part of wellness too — your environment shapes your mood and state no less than the practice itself. That's why I chose one of the most beautiful places in Amsterdam.",
        image: "/images/wellness-natasha-2.jpg",
        alt: "Natasha on a rooftop overlooking the water and marina",
      },
      {
        text: "I dream of creating a sisterhood — a women's circle where movement, nutrition and self-care live side by side. This evening is the first step. I also want to build a coffee and wellness map of Amsterdam together, have dinner in new places and create something wonderful. And if you'd like to figure out nutritional support for yourself, we'll talk about that too — I'll share which supplements help replenish deficiencies and how to read your body's signals 🤍",
        image: "/images/wellness-natasha-3.jpg",
        alt: "Natasha on a stretching mat with a city view",
      },
    ],
    controls: { prev: "Previous card", next: "Next card" },
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
    videoLabel: "Watch video",
    items: [
      {
        title: "Amsterdam 🇳🇱",
        text: [
          "Protein blends after yoga at the ",
          {
            label: "HUMA picnic",
            href: "https://www.instagram.com/explain.in.huma?igsh=MTNhdG82d2F0MHhnZw==",
          },
          " in Vondelpark",
        ],
        alt: "Protein blends after yoga at a picnic in Vondelpark, Amsterdam",
      },
      {
        title: "Barcelona 🇪🇸",
        text: [
          "Morning yoga at the cozy ",
          {
            label: "Centro Sarana",
            href: "https://www.instagram.com/centrosarana?igsh=MXNvNzNyZTJsNmY5Mg==",
          },
          " studio 💛",
        ],
        alt: "Group after morning yoga at Centro Sarana studio in Barcelona",
      },
      {
        title: "Amsterdam 🇳🇱",
        text: ["Stretching, spa and cozy conversations at Stretch&Fold Studio"],
        alt: "Stretch & Fold studio room with mats and soft light",
      },
    ],
  },
  contacts: {
    ariaLabel: "Natasha's contacts",
    telegram: "Message on Telegram",
    whatsapp: "Message on WhatsApp",
    instagram: "Instagram",
  },
  price: {
    eyebrow: "Price",
    title: "€65 for the evening, all included.",
    copy: "Payment on booking. After your request Natasha will message you personally and send the details for a transfer via Tikkie or Revolut.",
    details: [
      "~3 hours of program",
      "Private format, limited number of spots",
      "Stretching, sauna, pool, cards and gifts",
      "Your spot is held with a prepayment",
    ],
    spotsLabel: "Spots left",
    spotsCopy:
      "Intimate format: the number of guests is limited. Your spot is held once payment is made.",
    cta: "Reserve",
  },
  reserve: {
    eyebrow: "Booking",
    title: "The number of spots is limited.",
    copy: "If July 11 sounds like an evening your body and mind need, leave a request.",
    assurances: [
      "Spots are limited, so the evening stays personal",
      "No yoga or stretching experience needed",
      "Mats, towels and props are provided by the studio",
      "Your spot is confirmed after payment via Tikkie or Revolut",
    ],
    panelAriaLabel: "Booking panel",
    panelDate: "July 11",
    panelMetaActivities: "Stretching / sauna / pool",
    panelMetaLocation: "Stretch & Fold, Amsterdam",
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
          "Your favourite slippers, a swimsuit, comfortable clothes for stretching and any personal bits you need after the water.",
      },
      {
        question: "How does payment work?",
        answer:
          "After your request Natasha will message you personally. Payment via Tikkie or Revolut, and your spot is held once the transfer is made.",
      },
      {
        question: "Where is Stretch & Fold?",
        answer:
          "Stretch & Fold studio is in Amsterdam — you can see the exact spot on the map and the studio's vibe via the links below.",
        links: [
          {
            label: "Open in Maps",
            href: "https://maps.app.goo.gl/ZUDP5bPAwPhTEebp8?g_st=ic",
          },
          {
            label: "Studio on Instagram",
            href: "https://www.instagram.com/stretchandfoldstudio?igsh=MWJuaWQ4cnMxdmhteQ==",
          },
        ],
      },
    ],
  },
  footer: {
    meta: "Amsterdam / 11.07.2026 / 17:00 / limited spots",
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
