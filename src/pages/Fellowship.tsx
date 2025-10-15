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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="container mx-auto max-w-6xl text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
            style={{
              fontFamily: '"Noto Sans Devanagari", "Poppins", sans-serif',
              lineHeight: '1.3',
              display: 'block',
              paddingTop: '1rem',
              paddingBottom: '0.5rem',
            }}
          >
            {t('fellowshipTitle')}
          </h1>

          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-8 opacity-90">
            {t('fellowshipSubtitle')}
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 bg-black text-yellow-400 hover:bg-gray-800 border-2 border-black"
          >
            {t('fellowshipApply')}
          </Button>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* About Fellowship */}
        <Card className="mb-12 border-2 border-yellow-400 bg-white">
          <CardHeader className="bg-yellow-400">
            <CardTitle className="text-2xl text-black">{t('fellowshipAboutTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <p className="text-gray-700 leading-relaxed">
              {t('fellowshipAboutText1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('fellowshipAboutText2')}
            </p>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">{t('fellowshipBenefitsTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-yellow-400 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-black">{t(benefit.titleKey)}</h3>
                  <p className="text-gray-600">{t(benefit.textKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <Card className="mb-12 border-2 border-yellow-400 bg-white">
          <CardHeader className="bg-yellow-400">
            <CardTitle className="text-2xl text-black">{t('fellowshipEligibilityTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {eligibility.map((key, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(key)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Program Details */}
        <Card className="mb-12 border-2 border-yellow-400 bg-white">
          <CardHeader className="bg-yellow-400">
            <CardTitle className="text-2xl text-black">{t('fellowshipProgramTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                <h4 className="font-semibold text-lg mb-3 text-black">{t('fellowshipDurationTitle')}</h4>
                <p className="text-gray-700">{t('fellowshipDurationText')}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                <h4 className="font-semibold text-lg mb-3 text-black">{t('fellowshipFormatTitle')}</h4>
                <p className="text-gray-700">{t('fellowshipFormatText')}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                <h4 className="font-semibold text-lg mb-3 text-black">{t('fellowshipCurriculumTitle')}</h4>
                <p className="text-gray-700">{t('fellowshipCurriculumText')}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                <h4 className="font-semibold text-lg mb-3 text-black">{t('fellowshipMentorshipTitle')}</h4>
                <p className="text-gray-700">{t('fellowshipMentorshipText')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-yellow-400 rounded-lg p-12 border-2 border-black">
          <h2 className="text-3xl font-bold mb-4 text-black">{t('fellowshipCTATitle')}</h2>
          <p className="text-lg text-black mb-6 max-w-2xl mx-auto opacity-90">
            {t('fellowshipCTAText')}
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 bg-black text-yellow-400 hover:bg-gray-800 border-2 border-black"
          >
            {t('fellowshipApplyNow')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fellowship;