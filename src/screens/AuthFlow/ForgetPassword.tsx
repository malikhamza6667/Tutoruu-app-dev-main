import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'

import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import RouteNames from '../RouteNames'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AuthHeader from '../../components/AuthHeader'
interface Props {
    navigation: any
}

const ForgetPassword: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
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
            <View className='flex-1 justify-between '
            >
                <SafeAreaView />

                <AuthHeader />
                <View style={{ height: hp('80%'),}} className='justify-center pb-16'>
                    <View className='self-center justify-center m-5 items-center'>

                        <Text
                            style={{ fontFamily: 'PoppinsSemiBold' }}
                            className='text-white text-xl text-center self-center'>
                            {Strings.ST74}
                        </Text>
                        <Text
                            style={{ fontFamily: 'PoppinsRegular' }}
                            className='text-white text-sm text-center px-4 py-2 self-center'>
                            {Strings.ST75}
                        </Text>
                    </View>
                    <View className='bg-white mx-4 p-5 items-center justify-center rounded-[20px]'>
                        <View>
                            <Input
                                value={email}
                                title='Email'
                                placeholder='Enter Your Email'
                                onChangeText={(text) => { setEmail(text) }}
                            />

                        </View>

                        <Button
                            height={hp('5%')}
                            width={wp('85%')}
                            image='arrowright'
                            color={Colors.orange}
                            title='Send Password Reset Link'
                            onPress={() => { navigation.navigate(RouteNames.UpdatePassword) }}
                        />


                    </View>

                </View>

            </View>
        </SafeAreaView>

    )
}
export default ForgetPassword;