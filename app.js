/**
 * IndusVyapar (इंडस व्यापार) - Multilingual MSME Commerce Engine
 * Allows Hindi-speaking vendors to sell across all Indian states in native languages.
 */

// =============================================================================
// 1. Multilingual Catalog & Dictionaries (9 Indian Languages)
// =============================================================================

const CATALOG_DATA = [
  {
    id: "prod-1",
    img: "assets/banarasi_saree.jpg",
    category: "टेक्सटाइल्स / Textiles",
    origin: "वाराणसी, उत्तर प्रदेश",
    stock: 120,
    moq: 10,
    priceSingle: 2400,
    priceWholesale: 1850,
    priceBulk: 1650,
    gstRate: "5% IGST",
    specs: ["शुद्ध कतान सिल्क", "असली जरी बॉर्डर", "हथकरघा बुनाई", "GI टैग प्रमाणित"],
    translations: {
      hi: {
        name: "शाही बनारसी कतान सिल्क साड़ी",
        desc: "पारंपरिक हथकरघा से तैयार की गई शुद्ध कतान सिल्क साड़ी। बारीक सोने की जरी के काम और पुष्प बूटियों के साथ। दक्षिण भारतीय शादियों और त्योहारों के लिए अत्यंत लोकप्रिय।",
        moqLabel: "न्यूनतम आर्डर: 10 पीस",
        specs: ["शुद्ध कतान सिल्क", "असली जरी बॉर्डर", "हथकरघा बुनाई", "GI टैग प्रमाणित"]
      },
      ta: {
        name: "அரச பனாரசி கட்டான் பட்டுப் புடவை (Royal Banarasi Saree)",
        desc: "வாரணாசியின் பாரம்பரிய கைத்தறி நெசவாளர்களால் நெய்யப்பட்ட தூய கட்டான் பட்டுப் புடவை. நேர்த்தியான தங்க ஜரி வேலைப்பாடுகளுடன் கூடியது. தமிழக திருமண முகூர்த்தங்களுக்கு மிகச் சிறந்தது.",
        moqLabel: "குறைந்தபட்ச ஆர்டர்: 10 புடவைகள்",
        specs: ["தூய கட்டான் பட்டு", "அசல் தங்க ஜரி பார்டர்", "பாரம்பரிய கைத்தறி", "GI குறியீடு அங்கீகரிக்கப்பட்டது"]
      },
      te: {
        name: "రాచరిక బనారసి కటాన్ పట్టు చీర (Royal Banarasi Silk Saree)",
        desc: "వారణాసి చేనేత కళాకారులచే స్వయంగా నేయబడిన స్వచ్ఛమైన కటాన్ పట్టు చీర. నాణ్యమైన బంగారు జరీ అంచు మరియు పూల డిజైన్లతో కూడినది. వివాహాలకు ఉత్తమ ఎంపిక.",
        moqLabel: "కనిష్ట ఆర్డర్: 10 ముక్కలు",
        specs: ["స్వచ్ఛమైన కటాన్ సిల్క్", "అసలైన జరీ అంచు", "చేనేత మగ్గం", "GI ట్యాగ్ ధృవీకరించబడింది"]
      },
      kn: {
        name: "ರಾಜಮನೆತನದ ಬನಾರಸಿ ಕಟಾನ್ ರೇಷ್ಮೆ ಸೀರೆ (Banarasi Silk Saree)",
        desc: "ವಾರಣಾಸಿಯ ಸಾಂಪ್ರದಾಯಿಕ ನೇಕಾರರಿಂದ ಕೈಮಗ್ಗದಲ್ಲಿ ನೇಯ್ದ ಶುದ್ಧ ಕಟಾನ್ ರೇಷ್ಮೆ ಸೀರೆ. ನೈಜ ಚಿನ್ನದ ಜರಿ ಕಸೂತಿ. ಕರ್ನಾಟಕದ ಮದುವೆ ಸಮಾರಂಭಗಳಿಗೆ ಪರಿಪೂರ್ಣ.",
        moqLabel: "ಕನಿಷ್ಠ ಆರ್ಡರ್: 10 ಸೀರೆಗಳು",
        specs: ["ಶುದ್ಧ ಕಟಾನ್ ರೇಷ್ಮೆ", "ನೈಜ ಜರಿ ಬಾರ್ಡರ್", "ಕೈಮಗ್ಗದ ತಯಾರಿಕೆ", "GI ಪ್ರಮಾಣಿತ"]
      },
      ml: {
        name: "രാജകീയ ബനാറസി കട്ടാൻ പട്ട് സാരി (Banarasi Silk Saree)",
        desc: "വാരണാസിയിലെ വിദഗ്ദ്ധ നെയ്ത്തുകാർ നിർമ്മിച്ച ശുദ്ധമായ കട്ടാൻ സിൽക്ക് സാരി. സ്വർണ്ണ സരി ബോർഡറും ആകർഷകമായ വർക്കുകളും. വിവാഹ ചടങ്ങുകൾക്ക് അനുയോജ്യം.",
        moqLabel: "കുറഞ്ഞ ഓർഡർ: 10 എണ്ണം",
        specs: ["ശുദ്ധ കട്ടാൻ പട്ട്", "യഥാർത്ഥ സരി ബോർഡർ", "കൈത്തറി നിർമ്മിതം", "GI അംഗീകൃതം"]
      },
      bn: {
        name: "শাহী বেনারসী কাতান সিল্ক শাড়ি (Banarasi Katan Silk Saree)",
        desc: "বারাণসীর ঐতিহ্যবাহী তাঁতিদের দ্বারা প্রস্তুত খাঁটি কাতান সিল্ক শাড়ি। চমৎকার আসল জরির কাজ এবং ফুলের নকশা। যেকোনো উৎসব ও বিয়ের জন্য উপযুক্ত।",
        moqLabel: "ন্যূনতম অর্ডার: ১০ পিস",
        specs: ["খাঁটি কাতান সিল্ক", "আসল জরির পাড়", "হ্যান্ডলুম বোনা", "GI ট্যাগ সার্টিফাইড"]
      },
      mr: {
        name: "शाही बनारसी कतान सिल्क साडी (Banarasi Silk Saree)",
        desc: "वाराणसीच्या कारागिरांनी पारंपरिक हातमागावर विणलेली अस्सल कतान सिल्क साडी. सोनेरी जरीचे नक्षीकाम. सण आणि लग्नसमारंभासाठी थेट घाऊक दरात उपलब्ध.",
        moqLabel: "किमान ऑर्डर: १० नग",
        specs: ["शुद्ध कतान सिल्क", "अस्सल जरी काठ", "हातमाग विणकाम", "GI प्रमाणित"]
      },
      gu: {
        name: "શાહી બનારસી કતાન સિલ્ક સાડી (Banarasi Silk Saree)",
        desc: "વારાણસીના પરંપરાગત વણકરો દ્વારા હાથસાળ પર વણેલી અસલી કતાન સિલ્ક સાડી. ઉત્તમ સોનેરી ઝરી વર્ક. લગ્ન પ્રસંગો માટે સૌથી વિશ્વસનીય ગુણવત્તા.",
        moqLabel: "ન્યૂનતમ ઓર્ડર: ૧૦ નંગ",
        specs: ["શુદ્ધ કતાન સિલ્ક", "અસલી ઝરી બોર્ડર", "હાથસાળ કારીગરી", "GI ટેગ પ્રમાણિત"]
      },
      en: {
        name: "Royal Banarasi Katan Pure Silk Saree",
        desc: "Authentic Katan silk saree handwoven by heritage master artisans of Varanasi. Adorned with real gold-plated zari kadhwa motifs and rich pallu. Direct weaver wholesale pricing.",
        moqLabel: "MOQ: 10 Pieces",
        specs: ["Pure Katan Silk", "Real Zari Border", "Heritage Handloom", "GI Tag Certified"]
      }
    }
  },
  {
    id: "prod-2",
    img: "assets/brass_diya.jpg",
    category: "हस्तशिल्प / Metal Handicrafts",
    origin: "मुरादाबाद, उत्तर प्रदेश",
    stock: 250,
    moq: 25,
    priceSingle: 850,
    priceWholesale: 620,
    priceBulk: 540,
    gstRate: "12% IGST",
    specs: ["शुद्ध पीतल 850g", "हस्तनिर्मित नक्काशी", "मंदिर व पूजा उपयुक्त", "एंटीक पॉलिश"],
    translations: {
      hi: {
        name: "मुरादाबादी हस्तनिर्मित पीतल मोर दीया",
        desc: "मुरादाबाद की पीतल नगरी के कुशल दस्तकारों द्वारा निर्मित भारी पीतल का मोर दीपक। अखण्ड ज्योति और पूजा अनुष्ठानों के लिए स्थायी चमक और दीर्घायु।",
        moqLabel: "न्यूनतम आर्डर: 25 पीस",
        specs: ["शुद्ध पीतल 850g", "हस्तनिर्मित नक्काशी", "मंदिर व पूजा उपयुक्त", "एंटीक पॉलिश"]
      },
      ta: {
        name: "மொராதாபாத் கைவினை பித்தளை மயில் விளக்கு (Brass Peacock Diya)",
        desc: "பாரம்பரிய பித்தளை கைவினைஞர்களால் வடிவமைக்கப்பட்ட கனரக பித்தளை மயில் தீபம். பூஜை அறைகள், கோவில்கள் மற்றும் தீபாவளிக்கு ஏற்ற ஆன்மீக கலைப்படைப்பு.",
        moqLabel: "குறைந்தபட்ச ஆர்டர்: 25 விளக்குகள்",
        specs: ["தூய பித்தளை 850g", "நுணுக்கமான கைவேலைப்பாடு", "கோவில் & பூஜை தரம்", "நீண்டகால பளபளப்பு"]
      },
      te: {
        name: "మొరాదాబాద్ చేతితో చేసిన ఇత్తడి నెమలి దీపం (Brass Peacock Diya)",
        desc: "అసలైన ఇత్తడితో ప్రత్యేకంగా చెక్కబడిన నెమలి దీపం. పూజలు, దేవాలయాలు మరియు శుభకార్యాలకు అత్యంత పవిత్రమైనది. నాణ్యమైన యాంటిక్ ముగింపు.",
        moqLabel: "కనిష్ట ఆర్డర్: 25 ముక్కలు",
        specs: ["స్వచ్ఛమైన ఇత్తడి 850 గ్రా", "హస్తకళా నైపుణ్యం", "పూజలకు అనువైనది", "యాంటిక్ పాలిష్"]
      },
      kn: {
        name: "ಮೊರಾದಾಬಾದ್ ಕರಕುಶಲ ಹಿತ್ತಾಳೆ ನವಿಲು ದೀಪ (Brass Peacock Diya)",
        desc: "ಉನ್ನತ ದರ್ಜೆಯ ಹಿತ್ತಾಳೆಯಿಂದ ಸಿದ್ಧಪಡಿಸಿದ ಆಕರ್ಷಕ ನವಿಲು ದೀಪ. ದೇವಾಲಯ ಹಾಗೂ ಪೂಜಾ ಕೋಣೆಗಳಿಗೆ ಶ್ರೇಷ್ಠ ಆಯ್ಕೆ. ನೇರ ಕಾರ್ಖಾನೆ ದರದಲ್ಲಿ ಲಭ್ಯ.",
        moqLabel: "ಕನಿಷ್ಠ ಆರ್ಡರ್: 25 ದೀಪಗಳು",
        specs: ["ಶುದ್ಧ ಹಿತ್ತಾಳೆ 850 ಗ್ರಾಂ", "ಕರಕುಶಲ ಕೆತ್ತನೆ", "ದೇವಸ್ಥಾನ ದರ್ಜೆ", "ದೀರ್ಘ ಬಾಳಿಕೆ"]
      },
      ml: {
        name: "മൊറാദാബാദ് കൈകൊണ്ട് നിർമ്മിച്ച പിച്ചള മയിൽ വിളക്ക് (Brass Diya)",
        desc: "ഉയർന്ന ഗുണമേന്മയുള്ള പിച്ചളയിൽ തീർത്ത മനോഹരമായ മയിൽ ദീപം. പൂജകൾക്കും ക്ഷേത്ര ആവശ്യങ്ങൾക്കും ഗൃഹപ്രവേശങ്ങൾക്കും അനുയോജ്യമായത്.",
        moqLabel: "കുറഞ്ഞ ഓർഡർ: 25 എണ്ണം",
        specs: ["ശുദ്ധ പിച്ചള 850g", "കൈവേല കൊത്തുപണി", "പൂജ നിലവാരം", "ആന്റിക് പോളിഷ്"]
      },
      bn: {
        name: "মোরাদাবাদী হস্তশিল্প পিতল ময়ূর প্রদীপ (Brass Peacock Diya)",
        desc: "মোরাদাবাদের ধাতু শিল্পীদের হাতে তৈরি ভারী খাঁটি পিতলের ময়ূর প্রদীপ। পূজা, মন্দির এবং শুভ অনুষ্ঠানের জন্য দীর্ঘস্থায়ী ও ঐতিহ্যবাহী শোভা।",
        moqLabel: "ন্যূনতম অর্ডার: ২৫ পিস",
        specs: ["খাঁটি পিতল ৮৫০ গ্রাম", "হাতে খোদাই কাজ", "পূজা ও মন্দির উপযুক্ত", "অ্যান্টিক ফিনিশ"]
      },
      mr: {
        name: "मुरादाबादी हस्तनिर्मित पितळी मयूर दिवा (Brass Peacock Diya)",
        desc: "अस्सल पितळेपासून तयार केलेला वजनदार मयूर समई दिवा. मंदिरांसाठी व घरातील पूजेसाठी अत्यंत शुभ. थेट उत्पादकाकडून घाऊक दरात उपलब्ध.",
        moqLabel: "किमान ऑर्डर: २५ नग",
        specs: ["शुद्ध पितळ ८५० ग्रॅम", "हस्तकला नक्षीकाम", "पूजा व मंदिरासाठी", "अँटिक पॉलिश"]
      },
      gu: {
        name: "મોરાદાબાદી હાથબનાવટ પિત્તળ મોર દીવો (Brass Peacock Diya)",
        desc: "શુદ્ધ પિત્તળમાંથી કલાત્મક કોતરણી સાથે બનાવેલ મયૂર દીવો. પૂજા ખંડ અને મંદિરો માટે અત્યંત શુભ અને ટકાઉ. ઉત્તમ હોલસેલ ભાવ.",
        moqLabel: "ન્યૂનતમ ઓર્ડર: ૨૫ નંગ",
        specs: ["શુદ્ધ પિત્તળ ૮૫૦ ગ્રામ", "હાથબનાવટ નકશીકામ", "મંદિર ગુણવત્તા", "એન્ટિક ફિનિશ"]
      },
      en: {
        name: "Moradabad Handcrafted Brass Peacock Oil Diya",
        desc: "Heavy solid brass ceremonial lamp handcrafted in the metal city of Moradabad. Features intricately carved peacock finial, durable wick reservoir, and antique lustrous gold finish.",
        moqLabel: "MOQ: 25 Pieces",
        specs: ["Solid Brass 850g", "Hand Engraved", "Temple Grade", "Antique Gold Polish"]
      }
    }
  },
  {
    id: "prod-3",
    img: "assets/kashmiri_spices.jpg",
    category: "मसाले / Heritage Spices",
    origin: "पंपोर, कश्मीर / वाराणसी हब",
    stock: 80,
    moq: 10,
    priceSingle: 2800,
    priceWholesale: 2300,
    priceBulk: 2100,
    gstRate: "5% IGST",
    specs: ["ग्रेड-A1 मोंगरा", "100% शुद्धता लैब टेस्टेड", "लकड़ी का शाही बॉक्स", "प्राकृतिक खुशबू"],
    translations: {
      hi: {
        name: "प्रीमियम कश्मीरी मोंगरा केसर व मसाला बॉक्स",
        desc: "पंपोर की घाटी का ताजा तोड़ा हुआ ग्रेड-ए1 मोंगरा केसर, इलायची और चक्रफूल। सुंदर नक्काशीदार लकड़ी के उपहार बॉक्स में सुरक्षित पैक। मिठाई एवं रेस्टोरेंट हेतु थोक आपूर्ति।",
        moqLabel: "न्यूनतम आर्डर: 10 बॉक्स",
        specs: ["ग्रेड-A1 मोंगरा", "100% शुद्धता लैब टेस्टेड", "लकड़ी का शाही बॉक्स", "प्राकृतिक खुशबू"]
      },
      ta: {
        name: "காஷ்மீரி மாங்க்ரா குங்குமப்பூ & வாசனைப் பெட்டி (Kashmiri Saffron)",
        desc: "காஷ்மீரின் பம்போர் பள்ளத்தாக்கில் விளைந்த தரம் வாய்ந்த தூய மாங்க்ரா குங்குமப்பூ மற்றும் நறுமண மசாலாப் பெட்டி. உணவகங்கள், இனிப்புக் கடைகள் மற்றும் திருமண பரிசுகளுக்கு சிறந்தது.",
        moqLabel: "குறைந்தபட்ச ஆர்டர்: 10 பெட்டிகள்",
        specs: ["தரம்-A1 மாங்க்ரா", "100% தூய்மை சான்றளிக்கப்பட்டது", "மர பரிசுப் பெட்டி", "இயற்கை நறுமணம்"]
      },
      te: {
        name: "ప్రీమియం కాశ్మీరీ కుంకుమపువ్వు & సుగంధ ద్రవ్యాల పెట్టె (Kashmiri Saffron)",
        desc: "కాశ్మీర్ పంపోర్ లోయ నుండి సేకరించిన అత్యున్నత గ్రేడ్-A1 మోంగ్రా కుంకుమపువ్వు మరియు సుగంధ ద్రవ్యాలు. రాయల్ చెక్క బాక్స్‌లో భద్రపరచబడింది.",
        moqLabel: "కనిష్ట ఆర్డర్: 10 బాక్స్‌లు",
        specs: ["గ్రేడ్-A1 మోంగ్రా", "100% స్వచ్ఛత గ్యారెంటీ", "రాయల్ చెక్క బాక్స్", "సహజ సువాసన"]
      },
      kn: {
        name: "ಕಾಶ್ಮೀರಿ ಮೊಂಗ್ರಾ ಕೇಸರಿ & ಸಾಂಬಾರ ಪದಾರ್ಥಗಳ ಬಾಕ್ಸ್ (Kashmiri Saffron)",
        desc: "ಕಾಶ್ಮೀರದ ಪಂಪೋರ್ ಕಣಿವೆಯ ಶುದ್ಧ ಶ್ರೇಷ್ಠ ದರ್ಜೆಯ ಮೊಂಗ್ರಾ ಕೇಸರಿ ಮತ್ತು ಏಲಕ್ಕಿ. ಸುಂದರ ಮರದ ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಪ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ. ಸಿಹಿತಿಂಡಿ ತಯಾರಕರಿಗೆ ಉತ್ತಮ ರಿಯಾಯಿತಿ.",
        moqLabel: "ಕನಿಷ್ಠ ಆರ್ಡರ್: 10 ಬಾಕ್ಸ್‌ಗಳು",
        specs: ["ಗ್ರೇಡ್-A1 ಮೊಂಗ್ರಾ", "100% ಶುದ್ಧತೆಯ ಪರೀಕ್ಷಿತ", "ರಾಜಮನೆತನದ ಮರದ ಬಾಕ್ಸ್", "ನೈಸರ್ಗಿಕ ಸುವಾಸನೆ"]
      },
      ml: {
        name: "കാശ്മീരി കുങ്കുമപ്പൂവ് & സുഗന്ധവ്യഞ്ജന ബോക്സ് (Kashmiri Saffron)",
        desc: "കാശ്മീരിലെ പമ്പോർ താഴ്‌വരയിൽ നിന്ന് നേരിട്ട് ശേഖരിച്ച ശുദ്ധമായ മോംഗ്ര കുങ്കുമപ്പൂവ്. ഭംഗിയുള്ള തടി ബോക്സിൽ ലഭിക്കുന്നു. ഹോട്ടലുകൾക്കും സ്വീറ്റ്സ് നിർമ്മാതാക്കൾക്കും അനുയോജ്യം.",
        moqLabel: "കുറഞ്ഞ ഓർഡർ: 10 പെട്ടികൾ",
        specs: ["ഗ്രേഡ്-A1 മോംഗ്ര", "100% ശുദ്ധം", "റോയൽ വുഡൻ ബോക്സ്", "സ്വാഭാവിക സുഗന്ധം"]
      },
      bn: {
        name: "কাশ্মীরি মংগ্রা জাফরান ও মশলার রয়্যাল বক্স (Kashmiri Saffron)",
        desc: "কাশ্মীরের পাম্পোর উপত্যকার তাজা গ্রেড-এ১ খাঁটি মংগ্রা জাফরান, সবুজ এলাচ ও তারা মৌরি। সুন্দর কাঠের উপহার বাক্সে সুরক্ষিত প্যাক করা। মিষ্টি প্রস্তুতকারকদের জন্য আদর্শ।",
        moqLabel: "ন্যূনতম অর্ডার: ১০ বাক্স",
        specs: ["গ্রেড-A1 মংগ্রা", "১০০% ল্যাব পরীক্ষিত খাঁটি", "রয়্যাল কাঠের বক্স", "প্রাকৃতিক সুগন্ধ"]
      },
      mr: {
        name: "काश्मिरी मोंगरा केशर व मसाले रॉयल बॉक्स (Kashmiri Saffron)",
        desc: "काश्मीरच्या पॅम्पोर खोऱ्यातील अस्सल ग्रेड-ए१ मोंगरा केशर आणि वेलची. आकर्षक लाकडी गिफ्ट बॉक्समध्ये पॅक. मिठाई कारखाने आणि थेट खरेदीसाठी उत्कृष्ट दर.",
        moqLabel: "किमान ऑर्डर: १० बॉक्स",
        specs: ["ग्रेड-A1 मोंगरा", "१००% शुद्धता प्रमाणित", "लाकडी रॉयल बॉक्स", "नैसर्गिक सुगंध"]
      },
      gu: {
        name: "કાશ્મીરી મોંગરા કેસર અને મસાલા બોક્સ (Kashmiri Saffron)",
        desc: "કાશ્મીરના પમ્પોર ખીણનું તાજું ગ્રેડ-એ૧ મોંગરા કેસર અને એલચી. સુંદર લાકડાના બોક્સમાં સુરક્ષિત પેકિંગ. હોટેલ્સ અને મિઠાઈ વ્યવસાય માટે સીધો હોલસેલ સપ્લાય.",
        moqLabel: "ન્યૂનતમ ઓર્ડર: ૧૦ બોક્સ",
        specs: ["ગ્રેડ-A1 મોંગરા", "૧૦૦% શુદ્ધતા લેબ ટેસ્ટેડ", "લાકડાનું રોયલ બોક્સ", "કુદરતી સુગંધ"]
      },
      en: {
        name: "Royal Kashmiri Mongra Saffron & Gourmet Spice Box",
        desc: "Harvested directly from Pampore valleys, Kashmir. Grade-A1 long-thread Mongra saffron accompanied by bold green cardamoms in a handcrafted walnut finish wooden box.",
        moqLabel: "MOQ: 10 Boxes",
        specs: ["Grade-A1 Mongra", "100% Lab Certified", "Handcrafted Wooden Box", "Intense Natural Aroma"]
      }
    }
  }
];

