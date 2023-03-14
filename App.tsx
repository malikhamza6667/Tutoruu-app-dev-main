
/// <reference types="nativewind/types"/>
import React, { useCallback } from 'react';
import LanguageContext from './src/languages/languageContext';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import TutorAppStack from './src/navigation/TutorNavigations/TutorAppStack';
import MainAppRoutes from './src/navigation/AppRoutes/MainNavigationRoutes';
import MainStack from './src/navigation/StudentNavigations/AppStackStudent';
import client from './src/graphql/ApolloClient';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainAppRoutes />
      {/* <TutorAppStack/> */}

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
        <Provider store={store}>
          <ApolloProvider client={client}>


            <App />
          </ApolloProvider>
        </Provider>
      </LanguageContext.Provider>
    </View>
  );
};
export default MyApp;
