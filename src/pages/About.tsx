import { Users, Shield, Award, Globe, Calendar, MapPin, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const About = () => {
  const { t, language } = useLanguage();

  const getLocalizedText = (item, field) => {
    if (language === 'mr') return item[`${field}Mr`] || item[field];
    if (language === 'hi') return item[`${field}Hi`] || item[field];
    return item[field];
  };

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

  const journey = [
    {
      year: '2013',
      title: 'Foundation',
      titleMr: 'स्थापना',
      titleHi: 'स्थापना',
      description: 'Janta Badlaav was founded with a vision for transformative politics',
      descriptionMr: 'परिवर्तनकारी राजकारणाच्या दृष्टीकोनातून जनता बदलाची स्थापना',
      descriptionHi: 'परिवर्तनकारी राजनीति के दृष्टिकोण से जनता बदलाव की स्थापना',
      image: '/images/foundation-2013.jpg',
      stats: { 
        members: 500, 
        districts: 2,
        membersMr: '५००',
        districtsMr: '२',
        membersHi: '५००',
        districtsHi: '२'
      }
    },
    {
      year: '2014',
      title: 'First Electoral Participation',
      titleMr: 'पहिला निवडणूक सहभाग',
      titleHi: 'पहला चुनावी भागीदारी',
      description: 'Contested local elections with focus on grassroots development',
      descriptionMr: 'तळागाळाच्या विकासावर लक्ष केंद्रित करून स्थानिक निवडणुका लढवल्या',
      descriptionHi: 'ग्रासरूट विकास पर ध्यान केंद्रित करके स्थानीय चुनाव लड़े',
      image: '/images/election-2014.jpg',
      stats: { 
        members: 2500, 
        districts: 5,
        membersMr: '२५००',
        districtsMr: '५',
        membersHi: '२५००',
        districtsHi: '५'
      }
    },
    {
      year: '2017',
      title: 'Statewide Expansion',
      titleMr: 'राज्यव्यापी विस्तार',
      titleHi: 'राज्यव्यापी विस्तार',
      description: 'Expanded presence across multiple districts with youth leadership',
      descriptionMr: 'युवा नेतृत्वासह अनेक जिल्ह्यांमध्ये उपस्थिती वाढवली',
      descriptionHi: 'युवा नेतृत्व के साथ कई जिलों में उपस्थिति बढ़ाई',
      image: '/images/expansion-2017.jpg',
      stats: { 
        members: 15000, 
        districts: 8,
        membersMr: '१५०००',
        districtsMr: '८',
        membersHi: '१५०००',
        districtsHi: '८'
      }
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      titleMr: 'डिजिटल परिवर्तन',
      titleHi: 'डिजिटल परिवर्तन',
      description: 'Launched digital initiatives for transparent governance',
      descriptionMr: 'पारदर्शक शासनासाठी डिजिटल उपक्रम सुरू केले',
      descriptionHi: 'पारदर्शी शासन के लिए डिजिटल पहल शुरू की',
      image: '/images/digital-2020.jpg',
      stats: { 
        members: 50000, 
        districts: 12,
        membersMr: '५००००',
        districtsMr: '१२',
        membersHi: '५००००',
        districtsHi: '१२'
      }
    },
    {
      year: '2023',
      title: 'National Recognition',
      titleMr: 'राष्ट्रीय ओळख',
      titleHi: 'राष्ट्रीय पहचान',
      description: 'Gained national attention for innovative governance models',
      descriptionMr: 'अभिनव शासन मॉडेलसाठी राष्ट्रीय लक्ष वेधले',
      descriptionHi: 'नवीन शासन मॉडल के लिए राष्ट्रीय ध्यान आकर्षित किया',
      image: '/images/national-2023.jpg',
      stats: { 
        members: 250000, 
        districts: 15,
        membersMr: '२५००००',
        districtsMr: '१५',
        membersHi: '२५००००',
        districtsHi: '१५'
      }
    }
  ];

  const achievements = [
    {
      icon: Target,
      metric: '50+',
      metricMr: '५०+',
      metricHi: '५०+',
      label: 'Villages Transformed',
      labelMr: 'परिवर्तित गावे',
      labelHi: 'परिवर्तित गाँव'
    },
    {
      icon: Users,
      metric: '1M+',
      metricMr: '१० लाख+',
      metricHi: '१० लाख+',
      label: 'Active Volunteers',
      labelMr: 'सक्रिय स्वयंसेवक',
      labelHi: 'सक्रिय स्वयंसेवक'
    },
    {
      icon: MapPin,
      metric: '15',
      metricMr: '१५',
      metricHi: '१५',
      label: 'Districts Covered',
      labelMr: 'समाविष्ट जिल्हे',
      labelHi: 'शामिल जिले'
    },
    {
      icon: TrendingUp,
      metric: '200%',
      metricMr: '२००%',
      metricHi: '२००%',
      label: 'Growth in Support',
      labelMr: 'आधारवाढ',
      labelHi: 'समर्थन में वृद्धि'
    }
  ];

  const leadership = [
    {
      name: 'Yash Gourkhede',
      nameMr: 'यश गौरखेडे',
      nameHi: 'यश गौरखेडे',
      role: 'Founder & National President',
      roleMr: 'संस्थापक आणि राष्ट्रीय अध्यक्ष',
      roleHi: 'संस्थापक और राष्ट्रीय अध्यक्ष',
      image: '/images/yash-gourkhede.jpg',
      description: 'Visionary leader with 15+ years of social service experience',
      descriptionMr: '१५+ वर्षांच्या सामाजिक सेवेच्या अनुभवासह दूरदर्शी नेते',
      descriptionHi: '१५+ वर्षों के सामाजिक सेवा अनुभव के साथ दूरदर्शी नेता'
    },
    {
      name: 'Dr. Priya Sharma',
      nameMr: 'डॉ. प्रिया शर्मा',
      nameHi: 'डॉ. प्रिया शर्मा',
      role: 'Women Empowerment Wing Head',
      roleMr: 'महिला सक्षमीकरण विभाग प्रमुख',
      roleHi: 'महिला सशक्तिकरण विंग प्रमुख',
      image: '/images/priya-sharma.jpg',
      description: 'Social activist and women rights advocate',
      descriptionMr: 'सामाजिक कार्यकर्ते आणि महिला हक्कांचे समर्थक',
      descriptionHi: 'सामाजिक कार्यकर्ता और महिला अधिकारों की वकील'
    },
    {
      name: 'Rajesh Kumar',
      nameMr: 'राजेश कुमार',
      nameHi: 'राजेश कुमार',
      role: 'Youth Wing President',
      roleMr: 'युवा विभाग अध्यक्ष',
      roleHi: 'युवा विंग अध्यक्ष',
      image: '/images/rajesh-kumar.jpg',
      description: 'Young dynamic leader focusing on youth engagement',
      descriptionMr: 'युवा जोडणीवर लक्ष केंद्रित करणारे तरुण गतिमान नेते',
      descriptionHi: 'युवा सगंठन पर ध्यान केंद्रित करने वाले युवा गतिशील नेता'
    },
    {
      name: 'Meera Deshpande',
      nameMr: 'मीरा देशपांडे',
      nameHi: 'मीरा देशपांडे',
      role: 'Policy Research Head',
      roleMr: 'धोरण संशोधन प्रमुख',
      roleHi: 'नीति अनुसंधान प्रमुख',
      image: '/images/meera-deshpande.jpg',
      description: 'Former bureaucrat with expertise in public policy',
      descriptionMr: 'सार्वजनिक धोरणातील तज्ज्ञ माजी अधिकारी',
      descriptionHi: 'सार्वजनिक नीति में विशेषज्ञता वाले पूर्व नौकरशाह'
    }
  ];

  const futureGoals = [
    {
      title: '2025 Vision',
      titleMr: '२०२५ दृष्टी',
      titleHi: '२०२५ विजन',
      subtitle: 'Expand to 5 more states',
      subtitleMr: '५ अधिक राज्यांमध्ये विस्तार',
      subtitleHi: '५ और राज्यों में विस्तार'
    },
    {
      title: 'Digital India',
      titleMr: 'डिजिटल इंडिया',
      titleHi: 'डिजिटल इंडिया',
      subtitle: '100% digital governance',
      subtitleMr: '१००% डिजिटल शासन',
      subtitleHi: '१००% डिजिटल शासन'
    },
    {
      title: 'Youth Empowerment',
      titleMr: 'युवा सक्षमीकरण',
      titleHi: 'युवा सशक्तिकरण',
      subtitle: '1 million youth leaders',
      subtitleMr: '१० लाख युवा नेते',
      subtitleHi: '१० लाख युवा नेता'
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Achievements Counter */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Card className="text-center border-2 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-primary/20">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {getLocalizedText(achievement, 'metric')}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {getLocalizedText(achievement, 'label')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'mr' ? 'आमची कहाणी' : 
                   language === 'hi' ? 'हमारी कहानी' : 'Our Story'}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    {language === 'mr' 
                      ? 'जनता बदलाचा जन्म राजकीय परिदृश्य बदलण्याच्या दृष्टिकोनातून झाला आणि सामान्य लोकांच्या आकांक्षांचे खरे प्रतिनिधित्व करणारी चळवळ तयार केली. यश गौरखेडे यांनी २०१३ मध्ये स्थापन केलेली ही चळवळ सामाजिक न्याय, समानता आणि शाश्वत विकास या तत्त्वांवर बांधली गेली आहे.'
                      : language === 'hi'
                      ? 'जनता बदलाव का जन्म राजनीतिक परिदृश्य को बदलने के दृष्टिकोण से हुआ और आम लोगों की आकांक्षाओं का वास्तविक प्रतिनिधित्व करने वाला आंदोलन बनाया। यश गौरखेडे द्वारा २०१३ में स्थापित यह आंदोलन सामाजिक न्याय, समानता और सतत विकास के सिद्धांतों पर बनाया गया है।'
                      : 'Janta Badlaav was born from a vision to transform the political landscape and create a movement that truly represents the aspirations of the common people. Founded by Yash Gourkhede in 2013, this movement is built on the principles of social justice, equality, and sustainable development.'
                    }
                  </p>
                  <p>
                    {language === 'mr'
                      ? 'गेल्या दशकात, आम्ही एका छोट्या तळागाळाच्या चळवळीतून एका महत्त्वाच्या राजकीय शक्तीत वाढ झाली आहोत, ज्याने अनेक राज्यांमधील लाखो लोकांच्या जीवनावर परिणाम केला आहे. आमचा प्रवास लोक-केंद्रित राजकारणाची शक्ती आणि वास्तविक बदल खालून वर येतो या विश्वासाचे प्रतिबिंब आहे.'
                      : language === 'hi'
                      ? 'पिछले दशक में, हम एक छोटे ग्रासरूट आंदोलन से एक महत्वपूर्ण राजनीतिक शक्ति में विकसित हुए हैं, जिसने कई राज्यों में लाखों लोगों के जीवन को प्रभावित किया है। हमारी यात्रा जन-केंद्रित राजनीति की शक्ति और इस विश्वास को दर्शाती है कि वास्तविक परिवर्तन जमीनी स्तर से आता है।'
                      : 'Over the past decade, we have grown from a small grassroots movement to a significant political force, impacting millions of lives across multiple states. Our journey reflects the power of people-centric politics and the belief that real change comes from the ground up.'
                    }
                  </p>
                  <p>
                    {language === 'mr'
                      ? 'आमचा विश्वास आहे की राजकारण हे व्यक्तिगत फायद्यासाठी नसून लोकांची सेवा करण्यासाठी असले पाहिजे. आमची चळवळ विविध पार्श्वभूमीतील व्यक्तींना एकत्र आणते ज्यांचे सामान्य लक्ष्य आहे - सर्व नागरिकांसाठी एक चांगले भविष्य निर्माण करणे.'
                      : language === 'hi'
                      ? 'हमारा मानना है कि राजनीति व्यक्तिगत लाभ के लिए नहीं बल्कि लोगों की सेवा के लिए होनी चाहिए। हमारा आंदोलन विभिन्न पृष्ठभूमि के लोगों को एक साथ लाता है जिनका एक सामान्य लक्ष्य है - सभी नागरिकों के लिए एक बेहतर भविष्य का निर्माण करना।'
                      : 'We believe that politics should be about serving the people, not personal gain. Our movement brings together individuals from diverse backgrounds who share a common goal - to build a better future for all citizens.'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'mr' ? 'आमचा प्रवास' : 
             language === 'hi' ? 'हमारी यात्रा' : 'Our Journey'}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            
            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center transition-all duration-500 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${
                    isVisible ? 'opacity-100 translate-x-0' : 
                    index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-5 w-5 text-primary mr-2" />
                          <span className="text-lg font-bold text-primary">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {getLocalizedText(milestone, 'title')}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {getLocalizedText(milestone, 'description')}
                        </p>
                        <div className="flex gap-4 text-sm mt-4">
                          <span className="bg-primary/10 px-3 py-1 rounded">
                            {getLocalizedText(milestone.stats, 'members')} {language === 'mr' ? 'सदस्य' : language === 'hi' ? 'सदस्य' : 'Members'}
                          </span>
                          <span className="bg-secondary/10 px-3 py-1 rounded">
                            {getLocalizedText(milestone.stats, 'districts')} {language === 'mr' ? 'जिल्हे' : language === 'hi' ? 'जिले' : 'Districts'}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'mr' ? 'आमचे नेतृत्व' : 
             language === 'hi' ? 'हमारी नेतृत्व टीम' : 'Our Leadership'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Card className="border-2 hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="h-32 w-32 mx-auto mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center transition-colors duration-300 hover:from-primary/30 hover:to-secondary/30">
                      <span className="text-muted-foreground text-sm text-center">
                        {language === 'mr' ? 'प्रतिमा' : language === 'hi' ? 'छवि' : 'Image'}: {leader.image}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {getLocalizedText(leader, 'name')}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {getLocalizedText(leader, 'role')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {getLocalizedText(leader, 'description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Principles Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'mr' ? 'आमची तत्त्वे' : 
             language === 'hi' ? 'हमारे सिद्धांत' : 'Our Principles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 150} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-primary/20">
                      <principle.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {getLocalizedText(principle, 'title')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {getLocalizedText(principle, 'description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Future Vision */}
        <section>
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'mr' ? 'पुढचे ध्येय' : 
                   language === 'hi' ? 'आगे का लक्ष्य' : 'Looking Ahead'}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  {language === 'mr'
                    ? 'पुढे जाताना, आमची वचनबद्धता कधीही त्यापेक्षा जास्त मजबूत आहे. तुमच्या पाठिंब्यामुळे, आमचा उद्देश देशाच्या प्रत्येक कोपऱ्यात पोहोचण्याचा आहे, सर्व समुदायांमध्ये सकारात्मक बदल आणि समावेशक विकास आणण्याचा आहे.'
                    : language === 'hi'
                    ? 'आगे बढ़ते हुए, हमारी प्रतिबद्धता पहले से कहीं अधिक मजबूत है। आपके समर्थन से, हमारा लक्ष्य देश के हर कोने तक अपनी पहुंच बढ़ाना है, सकारात्मक बदलाव और समावेशी विकास सभी समुदायों तक लाना है।'
                    : 'As we move forward, our commitment remains stronger than ever. With your support, we aim to expand our reach to every corner of the nation, bringing positive change and inclusive development to all communities.'
                  }
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {futureGoals.map((goal, index) => (
                    <div
                      key={index}
                      className="bg-white/80 rounded-lg px-6 py-4 shadow-lg transition-shadow duration-300 hover:shadow-xl min-w-[200px]"
                    >
                      <h4 className="font-bold text-primary mb-2">
                        {getLocalizedText(goal, 'title')}
                      </h4>
                      <p className="text-sm">
                        {getLocalizedText(goal, 'subtitle')}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;