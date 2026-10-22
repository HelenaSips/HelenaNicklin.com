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
  "/writing": {
    title: "Drinks Writer for Hire: Commissions & Expert Comment | Helena Nicklin",
    description:
      "Award-winning drinks writer Helena Nicklin writes for the Daily Mail, The Sun, BA High Life, Decanter, Club Oenologique and more. Commission features, guides and expert comment.",
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
  "/writing",
  "/contact",
];

export const PUBLICATIONS = [
  "The Daily Mail", "The Sun", "BA High Life", "Decanter", "Club Oenologique",
  "Delicious", "The Tonic", "Luxury Lifestyle Magazine", "Luxurious Magazine", "Princess Yachts Magazine",
];

export type Faq = { q: string; a: string };

export const FAQS: Record<string, Faq[]> = {
  "/work-with-helena": [
    { q: "Where does Helena host events?", a: "On the Isle of Wight, in London, anywhere on the UK mainland and abroad." },
    { q: "Can Helena host a virtual wine tasting?", a: "Yes. Virtual tastings work brilliantly for remote teams and clients in different places." },
    { q: "How many guests can a tasting be for?", a: "Private and corporate tastings suit 6 to 30 guests. Bottles & Bites supper clubs take up to 30. Planning something bigger? Get in touch." },
    { q: "Do I need to supply the wine?", a: "No. Helena can organise the wine delivery, or you can pick from a list." },
    { q: "Is it just wine?", a: "No. Helena hosts wine, spirits and no and low alcohol tastings." },
    { q: "How do I book Helena?", a: "Use the contact page or email helena@helenasips.com with your date, location and guest numbers." },
  ],
  "/brand-partnerships": [
    { q: "What kinds of brands does Helena work with?", a: "Wine, spirits and no and low alcohol brands, wine regions and lifestyle brands with a drinks story to tell." },
    { q: "Can a campaign include live events?", a: "Yes. Hosted masterclasses at festivals and roadshows, Bottles & Bites supper clubs, private tastings, corporate entertaining and celebrity and charity events." },
    { q: "What does podcast sponsorship include?", a: "Packages of 3, 5 or 10 episodes, each with a bespoke 30 second ad read by Helena, branded space in the show notes, a bespoke article on helenasips.com and a newsletter feature." },
    { q: "How do I see rates?", a: "Contact Helena for the password to her media kit." },
  ],
  "/writing": [
    { q: "What does Helena write about?", a: "Wine, spirits, no and low alcohol drinks, food and drink pairing, drinks travel and the art of living well." },
    { q: "Does Helena write for brands as well as publications?", a: "Yes. Brand copy and long-form content, plus articles on helenasips.com as part of a brand partnership." },
    { q: "Can Helena give expert comment?", a: "Yes. For print, online, TV, radio and podcasts." },
    { q: "How do I commission Helena?", a: "Email helena@helenasips.com with your brief, word count and deadline." },
  ],
};

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
