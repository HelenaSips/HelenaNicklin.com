import { useState } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import PublicationLogos from "../components/PublicationLogos";
import PodcastGuestCarousel from "../components/PodcastGuestCarousel";
import helenaHeadshot from "@/assets/helena-hero-about.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import bab1 from "@/assets/bab_1.png";
import rueda1 from "@/assets/rueda_1.jpg";
const awards = [
  "Top 100 Most Influential People in Drinks 2025, 2024, 2023 and 2022",
  "Shortlisted: IWSC Global Wine Communicator of the Year 2026",
  "Winner 'Best cultural contribution to the spirits industry 2025' — The Three Drinkers in Cognac",
  "Winner 'Best contribution to wine & spirits tourism 2022' — The Three Drinkers in Ireland",
  "Winner 'Best cultural contribution to the spirits industry 2022' — The Three Drinkers in Ireland",
  "Highly Commended 'Best contribution to wine & spirits tourism 2021' — The Three Drinkers do Scotch Whisky",
  "Top 10 Women to Watch in the Wine Industry 2019",
  "Gourmand Award Best Beginner's Wine Book 2015",
];


const AboutPage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <section className="relative pt-20">
        <div className="w-full aspect-[21/9] overflow-hidden">
          <img src={helenaHeadshot} alt="Helena Nicklin" className="w-full h-full object-cover" style={{ objectPosition: 'center 62%' }} />
        </div>
        <div className="absolute bottom-6 left-6 md:left-12 drop-shadow-lg max-w-lg">
          <p className="font-body text-3xl md:text-4xl text-primary-foreground/80 tracking-wide font-bold mb-3">Helena Nicklin</p>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/80 italic tracking-wide">
            Cultural Connector. Sensory Host.<br />Drinks Expert.
          </p>
        </div>
      </section>
      <div className="w-full h-[6px] bg-magenta" />

      {/* Bio */}
      <section className="section-padding !pt-7 md:!pt-10 lg:!pt-12 !pb-2 md:!pb-4 lg:!pb-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">About Helena</p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Helena Nicklin is a multi-award-winning drinks writer, broadcaster and cultural host with 23 years in wine, spirits and no-lo. She is the voice behind HelenaSips: a boutique, drinks media platform blending wine and spirits expertise with storytelling and live experiences.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              An accomplished speaker with broadcast experience across major platforms and a writing portfolio spanning national and luxury publications, Helena is known for her engaging presenting style and love of combining drinks with the best things in life from fragrance and books to chocolate. She brings authority and warmth to every experience she curates.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              In addition to the above, Helena judges for various international drinks competitions including the IWSC, is a regular feature on expert drinks panels and is often called for commentary on the drinks industry by national radio stations and TV channels.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              You can see Helena in action in her three global, drinks and food travel series, 'The Three Drinkers' on Amazon Prime, which she co-produced and co-presented. She is also currently a wine expert guest on Alan Carr & Lee Peart's video podcast Bottoms Up!
            </p>

            {expanded && (
              <div className="text-foreground/80 leading-relaxed space-y-6 mb-6">
                <h3 className="mt-8 mb-4">Awards & Accolades</h3>
                <ul className="space-y-3">
                  {awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span className="text-foreground/80">{award}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 mb-4">Publications</h3>
                <PublicationLogos />
              </div>
            )}

            <div className="flex justify-end -mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all"
              >
                {expanded ? "Show Less" : "Read Full Bio"}
              </button>
            </div>
            <div className="mt-4">
              <div className="gold-divider" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Salons & Events Section */}
      <section className="section-padding !pt-7 md:!pt-10 lg:!pt-12 !pb-8 md:!pb-12 lg:!pb-14 bg-[#f7f3ed]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">Experiences</p>
              <h2 className="text-4xl md:text-5xl font-heading mb-6">Salons & Events</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={salonInterior} 
                    alt="Sensory Salons" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <Link to="/events#sensory-salons" className="block text-center text-2xl font-heading leading-tight hover:text-magenta transition-colors">
                  Sensory Salons
                </Link>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  Curated experiences exploring wine and other drinks alongside sensory elements such as fragrance, books & chocolate with occasional special guests.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={bab1} 
                    alt="Bottles & Bites Supper Clubs" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <Link to="/events#bottles-and-bites" className="block text-center text-2xl font-heading leading-tight group-hover:text-magenta transition-colors">
                  Bottles & Bites <br/>Supper Clubs
                </Link>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  Entertaining drinks masterclasses with perfectly paired dishes supper club style, to audiences of up to 30 on the Isle of Wight.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={rueda1} 
                    alt="Brand Partnerships" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <Link to="/brand-partnerships" className="block text-center text-2xl font-heading leading-tight hover:text-magenta transition-colors">
                  Brand Partnerships
                </Link>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  Create a bespoke campaign with Helena taking in your pick of socials, editorial, newsletters, podcast sponsorship and live consumer tasting events.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="/events"
                className="px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all"
              >
                FIND OUT MORE
              </a>
            </div>
            <div className="mt-6">
              <div className="gold-divider" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="section-padding !pt-1 md:!pt-2 lg:!pt-3 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">The HelenaSips Podcast</p>
            <p className="text-foreground/80 leading-relaxed">
              COMING SOON! Intimate conversations with successful creatives exploring how they structure their lives for joy through the lens of their personal rituals.
            </p>

            <PodcastGuestCarousel />

            <div className="text-center mt-10">
              <a
                href="/podcast"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all"
              >
                SEE MORE
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
