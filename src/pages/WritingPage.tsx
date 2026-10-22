import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import FaqSection from "../components/FaqSection";
import PublicationLogos from "../components/PublicationLogos";

const services = [
  {
    title: "Features & Guides",
    copy: "Seasonal wine guides, buying round-ups and drinks features for national newspapers and magazines. Accessible, accurate and fun to read.",
  },
  {
    title: "Interviews & Profiles",
    copy: "Conversations with winemakers, drinks pioneers and creative people who love a glass, from champagne houses to Hollywood actors.",
  },
  {
    title: "Travel & Lifestyle",
    copy: "Wine regions, drinks destinations and the art of living well, for travel, luxury and lifestyle titles.",
  },
  {
    title: "Brand Copy & Content",
    copy: "Long-form articles, newsletters and copy for drinks brands and wine regions, written with an editor's eye.",
  },
  {
    title: "Expert Comment",
    copy: "Need a drinks voice for a story, segment or episode? Helena gives expert comment for print, online, TV, radio and podcasts.",
  },
];

const WritingPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Commission</p>
            <h1 className="text-center mb-6 font-bold">Writing & Commissions</h1>
            <p className="text-center max-w-3xl mx-auto text-foreground/80 text-lg mb-4">
              Helena Nicklin is an award-winning drinks writer. Her work has appeared in the Daily Mail, The Sun, BA High Life, Decanter, Club Oenologique, Delicious, The Tonic, Luxury Lifestyle Magazine, Luxurious Magazine and Princess Yachts Magazine, amongst others.
            </p>
            <p className="text-center max-w-3xl mx-auto text-foreground/70 mb-12">
              Wine, spirits and no-lo, written so anyone can enjoy it. Editors and brands: send your brief.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <PublicationLogos className="mb-6" subset={["Daily Mail", "The Sun", "Decanter", "BA High Life", "Delicious Magazine", "Luxury Lifestyle Magazine", "The Tonic", "Luxurious Magazine"]} />
            <div className="mb-16" />
          </FadeInSection>

          <div className="max-w-3xl mx-auto space-y-10 mb-16">
            {services.map((s) => (
              <FadeInSection key={s.title}>
                <h2 className="text-2xl mb-3 font-bold">{s.title}</h2>
                <p className="text-foreground/70 leading-relaxed">{s.copy}</p>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="text-center">
              <p className="text-foreground/70 mb-4 font-bold">
                Send your brief, word count and deadline to{" "}
                <a href="mailto:helena@helenasips.com" className="text-magenta hover:text-magenta/80 transition-colors">
                  helena@helenasips.com
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-block px-8 py-3 bg-magenta text-white font-heading tracking-widest uppercase hover:bg-magenta/90 transition-all">
                  Commission Helena
                </Link>
                <Link to="/press" className="inline-block px-8 py-3 border border-foreground/20 font-heading tracking-widest uppercase hover:bg-foreground/5 transition-all">
                  See Press
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <FaqSection page="/writing" className="bg-secondary/50" />
    </div>
  );
};

export default WritingPage;
