import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import PublicationLogos from "../components/PublicationLogos";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import detailSetting from "@/assets/detail-setting.jpg";
import wineCloseup from "@/assets/wine-closeup.jpg";
import helenaYellowDress from "@/assets/helena-yellow-dress.jpg";
import bab1 from "@/assets/bab_1.png";
import rueda1 from "@/assets/rueda_1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-end md:items-center">
        <div className="absolute inset-0">
          <img src={heroLifestyle} alt="Elegant waterfront dining experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-primary/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-0 pt-32 w-full">
          <FadeInSection>
            <p className="font-heading text-lg md:text-xl text-accent tracking-widest uppercase mb-4">HelenaSips</p>
            <h1 className="text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-heading font-semibold leading-[0.95] mb-6">
              Helena<br />Nicklin
            </h1>
            <p className="font-heading text-xl md:text-2xl text-primary-foreground/80 italic tracking-wide mb-10 max-w-lg">
              Cultural Connector. Sensory Host. Drinks Expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-heading text-lg tracking-wider hover:bg-primary/90 transition-all"
              >
                Book Helena to Host
              </Link>
              <a
                href="#about"
                className="inline-block px-8 py-4 border border-primary-foreground/40 text-primary-foreground font-heading text-lg tracking-wider hover:bg-primary-foreground/10 transition-all"
              >
                Explore the Salon
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <img src={helenaYellowDress} alt="Helena Nicklin" className="w-full mx-auto lg:mx-0 aspect-[4/3] object-cover object-top" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">About Helena</p>
              <h2 className="mb-8">Where Wine Meets Culture</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Helena Nicklin is a multi-award-winning drinks writer, broadcaster and cultural host with 23 years in wine, spirits and no-lo.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                An accomplished speaker with broadcast experience across major platforms and a writing portfolio spanning national and luxury publications, Helena is known for her engaging presenting style and love of combining drinks with the best things in life from fragrance and books to chocolate. She brings authority and warmth to every experience she curates.
              </p>
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all"
              >
                See Full Bio
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="gold-divider" /></div>

      {/* SENSORY SALONS */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Experiences</p>
            <h2 className="text-center mb-6">Sensory Salons</h2>
            <p className="text-center max-w-3xl mx-auto text-foreground/80 mb-16 leading-relaxed">
              Helena's salons are curated experiences where wine and spirits become the gateway to exploring joyous, sensory elements of the Art of Living, from fragrance, flowers and art to books, design and more.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: salonInterior, title: "HelenaSips Sensory Salons", desc: "Curated experiences exploring wine and other drinks in combination with the arts." },
              { img: bab1, title: "Bottles & Bites Masterclasses", desc: "Entertaining drinks masterclasses with perfectly paired dishes." },
              { img: rueda1, title: "Brand Ambassador Partnerships", desc: "Brand ambassador roles, hosted wine tastings and cultural events for luxury brands and venues." },
            ].map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.15}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-base leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
              <Link to="/events" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all text-center">
                See More
              </Link>
              <a href="mailto:helena@helenasips.com" className="inline-block px-8 py-3 border border-primary text-primary font-heading tracking-wider hover:bg-primary hover:text-primary-foreground transition-all text-center">
                Enquire About Hosting
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* PODCAST */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Listen</p>
            <h2 className="text-center mb-4">The HelenaSips Podcast</h2>
            <p className="font-heading text-xl text-primary-foreground/70 italic text-center mb-6">
              Intimate conversations with creative minds on the art of living well
            </p>
            <p className="text-center max-w-2xl mx-auto text-primary-foreground/70 mb-14">
              A series of conversations over a drink, exploring sensory memories, food and drink rituals and practices that replenish their wells when the world feels chaotic.
            </p>
          </FadeInSection>

          {/* Guest circles */}
          <FadeInSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-14">
              {["Sam Neill", "Joanne Harris", "Cath Kidston", "Alex Watson", "Vitalie Taittinger"].map((guest) => (
                <div key={guest} className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-foreground/10 border border-accent/30 flex items-center justify-center mb-3 mx-auto">
                    <span className="font-heading text-2xl text-accent">{guest[0]}</span>
                  </div>
                  <p className="text-sm text-primary-foreground/70 font-heading tracking-wide">{guest}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/podcast" className="inline-block px-8 py-3 bg-accent text-primary font-heading tracking-wider hover:bg-accent/90 transition-all text-center">
                Listen Now
              </Link>
              <Link to="/contact" className="inline-block px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-heading tracking-wider hover:bg-primary-foreground/10 transition-all text-center">
                Sponsor the Podcast
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* IN THE PRESS */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Authority</p>
            <h2 className="text-center mb-14">Published & Featured In</h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <PublicationLogos subset={["Daily Mail", "Decanter", "BA High Life", "The Sun", "Delicious Magazine", "BBC Radio 4", "Amazon Prime", "Luxury Lifestyle Magazine"]} />
          </FadeInSection>
          <FadeInSection>
            <div className="text-center mt-12">
              <Link to="/press" className="inline-block px-8 py-3 border border-primary text-primary font-heading tracking-wider hover:bg-primary hover:text-primary-foreground transition-all">
                View All Press
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Praise</p>
            <h2 className="text-center mb-14">What Clients Say</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "We loved working with Helena. Our guests were immediately captivated by her energy and left having learned a lot but effortlessly.", attr: "Luxury Hotel Partner" },
              { quote: "Working with Helena is great fun. She brings both expertise and warmth to every experience.", attr: "Drinks Brand Director" },
              { quote: "The wine, words & chocolate sensory salon Helena hosted for our guests was the highlight of the festival. Pure magic.", attr: "Literary Festival Director" },
            ].map((t, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="bg-background p-8 md:p-10 border-l-2 border-plum/40">
                  <p className="plum-quote mb-6">"{t.quote}"</p>
                  <p className="text-sm text-muted-foreground font-heading tracking-wider">— {t.attr}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* MAGAZINE */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">Read</p>
              <h2 className="mb-4">The HelenaSips Magazine</h2>
              <p className="font-heading text-xl text-foreground/60 italic mb-6">
                A magazine-style Substack exploring wine, drinks and the art of living well
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Subscribe for regular insights and recommendations on drinks, cultural rituals and sensory living delivered to your inbox.
              </p>
              <Link to="/magazine" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all">
                Subscribe to the Newsletter
              </Link>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <img src={detailSetting} alt="Elegant place setting" className="w-full aspect-square object-cover" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-primary-foreground mb-6">Ready to Elevate Your Next Event?</h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              From intimate salons to brand activations, let's create something memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block px-8 py-4 bg-accent text-primary font-heading text-lg tracking-wider hover:bg-accent/90 transition-all">
                Book a Discovery Call
              </Link>
              <Link to="/contact" className="inline-block px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-heading text-lg tracking-wider hover:bg-primary-foreground/10 transition-all">
                Send an Enquiry
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
