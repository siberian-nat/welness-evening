import { Landing } from "./components/Landing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wellness-evening.vercel.app";
const registrationUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_URL ||
  "https://forms.gle/replace-with-your-google-form";

export default function Home() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Wellness Evening Amsterdam",
    startDate: "2026-07-11T17:00:00+02:00",
    endDate: "2026-07-11T20:00:00+02:00",
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
      `${siteUrl}/images/wellness-hero.png`,
      `${siteUrl}/images/wellness-still-life.png`,
      `${siteUrl}/images/wellness-afterglow.png`,
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
