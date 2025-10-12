import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('termsConditions')}
        </h1>

        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Janta Badlaav website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Membership</h2>
            <p>
              Membership in Janta Badlaav is subject to approval. All members must:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Adhere to our code of conduct</li>
              <li>Support the principles and values of the movement</li>
              <li>Participate in good faith</li>
            </ul>

            <h2>3. User Conduct</h2>
            <p>Users agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Harass, abuse, or harm others</li>
              <li>Distribute spam or unsolicited communications</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including logos, images, and text, is the property of Janta Badlaav and is protected by copyright and other intellectual property laws.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Janta Badlaav shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>

            <h2>6. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at contact@jantabadlaav.org
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsConditions;
