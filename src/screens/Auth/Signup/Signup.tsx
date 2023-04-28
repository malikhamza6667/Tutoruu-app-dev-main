import React, { useState,useEffect } from "react";
import { View ,Text, ScrollView, KeyboardAvoidingView, SafeAreaView,Keyboard, Platform} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import Colors from "../../../../assets/Colors";
type Props={
    navigation?:any
}
const Signup:React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectedUni, setSelectedUni] = useState('');
   
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.orange }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
         
    <Auth
        title='Sign Up to Tutoruu'
        subTitle='Already have Account ?'
        fullSizeSubView
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
                     image={require('../../../../assets/googlelogo.png')}
                />
                <Button
                    onPress={() => { alert('Pressed') }}
                    // icon={'AntDesign arrowright 24 white'}
                    shape='default'
                    text='Sign up with Facebook'
                    width={wp('80%')}
                    height={hp('5%')}
                    // image={require('../../../../assets/facebooklogo.png')}
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

        </View> */}
   

 
        <View style={[tw`items-center pt-2`]}>

        
         <View >

<Input
    value={name}
    size="xlarge"
    title='Name'
    height={hp('6%')}
    placeholder='Enter Your Name'
    onChangeText={(text) => { setName(text) }}
/>
</View>
<View>

<Input
    value={email}
    title='Email'
    height={hp('6%')}
    size="xlarge"
    placeholder='Enter Your Email'
    onChangeText={(text) => { setEmail(text) }}
/>
</View>
<View style={[tw`flex-row justify-between`]}>


<View>

    <Input
        value={userName}
        title='User Name'
        height={hp('6%')}
        size="medium"
        placeholder='Enter A UserName'
        onChangeText={(text) => { setUserName(text) }}
    />
</View>



<View
   
    style={[tw`justify-center items-end `,{ width: wp('30%'),}]}>
    <Text
        style={[tw`text-center   text-sm  self-center py-1 pb-2`,{ fontFamily: 'PoppinsMedium' }]}
       
    >University</Text>
    <View
        style={[tw`border border-gray-300 rounded-3xl`,{ width: wp('28%'),borderWidth:1.5,borderColor:Colors.neutralShadow, justifyContent: 'center', height: hp('6%') }]}
        

    >
        <Picker
            placeholder='Select Your Uni'


            selectedValue={selectedUni}
            onValueChange={(itemValue, itemIndex) => {
                setSelectedUni(itemValue)
            }
            }>
            <Picker.Item label="Doe.." value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    </View
    >
</View>

</View>
<View>

<Input
size="xlarge"
    value={phoneNo}
    title='Phone'
    height={hp('6%')}
    placeholder='Enter Your Phone No'
    onChangeText={(text) => { setPhoneNo(text) }}

/>
</View>
<View>

<Input
height={hp('6%')}
    value={password}
    size="xlarge"
    title='Password'
    placeholder='Enter A Password'
    onChangeText={(text) => { setPassword(text) }}

/>
</View>

<View>

<Input
size="xlarge"
height={hp('6%')}
    value={confirmPassword}
    title='Confirm Password'
    placeholder='Confirm Your Passowrd'
    onChangeText={(text) => { setConfirmPassword(text) }}

/>
</View>
<View style={[tw`px-2 py-2 pt-4`]}>

<Button
                 onPress={() => {
                    navigation.navigate('CompleteRegistration', {
                        selectedUniversity: selectedUni,
                        phoneNo,
                        userName,
                    })
                }}
                    icon={'AntDesign arrowright 24 white'}
                    shape='full'
                    text='Sign up with university email'
                 
                />
</View>
                </View>

       
    </Auth>
     
</KeyboardAvoidingView>
</SafeAreaView>

    )
}

export default Signup;
