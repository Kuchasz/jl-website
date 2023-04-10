import { pl } from './pl';
import { en } from './en';
import { useRouter } from 'next/router';

const languages = {
    pl, en
} as const;

type Languages = keyof typeof languages;

export const translations = (lang: Languages) => languages[lang];

export const useTranslations = () => {
    const { locale } = useRouter();
    return translations(locale as Languages);
}