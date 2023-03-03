import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import RouteNames from '../RouteNames'

import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AuthHeader from '../../components/AuthHeader'
interface Props {
    navigation: any
}

const UpdatePassword: React.FC<Props> = ({ navigation }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
    <SafeAreaView className='flex-1 justify-center'>
   <StatusBar style='light' />
            <View className='flex-1 justify-between'
            style={{backgroundColor:Colors.orange}}
            >
               
             
               <AuthHeader/>
                <View style={{height: hp('85%')}} className='justify-center pb-20 '>
                    <View className='self-center justify-center m-5 items-center'>

                        <Text 
                        style={{fontFamily: 'PoppinsBold'}}
                        className='text-white text-xl text-center  self-center'>
                            {Strings.ST76}
                        </Text>
                        <Text 
                         style={{fontFamily: 'PoppinsRegular'}}
                        className='text-white text-sm px-4 py-2 text-center  self-center'>
                            {Strings.ST77}
                        </Text>
                    </View>

                    <View className='bg-white mx-4 px-3 py-6 items-center justify-center rounded-[20px]'>
<View>

                        <Input
                            value={password}
                            title='Password'
                            placeholder='Enter Your Password'
                            onChangeText={(text) => { setPassword(text) }}
                            secureTextEntry
                        />
</View>
<View>

                        <Input
                            value={confirmPassword}
                            title='Confirm Password'
                            placeholder='Confirm Your Password'
                            onChangeText={(text) => { setConfirmPassword(text) }}
                            secureTextEntry
                        />
</View>
                        <Button
                        height={hp('5%')}
                        width={wp('85%')}
                        image='arrowright'
                            color={Colors.orange}
                            title='Update Password'
                            onPress={() => { alert(password) }}
                        />


                    </View>

                </View>

            </View>
    </SafeAreaView>

    
    )
}
export default UpdatePassword;