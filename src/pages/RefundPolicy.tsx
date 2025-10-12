import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const RefundPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('refundPolicy')}
        </h1>

        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025</p>

            <h2>1. General Policy</h2>
            <p>
              Janta Badlaav is committed to transparency in all financial matters. This policy outlines our approach to donations and contributions.
            </p>

            <h2>2. Donations</h2>
            <p>
              All donations to Janta Badlaav are voluntary contributions to support our political movement and activities. Please note:
            </p>
            <ul>
              <li>Donations are generally non-refundable</li>
              <li>All donations are used for political activities and movement building</li>
              <li>Donors receive confirmation receipts for all contributions</li>
            </ul>

            <h2>3. Membership Fees</h2>
            <p>
              If membership fees are charged:
            </p>
            <ul>
              <li>Fees are annual and non-transferable</li>
              <li>Refunds may be considered within 7 days of payment for valid reasons</li>
              <li>Refund requests must be submitted in writing</li>
            </ul>

            <h2>4. Refund Process</h2>
            <p>
              To request a refund (where applicable):
            </p>
            <ol>
              <li>Submit a written request to contact@jantabadlaav.org</li>
              <li>Include your transaction details and reason for refund</li>
              <li>Allow 14-21 business days for processing</li>
              <li>Refunds will be processed to the original payment method</li>
            </ol>

            <h2>5. Exceptions</h2>
            <p>
              Refunds may not be available for:
            </p>
            <ul>
              <li>Event tickets purchased for specific dates</li>
              <li>Donations made more than 30 days ago</li>
              <li>Services or materials already provided</li>
            </ul>

            <h2>6. Contact Us</h2>
            <p>
              For refund inquiries or questions about this policy, please contact us at contact@jantabadlaav.org
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RefundPolicy;
