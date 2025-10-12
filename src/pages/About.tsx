import { Users, Shield, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Users,
      title: 'People First',
      titleMr: 'लोक प्रथम',
      titleHi: 'लोग पहले',
      description: 'We prioritize the needs and aspirations of every citizen',
      descriptionMr: 'आम्ही प्रत्येक नागरिकाच्या गरजा आणि आकांक्षांना प्राधान्य देतो',
      descriptionHi: 'हम हर नागरिक की जरूरतों और आकांक्षाओं को प्राथमिकता देते हैं',
    },
    {
      icon: Shield,
      title: 'Transparency',
      titleMr: 'पारदर्शकता',
      titleHi: 'पारदर्शिता',
      description: 'Open and honest governance is our commitment',
      descriptionMr: 'खुले आणि प्रामाणिक शासन हे आमचे वचन आहे',
      descriptionHi: 'खुली और ईमानदार शासन हमारी प्रतिबद्धता है',
    },
    {
      icon: Award,
      title: 'Merit-Based',
      titleMr: 'गुणवत्ता आधारित',
      titleHi: 'योग्यता आधारित',
      description: 'Recognizing talent and capability over everything',
      descriptionMr: 'सर्वांपेक्षा प्रतिभा आणि क्षमता ओळखणे',
      descriptionHi: 'सब कुछ से ऊपर प्रतिभा और क्षमता को पहचानना',
    },
    {
      icon: Globe,
      title: 'Inclusive Growth',
      titleMr: 'समावेशक विकास',
      titleHi: 'समावेशी विकास',
      description: 'Development that reaches every corner of society',
      descriptionMr: 'समाजाच्या प्रत्येक कोपऱ्यापर्यंत पोहोचणारा विकास',
      descriptionHi: 'विकास जो समाज के हर कोने तक पहुंचे',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Janta Badlaav was born from a vision to transform the political landscape and create a movement that truly represents the aspirations of the common people. Founded by Yash Gourkhede, this movement is built on the principles of social justice, equality, and sustainable development.
                </p>
                <p className="mb-4">
                  We believe that politics should be about serving the people, not personal gain. Our movement brings together individuals from diverse backgrounds who share a common goal - to build a better future for all citizens.
                </p>
                <p>
                  Through transparent governance, merit-based leadership, and inclusive policies, we aim to create a society where every voice is heard and every dream has the opportunity to be realized.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Principles Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
