import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('termsConditionsTitle')}
        </h1>

        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">{t('termsLastUpdated')}</p>

            <h2>1. {t('termsAcceptance')}</h2>
            <p>{t('termsAcceptanceText')}</p>

            <h2>2. {t('termsMembership')}</h2>
            <p>{t('termsMembershipText')}</p>
            <ul>
              <li>{t('termsMemberItem1')}</li>
              <li>{t('termsMemberItem2')}</li>
              <li>{t('termsMemberItem3')}</li>
              <li>{t('termsMemberItem4')}</li>
            </ul>

            <h2>3. {t('termsConduct')}</h2>
            <p>{t('termsConductText')}</p>
            <ul>
              <li>{t('termsConductItem1')}</li>
              <li>{t('termsConductItem2')}</li>
              <li>{t('termsConductItem3')}</li>
              <li>{t('termsConductItem4')}</li>
            </ul>

            <h2>4. {t('termsIP')}</h2>
            <p>{t('termsIPText')}</p>

            <h2>5. {t('termsLiability')}</h2>
            <p>{t('termsLiabilityText')}</p>

            <h2>6. {t('termsModifications')}</h2>
            <p>{t('termsModificationsText')}</p>

            <h2>7. {t('termsContactInfo')}</h2>
            <p>{t('termsContactInfoText')}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsConditions;
