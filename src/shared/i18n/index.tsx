import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import enDashboard from "./locales/en/dashboard.json";
import enDeIdentify from "./locales/en/deIdentify.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      dashboard: enDashboard,
      deIdentify: enDeIdentify,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
