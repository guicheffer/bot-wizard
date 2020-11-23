export type DefaultTranslationsType = {
  [key: string]: string;
}

export default {
  BOT_NAME: 'you\'re changing configuration for ',
  BOT_NAME_SUFFIX: '\'s bot 🧙🏼‍♂️',
  BOT_DOMAIN: 'it\'s currently under the following domain: ',
  BOT_EXPLANATION: 'Please select the sentences you would like your bot to automatically understand when users are chatting with us before one of (y)our agents directly talks to the user.',
  MAX_PLACEHOLDER: 'Loading...',
  ALL_COPY: 'Select all',
  CLEAR_COPY: 'Clear all',
  NEXT_COPY: 'Next',
  NEXT_ACTION_COPY: '☹️ Can\'t follow up with wizard – stuff is still under construction :(',
} as DefaultTranslationsType;
