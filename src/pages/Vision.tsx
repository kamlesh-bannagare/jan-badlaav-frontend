import { Target, Lightbulb, TrendingUp, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Vision = () => {
  const { t } = useLanguage();

  const visionPoints = [
    {
      icon: Target,
      title: 'Economic Empowerment',
      titleMr: 'आर्थिक सक्षमीकरण',
      titleHi: 'आर्थिक सशक्तिकरण',
      description: 'Creating job opportunities and supporting entrepreneurship for sustainable economic growth',
      descriptionMr: 'शाश्वत आर्थिक विकासासाठी रोजगाराच्या संधी निर्माण करणे आणि उद्योजकतेला पाठिंबा देणे',
      descriptionHi: 'सतत आर्थिक विकास के लिए रोजगार के अवसर पैदा करना और उद्यमिता का समर्थन करना',
    },
    {
      icon: Lightbulb,
      title: 'Quality Education',
      titleMr: 'दर्जेदार शिक्षण',
      titleHi: 'गुणवत्ता शिक्षा',
      description: 'Ensuring accessible and quality education for all children regardless of their background',
      descriptionMr: 'त्यांच्या पार्श्वभूमीची पर्वा न करता सर्व मुलांसाठी प्रवेशयोग्य आणि दर्जेदार शिक्षण सुनिश्चित करणे',
      descriptionHi: 'पृष्ठभूमि की परवाह किए बिना सभी बच्चों के लिए सुलभ और गुणवत्तापूर्ण शिक्षा सुनिश्चित करना',
    },
    {
      icon: TrendingUp,
      title: 'Infrastructure Development',
      titleMr: 'पायाभूत सुविधा विकास',
      titleHi: 'बुनियादी ढांचा विकास',
      description: 'Building modern infrastructure that connects rural and urban areas seamlessly',
      descriptionMr: 'ग्रामीण आणि शहरी भागांना सहजतेने जोडणारी आधुनिक पायाभूत सुविधा तयार करणे',
      descriptionHi: 'आधुनिक बुनियादी ढांचे का निर्माण जो ग्रामीण और शहरी क्षेत्रों को सहजता से जोड़े',
    },
    {
      icon: Scale,
      title: 'Social Justice',
      titleMr: 'सामाजिक न्याय',
      titleHi: 'सामाजिक न्याय',
      description: 'Ensuring equal rights and opportunities for all sections of society',
      descriptionMr: 'समाजाच्या सर्व घटकांसाठी समान अधिकार आणि संधी सुनिश्चित करणे',
      descriptionHi: 'समाज के सभी वर्गों के लिए समान अधिकार और अवसर सुनिश्चित करना',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('visionTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('visionMissionText')}
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">{t('visionMission')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('visionMissionText')}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision Points */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <Card className="border-2 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">{t('visionValues')}</h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                {t('visionValuesText')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Transparency</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                  <p className="text-muted-foreground">Accessibility</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <p className="text-muted-foreground">Commitment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Vision;
