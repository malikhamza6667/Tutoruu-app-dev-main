import React, { useState } from "react";
import { View ,Text} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Colors from "../../../../assets/Colors";
import tw from 'twrnc';
type Props={
    navigation?:any
}

const SignUpMethods:React.FC<Props> = ({navigation}) => {
    
    return (<Auth
        title='Sign Up to Tutoruu'
        subTitle='Already have Account ?'
        pressableSubtitleText='Log in'
        onPressSubtitle={() => navigation.navigate('Login')}

    >
        {/* <View className='py-3 justify-center items-center'>



            <View className='my-2 self-center items-center'>

                <Button
                    onPress={() => { alert('Pressed') }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='full'
                    text='Sign up with Google'
                    width={wp('80%')}
                    height={hp('5%')}
                    backgroundColor='white'
                    textColor="black"
                    imagePosition="left"
                    
                   
                />
                <Button
                    onPress={() => { alert('Pressed') }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='default'
                    text='Sign up with Facebook'
                    width={wp('80%')}
                    height={hp('5%')}
                     image={require('../../../../assets/facebooklogo.png')}
                    backgroundColor={Colors.blue}

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

        </View> */}
        <View style={[tw`py-3 justify-center items-center`]}>
            <View style={[tw`px-2 my-2 self-center items-center`]}>
<View style={[tw`mb-2`]}>

        <Button
                    onPress={() => { alert('Pressed') }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='full'
                    
                    text='Sign up with Google'
                    backgroundColor='white'
                    textColor="black"
                    imagePosition="left"
                    image="data:image/png;base64,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"
                   
                />
</View>
<View style={[tw`mb-2`]}>

<Button
                    onPress={() => { alert('Pressed') }}
                    imagePosition="left"
                    // <EvilIcons name="sc-facebook" size={42} color="white" />
                    //  icon={'EvilIcons sc-facebook 30 white'}
                    image="data:image/jpeg;base64,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"
                    shape='full'
                  
                    text='Sign up with Facebook'
                   
                     
                    backgroundColor={Colors.blue}

                />
</View>
<View style={[tw`mb-2`]}>
    
 <Button
                    onPress={() => { navigation.navigate('Signup') }}
                    icon={'AntDesign arrowright 24 white'}
                    shape='full'
                    text='Sign up with university email'
                 
                />
</View>
            </View>
            </View>

    </Auth>

    )
}

export default SignUpMethods;
