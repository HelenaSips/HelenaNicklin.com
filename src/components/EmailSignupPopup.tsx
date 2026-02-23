import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const EmailSignupPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [consentError, setConsentError] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("emailPopupSeen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("emailPopupSeen", "true");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setConsentError(false);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (!consent) {
      setConsentError(true);
      return;
    }

    // For now, log the data. Integration with Substack or backend can be added later.
    console.log("Email signup:", { email, location, consent, timestamp: new Date().toISOString() });
    setSubmitted(true);
    setTimeout(close, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/50" />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[500px] bg-background border-2 border-primary rounded-lg p-8 md:p-10 shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-plum hover:text-primary transition-colors cursor-pointer"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            {submitted ? (
              /* Success state */
              <div className="text-center py-6">
                <h3 className="text-2xl md:text-3xl mb-4">Thank You!</h3>
                <p className="text-foreground/70">
                  You're on the list. Keep an eye on your inbox for event updates and drinks wisdom.
                </p>
              </div>
            ) : (
              /* Form */
              <>
                <h3 className="text-2xl md:text-[28px] font-semibold mb-4">
                  Stay in the Loop
                </h3>
                <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6">
                  Subscribe for event updates and drinks wisdom from the HelenaSips Magazine
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="popup-email" className="sr-only">Email address</label>
                    <input
                      id="popup-email"
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder:text-muted-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary/50 text-base"
                    />
                    {error && (
                      <p className="text-destructive text-sm mt-1">{error}</p>
                    )}
                  </div>

                  {/* IoW Dropdown */}
                  <div>
                    <label htmlFor="popup-iow" className="block text-sm mb-1.5 text-foreground/70">
                      Are you based on the Isle of Wight?
                    </label>
                    <select
                      id="popup-iow"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-border bg-card text-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary/50 text-base appearance-none"
                    >
                      <option value="" disabled>Select…</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  {/* Consent checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => { setConsent(e.target.checked); setConsentError(false); }}
                        className="mt-1 w-[18px] h-[18px] shrink-0 rounded-sm border border-primary accent-primary cursor-pointer"
                      />
                      <span className="text-sm leading-relaxed text-foreground/70">
                        I consent to receive email updates from HelenaSips. You can unsubscribe anytime. See our{" "}
                        <Link to="/privacy" className="text-plum underline hover:text-primary" onClick={close}>
                          Privacy Policy
                        </Link>.
                      </span>
                    </label>
                    {consentError && (
                      <p className="text-destructive text-sm mt-1.5">
                        Please confirm you consent to receive emails
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground font-heading text-base tracking-wider rounded hover:bg-primary/90 hover:border hover:border-plum transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailSignupPopup;
