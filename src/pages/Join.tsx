import { useState } from 'react';
import { UserPlus, Mail, Phone, MapPin, CheckCircle, Users, Target, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const Join = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      language === 'mr' ? 'जनता बदलावमध्ये सामील झाल्याबद्दल धन्यवाद! आम्ही लवकरच आपल्याशी संपर्क साधू.' :
      language === 'hi' ? 'जनता बदलाव में शामिल होने के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।' :
      'Thank you for joining Janta Badlaav! We will contact you soon.'
    );
    setFormData({ name: '', email: '', phone: '', city: '' });
  };

  const benefits = [
    {
      text: 'Be part of a transformative political movement',
      textMr: 'परिवर्तनकारी राजकीय चळवळीचा भाग व्हा',
      textHi: 'एक परिवर्तनकारी राजनीतिक आंदोलन का हिस्सा बनें'
    },
    {
      text: 'Participate in policy discussions and decision-making',
      textMr: 'धोरण चर्चा आणि निर्णय प्रक्रियेत सहभागी व्हा',
      textHi: 'नीति विचार-विमर्श और निर्णय लेने में भाग लें'
    },
    {
      text: 'Access to exclusive events and workshops',
      textMr: 'विशेष कार्यक्रम आणि कार्यशाळांमध्ये प्रवेश',
      textHi: 'विशेष कार्यक्रमों और कार्यशालाओं तक पहुंच'
    },
    {
      text: 'Connect with like-minded individuals',
      textMr: 'समान विचारांच्या लोकांशी जोडला जा',
      textHi: 'समान विचारधारा वाले लोगों से जुड़ें'
    },
    {
      text: 'Contribute to community development initiatives',
      textMr: 'समुदाय विकास उपक्रमांमध्ये योगदान द्या',
      textHi: 'सामुदायिक विकास पहलों में योगदान दें'
    },
    {
      text: 'Voice your concerns directly to leadership',
      textMr: 'नेतृत्वाकडे थेट आपल्या चिंता व्यक्त करा',
      textHi: 'नेतृत्व को सीधे अपनी चिंताओं को व्यक्त करें'
    }
  ];

  const stats = [
    {
      number: '50,000+',
      label: 'Active Members',
      labelMr: 'सक्रिय सदस्य',
      labelHi: 'सक्रिय सदस्य'
    },
    {
      number: '200+',
      label: 'Cities Covered',
      labelMr: 'शहरे कव्हर केली',
      labelHi: 'शहर कवर किए गए'
    },
    {
      number: '25',
      label: 'Districts',
      labelMr: 'जिल्हे',
      labelHi: 'जिले'
    },
    {
      number: '5',
      label: 'Years of Service',
      labelMr: 'सेवेची वर्षे',
      labelHi: 'सेवा के वर्ष'
    }
  ];

  const getLocalizedText = (item, field) => {
    if (language === 'mr') return item[`${field}Mr`] || item[field];
    if (language === 'hi') return item[`${field}Hi`] || item[field];
    return item[field];
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header */}
        <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 py-16 px-4 rounded-3xl shadow-xl bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 border border-yellow-400"
    >
      {/* Icon Container */}
      <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-3xl mb-6 shadow-lg border border-yellow-400">
        <UserPlus className="h-10 w-10 text-white" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-900 drop-shadow-sm">
        {t('joinTitle') ||
          (language === 'mr'
            ? 'आमच्यासोबत जोडा'
            : language === 'hi'
            ? 'हमसे जुड़ें'
            : 'Join Our Movement')}
      </h1>

      {/* Description */}
      <p className="text-xl md:text-2xl text-yellow-900/90 max-w-4xl mx-auto leading-relaxed font-medium">
        {t('joinDescription') ||
          (language === 'mr'
            ? 'भ्रष्टाचाराविरुद्ध लढा देणाऱ्या चळवळीचा भाग व्हा. सर्वांसाठी चांगला महाराष्ट्र निर्माण करण्यासाठी आमच्यासोबत सामील व्हा.'
            : language === 'hi'
            ? 'भ्रष्टाचार के खिलाफ लड़ने वाले आंदोलन का हिस्सा बनें। सभी के लिए बेहतर महाराष्ट्र बनाने के लिए हमसे जुड़ें।'
            : 'Become part of the movement fighting against corruption. Join us to build a better Maharashtra for all.')}
      </p>
    </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-yellow-100 rounded-2xl shadow-lg border border-yellow-200"
            >
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {getLocalizedText(stat, 'label')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Membership Form */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border border-gray-300 shadow-2xl bg-white overflow-hidden">
                <div className="h-2 bg-yellow-500"></div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-yellow-500 flex items-center justify-center shadow-lg border border-yellow-400">
                      <UserPlus className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black">
                        {t('becomeMember') || (language === 'mr' ? 'सदस्यता घ्या' : 
                           language === 'hi' ? 'सदस्य बनें' : 'Become a Member')}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {language === 'mr' ? 'चळवळीचा भाग व्हा' : 
                         language === 'hi' ? 'आंदोलन का हिस्सा बनें' : 
                         'Join the movement today'}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-black mb-2 block">
                          {t('name') || 'Full Name'} *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-2 border-gray-300 bg-white py-3 px-4 rounded-xl focus:border-yellow-500 focus:ring-yellow-500 transition-colors"
                          placeholder={language === 'mr' ? 'आपले पूर्ण नाव' : 
                                     language === 'hi' ? 'आपका पूरा नाम' : 
                                     'Enter your full name'}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-black mb-2 block">
                          {t('email') || 'Email Address'} *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="pl-12 border-2 border-gray-300 bg-white py-3 px-4 rounded-xl focus:border-yellow-500 focus:ring-yellow-500 transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-black mb-2 block">
                          {t('phone') || 'Phone Number'} *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="pl-12 border-2 border-gray-300 bg-white py-3 px-4 rounded-xl focus:border-yellow-500 focus:ring-yellow-500 transition-colors"
                            placeholder={language === 'mr' ? '+91 XXXXXXXXXX' : 
                                       language === 'hi' ? '+91 XXXXXXXXXX' : 
                                       '+91 XXXXXXXXXX'}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="city" className="text-sm font-semibold text-black mb-2 block">
                          {language === 'mr' ? 'शहर' : 
                           language === 'hi' ? 'शहर' : 
                           'City'} *
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            id="city"
                            type="text"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="pl-12 border-2 border-gray-300 bg-white py-3 px-4 rounded-xl focus:border-yellow-500 focus:ring-yellow-500 transition-colors"
                            placeholder={language === 'mr' ? 'तुमचे शहर' : 
                                       language === 'hi' ? 'आपका शहर' : 
                                       'Your city'}
                          />
                        </div>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        className="w-full py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg transition-all duration-300 rounded-xl border border-yellow-400 font-bold"
                        size="lg"
                      >
                        {t('becomeMember') || (language === 'mr' ? 'सदस्यता घ्या' : 
                           language === 'hi' ? 'सदस्य बनें' : 'Become a Member')}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Benefits & Info Sidebar */}
          <div className="space-y-6">
            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border border-gray-300 shadow-xl bg-white">
                <div className="h-2 bg-yellow-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                    {language === 'mr' ? 'सदस्यत्व फायदे' : 
                     language === 'hi' ? 'सदस्यता लाभ' : 
                     'Membership Benefits'}
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200"
                      >
                        <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-black leading-relaxed">
                          {getLocalizedText(benefit, 'text')}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Why Join Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border border-gray-300 shadow-xl bg-yellow-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-yellow-700" />
                    {language === 'mr' ? 'आमच्यासोबत का जोडावे?' : 
                     language === 'hi' ? 'हमसे क्यों जुड़ें?' : 
                     'Why Join Us?'}
                  </h3>
                  <p className="text-sm text-black mb-4 leading-relaxed">
                    {language === 'mr' ? 
                      'जनता बदलाव ही केवळ एक राजकीय पक्ष नाही तर बदलाची एक चळवळ आहे. आमच्यासोबत सामील होऊन, आपण सर्वांसाठी चांगले भविष्य उभारण्यासाठी समर्पित समुदायाचा भाग बनता.' : 
                     language === 'hi' ? 
                      'जनता बदलाव सिर्फ एक राजनीतिक पार्टी नहीं है - यह बदलाव का आंदोलन है। हमसे जुड़कर, आप सभी के लिए बेहतर भविष्य बनाने के लिए समर्पित समुदाय का हिस्सा बनते हैं।' : 
                      'Janta Badlaav is more than just a political party - it\'s a movement for change. By joining us, you become part of a community dedicated to building a better future for all.'}
                  </p>
                  <p className="text-sm text-black leading-relaxed">
                    {language === 'mr' ? 
                      'एकत्रितपणे, आपण स्थायी बदल घडवू शकतो आणि राजकीय प्रक्रियेत प्रत्येक आवाज ऐकला जाईल याची खात्री करू शकतो.' : 
                     language === 'hi' ? 
                      'साथ मिलकर, हम स्थायी परिवर्तन ला सकते हैं और यह सुनिश्चित कर सकते हैं कि राजनीतिक प्रक्रिया में हर आवाज सुनी जाए।' : 
                      'Together, we can create lasting change and ensure that every voice is heard in the political process.'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="border border-gray-300 shadow-xl bg-black text-white">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">
                    {language === 'mr' ? 'लगेच सामील व्हा!' : 
                     language === 'hi' ? 'तुरंत शामिल हों!' : 
                     'Join Now!'}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4">
                    {language === 'mr' ? 'बदलाचा भाग व्हा. आजच सामील व्हा.' : 
                     language === 'hi' ? 'बदलाव का हिस्सा बनें। आज ही शामिल हों।' : 
                     'Be part of the change. Join today.'}
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black border border-yellow-400 font-bold"
                      onClick={() => document.getElementById('name')?.focus()}
                    >
                      {language === 'mr' ? 'आत्ताच सुरू करा' : 
                       language === 'hi' ? 'अभी शुरू करें' : 
                       'Get Started Now'}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;