import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

import handshakeImage from "@/assets/handshake-final.png";

const ContentCreationPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Collaborate</p>
            <h1 className="text-center mb-6 font-bold">Brand Partnerships</h1>
            <p className="text-justify max-w-3xl mx-auto text-foreground/70 mb-4">
              Helena brings an editorial eye and deep drinks knowledge to every content collaboration, from long-form features and newsletters on helenasips.com, to social content and live tasting events.
            </p>
            <p className="text-justify max-w-3xl mx-auto text-foreground/70 mb-6">
              Pick & choose from the following to create your own bespoke campaign:
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="flex justify-center mb-4">
              <img src={handshakeImage} alt="Brand partnerships illustration" className="w-full max-w-[10rem] mx-auto" />
            </div>
          </FadeInSection>

          <div className="max-w-3xl mx-auto mb-10 space-y-8">
            <FadeInSection>
              <h3 className="mb-4 font-bold">Social Media</h3>
              <p className="text-foreground/70 leading-relaxed">
                Short videos, stories & posts for social media
              </p>
            </FadeInSection>

            <FadeInSection>
              <h3 className="mb-4 font-bold">Magazine & Newsletters</h3>
              <p className="text-foreground/70 leading-relaxed">
                Long form articles on helenasips.com with subscriber newsletters
              </p>
            </FadeInSection>

            <FadeInSection>
              <h3 className="mb-4 font-bold">Podcast Sponsorship</h3>
              <p className="text-foreground/70 leading-relaxed">
                Available in groups of 3, 5 & 10 episodes. Includes a bespoke, 30 second 'ad' read by Helena at the start of each episode, branded space on the episode show notes, a bespoke article on helenasips.com and presence in an episode newsletter with link to the article.
              </p>
            </FadeInSection>

            <FadeInSection>
              <h3 className="mb-4 font-bold">Live Tasting Events</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Work with Helena to get liquid on lips at consumer events via:
              </p>
              <ul className="space-y-3 text-foreground/70">
                {[
                  "Hosted Masterclasses at Festivals & Roadshows",
                  "Bottles & Bites Masterclass Supper Clubs (Isle of Wight)",
                  "Sensory Salons",
                  "Corporate Entertaining",
                  "Celebrity & Charity Events",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    {item === "Sensory Salons" ? (
                      <Link to="/events#sensory-salons" className="hover:text-[#db258f] transition-colors">
                        {item}
                      </Link>
                    ) : item === "Corporate Entertaining" ? (
                      <Link to="/events#private-wine-masterclasses" className="hover:text-[#db258f] transition-colors">
                        {item}
                      </Link>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection>
              <div className="text-center mt-10">
                <p className="text-foreground/70 mb-4 font-bold">Contact Helena to discuss your project</p>
                <Link to="/contact" className="inline-block px-8 py-3 bg-magenta text-white font-heading tracking-widest uppercase hover:bg-magenta/90 transition-all">
                  CONTACT
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="mt-16">
                <h2 className="text-center mb-12">Previous Clients Include</h2>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  {[
                    "D.O. Rueda", "Symington Family Estates", "Toro Loco Wine", "D.O. Rías Baixas",
                    "Vins de Bordeaux", "Rémy Martin", "Courvoisier", "Guinness", "Jameson Whiskey",
                    "Waterford Whisky", "The Dalmore", "Glenmorangie", "Celliers Les Dauphins",
                    "Fenjiu Baijiu", "Akashi-Tai Sake", "Seabourn Cruises",
                  ].map((client) => (
                    <span key={client} className="font-heading text-base md:text-lg tracking-wider text-foreground/40">{client}</span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCreationPage;
