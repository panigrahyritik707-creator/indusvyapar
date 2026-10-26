# 🇮🇳 IndusVyapar (इंडस व्यापार AI)
### *“स्थानीय दुकान, देश भर का व्यापार • Local Shop, Nationwide Trade”*

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Languages](https://img.shields.io/badge/Languages-9%20Indian%20Languages-orange.svg)](#supported-languages)
[![Tech Stack](https://img.shields.io/badge/Built%20With-HTML5%20%7C%20CSS3%20%7C%20ES6%2B%20JS-green.svg)](#technology-stack)

---

## 📌 Executive Summary
**IndusVyapar** is a voice-first, multilingual AI commerce platform built specifically to solve a massive real-world economic problem across India:

> **The Problem:** A small shop vendor or artisan in North/Central India (e.g., a weaver in Varanasi, a brass artisan in Moradabad, or a spice dealer in Kashmir) knows only **Hindi**. When they try to expand their business across states to South and East India (Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, Kerala, West Bengal), they face an insurmountable **language and communication barrier**. They cannot negotiate, create multi-language catalogs, or resolve buyer questions in Tamil, Telugu, Kannada, Malayalam, or Bengali.

> **The Solution:** **IndusVyapar** eliminates this barrier entirely. The vendor simply speaks or types in **Hindi**. IndusVyapar’s AI engine automatically translates and presents the product catalog in **8+ Indian regional languages** for interstate buyers. It provides real-time bilingual chat (Hindi ⇄ Tamil/Telugu), interstate freight/IGST estimation, and voice audio pronunciation.

---

## 🚀 Key Highlights & Features

### 1. 🎙️ बोलकर सामान जोड़ें (Voice-First Hindi Product Addition)
- Small shopkeepers rarely want to type long complex descriptions.
- The vendor taps the microphone and speaks naturally in Hindi:
  > *“शाही बनारसी कतान सिल्क साड़ी, शुद्ध सोने की जरी बॉर्डर, थोक भाव ₹1,850, कम से कम 10 पीस का आर्डर।”*
- The AI automatically extracts:
  - **Product Name** (*उत्पाद का नाम*)
  - **Wholesale Price & Retail Tier** (*थोक एवं खुदरा दर*)
  - **Minimum Order Quantity (MOQ)** (*न्यूनतम आर्डर*)
  - **Fabric/Material Purity & Specifications** (*सामग्री एवं विशेषताएँ*)

### 2. 🌐 Instant 8-Language Auto-Cataloging
The Hindi voice description is instantly converted into localized listings across 8 regional languages:
- **தமிழ் (Tamil - Tamil Nadu)**
- **తెలుగు (Telugu - Andhra Pradesh & Telangana)**
- **ಕನ್ನಡ (Kannada - Karnataka)**
- **മലയാളം (Malayalam - Kerala)**
- **বাংলা (Bengali - West Bengal)**
- **मराठी (Marathi - Maharashtra)**
- **ગુજરાતી (Gujarati - Gujarat)**
- **English (Pan-India & Corporate B2B)**

### 3. 💬 लाइव द्विभाषी चैट (Live Bilingual Chat Simulator)
- A retailer in Chennai or Coimbatore asks in **Tamil**:  
  *“வணக்கம் ஐயா, எனக்கு 50 பனாரசி புடவைகள் சென்னைக்கு வேண்டும். மொத்த விலை எவ்வளவு?”*
- The Hindi vendor instantly sees it in **Hindi**:  
  *“नमस्ते सर, मुझे चेन्नई के लिए 50 बनारसी साड़ियाँ चाहिए। थोक मूल्य कितना होगा? (मूल: தமிழ்)”*
- The vendor replies in **Hindi**:  
  *“नमस्ते मुरुगन जी! 50 साड़ियों पर आपको ₹1,650 का थोक रेट मिलेगा। डिलीवरी 3 दिन में हो जाएगी।”*
- The buyer receives it instantly in fluent **Tamil**, with built-in voice audio playback.

### 4. 🚚 अंतर्राज्यीय लॉजिस्टिक्स और ई-वे बिल कैलकुलेटर (Interstate Freight & Tax)
- Real-time transit days and freight estimates from Varanasi hub to major southern & eastern commercial centers (Chennai, Bengaluru, Hyderabad, Kochi, Kolkata).
- Automatic **Interstate IGST (5% / 12%)** input tax credit breakdown for B2B billing.
- Direct **Delhivery / BlueDart / Gati** tracking statuses.

### 5. 🔊 Real-Time Speech-to-Speech Playground
- An interactive audio laboratory demonstrating Web Speech Synthesis across Indian language locales (`hi-IN`, `ta-IN`, `te-IN`, `kn-IN`, `bn-IN`, etc.).

---

## 👥 Target Users & Impact

| User Persona | Location | Primary Need | How IndusVyapar Solves It |
| :--- | :--- | :--- | :--- |
| **Small Shop Artisan / Weaver** | Varanasi, Moradabad, Kashmir, Jaipur | Knows only Hindi; wants direct B2B wholesale orders without middlemen | Speaks in Hindi; platform handles translation, cataloging, and interstate buyer chats |
| **Regional Retailer / Boutique** | Chennai, Bengaluru, Hyderabad, Kolkata | Wants authentic handloom & handicrafts directly from the maker at factory price | Browses catalog, chats, and places sample orders in their native language (Tamil, Kannada, etc.) |

---

## 🛠️ Technology Stack

- **Frontend Core:** Semantic HTML5, Vanilla CSS3 (Custom design tokens, glassmorphism, responsive grid, micro-animations).
- **Application Logic:** Modular ES6+ JavaScript.
- **Speech & Audio Engine:** 
  - Web Speech API (`SpeechRecognition` in `hi-IN` with quick-simulation fallbacks)
  - Web Speech Synthesis (`SpeechSynthesisUtterance` for regional voice accents)
- **Logistics & Tax Engine:** Interstate IGST & transit calculation engine.
- **Assets:** High-resolution product and artisan photography.

---

## 📂 Project Structure

```text
indus/
├── index.html              # Main single-page application (Dual Perspective Switcher)
├── style.css               # Complete Bharat Saffron & Slate design system
├── app.js                  # 9-language catalog, speech synthesis, bilingual chat
├── assets/
│   ├── vendor_hero.jpg     # Authentic Indian artisan in Varanasi shop
│   ├── banarasi_saree.jpg  # Pure Katan Banarasi Silk Saree
│   ├── brass_diya.jpg      # Handcrafted Moradabad Brass Peacock Diya
│   └── kashmiri_spices.jpg # Royal Kashmiri Mongra Saffron & Gourmet Spice Box
└── README.md               # Project documentation and architecture guide
```

---

## ⚡ Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/panigrahyritik707-creator/indusvyapar.git
   cd indusvyapar
   ```

2. **Run the App:**
   - No build tools or Node.js dependencies are required!
   - Simply double-click `index.html` or open it with any web browser.

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
