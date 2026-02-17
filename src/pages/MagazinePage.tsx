import { useState, useEffect } from "react";
import FadeInSection from "../components/FadeInSection";
import magazineHero from "@/assets/magazine-hero.png";
import postChampagne from "@/assets/post-champagne.jpg";
import postDryJanuary from "@/assets/post-dry-january.jpg";
import postGoldenMilk from "@/assets/post-golden-milk.jpg";

const MagazinePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setSubmitted(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

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
            <p className="text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe for regular drinks wisdom, inspiration and recommendations, delivered to your inbox every week.
            </p>
            <div className="mt-8 mb-10">
              <img src={magazineHero} alt="Helena holding a glass of red wine" className="w-full rounded-lg" />
            </div>
            <button
              onClick={() => setShowPopup(true)}
              className="inline-block px-8 py-3 bg-magenta text-white font-heading tracking-wider hover:bg-magenta/90 transition-all"
            >
              Subscribe Now
            </button>
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
        </div>
      </section>

      {/* Newsletter Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-6">
          <div className="bg-background max-w-md w-full p-10 relative shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors text-xl"
            >
              ×
            </button>
            {submitted ? (
              <div className="text-center py-8">
                <p className="font-heading text-2xl text-foreground mb-4">Thank You!</p>
                <p className="text-foreground/60">Welcome to the HelenaSips community.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <h3 className="text-2xl mb-2 text-center">Subscribe to HelenaSips</h3>
                <p className="text-center text-foreground/60 mb-8">Weekly insights on wine, other drinks & culture</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 mb-4 focus:outline-none focus:border-accent"
                  required
                />
                <label className="flex items-start gap-3 mb-6 cursor-pointer text-sm text-foreground/60">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1"
                    required
                  />
                  I agree to receive emails from HelenaSips and understand I can unsubscribe at any time.
                </label>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazinePage;
