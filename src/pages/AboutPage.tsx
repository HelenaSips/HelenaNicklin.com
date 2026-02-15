import { useState } from "react";
import FadeInSection from "../components/FadeInSection";
import PublicationLogos from "../components/PublicationLogos";
import helenaHeadshot from "@/assets/helena-hero-about.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import supperClub from "@/assets/supper-club.jpg";
import brandEvent from "@/assets/brand-event.jpg";
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
        <p className="absolute bottom-6 left-6 md:left-12 font-heading text-xl md:text-2xl text-primary-foreground/80 italic tracking-wide drop-shadow-lg max-w-lg">
          Cultural Connector. Sensory Host.<br />Drinks Expert.
        </p>
      </section>
      <div className="w-full h-[6px] bg-magenta" />

      {/* Bio */}
      <section className="section-padding !pt-7 md:!pt-10 lg:!pt-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">About Helena</p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Helena Nicklin is a multi-award-winning drinks writer, broadcaster and cultural host with 23 years in wine, spirits and no-lo.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              An accomplished speaker with broadcast experience across major platforms and a writing portfolio spanning national and luxury publications, Helena is known for her engaging presenting style and love of combining drinks with the best things in life from fragrance and books to chocolate. She brings authority and warmth to every experience she curates.
            </p>

            {expanded && (
              <div className="text-foreground/80 leading-relaxed space-y-6 mb-6">
                <p>
                  In addition to hosting drinks masterclasses and multi-sensory events, Helena judges for various international drinks competitions including the IWSC and is regularly called by national radio stations for commentary on the drinks industry.
                </p>
                <p>
                  You can see Helena in action in her three global, drinks and food travel series, 'The Three Drinkers' on Amazon Prime, which she co-produced and co-presented. She is also currently a wine expert guest on Alan Carr & Lee Peart's video podcast Bottoms Up!
                </p>

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
          </FadeInSection>
        </div>
      </section>

      {/* Salons & Events Section */}
      <section className="section-padding bg-[#f7f3ed]">
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
                <h3 className="text-2xl font-heading leading-tight group-hover:text-magenta transition-colors">
                  Sensory Salons
                </h3>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={supperClub} 
                    alt="Bottles & Bites Masterclasses" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-heading leading-tight group-hover:text-magenta transition-colors">
                  Bottles & Bites <br/>Masterclasses
                </h3>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={brandEvent} 
                    alt="Brand Ambassador Partnerships" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-heading leading-tight group-hover:text-magenta transition-colors">
                  Brand Ambassador <br/>Partnerships
                </h3>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
