import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

import detailSetting from "@/assets/detail-setting.jpg";
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
              Helena brings an editorial eye and deep drinks knowledge to every content collaboration. From long-form features and newsletters on helenasips.com, to social content and live tasting events, she brings a unique energy that both educates inspires.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="flex justify-center mb-10">
              <img src={handshakeImage} alt="Brand partnerships handshake illustration" className="max-w-[10rem] w-full" />
            </div>
          </FadeInSection>

          <div className="max-w-3xl mx-auto mb-20 space-y-16">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection delay={0.2} className="lg:order-2">
              <img src={detailSetting} alt="Writing and editorial" className="w-full aspect-square object-cover" />
            </FadeInSection>
            <FadeInSection className="lg:order-1">
              <h2 className="mb-6 font-bold">Writing & Broadcasting</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Helena's writing and presenting style is accessible, intelligent and filled with sensory detail. She makes complex topics feel effortless and always finds the human story behind the bottle.
              </p>
              <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all">
                Discuss a Project
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCreationPage;
