
/// <reference types="nativewind/types"/>
import React, { useCallback } from 'react';
import LanguageContext from './src/languages/languageContext';
import StudentStackMain from './src/navigation/StudentMainStack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import MainStack from './src/navigation/AppStackStudent';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import TutorAppStack from './src/navigation/TutorAppStack';
const App: React.FC = () => {

  return (
    <NavigationContainer>
      {/* <StudentStackMain /> */}
      <TutorAppStack/>
    </NavigationContainer>
  );
}


SplashScreen.preventAutoHideAsync();
const defaultLanguage = 'en';
const MyApp = () => {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView} >

      <LanguageContext.Provider value={{ language: defaultLanguage }}>
        <App />
      </LanguageContext.Provider>
    </View>
  );
};
export default MyApp;
