import { useState } from "react";
import { Download } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import FadeInSection from "../components/FadeInSection";
import PodcastGuestCarousel from "../components/PodcastGuestCarousel";
import helenaHeadshot from "@/assets/helena-headshot.jpg";
import supperClubImg from "@/assets/private-wine-masterclass.jpeg";
import hsPodcastLogo from "@/assets/hspodcast-logo.jpg";

const MEDIA_PACK_PDF = "/media-kit/HelenaSips-Media-Pack-2026.pdf";

const accolades = [
  { title: "Top 100 Most Influential People in Drinks", detail: "2026, 2025, 2024, 2023 & 2022" },
  { title: "IWSC Global Wine Communicator of the Year 2026", detail: "Shortlisted" },
  { title: "Winner, Best Contribution to Wine & Spirits Tourism", detail: "2025 & 2022" },
  { title: "Winner, Best Cultural Contribution to the Spirits Industry", detail: "2022" },
  { title: "Top 10 Women to Watch in the Wine Industry", detail: "2019" },
  { title: "Winner, Best Wine Book", detail: "Gourmand Awards, 2015" },
];

const workWithHelena = [
  {
    title: "Branded Digital Collaborations",
    desc: "Paid collaborations with drinks and lifestyle brands over social media platforms, as well as via written articles on helenasips.com and in Helena's newsletters.",
  },
  {
    title: "Liquid on Lips: Supper Club",
    desc: "Helena's regular Bottles & Bites events on the Isle of Wight put your brand or region in front of real consumers, with paired food. Available as an exclusive, branded event or part of a wider collaboration with other brands.",
  },
  {
    title: "The HelenaSips Podcast: Sponsorship",
    desc: "Launched April 2026, this podcast explores conversations with successful creatives about what makes them tick, over a glass of something delicious. Episode sponsorship is available in various bundles.",
  },
  {
    title: "Your Drinks at High-Profile Charity Events",
    desc: "Helena often donates her time to raise money for good causes, such as DJ Chris Evans' Gig in the Garden or high-profile auctions. Showcase your brand or region via a donation of stock.",
  },
];

const audienceStatsPrimary = [
  { num: "24.1K", platform: "Instagram @HelenaSips", sub: "79% aged 25–54 · 52.8% Women / 47.2% Men" },
  { num: "1,084", platform: "TikTok @HelenaSips", sub: "Evenly spread 18–55+ · 35% Women / 65% Men" },
  { num: "7,645", platform: "X (Twitter)", sub: "Followers" },
];

const audienceStatsSecondary = [
  { num: "6,074", platform: "LinkedIn", sub: "Connections" },
  { num: "4,294", platform: "Threads", sub: "Followers" },
  { num: "920", platform: "YouTube", sub: "Subscribers" },
  { num: "427", platform: "Newsletter Subscribers", sub: "*NEW" },
];

const rates = [
  { title: "Short Video / Reel", desc: "Posted to TikTok, YouTube Shorts + Instagram (reel, grid & stories)", price: "£560" },
  { title: "Still Posts", desc: "Up to 3 images if a carousel. Posted to Instagram (grid + stories) + Pinterest", price: "£300" },
  { title: "Online Article & Newsletter", desc: "Written on helenasips.com; shared to LinkedIn, Instagram, X, Threads, Bluesky and the email newsletter", price: "£485" },
];

const podcastRates = [
  { price: "£180", label: "1 Episode" },
  { price: "£495", label: "3 Episodes" },
  { price: "£750", label: "5 Episodes" },
];

const audienceRegions = [
  { name: "UK", value: 52, color: "#1f9e63" },
  { name: "NZ & Australia", value: 28, color: "#db258f" },
  { name: "USA", value: 11, color: "#b8860b" },
  { name: "Canada", value: 5, color: "#7d3f8a" },
  { name: "Other", value: 4, color: "#a8672e" },
];

// Two-line label (name, then %) keeps each line short so it doesn't run off
// the edge of the chart on narrow screens.
const renderAudienceLabel = (props: {
  x: number;
  y: number;
  textAnchor: "start" | "end" | "middle";
  name: string;
  value: number;
}) => {
  const { x, y, textAnchor, name, value } = props;
  return (
    <text x={x} y={y} textAnchor={textAnchor} fill="#6b6b6b" fontSize={11}>
      <tspan x={x} dy="-0.3em">{name}</tspan>
      <tspan x={x} dy="1.1em">{value}%</tspan>
    </text>
  );
};

