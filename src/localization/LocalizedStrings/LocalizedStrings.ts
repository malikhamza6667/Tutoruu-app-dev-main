import { I18nManager } from 'react-native';
import { I18n } from 'i18n-js';
import ar from '../Arabic/ar';
import en from '../English/en';

const i18n = new I18n();
i18n.defaultLocale = 'en';
i18n.locale = I18nManager.isRTL ? 'ar' : 'en'; // This line sets the initial locale based on the device's language settings and text direction (RTL/LTR)
i18n.enableFallback = true;
i18n.translations = {
  en,
  ar,
};

export default i18n;









// import { I18n } from "i18n-js";
// import ar from '../Arabic/ar';
// import en from '../English/en';

// const i18n = new I18n();
//  i18n.enableFallback = true
//  i18n.translations={
//     en,
//     ar
//  }
// export default i18n



// import * as Localisation from 'expo-localization';


// import i18n from 'i18n-js';
// import ar from '../Arabic/ar';
// import en from '../English/en';
// import bridge from '../../Services/BaseURL/Baseurl';



// i18n.translations = {
//     en,
//     ar
// }

// //Localisation.locale;

// i18n.fallbacks = true;
// export default i18n;














// // import i18n from 'i18next';
// // import { initReactI18next } from 'react-i18next';
// // import * as Localization from 'expo-localization';
// // import ar from '../Arabic/ar';
// // import en from '../English/en';
// // import I18n from 'i18n-js';

// // i18n.use(initReactI18next).init({
// //   resources: {
// //     en,
// //     ar,
// //   },
// //   lng:Localization.locale.split('-')[0] == 'en'?'en':'ar',
// //   fallbackLng: 'en',
// //   interpolation: {
// //     escapeValue: false,
// //   },
// // });

// // export default i18n;



// // import i18n from 'i18next';
// // import { initReactI18next } from 'react-i18next';
// // import * as Localization from 'expo-localization';
// // import ar from '../Arabic/ar';
// // import en from '../English/en';
// // import I18n from 'i18n-js';
// // import { createIntl, createIntlCache } from 'react-intl';

// // // Import the polyfill
// // import '@formatjs/intl-pluralrules/polyfill';

// // const cache = createIntlCache();

// // const intl = createIntl(
// //   {
// //     locale: Localization.locale.split('-')[0] == 'ar'?'ar':'en',
// //     messages: {
// //       en,
// //       ar,
// //     },
// //   },
// //   cache
// // );

// // i18n
// //   .use(initReactI18next)
// //   .use(intl)
// //   .init({
// //     fallbackLng: 'en',
// //     interpolation: {
// //       escapeValue: false,
// //     },
// //   });

// // export default i18n;