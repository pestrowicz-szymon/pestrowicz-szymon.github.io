import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      nav: {
        about: 'O mnie',
        education: 'Edukacja',
        experience: 'Doświadczenie',
        projects: 'Projekty',
      },
      // Dodaj tutaj kolejne sekcje...
    },
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
      },
      // Dodaj tutaj kolejne sekcje...
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Domyślny język
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false, // React sam dba o bezpieczeństwo przed XSS
    },
  });

export default i18n;