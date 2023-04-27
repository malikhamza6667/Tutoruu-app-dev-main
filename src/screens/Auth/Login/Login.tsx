import React, { useState } from "react";
import { View, Text, I18nManager } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n from "../../../localization/LocalizedStrings/LocalizedStrings";
import { reloadAsync } from 'expo-updates'
import tw from 'twrnc';
type Props={
    navigation?:any
}
const Login:React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Auth

            title={i18n.t('Welcome Back')}
            subTitle={i18n.translate("Don't Have Account ?")}
            pressableSubtitleText={i18n.t('Sign Up')}
            onPressSubtitle={() => navigation.navigate('Signup')}
            footerTitle={'Reset-Password'}
            onPressfooterTitle={() => navigation.navigate('ResetPassword')}
        >
            <View style={[tw`py-3 justify-center items-center`]}>
<View >
<View style={[tw`px-2 self-center items-center bg-red-400`]}>
                <Input
                    size='xlarge'
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    title='Email'
                    placeholder='Doe'
                 
                    testID='email-input'
                />

</View>
                <Input
                    size='xlarge'
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    title='Password'
                    placeholder='Doe'
                   
                    testID='password-input'
                />
</View>

                <View style={[tw`my-2 mt-3 mx-1 self-center items-center`]}>

                    <Button
                        onPress={() => {
                            AsyncStorage.setItem("Language", "en").then(() => {
                                i18n.locale = 'en'
                                I18nManager.forceRTL(false)
                                reloadAsync()
                            })
                        }}
                        // icon={'AntDesign arrowright 24 white'}
                        shape='full'
                        text='Login'

                        
                        testID='login-button'
                    />

                </View>

            </View>
        </Auth>

    )
}

export default Login;
