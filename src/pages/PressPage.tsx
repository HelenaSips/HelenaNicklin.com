import FadeInSection from "../components/FadeInSection";
import PublicationLogos from "../components/PublicationLogos";

const PressPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Authority</p>
            <h1 className="text-center mb-14">Published & Featured</h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <PublicationLogos className="mb-20" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="text-center mb-12">Featured Press</h2>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
