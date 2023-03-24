import React, { useState } from "react";
import { View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";


const Login = () => {
    const [email, setEmail] = useState('')
    return (<Auth
        title='Welcome Back'
        subTitle='Already have Account ?'
        pressableSubtitleText='Sign Up'
        onPressSubtitle={() => { alert('Pressed') }}
        footerTitle='Reset-Password'
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
                    onPress={() => { alert('Pressed') }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='default'
                    text='Login'
                    width={wp('80%')}
                    height={hp('5%')}
                    testID='login-button'
                />
               
            </View>

        </View>
    </Auth>

    )
}

export default Login;
