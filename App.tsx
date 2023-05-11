/// <reference types="nativewind/types"/>
import React, { useCallback, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, I18nManager, SafeAreaView, Alert } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from './assets/Colors';
import Login from './src/screens/Auth/Login/Login';
// import i18n from './src/localization/LocalizedStrings/LocalizedStrings';
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
import PaymentStatus from './src/screens/PaymentStatus/PaymentStatus';
import AuthenticationStack from './src/navigations/AuthenticationFlow/AuthenticationStack';
import TestingScreen from './src/screens/TestingScreen/TestingScreen';
import { Provider } from 'react-redux';
import store, { RootState } from './src/Services/Redux/store/Store';
import { useDispatch } from 'react-redux';
import { getAuthToken, getUserName, getUserType } from './src/Services/Redux/features/userSlice/UserSlice';
import { useSelector } from 'react-redux';


SplashScreen.preventAutoHideAsync();

const MyApp = () => {
  const dispatch=useDispatch()
 
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

const getUserDetails=async()=>{
  // These values are set at Login screen  
const name= await AsyncStorage.getItem('userName')
const isTutor= await AsyncStorage.getItem('UserIsTutor')
const authToken= await AsyncStorage.getItem('userToken')

dispatch(getUserName(name))
dispatch(getUserType(isTutor))
dispatch(getAuthToken(authToken))
setTimeout(async() => {
  
  await SplashScreen.hideAsync()
}, 1500);
}
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      getUserDetails()
      // await SplashScreen.hideAsync();
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
{/* <TestingScreen/> */}


 </NavigationContainer>
 


   
    </SafeAreaView>


  );
};

const App=()=>{
  return(
    <Provider store={store}>
<MyApp/>
    </Provider>
  )
}

export default App;



// {/* <Class/> */}
// {/* <ApplicationStatus/> */}
// {/* <StartApplication/> */}
// {/* <TutorAccepted/> */}
// <NavigationContainer>
// <StudentStackMain />
// {/* <AuthStack/> */}

// {/* <TutorStack/> */}
// </NavigationContainer>
// {/* <NavigationContainer>
// <MainAppRoutes/>

//    </NavigationContainer> */}