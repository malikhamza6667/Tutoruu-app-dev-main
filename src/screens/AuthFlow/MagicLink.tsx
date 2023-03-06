import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'
import { Fontisto, FontAwesome } from '@expo/vector-icons';
import RouteNames from '../RouteNames'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AuthHeader from '../../components/AuthHeader'

interface Props {
    navigation: any
}

const MagicLink: React.FC<Props> = ({ navigation }) => {

    const contextState = useContext(LanguageContext);

    let Strings: any = {}
    if (contextState != null) {

        const language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
        else if (language === 'es') {
            Strings = Languages[1].texts
        }
        else {
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (

        <SafeAreaView
            className='flex-1 justify-center'
            style={{ backgroundColor: Colors.orange }}
        >
            <StatusBar style='light' />
            <View

                className='flex-1 justify-evenly'>

                <AuthHeader />
                <View style={{ height: hp('90%') }} className='justify-center pb-16'>
                    <View className='justify-center items-center'>

                        <Fontisto name="email" size={60} color="white" />
                    </View>
                    <View className='self-center justify-center m-5 items-center'>

                        <Text
                            style={{ fontFamily: 'PoppinsBold' }}
                            className='text-white text-xl text-center  self-center'>
                            {Strings.ST78}!
                        </Text>
                        <Text
                            style={{ fontFamily: 'PoppinsRegular' }}
                            className='text-white px-3 text-sm text-center  self-center'>
                            {Strings.ST79}
                        </Text>
                    </View>


                </View>

            </View>

        </SafeAreaView>
    )
}
export default MagicLink;