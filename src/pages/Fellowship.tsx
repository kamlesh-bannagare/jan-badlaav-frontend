import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, CheckCircle2 } from "lucide-react";

const Fellowship = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: GraduationCap,
      titleKey: 'fellowshipBenefit1Title',
      textKey: 'fellowshipBenefit1Text'
    },
    {
      icon: BookOpen,
      titleKey: 'fellowshipBenefit2Title',
      textKey: 'fellowshipBenefit2Text'
    },
    {
      icon: Users,
      titleKey: 'fellowshipBenefit3Title',
      textKey: 'fellowshipBenefit3Text'
    }
  ];

  const eligibility = [
    'fellowshipEligibility1',
    'fellowshipEligibility2',
    'fellowshipEligibility3',
    'fellowshipEligibility4',
    'fellowshipEligibility5'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('fellowshipTitle')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('fellowshipSubtitle')}
          </p>
          <Button size="lg" className="text-lg px-8">
            {t('fellowshipApply')}
          </Button>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* About Fellowship */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">{t('fellowshipAboutTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t('fellowshipAboutText1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('fellowshipAboutText2')}
            </p>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">{t('fellowshipBenefitsTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-xl mb-3">{t(benefit.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(benefit.textKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">{t('fellowshipEligibilityTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {eligibility.map((key, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{t(key)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Program Details */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">{t('fellowshipProgramTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">{t('fellowshipDurationTitle')}</h4>
                <p className="text-muted-foreground">{t('fellowshipDurationText')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">{t('fellowshipFormatTitle')}</h4>
                <p className="text-muted-foreground">{t('fellowshipFormatText')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">{t('fellowshipCurriculumTitle')}</h4>
                <p className="text-muted-foreground">{t('fellowshipCurriculumText')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">{t('fellowshipMentorshipTitle')}</h4>
                <p className="text-muted-foreground">{t('fellowshipMentorshipText')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">{t('fellowshipCTATitle')}</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('fellowshipCTAText')}
          </p>
          <Button size="lg" className="text-lg px-8">
            {t('fellowshipApplyNow')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fellowship;
