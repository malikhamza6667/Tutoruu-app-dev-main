/// <reference types="nativewind/types"/>
import React, { useCallback, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, AsyncStorage, I18nManager, SafeAreaView, Alert } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import Colors from './assets/Colors';

import { Button as Buttonnn } from '@rneui/base';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import TutorCard from './src/components/TutorCard/TutorCard';
import { Card } from './src/layouts/Card/Card';
import { TutorSubjects, user } from './src/screens/DummyData';
import HorizontalList from './src/layouts/HorizontalList/HorizontalList';
import SessionCard from './src/components/SessionCard/SessionCard';
import Auth from './src/layouts/Auth/Auth';
import Input from './src/components/Input/Input';
import Avatar from './src/components/Avatar/Avatar';
import Post from './src/components/Post/PostCard';
import ChatMessage from './src/components/ChatMessage/ChatMessage';
import ChatPreview from './src/components/ChatPreview/ChatPreview';
import Review from './src/components/Review/Review';
import Details from './src/layouts/Details/Details';
import Base from './src/layouts/Base/Base';
import SlotsCard from './src/components/SlotsCard/SlotsCard';
import ClassCard from './src/components/ClassCard/ClassCard';
import CourseCard from './src/components/CourseCard/CourseCard';
import { Popup } from './src/components/Popup/Popup';
import { PostPopup } from './src/components/PostPopup/PostPopup';
import { Separator } from './src/components/Separator/Separator';
import Login from './src/screens/Auth/Login/Login';
import Signup from './src/screens/Auth/Signup/Signup';
import ResetPassword from './src/screens/Auth/ResetPassword/ResetPassword';
import CompleteRegistration from './src/screens/Auth/CompleteRegistration/CompleteRegistration';
import UpdatePassword from './src/screens/Auth/UpdatePassword/UpdatePassword';
import MagicLink from './src/screens/Auth/MagicLink/MagicLink';
import About from './src/screens/About/About';
import Feed from './src/screens/Feed/Feed';
import Seacrh from './src/screens/Search/Search';
import Marketplace from './src/screens/Marketplace/Marketplace';
import i18n from './src/localization/LocalizedStrings/LocalizedStrings';
import Search from './src/screens/Search/Search';
import Settings from './src/screens/Settings/Settings';
import Successful from './src/screens/PaymentStatus/Successful/Successful';
import Failed from './src/screens/PaymentStatus/Failed/Failed';
import SupportSubmitted from './src/screens/SupportSubmitted/SupportSubmitted';
import NotificationScreen from './src/screens/Notification/Notification';
import MyPost from './src/components/MyPost/MyPost';
import BAP from './src/screens/BAP/BAP';
import Switch from './src/components/Switch/Switch';
import Tag from './src/components/Tag/Tag';
import { Notification } from './src/components/Notification/Notification';
import ActionLink from './src/components/ActionLink/ActionLink';
import Button from './src/components/Button/Button';
import Section from './src/layouts/Section/Section';
import ApplicationQuestionnare from './src/screens/ApplicationQuestionnaire/ApplicationQuestionnaire';
import Chats from './src/screens/Chats/Chats';
import Chat from './src/screens/Chat/Chat';

SplashScreen.preventAutoHideAsync();
const defaultLanguage = 'en';


interface Item {
  id: number;
  name: string;
}

const data: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];


const MyApp = () => {
  const [enableButton, setEnableButton] = useState(true)
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const handleSwitchToggle = (isOpen: boolean) => {
    setIsSwitchOn(isOpen);
  };
  const [email, setEmail] = useState('')
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [islike, setisLiked] = useState(false)
  const [isDislike, setisDisLiked] = useState(false)
  const [isSaved, setisSaved] = useState(false)
  const [commented, setIsCommented] = useState(false)
  const handleCloseModal = () => {
    const opened = false;
  };
  const selectedLanguage = async (lan: string) => {
    i18n.locale = lan
    if (i18n.locale === 'ar') {
      I18nManager.forceRTL(false)
      await SplashScreen.hideAsync();
    }
    else {
      I18nManager.forceRTL(false)
      await SplashScreen.hideAsync();
    }
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      // AsyncStorage.getItem("Language").then((val) => {
      //   console.log("value" + val)
      //   if (val == "en") {

      //     selectedLanguage('ar')
      //   }
      //   else {
      //     selectedLanguage('en')
      //   }
      // })

    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  const query = "status=success&amount=10.99&currency=USD"; // Sample query string, you can replace it with your own

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      onLayout={onLayoutRootView}
    >
      {/* <ApplicationQuestionnare

/> */}

      {/* <Chats/> */}
      {/* <Chat /> */}
      {/* <About/> */}
      {/* <BAP/> */}
      {/* <Settings/> */}
      {/* <Feed/> */}
      {/* <Notification text='helo' is_read={true} link='' onClick={() => { }} image='https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph' /> */}
      {/* <Text>hello</Text> */}
<Switch opened={true}/>

    </SafeAreaView>

  )
};
export default MyApp;