// UI Localization Dictionaries for Buyer Storefront
const UI_STRINGS = {
  ta: {
    bannerTitle: "ஸ்ரீ காசி விஸ்வநாதர் கைத்தறி & கைவினைப் பொருட்கள்",
    bannerDesc: "வாரணாசி பட்டுப் புடவைகள் மற்றும் பாரம்பரிய கைவினைப் பொருட்களின் நேரடி மொத்த கொள்முதல். இடைத்தரகர்கள் இல்லாமல் உற்பத்தியாளர் விலையில் தமிழகத்திற்கு நேரடி டெலிவரி.",
    verifiedBadge: "வாரணாசி நெசவாளரிடமிருந்து நேரடி • சரிபார்க்கப்பட்ட கைவினைஞர்",
    badge1: "தமிழகம் முழுவதும் எக்ஸ்பிரஸ் டெலிவரி (3-4 நாட்கள்)",
    badge2: "மாநிலங்களுக்கு இடையேயான GST (IGST) இன்புட் கிரெடிட்",
    badge3: "பாதுகாப்பான B2B வங்கிப் பரிவர்த்தனை",
    catalogHeading: "நேரடி மொத்த விற்பனைப் பட்டியல் (Wholesale Catalog)",
    weaverGuarantee: "உற்பத்தியாளர் நேரடி விலை • தர உத்தரவாதம்",
    calcTitle: "மாநில சரக்கு & வரி கால்குலேட்டர் (வாரணாசி ➔ உங்கள் கடை)",
    transitTime: "3 - 4 நாட்கள் (Surface Express)",
    taxRate: "5% / 12% IGST (இன்புட் கிரெடிட் கிடைக்கும்)",
    btnQuote: "நேரடி WhatsApp மொத்த விலை பெறுக",
    btnSample: "மாதிரி கோருங்கள் (Sample)",
    btnInquire: "WhatsApp விசாரணை",
    singlePriceLbl: "சில்லறை விலை:",
    wholesalePriceLbl: "மொத்த விலை (10+):",
    bulkPriceLbl: "மெகா மொத்த விலை (50+):"
  },
  te: {
    bannerTitle: "శ్రీ కాశీ విశ్వనాథ్ చేనేత & హస్తకళల కేంద్రం",
    bannerDesc: "వారణాసి పట్టు చీరలు మరియు చేతివృత్తుల వస్తువుల ప్రత్యక్ష హోల్‌సేల్ సరఫరా. మధ్యవర్తులు లేకుండా తయారీదారుల ధరలకే ఆంధ్ర & తెలంగాణ వ్యాపారులకు డెలివరీ.",
    verifiedBadge: "వారణాసి చేనేత నుండి ప్రత్యక్షం • ధృవీకరించబడిన కళాకారుడు",
    badge1: "ఆంధ్రప్రదేశ్ & తెలంగాణకు ఎక్స్‌ప్రెస్ రవాణా",
    badge2: "అంతర్రాష్ట్ర IGST ఇన్వాయిస్ అందుబాటులో ఉంది",
    badge3: "సురక్షితమైన B2B చెల్లింపులు",
    catalogHeading: "ప్రత్యక్ష హోల్‌సేల్ కేటలాగ్ (Wholesale Catalog)",
    weaverGuarantee: "తయారీదారుల ప్రత్యక్ష ధర • నాణ్యత హామీ",
    calcTitle: "రాష్ట్రాల వారీగా సరుకు రవాణా & పన్ను కాలిక్యులేటర్",
    transitTime: "2 - 3 రోజులు (Surface Cargo)",
    taxRate: "5% / 12% IGST (ఇన్‌పుట్ క్రెడిట్ వర్తిస్తుంది)",
    btnQuote: "వాట్సాప్ ద్వారా హోల్‌సేల్ కొటేషన్",
    btnSample: "నమూనా కోరండి (Sample)",
    btnInquire: "WhatsApp విచారణ",
    singlePriceLbl: "చిల్లర ధర:",
    wholesalePriceLbl: "హోల్‌సేల్ ధర (10+):",
    bulkPriceLbl: "బల్క్ ధర (50+):"
  },
  kn: {
    bannerTitle: "ಶ್ರೀ ಕಾಶಿ ವಿಶ್ವನಾಥ ಕೈಮಗ್ಗ ಮತ್ತು ಕರಕುಶಲ ಮಳಿಗೆ",
    bannerDesc: "ವಾರಣಾಸಿ ರೇಷ್ಮೆ ಸೀರೆಗಳು ಮತ್ತು ಮೊರಾದಾಬಾದ್ ಹಿತ್ತಾಳೆ ಕರಕುಶಲ ವಸ್ತುಗಳ ನೇರ ಸಗಟು ಖರೀದಿ. ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ಕಾರ್ಖಾನೆ ಬೆಲೆಯಲ್ಲಿ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸರಬರಾಜು.",
    verifiedBadge: "ನೇರ ನೇಕಾರರಿಂದ • ಪರಿಶೀಲಿಸಿದ ಕುಶಲಕರ್ಮಿ",
    badge1: "ಕರ್ನಾಟಕದಾದ್ಯಂತ ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಡೆಲಿವರಿ",
    badge2: "ಅಂತರರಾಜ್ಯ IGST ಬಿಲ್ಲಿಂಗ್ ಲಭ್ಯ",
    badge3: "ಸುರಕ್ಷಿತ B2B ವ್ಯಾಪಾರ ಖಾತರಿ",
    catalogHeading: "ನೇರ ಸಗಟು ಕ್ಯಾಟಲಾಗ್ (Wholesale Catalog)",
    weaverGuarantee: "ಉತ್ಪಾದಕರ ನೇರ ದರ • ಉನ್ನತ ಗುಣಮಟ್ಟ",
    calcTitle: "ಸಾರಿಗೆ ಮತ್ತು ತೆರಿಗೆ ಲೆಕ್ಕಾಚಾರ (ವಾರಣಾಸಿ ➔ ಕರ್ನಾಟಕ)",
    transitTime: "3 - 4 ದಿನಗಳು (Express Cargo)",
    taxRate: "5% / 12% IGST (ಇನ್‌ಪುಟ್ ಕ್ರೆಡಿಟ್ ಲಭ್ಯ)",
    btnQuote: "WhatsApp ಸಗಟು ದರ ಪಟ್ಟಿ ಪಡೆಯಿರಿ",
    btnSample: "ಮಾದರಿ ತರಿಸಿಕೊಳ್ಳಿ (Sample)",
    btnInquire: "WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
    singlePriceLbl: "ಬಿಡಿ ಬೆಲೆ:",
    wholesalePriceLbl: "ಸಗಟು ಬೆಲೆ (10+):",
    bulkPriceLbl: "ದೊಡ್ಡ ಸಗಟು ಬೆಲೆ (50+):"
  },
  ml: {
    bannerTitle: "ശ്രീ കാശി വിശ്വനാഥ് കൈത്തറി & കരകൗശല കേന്ദ്രം",
    bannerDesc: "വാരണാസി സിൽക്ക് സാരികളും പിച്ചള കരകൗശല വസ്തുക്കളും നേരിട്ട് മൊത്തവിലയിൽ ലഭ്യമാണ്. ഇടനിലക്കാരില്ലാതെ നിർമ്മാതാക്കളിൽ നിന്ന് നേരിട്ട് കേരളത്തിലേക്ക്.",
    verifiedBadge: "നേരിട്ടുള്ള കൈത്തറി ഉത്പന്നങ്ങൾ • വെരിഫൈഡ്",
    badge1: "കേരളത്തിലേക്ക് വേഗതയേറിയ ഡെലിവറി",
    badge2: "സംസ്ഥാനാന്തര IGST ഇൻവോയ്സ്",
    badge3: "സുരക്ഷിത B2B പേയ്‌മെന്റ്",
    catalogHeading: "നേരിട്ടുള്ള മൊത്തവ്യാപാര കാറ്റലോഗ്",
    weaverGuarantee: "നിർമ്മാതാവിന്റെ നേരിട്ടുള്ള വില • ഗ്യാരണ്ടി",
    calcTitle: "ചരക്കുകൂലിയും നികുതിയും കണക്കാക്കുക",
    transitTime: "3 - 5 ദിവസങ്ങൾ",
    taxRate: "5% / 12% IGST (ഇൻപുട്ട് ക്രെഡിറ്റ് സഹിതം)",
    btnQuote: "WhatsApp വഴി നിരക്ക് അറിയുക",
    btnSample: "സാമ്പിൾ ആവശ്യപ്പെടുക",
    btnInquire: "WhatsApp വഴി അന്വേഷിക്കുക",
    singlePriceLbl: "ചില്ലറ വില:",
    wholesalePriceLbl: "മൊത്തവില (10+):",
    bulkPriceLbl: "ബൾക്ക് വില (50+):"
  },
  bn: {
    bannerTitle: "শ্রী কাশী বিশ্বনাথ হ্যান্ডলুম ও হস্তশিল্প কেন্দ্র",
    bannerDesc: "বারাণসী বেনারসী শাড়ি ও মোরাদাবাদী পিতলের হস্তশিল্পের সরাসরি পাইকারি ক্রয়। মধ্যস্বত্বভোগী ছাড়া প্রস্তুতকারকের মূল্যে বাংলায় সরাসরি সরবরাহ।",
    verifiedBadge: "বারাণসীর তাঁতিদের থেকে সরাসরি • ভেরিফাইড কারিগর",
    badge1: "পশ্চিমবঙ্গে দ্রুত এক্সপ্রেস ডেলিভারি",
    badge2: "আন্তঃরাজ্য IGST ইনপুট ক্রেডিট উপলব্ধ",
    badge3: "নিরাপদ B2B আর্থিক সুরক্ষা",
    catalogHeading: "সরাসরি পাইকারি ক্যাটালগ (Wholesale Catalog)",
    weaverGuarantee: "প্রস্তুতকারকের সরাসরি দর • শতভাগ গুণমান",
    calcTitle: "পরিবহন খরচ ও কর ক্যালকুলেটর (বারাণসী ➔ বাংলা)",
    transitTime: "২ - ৩ দিন (Surface Express)",
    taxRate: "৫% / ১২% IGST (ইনপুট ক্রেডিট সহ)",
    btnQuote: "WhatsApp-এ পাইকারি কোটেশন পান",
    btnSample: "স্যাম্পল অর্ডার করুন (Sample)",
    btnInquire: "WhatsApp যোগাযোগ",
    singlePriceLbl: "খুচরো মূল্য:",
    wholesalePriceLbl: "পাইকারি মূল্য (১০+):",
    bulkPriceLbl: "বাল্ক মূল্য (৫০+):"
  },
  mr: {
    bannerTitle: "श्री काशी विश्वनाथ हॅण्डलूम आणि हस्तकला भांडार",
    bannerDesc: "वाराणसी सिल्क साड्या आणि मुरादाबादी पितळी वस्तूंची थेट घाऊक खरेदी. दलालांशिवाय थेट विणकरांच्या दरात महाराष्ट्रातील व्यापाऱ्यांसाठी थेट पुरवठा.",
    verifiedBadge: "थेट विणकरांकडून • प्रमाणित कारागीर",
    badge1: "महाराष्ट्रात जलद एक्स्प्रेस वाहतूक",
    badge2: "आंतरराज्य IGST इनपुट क्रेडिट उपलब्ध",
    badge3: "सुरक्षित B2B व्यवहार",
    catalogHeading: "थेट घाऊक कॅटलॉग (Wholesale Catalog)",
    weaverGuarantee: "थेट उत्पादक दर • गुणवत्ता हमी",
    calcTitle: "वाहतूक खर्च व कर गणक (वाराणसी ➔ महाराष्ट्र)",
    transitTime: "२ - ३ दिवस (Express Cargo)",
    taxRate: "५% / १२% IGST (इनपुट क्रेडिट उपलब्ध)",
    btnQuote: "WhatsApp वर घाऊक दर मिळवा",
    btnSample: "सॅम्पल मागवा (Sample)",
    btnInquire: "WhatsApp वर विचारा",
    singlePriceLbl: "किरकोळ दर:",
    wholesalePriceLbl: "घाऊक दर (१०+):",
    bulkPriceLbl: "मोठा घाऊक दर (५०+):"
  },
  gu: {
    bannerTitle: "શ્રી કાશી વિશ્વનાથ હેન્ડલૂમ અને હસ્તકલા કેન્દ્ર",
    bannerDesc: "વારાણસી સિલ્ક સાડીઓ અને પિત્તળ કલાકૃતિઓની સીધી જથ્થાબંધ ખરીદી. વચેટિયાઓ વિના ઉત્પાદકના ભાવે ગુજરાતના વેપારીઓ માટે સુરક્ષિત ડિલિવરી.",
    verifiedBadge: "કારીગરો પાસેથી સીધું • પ્રમાણિત સંસ્થાન",
    badge1: "ગુજરાતમાં એક્સપ્રેસ ડિલિવરી",
    badge2: "આંતરરાજ્ય IGST ઇન્વૉઇસ ઉપલબ્ધ",
    badge3: "સુરક્ષિત B2B પેમેન્ટ",
    catalogHeading: "સીધો જથ્થાબંધ કેટેલોગ (Wholesale Catalog)",
    weaverGuarantee: "ઉત્પાદકનો સીધો ભાવ • ઉત્તમ ગુણવત્તા",
    calcTitle: "ભાડું અને જીએસટી કેલ્ક્યુલેટર (વારાણસી ➔ ગુજરાત)",
    transitTime: "૨ - ૩ દિવસ",
    taxRate: "૫% / ૧૨% IGST (ઇનપુટ ક્રેડિટ સાથે)",
    btnQuote: "WhatsApp પર હોલસેલ ભાવ મેળવો",
    btnSample: "સેમ્પલ મંગાવો (Sample)",
    btnInquire: "WhatsApp પર પૂછપરછ",
    singlePriceLbl: "છૂટક ભાવ:",
    wholesalePriceLbl: "જથ્થાબંધ ભાવ (૧૦+):",
    bulkPriceLbl: "બલ્ક ભાવ (૫૦+):"
  },
  en: {
    bannerTitle: "Shree Kashi Vishwanath Handlooms & Crafts",
    bannerDesc: "Direct wholesale sourcing of authentic Varanasi silk sarees, Moradabad brass artifacts, and GI-tagged heritage goods. Real-time language translation for buyers across all Indian states.",
    verifiedBadge: "Direct From Varanasi Weaver • Verified Artisan",
    badge1: "Pan-India Express Logistics (2-4 Days)",
    badge2: "Interstate GST (IGST) Input Credit Compliant",
    badge3: "Escrow Protected B2B Orders",
    catalogHeading: "Direct Wholesale Catalog",
    weaverGuarantee: "Manufacturer Direct Rate • No Middlemen",
    calcTitle: "Interstate Delivery & Tax Calculator (Varanasi to Your State)",
    transitTime: "3 - 4 Days (Surface Express)",
    taxRate: "5% / 12% IGST (Input Credit Available)",
    btnQuote: "Get Direct WhatsApp Wholesale Quote",
    btnSample: "Request Sample Parcel",
    btnInquire: "WhatsApp Inquiry",
    singlePriceLbl: "Retail Price:",
    wholesalePriceLbl: "Wholesale (10+):",
    bulkPriceLbl: "Bulk Tier (50+):"
  },
  hi: {
    bannerTitle: "श्री काशी विश्वनाथ हथकरघा एवं हस्तशिल्प केंद्र",
    bannerDesc: "वाराणसी की प्रसिद्ध रेशमी साड़ियों और मुरादाबादी पीतल दस्तकारी का सीधा थोक केंद्र। पूरे भारत के व्यापारियों के लिए सीधी आपूर्ति।",
    verifiedBadge: "वाराणसी बुनकर से सीधा • सत्यापित कारीगर",
    badge1: "अखिल भारतीय एक्सप्रेस परिवहन",
    badge2: "अंतर्राज्यीय IGST इनपुट क्रेडिट",
    badge3: "सुरक्षित व्यापार गारंटी",
    catalogHeading: "सीधा थोक कैटलॉग (Wholesale Catalog)",
    weaverGuarantee: "निर्माता की सीधी दर • शुद्धता की गारंटी",
    calcTitle: "परिवहन और कर कैलकुलेटर",
    transitTime: "२ - ४ दिन (Express Cargo)",
    taxRate: "5% / 12% IGST (इनपुट क्रेडिट मान्य)",
    btnQuote: "व्हाट्सएप पर थोक भाव प्राप्त करें",
    btnSample: "नमूना (Sample) मंगाएं",
    btnInquire: "व्हाट्सएप पूछताछ",
    singlePriceLbl: "खुदरा भाव:",
    wholesalePriceLbl: "थोक दर (10+):",
    bulkPriceLbl: "बड़ा थोक दर (50+):"
  }
};

