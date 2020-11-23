import { Env } from './configs';

export type DefaultApiUrlsType = {
  [key in string | Env]: any | Env | string | DefaultApiUrlsType;
}

const DEFAULT_API_PATH = '/intents.json';

export default {
  proxyApi: {
    development: `http://localhost:3000${DEFAULT_API_PATH}`,
    production: `http://bot-wizard.guicheffer.me${DEFAULT_API_PATH}`,
  }
} as DefaultApiUrlsType;
