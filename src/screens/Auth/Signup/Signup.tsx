import React, { useState } from "react";
import { View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";


const Signup = () => {
    const [email, setEmail] = useState('')
    return (<Auth
        title='Sign Up to Tutoruu'
        subTitle='Already have Account ?'
        pressableSubtitleText='Sign Up'
        onPressSubtitle={() => { alert('Pressed') }}
        footerTitle='Reset-Password'
        onPressfooterTitle={() => { alert('Pressed') }}
    >
        <View className='py-3 justify-center items-center'>



            <View className='my-2 self-center items-center'>

                <Button
                    onPress={() => { alert('Pressed') }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='default'
                    text='Sign up with Google'
                    width={wp('80%')}
                    height={hp('5%')}
                    backgroundColor='white'
                    textColor="black"
                    image={require('../../../assets/googlelogo.png')}
                />
                <Button
                    onPress={() => { alert('Pressed') }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='default'
                    text='Sign up with Facebook'
                    width={wp('80%')}
                    height={hp('5%')}
                    image={require('../../../assets/facebooklogo.png')}
                    backgroundColor="#0062E0"

                />
                <Button
                    onPress={() => { alert('Pressed') }}
                    icon={'AntDesign arrowright 24 white'}
                    shape='default'
                    text='Sign up with university email'
                    width={wp('80%')}
                    height={hp('5%')}

                />

            </View>

        </View>
    </Auth>

    )
}

export default Signup;