// State Variables
let currentLanguage = 'ta'; // Default to Tamil to immediately highlight interstate translation
let activeView = 'vendor';
let speechRecognitionInstance = null;
let isRecording = false;

// =============================================================================
// 2. View Switching Logic (Vendor / Buyer / Voice Playground)
// =============================================================================

function switchView(viewName) {
  activeView = viewName;

  // Update tabs
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.remove('active', 'vendor-active', 'buyer-active');
  });

  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const tabVendor = document.getElementById('tab-vendor');
  const tabBuyer = document.getElementById('tab-buyer');
  const tabVoice = document.getElementById('tab-voice');

  if (viewName === 'vendor') {
    tabVendor.classList.add('active', 'vendor-active');
    document.getElementById('view-vendor').classList.add('active');
  } else if (viewName === 'buyer') {
    tabBuyer.classList.add('active', 'buyer-active');
    document.getElementById('view-buyer').classList.add('active');
    renderBuyerCatalog();
  } else if (viewName === 'voice') {
    tabVoice.classList.add('active', 'buyer-active');
    document.getElementById('view-voice').classList.add('active');
  }

  showToast(`दृष्टिकोण बदला: ${viewName === 'vendor' ? 'दुकानदार पोर्टल (हिन्दी)' : viewName === 'buyer' ? 'ग्राहक स्टोरफ़्रंट (बहुभाषी)' : 'वॉयस प्लेग्राउंड'}`);
}

