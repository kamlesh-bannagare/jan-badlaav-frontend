import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('privacyPolicyTitle')}
        </h1>

        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">{t('privacyLastUpdated')}</p>

            <h2>1. {t('privacyIntro')}</h2>
            <p>{t('privacyIntroText')}</p>

            <h2>2. {t('privacyInfoCollect')}</h2>
            <p>{t('privacyInfoCollectText')}</p>
            <ul>
              <li>{t('privacyInfoItem1')}</li>
              <li>{t('privacyInfoItem2')}</li>
              <li>{t('privacyInfoItem3')}</li>
              <li>{t('privacyInfoItem4')}</li>
            </ul>

            <h2>3. {t('privacyUseInfo')}</h2>
            <p>{t('privacyUseInfoText')}</p>
            <ul>
              <li>{t('privacyUseItem1')}</li>
              <li>{t('privacyUseItem2')}</li>
              <li>{t('privacyUseItem3')}</li>
              <li>{t('privacyUseItem4')}</li>
            </ul>

            <h2>4. {t('privacyDataSecurity')}</h2>
            <p>{t('privacyDataSecurityText')}</p>

            <h2>5. {t('privacyRights')}</h2>
            <p>{t('privacyRightsText')}</p>
            <ul>
              <li>{t('privacyRightItem1')}</li>
              <li>{t('privacyRightItem2')}</li>
              <li>{t('privacyRightItem3')}</li>
              <li>{t('privacyRightItem4')}</li>
            </ul>

            <h2>6. {t('privacyContact')}</h2>
            <p>{t('privacyContactText')}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
