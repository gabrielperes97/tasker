import i18n from "i18next";
//import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { enUS, ptBR } from "./locales";

const resources = {
    en: {
        translation: enUS
    },
    pt: {
        translation: ptBR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt",
        fallbackLng: 'pt',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;