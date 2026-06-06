import { useState } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import salonInterior from "@/assets/salon-interior.jpg";
import dinnerTable from "@/assets/dinner-table.png";
import brandEvent from "@/assets/brand-event.jpg";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import privateWineMasterclass from "@/assets/private-wine-masterclass.jpeg";
import rueda1 from "@/assets/rueda_1.jpg";

const previousClients = [
  "D.O. Rueda", "Symington Family Estates", "Toro Loco Wine", "D.O. Rías Baixas",
  "Vins de Bordeaux", "Rémy Martin", "Courvoisier", "Guinness", "Jameson Whiskey",
  "Waterford Whisky", "The Dalmore", "Glenmorangie", "Celliers Les Dauphins",
  "Fenjiu Baijiu", "Akashi-Tai Sake",
];

const EventsPage = () => {
  const [eventType, setEventType] = useState("Sensory Salon");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img src={salonInterior} alt="Salon experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <FadeInSection>
            <h1 className="text-primary-foreground mb-4">Work with Helena</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Curated experiences for drinks and luxury brands, hotels, festivals and cultural venues
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Three Services */}
      {[
        {
          id: "sensory-salons",
          img: null,
          edgeImage: dinnerTable,
          title: "Private Wine & Spirits Tasting Events",
          copy: "Whether you want a wine or spirits tasting before or during your dinner or a full evening with wine games to break the ice, Helena can put together something unique just for you.",
          perfect: "Corporate events and private client gatherings for 6 - 30 people.",
          format: "Helena comes to your venue of choice. She can organise wine delivery or pick from a list.",
        },
        {
          id: "bottles-and-bites",
          img: null,
          title: "Bottles & Bites Supper Clubs",
          copy: "Wine and spirits education perfectly paired with food. Helena works with drinks brands and wine regions to offer wine and spirits masterclasses in a supper club format where she lives on the Isle of Wight, to an engaged, consumer audience of up to 30 guests.",
          perfect: "Getting liquid on lips for drinks brands and wine regions.",
          format: "Relaxed, 2 hour masterclass with a welcome drink, then 5 or 6 wines paired with three types of substantial nibbles with a Q&A at the end.",
          edgeImage: privateWineMasterclass,
          cta: true,
        },
        {
          id: "festivals-and-events",
          img: null,
          title: "Presenting at Festivals & Events",
          copy: "Helena is an experienced wine and spirits presenter, bringing energy and passion to every session and masterclass she hosts.",
          perfect: "Food and drinks festivals, drinks expos and trade fairs.",
          cta: true,
          edgeImage: rueda1,
        },
        {
          id: "brand-partnerships",
          img: null,
          title: "Brand Partnerships",
          copy: "Create a bespoke campaign with Helena taking your pick of socials, website editorial, newsletters, podcast sponsorship and even live consumer tasting events.",
          perfect: "Drinks brands and wine regions wanting to get liquid on lips across various platforms.",
          ctaLink: "/brand-partnerships",
          ctaLabel: "See Options",
        },
      ].map((service, i) => (
        <section key={service.title} id={service.id} className={`scroll-mt-24 ${i % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}>
          <div className="section-padding">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {service.img && (
                <FadeInSection className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <img src={service.img} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                </FadeInSection>
              )}
              <FadeInSection delay={0.2} className={!service.img && !service.edgeImage ? "lg:col-span-2" : !service.img ? "lg:col-span-2" : i % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="mb-6">{service.title}</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">{service.copy}</p>
                {service.perfect && (
                  <p className="text-foreground/70 mb-4"><strong className="text-foreground">Perfect for:</strong> {service.perfect}</p>
                )}
                {service.format && (
                  <p className="text-foreground/70 mb-6"><strong className="text-foreground">{service.formatLabel || "Format"}:</strong> {service.format}</p>
                )}
                {service.ctaLink && (
                  <Link to={service.ctaLink} className="inline-block px-8 py-3 bg-[#db258f] text-white font-heading text-base tracking-wider hover:bg-[#db258f]/90 transition-all">
                    {service.ctaLabel || "Find Out More"}
                  </Link>
                )}
                {!service.ctaLink && (service.id === "sensory-salons" || service.cta) && (
                  <Link to="/contact" className="inline-block px-8 py-3 bg-[#db258f] text-white font-heading text-base tracking-wider hover:bg-[#db258f]/90 transition-all">
                    Contact Helena
                  </Link>
                )}
              </FadeInSection>
            </div>
          </div>
          {service.edgeImage && (
            <FadeInSection>
              <img src={service.edgeImage} alt={service.title} className="w-full h-[35vh] md:h-[50vh] object-cover" />
            </FadeInSection>
          )}
        </section>
      ))}

      {/* Contact Form CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-primary-foreground mb-6">Let's Create Something Extraordinary</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/contact" className="inline-block px-8 py-4 bg-accent text-primary font-heading text-lg tracking-wider hover:bg-accent/90 transition-all">
                Book a Discovery Call
              </Link>
              <a href="mailto:helena@helenasips.com" className="inline-block px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-heading text-lg tracking-wider hover:bg-primary-foreground/10 transition-all">
                Send an Enquiry
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
