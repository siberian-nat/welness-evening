import { Landing } from "./components/Landing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wellness-evening.vercel.app";
const registrationUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_URL ||
  "https://forms.gle/Pxf25LH8xCFRkbDU7";

export default function Home() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Wellness Evening Amsterdam",
    startDate: "2026-07-18T17:00:00+02:00",
    endDate: "2026-07-18T20:00:00+02:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    maximumAttendeeCapacity: 10,
    location: {
      "@type": "Place",
      name: "Stretch & Fold studio",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
    },
    image: [
      `${siteUrl}/images/wellness-hero.jpg`,
      `${siteUrl}/images/wellness-still-life.jpg`,
      `${siteUrl}/images/wellness-afterglow.jpg`,
    ],
    description:
      "An intimate wellness evening for women in Amsterdam: stretching, a sauna with a pool, cards, gifts and gentle company.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/LimitedAvailability",
      price: "65",
      priceCurrency: "EUR",
      url: registrationUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Landing />
    </>
  );
}
