import FadeInSection from "../components/FadeInSection";

const TermsPage = () => (
  <div className="pt-20">
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          <h1 className="mb-10">Terms & Conditions</h1>
          <div className="prose prose-lg text-foreground/80 space-y-6">
            <p><strong>Last updated:</strong> February 2026</p>
            <h2 className="text-2xl mt-8 mb-4">Newsletter Subscription</h2>
            <p>By subscribing to the HelenaSips newsletter, you agree to receive periodic emails about wine, drinks, culture and events. You can unsubscribe at any time via the link provided in each email.</p>
            <h2 className="text-2xl mt-8 mb-4">Content Copyright</h2>
            <p>All content on this website, including text, images, and design, is the intellectual property of Helena Nicklin / HelenaSips unless otherwise stated. Reproduction without permission is prohibited.</p>
            <h2 className="text-2xl mt-8 mb-4">External Links</h2>
            <p>This website may contain links to external sites. HelenaSips is not responsible for the content or privacy practices of those sites.</p>
            <h2 className="text-2xl mt-8 mb-4">Contact</h2>
            <p>For any queries regarding these terms, please contact: <a href="mailto:helena@helenasips.com" className="text-accent hover:text-accent/80">helena@helenasips.com</a></p>
          </div>
        </FadeInSection>
      </div>
    </section>
  </div>
);

export default TermsPage;
