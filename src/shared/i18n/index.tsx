import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import enHero from "./locales/en/hero.json";
import enCapabilities from "./locales/en/capabilities.json";
import enReadyToProtect from "./locales/en/readyToProtect.json";
// import enSignIn from "./locales/en/signIn.json";
// import enRegister from "./locales/en/register.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      hero: enHero,
      capabilities: enCapabilities,
      readyToProtect: enReadyToProtect,
      //   signIn: enSignIn,
      //   register: enRegister,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
