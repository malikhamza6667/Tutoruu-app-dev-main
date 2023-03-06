import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import RouteNames from '../RouteNames'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import { Picker } from '@react-native-picker/picker';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
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

        const language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
        else if (language === 'es') {
            Strings = Languages[1].texts
        }
        else {
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (

        <SafeAreaView
            className='flex-1 justify-center'
            style={{ backgroundColor: Colors.orange }}
        >
            <StatusBar style='light' />
            <View

                className='flex-1 justify-center'>
                <View className='justify-center' style={{ height: hp('10%'), top: hp('2%') }}>
                    <Image
                        source={require('../../../assets/authlogo.png')}
                        resizeMode='contain'
                        className='h-40 w-40 self-center'
                    />
                </View>
                <View className=' py-7' style={{ height: hp('85%') }}>

                    <Text
                        style={{ fontFamily: 'PoppinsBold' }}
                        className='text-white text-xl py-2  self-center'>
                        {Strings.ST72}
                    </Text>
                    <View className='bg-white py-4 mx-3 my-2 items-center justify-center rounded-[20px]'>
                        <View>

                            <Input
                                value={name}
                                title='Name'
                                placeholder='Enter Your Name'
                                onChangeText={(text) => { setName(text) }}
                            />
                        </View>
                        <View>

                            <Input
                                value={email}
                                title='Email'
                                placeholder='Enter Your Email'
                                onChangeText={(text) => { setEmail(text) }}
                            />
                        </View>
                        <View className='flex-row justify-between'>


                            <View>

                                <Input
                                    value={userName}
                                    title='User Name'
                                    width={wp('45%')}
                                    placeholder='Enter A UserName'
                                    onChangeText={(text) => { setUserName(text) }}
                                />
                            </View>



                            <View
                                className=' justify-center items-end gap-y-1.5 pb-1'
                                style={{ width: wp('40%') }}>
                                <Text
                                    style={{ fontFamily: 'PoppinsMedium' }}
                                    className="text-center   text-sm  self-center"
                                >University</Text>
                                <View
                                    style={{ width: wp('32%'), justifyContent: 'center', height: hp('5%') }}
                                    className=" border border-gray-300 h-11 w-fit rounded-3xl"

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
                                value={phoneNo}
                                title='Phone'
                                placeholder='Enter Your Phone No'
                                onChangeText={(text) => { setPhoneNo(text) }}

                            />
                        </View>
                        <View>

                            <Input
                                value={password}
                                title='Password'
                                placeholder='Enter A Password'
                                onChangeText={(text) => { setPassword(text) }}

                            />
                        </View>

                        <View>

                            <Input
                                value={confirmPassword}
                                title='Confirm Password'
                                placeholder='Confirm Your Passowrd'
                                onChangeText={(text) => { setConfirmPassword(text) }}

                            />
                        </View>
                        <Button

                            height={hp('5%')}
                            width={wp('85%')}
                            color={Colors.orange}
                            title='Create Account'

                            //image='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg'
                            image='arrowright'
                            onPress={() => {
                                navigation.navigate(RouteNames.CompleteRegisteration, {
                                    selectedUniversity: selectedUni,
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
        </SafeAreaView>

    )
}
export default SignUpForm;