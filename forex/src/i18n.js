import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  "en": {
    "translation": {
      "features": "Features",
      "pricing": "Pricing",
      "sign_in": "Sign in",
      "register": "Register",
      "logout": "Logout",
      "action": "Action",
      "another": "Another",
      "contactUs": "Contact us",
      "language": "Language",
      "english": "English",
      "estonia": "Estonia",
      "courses": "Courses",
      "strategies": "Strategies",
      "chart": "Chart",
      "news": "News",
      "test": "Test"
    }
  },
  "ee": {
    "translation": {
      "features": "Funktsioonid",
      "pricing": "Hind",
      "sign_in": "Logi sisse",
      "register": "Registreeru",
      "logout": "Logi välja",
      "action": "Tegevus",
      "another": "Teine",
      "contactUs": "Võta meiega ühendust",
      "language": "Keel",
      "english": "Inglise",
      "estonia": "Eesti",
      "courses": "Kursused",
      "strategies": "Strateegiad",
      "chart": "Graafika",
      "news": "Uudised",
      "test": "Testid"
      
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ee',  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;