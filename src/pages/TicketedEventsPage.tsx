import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import FadeInSection from "../components/FadeInSection";
import eventsHero from "@/assets/events-hero.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import wineCloseup from "@/assets/wine-closeup.jpg";
import italianWineEvent from "@/assets/italian-wine-event.jpeg";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import iowWineFestival from "@/assets/iow-wine-festival.jpg";
import chocSpirits from "@/assets/choc-spirits.png";
import fruitsOfSeaEvent from "@/assets/fruits-of-sea-event.jpg";
import supperClub from "@/assets/supper-club.jpg";
import detailSetting from "@/assets/detail-setting.jpg";
import threeDrinkersCognac from "@/assets/three-drinkers-cognac.jpg";
import brandEvent from "@/assets/brand-event.jpg";
import postChampagne from "@/assets/post-champagne.jpg";
import postGoldenMilk from "@/assets/post-golden-milk.jpg";

// ─── DATA ────────────────────────────────────────────────────────────────────

interface EventItem {
  title: string;
  date: string;
  venue: string;
  price?: string;
  description: string;
  image: string;
  imageAlt: string;
  bookingLink?: string;
  status: "available" | "sold-out" | "coming-soon";
  imagePosition?: string;
}

const upcomingEvents: EventItem[] = [
  {
    title: "An Italian Wine & Food Story",
    date: "Saturday, 28 February 2026 · 7:30 PM",
    venue: "RT Café Grill, Ryde, Isle of Wight",
    price: "£150",
    description:
      "Join Chef Robert Thompson & HelenaSips for an Italian, fine wine and food extravaganza, featuring 7 courses and 5 wines.",
    image: italianWineEvent,
    imageAlt: "Helena Nicklin and Chef Robert Thompson - Italian Wine & Food Story",
    bookingLink: "https://www.robertthompson.co.uk/wine-evenings",
    status: "available",
  },
  {
    title: "Fruits of the Sea Wine & Food Story",
    date: "Friday, 22 May 2026 · 7:30 PM",
    venue: "RT Café Grill, Ryde, Isle of Wight",
    price: "£150",
    description:
      "Join Chef Robert Thompson & HelenaSips for a 'fruits of the sea' inspired fine wine and food extravaganza, featuring 7 courses and 5 wines.",
    image: fruitsOfSeaEvent,
    imageAlt: "Chef Robert Thompson and Helena Nicklin - Fruits of the Sea Wine & Food Story",
    bookingLink: "https://www.robertthompson.co.uk/wine-evenings",
    status: "available",
    imagePosition: "center 20%",
  },
  {
    title: "Wine & Chocolate Pairing Masterclass",
    date: "Sunday, 24 May 2026 · 2:00 PM",
    venue: "Commodores House, Cowes, Isle of Wight",
    price: "£25",
    description:
      "Enjoy a masterclass in pairing 5 styles of premium chocolate to wine with Helena & The Chocolate Detective herself, Chantal Coady OBE. Tickets on sale soon!",
    image: iowWineFestival,
    imageAlt: "Wine & Chocolate Pairing Masterclass - Cowes Fringe",
    bookingLink: "https://www.ticketsource.co.uk/cowes-fringe",
    status: "available",
  },
  {
    title: "Chocolate & Drinkies Pairing Masterclass",
    date: "Saturday, 23 May 2026 · 6:00 PM",
    venue: "Commodores House, Cowes, Isle of Wight",
    price: "£25",
    description:
      "Spirits, liqueurs, port, stout? Discover which drinks pair perfectly with chocolate. A masterclass with Helena & The Chocolate Detective herself, Chantal Coady OBE.",
    image: chocSpirits,
    imageAlt: "Chocolate & Drinkies Pairing Masterclass - Cowes Fringe",
    bookingLink: "https://www.ticketsource.co.uk/cowes-fringe",
    status: "available",
  },
];

