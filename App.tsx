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
import TutorCard from './src/components/TutorCard/TutorCard';
import { Card } from './src/layouts/Card/Card';
import { TutorSubjects, user } from './src/screens/DummyData';
import HorizontalList from './src/layouts/HorizontalList/HorizontalList';
import SessionCard from './src/components/SessionCard/SessionCard';
import Auth from './src/layouts/Auth/Auth';
import Input from './src/components/Input/Input';
import  Avatar from './src/components/Avatar/Avatar';
import Post from './src/components/Post/PostCard';

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
  const[islike,setisLiked]=useState(false)
  const[isDislike,setisDisLiked]=useState(false)
  const[isSaved,setisSaved]=useState(false)
  const[commented,setIsCommented]=useState(false)
  const handleCloseModal = () => {
    const opened = false;
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent:'center'}} onLayout={onLayoutRootView} >
  
 {/* <Post text='Hello world This Is New Post' user={{ name: 'John Doe',
 image: 'https://i.pravatar.cc/300', username: '@john johndoe',
  bio: 'Hello world This Is New Post', is_tutor: true }} 
  date='2020-01-01' comments_count={3} likes_count={3}
   dislikes_count={3} is_liked={islike} is_disliked={isDislike} is_saved={isSaved} 
   on_dislike_Pressed={()=>{setisDisLiked(!isDislike)}}
   on_like_Pressed={()=>{setisLiked(!islike)}}
   onSaved={()=>{setisSaved(!isSaved)}}
is_anonymous={false} tags={['tag1', 'Note']} 
attachement='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg'
 /> */}
  
    {/* <View className='p-3'>

      <Avatar
      showCap
      size='small'
      image={"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"}
      />
    </View>
    <View className='p-3'>
      <Avatar
      showCap
      size='medium'
      image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLOPnljLnmpKl2N8pnDHZvxmF06ndBeGXQhZawvYMdjajyMu-gZx6ukTiYpPOBtgCEqI&usqp=CAU"}
      />
      </View>

      <View className='p-3'>
      <Avatar
      showCap
      size='large'
      image={"https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"}
      />
      </View> */}
      {/* <Auth
      title='Sign Up For Tutoruu'
      subTitle='Already have Account ?'
      pressableSubtitleText='Login'
      onPressSubtitle={()=>{alert('Pressed')}}
       footerTitle='Reset-Password'
       onPressfooterTitle={()=>{alert('Pressed')}}
      >
        <View className='py-3 justify-center items-center'>

<Input
size='large'
value={email}
onChangeText={(text)=>{setEmail(text)}}
title='Password'
placeholder='Doe'
/>
<Input
size='large'
value={email}
onChangeText={(text)=>{setEmail(text)}}
title='Password'
placeholder='Doe'
/>
<View className='my-2 self-center items-center'>

<Button
onPress={()=>{alert('Pressed')}}
icon={'AntDesign arrowright 24 white'}
shape='default'
text='Create Account'
width={wp('80%')}
height={hp('5%')}
/>
</View>

        </View>
      </Auth> */}
 
{/* <View className='my-3 p-2'>
 <SessionCard 
        class_name='Math' with='John Doe' created_date='2020-01-01' time='12:00 P.M' day='Monday' is_accepted={false} 
         is_completed={false} payment_fulfilled={false} payment_amount={"200"} location='123 Main St' />   

</View> */}
<TutorCard
 classes={TutorSubjects}
 user={user}
 num_sessions={4}
 rating={2}
 onPress={()=>{alert('Pressed')}}
 rate={'270 EGP'}
 text={'PhD student in the Industrial & Systems Engineering Department…'}
 />
 
    </View>
  );
};
export default MyApp;
