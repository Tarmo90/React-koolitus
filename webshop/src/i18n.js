import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "maintain-categories": "Maintain categories",
        "maintain-shops": "Maintain categories",
        "add-product": "Maintain categories",
        "maintain-products": "Maintain categories",
        "maintain-pictures": "Maintain pictures",
        "shops": "Our shops",
        "contact": "Contact with us",
        "cart": "To cart",
        "login": "Login",
        "signup": "Sign up"
    }
},
ee: {
    translation: {
        "maintain-categories": "Halda kategooriaid",
        "maintain-shops": "Halda poode",
        "add-product": "Lisa toode",
        "maintain-products": "Halda tooteid",
        "maintain-pictures": "Halda pilte",
        "shops": "Meie poed",
        "contact": "Kontakteeru meiega",
        "cart": "Ostukorvi",
        "login": "Login",
        "signup": "Loo konto"
    }
},
fi: {
    translation: {
        "maintain-categories": "Hallitse kategorioita",
        "maintain-shops": "Hallitse kauppoja",
        "add-product": "Lisää tuote",
        "maintain-products": "Hallitse tuotteita",
        "maintain-pictures": "Hallitse kuvia",
        "shops": "Kauppamme",
        "contact": "Ota yhteyttä meihin",
        "cart": "Ostoskori",
        "login": "Kirjaudu sisään",
        "signup": "Rekisteröidy"
    }
},
lv: {
    translation: {
        "maintain-categories": "Pārvaldīt kategorijas",
        "maintain-shops": "Pārvaldīt veikalus",
        "add-product": "Pievienot produktu",
        "maintain-products": "Pārvaldīt produktus",
        "maintain-pictures": "Pārvaldīt attēlus",
        "shops": "Mūsu veikali",
        "contact": "Sazinies ar mums",
        "cart": "Iepirkumu grozs",
        "login": "Pieteikties",
        "signup": "Izveidot kontu"
    }
}

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ee', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;

// teha nii, et kui pannakse midagi muud localStorage kui meie keeled
// nt "klingon", siis võtab ikka default keele ja asendab selle
// klingoni localStorage-s ära