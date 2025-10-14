import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingDown,
  AlertTriangle,
  Users,
  GraduationCap,
  Heart,
  Briefcase,
  Home,
  Wifi,
  Scale,
  Eye,
  Clock,
  ArrowUp,
  ArrowDown,
  MapPin,
  BarChart3,
  PieChart
} from "lucide-react";

/**
 * Factsheet.jsx
 * - Improved UI & responsiveness
 * - Kept all original functionality (language support, tabs, data arrays)
 * - Fixes: transition delay handling, icon rendering, responsive images
 */

const Factsheet = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // reveal animation on mount
    setIsVisible(true);
  }, []);

  const getLocalizedText = (item, field) => {
    if (!item) return "";
    if (language === "mr") return item[`${field}Mr`] || item[field];
    if (language === "hi") return item[`${field}Hi`] || item[field];
    return item[field];
  };

  const tabs = [
    { id: "overview", label: "Current Reality", labelMr: "सध्याची वास्तविकता", labelHi: "वर्तमान वास्तविकता" },
    { id: "corruption", label: "Corruption", labelMr: "भ्रष्टाचार", labelHi: "भ्रष्टाचार" },
    { id: "employment", label: "Employment", labelMr: "रोजगार", labelHi: "रोजगार" },
    { id: "development", label: "Development", labelMr: "विकास", labelHi: "विकास" }
  ];

  const criticalIssues = [
    {
      icon: Scale,
      title: "Corruption Index",
      titleMr: "भ्रष्टाचार निर्देशांक",
      titleHi: "भ्रष्टाचार सूचकांक",
      value: "85/100",
      description: "Maharashtra ranks high in corruption cases",
      descriptionMr: "महाराष्ट्र भ्रष्टाचाराच्या प्रकरणांमध्ये अग्रेसर",
      change: "+12%",
      trend: "up",
      color: "from-red-500 to-orange-500",
      image:
        "https://www.shutterstock.com/image-vector/illustration-businessman-hands-giving-taking-600nw-2480386373.jpg",
      details: {
        label: "Pending Corruption Cases",
        labelMr: "प्रलंबित भ्रष्टाचार प्रकरणे",
        labelHi: "लंबित भ्रष्टाचार मामले",
        value: "15,247",
        valueMr: "१५,२४७"
      }
    },
    {
      icon: Briefcase,
      title: "Youth Unemployment",
      titleMr: "युवा बेरोजगारी",
      titleHi: "युवा बेरोजगारी",
      value: "18.5%",
      description: "Highest in last decade, educated youth affected most",
      descriptionMr: "गेल्या दशकातील सर्वात जास्त, शिक्षित युवक सर्वात जास्त प्रभावित",
      change: "+4.2%",
      trend: "up",
      color: "from-orange-500 to-yellow-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnUiIcSvxnGuT_j4YdH_YxnuWVMHSaf9elA&s",
      details: {
        label: "Jobless Graduates",
        labelMr: "नोकरीविना पदवीधर",
        labelHi: "बेरोजगार स्नातक",
        value: "2.8M",
        valueMr: "२८ लाख"
      }
    },
    {
      icon: GraduationCap,
      title: "Education Crisis",
      titleMr: "शिक्षण संकट",
      titleHi: "शिक्षण संकट",
      value: "42%",
      description: "Rural students lack basic reading skills after 5th grade",
      descriptionMr: "ग्रामीण विद्यार्थ्यांना पाचवी नंतर मूलभूत वाचन कौशल्य नाही",
      change: "-8%",
      trend: "down",
      color: "from-purple-500 to-pink-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Yk16ofz_V0dH5DM4r7m1lB_GDyOiupvthQ&s",
      details: {
        label: "School Dropout Rate",
        labelMr: "शाळा सोडण्याचा दर",
        labelHi: "स्कूल ड्रॉपआउट दर",
        value: "35%",
        valueMr: "३५%"
      }
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      titleMr: "आरोग्यसेवा प्रवेश",
      titleHi: "स्वास्थ्य सेवा पहुंच",
      value: "1:1800",
      description: "Doctor to patient ratio in rural Maharashtra",
      descriptionMr: "ग्रामीण महाराष्ट्रात डॉक्टर-रुग्ण प्रमाण",
      change: "No Change",
      trend: "neutral",
      color: "from-green-500 to-teal-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qjgvizswZoUUmdDStCTusQRXK0OgKCW5cg&s",
      details: {
        label: "Primary Health Centers",
        labelMr: "प्राथमिक आरोग्य केंद्रे",
        labelHi: "प्राथमिक स्वास्थ्य केंद्र",
        value: "45% Understaffed",
        valueMr: "४५% अपुरा कर्मचारी"
      }
    }
  ];

  const corruptionFacts = [
    {
      title: "Scam Amount 2023",
      titleMr: "२०२३ घोटाळा रक्कम",
      titleHi: "२०२३ घोटाले की राशि",
      value: "₹12,847 Cr",
      valueMr: "१२,८४७ कोटी",
      description: "Total scam amount uncovered in Maharashtra",
      descriptionMr: "महाराष्ट्रात उघडकीस आलेली एकूण घोटाळा रक्कम",
      icon: AlertTriangle
    },
    {
      title: "Pending Investigations",
      titleMr: "प्रलंबित तपास",
      titleHi: "लंबित जांच",
      value: "8,452",
      valueMr: "८,४५२",
      description: "Corruption cases awaiting investigation",
      descriptionMr: "तपासाची वाट पाहत असलेली भ्रष्टाचार प्रकरणे",
      icon: Clock
    },
    {
      title: "Conviction Rate",
      titleMr: "दोषी ठरविण्याचा दर",
      titleHi: "दोषसिद्धि दर",
      value: "18%",
      valueMr: "१८%",
      description: "Only 18% corruption cases result in conviction",
      descriptionMr: "केवळ १८% भ्रष्टाचार प्रकरणांत दोषसिद्धी",
      icon: TrendingDown
    }
  ];

  const employmentData = [
    {
      category: "Engineering Graduates Unemployed",
      categoryMr: "बेरोजगार अभियांत्रिकी पदवीधर",
      categoryHi: "बेरोजगार इंजीनियरिंग स्नातक",
      percentage: 32,
      count: "1.2M",
      trend: "up"
    },
    {
      category: "MBA Graduates Without Jobs",
      categoryMr: "नोकरीविना एमबीए पदवीधर",
      categoryHi: "बिना नौकरी के एमबीए स्नातक",
      percentage: 28,
      count: "850K",
      trend: "up"
    },
    {
      category: "Skilled Workers Migrating",
      categoryMr: "सुविद्ध कामगार स्थलांतरित",
      categoryHi: "कुशल कामगार पलायन",
      percentage: 45,
      count: "3.5M",
      trend: "up"
    },
    {
      category: "Women Workforce Participation",
      categoryMr: "महिला कामगार सहभाग",
      categoryHi: "महिला कार्यबल भागीदारी",
      percentage: 22,
      count: "8.4M",
      trend: "down"
    }
  ];

  const developmentGaps = [
    {
      area: "Rural Road Connectivity",
      areaMr: "ग्रामीण रस्ते कनेक्टिव्हिटी",
      areaHi: "ग्रामीण सड़क कनेक्टिविटी",
      completed: 45,
      target: 100,
      delay: "8 years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jpneA_cnkkAlQHfcQHbqRmqqBM3RvQljLw&s"
    },
    {
      area: "Infrastructure",
      areaMr: "पायाभूत सुविधा",
      areaHi: "बुनियादी ढांचा",
      completed: 38,
      target: 100,
      delay: "6 years",
      image: "https://borgenproject.org/wp-content/uploads/Housing-Conditions-in-India.jpg"
    },
    {
      area: "Clean Water Supply",
      areaMr: "स्वच्छ पाणीपुरवठा",
      areaHi: "स्वच्छ जल आपूर्ति",
      completed: 52,
      target: 100,
      delay: "12 years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFLiTAFFmISt_1YkPjTmahm8z7LxmJIdAbHNT1Ma8AscWFSzTCZ7rDOPOSvBCKXphFvM&usqp=CAU"
    },
    {
      area: "Affordable Housing",
      areaMr: "किफायती गृहनिर्माण",
      areaHi: "किफायती आवास",
      completed: 28,
      target: 100,
      delay: "10 years",
      image: "https://s3.youthkiawaaz.com/wp-content/uploads/2014/07/06095039/homeless-in-india.jpg"
    }
  ];

  // Reusable progress bar component (unchanged functionality)
  const ProgressBar = ({ percentage, color = "bg-red-500", label, current, target }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-sm">{label}</span>
        <span className="text-sm text-muted-foreground">
          {current}% / {target}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );

  /**
   * IssueCard
   * - kept original data usage and fields
   * - fixed icon rendering and transition delay handling (inline style)
   */
  const IssueCard = ({ issue, index }) => {
    const Icon = issue.icon || AlertTriangle;
    const transitionDelay = `${index * 100}ms`;
    return (
      <div
        style={{ transitionDelay }}
        className={`transform transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        <Card className="overflow-hidden group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow border border-red-100">
          {/* Gradient top */}
          <div className={`h-1 w-full bg-gradient-to-r ${issue.color}`} />

          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* left content */}
              <div className="md:col-span-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 flex items-center justify-center shadow-sm">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>

                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        issue.trend === "up"
                          ? "bg-red-100 text-red-700"
                          : issue.trend === "down"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                      aria-hidden
                    >
                      {issue.trend === "up" ? (
                        <ArrowUp className="h-3 w-3 mr-1" />
                      ) : issue.trend === "down" ? (
                        <ArrowDown className="h-3 w-3 mr-1" />
                      ) : null}
                      <span>{issue.change}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-red-600 mb-1">{issue.value}</h3>
                  <p className="font-semibold text-lg mb-1">{getLocalizedText(issue, "title")}</p>
                  <p className="text-sm text-muted-foreground mb-4">{getLocalizedText(issue, "description")}</p>
                </div>

                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-red-800">{getLocalizedText(issue.details, "label")}</p>
                  <p className="text-lg font-bold text-red-600">{getLocalizedText(issue.details, "value")}</p>
                </div>
              </div>

              {/* image / visual area */}
              <div className="md:col-span-2 bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center border-t md:border-t-0 md:border-l">
                {issue?.image ? (
                  <div className="w-full h-60 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={issue.image}
                      alt={getLocalizedText(issue, "title") || "Issue image"}
                      className="w-full h-full object-cover md:object-contain transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/image-fallback.png";
                      }}
                    />
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-400 italic">No image available</div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50/30">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div
            className={`mx-auto max-w-3xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              {language === "mr"
                ? "महाराष्ट्र: सध्याचे संकट"
                : language === "hi"
                ? "महाराष्ट्र: वर्तमान संकट"
                : "Maharashtra: Current Crisis"}
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
              {language === "mr"
                ? "भ्रष्टाचार, बेरोजगारी आणि अविकसितता - महाराष्ट्राची कठीण वास्तविकता"
                : language === "hi"
                ? "भ्रष्टाचार, बेरोजगारी और अविकसितता - महाराष्ट्र की कठोर वास्तविकता"
                : "Corruption, Unemployment & Underdevelopment - The Harsh Reality of Maharashtra"}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-6 px-4 bg-white border-b border-red-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-red-50 border border-red-100"
                }`}
              >
                {getLocalizedText(tab, "label")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto max-w-6xl py-12 px-4">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-8 text-red-700 text-center">
                {language === "mr" ? "महत्वाच्या समस्या" : language === "hi" ? "प्रमुख समस्याएं" : "Critical Issues"}
              </h2>

              <div className="space-y-6">
                {criticalIssues.map((issue, index) => (
                  <IssueCard key={index} issue={issue} index={index} />
                ))}
              </div>
            </section>

            {/* Quick Facts */}
            <section>
              <Card className="border border-red-200 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
                  <CardTitle className="text-2xl flex items-center gap-2 text-red-700">
                    <AlertTriangle className="h-6 w-6" />
                    {language === "mr" ? "त्वरित तथ्ये" : language === "hi" ? "त्वरित तथ्य" : "Quick Facts"}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        icon: Users,
                        title: "Farmer Suicides",
                        titleMr: "शेतकऱ्यांचे आत्महत्या",
                        titleHi: "किसान आत्महत्याएं",
                        value: "12,847",
                        description: "Last 5 years in Maharashtra"
                      },
                      {
                        icon: Home,
                        title: "Slum Population",
                        titleMr: "झोपडपट्टी लोकसंख्या",
                        titleHi: "झुग्गी आबादी",
                        value: "42%",
                        description: "Mumbai urban population"
                      },
                      {
                        icon: Wifi,
                        title: "Digital Divide",
                        titleMr: "डिजिटल दरी",
                        titleHi: "डिजिटल विभाजन",
                        value: "65%",
                        description: "Rural areas without internet"
                      },
                      {
                        icon: Scale,
                        title: "Pending Court Cases",
                        titleMr: "प्रलंबित न्यायालयीन प्रकरणे",
                        titleHi: "लंबित अदालती मामले",
                        value: "4.2M",
                        description: "In Maharashtra courts"
                      }
                    ].map((fact, idx) => {
                      const Icon = fact.icon;
                      return (
                        <div
                          key={idx}
                          className="text-center p-6 border border-red-100 rounded-xl hover:shadow-md transition-shadow bg-white"
                        >
                          <Icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-red-700 mb-2">{fact.value}</h3>
                          <p className="font-semibold text-red-800 mb-2">{getLocalizedText(fact, "title")}</p>
                          <p className="text-sm text-muted-foreground">{fact.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {/* Corruption */}
        {activeTab === "corruption" && (
          <div className="space-y-8">
            <Card className="border border-red-200 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
                <CardTitle className="text-2xl flex items-center gap-2 text-red-700">
                  <Scale className="h-6 w-6" />
                  {language === "mr" ? "भ्रष्टाचाराचे आकडे" : language === "hi" ? "भ्रष्टाचार के आंकड़े" : "Corruption Statistics"}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {corruptionFacts.map((fact, index) => {
                    const Icon = fact.icon;
                    return (
                      <div key={index} className="text-center p-6 border border-red-100 rounded-xl bg-white">
                        <Icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-red-700 mb-2">{getLocalizedText(fact, "value")}</h3>
                        <p className="font-semibold text-red-800 mb-2">{getLocalizedText(fact, "title")}</p>
                        <p className="text-sm text-muted-foreground">{getLocalizedText(fact, "description")}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Major Scams */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-red-700">
                    {language === "mr" ? "मोठे घोटाळे" : language === "hi" ? "बड़े घोटाले" : "Major Scams"}
                  </h4>

                  <div className="space-y-4">
                    {[
                      {
                        name: "Maharashtra Cooperative Bank Scam",
                        nameMr: "महाराष्ट्र सहकारी बँक घोटाळा",
                        nameHi: "महाराष्ट्र सहकारी बैंक घोटाला",
                        amount: "₹4,500 Cr",
                        year: "2023",
                        status: "Under Investigation"
                      },
                      {
                        name: "Irrigation Department Scam",
                        nameMr: "सिंचन विभाग घोटाळा",
                        nameHi: "सिंचाई विभाग घोटाला",
                        amount: "₹3,200 Cr",
                        year: "2022",
                        status: "Trial Ongoing"
                      },
                      {
                        name: "Education Department Scam",
                        nameMr: "शिक्षण विभाग घोटाळा",
                        nameHi: "शिक्षा विभाग घोटाला",
                        amount: "₹2,100 Cr",
                        year: "2021",
                        status: "Charges Filed"
                      }
                    ].map((scam, index) => (
                      <div key={index} className="p-4 border border-red-100 rounded-xl bg-white hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-bold text-lg text-red-800">{getLocalizedText(scam, "name")}</h5>
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">{scam.amount}</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Year: {scam.year}</span>
                          <span>Status: {scam.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Employment */}
        {activeTab === "employment" && (
          <div className="space-y-8">
            <Card className="border border-orange-200 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-200">
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-700">
                  <Briefcase className="h-6 w-6" />
                  {language === "mr" ? "रोजगार संकट" : language === "hi" ? "रोजगार संकट" : "Employment Crisis"}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-6 text-orange-700">
                      {language === "mr" ? "बेरोजगारी विभागणी" : language === "hi" ? "बेरोजगारी वितरण" : "Unemployment Distribution"}
                    </h4>

                    <div className="space-y-4">
                      {employmentData.map((item, index) => (
                        <div key={index} className="p-4 border border-orange-100 rounded-xl bg-white">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-semibold text-orange-800">{getLocalizedText(item, "category")}</h5>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                item.trend === "up" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                              }`}
                            >
                              {item.percentage}%
                            </span>
                          </div>

                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full ${item.trend === "up" ? "bg-red-500" : "bg-green-500"}`}
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>

                          <div className="flex justify-between text-sm text-muted-foreground mt-2">
                            <span>{item.count}</span>
                            <span>{item.trend === "up" ? "Increasing" : "Decreasing"}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-6 text-orange-700">
                      {language === "mr" ? "रोजगार तथ्ये" : language === "hi" ? "रोजगार तथ्य" : "Employment Facts"}
                    </h4>

                    <div className="space-y-6">
                      {[
                        {
                          fact: "Job applications per vacancy",
                          factMr: "प्रति रिक्त पदी नोकरी अर्ज",
                          factHi: "प्रति रिक्त पद नौकरी आवेदन",
                          value: "1,250",
                          trend: "up"
                        },
                        {
                          fact: "Average waiting period for graduates",
                          factMr: "पदवीधरांसाठी सरासरी प्रतीक्षा काल",
                          factHi: "स्नातकों के लिए औसत प्रतीक्षा अवधि",
                          value: "18 months",
                          trend: "up"
                        },
                        {
                          fact: "Underemployment rate",
                          factMr: "अपुरा रोजगार दर",
                          factHi: "अल्परोजगार दर",
                          value: "35%",
                          trend: "up"
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-4 border border-orange-200 rounded-xl bg-white">
                          <div className="text-2xl font-bold text-orange-600 mb-2">{item.value}</div>
                          <p className="text-sm text-orange-800">{getLocalizedText(item, "fact")}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Development */}
        {activeTab === "development" && (
          <div className="space-y-8">
            <Card className="border border-purple-200 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                <CardTitle className="text-2xl flex items-center gap-2 text-purple-700">
                  <Home className="h-6 w-6" />
                  {language === "mr" ? "विकासातील उणीवा" : language === "hi" ? "विकास में कमियां" : "Development Gaps"}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-6">
                  {developmentGaps.map((project, index) => (
                    <div key={index} className="border border-purple-100 rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center overflow-hidden">
                            {/* keep visual small and responsive */}
                            <img
                              src={project.image}
                              alt={getLocalizedText(project, "area") || "project image"}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/images/image-fallback.png";
                              }}
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="md:w-3/4">
                          <h4 className="text-xl font-bold text-purple-800 mb-4">{getLocalizedText(project, "area")}</h4>

                          <ProgressBar
                            percentage={project.completed}
                            color="bg-purple-500"
                            label={`${getLocalizedText(project, "area")} - ${project.delay} ${language === "mr" ? "विलंब" : language === "hi" ? "विलंब" : "delay"}`}
                            current={project.completed}
                            target={project.target}
                          />

                          <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                            <div className="text-center p-3 bg-purple-50 rounded-lg">
                              <div className="text-lg font-bold text-purple-600">{project.completed}%</div>
                              <div className="text-purple-800">{language === "mr" ? "पूर्ण" : language === "hi" ? "पूर्ण" : "Completed"}</div>
                            </div>
                            <div className="text-center p-3 bg-red-50 rounded-lg">
                              <div className="text-lg font-bold text-red-600">{project.delay}</div>
                              <div className="text-red-800">{language === "mr" ? "विलंब" : language === "hi" ? "विलंब" : "Delay"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to action */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 shadow-2xl rounded-2xl">
            <CardContent className="p-12 text-center">
              <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-3xl font-bold mb-4">
                {language === "mr" ? "वेळ आली आहे बदलाची!" : language === "hi" ? "बदल का समय आ गया है!" : "Time for Change Has Come!"}
              </h2>
              <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl mx-auto">
                {language === "mr"
                  ? "भ्रष्टाचार, बेरोजगारी आणि अविकसिततेविरुद्ध लढा द्या. जनता बदल चळवळीचा भाग व्हा."
                  : language === "hi"
                  ? "भ्रष्टाचार, बेरोजगारी और अविकसितता के खिलाफ लड़ाई में शामिल हों। जनता बदलाव आंदोलन का हिस्सा बनें।"
                  : "Join the fight against corruption, unemployment and underdevelopment. Become part of Janta Badlaav Movement."}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
                  {language === "mr" ? "आमच्यासोबत जोडा" : language === "hi" ? "हमसे जुड़ें" : "Join With Us"}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors text-lg">
                  {language === "mr" ? "अधिक माहिती" : language === "hi" ? "अधिक जानकारी" : "Learn More"}
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Factsheet;
