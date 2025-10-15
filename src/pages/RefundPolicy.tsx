import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const RefundPolicy = () => {
  const { t, language } = useLanguage();

  // Helper function to get localized text
  const getLocalizedText = (item, field) => {
    if (language === 'mr') return item[`${field}Mr`] || item[field];
    if (language === 'hi') return item[`${field}Hi`] || item[field];
    return item[field];
  };

  const policySections = [
    {
      title: '1. General Policy',
      titleMr: '१. सामान्य धोरण',
      titleHi: '१. सामान्य नीति',
      content: 'Janta Badlaav is committed to transparency in all financial matters. This policy outlines our approach to donations and contributions.',
      contentMr: 'जनता बदलाव सर्व आर्थिक बाबींमध्ये पारदर्शकतेसाठी वचनबद्ध आहे. हे धोरण देणग्या आणि योगदानासाठी आमच्या दृष्टिकोनाची रूपरेषा दर्शवते.',
      contentHi: 'जनता बदलाव सभी वित्तीय मामलों में पारदर्शिता के लिए प्रतिबद्ध है। यह नीति दान और योगदान के लिए हमारे दृष्टिकोण की रूपरेखा तैयार करती है।'
    },
    {
      title: '2. Donations',
      titleMr: '२. देणग्या',
      titleHi: '२. दान',
      content: 'All donations to Janta Badlaav are voluntary contributions to support our political movement and activities. Please note:',
      contentMr: 'जनता बदलावला दिलेल्या सर्व देणग्या आमच्या राजकीय चळवळी आणि क्रियाकलापांना समर्थन देण्यासाठी स्वैच्छिक योगदान आहेत. कृपया लक्षात घ्या:',
      contentHi: 'जनता बदलाव को सभी दान हमारे राजनीतिक आंदोलन और गतिविधियों का समर्थन करने के लिए स्वैच्छिक योगदान हैं। कृपया ध्यान दें:',
      points: [
        {
          text: 'Donations are generally non-refundable',
          textMr: 'देणग्या साधारणपणे परत न करता येण्याजोग्या असतात',
          textHi: 'दान आम तौर पर गैर-वापसी योग्य हैं'
        },
        {
          text: 'All donations are used for political activities and movement building',
          textMr: 'सर्व देणग्या राजकीय क्रियाकलाप आणि चळवळ निर्मितीसाठी वापरल्या जातात',
          textHi: 'सभी दान राजनीतिक गतिविधियों और आंदोलन निर्माण के लिए उपयोग किए जाते हैं'
        },
        {
          text: 'Donors receive confirmation receipts for all contributions',
          textMr: 'दात्यांना सर्व योगदानांसाठी पुष्टीकरण पावत्या मिळतात',
          textHi: 'दानदाताओं को सभी योगदानों के लिए पुष्टिकरण रसीदें प्राप्त होती हैं'
        }
      ]
    },
    {
      title: '3. Membership Fees',
      titleMr: '३. सदस्यत्व शुल्क',
      titleHi: '३. सदस्यता शुल्क',
      content: 'If membership fees are charged:',
      contentMr: 'जर सदस्यत्व शुल्क आकारले गेले तर:',
      contentHi: 'यदि सदस्यता शुल्क लिया जाता है:',
      points: [
        {
          text: 'Fees are annual and non-transferable',
          textMr: 'शुल्क वार्षिक आणि हस्तांतरणीय नसतात',
          textHi: 'शुल्क वार्षिक और गैर-हस्तांतरणीय हैं'
        },
        {
          text: 'Refunds may be considered within 7 days of payment for valid reasons',
          textMr: 'वैध कारणांसाठी पेमेंटच्या 7 दिवसांच्या आत रीफंडचा विचार केला जाऊ शकतो',
          textHi: 'वैध कारणों के लिए भुगतान के 7 दिनों के भीतर धनवापसी पर विचार किया जा सकता है'
        },
        {
          text: 'Refund requests must be submitted in writing',
          textMr: 'रीफंड विनंत्या लेखी स्वरूपात सादर करणे आवश्यक आहे',
          textHi: 'धनवापसी अनुरोध लिखित रूप में जमा करने होंगे'
        }
      ]
    },
    {
      title: '4. Refund Process',
      titleMr: '४. रीफंड प्रक्रिया',
      titleHi: '४. धनवापसी प्रक्रिया',
      content: 'To request a refund (where applicable):',
      contentMr: 'रीफंडची विनंती करण्यासाठी (जेथे लागू असेल):',
      contentHi: 'धनवापसी का अनुरोध करने के लिए (जहाँ लागू हो):',
      steps: [
        {
          text: 'Submit a written request to contact@jantabadlaav.org',
          textMr: 'contact@jantabadlaav.org येथे लेखी विनंती सादर करा',
          textHi: 'contact@jantabadlaav.org पर लिखित अनुरोध जमा करें'
        },
        {
          text: 'Include your transaction details and reason for refund',
          textMr: 'आपले व्यवहार तपशील आणि रीफंडचे कारण समाविष्ट करा',
          textHi: 'अपना लेनदेन विवरण और धनवापसी का कारण शामिल करें'
        },
        {
          text: 'Allow 14-21 business days for processing',
          textMr: 'प्रक्रियेसाठी 14-21 कार्यदिवसांची मुदत द्या',
          textHi: 'प्रसंस्करण के लिए 14-21 कार्यदिवसों का समय दें'
        },
        {
          text: 'Refunds will be processed to the original payment method',
          textMr: 'रीफंड मूळ पेमेंट पद्धतीवर प्रक्रिया केले जातील',
          textHi: 'धनवापसी मूल भुगतान विधि पर संसाधित की जाएगी'
        }
      ]
    },
    {
      title: '5. Exceptions',
      titleMr: '५. अपवाद',
      titleHi: '५. अपवाद',
      content: 'Refunds may not be available for:',
      contentMr: 'रीफंड खालील गोष्टींसाठी उपलब्ध नसू शकतात:',
      contentHi: 'धनवापसी निम्नलिखित के लिए उपलब्ध नहीं हो सकती है:',
      points: [
        {
          text: 'Event tickets purchased for specific dates',
          textMr: 'विशिष्ट तारखांसाठी खरेदी केलेले इव्हेंट तिकीट',
          textHi: 'विशिष्ट तिथियों के लिए खरीदे गए इवेंट टिकट'
        },
        {
          text: 'Donations made more than 30 days ago',
          textMr: '30 दिवसांपूर्वी केलेल्या देणग्या',
          textHi: '30 दिन पहले किए गए दान'
        },
        {
          text: 'Services or materials already provided',
          textMr: 'आधीच प्रदान केलेली सेवा किंवा साहित्य',
          textHi: 'पहले से प्रदान की गई सेवाएं या सामग्री'
        }
      ]
    },
    {
      title: '6. Contact Us',
      titleMr: '६. आमच्याशी संपर्क साधा',
      titleHi: '६. हमसे संपर्क करें',
      content: 'For refund inquiries or questions about this policy, please contact us at contact@jantabadlaav.org',
      contentMr: 'रीफंड चौकशी किंवा या धोरणाबद्दल प्रश्नांसाठी, कृपया आमच्याशी contact@jantabadlaav.org येथे संपर्क साधा',
      contentHi: 'धनवापसी की जांच या इस नीति के बारे में प्रश्नों के लिए, कृपया हमसे contact@jantabadlaav.org पर संपर्क करें'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black">
          {t('refundPolicy') || (language === 'mr' ? 'धनवापसी धोरण' : 
             language === 'hi' ? 'धनवापसी नीति' : 'Refund Policy')}
        </h1>

        <Card className="border border-gray-300 shadow-lg bg-white">
          <CardContent className="p-6 md:p-8">
            <p className="text-gray-600 mb-8 text-sm">
              {language === 'mr' ? 'शेवटचे अद्यतन: जानेवारी २०२५' : 
               language === 'hi' ? 'अंतिम अद्यतन: जनवरी 2025' : 
               'Last updated: January 2025'}
            </p>

            <div className="space-y-8">
              {policySections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                  <h2 className="text-2xl font-bold text-black mb-4">
                    {getLocalizedText(section, 'title')}
                  </h2>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {getLocalizedText(section, 'content')}
                  </p>

                  {/* Points list */}
                  {section.points && (
                    <ul className="space-y-3 mb-4">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <span className="text-yellow-600 mt-1">•</span>
                          <span className="text-gray-700 leading-relaxed">
                            {getLocalizedText(point, 'text')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Steps list */}
                  {section.steps && (
                    <ol className="space-y-3 mb-4 list-decimal list-inside">
                      {section.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-700 leading-relaxed ml-4">
                          {getLocalizedText(step, 'text')}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Note */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-black font-medium">
                {language === 'mr' ? 
                  'टीप: हे धोरण आमच्या वेबसाइटवर कोणत्याही वेळी अद्यतनित केले जाऊ शकते. कृपया नियमितपणे तपासत रहा.' : 
                 language === 'hi' ? 
                  'नोट: यह नीति किसी भी समय हमारी वेबसाइट पर अपडेट की जा सकती है। कृपया नियमित रूप से जांचते रहें।' : 
                  'Note: This policy may be updated at any time on our website. Please check back regularly.'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RefundPolicy;