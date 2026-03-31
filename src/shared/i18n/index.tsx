import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import enHero from "./locales/en/hero.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      hero: enHero,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
