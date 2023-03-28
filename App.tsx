/// <reference types="nativewind/types"/>
import React, { useCallback, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, AsyncStorage, I18nManager, SafeAreaView } from 'react-native';

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
      AsyncStorage.getItem("Language").then((val) => {
        console.log("value" + val)
        if (val == "en") {

          selectedLanguage('ar')
        }
        else {
          selectedLanguage('en')
        }
      })

    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  const query = "status=success&amount=10.99&currency=USD"; // Sample query string, you can replace it with your own

  return (
 <SafeAreaView 
 style={{flex:1 ,justifyContent:'center'}}
 onLayout={onLayoutRootView}
 >
  <Button
  shape='default'
  onPress={()=>{alert('Pressed')}}
  text='Login'
  />
  <View style={{padding: hp('2%')}}>

  </View>

  <Button
   shape='default'
   onPress={()=>{alert('Pressed')}}
   text='Login'
     icon={'AntDesign arrowright 24 white'}
   iconPosition={'right'}
  />
  <View style={{padding: hp('2%')}}>

  </View>

  <Button
   shape='full'
   disabled={true}
   onPress={()=>{alert('Pressed')}}
   text='Login'
  />
  <View style={{padding: hp('2%')}}>

  </View>

  <Button
  
   shape='full'
textColor='black'
backgroundColor='white'
   text='Sign Up With Google'
   onPress={()=>{alert('Pressed')}}
   //icon={'AntDesign arrowright 24 white'}
   //iconPosition={'left'}
   imagePosition={'left'}
   image={'data:image/png;base64,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'}
  />
  </SafeAreaView>
  )
};
export default MyApp;
