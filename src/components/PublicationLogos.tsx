interface Publication {
  name: string;
  logo?: string; // path to SVG/PNG in public/logos/
}

const publications: Publication[] = [
  { name: "Daily Mail", logo: "/logos/daily-mail.svg" },
  { name: "The Sun", logo: "/logos/the-sun.jpg" },
  { name: "Decanter", logo: "/logos/decanter.png" },
  { name: "BA High Life", logo: "/logos/british-airways.svg" },
  { name: "Delicious Magazine", logo: "/logos/delicious.png" },
  { name: "BBC Radio 4", logo: "/logos/bbc.svg" },
  { name: "GB News", logo: "/logos/gb-news.png" },
  { name: "Talk TV", logo: "/logos/talktv.jpeg" },
  { name: "Amazon Prime", logo: "/logos/amazon-prime.svg" },
  { name: "Luxury Lifestyle Magazine" },
  { name: "The Tonic" },
  { name: "Bottoms Up! with Alan Carr", logo: "/logos/bottoms-up.png" },
  { name: "Style of Wight", logo: "/logos/style-of-wight.jpeg" },
  { name: "Isle of Wight Literary Festival" },
];

interface PublicationLogosProps {
  /** Show a subset of publications (for homepage) */
  subset?: string[];
  className?: string;
}

const PublicationLogos = ({ subset, className = "" }: PublicationLogosProps) => {
  const items = subset
    ? publications.filter((p) => subset.includes(p.name))
    : publications;

  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 md:gap-6 ${className}`}>
      {items.map((pub) =>
        pub.logo ? (
          <div key={pub.name} className={`flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity ${pub.name === "The Sun" ? "h-8 md:h-10" : pub.name === "Bottoms Up! with Alan Carr" ? "h-20 md:h-24" : pub.name === "Daily Mail" ? "h-20 md:h-24" : pub.name === "Amazon Prime" ? "h-16 md:h-20" : "h-10 md:h-12"}`} title={pub.name}>
            <img
              src={pub.logo}
              alt={pub.name}
              className={`h-full w-auto object-contain ${pub.name === "The Sun" ? "max-w-[100px]" : pub.name === "Bottoms Up! with Alan Carr" ? "max-w-[200px]" : pub.name === "Daily Mail" ? "max-w-[280px]" : pub.name === "Amazon Prime" ? "max-w-[200px]" : "max-w-[140px]"}`}
            />
          </div>
        ) : (
          <span
            key={pub.name}
            className="font-heading text-base md:text-lg tracking-wider text-foreground/40 hover:text-foreground/70 transition-colors whitespace-nowrap"
          >
            {pub.name}
          </span>
        )
      )}
    </div>
  );
};

export default PublicationLogos;
