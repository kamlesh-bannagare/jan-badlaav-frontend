import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('privacyPolicy')}
        </h1>

        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Janta Badlaav ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our political movement.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Demographic information (city, state, region)</li>
              <li>Volunteer and membership information</li>
              <li>Communication preferences</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process membership applications</li>
              <li>Communicate about events, campaigns, and initiatives</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at contact@jantabadlaav.org
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
