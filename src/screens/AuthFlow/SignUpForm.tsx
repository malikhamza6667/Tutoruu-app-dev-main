import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import RouteNames from '../RouteNames'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import { Picker } from '@react-native-picker/picker';

interface Props {
    navigation: any
}

const SignUpForm: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectedUni, setSelectedUni] = useState('');

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
            style={{backgroundColor:Colors.orange}}
            className='flex-1 justify-center'>
                <SafeAreaView/>
                <StatusBar style='light' />
                <View className=' h-20 justify-center' >
                    <Image
                        source={require('../../../assets/authlogo.png')}
                        resizeMode='contain'
                        className='h-48 w-48 self-center'
                    />
                </View>
                <View>

                    <Text
                    style={{fontFamily:'PoppinsBold'}}
                    className='text-white text-2xl py-2  self-center'>
                        {Strings.ST72}
                    </Text>
                    <View className='bg-white p-3 mx-3 my-2 justify-center rounded-2xl'>
                        <Input
                            value={name}
                            title='Name'
                            placeholder='Enter Your Name'
                            onChangeText={(text) => { setName(text) }}
                        />
                        <Input
                            value={email}
                            title='Email'
                            placeholder='Enter Your Email'
                            onChangeText={(text) => { setEmail(text) }}
                        />
                        <View className='flex-row justify-between'>
<View  style={{width:175}}
>

                            <Input
                                value={userName}
                                title='User Name'
                                placeholder='Enter A UserName'
                                onChangeText={(text) => { setUserName(text) }}
                            />
</View>
                            <View 
                          
                            className=" flex-1 p-1 pl-5 ">
                                <Text
                                 style={{fontFamily:'PoppinsMedium'}}
                                    className="text-center mx-3  text-sm  self-start"
                                >University</Text>
                                <View
                               
                                    className=" border border-gray-300 h-11 w-fit rounded-3xl"
                                  style={{justifyContent:'center',marginVertical:5,}}
                                >
                                    <Picker
                            placeholder='Select Your Uni'
                           style={{color: 'black'}}
                           
                                        selectedValue={selectedUni}
                                        onValueChange={(itemValue, itemIndex) =>
                                           {
                                            setSelectedUni(itemValue)}
                                        }>
                                        <Picker.Item label="Doe.." value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>
                                </View
                                >
                            </View>

                        </View>

                        <Input
                            value={phoneNo}
                            title='Phone'
                            placeholder='Enter Your Phone No'
                            onChangeText={(text) => { setPhoneNo(text) }}

                        />
                        <Input
                            value={password}
                            title='Password'
                            placeholder='Enter A Password'
                            onChangeText={(text) => { setPassword(text) }}

                        />
                        <Input
                            value={confirmPassword}
                            title='Confirm Password'
                            placeholder='Confirm Your Passowrd'
                            onChangeText={(text) => { setConfirmPassword(text) }}

                        />
                        <Button
                            color={Colors.orange}
                            title='Create Account'
                            //image='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg'
                            image='arrowright'
                            onPress={() => {
                                navigation.navigate(RouteNames.CompleteRegisteration, {
                                    selectedUniversity:  selectedUni,
                                    phoneNo,
                                    userName,
                                })
                            }}
                        />

                    </View>
                    <View className='flex-row justify-center items-center'>
                        <Text className='text-white text-sm  self-center'>
                            {Strings.ST73}
                        </Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(RouteNames.LoginScreen) }}
                        >
                            <Text className='text-white text-sm border-b-2 border-white font-bold self-center'>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        
    )
}
export default SignUpForm;