const supperClubIncludes = [
  "An entertaining, educational wine masterclass for 25 people, presented by Helena.",
  "Wines served with expertly paired food, from small snacks to full dinners.",
  "Online article with stockist details, shared via QR code with all attendees.",
  "Roundup Instagram reel of the event, plus 3–5 Instagram stories.",
  "1x Instagram carousel with a branded CTA end image and link in bio.",
];

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
      {/* Header */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-6 text-center">Work With Helena</p>
            <h1 className="text-center mb-4">Media Kit</h1>
            <div className="flex justify-center">
              <a
                href={MEDIA_PACK_PDF}
                download
                className="inline-flex items-center gap-3 px-8 py-3 bg-magenta text-white font-heading tracking-widest uppercase text-sm hover:bg-magenta/90 transition-all"
              >
                <Download size={18} />
                Download Media Pack (PDF)
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-full max-w-xs mx-auto md:mx-0 md:w-56 flex-shrink-0">
                <img
                  src={helenaHeadshot}
                  alt="Helena Nicklin"
                  className="w-full h-64 md:h-72 object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
              </div>
              <div className="min-w-0">
                <h2 className="mb-3 text-2xl md:text-3xl">Helena Nicklin</h2>
                <p className="plum-quote mb-4 text-sm md:text-base">
                  Multi award-winning drinks writer, broadcaster, judge &amp; educator who helps drinks and lifestyle brands engage with and find new consumers, through shareable content and personal tastings.
                </p>
                <p className="text-foreground/70 mb-3 text-sm md:text-base leading-relaxed">
                  Helena Nicklin is an award-winning drinks writer, broadcaster, consultant, international wine and spirits judge, and a member of the acclaimed professional group, Les Dames d'Escoffier.
                </p>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  With twenty-five years of industry experience and the WSET diploma under her belt, Helena has sold wine on the shop floor, worked for a famous wine magazine, been part of the commercial buying team at a royal warrant-holding wine merchant, and co-produced and co-presented three drinks travelogue TV shows for Amazon Prime. She is the expert DJ Chris Evans uses at his charity events, and was the first expert to work with TV's Alan Carr on his new video podcast, Bottoms Up.
                </p>
              </div>
            </div>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed mt-6">
              Find her on socials <span className="font-semibold text-foreground">@HelenaSips</span>, and writing regularly for the Daily Mail and The Sun, as well as BA's High Life Magazine, Luxury Lifestyle Magazine and others.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Awards */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-6">Awards &amp; Accolades</h2>
            <div className="space-y-0">
              {accolades.map((a, i) => (
                <div key={i} className={`flex items-baseline gap-4 py-2.5 ${i !== accolades.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0 translate-y-[-2px]" />
                  <p className="text-foreground/80 text-sm">
                    <span className="font-heading font-semibold text-foreground">{a.title}</span> — {a.detail}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Work with Helena */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-8">Work with Helena</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workWithHelena.map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card p-8 border border-border h-full">
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-foreground/60">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Audience */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-2">Digital Audience</h2>
            <p className="text-center text-foreground/50 text-sm mb-8">As of July 2026</p>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {audienceStatsPrimary.map((s, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="bg-card p-6 border border-border h-full">
                  <p className="font-heading font-bold text-3xl text-magenta mb-2">{s.num}</p>
                  <p className="font-semibold mb-1">{s.platform}</p>
                  <p className="text-foreground/50 text-sm">{s.sub}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {audienceStatsSecondary.map((s, i) => (
              <FadeInSection key={i} delay={(i + 3) * 0.05}>
                <div className="bg-card p-6 border border-border h-full">
                  <p className="font-heading font-bold text-3xl text-magenta mb-2">{s.num}</p>
                  <p className="font-semibold mb-1">{s.platform}</p>
                  <p className="text-foreground/50 text-sm">{s.sub}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-4">Digital Collaboration Rates</h2>
            <p className="text-center text-foreground/60 mb-8">
              Bespoke campaigns are available to suit set client budgets. For smaller projects, here's a general price guide. Bundles attract savings.
            </p>
          </FadeInSection>
          <div className="space-y-4">
            {rates.map((r, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="flex justify-between items-center gap-6 bg-card border border-border p-6">
                  <div>
                    <h3 className="text-lg mb-1">{r.title}</h3>
                    <p className="text-foreground/60 text-sm">{r.desc}</p>
                  </div>
                  <p className="font-heading font-bold text-2xl text-magenta flex-shrink-0 whitespace-nowrap">{r.price}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={0.4}>
            <p className="plum-quote mt-8">
              Clients are always front of mind for editorial slots across podcast, TV, radio or written editorial where they naturally fit.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src={hsPodcastLogo} alt="The HelenaSips Podcast" className="w-14 h-14 rounded object-cover" />
              <h2>The HelenaSips Podcast</h2>
            </div>
            <p className="text-center text-foreground/60 max-w-xl mx-auto mb-4">
              Conversations with successful creatives about sensory memories and what makes them tick.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <PodcastGuestCarousel />
            <p className="text-center text-foreground/50 text-sm mt-6 mb-8">
              Series 1 also featured Laurence Llewelyn-Bowen, Sarah McCartney, Tom Gilbey &amp; Michael Perry ('Mr Plant Geek').
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
            <FadeInSection delay={0.15}>
              <div className="h-[26rem]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 20, right: 60, bottom: 20, left: 60 }}>
                    <Pie
                      data={audienceRegions}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      paddingAngle={2}
                      stroke="#fdf9f4"
                      strokeWidth={2}
                      label={renderAudienceLabel}
                      labelLine={{ stroke: "#9b9b9b", strokeWidth: 1 }}
                    >
                      {audienceRegions.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <h3 className="mb-4">Series One Audience</h3>
              <p className="text-foreground/70 leading-relaxed">
                Average unique listens per episode for Series One is currently <span className="font-heading font-bold text-2xl text-magenta">418</span>, putting it in the top 10% of non celebrity-hosted podcasts.
              </p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeInSection>
              <h3 className="mb-4">Sponsorship</h3>
              <p className="text-foreground/70 mb-4">
                Series 2 sponsorship includes a 30-second ad read by Helena at the start of each episode, with a brief sponsor shout-out halfway through, directing listeners to the show notes for brand information and a link to a longer-form article on helenasips.com. This article is also shared separately via socials.
              </p>
              <p className="text-foreground/70">
                Each episode has its own newsletter, where we can add banners, brand information and links back to the article. The brand's logo also features on the static social posts, with the brand tagged.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.15}>
              <h3 className="mb-4">Early-Bird Rates</h3>
              <p className="text-foreground/70 mb-6">As a new venture, first sponsors are rewarded with lower early-bird rates:</p>
              <div className="grid grid-cols-3 gap-3">
                {podcastRates.map((r, i) => (
                  <div key={i} className="bg-primary text-primary-foreground p-4 text-center">
                    <p className="font-heading font-bold text-xl">{r.price}</p>
                    <p className="text-xs uppercase tracking-wider opacity-80 mt-1">{r.label}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Supper Club */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2 className="text-center mb-6">Bottles &amp; Bites Supper Club Masterclasses</h2>
            <img src={supperClubImg} alt="Bottles & Bites supper club masterclass" className="w-full h-80 object-cover mb-8" />
          </FadeInSection>
          <FadeInSection>
            <p className="text-foreground/70">
              Helena hosts exclusive, consumer-focused Bottles &amp; Bites drinks masterclasses with food on the Isle of Wight. As part of this, your brand will get:
            </p>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <ul className="space-y-3 text-foreground/70 mt-6">
              {supperClubIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-magenta mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="mt-8 bg-primary text-primary-foreground p-6 flex flex-wrap justify-between items-center gap-3">
              <span>Per masterclass</span>
              <span className="font-heading font-bold text-3xl">£2,495</span>
              <span className="opacity-80 text-sm">plus stock (3 bottles of each wine shown)</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-accent font-heading tracking-widest uppercase text-sm mb-4">Let's Work Together</p>
            <h2 className="mb-8">Helena Nicklin</h2>
            <div className="space-y-3 text-lg mb-2 max-w-md mx-auto text-left">
              <div className="flex justify-between border-b border-primary-foreground/15 pb-3">
                <span className="opacity-60 text-sm uppercase tracking-wider">Email</span>
                <a href="mailto:helena@helenasips.com" className="hover:opacity-80">helena@helenasips.com</a>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/15 pb-3">
                <span className="opacity-60 text-sm uppercase tracking-wider">Telephone</span>
                <span>07980 311 525</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/15 pb-3">
                <span className="opacity-60 text-sm uppercase tracking-wider">Personal Site</span>
                <span>helenanicklin.com</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/15 pb-3">
                <span className="opacity-60 text-sm uppercase tracking-wider">Magazine</span>
                <span>helenasips.com</span>
              </div>
              <div className="flex justify-between pb-3">
                <span className="opacity-60 text-sm uppercase tracking-wider">Social</span>
                <span>@HelenaSips</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default MediaKitPage;
