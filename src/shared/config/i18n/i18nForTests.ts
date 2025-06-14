import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const enTranslations = require('../../public/locales/en/translation.json');
const ruTranslations = require('../../public/locales/ru/translation.json');

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
    },
    defaultNS: 'translation',
    ns: ['translation'],
  });

export default i18n;
