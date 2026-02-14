import { useState } from "react";
import FadeInSection from "../components/FadeInSection";
import PublicationLogos from "../components/PublicationLogos";
import helenaHeadshot from "@/assets/helena-headshot.jpg";

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
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeInSection>
            <img src={helenaHeadshot} alt="Helena Nicklin" className="w-full max-w-md mx-auto aspect-[3/4] object-cover object-top" />
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-accent font-heading tracking-widest uppercase text-sm mb-4">About</p>
            <h1 className="mb-8">Where Wine Meets Culture</h1>
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
              </div>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all"
            >
              {expanded ? "Show Less" : "Read Full Bio"}
            </button>
          </FadeInSection>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-12">Awards & Accolades</h2>
            <ul className="space-y-4">
              {awards.map((award, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1">✦</span>
                  <span className="text-foreground/80">{award}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-12">Publications</h2>
            <PublicationLogos />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
