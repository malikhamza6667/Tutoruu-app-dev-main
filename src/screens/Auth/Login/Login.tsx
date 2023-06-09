import React, { useEffect, useState } from "react";
import { View, Text, I18nManager, TouchableOpacity ,Image, Alert, ToastAndroid} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from "../../../layouts/Auth/Auth"
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import AsyncStorage from '@react-native-async-storage/async-storage'
 import i18n from "../../../localization/LocalizedStrings/LocalizedStrings";
import { reloadAsync } from 'expo-updates'
import tw from 'twrnc';
import Avatar from "../../../components/Avatar/Avatar";
import Colors from "../../../../assets/Colors";
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { getAuthToken, getUserName, getUserType } from "../../../Services/Redux/features/userSlice/UserSlice";
import bridge from "../../../Services/BaseURL/Baseurl";


type Props={
    navigation?:any
}
const Login:React.FC<Props> = ({ navigation }) => {
const dispatch=useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
const LogUser=()=>{
    if(!email ||!password){
        alert('Email And Password Null!')
    }
    else{
        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const result: boolean = expression.test(email); // true
        if(result){

            bridge.login(`token user{
                name
                email
               
                id
                
            }`,email,password).then(async(user)=>{
                if(!user.user||!user.token){
                    alert('Something Went Wrong')
                }
                else{

                    const name=user.user.name
                    const email=user.user?.email
                    const id=user.user?.id
    
                    const token= user.token
                  
                      
                         await AsyncStorage.setItem('userId',id?.toString())
                         await AsyncStorage.setItem('userName',name?.toString())
                         await AsyncStorage.setItem('userEmail',email?.toString())
                    
                        await AsyncStorage.setItem('userToken',token?.toString())
                        dispatch(getUserName(name))
                        dispatch(getAuthToken(token))
                        setEmail('')
                        setPassword('')
                        ToastAndroid.show('Login Success',ToastAndroid.LONG)
                    
                console.log('User    ',user)
                }
            }).catch((err)=>{
                // console.log('error in login   ',err)
                return Alert.alert('Email Or Password Incorrect!')
            })
        }
        else{
            return Alert.alert('Please Enter A Valid Email Address')
        }
    }
}
    return (
        <Auth

         title={i18n.t('Welcome Back')}
            // title={'Welcome Back'}
             subTitle={i18n.t("Don't Have Account ?")}
            // subTitle={"Don't Have Account"}
            pressableSubtitleText={i18n.t('Sign Up')}
            // pressableSubtitleText={"Sign Up"}
            onPressSubtitle={() => navigation.navigate('SignUpMethods')}
            footerTitle={'Reset-Password'}
            onPressfooterTitle={() => navigation.navigate('ResetPassword')}
        >
            <View style={[tw`py-3 justify-center items-center`]}>
<View >
<View style={[tw`px-2 py-2 self-center items-center`]}>
                <Input
                    size='xlarge'
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    title='Email'
                    height={hp('6%')}
                    placeholder='Doe'
                 
                    testID='email-input'
                />

</View>
<View style={[tw`px-2 py-2 self-center items-center`]}>

                <Input
            
                 height={hp('6%')}
                    size='xlarge'
                    value={password}
                    clearable
                    onChangeText={(text) => { setPassword(text) }}
                    title='Password'
                    placeholder='Doe'
                   type="text"
                    testID='password-input'
                />
</View>
</View>

                <View style={[tw`my-2 mt-3 mx-2 self-center items-center`]}>

                    <Button
                        onPress={() => {
                           LogUser()
                        //    navigation.navigate('UserMainFlow')
                                //                            i18n.locale = 'en'
                                // I18nManager.forceRTL(false)
                                // reloadAsync()
                        }}
                        // icon={'AntDesign arrowright 24 white'}
                        shape='full'
                        text='Login'

                        
                        testID='login-button'
                    />
                    {/* <View style={[tw`flex-row  px-6 justify-evenly my-1`,{width:wp('50%')}]}>
                        <TouchableOpacity
                        style={[tw`my-2`,{elevation:10,borderRadius:9999,}]}
                        onPress={()=>{alert('Pressed')}}
                        >

                        <Image
                       style={{height:hp('7%'),width:wp('14%'),borderRadius:9999}}
                      source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/011/598/471/small/google-logo-icon-illustration-free-vector.jpg"}}
                    resizeMode="contain"
                       />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[tw`my-2`,{elevation:10,backgroundColor:Colors.blue,justifyContent:'center',borderRadius:9999}]}
                        onPress={()=>{alert('Pressed')}}
                        >

                        <Image
                       style={{height:hp('6%'),width:wp('14%'),borderRadius:9999}}
                       source={require('./../../../../assets/facebooklogo.png')}
                    //   source={{uri:"https://www.seekpng.com/png/small/190-1905801_facebook-button-png-facebook-icon-blue-circle.png"}}
                    resizeMode="contain"
                       />
                        </TouchableOpacity>
                        </View> */}
                        <View style={[tw`px-6 py-2 justify-evenly my-1  flex-row`,{width:wp('50%')}]} >

<TouchableOpacity
   onPress={()=>{alert('Pressed')}}
    style={[tw`bg-white rounded-full justify-center`,{
        elevation: 7,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        width: wp('15%'),
        height: hp('7%'),
        paddingHorizontal: wp('3%'),

    }]}
>
    <View
    // className='h-10 w-10 m-2 p-0 items-center justify-center'
    >

        <Image
            source={require('./../../../../assets/googlelogo.png')}
            resizeMode='contain'
           
            style={[tw`rounded-full h-7 w-7 m-2`,{
              
                alignSelf: 'center'
            }]}
        />
    </View>
</TouchableOpacity>
<TouchableOpacity
 onPress={()=>{alert('Pressed')}}
    // style={[tw`rounded-full justify-center`,{ backgroundColor: Colors.blue,height:hp('7%'),width:wp('14.5%'), elevation: 8, shadowColor: Colors.white }]}
    style={[tw`bg-white rounded-full justify-center`,{
        elevation: 7,
        backgroundColor: Colors.blue,
        alignSelf: 'center',
        width: wp('14.5%'),
        height: hp('7%'),
        paddingHorizontal: wp('3%'),

    }]}


>
<Image
            source={require('./../../../../assets/facebooklogo.png')}
            resizeMode='contain'
           
            style={[tw`rounded-full h-10 w-10 m-2`,{
              height:hp('7%'),
              width:wp('14.5%'),
                alignSelf: 'center'
            }]}
        />
    {/* <Image
source={require('./../../../assets/facebooklogo.png')}
resizeMode='contain'
className='rounded-full h-10 w-10 m-2'
/> */}
    {/* <View style={[tw`h-10 w-10 m-2  items-center justify-center`]}>

        <EvilIcons name="sc-facebook" size={42} color="white" />
    </View> */}
</TouchableOpacity>
</View>


                </View>

            </View>
        </Auth>

    )
}

export default Login;


// onPress={() => {
//                             AsyncStorage.setItem("Language", "en").then(() => {
//                                 i18n.locale = 'en'
//                                 I18nManager.forceRTL(false)
//                                 reloadAsync()
//                             })
//                         }}