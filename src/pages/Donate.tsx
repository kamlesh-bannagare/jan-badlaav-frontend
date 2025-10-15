import { useState } from 'react';
import { QrCode, CreditCard, Building2, Copy, Check, Heart, Shield, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const Donate = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('upi');

  const upiId = 'jantabadlaav@upi';
  const accountNumber = '1234567890';
  const ifscCode = 'SBIN0001234';
  const accountName = 'Janta Badlaav Movement';
  const bankName = 'State Bank of India';
  const branch = 'Main Branch, Mumbai';

  // Helper function to get localized text
  const getLocalizedText = (item, field) => {
    if (language === 'mr') return item[`${field}Mr`] || item[field];
    if (language === 'hi') return item[`${field}Hi`] || item[field];
    return item[field];
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: language === 'mr' ? "कॉपी केले!" : language === 'hi' ? "कॉपी किया!" : "Copied!",
      description: language === 'mr' ? `${field} क्लिपबोर्डवर कॉपी केले` : 
                   language === 'hi' ? `${field} क्लिपबोर्ड पर कॉपी किया` : 
                   `${field} copied to clipboard`,
      duration: 2000,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const donationImpacts = [
    {
      icon: Users,
      title: "Education Programs",
      titleMr: "शिक्षण कार्यक्रम",
      titleHi: "शिक्षा कार्यक्रम",
      description: "Support skill development and education initiatives for underprivileged youth",
      descriptionMr: "गरिब युवकांसाठी कौशल्य विकास आणि शिक्षण उपक्रमांना समर्थन",
      descriptionHi: "वंचित युवाओं के लिए कौशल विकास और शिक्षा पहल का समर्थन",
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      titleMr: "आरोग्यसेवा",
      titleHi: "स्वास्थ्य सेवाएं",
      description: "Fund healthcare camps and medical assistance programs in rural areas",
      descriptionMr: "ग्रामीण भागात आरोग्य शिबिरे आणि वैद्यकीय मदत कार्यक्रमांना निधी",
      descriptionHi: "ग्रामीण क्षेत्रों में स्वास्थ्य शिविर और चिकित्सा सहायता कार्यक्रमों को निधि दें",
    },
    {
      icon: Target,
      title: "Community Development",
      titleMr: "समुदाय विकास",
      titleHi: "सामुदायिक विकास",
      description: "Enable grassroots initiatives and sustainable community projects",
      descriptionMr: "तळागाळातील उपक्रम आणि शाश्वत समुदाय प्रकल्प सक्षम करा",
      descriptionHi: "जमीनी स्तर की पहल और स्थायी सामुदायिक परियोजनाओं को सक्षम करें",
    },
    {
      icon: Shield,
      title: "Legal Awareness",
      titleMr: "कायदेशीर जागरुकता",
      titleHi: "कानूनी जागरूकता",
      description: "Support legal aid and awareness programs for citizen rights",
      descriptionMr: "नागरी हक्कांसाठी कायदेशीर मदत आणि जागरुकता कार्यक्रमांना समर्थन",
      descriptionHi: "नागरिक अधिकारों के लिए कानूनी सहायता और जागरूकता कार्यक्रमों का समर्थन करें",
    }
  ];

  const tabs = [
    {
      value: 'upi',
      label: 'UPI / QR Code',
      labelMr: 'UPI / QR कोड',
      labelHi: 'UPI / QR कोड',
      icon: QrCode
    },
    {
      value: 'bank',
      label: 'Bank Transfer',
      labelMr: 'बँक हस्तांतरण',
      labelHi: 'बैंक ट्रांसफर',
      icon: Building2
    }
  ];

  const bankDetails = [
    {
      label: "Account Name",
      labelMr: "खातेाचे नाव",
      labelHi: "खाता नाम",
      value: accountName
    },
    {
      label: "Account Number",
      labelMr: "खातेाचा क्रमांक",
      labelHi: "खाता संख्या",
      value: accountNumber
    },
    {
      label: "IFSC Code",
      labelMr: "IFSC कोड",
      labelHi: "IFSC कोड",
      value: ifscCode
    },
    {
      label: "Bank Name",
      labelMr: "बँकेचे नाव",
      labelHi: "बैंक का नाम",
      value: bankName
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-3xl mb-6 shadow-lg">
            <Heart className="h-10 w-10 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            {t('donateTitle') || (language === 'mr' ? 'आमच्या मोहिमेस समर्थन द्या' : 
               language === 'hi' ? 'हमारे मिशन का समर्थन करें' : 'Support Our Mission')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('donateDescription') || (language === 'mr' ? 
              'तुमचे योगदान भ्रष्टाचाराविरुद्धच्या आमच्या लढ्याला चालना देते आणि सर्वांसाठी चांगला महाराष्ट्र निर्माण करण्यास मदत करते.' : 
              language === 'hi' ? 
              'आपका योगदान भ्रष्टाचार के खिलाफ हमारी लड़ाई को शक्ति देता है और सभी के लिए बेहतर महाराष्ट्र बनाने में मदद करता है।' : 
              'Your contribution fuels our fight against corruption and helps build a better Maharashtra for everyone.')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Methods - 2/3 width */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="border-2 border-yellow-400 shadow-2xl bg-white overflow-hidden">
                <CardHeader className="bg-yellow-400 text-black pb-8">
                  <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                    <Heart className="h-8 w-8" />
                    {language === 'mr' ? 'देणगी द्या' : 
                     language === 'hi' ? 'दान करें' : 
                     'Make a Donation'}
                  </CardTitle>
                  <CardDescription className="text-black text-lg">
                    {language === 'mr' ? 'आपली पसंतीची पेमेंट पद्धत निवडा' : 
                     language === 'hi' ? 'अपनी पसंदीदा भुगतान विधि चुनें' : 
                     'Choose your preferred payment method'}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 p-2 bg-gray-100">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <TabsTrigger 
                            key={tab.value}
                            value={tab.value} 
                            className="flex items-center gap-3 py-4 data-[state=active]:bg-yellow-400 data-[state=active]:text-black data-[state=active]:shadow-lg"
                          >
                            <Icon className="h-5 w-5" />
                            <span className="font-semibold">{getLocalizedText(tab, 'label')}</span>
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>

                    <AnimatePresence mode="wait">
                      {/* UPI & QR Code */}
                      <TabsContent value="upi" className="m-0">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 md:p-8"
                        >
                          <div className="flex flex-col lg:flex-row gap-8 items-center">
                            {/* QR Code Section */}
                            <div className="flex-1 text-center">
                              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-yellow-400 inline-block">
                                <div className="w-64 h-64 bg-yellow-100 rounded-xl flex items-center justify-center border-2 border-dashed border-yellow-400">
                                  <div className="text-center">
                                    <QrCode className="h-32 w-32 mx-auto mb-4 text-yellow-600" />
                                    <p className="text-sm text-yellow-800 font-medium">
                                      {language === 'mr' ? 'UPI द्वारे देणगी देण्यासाठी QR कोड स्कॅन करा' : 
                                       language === 'hi' ? 'UPI के माध्यम से दान करने के लिए QR कोड स्कैन करें' : 
                                       'Scan QR code to donate via UPI'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* UPI Details */}
                            <div className="flex-1 space-y-6">
                              <div>
                                <h3 className="text-xl font-bold text-black mb-4">
                                  {language === 'mr' ? 'UPI पेमेंट तपशील' : 
                                   language === 'hi' ? 'UPI भुगतान विवरण' : 
                                   'UPI Payment Details'}
                                </h3>
                                
                                <div className="space-y-4">
                                  <div>
                                    <Label className="text-sm font-semibold text-black mb-2 block">
                                      {language === 'mr' ? 'UPI आयडी' : 
                                       language === 'hi' ? 'UPI आईडी' : 
                                       'UPI ID'}
                                    </Label>
                                    <div className="flex gap-3">
                                      <Input
                                        value={upiId}
                                        readOnly
                                        className="font-mono text-lg border-2 border-yellow-400 bg-yellow-50 py-3 text-black"
                                      />
                                      <Button
                                        size="lg"
                                        onClick={() => copyToClipboard(upiId, 'UPI ID')}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 border-2 border-yellow-400"
                                      >
                                        {copiedField === 'UPI ID' ? (
                                          <Check className="h-5 w-5" />
                                        ) : (
                                          <Copy className="h-5 w-5" />
                                        )}
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-yellow-100 border border-yellow-400 rounded-2xl p-4">
                                <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                                  📱 {language === 'mr' ? 'समर्थित अॅप्स' : 
                                      language === 'hi' ? 'समर्थित ऐप्स' : 
                                      'Supported Apps'}
                                </h4>
                                <p className="text-black text-sm">
                                  {language === 'mr' ? 'Google Pay, PhonePe, Paytm, BHIM, आणि सर्व UPI-सक्षम अॅप्लिकेशन्स' : 
                                   language === 'hi' ? 'Google Pay, PhonePe, Paytm, BHIM, और सभी UPI-सक्षम एप्लिकेशन' : 
                                   'Google Pay, PhonePe, Paytm, BHIM, and all UPI-enabled applications'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </TabsContent>

                      {/* Bank Transfer */}
                      <TabsContent value="bank" className="m-0">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 md:p-8"
                        >
                          <div className="space-y-6">
                            <h3 className="text-xl font-bold text-black mb-2">
                              {language === 'mr' ? 'बँक खातेाचे तपशील' : 
                               language === 'hi' ? 'बैंक खाता विवरण' : 
                               'Bank Account Details'}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {bankDetails.map((detail, index) => (
                                <div key={index} className="space-y-2">
                                  <Label className="text-sm font-semibold text-black">
                                    {getLocalizedText(detail, 'label')}
                                  </Label>
                                  <div className="flex gap-2">
                                    <Input
                                      value={detail.value}
                                      readOnly
                                      className={`border-2 border-yellow-400 bg-yellow-50 text-black ${
                                        detail.label.includes('Number') || detail.label.includes('Code') ? 'font-mono' : ''
                                      }`}
                                    />
                                    {detail.label !== 'Bank Name' && (
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => copyToClipboard(detail.value, getLocalizedText(detail, 'label'))}
                                        className="border-2 border-yellow-400 hover:bg-yellow-400"
                                      >
                                        {copiedField === getLocalizedText(detail, 'label') ? (
                                          <Check className="h-4 w-4 text-green-600" />
                                        ) : (
                                          <Copy className="h-4 w-4" />
                                        )}
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="bg-yellow-100 border border-yellow-400 rounded-2xl p-6">
                              <h4 className="font-bold text-black mb-3 flex items-center gap-2 text-lg">
                                💡 {language === 'mr' ? 'महत्वाच्या सूचना' : 
                                    language === 'hi' ? 'महत्वपूर्ण निर्देश' : 
                                    'Important Instructions'}
                              </h4>
                              <ul className="text-black space-y-2 text-sm">
                                <li>• {language === 'mr' ? 'वरील दिलेली अचूक खातेाची माहिती वापरा' : 
                                    language === 'hi' ? 'ऊपर दिए गए सटीक खाता विवरण का उपयोग करें' : 
                                    'Use the exact account details provided above'}</li>
                                <li>• {language === 'mr' ? 'नोंदीसाठी व्यवहार संदर्भ क्रमांक ठेवा' : 
                                    language === 'hi' ? 'रिकॉर्ड के लिए लेनदेन संदर्भ संख्या रखें' : 
                                    'Keep the transaction reference number for records'}</li>
                                <li>• {language === 'mr' ? 'व्यवहार तपशील donations@jantabadlaav.org येथे ईमेल करा' : 
                                    language === 'hi' ? 'लेनदेन विवरण donations@jantabadlaav.org पर ईमेल करें' : 
                                    'Email transaction details to donations@jantabadlaav.org'}</li>
                                <li>• {language === 'mr' ? 'विनंती केल्यास कर सूट प्रमाणपत्र प्रदान केले जाईल' : 
                                    language === 'hi' ? 'अनुरोध पर टैक्स छूट प्रमाणपत्र प्रदान किया जाएगा' : 
                                    'Tax exemption certificate provided upon request'}</li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      </TabsContent>
                    </AnimatePresence>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Impact Section - 1/3 width */}
          <div className="lg:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Impact Cards */}
              <Card className="border-2 border-yellow-400 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    <Target className="h-5 w-5" />
                    {language === 'mr' ? 'तुमचा प्रभाव' : 
                     language === 'hi' ? 'आपका प्रभाव' : 
                     'Your Impact'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {donationImpacts.map((impact, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200"
                    >
                      <div className="h-10 w-10 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <impact.icon className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black text-sm">{getLocalizedText(impact, 'title')}</h4>
                        <p className="text-xs text-gray-600 mt-1">{getLocalizedText(impact, 'description')}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Tax Benefits */}
              <Card className="border-2 border-yellow-400 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    <Shield className="h-5 w-5" />
                    {language === 'mr' ? 'कर फायदे' : 
                     language === 'hi' ? 'टैक्स लाभ' : 
                     'Tax Benefits'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-black text-sm mb-2">
                        {language === 'mr' ? '80G कर सूट' : 
                         language === 'hi' ? '80G टैक्स छूट' : 
                         '80G Tax Exemption'}
                      </h4>
                      <p className="text-xs text-gray-700">
                        {language === 'mr' ? 'आयकर कायद्याच्या कलम 80G अंतर्गत तुमच्या देणगीवर 50% कर कपात' : 
                         language === 'hi' ? 'आयकर अधिनियम की धारा 80G के तहत आपके दान पर 50% कर कटौती' : 
                         '50% tax deduction on your donation under Section 80G of Income Tax Act'}
                      </p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-black text-sm mb-2">
                        {language === 'mr' ? 'FCRA अनुपालन' : 
                         language === 'hi' ? 'FCRA अनुपालन' : 
                         'FCRA Compliant'}
                      </h4>
                      <p className="text-xs text-gray-700">
                        {language === 'mr' ? 'सर्व देणग्या योग्यरित्या दस्तऐवजीकरण केल्या जातात आणि नियमांनुसार अनुपालन करतात' : 
                         language === 'hi' ? 'सभी दान ठीक से दस्तावेजीकृत हैं और नियमों का पालन करते हैं' : 
                         'All donations are properly documented and compliant with regulations'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-2 border-yellow-400 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    <Users className="h-5 w-5" />
                    {language === 'mr' ? 'आमची पोहोच' : 
                     language === 'hi' ? 'हमारी पहुंच' : 
                     'Our Reach'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                      <div className="text-lg font-bold text-black">50K+</div>
                      <div className="text-xs text-gray-700">
                        {language === 'mr' ? 'जीवन प्रभावित' : 
                         language === 'hi' ? 'जीवन प्रभावित' : 
                         'Lives Impacted'}
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                      <div className="text-lg font-bold text-black">200+</div>
                      <div className="text-xs text-gray-700">
                        {language === 'mr' ? 'गावे' : 
                         language === 'hi' ? 'गाँव' : 
                         'Villages'}
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                      <div className="text-lg font-bold text-black">25</div>
                      <div className="text-xs text-gray-700">
                        {language === 'mr' ? 'जिल्हे' : 
                         language === 'hi' ? 'जिले' : 
                         'Districts'}
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                      <div className="text-lg font-bold text-black">5</div>
                      <div className="text-xs text-gray-700">
                        {language === 'mr' ? 'वर्षे' : 
                         language === 'hi' ? 'साल' : 
                         'Years'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-yellow-50 rounded-2xl p-6 shadow-lg border-2 border-yellow-400 max-w-2xl mx-auto">
            <h3 className="font-semibold text-black mb-2">
              {language === 'mr' ? 'पारदर्शकता आणि जबाबदारी' : 
               language === 'hi' ? 'पारदर्शिता और जवाबदेही' : 
               'Transparency & Accountability'}
            </h3>
            <p className="text-sm text-gray-700">
              {language === 'mr' ? 
                'सर्व देणग्या सत्यापनासाठी आहेत. तपशीलवार वापर अहवाल त्रैमासिक प्रकाशित केले जातात. लागू कायद्यांनुसार कर सूट प्रमाणपत्रे प्रदान केली जातील.' : 
               language === 'hi' ? 
                'सभी दान सत्यापन के अधीन हैं। विस्तृत उपयोग रिपोर्ट त्रैमासिक प्रकाशित की जाती हैं। लागू कानूनों के अनुसार कर छूट प्रमाण पत्र प्रदान किए जाएंगे।' : 
               'All donations are subject to verification. Detailed utilization reports are published quarterly. Tax exemption certificates will be provided as per applicable laws.'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donate;