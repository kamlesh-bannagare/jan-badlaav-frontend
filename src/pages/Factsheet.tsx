import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Calendar } from "lucide-react";

const Factsheet = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      titleKey: 'factsheetMembers',
      valueKey: 'factsheetMembersValue',
      color: 'text-primary'
    },
    {
      icon: Target,
      titleKey: 'factsheetMission',
      valueKey: 'factsheetMissionValue',
      color: 'text-primary'
    },
    {
      icon: Award,
      titleKey: 'factsheetAchievements',
      valueKey: 'factsheetAchievementsValue',
      color: 'text-primary'
    },
    {
      icon: Calendar,
      titleKey: 'factsheetEstablished',
      valueKey: 'factsheetEstablishedValue',
      color: 'text-primary'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t('factsheetTitle')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('factsheetSubtitle')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="font-semibold text-lg mb-2">{t(stat.titleKey)}</h3>
                  <p className="text-2xl font-bold text-primary">{t(stat.valueKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Facts */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t('factsheetAboutTitle')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t('factsheetAboutText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('factsheetAboutText2')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t('factsheetGoalsTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{t('factsheetGoal1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{t('factsheetGoal2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{t('factsheetGoal3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{t('factsheetGoal4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{t('factsheetGoal5')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t('factsheetPrinciplesTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">{t('factsheetPrinciple1Title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('factsheetPrinciple1Text')}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">{t('factsheetPrinciple2Title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('factsheetPrinciple2Text')}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">{t('factsheetPrinciple3Title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('factsheetPrinciple3Text')}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">{t('factsheetPrinciple4Title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('factsheetPrinciple4Text')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Factsheet;
