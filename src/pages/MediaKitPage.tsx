import { useState } from "react";
import FadeInSection from "../components/FadeInSection";

const MediaKitPage = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Helena will set her preferred password
    if (password === "helenasips2026") {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-auto p-6">
          <FadeInSection>
            <div className="text-center mb-10">
              <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">Press</p>
              <h1>Media Kit</h1>
              <p className="text-foreground/60 mt-4">This area is password protected. Please enter the password to access Helena's media kit.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
              />
              {error && <p className="text-destructive text-sm">Incorrect password. Please try again.</p>}
              <button type="submit" className="w-full px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all">
                Access Media Kit
              </button>
            </form>
          </FadeInSection>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="text-center mb-4">Media Kit</h1>
            <p className="text-center text-foreground/60 mb-14">Download assets and information for press and partnerships.</p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Press Pack (PDF)", desc: "Comprehensive press kit with bio, topics and coverage highlights" },
              { title: "High-Resolution Photos", desc: "Professional headshots and lifestyle imagery" },
              { title: "Bio Versions", desc: "Short, medium and long bio for different publication needs" },
              { title: "Brand Assets", desc: "Logos and brand guidelines" },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card p-8 border border-border">
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-foreground/60 mb-6">{item.desc}</p>
                  <span className="text-accent font-heading tracking-wider text-sm">Download — Coming Soon</span>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mt-14 text-center">
              <p className="text-foreground/60 mb-4">For media enquiries:</p>
              <a href="mailto:helena@helenasips.com" className="text-accent hover:text-accent/80 transition-colors text-lg font-heading tracking-wider">
                helena@helenasips.com
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default MediaKitPage;
