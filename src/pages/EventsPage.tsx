import { useState } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import FaqSection from "../components/FaqSection";
import salonInterior from "@/assets/salon-interior.jpg";
import dinnerTable from "@/assets/dinner-table.png";
import brandEvent from "@/assets/brand-event.jpg";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import privateWineMasterclass from "@/assets/private-wine-masterclass.jpeg";
import rueda1 from "@/assets/rueda_1.jpg";
import festivalPhoto from "@/assets/festival-photo.png";

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
          <img src={privateWineMasterclass} alt="Helena presenting" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <FadeInSection>
            <h1 className="text-primary-foreground mb-4">Work with Helena</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Work with Helena to entertain clients or showcase your drinks, regions and brands to consumer audiences.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mt-3">
              Helena Nicklin hosts corporate wine tastings, private tasting events, drinks masterclasses and festival sessions on the Isle of Wight, in London, across the UK and abroad. She can also work virtually, wherever your guests are.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Three Services */}
      {[
        {
          id: "corporate-private-wine-tasting-events",
          img: null,
          edgeImage: dinnerTable,
          title: "Corporate & Private Wine Tasting Events",
          copy: "Whether you want a wine or spirits tasting before or during your dinner or a full evening with wine games to break the ice, Helena can put together something unique just for you.",
          perfect: "Corporate events and private client gatherings for 6 - 30 people.",
          format: "Helena comes to your venue of choice, on the Isle of Wight, in London, anywhere in the UK or potentially, abroad. She can organise wine delivery or pick from a list. Virtual tastings are available too.",
        },
        {
          id: "bottles-and-bites",
          img: null,
          title: "Bottles & Bites Supper Clubs",
          copy: "Wine and spirits education perfectly paired with food. Helena works with drinks brands and wine regions to offer wine and spirits masterclasses in a supper club format where she lives on the Isle of Wight, to an engaged, consumer audience of up to 30 guests.",
          perfect: "Getting liquid on lips for drinks brands and wine regions.",
          formatLabel: "What’s included?",
          format: "These events last around three hours and include a relaxed masterclass with Q&A featuring up to 6 wines, which are then paired with substantial nibbles or a full meal.",
          extra: [
            { text: "Digital notes are given to attendees as standard, which include a list of the wines tasted with stockist details, the menu and further information. This sits on Helenasips.com under ‘Events’ and is accessed by a QR code available on the night." },
            { label: "Optional add-on:", text: "Make the event go further with extra digital coverage in the form of a subscriber newsletter article version of the digital notes, 3 x Instagram stories (with links to the article), a carousel post with 4 x pictures and description on the grid and one Instagram reel after the event." },
          ],
          edgeImage: rueda1,
          ctaLink: "/contact",
          ctaLabel: "Get Price List",
        },
        {
          id: "brand-partnerships",
          img: null,
          title: "Digital Brand Partnerships",
          copy: "Create a bespoke, multi-channel sponsorship campaign across Helena's socials, website and newsletters.",
          perfect: "Drinks brands and wine regions wanting to get liquid on lips across Helena's various digital platforms.",
          ctaLink: "/brand-partnerships",
          ctaLabel: "Get Price List",
          edgeImage: festivalPhoto,
        },
        {
          id: "festivals-and-events",
          img: null,
          title: "Presenting at Festivals & Shows",
          copy: "Helena is an experienced wine and spirits presenter, bringing energy and passion to every session and masterclass she hosts.",
          perfect: "Food and drinks festivals, drinks expos and trade fairs.",
          cta: true,
        },
      ].map((service, i) => (
        <section key={service.title} id={service.id} className={`scroll-mt-24 ${i % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}>
          <div className="py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                  <p className="text-foreground/70 mb-6"><strong className="text-foreground">{service.formatLabel ? service.formatLabel : "Format:"}</strong> {service.format}</p>
                )}
                {service.extra?.map((para) => (
                  <p key={para.text} className="text-foreground/70 mb-6 leading-relaxed">
                    {para.label && <strong className="text-foreground">{para.label}</strong>} {para.text}
                  </p>
                ))}
                {service.ctaLink && (
                  <Link to={service.ctaLink} className="inline-block px-8 py-3 bg-[#db258f] text-white font-heading text-base tracking-wider hover:bg-[#db258f]/90 transition-all">
                    {service.ctaLabel || "Find Out More"}
                  </Link>
                )}
                {!service.ctaLink && (service.id === "corporate-private-wine-tasting-events" || service.cta) && (
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

      <FaqSection page="/work-with-helena" className="bg-background" />

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
