import FadeInSection from "../components/FadeInSection";
import magazineHero from "@/assets/magazine-hero-new.jpg";
import postChampagne from "@/assets/post-champagne.jpg";
import postDryJanuary from "@/assets/post-dry-january.jpg";
import postGoldenMilk from "@/assets/post-golden-milk.jpg";

const MagazinePage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding pb-7 md:pb-10 lg:pb-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">Read</p>
            <h1 className="mb-4">The HelenaSips Magazine</h1>
            <p className="font-heading text-xl text-foreground/60 italic mb-6">
              A Cultural Magazine on Wine, Drinks & The Art of Living
            </p>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe for regular drinks wisdom, inspiration and recommendations, delivered to your inbox every week.
            </p>
            <a
              href="https://www.helenasips.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mb-10 bg-magenta text-white font-heading tracking-wider hover:bg-magenta/90 transition-all"
            >
              Subscribe Now
            </a>
            <div className="mt-2">
              <a href="https://www.helenasips.com/" target="_blank" rel="noopener noreferrer">
                <img src={magazineHero} alt="Helena holding a glass of red wine" className="w-full rounded-lg hover:opacity-90 transition-opacity" />
              </a>
            </div>
            <a
              href="https://helenasips.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 bg-magenta text-white font-heading tracking-wider hover:bg-magenta/90 transition-all"
            >
              Read Magazine
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-padding pt-7 md:pt-10 lg:pt-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-14">Recent Posts</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How the English 'invented' Champagne", excerpt: "The real story behind sparkling wine, from Admiral Mansell's coal furnaces to Dom Pérignon's 'devil's wine'...", image: postChampagne, link: "https://www.helenasips.com/p/how-the-english-invented-champagne" },
              { title: "Beyond Dry January", excerpt: "More sober sips to try: delicious non-alcoholic drinks that aren't packed full of sugar...", image: postDryJanuary, link: "https://www.helenasips.com/p/beyond-dry-january" },
              { title: "Need Something Wholesome? Try Golden Milk", excerpt: "The recipe, the ritual and the history of a drink that's been offering goodness for over 3,000 years...", image: postGoldenMilk, link: "https://www.helenasips.com/p/need-something-wholesome-try-golden" },
            ].map((post, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="bg-background p-8 border border-border hover:shadow-lg transition-shadow">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full aspect-[3/2] object-cover mb-6" />
                  ) : (
                    <div className="w-full aspect-[3/2] bg-secondary mb-6" />
                  )}
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-foreground/60 mb-4">{post.excerpt}</p>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-accent font-heading tracking-wider text-sm">Read More →</a>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection>
            <div className="text-center mt-6">
              <a
                href="https://www.helenasips.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-heading tracking-wider text-sm hover:bg-primary/90 transition-all"
              >
                Subscribe Now
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default MagazinePage;
