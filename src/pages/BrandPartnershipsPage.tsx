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
            <p className="text-justify max-w-3xl mx-auto text-foreground/70 mb-10">
              Helena brings an editorial eye and deep drinks knowledge to every content collaboration, from long-form features and newsletters on helenasips.com, to social content and live tasting events.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="flex justify-center mb-4">
              <img src={handshakeImage} alt="Brand partnerships handshake illustration" className="max-w-[10rem] w-full" />
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
                    <span>{item}</span>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCreationPage;
