import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Indicators: "Indicators",
          About: "About",
          Contact: "Contact",
          "Nepal Health Stats": "Nepal Health Stats",
          "Sign in": "Sign in",
        },
      },
      np: {
        translation: {
          Indicators: "सूचकहरू",
          About: "वेबसाइटको बारेमा",
          Contact: "सम्पर्क",
          "Nepal Health Stats": "नेपाल स्वास्थ्य तथ्याङ्क",
          "Sign in": "साइन इन",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