const pastEvents: EventItem[] = [
  {
    title: "Burns Night Whisky & Wine Pairing",
    date: "25 January 2026",
    venue: "The Goring, London",
    description:
      "A Scottish celebration pairing rare whiskies with bold wines, haggis, and poetry.",
    image: supperClub,
    imageAlt: "Helena Sips Burns Night Whisky & Wine Pairing - The Goring, London",
    status: "available",
  },
  {
    title: "Sake & Sensory Salon",
    date: "12 December 2025",
    venue: "Koya Bar, Soho",
    description:
      "An exploration of sake traditions and modern Japanese brewing, paired with seasonal dishes.",
    image: detailSetting,
    imageAlt: "Helena Sips Sake & Sensory Salon - Koya Bar, Soho",
    status: "available",
  },
  {
    title: "Orange Wine Discovery",
    date: "18 November 2025",
    venue: "Rochelle Canteen, Shoreditch",
    description:
      "Skin-contact wines from Georgia, Slovenia, and beyond with seasonal autumn plates.",
    image: threeDrinkersCognac,
    imageAlt: "Helena Sips Orange Wine Discovery - Rochelle Canteen, Shoreditch",
    status: "available",
  },
  {
    title: "Harvest Supper Club",
    date: "3 October 2025",
    venue: "The Laughing Heart, Hackney",
    description:
      "Celebrating English wine harvest with a six-course tasting menu and small-batch wines.",
    image: brandEvent,
    imageAlt: "Helena Sips Harvest Supper Club - The Laughing Heart, Hackney",
    status: "available",
  },
  {
    title: "Rosé & Roses Salon",
    date: "21 August 2025",
    venue: "Petersham Nurseries, Richmond",
    description:
      "A summer evening exploring Provence, pét-nat, and the art of the aperitif.",
    image: postChampagne,
    imageAlt: "Helena Sips Rosé & Roses Salon - Petersham Nurseries, Richmond",
    status: "available",
  },
  {
    title: "Midsummer Wine Masterclass",
    date: "20 June 2025",
    venue: "Charleston Farmhouse, Sussex",
    description:
      "A Bloomsbury-inspired afternoon with natural wines, English cheese, and conversation.",
    image: postGoldenMilk,
    imageAlt: "Helena Sips Midsummer Wine Masterclass - Charleston Farmhouse, Sussex",
    status: "available",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const EventCard = ({
  event,
  isPast = false,
}: {
  event: EventItem;
  isPast?: boolean;
}) => (
  <div className="group bg-card border border-border flex flex-col h-full overflow-hidden">
    {/* Image */}
    <div className="relative overflow-hidden">
      <img
        src={event.image}
        alt={event.imageAlt}
        loading="lazy"
        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        style={event.imagePosition ? { objectPosition: event.imagePosition } : undefined}
      />
      {(event.status === "sold-out" || event.status === "coming-soon") && (
        <span className="absolute top-3 right-3 bg-primary text-primary-foreground font-heading text-xs tracking-widest uppercase px-3 py-1">
          {event.status === "sold-out" ? "Sold Out" : "Tickets On Sale Soon!"}
        </span>
      )}
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5 md:p-6">
      <h3
        className={`font-heading font-bold mb-2 ${
          isPast ? "text-xl" : "text-xl md:text-[22px]"
        }`}
      >
        {event.title}
      </h3>

      <p className={`text-foreground/60 mb-1 ${isPast ? "text-sm" : "text-base"}`}>
        {event.date}
      </p>

      <p className={`flex items-center gap-1.5 text-foreground/60 mb-3 ${isPast ? "text-sm" : "text-base"}`}>
        <MapPin size={isPast ? 14 : 16} className="text-plum shrink-0" />
        {event.venue}
      </p>

      {!isPast && event.price && (
        <p className="text-foreground font-medium text-lg mb-3">{event.price}</p>
      )}

      <p
        className={`text-foreground/70 leading-relaxed ${
          isPast ? "text-sm" : "text-base"
        }`}
      >
        {event.description}
      </p>

      {/* CTA — upcoming only */}
      {!isPast && (
        <div className="mt-auto pt-5">
          {event.status === "sold-out" ? (
            <span className="inline-block w-full text-center px-6 py-3 bg-muted text-muted-foreground font-heading text-sm tracking-widest uppercase cursor-default">
              Sold Out
            </span>
          ) : event.status === "coming-soon" ? (
            <span className="inline-block w-full text-center px-6 py-3 bg-accent text-primary font-heading text-sm tracking-widest uppercase cursor-default">
              Tickets On Sale Soon!
            </span>
          ) : (
            <a
              href={event.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase hover:bg-primary/90 transition-all"
            >
              See More &amp; Book
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

const TicketedEventsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={eventsHero}
            alt="Helena Sips curated wine events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-primary/10" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="text-primary-foreground mb-4">Upcoming Events</h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-body font-bold">
              Join me for curated wine experiences across the UK — from intimate
              tastings to festival fabulousness!
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-10">What's Coming Up</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <FadeInSection key={event.title} delay={i * 0.1}>
                <EventCard event={event} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="gold-divider" />
      </div>

      {/* Past Events */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-3">Past Events</h2>
            <p className="text-center text-foreground/50 mb-10 max-w-xl mx-auto">
              A selection of recent salons, tastings, and experiences
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, i) => (
              <FadeInSection key={event.title} delay={i * 0.08}>
                <EventCard event={event} isPast />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-primary-foreground mb-6">
              Want to Host Your Own Event?
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-[700px] mx-auto mb-10 leading-relaxed">
              I create bespoke wine experiences for brands, venues, and private
              clients. From intimate salons to large-scale events — let's design
              something memorable together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-accent text-primary font-heading text-lg tracking-wider hover:bg-accent/90 transition-all"
              >
                Enquire About Hosting
              </Link>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-heading text-lg tracking-wider hover:bg-primary-foreground/10 transition-all"
              >
                Book a Discovery Call
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default TicketedEventsPage;
