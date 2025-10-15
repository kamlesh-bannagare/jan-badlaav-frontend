import { Target, Lightbulb, TrendingUp, Scale, Users, Book, Heart, Shield, Building, Globe, ArrowRight, BarChart3, PieChart, LineChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const Vision = () => {
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

  const visionPoints = [
    {
      icon: Target,
      title: 'Economic Empowerment',
      titleMr: 'आर्थिक सक्षमीकरण',
      titleHi: 'आर्थिक सशक्तिकरण',
      description: 'Creating job opportunities and supporting entrepreneurship for sustainable economic growth',
      descriptionMr: 'शाश्वत आर्थिक विकासासाठी रोजगाराच्या संधी निर्माण करणे आणि उद्योजकतेला पाठिंबा देणे',
      descriptionHi: 'सतत आर्थिक विकास के लिए रोजगार के अवसर पैदा करना और उद्यमिता का समर्थन करना',
      image: 'https://ibef.org/uploads/blog/1671175917_a06c4bd3cda863ebcc6c.jpg',
      stats: { target: '5M', current: '2.3M', progress: 65 },
    },
    {
      icon: Lightbulb,
      title: 'Quality Education',
      titleMr: 'दर्जेदार शिक्षण',
      titleHi: 'गुणवत्ता शिक्षा',
      description: 'Ensuring accessible and quality education for all children regardless of their background',
      descriptionMr: 'त्यांच्या पार्श्वभूमीची पर्वा न करता सर्व मुलांसाठी प्रवेशयोग्य आणि दर्जेदार शिक्षण सुनिश्चित करणे',
      descriptionHi: 'पृष्ठभूमि की परवाह किए बिना सभी बच्चों के लिए सुलभ और गुणवत्तापूर्ण शिक्षा सुनिश्चित करना',
      image: 'https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/07/Page6-2-3.jpg',
      stats: { target: '100%', current: '78%', progress: 78 },
    },
    {
      icon: TrendingUp,
      title: 'Infrastructure Development',
      titleMr: 'पायाभूत सुविधा विकास',
      titleHi: 'बुनियादी ढांचा विकास',
      description: 'Building modern infrastructure that connects rural and urban areas seamlessly',
      descriptionMr: 'ग्रामीण आणि शहरी भागांना सहजतेने जोडणारी आधुनिक पायाभूत सुविधा तयार करणे',
      descriptionHi: 'आधुनिक बुनियादी ढांचे का निर्माण जो ग्रामीण और शहरी क्षेत्रों को सहजता से जोड़े',
      image: 'https://www.azobuild.com/images/Article_Images/ImageForArticle_8709_17316125350945732.jpg',
      stats: { target: '50K', current: '32K', progress: 64 },
    },
    {
      icon: Scale,
      title: 'Social Justice',
      titleMr: 'सामाजिक न्याय',
      titleHi: 'सामाजिक न्याय',
      description: 'Ensuring equal rights and opportunities for all sections of society',
      descriptionMr: 'समाजाच्या सर्व घटकांसाठी समान अधिकार आणि संधी सुनिश्चित करणे',
      descriptionHi: 'समाज के सभी वर्गों के लिए समान अधिकार और अवसर सुनिश्चित करना',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJZHVdKEm9k452DQ0JqMCNaKZaB8pyyn56Q&s',
      stats: { target: '100%', current: '85%', progress: 85 },
    },
    {
      icon: Users,
      title: 'Healthcare Access',
      titleMr: 'आरोग्यसेवा प्रवेश',
      titleHi: 'स्वास्थ्य सेवा पहुंच',
      description: 'Universal healthcare coverage and modern medical facilities for all citizens',
      descriptionMr: 'सर्व नागरिकांसाठी सार्वत्रिक आरोग्यसेवा कव्हरेज आणि आधुनिक वैद्यकीय सुविधा',
      descriptionHi: 'सभी नागरिकों के लिए सार्वभौमिक स्वास्थ्य सेवा कवरेज और आधुनिक चिकित्सा सुविधाएं',
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/226-227-1-sixteen_nine.jpg',
      stats: { target: '95%', current: '70%', progress: 73 },
    },
    {
      icon: Building,
      title: 'Sustainable Cities',
      titleMr: 'शाश्वत शहरे',
      titleHi: 'स्थायी शहर',
      description: 'Developing smart, sustainable cities with green spaces and modern amenities',
      descriptionMr: 'हिरव्यागार जागा आणि आधुनिक सोयींसह स्मार्ट, शाश्वत शहरे विकसित करणे',
      descriptionHi: 'हरित स्थानों और आधुनिक सुविधाओं वाले स्मार्ट, स्थायी शहरों का विकास',
      image: 'https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/upload/913d4319970dcefe5bc5fcfebe540ab0.jpeg/public',
      stats: { target: '25', current: '12', progress: 48 },
    }
  ];

  const keyMetrics = [
    {
      icon: Users,
      value: '2.3 Million',
      valueMr: '२३ लाख',
      valueHi: '२३ लाख',
      label: 'Jobs Created',
      labelMr: 'नोकऱ्या निर्माण',
      labelHi: 'रोजगार सृजित',
      change: '+15%',
      trend: 'up'
    },
    {
      icon: Book,
      value: '78%',
      valueMr: '७८%',
      valueHi: '७८%',
      label: 'Literacy Rate',
      labelMr: 'साक्षरता दर',
      labelHi: 'साक्षरता दर',
      change: '+8%',
      trend: 'up'
    },
    {
      icon: Heart,
      value: '92%',
      valueMr: '९२%',
      valueHi: '९२%',
      label: 'Healthcare Coverage',
      labelMr: 'आरोग्यसेवा कव्हरेज',
      labelHi: 'स्वास्थ्य सेवा कवरेज',
      change: '+12%',
      trend: 'up'
    },
    {
      icon: Building,
      value: '32,000',
      valueMr: '३२,०००',
      valueHi: '३२,०००',
      label: 'Infrastructure Projects',
      labelMr: 'पायाभूत प्रकल्प',
      labelHi: 'बुनियादी परियोजनाएं',
      change: '+25%',
      trend: 'up'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Digital Infrastructure',
      titleMr: 'डिजिटल पायाभूत सुविधा',
      titleHi: 'डिजिटल बुनियादी ढांचा',
      description: 'Complete digital connectivity across all villages',
      descriptionMr: 'सर्व गावांमध्ये पूर्ण डिजिटल कनेक्टिव्हिटी',
      descriptionHi: 'सभी गांवों में पूर्ण डिजिटल कनेक्टिविटी',
      progress: 75
    },
    {
      year: '2025',
      title: 'Education Revolution',
      titleMr: 'शिक्षण क्रांती',
      titleHi: 'शिक्षा क्रांति',
      description: '100% school enrollment and digital classrooms',
      descriptionMr: '१००% शाळा नोंदणी आणि डिजिटल वर्गखोल्या',
      descriptionHi: '१००% स्कूल नामांकन और डिजिटल कक्षाएं',
      progress: 45
    },
    {
      year: '2026',
      title: 'Healthcare For All',
      titleMr: 'सर्वांसाठी आरोग्यसेवा',
      titleHi: 'सभी के लिए स्वास्थ्य सेवा',
      description: 'Universal health coverage and modern hospitals',
      descriptionMr: 'सार्वत्रिक आरोग्य कव्हरेज आणि आधुनिक रुग्णालये',
      descriptionHi: 'सार्वभौमिक स्वास्थ्य कवरेज और आधुनिक अस्पताल',
      progress: 30
    },
    {
      year: '2027',
      title: 'Economic Transformation',
      titleMr: 'आर्थिक परिवर्तन',
      titleHi: 'आर्थिक परिवर्तन',
      description: '5 million new entrepreneurs supported',
      descriptionMr: '५० लाख नवीन उद्योजकांना पाठिंबा',
      descriptionHi: '५० लाख नए उद्यमियों को समर्थन',
      progress: 20
    }
  ];

  const progressData = [
    { category: 'Rural Development', current: 65, target: 100, color: 'bg-yellow-400' },
    { category: 'Women Empowerment', current: 78, target: 100, color: 'bg-yellow-400' },
    { category: 'Youth Employment', current: 58, target: 100, color: 'bg-yellow-400' },
    { category: 'Digital Literacy', current: 82, target: 100, color: 'bg-yellow-400' },
    { category: 'Clean Water Access', current: 90, target: 100, color: 'bg-yellow-400' }
  ];

  const ProgressBar = ({ percentage, color = 'bg-yellow-400', label, current, target }) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-black">{label}</span>
        <span className="text-gray-600">{current}% / {target}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  const StatCard = ({ metric, index }) => (
    <div className={`transition-all duration-500 delay-${index * 100} ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      <Card className="border-2 border-yellow-400 hover:shadow-lg transition-shadow duration-300 bg-white">
        <CardContent className="p-6 text-center">
          <div className="h-14 w-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
            <metric.icon className="h-7 w-7 text-black" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">{getLocalizedText(metric, 'value')}</h3>
          <p className="text-gray-600 font-medium mb-2">{getLocalizedText(metric, 'label')}</p>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm border border-yellow-400 ${
            metric.trend === 'up' ? 'bg-yellow-50 text-black' : 'bg-red-100 text-red-800'
          }`}>
            {metric.change} {language === 'mr' ? 'वाढ' : language === 'hi' ? 'वृद्धि' : 'Growth'}
          </div>
        </CardContent>
      </Card>
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
              {t('visionTitle')}
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
                ? 'एक समृद्ध, समावेशक आणि शाश्वत भविष्याची आमची दृष्टी'
                : language === 'hi'
                ? 'एक समृद्ध, समावेशी और स्थायी भविष्य के लिए हमारी दृष्टि'
                : 'Our vision for a prosperous, inclusive, and sustainable future'}
            </p>
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            {language === 'mr' ? 'मुख्य मेट्रिक्स' : 
             language === 'hi' ? 'मुख्य मेट्रिक्स' : 'Key Metrics'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyMetrics.map((metric, index) => (
              <StatCard key={index} metric={metric} index={index} />
            ))}
          </div>

          {/* Progress Chart */}
          <Card className="border-2 border-yellow-400 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-6 w-6 text-black mr-2" />
                <h3 className="text-2xl font-bold text-black">
                  {language === 'mr' ? 'प्रगती तपशील' : 
                   language === 'hi' ? 'प्रगति विवरण' : 'Progress Overview'}
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  {progressData.map((item, index) => (
                    <ProgressBar
                      key={index}
                      percentage={item.current}
                      color={item.color}
                      label={item.category}
                      current={item.current}
                      target={item.target}
                    />
                  ))}
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 flex items-center justify-center border border-yellow-400">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 text-black mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2 text-black">
                      {language === 'mr' ? 'एकूण प्रगती' : 
                       language === 'hi' ? 'कुल प्रगति' : 'Overall Progress'}
                    </h4>
                    <div className="text-3xl font-bold text-black mb-2">74%</div>
                    <p className="text-gray-600">
                      {language === 'mr' ? 'लक्ष्यापर्यंत पोहोचले' : 
                       language === 'hi' ? 'लक्ष्य तक पहुंच गया' : 'Towards Target'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-yellow-50 border-2 border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 rounded-full translate-y-24 -translate-x-24 opacity-20"></div>
              
              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-black">
                  {language === 'mr' ? 'आमचे मिशन' : 
                   language === 'hi' ? 'हमारा मिशन' : 'Our Mission'}
                </h2>
                <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 space-y-4">
                  <p>
                    {language === 'mr'
                      ? 'आमचे मिशन आहे की एक अशा भारताची निर्मिती करणे जिथे प्रत्येक नागरिकाला समान संधी, गुणवत्तापूर्ण शिक्षण, आरोग्यसेवा आणि सन्मानाने जगण्याचा अधिकार असेल. आम्ही पारदर्शक शासन, समावेशक विकास आणि शाश्वत पद्धतींवर विश्वास ठेवतो.'
                      : language === 'hi'
                      ? 'हमारा मिशन एक ऐसे भारत का निर्माण करना है जहां हर नागरिक को समान अवसर, गुणवत्तापूर्ण शिक्षा, स्वास्थ्य सेवा और गरिमापूर्ण जीवन जीने का अधिकार हो। हम पारदर्शी शासन, समावेशी विकास और टिकाऊ प्रथाओं में विश्वास करते हैं।'
                      : 'Our mission is to build an India where every citizen has equal opportunities, quality education, healthcare, and the right to live with dignity. We believe in transparent governance, inclusive development, and sustainable practices that benefit all sections of society.'
                    }
                  </p>
                  <p>
                    {language === 'mr'
                      ? 'तंत्रज्ञानाचा वापर करून, स्थानिक समुदायांना सक्षम करून आणि युवकांना सामील करून, आम्ही एक असे भविष्य घडविण्याचा प्रयत्न करत आहोत जिथे कोणालाही मागे सोडले जाणार नाही.'
                      : language === 'hi'
                      ? 'प्रौद्योगिकी का लाभ उठाकर, स्थानीय समुदायों को सशक्त बनाकर और युवाओं को शामिल करके, हम एक ऐसे भविष्य का निर्माण करने का प्रयास कर रहे हैं जहां किसी को भी पीछे न छोड़ा जाए।'
                      : 'By leveraging technology, empowering local communities, and engaging youth, we strive to create a future where no one is left behind in the journey towards progress and prosperity.'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            {language === 'mr' ? 'दृष्टीक्रम रोडमॅप' : 
             language === 'hi' ? 'विजन रोडमैप' : 'Vision Roadmap'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((milestone, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 150} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Card className="border-2 border-yellow-400 hover:shadow-lg transition-shadow duration-300 h-full bg-white">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-black mb-2">{milestone.year}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-yellow-400 transition-all duration-1000"
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{milestone.progress}% Complete</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-black">
                      {getLocalizedText(milestone, 'title')}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {getLocalizedText(milestone, 'description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Vision Points Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            {language === 'mr' ? 'केंद्रित क्षेत्रे' : 
             language === 'hi' ? 'फोकस क्षेत्र' : 'Focus Areas'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Card className="border-2 border-yellow-400 hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
                  {/* Image section */}
                  <div className="h-48 bg-yellow-50 relative overflow-hidden border-b border-yellow-400">
                    <div className="h-full flex items-center justify-center">
                      {point?.image ? (
                        <img
                          src={point.image}
                          alt="Point visual"
                          className="max-h-40 w-auto object-contain rounded-lg shadow-md"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-gray-400 text-sm italic">No image available</div>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <point.icon className="h-6 w-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-black group-hover:text-yellow-600 transition-colors">
                          {getLocalizedText(point, 'title')}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {getLocalizedText(point, 'description')}
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress Stats */}
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-400">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-black">Progress</span>
                        <span className="text-black font-bold">{point.stats.current} / {point.stats.target}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-yellow-400 transition-all duration-1000"
                          style={{ width: `${point.stats.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Values & Impact Section */}
        <section className="mb-20">
          <Card className="border-2 border-yellow-400 bg-yellow-50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-black">
                {language === 'mr' ? 'आमची मूल्ये आणि प्रभाव' : 
                 language === 'hi' ? 'हमारे मूल्य और प्रभाव' : 'Our Values & Impact'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {language === 'mr' ? 'पारदर्शकता' : 
                     language === 'hi' ? 'पारदर्शिता' : 'Transparency'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'mr'
                      ? 'सर्व निर्णय आणि कार्ये पूर्ण पारदर्शकतेने केली जातात'
                      : language === 'hi'
                      ? 'सभी निर्णय और कार्य पूर्ण पारदर्शिता के साथ किए जाते हैं'
                      : 'All decisions and actions are taken with complete transparency'
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {language === 'mr' ? 'समावेशकता' : 
                     language === 'hi' ? 'समावेशिता' : 'Inclusivity'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'mr'
                      ? 'समाजाच्या सर्व घटकांचा समावेश करणे'
                      : language === 'hi'
                      ? 'समाज के सभी वर्गों को शामिल करना'
                      : 'Including all sections of society in development'
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {language === 'mr' ? 'शाश्वतता' : 
                     language === 'hi' ? 'स्थिरता' : 'Sustainability'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'mr'
                      ? 'पुढील पिढ्यांसाठी शाश्वत उपाययोजना'
                      : language === 'hi'
                      ? 'आने वाली पीढ़ियों के लिए टिकाऊ समाधान'
                      : 'Sustainable solutions for future generations'
                    }
                  </p>
                </div>
              </div>

              {/* Impact Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-yellow-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">500K+</div>
                  <p className="text-gray-600">
                    {language === 'mr' ? 'लोकांचे जीवन सुधारले' : 
                     language === 'hi' ? 'लोगों के जीवन सुधरे' : 'Lives Improved'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">1.2M</div>
                  <p className="text-gray-600">
                    {language === 'mr' ? 'शैक्षणिक संधी' : 
                     language === 'hi' ? 'शैक्षिक अवसर' : 'Educational Opportunities'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">45%</div>
                  <p className="text-gray-600">
                    {language === 'mr' ? 'गरिबीत घट' : 
                     language === 'hi' ? 'गरीबी में कमी' : 'Poverty Reduction'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">89%</div>
                  <p className="text-gray-600">
                    {language === 'mr' ? 'समाधाने समाधानी' : 
                     language === 'hi' ? 'संतुष्ट हितधारक' : 'Satisfied Stakeholders'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section>
          <div className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-yellow-400 border-2 border-black">
              <CardContent className="p-8 md:p-12 text-black">
                <h2 className="text-3xl font-bold mb-4">
                  {language === 'mr' ? 'सामील व्हा आमच्या चळवळीत' : 
                   language === 'hi' ? 'हमारे आंदोलन में शामिल हों' : 'Join Our Movement'}
                </h2>
                <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                  {language === 'mr'
                    ? 'एक चांगल्या भविष्यासाठी एकत्र येऊ. आपल्या समर्थनाने फरक पडू शकतो.'
                    : language === 'hi'
                    ? 'एक बेहतर भविष्य के लिए एक साथ आएं। आपके समर्थन से बदलाव आ सकता है।'
                    : 'Come together for a better future. Your support can make the difference.'
                  }
                </p>
                <button className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 border-2 border-black">
                  {language === 'mr' ? 'सामील व्हा' : 
                   language === 'hi' ? 'शामिल हों' : 'Get Involved'}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;