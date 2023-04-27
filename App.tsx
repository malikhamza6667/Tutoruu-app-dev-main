/// <reference types="nativewind/types"/>
import React, { useCallback, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, I18nManager, SafeAreaView, Alert } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from './assets/Colors';
import Login from './src/screens/Auth/Login/Login';
import i18n from './src/localization/LocalizedStrings/LocalizedStrings';
import { reloadAsync } from 'expo-updates';
import Class from './src/screens/Class/Class';
import Search from './src/screens/Search/Search';
import ApplicationStatus from './src/screens/ApplicationStatus/ApplicationStatus';
import StartApplication from './src/screens/StartApplication/StartApplication';
import StudentStackMain from './src/navigation/StudentFlow/StudentStack';
import AuthStack from './src/navigation/AuthFLow/AuthStack';
import TutorStack from './src/navigation/TutorFlow/TutorStack';
import TutorAccepted from './src/screens/TutorAccepted/TutorAccepted';

import SessionConfirmation from './src/screens/SessionConfirmation/SessionConfirmation';
import TutorRequested from './src/screens/TutorRequested/TutorRequested';
import ClassSelection from './src/screens/ClassSelection/ClassSelection';
import TimeSelection from './src/screens/TimeSelection/TimeSelection';
import TopicSelection from './src/screens/TopicSelection/TopicSelection';
import Support from './src/screens/Support/Support';
import Chats from './src/screens/Chats/Chats';
import Chat from './src/screens/Chat/Chat';
import TutorDashboard from './src/screens/TutorDashboard/TutorDashboard';
import Sessions from './src/screens/Sessions/Sessions';
import SessionCompleted from './src/screens/SessionCompleted/SessionCompleted';
import SessionRequest from './src/screens/SessionRequest/SessionsRequest';

import tw from 'twrnc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import NavLinkUser from './src/navigations/NavLinkUser/NavLink';
import ApplicationQuestionnare from './src/screens/ApplicationQuestionnaire/ApplicationQuestionnaire';
import TutorApplicationFlow from './src/navigations/TutorApplicationFlow/TutorApplicationFlow';
import UserMainFlow from './src/navigations/UserMainStack/UserMainFlow';
import MainAppRoutes from './src/navigations/AppRoutesMain/AppRoutes';


SplashScreen.preventAutoHideAsync();
const defaultLanguage = 'ar';
   const drawer = createDrawerNavigator()
const DrawerScreen=()=>{
  return(
    
      <drawer.Navigator>
        <drawer.Screen name='Sessions' component={SessionCompleted}/>
      </drawer.Navigator>
   
  )
}

const MyApp = () => {
  const [email, setEmail] = useState('');
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const [isRTL, setIsRTL] = useState(i18n.locale === 'ar' ? true : false);
  const [localeValue, setLocaleValue] = useState(i18n.locale)

  const loadLanguage = useCallback(async () => {

    console.log("Value of I18 isss   " + i18n.locale)
    console.log("Value of I18 locale is   " + localeValue)

    setTimeout(async () => {
      AsyncStorage.getItem('Language').then(async (val) => {
        if (val === 'ar') {
          console.log('Is Already RTL   ', I18nManager.isRTL)
          i18n.locale = 'ar'
          I18nManager.forceRTL(true)
          setLocaleValue('ar')

          console.log("Layout Changed   " + i18n.locale)
          setIsRTL(true)
          await SplashScreen.hideAsync();
        }
        else {
          console.log('Is Already RTL in en   ', I18nManager.isRTL)
          i18n.locale = 'en'
          I18nManager.forceRTL(false)
          setLocaleValue('en')

          setIsRTL(false)
          await SplashScreen.hideAsync();
        }
      })
    }, 1500);

  }, [isRTL]);

  useEffect(() => {
    AsyncStorage.getItem('Language').then((val) => {
      if (val == 'ar') {
        i18n.locale = 'ar'
      }
      else {
        i18n.locale = 'en'
      }
    })
  }, []);

  // useEffect(() => {
  //   if (i18n.locale === 'ar') {
  //     setIsRTL(true);
  //     I18nManager.forceRTL(true);
  //   } else {
  //     setIsRTL(false);
  //     I18nManager.allowRTL(false);

  //   }
  // }, [i18n.locale]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      // loadLanguage();

    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (

    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: Colors.white }}
      onLayout={onLayoutRootView}
    >
      {/* <SessionConfirmation/> */}
      {/* <TutorRequested/> */}
      {/* <Search/> */}
      {/* <ClassSelection /> */}
      {/* <TimeSelection/> */}
      {/* <TopicSelection/> */}
      {/* <Support/> */}
      {/* <Chats/> */}
      {/* <Chat/> */}
      {/* <TutorDashboard/> */}
    {/* <Sessions/> */}
    {/* <SessionCompleted/> */}
   {/* <SessionRequest/> */}
   <NavigationContainer>
<MainAppRoutes/>
{/* <TutorApplicationFlow/> */}
   </NavigationContainer>
 
   
    </SafeAreaView>

  );
};

export default MyApp;



// {/* <Class/> */}
// {/* <ApplicationStatus/> */}
// {/* <StartApplication/> */}
// {/* <TutorAccepted/> */}
// <NavigationContainer>
// <StudentStackMain />
// {/* <AuthStack/> */}

// {/* <TutorStack/> */}
// </NavigationContainer>