// Page titles and descriptions. Used at build time (prerender) and in the browser.
export const SITE_URL = "https://helenanicklin.com";

export type PageMeta = { title: string; description: string };

export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Helena Nicklin | Award-Winning Drinks Writer, Presenter & Event Host",
    description:
      "Helena Nicklin is an award-winning drinks writer, expert presenter and broadcaster, highly experienced in hosting live events, running tastings, podcast interviews, TV and radio.",
  },
  "/about": {
    title: "About Helena Nicklin | Drinks Writer, Broadcaster & Host",
    description:
      "Award-winning drinks writer and broadcaster, co-presenter of The Three Drinkers and named one of the Top 100 Most Influential People in Drinks five years running.",
  },
  "/work-with-helena": {
    title: "Corporate Wine Tastings, Masterclasses & Sensory Salons | Helena Nicklin",
    description:
      "Book Helena Nicklin to host corporate wine and spirits tastings, private events, drinks masterclasses and sensory salons, at your venue or on the Isle of Wight.",
  },
  "/upcoming-events": {
    title: "Upcoming Tasting Events | Helena Nicklin",
    description:
      "Ticketed wine and food evenings, drinks masterclasses and Bottles & Bites supper clubs hosted by Helena Nicklin.",
  },
  "/brand-partnerships": {
    title: "Brand Partnerships | Helena Nicklin",
    description:
      "Work with award-winning drinks writer and presenter Helena Nicklin on brand partnerships, content, ambassador work and launches for wine, spirits and no-lo drinks brands.",
  },
  "/podcast": {
    title: "The HelenaSips Podcast | Helena Nicklin",
    description:
      "Helena Nicklin's podcast of conversations about drinks, the senses and the art of living. Available on Substack, Spotify and Apple Podcasts.",
  },
  "/press": {
    title: "In The Press | Helena Nicklin",
    description:
      "Helena Nicklin's writing, TV, radio and press appearances as a drinks writer and broadcaster.",
  },
  "/magazine": {
    title: "Magazine | Helena Nicklin",
    description:
      "Articles by drinks writer Helena Nicklin on wine, spirits, no-lo drinks and the stories behind them.",
  },
  "/contact": {
    title: "Contact Helena Nicklin | Bookings & Enquiries",
    description:
      "Contact Helena Nicklin to book a tasting, event, brand partnership or writing commission.",
  },
  "/media-kit": {
    title: "Media Kit | Helena Nicklin",
    description: "Helena Nicklin's media kit and rates for partners.",
  },
  "/privacy": {
    title: "Privacy Policy | Helena Nicklin",
    description: "Privacy policy for helenanicklin.com.",
  },
  "/terms": {
    title: "Terms | Helena Nicklin",
    description: "Terms of use for helenanicklin.com.",
  },
};

// Pages listed in the sitemap (media kit is password protected, legal pages add nothing)
export const SITEMAP_ROUTES = [
  "/",
  "/about",
  "/work-with-helena",
  "/upcoming-events",
  "/brand-partnerships",
  "/podcast",
  "/press",
  "/magazine",
  "/contact",
];

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Helena Nicklin",
  url: SITE_URL,
  jobTitle: "Drinks writer, presenter and broadcaster",
  description: PAGE_META["/"].description,
  address: { "@type": "PostalAddress", addressRegion: "Isle of Wight", addressCountry: "GB" },
  knowsAbout: ["Wine", "Spirits", "No and low alcohol drinks", "Wine tasting", "Event hosting", "Drinks writing"],
  memberOf: { "@type": "Organization", name: "Les Dames d'Escoffier" },
  award: [
    "Top 100 Most Influential People in Drinks 2022, 2023, 2024, 2025 and 2026",
    "Best cultural contribution to the spirits industry 2025 (The Three Drinkers in Cognac)",
    "Best contribution to wine & spirits tourism 2022 (The Three Drinkers in Ireland)",
    "Best cultural contribution to the spirits industry 2022 (The Three Drinkers in Ireland)",
  ],
  sameAs: [
    "https://www.helenasips.com",
    "https://substack.com/@helenasips",
    "https://instagram.com/helenasips",
  ],
};

export function metaFor(path: string): PageMeta {
  return PAGE_META[path] ?? PAGE_META["/"];
}
