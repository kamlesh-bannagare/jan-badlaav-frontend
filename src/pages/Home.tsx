import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, BookOpen, Handshake, Award, TrendingUp, MessageSquare, CheckCircle2, Building2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBanner from '@/assets/hero-banner.jpg';
import founder from '@/assets/founder.jpeg';
import logo from '@/assets/logo.jpg';
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const { t } = useLanguage();

  const heroImages = [heroBanner, founder, logo];

  const values = [
    {
      icon: Users,
      title: t('visionMission'),
      description: t('visionMissionText'),
    },
    {
      icon: Target,
      title: t('visionValues'),
      description: t('visionValuesText'),
    },
    {
      icon: Heart,
      title: t('aboutTitle'),
      description: t('aboutDescription'),
    },
  ];

  const focusAreas = [
    {
      icon: GraduationCap,
      title: t('focusEducation'),
      description: t('focusEducationText'),
    },
    {
      icon: Building2,
      title: t('focusInfrastructure'),
      description: t('focusInfrastructureText'),
    },
    {
      icon: Handshake,
      title: t('focusEmployment'),
      description: t('focusEmploymentText'),
    },
    {
      icon: Heart,
      title: t('focusHealthcare'),
      description: t('focusHealthcareText'),
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: t('achievement1Number'),
      title: t('achievement1Title'),
    },
    {
      icon: Award,
      number: t('achievement2Number'),
      title: t('achievement2Title'),
    },
    {
      icon: Target,
      number: t('achievement3Number'),
      title: t('achievement3Title'),
    },
    {
      icon: TrendingUp,
      number: t('achievement4Number'),
      title: t('achievement4Title'),
    },
  ];

  const wayToJoin = [
    {
      icon: CheckCircle2,
      title: t('wayToJoin1'),
      description: t('wayToJoin1Text'),
    },
    {
      icon: MessageSquare,
      title: t('wayToJoin2'),
      description: t('wayToJoin2Text'),
    },
    {
      icon: BookOpen,
      title: t('wayToJoin3'),
      description: t('wayToJoin3Text'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Carousel 
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="absolute inset-0">
                  <img 
                    src={image} 
                    alt={`Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20" />
        </Carousel>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold animate-fade-in">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/join">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                {t('joinMovement')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20">
                {t('learnMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('focusAreasTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('focusAreasSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('achievementsTitle')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('achievementsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <p className="text-lg font-semibold">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('founderSectionTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('founderSectionText1')}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t('founderSectionText2')}
              </p>
              <Link to="/founder">
                <Button size="lg" className="shadow-lg">
                  {t('learnMoreFounder')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
                <img
                  src={heroBanner}
                  alt={t('founderName')}
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('howToJoinTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('howToJoinSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {wayToJoin.map((way, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <way.icon className="h-8 w-8 text-primary" />
                  </div>
                  {index < wayToJoin.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-primary/20"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3">{way.title}</h3>
                <p className="text-muted-foreground">{way.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/join">
              <Button size="lg" className="shadow-lg">
                {t('startJourney')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('testimonialTitle')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('testimonialSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{t(`testimonialName${i}`)}</p>
                      <p className="text-sm text-muted-foreground">{t(`testimonialRole${i}`)}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{t(`testimonialText${i}`)}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('joinTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('joinDescription')}
          </p>
          <Link to="/join">
            <Button size="lg" variant="secondary" className="shadow-lg">
              {t('becomeMember')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
