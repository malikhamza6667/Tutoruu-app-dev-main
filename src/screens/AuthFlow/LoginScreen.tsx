import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'


import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import RouteNames from '../RouteNames'

import Colors from '../../../assets/Colors'
import Button from '../../components/Buttonnn'
interface Props {
    navigation: any
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (


        <View
            style={{ backgroundColor: Colors.orange }}
            className=' flex-1 justify-between'>
            <StatusBar style='light' />
            <SafeAreaView />

            <View 
          
            className=' justify-center items-center h-12'>
                <Image
                    source={require('../../../assets/authlogo.png')}
                    resizeMode='contain'
                    className='w-48 h-48'
                />


            </View>
            <View className=' py-3' >


                <Text
                    className='text-white  text-xl  self-center'
                        style={{textTransform:'capitalize',fontFamily:'PoppinsBold'}}>
                    {Strings.ST69}
                </Text>
                
                
                <View 
                style={{elevation:5,display:'flex'}}

                className='bg-white m-4 px-3 py-5 pb-5 order-1 flex-grow-0 flex-none  justify-center rounded-2xl'>
                    <Input
                        value={email}
                        title='Email'
                        placeholder='Enter Your Email'
                        onChangeText={(text) => { setEmail(text) }}
                    />
                    <Input
                        value={password}
                        title='Password'
                        placeholder='Enter Your Password'
                        onChangeText={(text) => { setPassword(text) }}
                        secureTextEntry
                    />
                    <Button
                        color={Colors.orange}
                        title='Login'
                        onPress={() => {navigation.navigate('MainStackStudent') }}
                    />
                    <View className='justify-center  justify-items-center flex-row gap-4'>

                        <TouchableOpacity
                        className='bg-white rounded-full'
                        style={{elevation:8,}}
                        >
                            <View className='h-10 w-10 m-2 p-0 items-center justify-center'>

                            <Image
                                source={require('./../../../assets/googlelogo.png')}
                                resizeMode='contain'
                                className='rounded-full h-7 w-7 m-2'
                            />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        className=' rounded-full justify-center'
                        style={{backgroundColor:Colors.blue,elevation:8,shadowColor:Colors.white}}
                        >
                            {/* <Image
                                source={require('./../../../assets/facebooklogo.png')}
                                resizeMode='contain'
                                className='rounded-full h-10 w-10 m-2'
                            /> */}
                            <View className='h-10 w-10 m-2  items-center justify-center'>

                            <EvilIcons   name="sc-facebook" size={42} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View className='flex-row  justify-center items-center'>
                    <Text
                     style={{fontFamily:'PoppinsRegular'}}
                    className='text-white text-sm font-medium self-center'>
                        {Strings.ST70}
                    </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate(RouteNames.SignUpHome) }}
                    >
                        <Text 
                        style={{fontFamily:'PoppinsSemiBold'}}
                        className='text-white text-sm border-b-2 border-white  self-center'>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View className='my-2 py-10'>


                <TouchableOpacity
                    className='align-bottom  justify-center items-center  '
                    onPress={() => { navigation.navigate(RouteNames.ForgetPassword) }}
                >

                    <Text 
                    style={{fontFamily:'PoppinsRegular'}}
                    className='text-white text-sm  self-center'>
                        {Strings.ST71}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default LoginScreen;