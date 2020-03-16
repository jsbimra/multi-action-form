import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from "react-i18next";

// import enTranslation  from './locales/en/translation';
// import idTranslation  from './locales/id/translation';
// console.log('i18n resources ', enTranslation, idTranslation);

/* <script id="locizify" 
    projectid="2ca095be-5973-4779-a51d-5d474b908163" 
    debug="false" 
    apikey="43167b40-a70e-4ac3-b921-5921588682f5" 
saveMissing="true" referencelng="en" fallbacklng="en" src="https://unpkg.com/locizify@^2.0.0"></script> */

// the translations
// (tip move them in a JSON file and import them)
// const resources = {
//   en: {
//     translation: enTranslation
//   },
//   id: {
//     translation: idTranslation
//   }
// };

i18n
    // load translation using xhr -> see /public/locales
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // resources,
    fallbackLng: 'en',
    debug: true,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    // backend: {
    //     projectId: '2ca095be-5973-4779-a51d-5d474b908163',
    //     apiKey: '43167b40-a70e-4ac3-b921-5921588682f5',
    //     referenceLng: 'en'
    //   }
  });

  export default i18n;