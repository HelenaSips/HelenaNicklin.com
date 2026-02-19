import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

import detailSetting from "@/assets/detail-setting.jpg";

const ContentCreationPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Create</p>
            <h1 className="text-center mb-6">Content Creation</h1>
            <p className="text-center max-w-3xl mx-auto text-foreground/70 mb-16">
              Helena brings an editorial eye and deep drinks knowledge to every content collaboration. From long-form features and newsletters on helenasips.com, to still and video social content, she crafts stories that both educate inspire.
            </p>
          </FadeInSection>

          <div className="max-w-3xl mx-auto mb-20">
            <FadeInSection>
              <h2 className="mb-6">Editorial & Brand Partnerships</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Helena brings an editorial eye and deep drinks knowledge to every collaboration. From long-form features and tasting notes to social content and video series, she crafts stories that educate and inspire.
              </p>
              <h3 className="text-xl mb-4">Services include:</h3>
              <ul className="space-y-3 text-foreground/70">
                {[
                  "Wine and spirits writing for publications and brands",
                  "Brand storytelling and content strategy",
                  "Social media content creation",
                  "Video presenting and production",
                  "Podcast guest appearances",
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
              <h2 className="mb-6">Writing & Broadcasting</h2>
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
