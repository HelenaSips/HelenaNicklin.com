import FadeInSection from "./FadeInSection";
import { FAQS } from "@/seo";

const FaqSection = ({ page, className = "" }: { page: string; className?: string }) => {
  const faqs = FAQS[page];
  if (!faqs) return null;
  return (
    <section className={`section-padding ${className}`}>
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          <h2 className="text-center mb-10">Questions</h2>
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-heading text-lg">
                  {f.q}
                  <span className="text-magenta transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="text-foreground/70 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FaqSection;
