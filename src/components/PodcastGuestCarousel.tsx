import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import guestSamNeill from "@/assets/guest-sam-neill.jpg";
import guestJoanneHarris from "@/assets/guest-joanne-harris.jpg";
import guestCathKidston from "@/assets/guest-cath-kidston.png";
import guestVassosAlexander from "@/assets/guest-vassos-alexander.jpg";
import guestAlexWatson from "@/assets/guest-alex-watson.jpg";
import guestJessEnnisHill from "@/assets/guest-jess-ennis-hill.png";

const guests = [
  { name: "Sam Neill", role: "Actor", img: guestSamNeill },
  { name: "Joanne Harris", role: "Author", img: guestJoanneHarris },
  { name: "Cath Kidston", role: "Designer", img: guestCathKidston },
  { name: "Vassos Alexander", role: "Broadcaster & Writer", img: guestVassosAlexander },
  { name: "Alex Watson", role: "Gin Maker", img: guestAlexWatson },
  { name: "Dame Jess Ennis-Hill", role: "Olympic Champion", img: guestJessEnnisHill },
];

const PodcastGuestCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const advance = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % guests.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 3000);
    return () => clearInterval(interval);
  }, [advance]);

  const getVisibleGuests = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(guests[(startIndex + i) % guests.length]);
    }
    return visible;
  };

  const visibleGuests = getVisibleGuests();

  return (
    <div className="mt-10 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {visibleGuests.map((guest) => (
            <motion.div
              key={guest.name}
              layout
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="group text-center"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 bg-muted border-2 border-magenta">
                <img
                  src={guest.img}
                  alt={guest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-heading tracking-widest uppercase text-sm group-hover:text-magenta transition-colors">
                {guest.name}
              </p>
              <p className="font-body text-foreground/70 mt-1">{guest.role}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PodcastGuestCarousel;
