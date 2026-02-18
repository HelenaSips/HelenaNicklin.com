interface Publication {
  name: string;
  logo?: string; // path to SVG/PNG in public/logos/
}

const publications: Publication[] = [
  { name: "Daily Mail", logo: "/logos/daily-mail.svg" },
  { name: "The Sun" },
  { name: "Decanter" },
  { name: "BA High Life", logo: "/logos/british-airways.svg" },
  { name: "Delicious Magazine" },
  { name: "BBC Radio 4", logo: "/logos/bbc.svg" },
  { name: "GB News", logo: "/logos/gb-news.png" },
  { name: "Talk TV" },
  { name: "Amazon Prime", logo: "/logos/amazon-prime.svg" },
  { name: "Luxury Lifestyle Magazine" },
  { name: "The Tonic" },
  { name: "Bottoms Up! with Alan Carr" },
  { name: "Style of Wight" },
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
    <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 ${className}`}>
      {items.map((pub) =>
        pub.logo ? (
          <div key={pub.name} className="flex items-center justify-center h-10 md:h-12 opacity-40 hover:opacity-70 transition-opacity grayscale" title={pub.name}>
            <img
              src={pub.logo}
              alt={pub.name}
              className="h-full w-auto max-w-[140px] object-contain"
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
