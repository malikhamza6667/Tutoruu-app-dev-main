import React, { useState } from "react";
import { View } from "react-native";
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";


const UpdatePassword = ({navigation}) => {
    const [email, setEmail] = useState('')
    return (
        <Auth
            title='Update your password'
            caption="Update your password and log into your account"
        >
            <View className='py-3 justify-center items-center' testID='update-password-screen'>
               

                   
                    <Input
                        size='large'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        title='Password'
                        placeholder='Doe'
                        height={hp('5%')}
                        testID='update-password-input'
                    />
               
                <Input
                    size='large'
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    title='Confirm Password'
                    placeholder='Doe'
                    height={hp('5%')}
                    testID='update-password-input'
                />

                <View style={tw` w-73 mt-3`}>

                    <Button
                        onPress={() => navigation.navigate('MagicLink')}
                        icon={'AntDesign arrowright 24 white'}
                        shape='medium'
                        text='Update password'
                        // width={wp('80%')}
                        height={hp('5%')}
                        testID='update-password-button'
                    />
                </View>

            </View>
        </Auth>
    )
}


export default UpdatePassword