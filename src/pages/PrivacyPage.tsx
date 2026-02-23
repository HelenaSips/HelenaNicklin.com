import FadeInSection from "../components/FadeInSection";

const PrivacyPage = () => (
  <div className="pt-20">
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          <h1 className="mb-10">Privacy Policy</h1>
          <div className="prose prose-lg text-foreground/80 space-y-6">
            <p><strong>Last updated:</strong> February 2026</p>
            <h2 className="text-2xl mt-8 mb-4">What Data We Collect</h2>
            <p>We may collect the following information: your name, email address, company name and any information you provide through our contact forms or newsletter signup.</p>
            <h2 className="text-2xl mt-8 mb-4">How We Use Your Data</h2>
            <p>We use your information to respond to enquiries, send our newsletter (if you've subscribed), and manage event bookings. We will never sell your data to third parties.</p>
            <h2 className="text-2xl mt-8 mb-4">Who Processes Your Data?</h2>
            <p>Your email address is collected directly through this website and stored securely by HelenaSips. We use <strong>Substack</strong>, a third-party email platform, to send you newsletters and updates.</p>
            <p><strong>International Data Transfers:</strong> Substack is a US-based company. When we transfer your email address to Substack, your data may be processed outside the UK/EEA. Substack has appropriate safeguards in place to protect your data and complies with international data protection standards. You can review Substack's privacy policy and data protection measures at: <a href="https://substack.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">substack.com/privacy</a></p>
            <h2 className="text-2xl mt-8 mb-4">How We Protect Your Data</h2>
            <p>We take reasonable measures to protect your personal information. Your data is stored securely and accessed only for the purposes stated above.</p>
            <h2 className="text-2xl mt-8 mb-4">Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. You can unsubscribe from our newsletter using the link in any email. To exercise your rights, contact us at helena@helenasips.com.</p>
            <h3 className="text-xl mt-6 mb-3"><strong>Right to Complain</strong></h3>
            <p>If you have any concerns about how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection authority.</p>
            <p><strong>ICO Contact Details:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">ico.org.uk</a></li>
              <li>Helpline: 0303 123 1113</li>
              <li>Address: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</li>
            </ul>
            <h2 className="text-2xl mt-8 mb-4">Cookies</h2>
            <p>This website may use basic analytics cookies to understand how visitors use the site. No advertising cookies are used.</p>
            <h2 className="text-2xl mt-8 mb-4">Contact</h2>
            <p>For any data-related queries, please contact: <a href="mailto:helena@helenasips.com" className="text-accent hover:text-accent/80">helena@helenasips.com</a></p>
          </div>
        </FadeInSection>
      </div>
    </section>
  </div>
);

export default PrivacyPage;
