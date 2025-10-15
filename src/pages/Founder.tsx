import { Quote, Award, Calendar, MapPin, Users, Target, Book, Heart, Globe, ArrowRight, Star, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import founderImage from '@/assets/founder.png';

const Founder = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getLocalizedText = (item, field) => {
    if (language === 'mr') return item[`${field}Mr`] || item[field];
    if (language === 'hi') return item[`${field}Hi`] || item[field];
    return item[field];
  };

  const founderData = {
    name: 'Yash Gourkhede',
    nameMr: 'यश गौरखेडे',
    nameHi: 'यश गौरखेडे',
    title: 'Founder & National President',
    titleMr: 'संस्थापक आणि राष्ट्रीय अध्यक्ष',
    titleHi: 'संस्थापक और राष्ट्रीय अध्यक्ष',
    education: 'M.A. in Political Science, Social Work Degree',
    educationMr: 'राज्यशास्त्रात एम.ए., समाजकार्य पदवी',
    educationHi: 'राजनीति विज्ञान में एम.ए., सामाजिक कार्य डिग्री',
    birthplace: 'Nagpur, Maharashtra',
    birthplaceMr: 'नागपूर, महाराष्ट्र',
    birthplaceHi: 'नागपुर, महाराष्ट्र',
    age: '38 Years',
    ageMr: '३८ वर्षे',
    ageHi: '३८ वर्ष',
    experience: '15+ Years in Social Service',
    experienceMr: '१५+ वर्षे सामाजिक सेवा',
    experienceHi: '१५+ वर्ष सामाजिक सेवा'
  };

  const quotes = [
    {
      text: "Change begins with us. Together, we can build a society where every voice matters, every dream is valued, and every person has the opportunity to thrive.",
      textMr: "बदल आपल्यापासून सुरू होतो. एकत्रितपणे, आपण एक असे समाज उभारू शकतो जिथे प्रत्येक आवाज महत्त्वाचा आहे, प्रत्येक स्वप्न मौल्यवान आहे आणि प्रत्येक व्यक्तीला यशस्वी होण्याची संधी आहे.",
      textHi: "बदल हमसे शुरू होता है। साथ मिलकर, हम एक ऐसा समाज बना सकते हैं जहां हर आवाज मायने रखती है, हर सपना मूल्यवान है और हर व्यक्ति को सफल होने का अवसर मिलता है।",
      context: "Vision for Society",
      contextMr: "समाजासाठी दृष्टी",
      contextHi: "समाज के लिए विजन"
    },
    {
      text: "True leadership is not about power, but about empowering others. It's about creating opportunities where none existed before.",
      textMr: "खरे नेतृत्व हे सत्तेबद्दल नसून इतरांना सक्षम करण्याबद्दल आहे. हे अशा संधी निर्माण करण्याबद्दल आहे ज्या आधी कधीही अस्तित्वात नव्हत्या.",
      textHi: "सच्चा नेतृत्व सत्ता के बारे में नहीं, बल्कि दूसरों को सशक्त बनाने के बारे में है। यह ऐसे अवसर पैदा करने के बारे में है जो पहले कभी मौजूद नहीं थे।",
      context: "Leadership Philosophy",
      contextMr: "नेतृत्व तत्त्वज्ञान",
      contextHi: "नेतृत्व दर्शन"
    },
    {
      text: "Politics should be the art of serving people, not ruling them. Our movement is built on this fundamental principle.",
      textMr: "राजकारण हे लोकांवर राज्य करण्याचे कलेऐवजी लोकांची सेवा करण्याचे कले असले पाहिजे. आमची चळवळ या मूलभूत तत्त्वावर बांधली गेली आहे.",
      textHi: "राजनीति लोगों पर शासन करने की कला नहीं, बल्कि लोगों की सेवा करने की कला होनी चाहिए। हमारा आंदोलन इस मूलभूत सिद्धांत पर बनाया गया है।",
      context: "Political Vision",
      contextMr: "राजकीय दृष्टी",
      contextHi: "राजनीतिक दृष्टि"
    }
  ];

  const journey = [
    {
      year: '2008',
      title: 'Social Work Beginnings',
      titleMr: 'सामाजिक कार्य सुरुवात',
      titleHi: 'सामाजिक कार्य की शुरुआत',
      description: 'Started working with rural communities in Maharashtra',
      descriptionMr: 'महाराष्ट्रातील ग्रामीण समुदायांसोबत कार्य सुरू केले',
      descriptionHi: 'महाराष्ट्र के ग्रामीण समुदायों के साथ काम शुरू किया',
      icon: Users
    },
    {
      year: '2012',
      title: 'Youth Empowerment Initiative',
      titleMr: 'युवा सक्षमीकरण उपक्रम',
      titleHi: 'युवा सशक्तिकरण पहल',
      description: 'Founded youth leadership programs across 50 villages',
      descriptionMr: '५० गावांमध्ये युवा नेतृत्व कार्यक्रम स्थापन केले',
      descriptionHi: '५० गांवों में युवा नेतृत्व कार्यक्रम स्थापित किए',
      icon: Target
    },
    {
      year: '2013',
      title: 'Janta Badlaav Foundation',
      titleMr: 'जनता बदल स्थापना',
      titleHi: 'जनता बदलाव स्थापना',
      description: 'Established Janta Badlaav with vision for political reform',
      descriptionMr: 'राजकीय सुधाराच्या दृष्टीकोनातून जनता बदलाची स्थापना केली',
      descriptionHi: 'राजनीतिक सुधार के दृष्टिकोण से जनता बदलाव की स्थापना की',
      icon: Globe
    },
    {
      year: '2015',
      title: 'Statewide Recognition',
      titleMr: 'राज्यव्यापी ओळख',
      titleHi: 'राज्यव्यापी पहचान',
      description: 'Movement gained recognition across Maharashtra',
      descriptionMr: 'चळवळीला महाराष्ट्रभर ओळख मिळाली',
      descriptionHi: 'आंदोलन को महाराष्ट्र भर में पहचान मिली',
      icon: Award
    },
    {
      year: '2018',
      title: 'National Expansion',
      titleMr: 'राष्ट्रीय विस्तार',
      titleHi: 'राष्ट्रीय विस्तार',
      description: 'Expanded movement to 3 neighboring states',
      descriptionMr: 'चळवळ 3 शेजारील राज्यांमध्ये विस्तारित केली',
      descriptionHi: 'आंदोलन को 3 पड़ोसी राज्यों में विस्तारित किया',
      icon: TrendingUp
    },
    {
      year: '2023',
      title: '1 Million Members',
      titleMr: '१० लाख सदस्य',
      titleHi: '१० लाख सदस्य',
      description: 'Movement crossed 1 million active members nationwide',
      descriptionMr: 'चळवळीने देशभरात १० लाख सक्रिय सदस्यांचा टप्पा ओलांडला',
      descriptionHi: 'आंदोलन ने देश भर में १० लाख सक्रिय सदस्यों का आंकड़ा पार किया',
      icon: Users
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Social Justice Award 2020',
      titleMr: 'सामाजिक न्याय पुरस्कार २०२०',
      titleHi: 'सामाजिक न्याय पुरस्कार २०२०',
      description: 'Recognized for outstanding contribution to social equality',
      descriptionMr: 'सामाजिक समानतेसाठी उत्कृष्ट योगदानाबद्दल सन्मानित',
      descriptionHi: 'सामाजिक समानता में उत्कृष्ट योगदान के लिए सम्मानित'
    },
    {
      icon: Book,
      title: 'Youth Icon of the Year 2019',
      titleMr: 'वर्षाचा युवा आयकॉन २०१९',
      titleHi: 'वर्ष का युवा आइकन २०१९',
      description: 'Awarded for inspiring youth leadership and innovation',
      descriptionMr: 'युवा नेतृत्व आणि नवकल्पनासाठी पुरस्कृत',
      descriptionHi: 'युवा नेतृत्व और नवाचार को प्रेरित करने के लिए पुरस्कृत'
    },
    {
      icon: Heart,
      title: 'Community Service Excellence',
      titleMr: 'समुदाय सेवा उत्कृष्टता',
      titleHi: 'सामुदायिक सेवा उत्कृष्टता',
      description: '15+ years of dedicated community service recognized',
      descriptionMr: '१५+ वर्षांच्या समर्पित समुदाय सेवेचा सन्मान',
      descriptionHi: '१५+ वर्षों की समर्पित सामुदायिक सेवा का सम्मान'
    },
    {
      icon: Shield,
      title: 'Transparency Champion 2022',
      titleMr: 'पारदर्शकता चॅम्पियन २०२२',
      titleHi: 'पारदर्शिता चैंपियन २०२२',
      description: 'Recognized for promoting transparency in public life',
      descriptionMr: 'सार्वजनिक जीवनात पारदर्शकता प्रोत्साहनाबद्दल सन्मानित',
      descriptionHi: 'सार्वजनिक जीवन में पारदर्शिता को बढ़ावा देने के लिए सम्मानित'
    }
  ];

  const philosophyPoints = [
    {
      icon: Users,
      title: 'People-Centric Governance',
      titleMr: 'लोक-केंद्रित शासन',
      titleHi: 'जन-केंद्रित शासन',
      description: 'Believes that governance should serve the people first',
      descriptionMr: 'शासनाने प्रथम लोकांची सेवा केली पाहिजे यावर विश्वास',
      descriptionHi: 'मानते हैं कि शासन को सबसे पहले लोगों की सेवा करनी चाहिए'
    },
    {
      icon: Target,
      title: 'Grassroots Empowerment',
      titleMr: 'तळागाळ सक्षमीकरण',
      titleHi: 'ग्रासरूट सशक्तिकरण',
      description: 'Focuses on empowering communities from the ground up',
      descriptionMr: 'समुदायांना तळागाळापासून सक्षम करण्यावर लक्ष केंद्रित',
      descriptionHi: 'समुदायों को जमीनी स्तर से सशक्त बनाने पर ध्यान केंद्रित'
    },
    {
      icon: Shield,
      title: 'Ethical Politics',
      titleMr: 'नीतिमान राजकारण',
      titleHi: 'नैतिक राजनीति',
      description: 'Advocates for clean, transparent political practices',
      descriptionMr: 'स्वच्छ, पारदर्शक राजकीय पद्धतींचे समर्थन',
      descriptionHi: 'स्वच्छ, पारदर्शी राजनीतिक प्रथाओं की वकालत'
    },
    {
      icon: Globe,
      title: 'Inclusive Development',
      titleMr: 'समावेशक विकास',
      titleHi: 'समावेशी विकास',
      description: 'Ensures development reaches every section of society',
      descriptionMr: 'विकास समाजाच्या प्रत्येक घटकापर्यंत पोहोचतो याची खात्री',
      descriptionHi: 'यह सुनिश्चित करता है कि विकास समाज के हर वर्ग तक पहुंचे'
    }
  ];

  const ProgressBar = ({ percentage, color = 'bg-yellow-400' }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen py-24 md:py-28 flex flex-col justify-center overflow-visible bg-white">
      <div className="container mx-auto px-4 overflow-visible">
        {/* Header Section */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } flex justify-center`}
          style={{ overflow: 'visible' }}
        >
          <div className="text-center mb-16" style={{ overflow: 'visible', lineHeight: '2' }}>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-black"
              style={{
                fontFamily: '"Noto Sans Devanagari", "Poppins", sans-serif',
                lineHeight: '1.3',
                display: 'block',
                paddingTop: '1.5rem',
                paddingBottom: '1rem',
              }}
            >
              {t('founderTitle')}
            </h1>

            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{
                fontFamily: '"Noto Sans Devanagari", "Poppins", sans-serif',
                lineHeight: '1.8',
                paddingTop: '0.5rem',
              }}
            >
              {language === 'mr' 
                ? 'जन बदलाव चळवळीचे संस्थापक आणि प्रेरणास्थान'
                : language === 'hi'
                ? 'जन बदलाव आंदोलन के संस्थापक और प्रेरणा स्रोत'
                : 'The Founder and Inspiration behind Jan Badlaav Movement'}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400">
              <img
                src={founderImage}
                alt={t('founderName')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-yellow-400 opacity-20 blur-2xl" />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-400">
                <Calendar className="h-6 w-6 text-black mx-auto mb-2" />
                <div className="text-lg font-bold text-black">{getLocalizedText(founderData, 'age')}</div>
                <div className="text-sm text-gray-600">
                  {language === 'mr' ? 'वय' : language === 'hi' ? 'उम्र' : 'Age'}
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-400">
                <MapPin className="h-6 w-6 text-black mx-auto mb-2" />
                <div className="text-sm font-bold text-black">{getLocalizedText(founderData, 'birthplace')}</div>
                <div className="text-xs text-gray-600">
                  {language === 'mr' ? 'जन्मस्थान' : language === 'hi' ? 'जन्मस्थल' : 'Birthplace'}
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-400">
                <TrendingUp className="h-6 w-6 text-black mx-auto mb-2" />
                <div className="text-sm font-bold text-black">{getLocalizedText(founderData, 'experience')}</div>
                <div className="text-xs text-gray-600">
                  {language === 'mr' ? 'अनुभव' : language === 'hi' ? 'अनुभव' : 'Experience'}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-4xl font-bold mb-4 text-black">{getLocalizedText(founderData, 'name')}</h2>
            <p className="text-xl text-yellow-600 font-semibold mb-6">{getLocalizedText(founderData, 'title')}</p>
            
            <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-400">
              <div className="flex items-center mb-2">
                <Book className="h-5 w-5 text-black mr-2" />
                <span className="font-semibold text-black">
                  {language === 'mr' ? 'शिक्षण' : 
                   language === 'hi' ? 'शिक्षा' : 'Education'}
                </span>
              </div>
              <p className="text-gray-700">{getLocalizedText(founderData, 'education')}</p>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {language === 'mr'
                ? 'यश गौरखेडे हे एक दूरदर्शी नेते, सामाजिक कार्यकर्ते आणि बदलाचे समर्थक आहेत ज्यांनी जनता बदल चळवळीची स्थापना केली. ग्रामीण महाराष्ट्रातील सामान्य कुटुंबात जन्मलेले, त्यांनी लहानपणापासूनच समाजातील आव्हाने जवळून पाहिली आहेत. त्यांच्या १५+ वर्षांच्या सामाजिक सेवेच्या प्रवासाने त्यांना खऱ्या बदलासाठी राजकीय सुधारणेची गरज समजली.'
                : language === 'hi'
                ? 'यश गौरखेडे एक दूरदर्शी नेता, सामाजिक कार्यकर्ता और परिवर्तन के हामी हैं जिन्होंने जनता बदलाव आंदोलन की स्थापना की। ग्रामीण महाराष्ट्र के एक साधारण परिवार में जन्मे, उन्होंने बचपन से ही समाज की चुनौतियों को करीब से देखा है। १५+ वर्षों के उनके सामाजिक सेवा के सफर ने उन्हें वास्तविक बदलाव के लिए राजनीतिक सुधारों की आवश्यकता को समझाया।'
                : 'Yash Gourkhede is a visionary leader, social activist, and champion of change who founded the Janta Badlaav movement. Born into a humble family in rural Maharashtra, he witnessed societal challenges firsthand from a young age. His 15+ years journey in social service made him understand the need for political reforms for genuine transformation.'
              }
            </p>

            {/* Featured Quote */}
            <Card className="border-l-4 border-l-yellow-400 bg-yellow-50 border border-yellow-400">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-black mb-4" />
                <p className="text-lg italic text-gray-700 mb-3">
                  "{getLocalizedText(quotes[0], 'text')}"
                </p>
                <p className="text-sm text-black font-medium">
                  — {getLocalizedText(quotes[0], 'context')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Philosophy Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            {language === 'mr' ? 'तत्त्वज्ञान आणि मूल्ये' : 
             language === 'hi' ? 'दर्शन और मूल्य' : 'Philosophy & Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Card className="border-2 border-yellow-400 hover:shadow-lg transition-shadow duration-300 text-center h-full bg-white">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                      <point.icon className="h-7 w-7 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      {getLocalizedText(point, 'title')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {getLocalizedText(point, 'description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">
            {language === 'mr' ? 'प्रवास यादी' : 
             language === 'hi' ? 'यात्रा समयरेखा' : 'Journey Timeline'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-yellow-400 h-full"></div>
              
              <div className="space-y-8">
                {journey.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start transition-all duration-500 delay-${index * 150} ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                      <Card className="border-2 border-yellow-400 hover:shadow-lg transition-shadow duration-300 bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <milestone.icon className="h-5 w-5 text-black mr-2" />
                            <span className="text-lg font-bold text-black">{milestone.year}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-black">
                            {getLocalizedText(milestone, 'title')}
                          </h3>
                          <p className="text-gray-600">
                            {getLocalizedText(milestone, 'description')}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            {language === 'mr' ? 'पुरस्कार आणि ओळख' : 
             language === 'hi' ? 'पुरस्कार और मान्यता' : 'Awards & Recognition'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Card className="border-2 border-yellow-400 hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-black">
                          {getLocalizedText(achievement, 'title')}
                        </h3>
                        <p className="text-gray-600">
                          {getLocalizedText(achievement, 'description')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Quotes Carousel */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            {language === 'mr' ? 'प्रेरणादायी विचार' : 
             language === 'hi' ? 'प्रेरणादायक विचार' : 'Inspiring Thoughts'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 150} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Card className="border-2 border-yellow-400 hover:shadow-lg transition-shadow duration-300 h-full bg-white">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-black mb-4" />
                    <p className="text-gray-600 italic mb-4">
                      "{getLocalizedText(quote, 'text')}"
                    </p>
                    <div className="border-t border-yellow-400 pt-3">
                      <p className="text-sm text-black font-medium">
                        {getLocalizedText(quote, 'context')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Vision */}
        <section>
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-yellow-400 text-black border-2 border-black">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    {language === 'mr' ? 'नेतृत्व दृष्टी' : 
                     language === 'hi' ? 'नेतृत्व दृष्टि' : 'Leadership Vision'}
                  </h2>
                  <p className="text-xl max-w-3xl mx-auto opacity-90">
                    {language === 'mr'
                      ? 'अखंडता, क्षमता आणि कारुण्य हे शासनाचा पाया असलेले राजकीय संस्कृती निर्माण करणे, जिथे प्रत्येक नागरिकाला संधी आणि न्याय यांची समान प्रवेश आहे.'
                      : language === 'hi'
                      ? 'एक ऐसी राजनीतिक संस्कृति बनाना जहां ईमानदारी, क्षमता और करुणा शासन की नींव हों, और जहां हर नागरिक के पास अवसरों और न्याय तक समान पहुंच हो।'
                      : 'To create a political culture where integrity, competence, and compassion are the foundation of governance, and where every citizen has equal access to opportunities and justice.'
                    }
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 opacity-90">
                      {language === 'mr' ? 'लक्ष्ये' : 
                       language === 'hi' ? 'लक्ष्य' : 'Goals'}
                    </h3>
                    <ul className="space-y-3 opacity-90">
                      {[
                        language === 'mr' ? '१००% पारदर्शक शासन' :
                        language === 'hi' ? '१००% पारदर्शी शासन' : '100% Transparent Governance',
                        
                        language === 'mr' ? 'युवा नेतृत्व विकास' :
                        language === 'hi' ? 'युवा नेतृत्व विकास' : 'Youth Leadership Development',
                        
                        language === 'mr' ? 'डिजिटल समावेशन' :
                        language === 'hi' ? 'डिजिटल समावेशन' : 'Digital Inclusion',
                        
                        language === 'mr' ? 'शाश्वत विकास' :
                        language === 'hi' ? 'स्थायी विकास' : 'Sustainable Development'
                      ].map((goal, index) => (
                        <li key={index} className="flex items-center">
                          <Star className="h-4 w-4 text-black mr-3" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 opacity-90">
                      {language === 'mr' ? 'प्रगती' : 
                       language === 'hi' ? 'प्रगति' : 'Progress'}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>{language === 'mr' ? 'लोकांचा विश्वास' : language === 'hi' ? 'लोगों का विश्वास' : 'Public Trust'}</span>
                          <span>85%</span>
                        </div>
                        <ProgressBar percentage={85} color="bg-black" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>{language === 'mr' ? 'युवा सहभाग' : language === 'hi' ? 'युवा भागीदारी' : 'Youth Engagement'}</span>
                          <span>78%</span>
                        </div>
                        <ProgressBar percentage={78} color="bg-black" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>{language === 'mr' ? 'समुदाय प्रभाव' : language === 'hi' ? 'सामुदायिक प्रभाव' : 'Community Impact'}</span>
                          <span>92%</span>
                        </div>
                        <ProgressBar percentage={92} color="bg-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Founder;