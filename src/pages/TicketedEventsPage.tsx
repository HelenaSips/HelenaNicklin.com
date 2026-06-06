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
import toroLocoEvent from "@/assets/toro-loco-event.jpg";
import fruitsOfSeaEvent from "@/assets/fruits-of-sea-event.jpg";
import supperClub from "@/assets/supper-club.jpg";
import sensorySalon from "@/assets/sensory-salon.jpg";
import detailSetting from "@/assets/detail-setting.jpg";
import symPort from "@/assets/sym-port.jpg";
import threeDrinkersCognac from "@/assets/three-drinkers-cognac.jpg";
import brandEvent from "@/assets/brand-event.jpg";
import postChampagne from "@/assets/post-champagne.jpg";
import postGoldenMilk from "@/assets/post-golden-milk.jpg";
import rueda from "@/assets/rueda.jpg";

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
    title: "Spanish Bottles & Bites with Toro Loco!",
    date: "Wednesday, 17 June 2026 · 7:00 PM",
    venue: "Cowes, Isle of Wight (Venue TBD)",
    price: "£25",
    description:
      "SAVE THE DATE for an evening with Helena Nicklin and Alex Forsyth for a Spanish Bottles & Bites extravaganza featuring the wines of Toro Loco and perfectly paired food!",
    image: toroLocoEvent,
    imageAlt: "Spanish Bottles & Bites with Toro Loco",
    status: "available",
    bookingLink: "https://checkout.revolut.com/pay/447ab876-7405-4faf-9ba2-ee3985e68475",
  },
  {
    title: "Lymington Seafood Festival: Various Drinks Masterclasses",
    date: "Saturday 11 & Sunday 12 July 2025",
    venue: "Bath Road Park, Lymington, SO41 3SE",
    price: "From £12",
    description:
      "Join me and other drinks experts for a series of drinks masterclasses throughout the weekend, featuring beer, spirits and wine.",
    image: heroLifestyle,
    imageAlt: "Lymington Seafood Festival - Drinks Masterclasses",
    bookingLink: "https://www.lymingtonseafoodfestival.co.uk/",
    status: "available",
  },
];

const pastEvents: EventItem[] = [
  {
    title: "Wine & Chocolate Pairing Masterclass",
    date: "24 May 2026",
    venue: "Commodores House, Cowes, Isle of Wight",
    description:
      "Enjoy a masterclass in pairing 5 styles of premium chocolate to wine with Helena & The Chocolate Detective herself, Chantal Coady OBE.",
    image: iowWineFestival,
    imageAlt: "Wine & Chocolate Pairing Masterclass - Cowes Fringe",
    status: "available",
  },
  {
    title: "Chocolate & Spirits Pairing",
    date: "23 May 2026",
    venue: "Commodores House, Cowes, Isle of Wight",
    description:
      "Spirits, liqueurs, port, stout? Discover which drinks pair perfectly with chocolate. A masterclass with Helena & The Chocolate Detective herself, Chantal Coady OBE.",
    image: chocSpirits,
    imageAlt: "Chocolate & Spirits Pairing - Cowes Fringe",
    status: "available",
  },
  {
    title: "Fruits of the Sea Wine & Food Story",
    date: "22 May 2026",
    venue: "RT Café Grill, Ryde, Isle of Wight",
    description:
      "Join Chef Robert Thompson & HelenaSips for a 'fruits of the sea' inspired fine wine and food extravaganza, featuring 7 courses and 5 wines.",
    image: fruitsOfSeaEvent,
    imageAlt: "Chef Robert Thompson and Helena Nicklin - Fruits of the Sea Wine & Food Story",
    status: "available",
    imagePosition: "center 20%",
  },
  {
    title: "An Italian Wine & Food Story",
    date: "28 February 2026",
    venue: "RT Café Grill, Ryde, Isle of Wight",
    description:
      "Join Chef Robert Thompson & HelenaSips for an Italian, fine wine and food extravaganza, featuring 7 courses and 5 wines.",
    image: italianWineEvent,
    imageAlt: "Helena Nicklin and Chef Robert Thompson - Italian Wine & Food Story",
    status: "available",
  },
  {
    title: "Sensory Salon: Wine, Words & Chocolate",
    date: "8 October 2025",
    venue: "Northwood House, Cowes",
    description:
      "Enjoy the ultimate, multi-sensory evening featuring wine with Helena, words by Joanne Harris and chocolate by Chantal Coady OBE with a showcase of the fragrance made to go with Joanne's new book.",
    image: sensorySalon,
    imageAlt: "Sensory Salon: Wine, Words & Chocolate - The Goring, London",
    status: "available",
  },
  {
    title: "Bottles & Bites: A Portuguese Sips Safari",
    date: "12 December 2025",
    venue: "Cowes, Isle of Wight",
    description:
      "Join Helena for a tasting tour through some key styles of Portuguese wine from dry reds and white to various style of Port! All served with paired nibbles.",
    image: symPort,
    imageAlt: "A Portuguese Sips Safari - Symington Family Estates wines",
    status: "available",
  },
  {
    title: "Bottles & Bites: English Sparkling Wine",
    date: "21 August 2025",
    venue: "Monterey Egypt Point, Cowes",
    description:
      "Join Helena for a masterclass in English sparkling wine, with 6 to taste, paired with snacks.",
    image: postChampagne,
    imageAlt: "Helena Sips Bottles & Bites: English Sparkling Wine - Monterey Egypt Point, Cowes",
    status: "available",
  },
  {
    title: "Bottles & Bites: Discover Rueda",
    date: "20 June 2025",
    venue: "Monterey Egypt Point, Cowes",
    description:
      "Enjoy a masterclass in the great Verdejo wines of the Spanish region of Rueda, served with paired nibbles.",
    image: rueda,
    imageAlt: "Bottles & Bites: Discover Rueda - Monterey Egypt Point, Cowes",
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
            <span className="inline-block w-full text-center px-6 py-3 bg-accent text-primary font-heading text-sm tracking-widest uppercase">
              Bookings Open Soon!
            </span>
          ) : (
            <a
              href={event.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase hover:bg-primary/90 transition-all"
            >
              Book Now!
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
      <section className="relative min-h-[40vh] md:min-h-[55vh] flex items-end justify-center pb-10 md:pb-14">
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
              Join me for curated wine experiences across the UK, from intimate
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
