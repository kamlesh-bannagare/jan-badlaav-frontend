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
    
    // Media Page
    media: 'मीडिया',
    mediaTitle: 'मीडिया गॅलरी',
    mediaDescription: 'जनता बदलाव चळवळीची छायाचित्रे, व्हिडिओ आणि बातम्या पहा',
    images: 'छायाचित्रे',
    videos: 'व्हिडिओ',
    news: 'बातम्या',
    readMore: 'अधिक वाचा',
    mediaImage1: 'चळवळीचे कार्यकर्ते',
    mediaImage2: 'सार्वजनिक सभा',
    mediaImage3: 'लोकांसोबत संवाद',
    mediaImage4: 'जनसंपर्क कार्यक्रम',
    mediaImage5: 'स्वयंसेवक कार्य',
    mediaImage6: 'सामुदायिक सेवा',
    videoTitle1: 'संस्थापकाचे भाषण',
    videoTitle2: 'चळवळीचे उद्दिष्ट',
    videoTitle3: 'विकास आराखडा',
    newsTitle1: 'जनता बदलाव चळवळीचा विस्तार',
    newsTitle2: 'युवांसाठी नवीन योजना',
    newsTitle3: 'सामाजिक न्यायासाठी लढा',
    newsExcerpt1: 'जनता बदलाव चळवळ राज्यभर वेगाने वाढत आहे. हजारो नवीन सदस्य दररोज सामील होत आहेत.',
    newsExcerpt2: 'युवा पिढीला सशक्त करण्यासाठी नवीन शैक्षणिक आणि रोजगार योजना सुरू केल्या आहेत.',
    newsExcerpt3: 'सामाजिक न्याय आणि समानतेसाठी चळवळ निर्भयपणे आवाज उठवत आहे.',
    
    // Factsheet Page
    factsheet: 'तथ्यपत्रक',
    factsheetTitle: 'जनता बदलाव तथ्यपत्रक',
    factsheetSubtitle: 'आमच्या चळवळीबद्दल महत्त्वाची माहिती आणि आकडेवारी',
    factsheetMembers: 'सदस्य संख्या',
    factsheetMembersValue: '50,000+',
    factsheetMission: 'कार्यक्रम',
    factsheetMissionValue: '100+',
    factsheetAchievements: 'जिल्हे',
    factsheetAchievementsValue: '25+',
    factsheetEstablished: 'स्थापना',
    factsheetEstablishedValue: '2024',
    factsheetAboutTitle: 'आमच्याबद्दल',
    factsheetAboutText1: 'जनता बदलाव ही एक राजकीय चळवळ आहे जी समाजातील सर्व स्तरांतील लोकांना सशक्त करण्यासाठी समर्पित आहे. आम्ही पारदर्शक शासन, समान संधी आणि शाश्वत विकासावर विश्वास ठेवतो.',
    factsheetAboutText2: 'आमची चळवळ सामाजिक न्याय, आर्थिक समृद्धी आणि समावेशी विकासाच्या तत्त्वांवर आधारित आहे. आम्ही प्रत्येक नागरिकाला समान संधी आणि सन्मानपूर्ण जीवन मिळावे यासाठी कार्यरत आहोत.',
    factsheetGoalsTitle: 'आमची उद्दिष्टे',
    factsheetGoal1: 'पारदर्शक आणि जबाबदार शासन स्थापित करणे',
    factsheetGoal2: 'शिक्षण आणि रोजगारासाठी समान संधी निर्माण करणे',
    factsheetGoal3: 'सामाजिक न्याय आणि समानता प्रस्थापित करणे',
    factsheetGoal4: 'आर्थिक विकास आणि समृद्धी वाढवणे',
    factsheetGoal5: 'पर्यावरण संरक्षण आणि शाश्वत विकास',
    factsheetPrinciplesTitle: 'आमची मूलभूत तत्त्वे',
    factsheetPrinciple1Title: 'पारदर्शकता',
    factsheetPrinciple1Text: 'सर्व निर्णय आणि कार्ये पूर्ण पारदर्शकतेने घेणे',
    factsheetPrinciple2Title: 'जबाबदारी',
    factsheetPrinciple2Text: 'जनतेप्रती संपूर्ण जबाबदारी आणि उत्तरदायित्व',
    factsheetPrinciple3Title: 'समानता',
    factsheetPrinciple3Text: 'सर्वांना समान संधी आणि न्याय मिळावा',
    factsheetPrinciple4Title: 'सहभाग',
    factsheetPrinciple4Text: 'नागरिकांचा निर्णय प्रक्रियेत सक्रिय सहभाग',
    
    // Home Page - Focus Areas
    focusAreasTitle: 'आमचे प्रमुख केंद्र',
    focusAreasSubtitle: 'आम्ही ज्या मुख्य क्षेत्रांवर लक्ष केंद्रित करतो',
    focusEducation: 'शिक्षण',
    focusEducationText: 'प्रत्येकासाठी दर्जेदार आणि सुलभ शिक्षण सुनिश्चित करणे',
    focusInfrastructure: 'पायाभूत सुविधा',
    focusInfrastructureText: 'आधुनिक आणि टिकाऊ पायाभूत सुविधा विकास',
    focusEmployment: 'रोजगार',
    focusEmploymentText: 'युवकांसाठी रोजगाराच्या संधी निर्माण करणे',
    focusHealthcare: 'आरोग्य सेवा',
    focusHealthcareText: 'सर्वांसाठी सुलभ आणि दर्जेदार आरोग्य सेवा',

    // Home Page - Achievements
    achievementsTitle: 'आमची उपलब्धता',
    achievementsSubtitle: 'आमच्या कार्याचे परिणाम',
    achievement1Number: '50,000+',
    achievement1Title: 'सक्रिय सदस्य',
    achievement2Number: '100+',
    achievement2Title: 'कार्यक्रम यशस्वी',
    achievement3Number: '25+',
    achievement3Title: 'जिल्हे कव्हर',
    achievement4Number: '1000+',
    achievement4Title: 'दैनंदिन सहभाग',

    // Home Page - Founder Section
    founderSectionTitle: 'संस्थापक यश गोरखेडे',
    founderSectionText1: 'यश गोरखेडे यांनी जनता बदलाव चळवळीची स्थापना केली आहे ज्याचा उद्देश समाजातील प्रत्येक व्यक्तीला सशक्त करणे आहे. त्यांचा विश्वास आहे की खरा बदल तेव्हाच होतो जेव्हा सर्वसामान्य लोक आपल्या शक्तीची जाणीव करतात.',
    founderSectionText2: 'त्यांची दृष्टी एक न्याय्य, समृद्ध आणि समावेशक समाजाची आहे जिथे प्रत्येक नागरिकाला समान संधी आणि सन्मानपूर्ण जीवन मिळते. त्यांच्या नेतृत्वाखाली, चळवळ राज्यभर वेगाने वाढत आहे.',
    learnMoreFounder: 'संस्थापकांबद्दल अधिक',

    // Home Page - How to Join
    howToJoinTitle: 'सामील होण्याची प्रक्रिया',
    howToJoinSubtitle: 'तीन सोप्या चरणांमध्ये आमच्या चळवळीत सामील व्हा',
    wayToJoin1: 'पहिला चरण: नोंदणी',
    wayToJoin1Text: 'आमच्या वेबसाइटवर जाऊन सदस्यत्व फॉर्म भरा आणि चळवळीचा भाग बना',
    wayToJoin2: 'दुसरा चरण: प्रशिक्षण',
    wayToJoin2Text: 'आमच्या मूल्यांबद्दल, उद्दिष्टांबद्दल आणि कार्यपद्धतीबद्दल प्रशिक्षण घ्या',
    wayToJoin3: 'तिसरा चरण: सक्रिय सहभाग',
    wayToJoin3Text: 'आपल्या क्षेत्रातील कार्यक्रमांमध्ये सहभागी होऊन बदल घडवा',
    startJourney: 'प्रवास सुरू करा',

    // Home Page - Testimonials
    testimonialTitle: 'लोकांचे अनुभव',
    testimonialSubtitle: 'आमच्या सदस्यांनी काय म्हटले ते ऐका',
    testimonialName1: 'राजेश पाटील',
    testimonialRole1: 'चळवळ सदस्य, पुणे',
    testimonialText1: 'जनता बदलावमुळे मला समाजसेवेची संधी मिळाली आणि मी खऱ्या अर्थाने बदल घडवू शकतो असे जाणवले.',
    testimonialName2: 'प्रिया शर्मा',
    testimonialRole2: 'युवा नेता, नागपूर',
    testimonialText2: 'या चळवळीने मला नेतृत्व कौशल्य विकसित करण्यास मदत केली आणि समाजात सकारात्मक बदल घडवण्यासाठी प्रेरित केले.',
    testimonialName3: 'अमित देशमुख',
    testimonialRole3: 'स्वयंसेवक, मुंबई',
    testimonialText3: 'पारदर्शकता आणि जबाबदारी या तत्त्वांवर काम करणारी ही पहिली राजकीय चळवळ आहे. मला याचा भाग असल्याचा अभिमान आहे.',

    // Fellowship Page
    fellowship: 'फेलोशिप',
    fellowshipTitle: 'जेबी फेलोशिप कार्यक्रम',
    fellowshipSubtitle: 'युवा नेतृत्व विकसित करण्यासाठी आमचा विशेष कार्यक्रम',
    fellowshipApply: 'अर्ज करा',
    fellowshipAboutTitle: 'फेलोशिप कार्यक्रमाबद्दल',
    fellowshipAboutText1: 'जेबी फेलोशिप कार्यक्रम हा युवा नेत्यांना राजकीय आणि सामाजिक कार्यात प्रशिक्षित करण्यासाठी डिझाइन केलेला आहे. या कार्यक्रमाद्वारे आम्ही युवा पिढीला नेतृत्व कौशल्य, सामाजिक जबाबदारी आणि लोकशाही मूल्यांचे प्रशिक्षण देतो.',
    fellowshipAboutText2: 'फेलोशिप कार्यक्रमात सहभागी होणाऱ्या युवकांना क्षेत्रीय कार्य, नेतृत्व विकास आणि सामाजिक सेवेचा व्यावहारिक अनुभव मिळतो. हा कार्यक्रम त्यांना भविष्यातील नेते बनण्यासाठी तयार करतो.',
    fellowshipBenefitsTitle: 'फेलोशिपचे फायदे',
    fellowshipBenefit1Title: 'नेतृत्व प्रशिक्षण',
    fellowshipBenefit1Text: 'व्यावहारिक नेतृत्व कौशल्य आणि राजकीय समजूत विकसित करा',
    fellowshipBenefit2Title: 'क्षेत्रीय अनुभव',
    fellowshipBenefit2Text: 'समाजसेवा आणि राजकीय कार्यात सक्रिय सहभाग',
    fellowshipBenefit3Title: 'नेटवर्किंग',
    fellowshipBenefit3Text: 'समविचारी युवा नेते आणि अनुभवी मार्गदर्शकांशी संपर्क',
    fellowshipEligibilityTitle: 'पात्रता निकष',
    fellowshipEligibility1: 'वय 18 ते 35 वर्षे',
    fellowshipEligibility2: 'सामाजिक सेवा आणि राजकारणात रस',
    fellowshipEligibility3: 'नेतृत्व क्षमता आणि टीमवर्क कौशल्य',
    fellowshipEligibility4: 'स्थानिक भाषा आणि इंग्रजीचे ज्ञान',
    fellowshipEligibility5: 'पूर्ण वेळ सहभागासाठी उपलब्धता',
    fellowshipProgramTitle: 'कार्यक्रम तपशील',
    fellowshipDurationTitle: 'कालावधी',
    fellowshipDurationText: '6 महिन्यांचा सखोल प्रशिक्षण कार्यक्रम',
    fellowshipFormatTitle: 'स्वरूप',
    fellowshipFormatText: 'ऑनलाइन सत्रे आणि क्षेत्रीय प्रशिक्षणाचे मिश्रण',
    fellowshipCurriculumTitle: 'अभ्यासक्रम',
    fellowshipCurriculumText: 'राजकारण, नेतृत्व, सामाजिक न्याय आणि सार्वजनिक धोरण',
    fellowshipMentorshipTitle: 'मार्गदर्शन',
    fellowshipMentorshipText: 'अनुभवी नेत्यांकडून वैयक्तिक मार्गदर्शन',
    fellowshipCTATitle: 'फेलोशिप कार्यक्रमात सामील व्हा',
    fellowshipCTAText: 'बदलाचे नेते बनण्यासाठी आजच आमच्या फेलोशिप कार्यक्रमासाठी अर्ज करा',
    fellowshipApplyNow: 'आता अर्ज करा',
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
    
    // Media Page
    media: 'Media',
    mediaTitle: 'Media Gallery',
    mediaDescription: 'View photos, videos, and news from the Janta Badlaav movement',
    images: 'Images',
    videos: 'Videos',
    news: 'News',
    readMore: 'Read More',
    mediaImage1: 'Movement Workers',
    mediaImage2: 'Public Rally',
    mediaImage3: 'Dialogue with People',
    mediaImage4: 'Public Outreach Program',
    mediaImage5: 'Volunteer Work',
    mediaImage6: 'Community Service',
    videoTitle1: 'Founder\'s Speech',
    videoTitle2: 'Movement Goals',
    videoTitle3: 'Development Roadmap',
    newsTitle1: 'Janta Badlaav Movement Expands',
    newsTitle2: 'New Youth Programs',
    newsTitle3: 'Fight for Social Justice',
    newsExcerpt1: 'The Janta Badlaav movement is growing rapidly across the state. Thousands of new members are joining daily.',
    newsExcerpt2: 'New educational and employment programs have been launched to empower the younger generation.',
    newsExcerpt3: 'The movement is fearlessly raising its voice for social justice and equality.',
    
    // Factsheet Page
    factsheet: 'Factsheet',
    factsheetTitle: 'Janta Badlaav Factsheet',
    factsheetSubtitle: 'Important information and statistics about our movement',
    factsheetMembers: 'Members',
    factsheetMembersValue: '50,000+',
    factsheetMission: 'Programs',
    factsheetMissionValue: '100+',
    factsheetAchievements: 'Districts',
    factsheetAchievementsValue: '25+',
    factsheetEstablished: 'Established',
    factsheetEstablishedValue: '2024',
    factsheetAboutTitle: 'About Us',
    factsheetAboutText1: 'Janta Badlaav is a political movement dedicated to empowering people from all walks of life. We believe in transparent governance, equal opportunities, and sustainable development.',
    factsheetAboutText2: 'Our movement is based on the principles of social justice, economic prosperity, and inclusive development. We are working to ensure that every citizen gets equal opportunities and a dignified life.',
    factsheetGoalsTitle: 'Our Goals',
    factsheetGoal1: 'Establishing transparent and accountable governance',
    factsheetGoal2: 'Creating equal opportunities for education and employment',
    factsheetGoal3: 'Establishing social justice and equality',
    factsheetGoal4: 'Increasing economic development and prosperity',
    factsheetGoal5: 'Environmental protection and sustainable development',
    factsheetPrinciplesTitle: 'Our Core Principles',
    factsheetPrinciple1Title: 'Transparency',
    factsheetPrinciple1Text: 'Making all decisions and actions with complete transparency',
    factsheetPrinciple2Title: 'Accountability',
    factsheetPrinciple2Text: 'Complete responsibility and accountability to the people',
    factsheetPrinciple3Title: 'Equality',
    factsheetPrinciple3Text: 'Equal opportunities and justice for everyone',
    factsheetPrinciple4Title: 'Participation',
    factsheetPrinciple4Text: 'Active participation of citizens in decision-making',
    
    // Home Page - Focus Areas
    focusAreasTitle: 'Our Key Focus Areas',
    focusAreasSubtitle: 'The main areas we are working on',
    focusEducation: 'Education',
    focusEducationText: 'Ensuring quality and accessible education for all',
    focusInfrastructure: 'Infrastructure',
    focusInfrastructureText: 'Modern and sustainable infrastructure development',
    focusEmployment: 'Employment',
    focusEmploymentText: 'Creating job opportunities for youth',
    focusHealthcare: 'Healthcare',
    focusHealthcareText: 'Accessible and quality healthcare for all',

    // Home Page - Achievements
    achievementsTitle: 'Our Achievements',
    achievementsSubtitle: 'The results of our work',
    achievement1Number: '50,000+',
    achievement1Title: 'Active Members',
    achievement2Number: '100+',
    achievement2Title: 'Successful Programs',
    achievement3Number: '25+',
    achievement3Title: 'Districts Covered',
    achievement4Number: '1000+',
    achievement4Title: 'Daily Engagement',

    // Home Page - Founder Section
    founderSectionTitle: 'Founder Yash Gourkhede',
    founderSectionText1: 'Yash Gourkhede founded the Janta Badlaav movement with a vision to empower every individual in society. He believes that real change happens when ordinary people realize their power.',
    founderSectionText2: 'His vision is of a just, prosperous, and inclusive society where every citizen gets equal opportunities and a dignified life. Under his leadership, the movement is growing rapidly across the state.',
    learnMoreFounder: 'Learn More About Founder',

    // Home Page - How to Join
    howToJoinTitle: 'How to Join',
    howToJoinSubtitle: 'Join our movement in three simple steps',
    wayToJoin1: 'Step 1: Register',
    wayToJoin1Text: 'Visit our website and fill the membership form to become part of the movement',
    wayToJoin2: 'Step 2: Training',
    wayToJoin2Text: 'Learn about our values, goals, and working methods',
    wayToJoin3: 'Step 3: Active Participation',
    wayToJoin3Text: 'Participate in programs in your area and make a difference',
    startJourney: 'Start Your Journey',

    // Home Page - Testimonials
    testimonialTitle: 'People\'s Experiences',
    testimonialSubtitle: 'Hear what our members have to say',
    testimonialName1: 'Rajesh Patil',
    testimonialRole1: 'Movement Member, Pune',
    testimonialText1: 'Janta Badlaav gave me the opportunity to serve society and I felt I could truly make a difference.',
    testimonialName2: 'Priya Sharma',
    testimonialRole2: 'Youth Leader, Nagpur',
    testimonialText2: 'This movement helped me develop leadership skills and inspired me to bring positive change in society.',
    testimonialName3: 'Amit Deshmukh',
    testimonialRole3: 'Volunteer, Mumbai',
    testimonialText3: 'This is the first political movement that works on principles of transparency and accountability. I am proud to be part of it.',

    // Fellowship Page
    fellowship: 'Fellowship',
    fellowshipTitle: 'JB Fellowship Program',
    fellowshipSubtitle: 'Our special program to develop youth leadership',
    fellowshipApply: 'Apply Now',
    fellowshipAboutTitle: 'About the Fellowship Program',
    fellowshipAboutText1: 'The JB Fellowship Program is designed to train young leaders in political and social work. Through this program, we provide the youth generation with training in leadership skills, social responsibility, and democratic values.',
    fellowshipAboutText2: 'Young people participating in the fellowship program gain practical experience in field work, leadership development, and social service. This program prepares them to become future leaders.',
    fellowshipBenefitsTitle: 'Fellowship Benefits',
    fellowshipBenefit1Title: 'Leadership Training',
    fellowshipBenefit1Text: 'Develop practical leadership skills and political understanding',
    fellowshipBenefit2Title: 'Field Experience',
    fellowshipBenefit2Text: 'Active participation in social service and political work',
    fellowshipBenefit3Title: 'Networking',
    fellowshipBenefit3Text: 'Connect with like-minded young leaders and experienced mentors',
    fellowshipEligibilityTitle: 'Eligibility Criteria',
    fellowshipEligibility1: 'Age 18 to 35 years',
    fellowshipEligibility2: 'Interest in social service and politics',
    fellowshipEligibility3: 'Leadership ability and teamwork skills',
    fellowshipEligibility4: 'Knowledge of local language and English',
    fellowshipEligibility5: 'Availability for full-time participation',
    fellowshipProgramTitle: 'Program Details',
    fellowshipDurationTitle: 'Duration',
    fellowshipDurationText: '6-month intensive training program',
    fellowshipFormatTitle: 'Format',
    fellowshipFormatText: 'Mix of online sessions and field training',
    fellowshipCurriculumTitle: 'Curriculum',
    fellowshipCurriculumText: 'Politics, leadership, social justice, and public policy',
    fellowshipMentorshipTitle: 'Mentorship',
    fellowshipMentorshipText: 'Personal guidance from experienced leaders',
    fellowshipCTATitle: 'Join the Fellowship Program',
    fellowshipCTAText: 'Apply today for our fellowship program to become a leader of change',
    fellowshipApplyNow: 'Apply Now',
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
    
    // Media Page
    media: 'मीडिया',
    mediaTitle: 'मीडिया गैलरी',
    mediaDescription: 'जनता बदलाव आंदोलन की तस्वीरें, वीडियो और समाचार देखें',
    images: 'तस्वीरें',
    videos: 'वीडियो',
    news: 'समाचार',
    readMore: 'और पढ़ें',
    mediaImage1: 'आंदोलन के कार्यकर्ता',
    mediaImage2: 'सार्वजनिक रैली',
    mediaImage3: 'लोगों के साथ संवाद',
    mediaImage4: 'जनसंपर्क कार्यक्रम',
    mediaImage5: 'स्वयंसेवक कार्य',
    mediaImage6: 'सामुदायिक सेवा',
    videoTitle1: 'संस्थापक का भाषण',
    videoTitle2: 'आंदोलन के लक्ष्य',
    videoTitle3: 'विकास योजना',
    newsTitle1: 'जनता बदलाव आंदोलन का विस्तार',
    newsTitle2: 'युवाओं के लिए नई योजनाएं',
    newsTitle3: 'सामाजिक न्याय के लिए लड़ाई',
    newsExcerpt1: 'जनता बदलाव आंदोलन पूरे राज्य में तेजी से बढ़ रहा है। हजारों नए सदस्य रोज शामिल हो रहे हैं।',
    newsExcerpt2: 'युवा पीढ़ी को सशक्त करने के लिए नए शैक्षिक और रोजगार कार्यक्रम शुरू किए गए हैं।',
    newsExcerpt3: 'आंदोलन सामाजिक न्याय और समानता के लिए निडरता से आवाज उठा रहा है।',
    
    // Factsheet Page
    factsheet: 'फैक्टशीट',
    factsheetTitle: 'जनता बदलाव फैक्टशीट',
    factsheetSubtitle: 'हमारे आंदोलन के बारे में महत्वपूर्ण जानकारी और आंकड़े',
    factsheetMembers: 'सदस्य संख्या',
    factsheetMembersValue: '50,000+',
    factsheetMission: 'कार्यक्रम',
    factsheetMissionValue: '100+',
    factsheetAchievements: 'जिले',
    factsheetAchievementsValue: '25+',
    factsheetEstablished: 'स्थापना',
    factsheetEstablishedValue: '2024',
    factsheetAboutTitle: 'हमारे बारे में',
    factsheetAboutText1: 'जनता बदलाव एक राजनीतिक आंदोलन है जो समाज के सभी स्तरों के लोगों को सशक्त करने के लिए समर्पित है। हम पारदर्शी शासन, समान अवसर और सतत विकास में विश्वास करते हैं।',
    factsheetAboutText2: 'हमारा आंदोलन सामाजिक न्याय, आर्थिक समृद्धि और समावेशी विकास के सिद्धांतों पर आधारित है। हम प्रत्येक नागरिक को समान अवसर और सम्मानजनक जीवन सुनिश्चित करने के लिए काम कर रहे हैं।',
    factsheetGoalsTitle: 'हमारे लक्ष्य',
    factsheetGoal1: 'पारदर्शी और जवाबदेह शासन की स्थापना',
    factsheetGoal2: 'शिक्षा और रोजगार के लिए समान अवसर पैदा करना',
    factsheetGoal3: 'सामाजिक न्याय और समानता की स्थापना',
    factsheetGoal4: 'आर्थिक विकास और समृद्धि बढ़ाना',
    factsheetGoal5: 'पर्यावरण संरक्षण और सतत विकास',
    factsheetPrinciplesTitle: 'हमारे मूल सिद्धांत',
    factsheetPrinciple1Title: 'पारदर्शिता',
    factsheetPrinciple1Text: 'सभी निर्णय और कार्य पूर्ण पारदर्शिता के साथ',
    factsheetPrinciple2Title: 'जवाबदेही',
    factsheetPrinciple2Text: 'लोगों के प्रति पूर्ण जिम्मेदारी और उत्तरदायित्व',
    factsheetPrinciple3Title: 'समानता',
    factsheetPrinciple3Text: 'सभी के लिए समान अवसर और न्याय',
    factsheetPrinciple4Title: 'भागीदारी',
    factsheetPrinciple4Text: 'निर्णय लेने में नागरिकों की सक्रिय भागीदारी',
    
    // Home Page - Focus Areas
    focusAreasTitle: 'हमारे प्रमुख फोकस क्षेत्र',
    focusAreasSubtitle: 'जिन मुख्य क्षेत्रों पर हम काम कर रहे हैं',
    focusEducation: 'शिक्षा',
    focusEducationText: 'सभी के लिए गुणवत्तापूर्ण और सुलभ शिक्षा सुनिश्चित करना',
    focusInfrastructure: 'बुनियादी ढांचा',
    focusInfrastructureText: 'आधुनिक और टिकाऊ बुनियादी ढांचा विकास',
    focusEmployment: 'रोजगार',
    focusEmploymentText: 'युवाओं के लिए रोजगार के अवसर पैदा करना',
    focusHealthcare: 'स्वास्थ्य सेवा',
    focusHealthcareText: 'सभी के लिए सुलभ और गुणवत्तापूर्ण स्वास्थ्य सेवा',

    // Home Page - Achievements
    achievementsTitle: 'हमारी उपलब्धियां',
    achievementsSubtitle: 'हमारे काम के परिणाम',
    achievement1Number: '50,000+',
    achievement1Title: 'सक्रिय सदस्य',
    achievement2Number: '100+',
    achievement2Title: 'सफल कार्यक्रम',
    achievement3Number: '25+',
    achievement3Title: 'जिले कवर',
    achievement4Number: '1000+',
    achievement4Title: 'दैनिक भागीदारी',

    // Home Page - Founder Section
    founderSectionTitle: 'संस्थापक यश गोरखेडे',
    founderSectionText1: 'यश गोरखेडे ने जनता बदलाव आंदोलन की स्थापना की है जिसका उद्देश्य समाज में हर व्यक्ति को सशक्त करना है। उनका मानना है कि असली बदलाव तब होता है जब आम लोग अपनी शक्ति का एहसास करते हैं।',
    founderSectionText2: 'उनका विज़न एक न्यायपूर्ण, समृद्ध और समावेशी समाज का है जहां हर नागरिक को समान अवसर और सम्मानजनक जीवन मिले। उनके नेतृत्व में, आंदोलन पूरे राज्य में तेजी से बढ़ रहा है।',
    learnMoreFounder: 'संस्थापक के बारे में अधिक जानें',

    // Home Page - How to Join
    howToJoinTitle: 'शामिल होने की प्रक्रिया',
    howToJoinSubtitle: 'तीन आसान चरणों में हमारे आंदोलन में शामिल हों',
    wayToJoin1: 'पहला चरण: पंजीकरण',
    wayToJoin1Text: 'हमारी वेबसाइट पर जाएं और सदस्यता फॉर्म भरें और आंदोलन का हिस्सा बनें',
    wayToJoin2: 'दूसरा चरण: प्रशिक्षण',
    wayToJoin2Text: 'हमारे मूल्यों, लक्ष्यों और कार्य पद्धति के बारे में प्रशिक्षण लें',
    wayToJoin3: 'तीसरा चरण: सक्रिय भागीदारी',
    wayToJoin3Text: 'अपने क्षेत्र में कार्यक्रमों में भाग लें और बदलाव लाएं',
    startJourney: 'यात्रा शुरू करें',

    // Home Page - Testimonials
    testimonialTitle: 'लोगों के अनुभव',
    testimonialSubtitle: 'सुनें कि हमारे सदस्यों का क्या कहना है',
    testimonialName1: 'राजेश पाटिल',
    testimonialRole1: 'आंदोलन सदस्य, पुणे',
    testimonialText1: 'जनता बदलाव ने मुझे समाज सेवा का अवसर दिया और मुझे लगा कि मैं वास्तव में बदलाव ला सकता हूं।',
    testimonialName2: 'प्रिया शर्मा',
    testimonialRole2: 'युवा नेता, नागपुर',
    testimonialText2: 'इस आंदोलन ने मुझे नेतृत्व कौशल विकसित करने में मदद की और समाज में सकारात्मक बदलाव लाने के लिए प्रेरित किया।',
    testimonialName3: 'अमित देशमुख',
    testimonialRole3: 'स्वयंसेवक, मुंबई',
    testimonialText3: 'यह पहला राजनीतिक आंदोलन है जो पारदर्शिता और जवाबदेही के सिद्धांतों पर काम करता है। मुझे इसका हिस्सा होने पर गर्व है।',

    // Fellowship Page
    fellowship: 'फेलोशिप',
    fellowshipTitle: 'जेबी फेलोशिप कार्यक्रम',
    fellowshipSubtitle: 'युवा नेतृत्व विकसित करने के लिए हमारा विशेष कार्यक्रम',
    fellowshipApply: 'अभी आवेदन करें',
    fellowshipAboutTitle: 'फेलोशिप कार्यक्रम के बारे में',
    fellowshipAboutText1: 'जेबी फेलोशिप कार्यक्रम युवा नेताओं को राजनीतिक और सामाजिक कार्य में प्रशिक्षित करने के लिए डिज़ाइन किया गया है। इस कार्यक्रम के माध्यम से हम युवा पीढ़ी को नेतृत्व कौशल, सामाजिक जिम्मेदारी और लोकतांत्रिक मूल्यों का प्रशिक्षण देते हैं।',
    fellowshipAboutText2: 'फेलोशिप कार्यक्रम में भाग लेने वाले युवा क्षेत्रीय कार्य, नेतृत्व विकास और सामाजिक सेवा का व्यावहारिक अनुभव प्राप्त करते हैं। यह कार्यक्रम उन्हें भविष्य के नेता बनने के लिए तैयार करता है।',
    fellowshipBenefitsTitle: 'फेलोशिप के लाभ',
    fellowshipBenefit1Title: 'नेतृत्व प्रशिक्षण',
    fellowshipBenefit1Text: 'व्यावहारिक नेतृत्व कौशल और राजनीतिक समझ विकसित करें',
    fellowshipBenefit2Title: 'क्षेत्रीय अनुभव',
    fellowshipBenefit2Text: 'सामाजिक सेवा और राजनीतिक कार्य में सक्रिय भागीदारी',
    fellowshipBenefit3Title: 'नेटवर्किंग',
    fellowshipBenefit3Text: 'समान विचारधारा वाले युवा नेताओं और अनुभवी मार्गदर्शकों से जुड़ें',
    fellowshipEligibilityTitle: 'पात्रता मानदंड',
    fellowshipEligibility1: 'आयु 18 से 35 वर्ष',
    fellowshipEligibility2: 'सामाजिक सेवा और राजनीति में रुचि',
    fellowshipEligibility3: 'नेतृत्व क्षमता और टीमवर्क कौशल',
    fellowshipEligibility4: 'स्थानीय भाषा और अंग्रेजी का ज्ञान',
    fellowshipEligibility5: 'पूर्णकालिक भागीदारी के लिए उपलब्धता',
    fellowshipProgramTitle: 'कार्यक्रम विवरण',
    fellowshipDurationTitle: 'अवधि',
    fellowshipDurationText: '6 महीने का गहन प्रशिक्षण कार्यक्रम',
    fellowshipFormatTitle: 'प्रारूप',
    fellowshipFormatText: 'ऑनलाइन सत्र और क्षेत्रीय प्रशिक्षण का मिश्रण',
    fellowshipCurriculumTitle: 'पाठ्यक्रम',
    fellowshipCurriculumText: 'राजनीति, नेतृत्व, सामाजिक न्याय और सार्वजनिक नीति',
    fellowshipMentorshipTitle: 'मार्गदर्शन',
    fellowshipMentorshipText: 'अनुभवी नेताओं से व्यक्तिगत मार्गदर्शन',
    fellowshipCTATitle: 'फेलोशिप कार्यक्रम में शामिल हों',
    fellowshipCTAText: 'बदलाव के नेता बनने के लिए आज ही हमारे फेलोशिप कार्यक्रम के लिए आवेदन करें',
    fellowshipApplyNow: 'अभी आवेदन करें',
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
