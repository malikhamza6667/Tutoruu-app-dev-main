/// <reference types="nativewind/types"/>
import React, { useCallback, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, AsyncStorage, I18nManager } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Button from './src/components/Button/Button';
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
    //     <View style={{ flex: 1, justifyContent:'center'}} onLayout={onLayoutRootView} >

    //  {/* <Post text='Hello world This Is New Post' user={{ name: 'John Doe',
    //  image: 'https://i.pravatar.cc/300', username: '@john johndoe',
    //   bio: 'Hello world This Is New Post', is_tutor: true }} 
    //   date='2020-01-01' comments_count={3} likes_count={3}
    //    dislikes_count={3} is_liked={islike} is_disliked={isDislike} is_saved={isSaved} 
    //    on_dislike_Pressed={()=>{setisDisLiked(!isDislike)}}
    //    on_like_Pressed={()=>{setisLiked(!islike)}}
    //    onSaved={()=>{setisSaved(!isSaved)}}
    // is_anonymous={false} tags={['tag1', 'Note']} 
    // attachement='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg'
    //  /> */}

    //     {/* <View className='p-3'>

    //       <Avatar
    //       showCap
    //       size='small'
    //       image={"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"}
    //       />
    //     </View>
    //     <View className='p-3'>
    //       <Avatar
    //       showCap
    //       size='medium'
    //       image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLOPnljLnmpKl2N8pnDHZvxmF06ndBeGXQhZawvYMdjajyMu-gZx6ukTiYpPOBtgCEqI&usqp=CAU"}
    //       />
    //       </View>

    //       <View className='p-3'>
    //       <Avatar
    //       showCap
    //       size='large'
    //       image={"https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"}
    //       />
    //       </View> */}
    //       {/* <Auth
    //       title='Sign Up For Tutoruu'
    //       subTitle='Already have Account ?'
    //       pressableSubtitleText='Login'
    //       onPressSubtitle={()=>{alert('Pressed')}}
    //        footerTitle='Reset-Password'
    //        onPressfooterTitle={()=>{alert('Pressed')}}
    //       >
    //         <View className='py-3 justify-center items-center'>

    // <Input
    // size='large'
    // value={email}
    // onChangeText={(text)=>{setEmail(text)}}
    // title='Password'
    // placeholder='Doe'
    // />

    // <View className='my-2 self-center items-center'>

    // <Button
    // onPress={()=>{alert('Pressed')}}
    // icon={'AntDesign arrowright 24 white'}
    // shape='default'
    // text='Create Account'
    // width={wp('80%')}
    // height={hp('5%')}
    // />
    // </View>

    //         </View>
    //       </Auth> */}

    // {/* <View className='my-3 p-2'>
    //  <SessionCard 
    //         class_name='Math' with='John Doe' created_date='2020-01-01' time='12:00 P.M' day='Monday' is_accepted={false} 
    //          is_completed={false} payment_fulfilled={false} payment_amount={"200"} location='123 Main St' />   

    // </View> */}
    // <TutorCard
    //  classes={TutorSubjects}
    //  user={user}
    //  num_sessions={4}
    //  rating={2}
    //  onPress={()=>{alert('Pressed')}}
    //  rate={'270 EGP'}
    //  text={'PhD student in the Industrial & Systems Engineering Department…'}
    //  />

    //     </View>
    //     <View style={{ flex: 1, justifyContent: 'center' }} onLayout={onLayoutRootView}>
    //       {/* <ChatMessage 
    // text='Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world  '
    //  date='2020-01-01'
    //  sender_image='https://i.pravatar.cc/300'
    //  mine={true} /> */}


    //       {/* <Review text='Explains very well and helped me a lot' 
    // author_name='John Doe'
    //  author_image='https://i.pravatar.cc/300'
    //   class_name='Calculas 1' date='01/01/2023' rating={5} /> */}
    //       {/* <Text>hello</Text> */}
    //       {/* <Input
    //         size='Xlarge'
    //         value={email}
    //         onChangeText={(text) => { setEmail(text) }}
    //         // title='Password'
    //         placeholder='Doe'
    //         height={'70%'}

    //       /> */}
    //       {/* <TouchableOpacity>
    //         <Text>create post</Text>
    //       </TouchableOpacity> */}
    //       {/* <PostPopup
    //         opened={true}
    //         post={{ text: 'Hello world', tags: ['tag1', 'tag2'], attachment: 'https://i.pravatar.cc/300' }}
    //         onClose={() => console.log('PostPopup closed')}
    //         onOpen={() => console.log('PostPopup opened')}
    //       /> */}
    //       {/* <Separator type='line' /> */}
    //       {/* <Auth
    //            title='Sign Up For Tutoruu'
    //            subTitle='Already have Account ?'
    //            pressableSubtitleText='Login'
    //            onPressSubtitle={()=>{alert('Pressed')}}
    //             footerTitle='Reset-Password'
    //             onPressfooterTitle={()=>{alert('Pressed')}}
    //            >
    //              <View className='py-3 justify-center items-center'>

    //      <Input
    //      size='large'
    //      value={email}
    //      onChangeText={(text)=>{setEmail(text)}}
    //      title='Password'
    //      placeholder='Doe'
    //      />

    //      <View className='my-2 self-center items-center'>

    //      <Button
    //      onPress={()=>{alert('Pressed')}}
    //      icon={'AntDesign arrowright 24 white'}
    //      shape='default'
    //      text='Create Account'
    //      width={wp('80%')}
    //      height={hp('5%')}
    //      />
    //      </View>

    //              </View>
    //            </Auth> */}

    //       {/* <Signup/> */}
    //       {/* <ResetPassword /> */}
    //       {/* <CompleteRegistration/> */}
    //       {/* <UpdatePassword/> */}
    //       {/* <MagicLink/> */}
    //       {/* <About/> */}
    //       {/* <Feed /> */}
    //       <Seacrh/>
    //       {/* <Marketplace/> */}
    //     </View>

    <View
      style={{
        flex: 1,
        justifyContent: 'center'
      }}
      onLayout={onLayoutRootView}
    >
      {/* <Search /> */}
      {/* <Settings/> */}
       {/* <Successful 
      amount='10' 
      currency='USD' 
      method='Card' 
      />  */}
      {/* <Failed
       amount='20' 
       currency='USD' 
       method='Card' 
      /> */}
      {/* <SupportSubmitted/> */}
      <NotificationScreen/>
    </View>
  );
};
export default MyApp;
