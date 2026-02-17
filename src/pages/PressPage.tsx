import FadeInSection from "../components/FadeInSection";
import PublicationLogos from "../components/PublicationLogos";
import bottomsUpImg from "../assets/bottoms-up-alan-carr.jpg";
import baHighLifeImg from "../assets/ba-high-life.jpg";
import samNeillImg from "../assets/delicious-sam-neill.jpg";
import dailyMailImg from "../assets/daily-mail-easter.jpg";
import sunDryJanImg from "../assets/sun-dry-january.jpg";
import sunCheapFizzImg from "../assets/sun-cheap-fizz.jpg";
import threeDrinkersCognacImg from "../assets/three-drinkers-cognac.jpg";
import threeDrinkersWhiskyImg from "../assets/three-drinkers-whisky.jpg";
import bornToRumImg from "../assets/born-to-rum.png";

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
            <a href="https://www.youtube.com/watch?v=0SH1XzC0ynQ&t=1232s" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md">
              <img src={bottomsUpImg} alt="Bottoms Up with Alan Carr" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
            </a>
            <div className="mt-8 flex justify-start gap-4">
              <img src={baHighLifeImg} alt="BA High Life Magazine feature" className="w-1/2 rounded-md object-contain" />
              <img src={samNeillImg} alt="Sam Neill Delicious magazine feature" className="w-1/2 rounded-md object-contain" />
            </div>
            <div className="mt-4">
              <img src={dailyMailImg} alt="Daily Mail Easter Wine Guide by Helena Nicklin" className="w-full rounded-md" />
            </div>
            <div className="mt-4 flex gap-4">
              <img src={threeDrinkersCognacImg} alt="The Three Drinkers in Cognac - Amazon Prime" className="w-1/2 rounded-md object-contain" />
              <img src={threeDrinkersWhiskyImg} alt="The Three Drinkers Do Scotch Whisky" className="w-1/2 rounded-md object-contain" />
            </div>
            <div className="mt-4 flex gap-4">
              <img src={sunDryJanImg} alt="The Sun - Dry January drinks feature by Helena Nicklin" className="w-1/2 rounded-md object-contain" />
              <img src={sunCheapFizzImg} alt="The Sun - Cheap Fizz champagne alternatives feature" className="w-1/2 rounded-md object-contain" />
            </div>
            <div className="mt-4">
              <img src={bornToRumImg} alt="Born to Rum - Helena Nicklin rum tasting feature" className="w-full rounded-md" />
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
