import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import {
  ArrowRight, Users, Target, Heart, BookOpen, Handshake, Award,
  TrendingUp, MessageSquare, CheckCircle2, Building2, GraduationCap,
  MapPin, Calendar, Clock, DollarSign, PieChart, BarChart3, IndianRupeeIcon,
  LineChart, Activity, Globe, Phone, Mail, Map, Vote, Shield,
  Flag, Mic, Megaphone, Scale, Landmark, Globe2, Users2,
  AlertTriangle, Star, ChevronRight, Play, Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import heroBanner from '@/assets/hero-banner.jpg';
import founder from '@/assets/founder.png';
import logo from '@/assets/logo.jpg';
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/img3.png';
import img4 from '@/assets/img4.png';
import img5 from '@/assets/img5.png';
import img6 from '@/assets/img6.jpeg';
import img7 from '@/assets/img7.png';
import img8 from '@/assets/img8.png';
import img9 from '@/assets/img9.png';
import img10 from '@/assets/img10.png';
import img11 from '@/assets/img11.png';
import indiaMap from '@/assets/india-map.png';
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
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

  const heroImages = [heroBanner, founder, logo, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  // Political values with metrics - Updated with translations
  const values = [
    {
      icon: Shield,
      title: "Good Governance",
      titleMr: "सुशासन",
      titleHi: "सुशासन",
      description: "Transparent, accountable and responsive governance system",
      descriptionMr: "पारदर्शक, जबाबदार आणि प्रतिसाद देणारी शासन व्यवस्था",
      descriptionHi: "पारदर्शी, जवाबदार और उत्तरदायी शासन प्रणाली",
      metrics: "85% Trust Rate",
      metricsMr: "८५% विश्वास दर",
      metricsHi: "८५% विश्वास दर",
      progress: 85
    },
    {
      icon: Scale,
      title: "Social Justice",
      titleMr: "सामाजिक न्याय",
      titleHi: "सामाजिक न्याय",
      description: "Equal opportunities and rights for all citizens",
      descriptionMr: "सर्व नागरिकांसाठी समान संधी आणि अधिकार",
      descriptionHi: "सभी नागरिकों के लिए समान अवसर और अधिकार",
      metrics: "45 Policies Passed",
      metricsMr: "४५ धोरणे मंजूर",
      metricsHi: "४५ नीतियाँ पारित",
      progress: 92
    },
    {
      icon: Heart,
      title: "Public Welfare",
      titleMr: "जनकल्याण",
      titleHi: "जनकल्याण",
      description: "People-first approach in all government initiatives",
      descriptionMr: "सर्व सरकारी उपक्रमांमध्ये लोक-प्रथम दृष्टिकोन",
      descriptionHi: "सभी सरकारी पहलों में जन-प्रथम दृष्टिकोण",
      metrics: "98% Satisfaction",
      metricsMr: "९८% समाधान",
      metricsHi: "९८% संतुष्टि",
      progress: 98
    },
  ];

  // Political focus areas - Updated with translations
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Education Reform",
      titleMr: "शिक्षण सुधार",
      titleHi: "शिक्षा सुधार",
      description: "Quality education and skill development for all",
      descriptionMr: "सर्वांसाठी दर्जेदार शिक्षण आणि कौशल्य विकास",
      descriptionHi: "सभी के लिए गुणवत्तापूर्ण शिक्षा और कौशल विकास",
      stats: {
        schools: "15,000+",
        schoolsMr: "१५,०००+",
        schoolsHi: "१५,०००+",
        budget: "₹2,500 Cr",
        budgetMr: "२,५०० कोटी",
        budgetHi: "२,५०० करोड़",
        enrollment: "25 Lakh+",
        enrollmentMr: "२५ लाख+",
        enrollmentHi: "२५ लाख+",
        successRate: "94%",
        successRateMr: "९४%",
        successRateHi: "९४%"
      },
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Building2,
      title: "Infrastructure",
      titleMr: "पायाभूत सुविधा",
      titleHi: "बुनियादी ढांचा",
      description: "Modern infrastructure for sustainable development",
      descriptionMr: "शाश्वत विकासासाठी आधुनिक पायाभूत सुविधा",
      descriptionHi: "स्थायी विकास के लिए आधुनिक बुनियादी ढाँचा",
      stats: {
        projects: "275+",
        projectsMr: "२७५+",
        projectsHi: "२७५+",
        investment: "₹15,200 Cr",
        investmentMr: "१५,२०० कोटी",
        investmentHi: "१५,२०० करोड़",
        completion: "88%",
        completionMr: "८८%",
        completionHi: "८८%",
        jobs: "2.5 Lakh+",
        jobsMr: "२.५ लाख+",
        jobsHi: "२.५ लाख+"
      },
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: Handshake,
      title: "Employment",
      titleMr: "रोजगार",
      titleHi: "रोजगार",
      description: "Job creation and entrepreneurship opportunities",
      descriptionMr: "रोजगार निर्मिती आणि उद्योजकता संधी",
      descriptionHi: "रोजगार सृजन और उद्यमिता के अवसर",
      stats: {
        jobs: "15 Lakh+",
        jobsMr: "१५ लाख+",
        jobsHi: "१५ लाख+",
        startups: "5,000+",
        startupsMr: "५,०००+",
        startupsHi: "५,०००+",
        growth: "35%",
        growthMr: "३५%",
        growthHi: "३५%",
        skillTraining: "8 Lakh+",
        skillTrainingMr: "८ लाख+",
        skillTrainingHi: "८ लाख+"
      },
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Healthcare",
      titleMr: "आरोग्यसेवा",
      titleHi: "स्वास्थ्य सेवा",
      description: "Affordable and accessible healthcare for all",
      descriptionMr: "सर्वांसाठी परवडती आणि प्रवेशयोग्य आरोग्यसेवा",
      descriptionHi: "सभी के लिए सस्ती और सुलभ स्वास्थ्य सेवा",
      stats: {
        hospitals: "500+",
        hospitalsMr: "५००+",
        hospitalsHi: "५००+",
        patients: "50 Lakh+",
        patientsMr: "५० लाख+",
        patientsHi: "५० लाख+",
        recovery: "96%",
        recoveryMr: "९६%",
        recoveryHi: "९६%",
        budget: "₹4,100 Cr",
        budgetMr: "४,१०० कोटी",
        budgetHi: "४,१०० करोड़"
      },
      color: "from-yellow-400 to-amber-500"
    },
  ];

  // Political achievements - Updated with translations
  const achievements = [
    {
      icon: Vote,
      number: "45+",
      numberMr: "४५+",
      numberHi: "४५+",
      title: "Seats Won",
      titleMr: "जिंकलेली जागा",
      titleHi: "सीटें जीती",
      growth: "+15%",
      growthMr: "+१५%",
      growthHi: "+१५%",
      trend: "up",
      description: "Last election performance",
      descriptionMr: "शेवटच्या निवडणुकीतील कामगिरी",
      descriptionHi: "पिछले चुनाव प्रदर्शन"
    },
    {
      icon: Users,
      number: "2.5M+",
      numberMr: "२५ लाख+",
      numberHi: "२५ लाख+",
      title: "Party Members",
      titleMr: "पक्ष सदस्य",
      titleHi: "पार्टी सदस्य",
      growth: "+28%",
      growthMr: "+२८%",
      growthHi: "+२८%",
      trend: "up",
      description: "Active membership",
      descriptionMr: "सक्रिय सदस्यत्व",
      descriptionHi: "सक्रिय सदस्यता"
    },
    {
      icon: Landmark,
      number: "12",
      numberMr: "१२",
      numberHi: "१२",
      title: "States Presence",
      titleMr: "राज्य उपस्थिती",
      titleHi: "राज्य उपस्थिति",
      growth: "+42%",
      growthMr: "+४२%",
      growthHi: "+४२%",
      trend: "up",
      description: "Political influence",
      descriptionMr: "राजकीय प्रभाव",
      descriptionHi: "राजनीतिक प्रभाव"
    },
    {
      icon: Award,
      number: "150+",
      numberMr: "१५०+",
      numberHi: "१५०+",
      title: "Projects Completed",
      titleMr: "पूर्ण प्रकल्प",
      titleHi: "पूर्ण परियोजनाएं",
      growth: "+33%",
      growthMr: "+३३%",
      growthHi: "+३३%",
      trend: "up",
      description: "Public welfare projects",
      descriptionMr: "जनकल्याण प्रकल्प",
      descriptionHi: "जनकल्याण परियोजनाएं"
    },
  ];

  // How to join political party - Updated with translations
  const wayToJoin = [
    {
      icon: CheckCircle2,
      title: "Membership Form",
      titleMr: "सदस्यता फॉर्म",
      titleHi: "सदस्यता फॉर्म",
      description: "Fill the online membership form with basic details",
      descriptionMr: "मूलभूत तपशीलांसह ऑनलाइन सदस्यता फॉर्म भरा",
      descriptionHi: "मूल विवरणों के साथ ऑनलाइन सदस्यता फॉर्म भरें",
      step: "01",
      duration: "5 min",
      durationMr: "५ मिनिटे",
      durationHi: "५ मिनट"
    },
    {
      icon: MessageSquare,
      title: "Verification",
      titleMr: "सत्यापन",
      titleHi: "सत्यापन",
      description: "Background verification and approval process",
      descriptionMr: "पार्श्वभूमी सत्यापन आणि मंजुरी प्रक्रिया",
      descriptionHi: "पृष्ठभूमि सत्यापन और अनुमोदन प्रक्रिया",
      step: "02",
      duration: "48 hours",
      durationMr: "४८ तास",
      durationHi: "४८ घंटे"
    },
    {
      icon: BookOpen,
      title: "Active Participation",
      titleMr: "सक्रिय सहभाग",
      titleHi: "सक्रिय भागीदारी",
      description: "Start participating in party activities and meetings",
      descriptionMr: "पक्षाच्या कार्यक्रम आणि बैठकांमध्ये सहभागी होणे सुरू करा",
      descriptionHi: "पार्टी गतिविधियों और बैठकों में भाग लेना शुरू करें",
      step: "03",
      duration: "Immediate",
      durationMr: "तात्काळ",
      durationHi: "तत्काल"
    },
  ];

  // Political impact stats - Updated with translations
  const impactStats = [
    {
      label: "Districts Covered",
      labelMr: "समाविष्ट जिल्हे",
      labelHi: "शामिल जिले",
      value: "350+",
      valueMr: "३५०+",
      valueHi: "३५०+",
      icon: MapPin
    },
    {
      label: "Active Volunteers",
      labelMr: "सक्रिय स्वयंसेवक",
      labelHi: "सक्रिय स्वयंसेवक",
      value: "50,000+",
      valueMr: "५०,०००+",
      valueHi: "५०,०००+",
      icon: Users2
    },
    {
      label: "Years in Service",
      labelMr: "सेवेची वर्षे",
      labelHi: "सेवा के वर्ष",
      value: "25+",
      valueMr: "२५+",
      valueHi: "२५+",
      icon: Calendar
    },
    {
      label: "Rallies Conducted",
      labelMr: "आयोजित रॅली",
      labelHi: "आयोजित रैलियां",
      value: "5,000+",
      valueMr: "५,०००+",
      valueHi: "५,०००+",
      icon: Megaphone
    }
  ];

  // Upcoming Political events - Updated with translations
  const upcomingEvents = [
    {
      title: "Public Rally - Delhi",
      titleMr: "सार्वजनिक रॅली - दिल्ली",
      titleHi: "जन रैली - दिल्ली",
      date: "2024-03-15",
      location: "Ram Lila Maidan, Delhi",
      locationMr: "राम लीला मैदान, दिल्ली",
      locationHi: "राम लीला मैदान, दिल्ली",
      attendees: 50000,
      type: "Rally",
      typeMr: "रॅली",
      typeHi: "रैली"
    },
    {
      title: "Youth Conference",
      titleMr: "युवा परिषद",
      titleHi: "युवा सम्मेलन",
      date: "2024-03-22",
      location: "Convention Center",
      locationMr: "कन्व्हेन्शन सेंटर",
      locationHi: "कन्वेंशन सेंटर",
      attendees: 5000,
      type: "Conference",
      typeMr: "परिषद",
      typeHi: "सम्मेलन"
    },
    {
      title: "Policy Discussion Forum",
      titleMr: "धोरण चर्चा मंच",
      titleHi: "नीति चर्चा मंच",
      date: "2024-04-05",
      location: "Party Headquarters",
      locationMr: "पक्ष मुख्यालय",
      locationHi: "पार्टी मुख्यालय",
      attendees: 300,
      type: "Meeting",
      typeMr: "बैठक",
      typeHi: "बैठक"
    }
  ];

  // Real-time political stats
  const realTimeStats = {
    members: { current: 850000, goal: 1000000 },
    volunteers: { current: 50000, goal: 75000 },
    campaigns: { current: 45, goal: 60 }
  };

  // India states where party has presence
  const partyPresence = {
    strongHold: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal", "Madhya Pradesh"],
    growing: ["Karnataka", "Telangana", "Gujarat", "Rajasthan", "Punjab"],
    emerging: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Odisha", "Assam"]
  };

  // Latest News Section
  const latestNews = [
    {
      title: "Jan Badlaav Launches Digital Governance Initiative",
      titleMr: "जन बदलाव ने डिजिटल गव्हर्नन्स उपक्रम सुरू केला",
      titleHi: "जन बदलाव ने डिजिटल गवर्नेंस पहल शुरू की",
      date: "2024-01-15",
      excerpt: "New digital platform to enhance citizen-government interaction",
      excerptMr: "नागरिक-सरकार संवाद सुधारण्यासाठी नवीन डिजिटल प्लॅटफॉर्म",
      excerptHi: "नागरिक-सरकार संवाद बेहतर बनाने के लिए नया डिजिटल प्लेटफॉर्म",
      image: img1,
      category: "Governance"
    },
    {
      title: "Massive Youth Rally in Mumbai Attracts 50,000+",
      titleMr: "मुंबईतील मोठ्या युवा रॅलीमध्ये ५०,०००+ हजारांची उपस्थिती",
      titleHi: "मुंबई में भारी युवा रैली ने ५०,०००+ को आकर्षित किया",
      date: "2024-01-10",
      excerpt: "Youth empowerment takes center stage in political discourse",
      excerptMr: "युवा सक्षमीकरण राजकीय चर्चेच्या केंद्रस्थानी",
      excerptHi: "युवा सशक्तिकरण राजनीतिक चर्चा के केंद्र में",
      image: img2,
      category: "Rally"
    },
    {
      title: "Anti-Corruption Bill Gets Overwhelming Support",
      titleMr: "भ्रष्टाचार विरोधी विधेयकाला मोठ्या प्रमाणात पाठिंबा",
      titleHi: "भ्रष्टाचार विरोधी विधेयक को जबरदस्त समर्थन",
      date: "2024-01-08",
      excerpt: "New legislation aims to bring transparency in public offices",
      excerptMr: "नवीन कायदे सार्वजनिक कार्यालयांमध्ये पारदर्शकता आणण्याचे लक्ष्य",
      excerptHi: "नए कानून का लक्ष्य सार्वजनिक कार्यालयों में पारदर्शिता लाना",
      image: img3,
      category: "Policy"
    }
  ];

  // Social Media Links
  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-blue-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-600" },
    { icon: Youtube, name: "YouTube", url: "#", color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section for Political Party */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <Carousel
          className="absolute inset-0"
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
          <CarouselContent className="h-[700px]">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-[700px] p-0">
                <div className="relative h-full w-full">
                  <img
                    src={image}
                    alt={`Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-yellow-500/80 backdrop-blur border-yellow-300 text-black hover:bg-yellow-400" />
          <CarouselNext className="right-4 bg-yellow-500/80 backdrop-blur border-yellow-300 text-black hover:bg-yellow-400" />
        </Carousel>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
            style={{
              fontFamily: '"Noto Sans Devanagari", "Poppins", sans-serif',
              lineHeight: '1.2',
            }}
          >
            {language === 'mr'
              ? 'जन बदलाव पक्ष  & this website created by Kamlesh Bannagare'
              : language === 'hi'
                ? 'जन बदलाव पक्ष  & this website created by Kamlesh Bannagare'
                : 'Jan Badlaav Party & this website created by Kamlesh Bannagare'}
          </h1>

          <p
            className="text-2xl md:text-3xl mb-4 font-semibold animate-fade-in text-yellow-400"
            style={{
              fontFamily: '"Noto Sans Devanagari", "Roboto", sans-serif',
              lineHeight: '1.8',
            }}
          >
            {language === 'mr'
              ? 'नवीन लोक, नवीन विचार, नवीन प्रयत्न'
              : language === 'hi'
                ? 'नए लोग, नई सोच, नया प्रयास'
                : 'New People, New Ideas, New Efforts'}
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in"
            style={{
              fontFamily: '"Noto Sans Devanagari", "Roboto", sans-serif',
              lineHeight: '1.8',
            }}
          >
            {language === 'mr'
              ? 'आता बदलण्याची वेळ — जनतेसह, जनतेसाठी।'
              : language === 'hi'
                ? 'अब वक्त है बदलाव का — जनता के साथ, जनता के लिए।'
                : 'Now is the time for change — with the people, for the people.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/join">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg border-yellow-600">
                {language === 'mr' ? 'आमच्यासोबत जोडा' :
                  language === 'hi' ? 'हमसे जुड़ें' : 'Join Our Movement'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Political Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-yellow-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 mr-2 text-yellow-400" />
                    <div className="text-2xl font-bold text-yellow-400">{getLocalizedText(stat, 'value')}</div>
                  </div>
                  <div className="text-sm opacity-80">{getLocalizedText(stat, 'label')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Political Progress Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'राजकीय वाढ ट्रॅकर' :
                language === 'hi' ? 'राजनीतिक वृद्धि ट्रैकर' : 'Political Growth Tracker'}
            </h2>
            <p className="text-xl text-gray-700">
              {language === 'mr' ? 'आमच्या राजकीय लक्ष्यांकडे रिअल-टाइम प्रगती' :
                language === 'hi' ? 'हमारे राजनीतिक लक्ष्यों की ओर रियल-टाइम प्रगति' : 'Real-time progress towards our political goals'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                  <span className="text-2xl font-bold text-black">{(realTimeStats.members.current / 1000).toFixed(0)}K</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-black">
                      {language === 'mr' ? 'पक्ष सदस्य' :
                        language === 'hi' ? 'पार्टी सदस्य' : 'Party Members'}
                    </span>
                    <span className="text-black">{((realTimeStats.members.current / realTimeStats.members.goal) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(realTimeStats.members.current / realTimeStats.members.goal) * 100} className="h-2 bg-yellow-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <Users2 className="h-8 w-8 text-yellow-600" />
                  <span className="text-2xl font-bold text-black">{(realTimeStats.volunteers.current / 1000).toFixed(0)}K</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-black">
                      {language === 'mr' ? 'सक्रिय स्वयंसेवक' :
                        language === 'hi' ? 'सक्रिय स्वयंसेवक' : 'Active Volunteers'}
                    </span>
                    <span className="text-black">{((realTimeStats.volunteers.current / realTimeStats.volunteers.goal) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(realTimeStats.volunteers.current / realTimeStats.volunteers.goal) * 100} className="h-2 bg-yellow-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <Megaphone className="h-8 w-8 text-yellow-600" />
                  <span className="text-2xl font-bold text-black">{realTimeStats.campaigns.current}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-black">
                      {language === 'mr' ? 'सक्रिय मोहीम' :
                        language === 'hi' ? 'सक्रिय अभियान' : 'Active Campaigns'}
                    </span>
                    <span className="text-black">{((realTimeStats.campaigns.current / realTimeStats.campaigns.goal) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(realTimeStats.campaigns.current / realTimeStats.campaigns.goal) * 100} className="h-2 bg-yellow-200" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'ताज्या बातम्या' :
                language === 'hi' ? 'ताज़ा खबरें' : 'Latest News'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'mr' ? 'आमच्या नवीनतम क्रियाकलाप आणि घोषणा' :
                language === 'hi' ? 'हमारी नवीनतम गतिविधियाँ और घोषणाएँ' : 'Our latest activities and announcements'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group overflow-hidden border-2 border-yellow-100">
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={getLocalizedText(news, 'title')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-yellow-500 text-black border-0">
                    {getLocalizedText(news, 'category')}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2 text-black">
                    {getLocalizedText(news, 'title')}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {getLocalizedText(news, 'excerpt')}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                    <Link to="/news" className="flex items-center text-yellow-600 hover:underline">
                      {language === 'mr' ? 'अधिक वाचा' :
                        language === 'hi' ? 'अधिक पढ़ें' : 'Read More'}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/news">
              <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black">
                {language === 'mr' ? 'सर्व बातम्या पहा' :
                  language === 'hi' ? 'सभी खबरें देखें' : 'View All News'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Political Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'आमची राजकीय मूल्ये' :
                language === 'hi' ? 'हमारे राजनीतिक मूल्य' : 'Our Political Values'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'mr' ? 'आमच्या राजकीय प्रवासाला मार्गदर्शन करणारी मूलभूत तत्त्वे' :
                language === 'hi' ? 'हमारे राजनीतिक सफर का मार्गदर्शन करने वाले मूल सिद्धांत' : 'Core principles that guide our political journey'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-yellow-200 hover:shadow-xl transition-all hover:-translate-y-2 group bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="h-7 w-7 text-yellow-600" />
                    </div>
                    <Badge className="text-sm bg-yellow-500 text-black border-0">
                      {getLocalizedText(value, 'metrics')}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">{getLocalizedText(value, 'title')}</h3>
                  <p className="text-gray-600 mb-6">{getLocalizedText(value, 'description')}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-black">
                        {language === 'mr' ? 'लोकांचा पाठिंबा' :
                          language === 'hi' ? 'जनता का समर्थन' : 'Public Support'}
                      </span>
                      <span className="text-black">{value.progress}%</span>
                    </div>
                    <Progress value={value.progress} className="h-2 bg-yellow-200" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Focus Areas for Political Party */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'आमची केंद्रित क्षेत्रे' :
                language === 'hi' ? 'हमारे फोकस क्षेत्र' : 'Our Focus Areas'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'mr'
                ? 'मुख्य क्षेत्र जेथे आम्ही अर्थपूर्ण बदल आणि विकास घडवून आणत आहोत'
                : language === 'hi'
                  ? 'मुख्य क्षेत्र जहां हम सार्थक बदलाव और विकास ला रहे हैं'
                  : 'Key sectors where we are driving meaningful change and development'
              }
            </p>
          </div>

          <Tabs defaultValue="education" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-yellow-100">
              {focusAreas.map((area, index) => (
                <TabsTrigger key={index} value={area.title.toLowerCase().replace(/\s+/g, '-')} 
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-black">
                  <area.icon className="h-4 w-4 mr-2" />
                  {getLocalizedText(area, 'title')}
                </TabsTrigger>
              ))}
            </TabsList>

            {focusAreas.map((area, index) => (
              <TabsContent key={index} value={area.title.toLowerCase().replace(/\s+/g, '-')}>
                <Card className="border-2 border-yellow-200">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 text-black">{getLocalizedText(area, 'title')}</h3>
                        <p className="text-gray-600 mb-6">{getLocalizedText(area, 'description')}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(area.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                              <div className="text-2xl font-bold text-yellow-600 mb-1">
                                {getLocalizedText(area.stats, key)}
                              </div>
                              <div className="text-sm text-gray-700 capitalize">
                                {key === 'successRate' ? (language === 'mr' ? 'यश दर' : language === 'hi' ? 'सफलता दर' : 'Success Rate') :
                                  key === 'completion' ? (language === 'mr' ? 'पूर्णता' : language === 'hi' ? 'पूर्णता' : 'Completion') :
                                    key.replace(/([A-Z])/g, ' $1')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center text-white shadow-lg`}>
                          <div className="text-center">
                            <div className="text-4xl font-bold">
                              {getLocalizedText(area.stats, area.stats.successRate ? 'successRate' : 'completion')}
                            </div>
                            <div className="text-sm">
                              {language === 'mr' ? 'यश दर' :
                                language === 'hi' ? 'सफलता दर' : 'Success Rate'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-yellow-200">
                <CardContent className="p-6">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-4 text-white shadow-md`}>
                    <area.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{getLocalizedText(area, 'title')}</h3>
                  <p className="text-gray-600 text-sm mb-4">{getLocalizedText(area, 'description')}</p>
                  <div className="text-2xl font-bold text-yellow-600">
                    {getLocalizedText(area.stats, 'budget')}
                  </div>
                  <div className="text-xs text-gray-500">
                    {language === 'mr' ? 'वाटप केलेला अर्थसंकल्प' :
                      language === 'hi' ? 'आवंटित बजट' : 'Budget Allocated'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Political Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'आमची राजकीय यशगाथा' :
                language === 'hi' ? 'हमारी राजनीतिक उपलब्धियाँ' : 'Our Political Achievements'}
            </h2>
            <p className="text-xl text-gray-700">
              {language === 'mr' ? 'जनसेवेच्या आमच्या प्रवासातील टप्पे' :
                language === 'hi' ? 'जनसेवा के हमारे सफर में मील के पत्थर' : 'Milestones in our journey of public service'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-yellow-200 bg-white">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center mx-auto shadow-lg">
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                    <Badge className={`absolute -top-2 -right-2 bg-yellow-500 text-black border-0`}>
                      {getLocalizedText(achievement, 'growth')}
                    </Badge>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                    {getLocalizedText(achievement, 'number')}
                  </div>
                  <p className="text-lg font-semibold mb-2 text-black">{getLocalizedText(achievement, 'title')}</p>
                  <p className="text-sm text-gray-600">{getLocalizedText(achievement, 'description')}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'आगामी कार्यक्रम' :
                language === 'hi' ? 'आगामी कार्यक्रम' : 'Upcoming Events'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'mr' ? 'आमच्या पुढील राजकीय कार्यक्रम आणि रॅल्या' :
                language === 'hi' ? 'हमारे आगामी राजनीतिक कार्यक्रम और रैलियाँ' : 'Our upcoming political events and rallies'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-2 border-yellow-200">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-yellow-500 text-black border-0">
                    {getLocalizedText(event, 'type')}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-yellow-600 transition-colors">
                    {getLocalizedText(event, 'title')}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-yellow-600" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-yellow-600" />
                      {getLocalizedText(event, 'location')}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-yellow-600" />
                      {event.attendees.toLocaleString()}+ {language === 'mr' ? 'सहभागी' : language === 'hi' ? 'प्रतिभागी' : 'Attendees'}
                    </div>
                  </div>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    {language === 'mr' ? 'सहभागी व्हा' :
                      language === 'hi' ? 'भाग लें' : 'Participate'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Party Presence Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'देशव्यापी उपस्थिती' :
                language === 'hi' ? 'देशव्यापी उपस्थिति' : 'Nationwide Presence'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'mr' ? 'संपूर्ण भारतात आमची राजकीय उपस्थिती' :
                language === 'hi' ? 'पूरे भारत में हमारी राजनीतिक उपस्थिति' : 'Our political presence across India'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src={indiaMap}
                  alt="India Map"
                  className="w-full h-auto opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-yellow-600 mb-2">12</div>
                    <div className="text-xl text-black font-semibold">
                      {language === 'mr' ? 'राज्ये' :
                        language === 'hi' ? 'राज्य' : 'States'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'mr' ? 'मजबूत पाया' :
                    language === 'hi' ? 'मजबूत आधार' : 'Strong Hold'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {partyPresence.strongHold.map((state, index) => (
                    <Badge key={index} className="bg-yellow-500 text-black border-0">
                      {state}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'mr' ? 'वाढत्या प्रभाव' :
                    language === 'hi' ? 'बढ़ता प्रभाव' : 'Growing Influence'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {partyPresence.growing.map((state, index) => (
                    <Badge key={index} variant="outline" className="border-yellow-500 text-yellow-600">
                      {state}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'mr' ? 'उदयोन्मुख उपस्थिती' :
                    language === 'hi' ? 'उभरती उपस्थिति' : 'Emerging Presence'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {partyPresence.emerging.map((state, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700">
                      {state}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'आमच्यात सामील कसे व्हावे' :
                language === 'hi' ? 'हमसे कैसे जुड़ें' : 'How to Join Us'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'mr'
                ? 'जन बदलाव चळवळीचा भाग व्हा आणि बदल घडविण्यास मदत करा'
                : language === 'hi'
                  ? 'जन बदलाव आंदोलन का हिस्सा बनें और बदलाव लाने में मदद करें'
                  : 'Become part of Jan Badlaav Movement and help bring change'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wayToJoin.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all group border-2 border-yellow-200 bg-white">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="h-20 w-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <step.icon className="h-10 w-10 text-yellow-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-yellow-500 text-black flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">{getLocalizedText(step, 'title')}</h3>
                  <p className="text-gray-600 mb-6">{getLocalizedText(step, 'description')}</p>
                  <Badge className="bg-yellow-500 text-black border-0">
                    {getLocalizedText(step, 'duration')}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/join">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600">
                {language === 'mr' ? 'आत्ताच सामील व्हा' :
                  language === 'hi' ? 'अभी जुड़ें' : 'Join Now'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === 'mr' ? 'सोशल मीडियावर जोडले रहा' :
                language === 'hi' ? 'सोशल मीडिया पर जुड़े रहें' : 'Stay Connected on Social Media'}
            </h2>
            <p className="text-xl text-gray-700">
              {language === 'mr' ? 'आमच्या नवीनतम अपडेट्ससाठी अनुसरण करा' :
                language === 'hi' ? 'हमारे नवीनतम अपडेट्स के लिए फॉलो करें' : 'Follow us for latest updates'}
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16 rounded-full bg-white border-2 border-yellow-200 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <social.icon className={`h-8 w-8 ${social.color}`} />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              {language === 'mr' ? 'जन बदलाव सोशल मीडियावर सक्रिय आहे' :
                language === 'hi' ? 'जन बदलाव सोशल मीडिया पर सक्रिय है' : 'Jan Badlaav is active on social media'}
            </p>
            <Badge className="bg-yellow-500 text-black border-0 text-lg px-6 py-2">
              {language === 'mr' ? '#जनबदलाव' :
                language === 'hi' ? '#जनबदलाव' : '#JanBadlaav'}
            </Badge>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section for Political Party */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-black/20 text-white border-0 backdrop-blur">
            {language === 'mr' ? 'चळवळीत सामील व्हा' :
              language === 'hi' ? 'आंदोलन में शामिल हों' : 'Join the Movement'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'mr' ? 'बदलाचा भाग व्हा' :
              language === 'hi' ? 'बदलाव का हिस्सा बनें' : 'Be Part of the Change'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {language === 'mr'
              ? 'चांगल्या, सशक्त भारतासाठी काम करणाऱ्या हजारो नागरिकांमध्ये सामील व्हा. तुमचा सहभाग फरक करू शकतो.'
              : language === 'hi'
                ? 'एक बेहतर, मजबूत भारत के लिए काम कर रहे हजारों नागरिकों में शामिल हों। आपकी भागीदारी बदलाव ला सकती है।'
                : 'Join thousands of citizens working towards a better, stronger India. Your participation can make a difference.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/join">
              <Button size="lg" variant="secondary" className="bg-black text-white hover:bg-gray-800 shadow-lg border-black">
                {language === 'mr' ? 'सदस्य व्हा' :
                  language === 'hi' ? 'सदस्य बनें' : 'Become a Member'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-black">
                <IndianRupeeIcon className="h-4 w-4 mr-2" />
                {language === 'mr' ? 'कारणासाठी दान करा' :
                  language === 'hi' ? 'कारण के लिए दान करें' : 'Donate to Cause'}
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
            <div>✓ {language === 'mr' ? 'प्रभाव निर्माण' : language === 'hi' ? 'प्रभाव बनाएं' : 'Make Impact'}</div>
            <div>✓ {language === 'mr' ? 'धोरण आकार' : language === 'hi' ? 'नीति आकार' : 'Shape Policy'}</div>
            <div>✓ {language === 'mr' ? 'नेते नेटवर्क' : language === 'hi' ? 'नेता नेटवर्क' : 'Network Leaders'}</div>
            <div>✓ {language === 'mr' ? 'राष्ट्र सेवा' : language === 'hi' ? 'राष्ट्र सेवा' : 'Serve Nation'}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;