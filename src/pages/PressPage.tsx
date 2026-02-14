import FadeInSection from "../components/FadeInSection";
import PublicationLogos from "../components/PublicationLogos";

const PressPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-accent font-heading tracking-widest uppercase text-sm mb-4 text-center">Authority</p>
            <h1 className="text-center mb-14">Published & Featured</h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <PublicationLogos className="mb-20" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="text-center mb-12">Featured Articles</h2>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card p-8 border border-border">
                  <p className="text-accent font-heading tracking-widest uppercase text-xs mb-2">Publication Name</p>
                  <h3 className="text-xl mb-3">Article Headline {i}</h3>
                  <p className="text-foreground/60 mb-4">Helena will provide article links and excerpts for this section.</p>
                  <span className="text-accent font-heading tracking-wider text-sm">Read Article →</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
