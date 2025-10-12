import React, { createContext, useContext, useState } from 'react';

export type Language = 'mr' | 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  mr: {
    // Navigation
    home: 'मुखपृष्ठ',
    about: 'आमच्याबद्दल',
    vision: 'दृष्टीकोन',
    founder: 'संस्थापक',
    join: 'सामील व्हा',
    contact: 'संपर्क',
    
    // Hero Section
    heroTitle: 'जनता बदलाव',
    heroSubtitle: 'बदलाची वेळ आली आहे',
    heroDescription: 'लोकांसाठी, लोकांद्वारे चालवलेली राजकीय चळवळ. आपण सर्वांसाठी समान संधी, पारदर्शकता आणि विकास यावर विश्वास ठेवतो.',
    joinMovement: 'चळवळीत सामील व्हा',
    learnMore: 'अधिक जाणून घ्या',
    
    // About Section
    aboutTitle: 'आमच्याबद्दल',
    aboutDescription: 'जनता बदलाव ही एक राजकीय चळवळ आहे जी समाजातील सर्व स्तरांतील लोकांना सशक्त करण्यासाठी समर्पित आहे. आम्ही पारदर्शक शासन, समान संधी आणि शाश्वत विकासावर विश्वास ठेवतो.',
    
    // Vision Section
    visionTitle: 'आमची दृष्टी',
    visionMission: 'मिशन',
    visionMissionText: 'सामाजिक न्याय, आर्थिक समृद्धी आणि समावेशी विकासावर आधारित समाज निर्माण करणे.',
    visionValues: 'मूल्ये',
    visionValuesText: 'पारदर्शकता, जबाबदारी आणि लोकशाही तत्त्वे आमच्या कार्याचा पाया आहेत.',
    
    // Founder Section
    founderTitle: 'संस्थापक',
    founderName: 'यश गोरखेडे',
    founderDescription: 'यश गोरखेडे यांनी जनता बदलाव चळवळीची स्थापना केली आहे ज्याचा उद्देश समाजातील प्रत्येक व्यक्तीला सशक्त करणे आहे. त्यांची दृष्टी एक न्याय्य आणि समृद्ध समाजाची आहे.',
    
    // Join Section
    joinTitle: 'आमच्यासोबत जुडा',
    joinDescription: 'बदलाचा भाग बना. आज जनता बदलावच्या सदस्य व्हा आणि उज्ज्वल भविष्याच्या निर्मितीमध्ये आपला वाटा उचला.',
    becomeMember: 'सदस्य व्हा',
    
    // Contact Section
    contactTitle: 'संपर्क साधा',
    contactDescription: 'आम्हाला आपले विचार ऐकायला आवडेल. आमच्याशी संपर्क साधा.',
    name: 'नाव',
    email: 'ईमेल',
    phone: 'फोन',
    message: 'संदेश',
    submit: 'पाठवा',
    
    // Footer
    privacyPolicy: 'गोपनीयता धोरण',
    termsConditions: 'अटी व शर्ती',
    refundPolicy: 'परतावा धोरण',
    followUs: 'आम्हाला फॉलो करा',
    allRightsReserved: 'सर्व हक्क राखीव',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    vision: 'Vision',
    founder: 'Founder',
    join: 'Join Us',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Janta Badlaav',
    heroSubtitle: 'Time for Change',
    heroDescription: 'A political movement of the people, by the people, for the people. We believe in equal opportunities, transparency, and development for all.',
    joinMovement: 'Join the Movement',
    learnMore: 'Learn More',
    
    // About Section
    aboutTitle: 'About Us',
    aboutDescription: 'Janta Badlaav is a political movement dedicated to empowering people from all walks of life. We believe in transparent governance, equal opportunities, and sustainable development.',
    
    // Vision Section
    visionTitle: 'Our Vision',
    visionMission: 'Mission',
    visionMissionText: 'To create a society based on social justice, economic prosperity, and inclusive development.',
    visionValues: 'Values',
    visionValuesText: 'Transparency, accountability, and democratic principles are the foundation of our work.',
    
    // Founder Section
    founderTitle: 'Founder',
    founderName: 'Yash Gourkhede',
    founderDescription: 'Yash Gourkhede founded the Janta Badlaav movement with a vision to empower every individual in society. His vision is of a just and prosperous society.',
    
    // Join Section
    joinTitle: 'Join Us',
    joinDescription: 'Be a part of the change. Become a member of Janta Badlaav today and contribute to building a brighter future.',
    becomeMember: 'Become a Member',
    
    // Contact Section
    contactTitle: 'Contact Us',
    contactDescription: 'We would love to hear from you. Get in touch with us.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    submit: 'Submit',
    
    // Footer
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    refundPolicy: 'Refund Policy',
    followUs: 'Follow Us',
    allRightsReserved: 'All Rights Reserved',
  },
  hi: {
    // Navigation
    home: 'होम',
    about: 'हमारे बारे में',
    vision: 'विज़न',
    founder: 'संस्थापक',
    join: 'शामिल हों',
    contact: 'संपर्क',
    
    // Hero Section
    heroTitle: 'जनता बदलाव',
    heroSubtitle: 'बदलाव का समय आ गया है',
    heroDescription: 'लोगों के लिए, लोगों द्वारा चलाई जाने वाली राजनीतिक आंदोलन। हम सभी के लिए समान अवसर, पारदर्शिता और विकास में विश्वास करते हैं।',
    joinMovement: 'आंदोलन में शामिल हों',
    learnMore: 'और जानें',
    
    // About Section
    aboutTitle: 'हमारे बारे में',
    aboutDescription: 'जनता बदलाव एक राजनीतिक आंदोलन है जो समाज के सभी स्तरों के लोगों को सशक्त करने के लिए समर्पित है। हम पारदर्शी शासन, समान अवसर और सतत विकास में विश्वास करते हैं।',
    
    // Vision Section
    visionTitle: 'हमारा विज़न',
    visionMission: 'मिशन',
    visionMissionText: 'सामाजिक न्याय, आर्थिक समृद्धि और समावेशी विकास पर आधारित समाज बनाना।',
    visionValues: 'मूल्य',
    visionValuesText: 'पारदर्शिता, जवाबदेही और लोकतांत्रिक सिद्धांत हमारे काम की नींव हैं।',
    
    // Founder Section
    founderTitle: 'संस्थापक',
    founderName: 'यश गोरखेडे',
    founderDescription: 'यश गोरखेडे ने जनता बदलाव आंदोलन की स्थापना की है जिसका उद्देश्य समाज में हर व्यक्ति को सशक्त करना है। उनका विज़न एक न्यायपूर्ण और समृद्ध समाज का है।',
    
    // Join Section
    joinTitle: 'हमसे जुड़ें',
    joinDescription: 'बदलाव का हिस्सा बनें। आज ही जनता बदलाव के सदस्य बनें और उज्ज्वल भविष्य के निर्माण में अपना योगदान दें।',
    becomeMember: 'सदस्य बनें',
    
    // Contact Section
    contactTitle: 'संपर्क करें',
    contactDescription: 'हम आपके विचार सुनना पसंद करेंगे। हमसे संपर्क करें।',
    name: 'नाम',
    email: 'ईमेल',
    phone: 'फोन',
    message: 'संदेश',
    submit: 'भेजें',
    
    // Footer
    privacyPolicy: 'गोपनीयता नीति',
    termsConditions: 'नियम और शर्तें',
    refundPolicy: 'वापसी नीति',
    followUs: 'हमें फॉलो करें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('mr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
