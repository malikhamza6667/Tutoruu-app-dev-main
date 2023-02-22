import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'
import { Fontisto } from '@expo/vector-icons';
import RouteNames from '../RouteNames'


interface Props {
    navigation: any
}

const MagicLink: React.FC<Props> = ({ navigation }) => {
  
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (
  

            <View 
            style={{backgroundColor:Colors.orange}}
            className='flex-1 justify-between'>
                <SafeAreaView/>
                <StatusBar style='light' />
                <View className='self-center '>
                    <Image
                        source={require('../../../assets/authlogo.png')}
                        resizeMode='contain'
                        className='h-40 w-40'
                    />
                </View>
                <View style={{flex:0.6}}>
                    <View className='justify-center items-center'>

                        <Fontisto name="email" size={60} color="white" />
                    </View>
                    <View className='self-center justify-center m-5 items-center'>

                        <Text className='text-white text-2xl text-center font-bold self-center'>
                            {Strings.ST78}!
                        </Text>
                        <Text className='text-white text-sm text-center  self-center'>
                            {Strings.ST79}
                        </Text>
                    </View>


                </View>

            </View>
      
    )
}
export default MagicLink;