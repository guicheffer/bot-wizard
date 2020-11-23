import API_URLS, { DefaultApiUrlsType } from './api-urls';
import TRANSLATIONS, { DefaultTranslationsType } from './translations';

export type Env = 'development' | 'test' | 'production';

interface ConfigsInterface {
  APP: {
    API_URLS: DefaultApiUrlsType;
    TRANSLATIONS?: DefaultTranslationsType;
    DEFAULTS: {
      BOT: {
        domain: string;
        name: string;
      },
    };
  },
  KEYCODES: {
    [key: string]: number;
  },
}

const CONFIGS = {
  APP: {
    API_URLS,
    TRANSLATIONS,
    DEFAULTS: {
      BOT: {
        domain: "https://ultimate.ai",
        name: "Ultimate AI",
      },
    },
  },
} as ConfigsInterface;

export default CONFIGS;
