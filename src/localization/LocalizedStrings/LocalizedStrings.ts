
import * as Localisation from 'expo-localization';


import i18n from 'i18n-js';
import ar from '../Arabic/ar';
import en from '../English/en';



i18n.translations = {
    en,
    ar
}

//Localisation.locale;

i18n.fallbacks = true;
export default i18n;