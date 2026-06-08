import { useState } from "react";
import FadeInSection from "../components/FadeInSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", eventType: "Sensory Salon", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:helena@helenasips.com?subject=Enquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nEvent Type: ${formData.eventType}\n\n${formData.message}`
    )}`;
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-magenta font-heading tracking-widest uppercase text-sm mb-4 text-center">Connect</p>
            <h1 className="text-center mb-4">Let's Connect</h1>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
              Whether you want to get your brand in front of real wine drinkers and liquid on customer lips - or are interested in a content partnership or podcast sponsorship, I'd love to hear from you.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <FadeInSection>
              <h2 className="text-2xl mb-6">Get In Touch</h2>
              <p className="text-foreground/70 mb-8">Reach out directly to discuss your event or partnership.</p>
              <a href="mailto:helena@helenasips.com" className="text-magenta hover:text-magenta/80 transition-colors text-lg">
                helena@helenasips.com
              </a>
              <p className="mt-4">
                <a href="https://instagram.com/helenasips" target="_blank" rel="noopener noreferrer" className="text-magenta hover:text-magenta/80 transition-colors">
                  @helenasips
                </a>
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <h2 className="text-2xl mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Name", key: "name", type: "text" },
                  { label: "Email", key: "email", type: "email" },
                  { label: "Company / Organisation", key: "company", type: "text" },
                ].map(({ label, key, type }) => (
                  <div key={key}>
                    <label className="block text-sm font-heading tracking-wider text-foreground/70 mb-2">{label}</label>
                    <input
                      type={type}
                      value={formData[key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                      required={key !== "company"}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-heading tracking-wider text-foreground/70 mb-2">Contacting about...</label>
                  <input
                    type="text"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading tracking-wider text-foreground/70 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent resize-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full px-8 py-3 bg-primary text-primary-foreground font-heading tracking-wider hover:bg-primary/90 transition-all">
                  Send Enquiry
                </button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
