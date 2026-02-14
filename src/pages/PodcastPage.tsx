import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

const guests = [
  { name: "Sam Neill", role: "Actor" },
  { name: "Joanne Harris", role: "Author" },
  { name: "Cath Kidston", role: "Designer" },
  { name: "Alex Watson", role: "Gin Maker" },
  { name: "Vitalie Taittinger", role: "Champagne CEO" },
];

const PodcastPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeInSection>
            <div className="aspect-square bg-primary-foreground/5 border border-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4">Podcast</p>
                <h2 className="text-primary-foreground font-heading text-4xl md:text-5xl mb-4">The HelenaSips Podcast</h2>
                <p className="font-heading text-lg text-primary-foreground/50 italic">Cover art coming soon</p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <h1 className="text-primary-foreground mb-4">The HelenaSips Podcast</h1>
            <p className="font-heading text-xl text-primary-foreground/70 italic mb-6">
              Intimate Conversations with Creative Minds on the Art of Living
            </p>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Exploring how successful creatives structure their lives for joy through the lens of their personal rituals and sensory pleasures.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/50 mb-10">
              <span>New episodes fortnightly</span>
              <span>•</span>
              <span>Available on Substack, Spotify, Apple Podcasts</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-block px-8 py-3 bg-accent text-primary font-heading tracking-wider hover:bg-accent/90 transition-all text-center">
                Sponsor the Podcast
              </Link>
              <a href="https://helenasips.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-heading tracking-wider hover:bg-primary-foreground/10 transition-all text-center">
                Listen on Substack
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-14">Featured Conversations</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {guests.map((guest, i) => (
              <FadeInSection key={guest.name} delay={i * 0.1}>
                <div className="bg-card p-8 border border-border hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-20 h-20 rounded-full bg-secondary border border-accent/20 flex items-center justify-center mb-6 mx-auto">
                    <span className="font-heading text-3xl text-accent">{guest.name[0]}</span>
                  </div>
                  <h3 className="text-center text-xl mb-2">{guest.name}</h3>
                  <p className="text-center text-muted-foreground text-sm font-heading tracking-wider mb-4">{guest.role}</p>
                  <p className="text-center text-foreground/60 italic font-heading mb-6">
                    "Episode coming soon..."
                  </p>
                  <div className="text-center">
                    <span className="text-accent font-heading tracking-wider text-sm">Listen →</span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
