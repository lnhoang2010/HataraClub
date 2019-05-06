import I18n from 'react-native-i18n';
import { getLanguages } from 'react-native-i18n';

import en from './locales/en';
import ja from './locales/ja';
import vi from './locales/vi';

I18n.fallbacks = true;
// I18n.locale = 'vi';

I18n.translations = {
    ja,
    en,
    vi,
};

getLanguages().then(languages => {
  console.log("languages : " + languages);
});

export default I18n;