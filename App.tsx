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
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }} onLayout={onLayoutRootView} >
 <TutorCard
 classes={TutorSubjects}
 user={user}
 num_sessions={4}
 rating={2}
 onPress={()=>{alert('Pressed')}}
 rate={'270 EGP'}
 text={'PhD student in the Industrial & Systems Engineering Department…'}
 />
<View className='my-3 p-2'>

<HorizontalList
      data={data}
      renderItem={({ item }) => 
      
      <Card>
<Text>{item.name}</Text>
      </Card>
      }
      keyExtractor={(item) => item.id.toString()}

/>
</View>

    </View>
  );
};
export default MyApp;