// =============================================================================
// 3. Buyer Multilingual Rendering Engine
// =============================================================================

function selectBuyerLanguage(langCode) {
  currentLanguage = langCode;

  // Update active state on language pills
  document.querySelectorAll('.lang-switch-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-lang-${langCode}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Update Banner & UI strings
  const dict = UI_STRINGS[langCode] || UI_STRINGS.en;
  
  document.getElementById('buyer-banner-title').textContent = dict.bannerTitle;
  document.getElementById('buyer-banner-desc').textContent = dict.bannerDesc;
  document.getElementById('lbl-verified-store').textContent = dict.verifiedBadge;
  document.getElementById('lbl-badge-1').textContent = dict.badge1;
  document.getElementById('lbl-badge-2').textContent = dict.badge2;
  document.getElementById('lbl-badge-3').textContent = dict.badge3;
  document.getElementById('lbl-catalog-heading').textContent = dict.catalogHeading;
  document.getElementById('lbl-weaver-guarantee').textContent = dict.weaverGuarantee;
  document.getElementById('lbl-shipping-title').textContent = dict.calcTitle;
  document.getElementById('lbl-btn-quote').textContent = dict.btnQuote;

  // Re-render product cards with the new language
  renderBuyerCatalog();

  // Recalculate shipping labels
  calculateInterstateShipping();

  showToast(`Language switched to: ${getLanguageName(langCode)}`);
}

function getLanguageName(code) {
  const map = {
    ta: 'தமிழ் (Tamil)',
    te: 'తెలుగు (Telugu)',
    kn: 'ಕನ್ನಡ (Kannada)',
    ml: 'മലയാളം (Malayalam)',
    bn: 'বাংলা (Bengali)',
    mr: 'मराठी (Marathi)',
    gu: 'ગુજરાતી (Gujarati)',
    en: 'English',
    hi: 'हिन्दी (Hindi)'
  };
  return map[code] || code;
}

function renderBuyerCatalog() {
  const container = document.getElementById('buyer-catalog-grid');
  if (!container) return;

  const dict = UI_STRINGS[currentLanguage] || UI_STRINGS.en;

  container.innerHTML = CATALOG_DATA.map(product => {
    const langData = product.translations[currentLanguage] || product.translations.en;
    
    return `
      <div class="product-card">
        <div class="product-image-box">
          <img src="${product.img}" alt="${langData.name}" loading="lazy">
          <span class="product-tag-floating"><i class="fa-solid fa-bolt"></i> ${langData.moqLabel}</span>
          <span class="product-origin-floating"><i class="fa-solid fa-location-dot"></i> ${product.origin}</span>
        </div>

        <div class="product-card-body">
          <h4 class="product-card-title">${langData.name}</h4>
          <p class="product-card-desc">${langData.desc}</p>

          <!-- Tiered Pricing Box -->
          <div class="tier-pricing-box">
            <div class="tier-title">
              <span>${dict.wholesalePriceLbl}</span>
              <span style="color:#10b981; font-weight:700;"><i class="fa-solid fa-tag"></i> 25% Off</span>
            </div>
            <div class="tier-rates-row">
              <span class="single-price">₹${product.priceWholesale.toLocaleString('en-IN')}</span>
              <span class="bulk-price">${dict.bulkPriceLbl} ₹${product.priceBulk.toLocaleString('en-IN')}</span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">
              ${dict.singlePriceLbl} <strike>₹${product.priceSingle.toLocaleString('en-IN')}</strike> • ${product.gstRate}
            </div>
          </div>

          <!-- Specs List -->
          <div class="product-specs-list">
            ${langData.specs.map(spec => `<span class="spec-pill"><i class="fa-solid fa-check" style="color:#10b981; font-size:0.7rem;"></i> ${spec}</span>`).join('')}
          </div>

          <!-- Card Actions -->
          <div class="card-actions-row">
            <button class="btn-card-sample" onclick="openSampleModal('${product.id}')">
              <i class="fa-solid fa-box-open"></i> ${dict.btnSample}
            </button>
            <a href="https://api.whatsapp.com/send?phone=919876543210&text=Namaste,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(langData.name)}%20(MOQ%20${product.moq})" target="_blank" class="btn-card-inquire">
              <i class="fa-brands fa-whatsapp"></i> ${dict.btnInquire}
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================================
// 4. Interstate Freight & GST Calculation
// =============================================================================

function calculateInterstateShipping() {
  const state = document.getElementById('buyer-dest-state').value;
  const transitElem = document.getElementById('calc-transit-days');
  const taxElem = document.getElementById('calc-igst-tax');

  const transitMap = {
    TN: '3 - 4 நாட்கள் (Chennai / Coimbatore Direct Surface Express)',
    KA: '3 - 4 ದಿನಗಳು (Bengaluru Cargo Hub)',
    TS: '2 - 3 రోజులు (Hyderabad Express)',
    AP: '3 - 4 రోజులు (Vijayawada / Vizag Logistics)',
    KL: '4 - 5 ദിവസങ്ങൾ (Kochi Freight)',
    WB: '2 - 3 দিন (Kolkata Gati Surface)',
    MH: '2 - 3 दिवस (Mumbai / Pune Express)',
    GJ: '2 - 3 દિવસ (Ahmedabad / Surat Hub)'
  };

  const currentText = transitMap[state] || '3 - 4 Days Express';
  if (transitElem) {
    transitElem.innerHTML = `<strong>${currentText}</strong>`;
  }

  if (taxElem) {
    taxElem.innerHTML = `<strong>5% / 12% IGST (Interstate Input Tax Credit Available)</strong>`;
  }
}

// =============================================================================
// 5. Voice Input & Speech Recognition (Web Speech API + Fallback)
// =============================================================================

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    speechRecognitionInstance = new SpeechRecognition();
    speechRecognitionInstance.continuous = false;
    speechRecognitionInstance.interimResults = true;
    speechRecognitionInstance.lang = 'hi-IN'; // Pure Hindi

    speechRecognitionInstance.onstart = () => {
      isRecording = true;
      updateMicUI(true);
    };

    speechRecognitionInstance.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      const textarea = document.getElementById('hindi-voice-text');
      if (textarea) {
        textarea.value = transcript;
        updateWordCount(transcript);
      }
    };

    speechRecognitionInstance.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      isRecording = false;
      updateMicUI(false);
      showToast('माइक त्रुटि: कृपया नीचे दिए गए "डेमो चुनें" बटन का उपयोग करें!');
    };

    speechRecognitionInstance.onend = () => {
      isRecording = false;
      updateMicUI(false);
      const text = document.getElementById('hindi-voice-text').value;
      if (text.trim().length > 0) {
        generateMultilingualCatalog();
      }
    };
  }
}

function toggleVoiceRecording() {
  if (!speechRecognitionInstance) {
    initSpeechRecognition();
  }

  if (!speechRecognitionInstance) {
    showToast('इस ब्राउज़र में स्पीच रिकॉग्निशन समर्थित नहीं है। नीचे दिए गए डेमो पर क्लिक करें!');
    simulateVoiceInput(1);
    return;
  }

  if (isRecording) {
    speechRecognitionInstance.stop();
  } else {
    try {
      speechRecognitionInstance.start();
    } catch (e) {
      console.error(e);
      simulateVoiceInput(1);
    }
  }
}

function updateMicUI(recording) {
  const micBtn = document.getElementById('vendor-mic-btn');
  const micStatus = document.getElementById('mic-status-text');
  const micIcon = document.getElementById('mic-icon');

  if (recording) {
    micBtn.classList.add('recording');
    micIcon.className = 'fa-solid fa-stop';
    micStatus.innerHTML = '<span style="color:#dc2626;"><i class="fa-solid fa-circle-dot"></i> ध्यान से सुन रहे हैं... हिन्दी में बोलिए</span>';
  } else {
    micBtn.classList.remove('recording');
    micIcon.className = 'fa-solid fa-microphone';
    micStatus.textContent = 'माइक पर क्लिक करें और हिन्दी में सामान का नाम और भाव बोलें';
  }
}

// Quick Demo Simulation for instant evaluation without microphone permissions
function simulateVoiceInput(demoId) {
  const prompts = {
    1: "शाही बनारसी कतान सिल्क साड़ी, शुद्ध सोने की जरी बॉर्डर, थोक भाव अठारह सौ पचास रुपये, कम से कम 10 पीस का आर्डर।",
    2: "मुरादाबादी हस्तनिर्मित भारी पीतल का मोर दीया, वजन 850 ग्राम, थोक भाव छह सौ बीस रुपये, कम से कम 25 पीस।",
    3: "प्रीमियम कश्मीरी मोंगरा केसर डिब्बी, शुद्ध पंपोर केसर, थोक भाव तेईस सौ रुपये, न्यूनतम 10 बॉक्स।"
  };

  const text = prompts[demoId] || prompts[1];
  const textarea = document.getElementById('hindi-voice-text');
  
  // Typing animation simulation
  textarea.value = '';
  let index = 0;
  const timer = setInterval(() => {
    textarea.value += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(timer);
      updateWordCount(text);
      generateMultilingualCatalog();
      showToast('हिन्दी आवाज़ को 8 दक्षिण व पूर्व भारतीय भाषाओं में बदल दिया गया!');
    }
  }, 20);
}

function updateWordCount(text) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const countElem = document.getElementById('transcription-word-count');
  if (countElem) countElem.textContent = `${words} शब्द`;
}

function clearVoiceInput() {
  document.getElementById('hindi-voice-text').value = '';
  document.getElementById('ai-multilingual-preview-wrapper').style.display = 'none';
  updateWordCount('');
}

// =============================================================================
// 6. AI Multilingual Translation Generator (Hindi ➔ 8 Languages)
// =============================================================================

function generateMultilingualCatalog() {
  const inputText = document.getElementById('hindi-voice-text').value.trim();
  if (!inputText) {
    showToast('कृपया पहले हिन्दी में कुछ बोलें या लिखें!');
    return;
  }

  const previewWrapper = document.getElementById('ai-multilingual-preview-wrapper');
  const previewCards = document.getElementById('ai-preview-cards');
  previewWrapper.style.display = 'block';

  // Determine which demo / category was spoken or provide dynamic fallback
  let parsedName = "हस्तनिर्मित उत्पाद (Handcrafted Product)";
  let translations = {};

  if (inputText.includes("साड़ी") || inputText.includes("सिल्क") || inputText.includes("बनारसी")) {
    translations = CATALOG_DATA[0].translations;
    parsedName = "शाही बनारसी कतान सिल्क साड़ी";
  } else if (inputText.includes("दीया") || inputText.includes("पीतल") || inputText.includes("मोर")) {
    translations = CATALOG_DATA[1].translations;
    parsedName = "मुरादाबादी पीतल मोर दीया";
  } else if (inputText.includes("केसर") || inputText.includes("मसाला")) {
    translations = CATALOG_DATA[2].translations;
    parsedName = "कश्मीरी मोंगरा केसर डिब्बी";
  } else {
    // Dynamic AI translation generation fallback
    translations = {
      ta: { name: `${inputText.substring(0, 30)} (தமிழ்)`, desc: "வாரணாசியில் இருந்து நேரடி உற்பத்தியாளர் தயாரிப்பு. சிறந்த தரம் மற்றும் மொத்த விலை.", badgeClass: "badge-ta" },
      te: { name: `${inputText.substring(0, 30)} (తెలుగు)`, desc: "వారణాసి నుండి ప్రత్యక్ష హోల్‌సేల్ సరఫరా. అత్యున్నత నాణ్యత.", badgeClass: "badge-te" },
      kn: { name: `${inputText.substring(0, 30)} (ಕನ್ನಡ)`, desc: "ವಾರಣಾಸಿಯಿಂದ ನೇರ ಸಗಟು ಪೂರೈಕೆ. ಉತ್ತಮ ಗುಣಮಟ್ಟ.", badgeClass: "badge-kn" },
      ml: { name: `${inputText.substring(0, 30)} (മലയാളം)`, desc: "നിർമ്മാതാവിൽ നിന്ന് നേരിട്ടുള്ള വിതരണം. മികച്ച ഗുണനിലവാരം.", badgeClass: "badge-ml" },
      bn: { name: `${inputText.substring(0, 30)} (বাংলা)`, desc: "সরাসরি প্রস্তুতকারকের থেকে পাইকারি সরবরাহ। খাঁটি মানের নিশ্চয়তা।", badgeClass: "badge-bn" },
      mr: { name: `${inputText.substring(0, 30)} (मराठी)`, desc: "थेट विणकरांकडून वाजवी घाऊक दरात उपलब्ध.", badgeClass: "badge-mr" },
      gu: { name: `${inputText.substring(0, 30)} (ગુજરાતી)`, desc: "સીધો જથ્થાબંધ માલ. સંપૂર્ણ ગુણવત્તાની ખાતરી.", badgeClass: "badge-gu" },
      en: { name: `${inputText.substring(0, 30)} (English)`, desc: "Direct artisan wholesale supply. Heritage craft with pan-India delivery.", badgeClass: "badge-en" }
    };
  }

  const langList = [
    { code: 'ta', name: 'தமிழ் (Tamil Nadu)', badge: 'badge-ta', voiceLang: 'ta-IN' },
    { code: 'te', name: 'తెలుగు (Andhra/Telangana)', badge: 'badge-te', voiceLang: 'te-IN' },
    { code: 'kn', name: 'ಕನ್ನಡ (Karnataka)', badge: 'badge-kn', voiceLang: 'kn-IN' },
    { code: 'ml', name: 'മലയാളം (Kerala)', badge: 'badge-ml', voiceLang: 'ml-IN' },
    { code: 'bn', name: 'বাংলা (West Bengal)', badge: 'badge-bn', voiceLang: 'bn-IN' },
    { code: 'mr', name: 'मराठी (Maharashtra)', badge: 'badge-mr', voiceLang: 'mr-IN' },
    { code: 'gu', name: 'ગુજરાતી (Gujarat)', badge: 'badge-gu', voiceLang: 'gu-IN' },
    { code: 'en', name: 'English (Pan-India)', badge: 'badge-en', voiceLang: 'en-IN' }
  ];

  previewCards.innerHTML = langList.map(item => {
    const data = translations[item.code] || { name: parsedName, desc: "Direct artisan wholesale listing." };
    return `
      <div class="lang-translation-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="lang-badge ${item.badge}">${item.name}</span>
          <button class="speak-icon-btn" onclick="speakText('${data.name.replace(/'/g, "\\'")}', '${item.voiceLang}')" title="इस भाषा में उच्चारण सुनें">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
        <div class="lang-card-title">${data.name}</div>
        <div class="lang-card-desc">${data.desc}</div>
      </div>
    `;
  }).join('');
}

function publishProductToStore() {
  showToast('बधाई हो! आपका उत्पाद पूरे भारत के 8 राज्यों की भाषाओं में तुरंत प्रकाशित हो गया है।');
  switchView('buyer');
}

// =============================================================================
// 7. Live Bilingual Chat Simulator
// =============================================================================

function handleChatKeyDown(event) {
  if (event.key === 'Enter') {
    sendVendorMessage();
  }
}

function sendVendorMessage() {
  const input = document.getElementById('vendor-chat-input');
  const hindiText = input.value.trim();
  if (!hindiText) return;

  const chatList = document.getElementById('chat-messages-list');

  // Realistic Tamil translation dictionary for common vendor responses
  let tamilTranslation = "வணக்கம்! உங்கள் செய்தி கிடைத்தது, விரைவில் விவரங்களை அனுப்புகிறோம்.";
  if (hindiText.includes("नमस्ते") || hindiText.includes("हेलो")) {
    tamilTranslation = "வணக்கம் ஐயா! உங்கள் தேவைக்கு மிக்க நன்றி.";
  } else if (hindiText.includes("रेट") || hindiText.includes("भाव") || hindiText.includes("रुपये") || hindiText.includes("₹")) {
    tamilTranslation = "நாங்கள் சிறந்த மொத்த விலையை வழங்குகிறோம். நேரடி தொழிற்சாலை தள்ளுபடி உண்டு.";
  } else if (hindiText.includes("दिन") || hindiText.includes("डिलीवरी") || hindiText.includes("भेज")) {
    tamilTranslation = "ஆர்டர் உறுதி செய்யப்பட்டதும் 3 நாட்களில் சென்னைக்கு அனுப்பி வைக்கப்படும்.";
  } else if (hindiText.includes("सैंपल") || hindiText.includes("नमूना")) {
    tamilTranslation = "ஆம், நாங்கள் கொரியர் மூலம் மாதிரி புடவைகளை உடனடியாக அனுப்புகிறோம்.";
  } else {
    tamilTranslation = `"${hindiText}" - வாரணாசி விற்பனையாளரிடமிருந்து நேரடியாக மொழிபெயர்க்கப்பட்டது.`;
  }

  // Create vendor message element
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg vendor';
  msgDiv.innerHTML = `
    <div class="msg-bubble">
      <div>"${hindiText}"</div>
      <div class="translation-subtext">
        <span><i class="fa-solid fa-share"></i> <strong>சென்னையில் வாங்குபவர் பார்த்தது:</strong> "${tamilTranslation}"</span>
        <button class="speak-icon-btn" onclick="speakText('${tamilTranslation.replace(/'/g, "\\'")}', 'ta-IN')" title="தமிழ் ஆடியோ">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
    </div>
    <span class="msg-timestamp">Just now • स्वतः तमिल में भेजा गया</span>
  `;

  chatList.appendChild(msgDiv);
  input.value = '';
  chatList.scrollTop = chatList.scrollHeight;

  // Automated smart simulated reply from Buyer in Chennai after 2.5 seconds
  setTimeout(() => {
    simulateBuyerReply();
  }, 2500);
}

function simulateBuyerReply() {
  const chatList = document.getElementById('chat-messages-list');
  const buyerReplies = [
    {
      tamil: "சரி ஐயா, எனக்கு 30 புடவைகள் பிங்க் மற்றும் சிவப்பு நிறத்தில் வேண்டும். GST இன்வாய்ஸ் தருவீர்களா?",
      hindi: "ठीक है सर, मुझे 30 साड़ियाँ गुलाबी और लाल रंग में चाहिए। क्या आप GST इनवॉइस देंगे?"
    },
    {
      tamil: "மிக்க நன்றி! நீங்கள் தயாரிப்பு மாதிரிகளை (Samples) இன்று அனுப்ப முடியுமா?",
      hindi: "बहुत धन्यवाद! क्या आप प्रोडक्ट के सैंपल आज कूरियर कर सकते हैं?"
    },
    {
      tamil: "சிறந்த விலை! நாங்கள் தொடர்ந்து மாதந்தோறும் 100 துண்டுகள் ஆர்டர் செய்வோம்.",
      hindi: "बहुत अच्छा रेट! हम हर महीने लगातार 100 पीस का आर्डर करेंगे।"
    }
  ];

  const randomReply = buyerReplies[Math.floor(Math.random() * buyerReplies.length)];

  const replyDiv = document.createElement('div');
  replyDiv.className = 'chat-msg buyer';
  replyDiv.innerHTML = `
    <div class="msg-bubble">
      <div style="font-weight: 600; font-size:0.95rem;">"${randomReply.tamil}"</div>
      <div class="translation-subtext">
        <span><i class="fa-solid fa-language"></i> <strong>हिन्दी अनुवाद:</strong> "${randomReply.hindi}"</span>
        <button class="speak-icon-btn" onclick="speakText('${randomReply.hindi.replace(/'/g, "\\'")}', 'hi-IN')" title="हिन्दी में सुनें">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
    </div>
    <span class="msg-timestamp">Just now • मूल: தமிழ்</span>
  `;

  chatList.appendChild(replyDiv);
  chatList.scrollTop = chatList.scrollHeight;
  showToast('मुरुगन एस. (चेन्नई) से नया तमिल संदेश आया (हिन्दी में अनूदित)!');
}

// =============================================================================
// 8. Text-to-Speech Engine (Web Speech Synthesis)
// =============================================================================

function speakText(text, langCode = 'hi-IN') {
  if (!('speechSynthesis' in window)) {
    showToast('इस ब्राउज़र में स्पीच सिंथेसाइज़र समर्थित नहीं है।');
    return;
  }

  window.speechSynthesis.cancel(); // Stop any ongoing speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode;
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  // Attempt to select an Indian regional voice if available
  const voices = window.speechSynthesis.getVoices();
  const regionalVoice = voices.find(v => v.lang === langCode || v.lang.startsWith(langCode.substring(0, 2)));
  if (regionalVoice) {
    utterance.voice = regionalVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// =============================================================================
// 9. Speech-to-Speech Playground Logic
// =============================================================================

function runPlaygroundTranslation() {
  const hindiText = document.getElementById('playground-hindi-text').value;
  const targetLang = document.getElementById('playground-target-lang').value;
  const outputElem = document.getElementById('playground-translated-output');
  const btnPlayTarget = document.getElementById('lbl-play-target-btn');

  const translations = {
    ta: "வணக்கம் ஐயா! எங்களிடம் தூய கட்டான் பட்டு மற்றும் பனாரசி புடவைகள் மொத்த விலையில் கிடைக்கின்றன. நீங்கள் குறைந்தபட்சம் 10 புடவைகளை மாதிரியாக ஆர்டர் செய்யலாம்.",
    te: "నమస్కారం సార్! మా వద్ద స్వచ్ఛమైన కటాన్ సిల్క్ మరియు బనారసి చీరలు హోల్‌సేల్ ధరకు అందుబాటులో ఉన్నాయి. మీరు కనీసం 10 చీరలను నమూనాగా ఆర్డర్ చేయవచ్చు.",
    kn: "ನಮಸ್ಕಾರ ಸರ್! ನಮ್ಮಲ್ಲಿ ಶುದ್ಧ ಕಟಾನ್ ರೇಷ್ಮೆ ಮತ್ತು ಬನಾರಸಿ ಸೀರೆಗಳು ಸಗಟು ದರದಲ್ಲಿ ಲಭ್ಯವಿವೆ. ನೀವು ಕನಿಷ್ಠ 10 ಸೀರೆಗಳನ್ನು ಮಾದರಿಯಾಗಿ ತರಿಸಿಕೊಳ್ಳಬಹುದು.",
    ml: "നമസ്കാരം സാർ! ഞങ്ങളുടെ അടുത്ത് ശുദ്ധമായ കട്ടാൻ സിൽക്കും ബനാറസി സാരികളും മൊത്തവിലയിൽ ലഭ്യമാണ്. നിങ്ങൾക്ക് കുറഞ്ഞത് 10 സാരികൾ സാമ്പിളായി ഓർഡർ ചെയ്യാം.",
    bn: "নমস্কার স্যার! আমাদের কাছে খাঁটি কাতান সিল্ক ও বেনারসী শাড়ি পাইকারি মূল্যে উপলব্ধ। আপনি ন্যূনতম ১০টি শাড়ি স্যাম্পল হিসেবে অর্ডার করতে পারেন।",
    mr: "नमस्ते सर! आमच्याकडे शुद्ध कतान सिल्क आणि बनारसी साड्या थेट घाऊक दरात उपलब्ध आहेत. आपण किमान १० साड्यांचा सॅम्पल मागवू शकता.",
    gu: "નમસ્તે સાહેબ! અમારી પાસે શુદ્ધ કતાન સિલ્ક અને બનારસી સાડીઓ હોલસેલ ભાવે ઉપલબ્ધ છે. તમે ઓછામાં ઓછી ૧૦ સાડીઓ સેમ્પલ તરીકે મંગાવી શકો છો.",
    en: "Namaste Sir! We have pure Katan silk and authentic Banarasi sarees available at direct weaver wholesale prices. You can request a sample order of minimum 10 pieces."
  };

  const translatedText = translations[targetLang] || translations.ta;
  outputElem.textContent = `"${translatedText}"`;
  btnPlayTarget.textContent = `${getLanguageName(targetLang)} ஆடியோ கேளுங்கள் (Listen)`;
}

function playPlaygroundSpeech(which) {
  if (which === 'hi') {
    const text = document.getElementById('playground-hindi-text').value;
    speakText(text, 'hi-IN');
  } else {
    const targetLang = document.getElementById('playground-target-lang').value;
    const text = document.getElementById('playground-translated-output').textContent.replace(/"/g, '');
    const voiceLangMap = {
      ta: 'ta-IN', te: 'te-IN', kn: 'kn-IN', ml: 'ml-IN', bn: 'bn-IN', mr: 'mr-IN', gu: 'gu-IN', en: 'en-IN'
    };
    speakText(text, voiceLangMap[targetLang] || 'en-IN');
  }
}

// =============================================================================
// 10. Modals & Toast Utility
// =============================================================================

function openSampleModal(productId) {
  const prod = CATALOG_DATA.find(p => p.id === productId) || CATALOG_DATA[0];
  const langData = prod.translations[currentLanguage] || prod.translations.en;
  
  document.getElementById('modal-product-name').value = `${langData.name} (MOQ: ${prod.moq} pcs)`;
  document.getElementById('sample-modal').classList.add('active');
}

function openBulkInquiryModal() {
  const destState = document.getElementById('buyer-dest-state').selectedOptions[0].text;
  const msg = encodeURIComponent(`Namaste Shree Rameshwar ji, I am a retailer from ${destState}. I want to place a wholesale order for Banarasi sarees and brass handicrafts with IGST invoice.`);
  window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${msg}`, '_blank');
}

