import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import RouteNames from '../RouteNames'
import AuthHeader from '../../components/AuthHeader'


interface Props {
    navigation: any
}

const SignUpHome: React.FC<Props> = ({ navigation }) => {
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

        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.orange, justifyContent: 'space-around' }}>
            <StatusBar style='light' />
            <View
                style={{ flex: 1 }}
                className='justify-center'>


                <AuthHeader />
                <View
                    style={{ height: hp('90%') }}
                    className='justify-center ' >

                    <Text
                        style={{ fontFamily: 'PoppinsSemiBold' }}
                        className='text-white text-xl self-center'>
                        {Strings.ST72}
                    </Text>
                    <View
                        style={{
                            backgroundColor: Colors.white,
                        }}
                        className='m-3 px-2 py-6 justify-center rounded-[20px]'>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.white,
                                // backgroundColor:'pink',
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                shadowOffset: { width: 0, height: 2 },
                                elevation: 7,
                                // alignSelf: 'center',
                                borderRadius: 50,
                                shadowRadius: 5,
                                alignItems: 'center',
                                // justifyContent: 'center',
                                // width: 314,
                                width: wp('88'),
                                height: hp('6'),
                                paddingHorizontal: wp('3%'),
                                marginBottom: hp('1'),
                                flexDirection: 'row'
                            }}
                        >
                            <Image
                                source={require('../../../assets/googlelogo.png')}
                                style={{
                                    height: hp('3'),
                                    width: wp('10'),
                                    resizeMode: 'contain',
                                    alignSelf: 'center'
                                }}
                            />
                            <Text
                                style={{
                                    fontFamily: 'PoppinsBold',
                                    textAlign: 'center',
                                    // backgroundColor: 'pink',
                                    fontSize: hp('1.8'),
                                    width: wp('65%')

                                }}
                            >Sign Up With Google</Text>
                        </TouchableOpacity>
                        <Button
                            height={hp('6%')}
                            color={Colors.blue}
                            title='Sign Up With Facebook'
                            //  image='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'
                            image='facebooklogo'
                            onPress={() => { alert('pressed') }}
                        />
                        <Button
                            color={Colors.orange}
                            image='arrowright'
                            height={hp('6%')}
                            title='Sign Up With University email'
                            //image='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg'
                            onPress={() => { navigation.navigate(RouteNames.SignUpForm) }}
                        />

                    </View>
                    <View className='flex-row justify-center items-center'>
                        <Text
                            style={{ fontFamily: 'PoppinsRegular' }}
                            className='text-white text-sm  self-center'>
                            {Strings.ST73}
                        </Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(RouteNames.LoginScreen) }}
                        >
                            <Text
                                style={{ fontFamily: 'PoppinsSemiBold' }}
                                className='text-white text-sm border-b-2 border-white  self-center'>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>



    )
}
export default SignUpHome;