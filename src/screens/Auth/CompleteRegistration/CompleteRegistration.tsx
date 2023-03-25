import React, { useState } from "react";
import { View } from "react-native";
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";


const CompleteRegistration = () => {
    const [email, setEmail] = useState('')
    return (
        <Auth
            title='Complete setting up your account'
        >
            <View className='py-3 justify-center items-center'>
                <View style={tw`flex-row`}>

                    <Input
                        size='small'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        title='Username'
                        placeholder='Doe'
                        height={hp('5%')}
                    />
                    <Input
                        size='Xsmall'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        title='University'
                        placeholder='Doe'
                        height={hp('5%')}
                    />
                </View>
                <Input
                    size='large'
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    title='Phone'
                    placeholder='Doe'
                    height={hp('5%')}
                />

                <View className='my-2 self-center items-center'>

                    <Button
                        onPress={() => { alert('Pressed') }}
                        icon={'AntDesign arrowright 24 white'}
                        shape='default'
                        text='Create Account'
                        width={wp('80%')}
                        height={hp('5%')}
                    />
                </View>

            </View>
        </Auth>
    )
}


export default CompleteRegistration