function openShareModal() {
  document.getElementById('share-modal').classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function submitSampleRequest() {
  const prod = document.getElementById('modal-product-name').value;
  const addr = document.getElementById('modal-delivery-addr').value;
  const phone = document.getElementById('modal-phone').value;

  if (!addr || !phone) {
    alert('Please enter delivery address and phone number.');
    return;
  }

  closeModal('sample-modal');
  showToast('✓ சாம்பிள் கோரிக்கை சமர்ப்பிக்கப்பட்டது! (Sample Request Sent to Varanasi)');
  
  // Switch to vendor view to see the order immediately appear in interstate orders
  setTimeout(() => {
    switchView('vendor');
    addNewInterstateOrder(prod, addr);
  }, 1000);
}

function addNewInterstateOrder(productName, address) {
  const tableBody = document.getElementById('orders-table-body');
  if (!tableBody) return;

  const newRow = document.createElement('tr');
  newRow.style.background = '#ecfdf5';
  newRow.innerHTML = `
    <td><strong>#ORD-NEW-7712</strong></td>
    <td>
      <div><strong>புதிய வாங்குபவர் (New Buyer)</strong></div>
      <span class="state-badge">📍 ${address.substring(0, 24)}</span>
    </td>
    <td>${productName.substring(0, 30)}</td>
    <td>10 पीस (Sample)</td>
    <td>₹18,500 <small style="color:var(--text-muted);">(5% IGST)</small></td>
    <td><i class="fa-solid fa-truck"></i> दिल्लीवरी सर्फेस (Delhivery)</td>
    <td><span class="status-pill status-processing"><i class="fa-solid fa-clock"></i> नया आर्डर प्राप्त</span></td>
  `;

  tableBody.insertBefore(newRow, tableBody.firstChild);
}

function copyShareLink() {
  const input = document.getElementById('share-link-input');
  input.select();
  navigator.clipboard.writeText(input.value).then(() => {
    showToast('स्टोर लिंक कॉपी हो गया! WhatsApp पर शेयर करें।');
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-bell" style="color:#fb923c;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderBuyerCatalog();
  calculateInterstateShipping();
  initSpeechRecognition();
  runPlaygroundTranslation();
});
