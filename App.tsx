/// <reference types="nativewind/types"/>
import React, { useCallback, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Button from './src/components/Button/Button';
import Colors from './assets/Colors';

import { Button as Buttonnn } from '@rneui/base';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Switch } from './src/components/Switch/Switch';
import { Icon } from './src/components/Icon/Icon';
import { Avatar } from './src/components/Avatar/Avatar';
import { Card } from './src/layouts/Card/Card';

SplashScreen.preventAutoHideAsync();
const defaultLanguage = 'en';
const MyApp = () => {
  const [enableButton, setEnableButton] = useState(true)
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
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'white' }} onLayout={onLayoutRootView} >
      {/* <Text>This is Main App</Text>  */}
      <Card/>
    </View>
  );
};
export default MyApp;
