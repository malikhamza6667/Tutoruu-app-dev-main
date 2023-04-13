import React, { useState } from "react";
import { View,Text, I18nManager } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n from "../../../localization/LocalizedStrings/LocalizedStrings";
import {reloadAsync} from 'expo-updates'
const Login = () => {
    const [email, setEmail] = useState('')
    return (
    <Auth

        title={i18n.t('Welcome Back')}
        subTitle={i18n.translate("Don't Have Account ?")}
        pressableSubtitleText={i18n.t('Sign Up')}
        onPressSubtitle={() => { alert('Pressed') }}
        footerTitle={'Reset-Password'}
        onPressfooterTitle={() => { alert('Pressed') }}
    >
        <View className='py-3 justify-center items-center'>

            <Input
                size='large'
                value={email}
                onChangeText={(text) => { setEmail(text) }}
                title='Email'
                placeholder='Doe'
                height={hp('5%')}
                testID='email-input'
            />
            <Input
                size='large'
                value={email}
                onChangeText={(text) => { setEmail(text) }}
                title='Password'
                placeholder='Doe'
                height={hp('5%')}
                testID='password-input'
            />

            <View className='my-2 mx-3 self-center items-center'>

                <Button
                    onPress={() => {
                        AsyncStorage.setItem("Language","en").then(()=>{
                            i18n.locale='en'
                            I18nManager.forceRTL(false)
                            reloadAsync()
                        })
                     }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='full'
                    text='Login'
                    
                    height={hp('5%')}
                    testID='login-button'
                />
                             
            </View>

        </View>
    </Auth>

    )
}

export default Login;
