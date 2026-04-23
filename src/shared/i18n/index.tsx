import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import enHero from "./locales/en/hero.json";
import enCapabilities from "./locales/en/capabilities.json";
import enReadyToProtect from "./locales/en/readyToProtect.json";
import enNotFound from "./locales/en/notFound.json";
import enDashboard from "./locales/en/dashboard.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      hero: enHero,
      capabilities: enCapabilities,
      readyToProtect: enReadyToProtect,
      notFound: enNotFound,
      dashboard: enDashboard,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
