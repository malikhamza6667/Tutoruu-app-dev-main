import React, { useState } from "react";
import { AsyncStorage, View,Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

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

            <View className='my-2 self-center items-center'>

                <Button
                    onPress={() => {
                        AsyncStorage.setItem("Language","ar").then(()=>{
                            reloadAsync()
                        })
                     }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='default'
                    text='Login'
                    width={wp('80%')}
                    height={hp('5%')}
                    testID='login-button'
                />
                <Text>{i18n.t('Sign Up')}</Text>               
            </View>

        </View>
    </Auth>

    )
}

export default Login;
