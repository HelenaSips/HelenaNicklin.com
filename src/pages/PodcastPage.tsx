import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import podcastCover from "../assets/hspodcast-logo.jpg";
import guestSamNeill from "@/assets/guest-sam-neill.jpg";
import guestJoanneHarris from "@/assets/guest-joanne-harris.jpg";
import guestCathKidston from "@/assets/guest-cath-kidston.png";
import guestAlexWatson from "@/assets/guest-alex-watson.jpg";
import guestJessEnnisHill from "@/assets/guest-jess-ennis-hill.png";
import guestVassos from "@/assets/guest-vassos-alexander.jpg";

const guests = [
  { name: "Sam Neill", role: "Actor", img: guestSamNeill, link: "https://www.helenasips.com/p/a-drink-with-sam-neill" },
  { name: "Joanne Harris", role: "Author", img: guestJoanneHarris, link: "https://www.helenasips.com/p/podcast-joanne-harris" },
  { name: "Cath Kidston", role: "Designer", img: guestCathKidston, link: "https://www.helenasips.com/p/podcast-cath-kidston" },
  { name: "Alex Watson", role: "Gin Maker", img: guestAlexWatson, link: "https://www.helenasips.com/p/a-drink-with-alex-watson" },
  { name: "Dame Jess Ennis-Hill", role: "Olympic Champion", img: guestJessEnnisHill, link: "https://www.helenasips.com/p/a-drink-with-jess-ennis-hill" },
  { name: "Vassos Alexander", role: "Broadcaster & Runner", img: guestVassos, link: "https://www.helenasips.com/p/podcast-vassos-alexander" },
];

const PodcastPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeInSection>
            <div className="aspect-square overflow-hidden">
              <img src={podcastCover} alt="HelenaSips - The Podcast cover art" className="w-full h-full object-cover" />
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="font-heading tracking-widest text-sm mb-3" style={{ color: '#fcd8cc' }}>COMING SOON!</p>
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
              <a href="https://www.helenasips.com/s/the-helenasips-podcast" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-accent text-primary font-heading tracking-wider hover:bg-accent/90 transition-all text-center">
                Listen on HelenaSips.com
              </a>
              <Link to="/contact" className="inline-block px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-heading tracking-wider hover:bg-primary-foreground/10 transition-all text-center">
                Sponsor the Podcast
              </Link>
            </div>

            {/* Listen via platforms */}
            <p className="font-body text-primary-foreground/60 italic mt-8 mb-4">Listen via...</p>
            <div className="flex items-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer" title="Spotify" className="hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#1DB954"/>
                  <path d="M16.94 10.58c-2.66-1.58-7.05-1.73-9.59-.96a.74.74 0 1 1-.43-1.42c2.92-.89 7.77-.72 10.84 1.1a.74.74 0 0 1-.82 1.28zm-.18 2.31a.62.62 0 0 1-.85.2c-2.22-1.36-5.6-1.76-8.22-.96a.62.62 0 1 1-.36-1.18c2.99-.91 6.71-.47 9.23 1.1a.62.62 0 0 1 .2.84zm-.97 2.22a.5.5 0 0 1-.68.16c-1.94-1.18-4.38-1.45-7.25-.79a.5.5 0 1 1-.22-.97c3.14-.72 5.83-.41 7.99.92a.5.5 0 0 1 .16.68z" fill="white"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Apple Podcasts" className="hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="5.4" fill="#9933CC"/>
                  <path d="M12 3.5c-4.14 0-7.5 3.2-7.5 7.15 0 2.57 1.4 4.83 3.5 6.1-.04-.4-.08-.95-.02-1.36l.6-2.55s-.15-.3-.15-.75c0-.7.41-1.23.92-1.23.43 0 .64.32.64.71 0 .44-.28 1.09-.42 1.69-.12.5.25.91.74.91.89 0 1.58-.94 1.58-2.3 0-1.2-.86-2.04-2.1-2.04-1.43 0-2.27 1.07-2.27 2.18 0 .43.17.89.38 1.14a.15.15 0 0 1 .04.15l-.14.58c-.02.1-.08.12-.18.07-.67-.31-1.09-1.28-1.09-2.07 0-1.68 1.22-3.22 3.52-3.22 1.85 0 3.29 1.32 3.29 3.08 0 1.84-1.16 3.32-2.76 3.32-.54 0-1.05-.28-1.22-.61l-.33 1.27c-.12.46-.44 1.04-.66 1.39A7.5 7.5 0 0 0 12 17.8a7.33 7.33 0 0 0 7.5-7.15C19.5 6.7 16.14 3.5 12 3.5z" fill="white"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="YouTube" className="hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="5.4" fill="#FF0000"/>
                  <path d="M19.61 8.3a2 2 0 0 0-1.41-1.41C16.86 6.5 12 6.5 12 6.5s-4.86 0-6.2.39A2 2 0 0 0 4.39 8.3 21 21 0 0 0 4 12a21 21 0 0 0 .39 3.7 2 2 0 0 0 1.41 1.41c1.34.39 6.2.39 6.2.39s4.86 0 6.2-.39a2 2 0 0 0 1.41-1.41A21 21 0 0 0 20 12a21 21 0 0 0-.39-3.7zM10 14.8V9.2l4.15 2.8L10 14.8z" fill="white"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Amazon Music" className="hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="5.4" fill="#25D1DA"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.66 0 3.16-.67 4.24-1.76l-1.06-1.06A4.48 4.48 0 0 1 12 16.5 4.5 4.5 0 1 1 16.5 12H15l2.5 2.5L20 12h-1.54A6.5 6.5 0 0 0 12 6z" fill="white"/>
                  <path d="M10.5 9.5v5l4-2.5-4-2.5z" fill="white"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="TuneIn" className="hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="5.4" fill="#14D8CC"/>
                  <path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 1.2a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6zm-1.5 3.3v5l4.5-2.5-4.5-2.5z" fill="white"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Alexa" className="hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="5.4" fill="#31C4F3"/>
                  <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" fill="white"/>
                  <circle cx="12" cy="12" r="2.5" fill="white"/>
                  <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
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
                   {guest.img ? (
                     <img src={guest.img} alt={guest.name} className="w-32 h-32 rounded-full object-cover mb-6 mx-auto" />
                   ) : (
                     <div className="w-32 h-32 rounded-full bg-secondary border border-accent/20 flex items-center justify-center mb-6 mx-auto">
                       <span className="font-heading text-4xl text-accent">{guest.name[0]}</span>
                     </div>
                   )}
                  <h3 className="text-center text-xl mb-2">{guest.name}</h3>
                  <p className="text-center text-muted-foreground text-sm font-heading tracking-wider mb-4">{guest.role}</p>
                  <div className="text-center">
                    {guest.comingSoon ? (
                      <span className="font-heading tracking-wider text-sm italic" style={{ color: '#db258f' }}>Episode coming soon...</span>
                    ) : guest.link ? (
                      <a href={guest.link} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 font-heading tracking-wider text-sm" style={{ backgroundColor: '#db258f', color: '#fffdfc' }}>Listen</a>
                    ) : (
                      <span className="inline-block px-5 py-2 font-heading tracking-wider text-sm" style={{ backgroundColor: '#db258f', color: '#fffdfc' }}>Listen</span>
                    )}
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
